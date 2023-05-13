export function initRegistrationService(): void {
  const submitBtn = document.getElementById('registrationBtn')
  const loginBox = document.getElementById('inputLoginBox')
  const passwordBox = document.getElementById('inputPasswordBox')
  const emailBox = document.getElementById('inputEmailBox')
  const rolesBox = document.getElementById('inputRolesBox')
  submitBtn?.addEventListener('click', function (e) {
    const login = (loginBox as HTMLInputElement | null)?.value as string
    const password = (passwordBox as HTMLInputElement | null)?.value as string
    const email = (emailBox as HTMLInputElement | null)?.value as string
    const roles = (rolesBox as HTMLInputElement | null)?.value as string
    const data = registration(
      'https://spdauthservice.bsite.net/Authentication/CreateUser',
      login,
      password,
      email,
      roles,
    )
  })
}

async function registration(url: string, login: string, password: string, email: string, roles: string) {
  const rolesArr = roles.split(',')
  const response = fetch(url, {
    method: 'Post',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ userName: login, password: password, email: email, roles: rolesArr }),
  })
  const data = await response
  return data
}

// async function fetchAsync(url: string) {
//   const response = await fetch(url, { mode: 'no-cors' })
//   const data = await response
//   return data
// }
