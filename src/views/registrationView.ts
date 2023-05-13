export function registrationViewOpen(): void {
  const appNode = document.getElementById('application')
  const body = document.getElementById('view')
  if (body != null) {
    appNode?.removeChild(body)
  }

  const div = document.createElement('view')
  div.className = 'container'
  div.id = 'view'
  div.innerHTML =
    '<div class="container text-center" width="50%"><h1>Регистрация</h1><div class="container"><div class="mb-3 row"><label for="inputLogin" class="col-sm-2 col-form-label">Логин*</label><div class="col-sm-10"><input type="text" class="form-control" id="inputLoginBox" value="" placeholder="введите логин" /></div></div><div class="mb-3 row"><label for="inputPassword" class="col-sm-2 col-form-label">Пароль*</label><div class="col-sm-10"><input type="password" class="form-control" id="inputPasswordBox" value="" placeholder="введите пароль" /></div></div><div class="mb-3 row"><label for="inputLogin" class="col-sm-2 col-form-label">Эмайл</label><div class="col-sm-10"><input type="text" class="form-control" id="inputEmailBox" value="" placeholder="введите email(Не обязательно)"/></div></div><div class="mb-3 row"><label for="inputLogin" class="col-sm-2 col-form-label">Роли*</label><div class="col-sm-10"><input type="text" class="form-control" id="inputRolesBox" placeholder="введите roles(Через запятую перечислить роли)" value="spd-chat-service"/></div></div><button id="registrationBtn" type="submit" class="btn btn-secondary">Отправить</button></div></div>'
  appNode?.append(div)
}
