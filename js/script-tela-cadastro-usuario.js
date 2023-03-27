let btnAdd = document.querySelector("#addBotao");

/* criar um evento de clique para o botão que irá executar a function */
btnAdd.addEventListener("click", function(){
    let inputValor = document.querySelector("#meuInput").value;
    if(inputValor === ""){
        alert("Você não preencheu os campos!!")
    }else{
        alert("Cadastro do usuário realizado com sucesso!")
    }
    document.querySelector('#meuInput').value = "";
});