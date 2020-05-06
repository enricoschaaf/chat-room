import { AppProps } from "next/app"
import Pusher from "pusher-js"
import { useEffect, useState } from "react"
import { usePersistedState } from "../hooks"
import "../styles/index.css"
import { PusherContext, UserContext } from "../utils"

function MyApp({ Component, pageProps }: AppProps) {
  const [username, setUsername] = usePersistedState("username", null)
  const [pusher, setPusher] = useState(null)
  useEffect(() => {
    setPusher(
      new Pusher(process.env.NEXT_PUBLIC_PUSHER_KEY, {
        cluster: process.env.NEXT_PUBLIC_PUSHER_CLUSTER,
        auth: {
          params: { username }
        },
        authEndpoint: "/api/pusher/auth"
      })
    )
  }, [username])

  return (
    <UserContext.Provider value={{ username, setUsername }}>
      <PusherContext.Provider value={pusher}>
        <div className="fixed flex flex-col h-full w-full">
          <Component {...pageProps} />
        </div>
      </PusherContext.Provider>
    </UserContext.Provider>
  )
}

export default MyApp
