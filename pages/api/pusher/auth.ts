import { NextApiRequest, NextApiResponse } from "next"
import Pusher from "pusher"

//@ts-ignore
const pusher = new Pusher({
  appId: process.env.PUSHER_APP_ID,
  key: process.env.NEXT_PUBLIC_PUSHER_KEY,
  secret: process.env.PUSHER_SECRET,
  useTLS: true
})

export default (req: NextApiRequest, res: NextApiResponse) => {
  const socketId = req.body.socket_id
  const channel = req.body.channel_name
  const username = req.body.username
  const auth = pusher.authenticate(socketId, channel, {
    // eslint-disable-next-line @typescript-eslint/camelcase
    user_id: username
  })
  res.send(auth)
}
