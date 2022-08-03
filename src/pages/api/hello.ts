// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { withAxiom } from 'next-axiom'

type HelloResponse = {
  text: string
}

async function handler(req: NextApiRequest, res: NextApiResponse<HelloResponse>) {
  res.status(200).json({ text: 'Good bye, World.' })
}

export default withAxiom(handler)
