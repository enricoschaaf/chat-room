import { useRouter } from "next/router"
import { useContext, useRef } from "react"
import { UserContext } from "../utils"

export const UsernameInput = () => {
  const router = useRouter()
  const ref = useRef(null)
  const { setUsername } = useContext(UserContext)

  return (
    <form
      onSubmit={e => {
        e.preventDefault()
        const usernameInput = e.target[0].value.trim().toLowerCase()
        if (usernameInput !== "") {
          setUsername(usernameInput)
          router.push("/chat")
        }
      }}
    >
      <div className="flex rounded-md shadow-sm">
        <div className="relative flex-grow focus-within:z-10">
          <input
            ref={ref}
            autoComplete="off"
            id="username"
            className="form-input block w-full rounded-none rounded-l-md transition ease-in-out duration-150 sm:text-sm sm:leading-5"
            placeholder="Username"
            //@ts-ignore
            enterkeyhint="enter"
          />
        </div>
        <button className="-ml-px relative p-2 border border-gray-300 rounded-r-md text-gray-400 bg-gray-50 hover:text-gray-500 hover:bg-white focus:outline-none focus:shadow-outline-blue focus:border-blue-300 active:bg-gray-100 active:text-gray-500 transition ease-in-out duration-150">
          <svg
            className="h-5 w-5"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M9 5l7 7-7 7"></path>
          </svg>
        </button>
      </div>
    </form>
  )
}
