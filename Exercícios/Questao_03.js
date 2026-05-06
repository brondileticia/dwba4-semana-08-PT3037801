// Declaração das variáveis para 3 alunos

// ALUNO 1: João da Silva
let nomeAluno1 = "João da Silva";
let primeiraNota1 = 7;      // inteiro
let segundaNota1 = 8.5;     // real
let multiplicacao1_1 = primeiraNota1 * 0.6;
let multiplicacao1_2 = segundaNota1 * 0.4;
let notaTotal1 = multiplicacao1_1 + multiplicacao1_2;

// ALUNO 2: Maria Oliveira
let nomeAluno2 = "Maria Oliveira";
let primeiraNota2 = 9;
let segundaNota2 = 7.5;
let multiplicacao2_1 = primeiraNota2 * 0.6;
let multiplicacao2_2 = segundaNota2 * 0.4;
let notaTotal2 = multiplicacao2_1 + multiplicacao2_2;

// ALUNO 3: Pedro Santos
let nomeAluno3 = "Pedro Santos";
let primeiraNota3 = 5;
let segundaNota3 = 6.5;
let multiplicacao3_1 = primeiraNota3 * 0.6;
let multiplicacao3_2 = segundaNota3 * 0.4;
let notaTotal3 = multiplicacao3_1 + multiplicacao3_2;

// ALUNO 4: Ana Souza
let nomeAluno4 = "Ana Souza";
let primeiraNota4 = 10;
let segundaNota4 = 9;
let multiplicacao4_1 = primeiraNota4 * 0.6;
let multiplicacao4_2 = segundaNota4 * 0.4;
let notaTotal4 = multiplicacao4_1 + multiplicacao4_2;

// ALUNO 5: Carlos Lima
let nomeAluno5 = "Carlos Lima";
let primeiraNota5 = 4;
let segundaNota5 = 5;
let multiplicacao5_1 = primeiraNota5 * 0.6;
let multiplicacao5_2 = segundaNota5 * 0.4;
let notaTotal5 = multiplicacao5_1 + multiplicacao5_2;

// Mensagens de alerta para cada aluno (notas individuais)
alert("=== ALUNO 1 ===\n" +
      "Nome: " + nomeAluno1 + "\n" +
      "Primeira Nota: " + primeiraNota1 + "\n" +
      "Segunda Nota: " + segundaNota1);

alert("=== ALUNO 2 ===\n" +
      "Nome: " + nomeAluno2 + "\n" +
      "Primeira Nota: " + primeiraNota2 + "\n" +
      "Segunda Nota: " + segundaNota2);

alert("=== ALUNO 3 ===\n" +
      "Nome: " + nomeAluno3 + "\n" +
      "Primeira Nota: " + primeiraNota3 + "\n" +
      "Segunda Nota: " + segundaNota3);

alert("=== ALUNO 4 ===\n" +
      "Nome: " + nomeAluno4 + "\n" +
      "Primeira Nota: " + primeiraNota4 + "\n" +
      "Segunda Nota: " + segundaNota4);

alert("=== ALUNO 5 ===\n" +
      "Nome: " + nomeAluno5 + "\n" +
      "Primeira Nota: " + primeiraNota5 + "\n" +
      "Segunda Nota: " + segundaNota5);

// Mensagens de alerta para as notas totais (médias)
alert("=== NOTAS TOTAIS (MÉDIAS) ===\n" +
      "Aluno: " + nomeAluno1 + " - Nota Total: " + notaTotal1.toFixed(2) + "\n" +
      "Aluno: " + nomeAluno2 + " - Nota Total: " + notaTotal2.toFixed(2) + "\n" +
      "Aluno: " + nomeAluno3 + " - Nota Total: " + notaTotal3.toFixed(2) + "\n" +
      "Aluno: " + nomeAluno4 + " - Nota Total: " + notaTotal4.toFixed(2) + "\n" +
      "Aluno: " + nomeAluno5 + " - Nota Total: " + notaTotal5.toFixed(2));

// Exibindo no console também para referência
console.log("=== DETALHAMENTO DOS CÁLCULOS ===");
console.log("Aluno: " + nomeAluno1);
console.log("  Primeira Nota (7) * 0,6 = " + multiplicacao1_1);
console.log("  Segunda Nota (8.5) * 0,4 = " + multiplicacao1_2);
console.log("  Total = " + notaTotal1.toFixed(2));
console.log("---");
console.log("Aluno: " + nomeAluno2);
console.log("  Primeira Nota (9) * 0,6 = " + multiplicacao2_1);
console.log("  Segunda Nota (7.5) * 0,4 = " + multiplicacao2_2);
console.log("  Total = " + notaTotal2.toFixed(2));
console.log("---");
console.log("Aluno: " + nomeAluno3);
console.log("  Primeira Nota (5) * 0,6 = " + multiplicacao3_1);
console.log("  Segunda Nota (6.5) * 0,4 = " + multiplicacao3_2);
console.log("  Total = " + notaTotal3.toFixed(2));
