export function chatViewOpen(): void {
  const appNode = document.getElementById('application')
  const body = document.getElementById('view')
  if (body != null) {
    appNode?.removeChild(body)
  }

  const value = `; ${document.cookie}`
  const parts = value.split(`; user_id=`)
  let userId
  if (parts.length === 2) userId = parts.pop()?.split(';').shift()
  const replaceStr = '<h5>Ваш id(tag) <span style="color:blue">' + userId + '</span> поделитесь им с другом</h5>'

  const div = document.createElement('view')
  div.className = 'container'
  div.id = 'view'
  let innerHtml =
    '<div class="container">' +
    '${userId}' +
    '<div class="mb-3"><label for="inputChanelBox" class="form-label">Кому отправить</label><input type="text" class="form-control" id="inputChanelBox" placeholder="id,tag" /></div><div class="mb-3"><label for="outputMessagesBox" class="form-label">Сообщения</label><textarea class="form-control" id="outputMessagesBox" rows="3" value=""></textarea><button class="btn" id="refreshMessageBtn">Получить сообщения</button></div><div class="mb-3"><label for="inputMessageBox" class="form-label">Поле отправки</label><input type="text" class="form-control" id="inputMessageBox" /><button class="btn" id="inputMessageBtn">Оправить</button></div></div>'
  if (userId == undefined) {
    innerHtml = innerHtml.replace('${userId}', '')
  } else {
    innerHtml = innerHtml.replace('${userId}', replaceStr)
  }

  div.innerHTML = innerHtml
  appNode?.append(div)
}
