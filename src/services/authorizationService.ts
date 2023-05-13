export function initAuthService() {
  const submitBtn = document.getElementById('enterBtn')
  const loginBox = document.getElementById('inputLoginBox')
  const passwordBox = document.getElementById('inputPasswordBox')
  submitBtn?.addEventListener('click', async function () {
    const login = (loginBox as HTMLInputElement | null)?.value as string
    const password = (passwordBox as HTMLInputElement | null)?.value as string
    getToken('https://spdauthservice.bsite.net/Authentication/GetToken', login, password)
  })
}

async function getToken(url: string, login: string, password: string) {
  await fetch(url, {
    method: 'Post',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ userName: login, password: password }),
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.token != '') {
        saveToken(data.token)
        saveUniqueId(data.token)
      }
    })
}
function saveToken(token: string): void {
  const date = new Date(Date.now() + 86400e3)
  const dateStrPlusOneDay = date.toUTCString()
  document.cookie = 'token=Bearer ' + token + '; expires=Tue, ' + dateStrPlusOneDay
}
function saveUniqueId(token: string) {
  const base64Url = token.split('.')[1]
  const base64 = decodeURIComponent(
    atob(base64Url)
      .split('')
      .map(function (c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2)
      })
      .join(''),
  )
  document.cookie = 'user_id=' + JSON.parse(base64).user_id
}
