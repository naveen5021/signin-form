const password = document.getElementById('password')
const username = document.getElementById('username')
document.getElementById('form').addEventListener('submit', (event) => {
    event.preventDefault()
    valid=true
    const password_value = password.value
    const username_value = username.value
    if(username_value.length<5 || password_value.length<12){
        alert('Password or username length must be longer')
        valid=false
    }
    if(valid){
        alert('your response has been recorded')
    }

})