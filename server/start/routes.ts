/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

const AuthController = () => import('#controllers/auth_controller')
const SecurityController = () => import('#controllers/securities_controller')
import router from '@adonisjs/core/services/router'

router.post('/api/auth/v1/register', [AuthController, 'register'])
router.post('/api/auth/v1/login', [AuthController, 'login'])

router.get('/api/security/v1/aes_public_key', [SecurityController, 'getAesPublicKey'])
router.get('/api/security/v1/captcha', [SecurityController, 'getCaptcha'])
