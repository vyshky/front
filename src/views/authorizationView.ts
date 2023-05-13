export function authorizationViewOpen(): void {
  const appNode = document.getElementById('application')
  const body = document.getElementById('view')
  if (body != null) {
    appNode?.removeChild(body)
  }

  const div = document.createElement('view')
  div.className = 'container'
  div.id = 'view'
  div.innerHTML =
    '<div class="container text-center" width="50%"><h1>Вход</h1><div class="container"><div class="mb-3 row"><label for="inputLogin" class="col-sm-2 col-form-label">Логин*</label><div class="col-sm-10"><input type="text" class="form-control" id="inputLoginBox" value="" placeholder="введите логин" /></div></div><div class="mb-3 row"><label for="inputPassword" class="col-sm-2 col-form-label">Пароль*</label><div class="col-sm-10"><input type="password" class="form-control" id="inputPasswordBox" value="" placeholder="введите пароль" /></div></div><button id="enterBtn" type="submit" class="btn btn-secondary">Отправить</button></div></div>'
  appNode?.append(div)
}
