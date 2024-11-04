document.getElementById("submitBtn").addEventListener("click", function () {
  // captura o valor de textarea
  var textInsert = document.getElementById("valorInserido").value;
  // exibir o valor
  document.getElementById("resultado").innerHTML = textInsert;

  // log no console do valor captura
  console.log("valor capturado", textInsert);

  localStorage.setItem("valor inserido", textInsert);
});

// text.html
document.getElementById("submitText").addEventListener("click", function () {
  var editor = tinymce.get("textEditor");
  var content = editor.getContent({ format: "raw" });

  // Exibe o conteúdo HTML puro no resultadoText
  document.getElementById("resultadoText").textContent = content;

  // Log no console do valor capturado
  console.log("Valor HTML puro do editor:", content);
});
