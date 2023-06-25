// Função para adicionar um valor no campo de resultado
function adicionarValor(valor) {
    var resultado = document.getElementById("resultado");
    resultado.innerText += valor;
  }
  
  // Função para adicionar um operador no campo de resultado
  function adicionarOperador(operador) {
    var resultado = document.getElementById("resultado");
    resultado.innerText += operador;
  }
  
  // Função para adicionar um ponto decimal no campo de resultado
  function adicionarDecimal() {
    var resultado = document.getElementById("resultado");
    resultado.innerText += ".";
  }
  
  // Função para calcular o resultado da expressão
  function calcular() {
    var resultado = document.getElementById("resultado");
    var expressao = resultado.innerText;
    var resultadoFinal = eval(expressao); // Usando a função eval para avaliar a expressão
  
    resultado.innerText = resultadoFinal;
  }
// Função para deletar o último caractere do campo de resultado
function deletarUltimo() {
    var resultado = document.getElementById("resultado");
    resultado.innerText = resultado.innerText.slice(0, -1);
  }
// Função para apagar tudo e limpar o campo de resultado
function apagarTudo() {
    var resultado = document.getElementById("resultado");
    resultado.innerText = "";
  }
      