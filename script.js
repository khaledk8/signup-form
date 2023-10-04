

const enteredPassword = document.getElementById('password')
const confPassword = document.getElementById('password-conf')


const passwordPattern = /(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}/
enteredPassword.setAttribute('pattern', passwordPattern.source)


function validatePassword () {
    if (enteredPassword.value != confPassword.value) {
        confPassword.setCustomValidity("Passwords Don't Match")
    } else {
        confPassword.setCustomValidity("")
    }
}

enteredPassword.onchange = validatePassword
confPassword.onkeyup = validatePassword


