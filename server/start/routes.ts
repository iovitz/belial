/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

const UsersController = () => import('#controllers/users_controller')
const SecuritiesController = () => import('#controllers/securities_controller')
import router from '@adonisjs/core/services/router'

router.get('/api/user/v1/info', [UsersController, 'getHello'])

router.get('/api/encrypt/v1/aes_public_key', [SecuritiesController, 'getAesPublicKey'])
router.get('/api/encrypt/v1/captcha', [SecuritiesController, 'getCaptcha'])
