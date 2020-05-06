import Head from "next/head"
import { MessageContainer, MessageInput } from "../components"

const Chat = () => {
  // const router = useRouter()
  // const { username } = useContext(UserContext)

  // useEffect(() => {
  //   console.log(username)
  //   if (username === "") {
  //     router.push("/")
  //   }
  // }, [router, username])

  return (
    <>
      <Head>
        <title>Chat Room</title>
      </Head>
      <MessageContainer />
      <MessageInput />
    </>
  )
}

export default Chat
