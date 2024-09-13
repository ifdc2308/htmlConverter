document.getElementById("submitBtn").addEventListener("click", function () {
    // captura o valor de textarea
    var textInsert = document.getElementById("valorInserido").value;
    // exibir o valor
    document.getElementById("resultado").innerHTML = textInsert;

    // log no console do valor captura
    console.log("valor capturado", textInsert);

    localStorage.setItem("valor inserido", textInsert);
});


