import user from 'services/users'
import type { Request, Response } from 'express'
import { badRequest } from 'lib/http-errors'

async function userAuthController (req: Request, res: Response): Promise<void> {
  const { email, password } = req.body

  const result = await user.auth({ email, password })

  if (result instanceof Error) {
    badRequest(res, result.message); return
  }

  res.json(result)
}

export default userAuthController
