/* eslint-disable @typescript-eslint/no-misused-promises */

import { Router } from 'express'

// Controllers
import userAuthController from './users/user-auth'
import userDeleteController from './users/user-delete'
import userInfoController from './users/user-info'
import userSignupController from './users/user-signup'
import userUpdateController from './users/user-update'

// Middlewares
import ensureAuthenticated from '../middlewares/ensure-authenticated'
import limiter from '../middlewares/rate-limit'

const usersRouter = Router()

// Users related
usersRouter.post('/auth', userAuthController)
usersRouter.post('/delete', ensureAuthenticated, userDeleteController)
usersRouter.get('/info', limiter, userInfoController)
usersRouter.post('/signup', userSignupController)
usersRouter.put('/update', ensureAuthenticated, userUpdateController)

export default usersRouter