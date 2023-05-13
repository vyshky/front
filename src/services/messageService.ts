export function initMessagesService(): void {
  const submitBtn = document.getElementById('inputMessageBtn')
  const chanelBox = document.getElementById('inputChanelBox')
  const outputMessagesBox = document.getElementById('outputMessagesBox')!
  const inputMessagesBox = document.getElementById('inputMessageBox')
  const refreshMessageBtn = document.getElementById('refreshMessageBtn')
  refreshMessageBtn?.addEventListener('click', function () {
    getMessages('https://spdchatservice.bsite.net/AnonymousChat/GetMessages', outputMessagesBox)
  })

  submitBtn?.addEventListener('click', function () {
    const chanel = (chanelBox as HTMLInputElement | null)?.value as string
    const inputMessages = (inputMessagesBox as HTMLInputElement | null)?.value as string
    inputMessage('https://spdchatservice.bsite.net/AnonymousChat/SendMessage', chanel, inputMessages)
  })
}
async function inputMessage(url: string, chanelCode: string, message: string) {
  const value = `; ${document.cookie}`
  const parts = value.split(`; token=`)
  let token
  if (parts.length === 2) token = parts.pop()?.split(';').shift()
  fetch(url, {
    method: 'Post',
    headers: {
      'Content-Type': 'application/json',
      Authorization: token ? token : '',
    },
    body: JSON.stringify({ chanelCode: chanelCode, content: message }),
  })
}

async function getMessages(url: string, outputMessagesBox: HTMLElement) {
  const value = `; ${document.cookie}`
  const parts = value.split(`; token=`)
  let token
  if (parts.length === 2) token = parts.pop()?.split(';').shift()
  await fetch(url, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: token ? token : '',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      (outputMessagesBox as HTMLInputElement).value = ''
      for (let i = 0; i < data.messages.length; ++i) {
        (outputMessagesBox as HTMLInputElement).value +=
          'Отправитель - ' +
          data.messages[i].chanelId +
          '\n' +
          'Время отправки - ' +
          data.messages[i].sendTime +
          '\n' +
          'Сообщение - ' +
          data.messages[i].content +
          '\n\r'
      }
    })
}
