document.getElementById("submitBtn").addEventListener("click", function () {
    // captura o valor de textarea
    var textInsert = document.getElementById("valorInserido").value;
    document.getElementById("modalConfirm").showModal();


    // exibir o valor
    document.getElementById("resultado").innerHTML = textInsert;

    // log no console do valor captura
    console.log("valor capturado", textInsert);

    localStorage.setItem("valor inserido", textInsert);
});

//fechar o modal

document.getElementById("closeModal").addEventListener("click", function(){
    document.getElementById("modalConfirm").close();
});
