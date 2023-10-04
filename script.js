

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

const amount = document.getElementById('amount')
const upper = document.getElementById("upper")
const lower = document.getElementById('lower')
const digit = document.getElementById('digit')
const special = document.getElementById('special')
const passwordChecks = document.querySelector('.password-checks')

function checker () {
    if (/.*[A-Z].*/.test(enteredPassword.value)) {
        upper.classList.add('green')
        upper.classList.remove('red')
    } else {
        upper.classList.add('red')
        upper.classList.remove('green')
    }

    if (enteredPassword.value.length > 8) {
        amount.classList.add('green')
        amount.classList.remove('red')
    } else {
        amount.classList.add('red')
        amount.classList.remove('green')
    }

    if (/.*[a-z].*/.test(enteredPassword.value)) {
        lower.classList.add('green')
        lower.classList.remove('red')
    } else {
        lower.classList.add('red')
        lower.classList.remove('green')
    }

    if (/.*[\W].*/.test(enteredPassword.value)) {
        special.classList.add('green')
        special.classList.remove('red')
    } else {
        special.classList.add('red')
        special.classList.remove('green')
    }

    if (/.*[\d].*/.test(enteredPassword.value)) {
        digit.classList.add('green')
        digit.classList.remove('red')
    } else {
        digit.classList.add('red')
        digit.classList.remove('green')
    }
}

enteredPassword.addEventListener('input', () => {
    passwordChecks.setAttribute('style', 'display: block')
    checker()
})



function detectMob() {
    return ( ( window.innerWidth <= 800 ) && ( window.innerHeight <= 600 ) );
}


const credits = document.querySelector(".lic")

if (detectMob()) {
    credits.innerHTML = 'Photo by <a target="_blank" class="artist" href="https://unsplash.com/@rgaleriacom">Ricardo Gomez Angel</a> on <a target="_blank" class="artist" href="https://unsplash.com/photos/RjBXz3rtdLw">Unsplash</a>'
}



function getWidth() {
    return Math.max(
      document.body.scrollWidth,
      document.documentElement.scrollWidth,
      document.body.offsetWidth,
      document.documentElement.offsetWidth,
      document.documentElement.clientWidth
    );
} 


if (getWidth() < 801) {
    credits.innerHTML = 'Photo by <a target="_blank" class="artist" href="https://unsplash.com/@rgaleriacom">Ricardo Gomez Angel</a> on <a target="_blank" class="artist" href="https://unsplash.com/photos/RjBXz3rtdLw">Unsplash</a>'
}

window.addEventListener('resize', () => {
    if (getWidth() < 801) {
        credits.innerHTML = 'Photo by <a target="_blank" class="artist" href="https://unsplash.com/@rgaleriacom">Ricardo Gomez Angel</a> on <a target="_blank" class="artist" href="https://unsplash.com/photos/RjBXz3rtdLw">Unsplash</a>'
    }
    if (getWidth() >= 801) {
        credits.innerHTML = 'Photo by <a target="_blank" class="artist" href="https://unsplash.com/@milkbox">Ryan Kwok</a> on <a target="_blank" class="artist" href="https://unsplash.com/photos/xfYMLWgI8ww">Unsplash</a>'
    }
})

