const usuario = document.getElementById("usuario");
const senha = document.getElementById("senha");

document.getElementsByClassName("formLogin")[0].addEventListener("submit", function (e) {
e.preventDefault();

if (usuario.value.trim()=="" || senha.value.trim()==""){
    alert("preencha os campos");
}

else{
    alert("login bem-sucedido");
    window.location.href="file:///C:/Users/Senai/Documents/aula2902/pages/pokimon.html"
}

});