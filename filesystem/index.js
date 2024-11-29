function hide(password) {
    let r = '';
    for (let index = 0; index < password.length; index++) {
        r += '*';
    }

    return r;
}
function login(username, password) {
    console.log(`Login as ${username} using ${hide(password)}!`);
}

login(process.env.USERNAME, process.env.PASSWORD);