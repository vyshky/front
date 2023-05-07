export function initAuthModule() {
    const submitBtn = document.getElementById('submitBtn');
    const loginBox = document.getElementById('inputLoginBox');
    const passwordBox = document.getElementById('inputPasswordBox');
    submitBtn?.addEventListener('click', function (e) {
        console.log(e.target);
        const login = loginBox?.value;
        const password = passwordBox?.value;
        const data = getToken('https://spdauthservice.bsite.net/Authentication/GetToken', login, password);
        console.log(data);
    });
}
async function getToken(url, login, password) {
    const response = fetch(url, {
        method: 'Post',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ userName: login, password: password }),
    });
    const data = await response;
    return data;
}
async function fetchAsync(url) {
    const response = await fetch(url, { mode: 'no-cors' });
    const data = await response;
    return data;
}
//# sourceMappingURL=autorization.js.map