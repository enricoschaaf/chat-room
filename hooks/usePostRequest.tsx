export function usePostRequest({ url }: { url: string }) {
  return ({ body }) =>
    fetch(url, {
      method: "POST",
      body: JSON.stringify(body)
    })
}
