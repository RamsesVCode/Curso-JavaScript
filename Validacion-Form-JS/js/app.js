const validation = {
    name : /^[a-zA-Z ]{4,25}$/,
    surname : /^[a-zA-Z ]{4,25}$/,
    nick : /^[a-zA-Z0-9\_\-]{8,20}$/,
    email : /^[a-zA-Z0-9\.\#\_\-]+@[a-zA-Z]+\.[a-zA-Z]+$/, 
    password : /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\#\_])(?!.*\s).{8,15}$/
}

const $form = document.getElementById('form');
const $inputs = document.querySelectorAll('#form input');

//TRATAMOS LOS ERRORES Y EXITOS
function classes(expresion,value,name){
    if(expresion.test(value)){
        document.getElementById(`${name}`).classList.add('correct');
        document.getElementById(`${name}`).classList.remove('incorrect');
        document.getElementById(`sms-${name}`).classList.remove('show');
        document.getElementById(`sms-${name}`).classList.add('hide');
    }else{
        document.getElementById(`${name}`).classList.add('incorrect');
        document.getElementById(`${name}`).classList.remove('correct');
        document.getElementById(`sms-${name}`).classList.remove('hide');
        document.getElementById(`sms-${name}`).classList.add('show');
    }
}
//COMPARAR AMBAS PASSWORDS
function verify(){
    var $pass1 = document.getElementById('password');
    var $pass2 = document.getElementById('password2');
    // console.log($pass2.value)
    if($pass1.value != $pass2.value){
        if($pass2.value!='')
            $pass2.classList.add('incorrect');
        $pass2.classList.remove('correct');
    }else{
        $pass2.classList.add('correct');
        $pass2.classList.remove('incorrect');
    }
}

//VALIDAMOS DE LA ENTRADA DEL INPUT
function validar(event){
    switch(event.target.name){
        case 'name':
            classes(validation.name,event.target.value,'name');
            break;
        case 'surname':
            classes(validation.surname,event.target.value,'surname');
            break;
        case 'nick':
            classes(validation.nick,event.target.value,'nick');
            break;
        case 'email':
            classes(validation.email,event.target.value,'email');
            break;
        case 'password':
            classes(validation.password,event.target.value,'password');
            verify();
            break;
        case 'password2':
            verify();
            break;
    }
}

//CREACION DE LISTENER PARA CADA INPUT
$inputs.forEach((input)=>{
    input.addEventListener('keyup',(event)=>{
        validar(event);
    })
    input.addEventListener('blur',(event)=>{
        validar(event);
    })
})
// console.log(event.target.name)

//FORMULARIO QUE RECIBE DATOS
$form.addEventListener('click',(event)=>{
    event.preventDefault();
})