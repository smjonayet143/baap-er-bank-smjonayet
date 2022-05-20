document.getElementById('login-submit').addEventListener('click', function () {
    console.log('clickd');

    const emailFiled = document.getElementById('user-email');
    const userEmail = emailFiled.value;
    
    // get user password
    const passwordFiled = document.getElementById('user-password');
    const passwordUser = passwordFiled.value;

    if(userEmail == 'sontan@gmail.com' && passwordUser == 'secret') {
        window.location.href = 'banking.html';
    }
})


