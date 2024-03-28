const Perguntas = [
  {
    pergunta: "Qual é a forma correta de declarar uma variável em JavaScript?",
    respostas: ["var myVar;", "let myVar;", "const myVar;"],
    correta: 2, // "const myVar;" é a resposta correta
  },
  {
    pergunta: "Qual é o resultado da expressão '3' + 2 em JavaScript?",
    respostas: ["32", "5", "undefined"],
    correta: 0, // "32" é a resposta correta
  },
  {
    pergunta:
      "Qual função é usada para imprimir algo no console em JavaScript?",
    respostas: ["print()", "log()", "console.log()"],
    correta: 2, // "console.log()" é a resposta correta
  },
  {
    pergunta: "Qual destes é um método de array em JavaScript?",
    respostas: ["push()", "add()", "insert()"],
    correta: 0, // "push()" é a resposta correta
  },
  {
    pergunta: "Qual é o operador de igualdade estrita em JavaScript?",
    respostas: ["==", "===", "="],
    correta: 1, // "===" é a resposta correta
  },
  {
    pergunta:
      "O que o método 'charAt()' retorna se o índice fornecido estiver fora dos limites da string?",
    respostas: ["null", "undefined", "Um string vazio ('')"],
    correta: 2, // "Um string vazio ('')" é a resposta correta
  },
  {
    pergunta: "Qual é a saída do código: '2' > 1 em JavaScript?",
    respostas: ["true", "false", "undefined"],
    correta: 0, // "true" é a resposta correta
  },
  {
    pergunta:
      "Qual é o método usado para remover o último elemento de um array em JavaScript?",
    respostas: ["pop()", "remove()", "delete()"],
    correta: 0, // "pop()" é a resposta correta
  },
  {
    pergunta: "Qual destes é um operador de incremento em JavaScript?",
    respostas: ["+=", "++", "+"],
    correta: 1, // "++" é a resposta correta
  },
  {
    pergunta:
      "Qual é a maneira correta de comentar várias linhas de código em JavaScript?",
    respostas: [
      "// Comentário de múltiplas linhas //",
      "/* Comentário de múltiplas linhas */",
      "# Comentário de múltiplas linhas #",
    ],
    correta: 1, // "/* Comentário de múltiplas linhas */" é a resposta correta
  },
];

const quiz = document.querySelector("#quiz");

const template = document.querySelector("template");
//set e um conjunto de obejto especifico o set voce pode deizar ou tirar mas não posso repetir as informações
const corretas = new Set();
const totalDePerguntas = Perguntas.length;
const mostrarTotal = document.querySelector("#acertos strong");
mostrarTotal.textContent = corretas.size + " de " + totalDePerguntas;

//loop ou laço de repetição
for (const item of Perguntas) {
  const quizItem = template.content.cloneNode(true);
  quizItem.querySelector("h3").textContent = item.pergunta;
  for (let resposta of item.respostas) {
    const dt = quizItem.querySelector("dl dt").cloneNode(true);
    dt.querySelector("span").textContent = resposta;
    dt.querySelector("input").setAttribute(
      "name",
      "Pergunta-" + Perguntas.indexOf(item)
    );
    dt.querySelector("input").value = item.respostas.indexOf(resposta);
    dt.querySelector("input").onchange = (event) => {
      const estaCorreta = event.target.value == item.correta; // true
      corretas.delete(item);
      if (estaCorreta) {
        corretas.add(item);
        mostrarTotal.textContent = corretas.size + " de " + totalDePerguntas;
      } else {
        const inputIncorreto = dt
          .querySelector("input")
          .classList.add("errado");
        mostrarTotal.textContent = corretas.size + " de " + totalDePerguntas;
      }
    };

    quizItem.querySelector("dl").appendChild(dt);
  }

  quizItem.querySelector("dl dt").remove();

  //coloca a pergunta na tela
  quiz.appendChild(quizItem);
}
