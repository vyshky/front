import { initAuthService } from '../services/authorizationService.js'
import { initRegistrationService } from '../services/registrationService.js'
import { initMessagesService } from '../services/messageService.js'
import { authorizationViewOpen } from '../views/authorizationView.js'
import { registrationViewOpen } from '../views/registrationView.js'
import { chatViewOpen } from '../views/chatView.js'
document.querySelector("[href='#chat']")?.addEventListener('click', function () {
  chatViewOpen()
  initMessagesService()
})
document.querySelector("[href='#registration']")?.addEventListener('click', function () {
  registrationViewOpen()
  initRegistrationService()
})
document.querySelector("[href='#autorization']")?.addEventListener('click', function () {
  authorizationViewOpen()
  initAuthService()
})
