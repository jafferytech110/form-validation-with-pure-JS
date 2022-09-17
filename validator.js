// function to get id from html
let getId = (id) => document.getElementById(id);

// function to get array of divs of same className
let getClasses = (classes) => document.getElementsByClassName(classes)

const username = getId('username')
const email = getId('email')
const password = getId('password')
const submitButton = getId('submit')
const form = getId('form')

// all error divs are stored in an array
let errorMsg = getClasses('error'),
    successIcon = getClasses('success-icon'),
    failureIcon = getClasses('failure-icon');


// failure and success icons function
let showIcons = (which, num) => {
    if(which === 'success') {
        successIcon[num].style.opacity = '1'
        failureIcon[num].style.opacity = '0'
    } else {
        successIcon[num].style.opacity = '0'
        failureIcon[num].style.opacity = '1'
    }
}

// check username, email and password functions

let checkUsername = () => {
    if(!username.value.trim()) {
        errorMsg[0].innerHTML = 'Please provide username'
        showIcons('failure', 0)
    } else {
        errorMsg[0].innerHTML = ''
        showIcons('success', 0)
    }
}

// email checking

let checkEmail = () => {
    
    let validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if(!email.value.trim()) {
        errorMsg[1].innerHTML = 'Email input cannot be empty'
        showIcons('failure',1)
    } else if(!email.value.trim().match(validRegex)) {
        errorMsg[1].innerHTML = 'Email input cannot be invalid'
        showIcons('failure',1)
    } else {
        errorMsg[1].innerHTML = ''
        showIcons('success',1)
    }
}

// check password 
let checkPassword = () => {
    if(!password.value.trim()) {
        errorMsg[2].innerHTML = 'Password cannot be empty'
        showIcons('failure',2)
    } else {
        errorMsg[2].innerHTML = ''
        showIcons('success',2)
    }
}

// event Listener
form.addEventListener('submit', (e) => {
    e.preventDefault()
    checkUsername()
    checkEmail()    
    checkPassword()
})
