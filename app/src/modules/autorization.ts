// post https://spdauthservice.bsite.net/Authentication/GetToken
// body : {userName: "admin", password: "admin"}
// response : {"token":"eyJhbGc...","message":"Success"}
// при нажатии кнопки, найти поля логин и пароль и отправить запрос в сервис

// TODO:: сохранить токен в кукесы

export function initAuthModule(): void {
  const submitBtn = document.getElementById('submitBtn')
  const loginBox = document.getElementById('inputLoginBox')
  const passwordBox = document.getElementById('inputPasswordBox')
  submitBtn?.addEventListener('click', function (e) {
    console.log(e.target)
    const login = (loginBox as HTMLInputElement | null)?.value as string
    const password = (passwordBox as HTMLInputElement | null)?.value as string
    const data = getToken('https://spdauthservice.bsite.net/Authentication/GetToken', login, password)
    console.log(data)
  })
}

async function getToken(url: string, login: string, password: string) {
  const response = fetch(url, {
    method: 'Post',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ userName: login, password: password }),
  })
  const data = await response
  return data
}

async function fetchAsync(url: string) {
  const response = await fetch(url, { mode: 'no-cors' })
  const data = await response
  return data
}
