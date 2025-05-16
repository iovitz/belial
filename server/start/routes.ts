/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import HomeController from '#controllers/home_controller'
import StatusesController from '#controllers/statuses_controller'
import { middleware } from '#start/kernel'
import router from '@adonisjs/core/services/router'

const AuthController = () => import('#controllers/auth_controller')
const SecurityController = () => import('#controllers/securities_controller')
const FriendController = () => import('#controllers/friends_controller')
const UsersController = () => import('#controllers/users_controller')

router.get('/', [HomeController, 'getIndex'])

router.post('/api/auth/v1/register', [AuthController, 'register'])
router.post('/api/auth/v1/login', [AuthController, 'login'])
router.get('/api/auth/v1/logout', [AuthController, 'logout']).use(middleware.auth())

router
  .post('/api/friend/v1/application', [FriendController, 'createFriendApplication'])
  .use(middleware.auth())
router
  .post('/api/friend/v1/operate_application', [FriendController, 'operateApplication'])
  .use(middleware.auth())
router.get('/api/friend/v1/list', [FriendController, 'getMyFriends']).use(middleware.auth())
router
  .get('/api/friend/v1/applications', [FriendController, 'getMyApplication'])
  .use(middleware.auth())

router.get('/api/user/v1/me', [UsersController, 'getOwnUserInfo']).use(middleware.auth())
router.get('/api/user/v1/:userId', [UsersController, 'getUserInfo']).use(middleware.auth())
router.patch('/api/user/v1/:userId', [UsersController, 'updateUserInfo']).use(middleware.auth())

router.get('/api/security/v1/aes_public_key', [SecurityController, 'getAesPublicKey'])
router.get('/api/security/v1/captcha', [SecurityController, 'getCaptcha'])

router.get('/api/status', [StatusesController, 'getStatus'])
router.get('/api/status/test', [StatusesController, 'getTest'])
