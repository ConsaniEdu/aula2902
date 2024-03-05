const btnConfirmar = document.getElementById("btnPesquisar");
const inputPoke = document.getElementById("txtBusca");

btnConfirmar.addEventListener("click", function(){
    const url = "https://pokeapi.co/api/v2/pokemon/";
    fetch(url + inputPoke.value.trim())
    .then(response =>{
        if (!response.ok){
            throw new Error(`nao foi possivel encontrar o pokemon: ${pokemonNameOrnumber}`);  
        }
        return response.json();
    })
    .then(data => {
        console.log(data);
    });
});
