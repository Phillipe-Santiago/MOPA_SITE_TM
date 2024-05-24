function entrar() {
    const username = document.getElementById('usuario').value;

    const password = document.getElementById('senha').value;

    function hex_md5(password) {
        return rstr2hex(rstr_md5(password));
    }

    const hashedPassword = hex_md5(password);
    if (username === 'Mopa' && hashedPassword === 'e53d8aef5926fe9129c7b4b7ef4f5358') {
        localStorage.setItem('token', 'meu-token-de-autenticacao');
        localStorage.setItem('senha', password)
        window.location.href = 'mainPage.html';
        localStorage.setItem('userLogado', JSON.stringify(userValid))

    } else {
        alert('Use as credenciais que eu te mandei BURRO !!!!');
    }
}