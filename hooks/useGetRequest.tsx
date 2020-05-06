import { useEffect, useState } from "react"

export function useGetRequest({ url }: { url: string }) {
  const [data, setData] = useState(null)

  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(({ data }) => setData(data))
  }, [url])

  return { data }
}
