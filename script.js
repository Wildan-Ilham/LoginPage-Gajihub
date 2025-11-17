const password = document.getElementById('password');
const toggle = document.getElementById('toggle');

toggle.addEventListener('click', ()=>{
    if(password.type == 'password'){
        password.type = 'text';
        toggle.classList.add('fa-eye-slash');
        toggle.classList.remove('fa-eye');
    }else{
        password.type = 'password';
        toggle.classList.remove('fa-eye-slash');
        toggle.classList.add('fa-eye');
    }
})