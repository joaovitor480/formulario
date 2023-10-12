const form = document.querySelector("#container");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const passwordInput = document.querySelector("#senha");
const jobSelect = document.querySelector("#job");
const mensageTextarea = document.querySelector("#mensagem");


form.addEventListener("submit", (event) => {
    event.preventDefault();
    //validando os inputs
    if (nameInput.value === "") {
        alert("Por favor, Preencha seu nome")
        return;
    }

    //verifica se o email e valido
    if (emailInput.value === "" || !isEmailValid(emailInput.value)) {
        alert("Por favor, Preencha seu Email")
        return;
    }

    //varifica o número de digitos
    if (!validatePassword(passwordInput.value, 8) ) {
        alert("A senha precisa de no minimo 8 digitos")
        return;
    }
    //verifica se a situação foi selecionada
    if (jobSelect.value === "") {
        alert("Por favor, Escolha uma opção")
        return;
    }

    //verificar se a mensagem foi preenchida
    if (mensageTextarea.value === "" ) {
        alert("Por favor, Escreva uma mensagem")
        return;
    }

    //se todas os inputs forem preenchidos
    form.submit();
});

function isEmailValid(email){
    //cria uma regex para validar email
    const emailRegex = new RegExp(
        //usuario12@host.com.br
        //validação que aceita a-z, A-Z, 0-9, ._-(caracteres especiais), @ (a divisoria do email), depois usa a primeira espeção novamente para o dominio, depois o (.), depois a estenção do dominio que nao tem numeros, e esse padrão pode acontecer duas vezes EX:.com, .com.br
        /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-z]{2,}$/
    );

    if (emailRegex.test(email)) {
        return true;
    } else {
        return false;
}}

//validando a senha
function validatePassword(password, minDigits) {
    if (password.length >= minDigits) {
        //senha válida
        return true;
    }
    //senha inválida
    return false;
}

//barra de progresso
const inputsBox = document.querySelectorAll("input, select, textarea");
const progressBar = document.querySelector("#progress-bar");

function progressUpdate() {
    //crie uma variavel com valor 0
    let count = 0
    //para cada input se estiver preenchido acrecente mais 1 ao count
    inputsBox.forEach(input => {
        if (input.value != '') {
            count++
        }
        //multiplique o count por um numero que faça sentido para cada codigo
        progressBar.value = count * 20;
    })
}

//para cada input adicione p eventeListener progressUpdate
inputsBox.forEach(input => {
    input.addEventListener('input', progressUpdate);
})