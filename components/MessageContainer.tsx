import { useContext, useEffect, useState } from "react"
import { usePusherBind } from "../hooks"
import { UserContext } from "../utils"

export const MessageContainer = () => {
  const { username } = useContext(UserContext)
  const [messages, setMessages] = useState([])
  const { data } = usePusherBind({
    channel: "presence-chat-room",
    event: "message"
  })
  useEffect(() => {
    if (data) {
      setMessages(previousState => [...previousState, data])
    }
  }, [data])

  return (
    <div className="flex-grow overflow-y-auto">
      <div className="flex flex-col justify-end space-y-4 sm:space-y-6 lg:space-y-8 p-4 sm:p-6 lg:p-8">
        {messages.map((message, i) => (
          <span
            style={{ maxWidth: "90%" }}
            className={`flex flex-col flex-shrink-0 overflow-hidden shadow rounded-lg px-2 py-1 ${
              message.username === username
                ? "self-end rounded-tr-none text-indigo-50 bg-indigo-600"
                : "self-start rounded-tl-none text-gray-50 bg-gray-500"
            }`}
            key={i}
          >
            <span>{message.username}</span>
            <span>{message.message}</span>
          </span>
        ))}
      </div>
    </div>
  )
}
