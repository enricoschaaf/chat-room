import { PrismaClient } from "@prisma/client"
import { NextApiRequest, NextApiResponse } from "next"
import Pusher from "pusher"

const prisma = new PrismaClient()

const pusher = new Pusher({
  appId: process.env.PUSHER_APP_ID,
  key: process.env.NEXT_PUBLIC_PUSHER_KEY,
  secret: process.env.PUSHER_SECRET,
  cluster: process.env.NEXT_PUBLIC_PUSHER_CLUSTER,
  useTLS: true
})

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { username, message } = JSON.parse(req.body)
  pusher.trigger("presence-chat-room", "message", { username, message })
  await prisma.message.create({ data: { username, message } })
  res.end()
}
