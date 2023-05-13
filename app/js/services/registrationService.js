export function initRegistrationService() {
    const submitBtn = document.getElementById('registrationBtn');
    const loginBox = document.getElementById('inputLoginBox');
    const passwordBox = document.getElementById('inputPasswordBox');
    const emailBox = document.getElementById('inputEmailBox');
    const rolesBox = document.getElementById('inputRolesBox');
    submitBtn?.addEventListener('click', function (e) {
        const login = loginBox?.value;
        const password = passwordBox?.value;
        const email = emailBox?.value;
        const roles = rolesBox?.value;
        const data = registration('https://spdauthservice.bsite.net/Authentication/CreateUser', login, password, email, roles);
    });
}
async function registration(url, login, password, email, roles) {
    const rolesArr = roles.split(',');
    const response = fetch(url, {
        method: 'Post',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ userName: login, password: password, email: email, roles: rolesArr }),
    });
    const data = await response;
    return data;
}
//# sourceMappingURL=registrationService.js.map