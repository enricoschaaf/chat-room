import { useRef } from "react"
import TextareaAutosize from "react-textarea-autosize"
import { usePostRequest } from "../hooks"

export const MessageInput = () => {
  const sendMessage = usePostRequest({ url: "/api/pusher/message" })
  const ref = useRef(null)

  return (
    <form
      className="flex-shrink-0 flex border border-gray-200 p-4 sm:p-6 lg:p-8"
      onSubmit={e => {
        e.preventDefault()
        const messageInput = e.target[0].value
        if (messageInput !== "") {
          sendMessage({
            body: {
              username: JSON.parse(localStorage.getItem("username")),
              message: messageInput
            }
          })
          e.target[0].value = ""
        }
      }}
    >
      <label htmlFor="message" className="sr-only">
        Message
      </label>
      <div className="flex-grow flex justify-end relative rounded-md shadow-sm">
        <TextareaAutosize
          inputRef={ref}
          id="message"
          placeholder="Message"
          className="form-input resize-none w-full sm:text-sm sm:leading-5"
          maxRows={6}
          onKeyDown={e => {
            if (
              e.ctrlKey === false &&
              e.altKey == false &&
              e.shiftKey === false &&
              e.key === "Enter"
            ) {
              e.preventDefault()
              if (ref.current.value !== "") {
                sendMessage({
                  body: {
                    username: JSON.parse(localStorage.getItem("username")),
                    message: ref.current.value
                  }
                })
                ref.current.value = ""
              }
            }
          }}
          //@ts-ignore
          enterkeyhint="enter"
        />
      </div>
      <span className="self-end rounded-md shadow-sm ml-2">
        <button
          type="submit"
          className="inline-flex items-center px-4 py-2 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition ease-in-out duration-150"
        >
          <svg className="h-6 w-6" viewBox="0 0 24 24">
            <path
              fill="currentColor"
              d="M1.101 21.757L23.8 12.028 1.101 2.3l.011 7.912 13.623 1.816-13.623 1.817-.011 7.912z"
            ></path>
          </svg>
        </button>
      </span>
    </form>
  )
}
