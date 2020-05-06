import Head from "next/head"
import { UsernameInput } from "../components"

const Index = () => (
  <>
    <Head>
      <title>Choose Username - Chat Room</title>
    </Head>
    <div className="flex justify-center h-full max-w-sm mx-auto p-4 sm:p-6 lg:p-8">
      <div className="flex items-center">
        <UsernameInput />
      </div>
    </div>
  </>
)

export default Index
