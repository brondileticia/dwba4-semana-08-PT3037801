// 1.1. Classe Aluno
class Aluno {
    // 1.1.1. Propriedades
    constructor(primeiroNome, segundoNome, primeiraNota, segundaNota) {
        this.primeiroNome = primeiroNome;
        this.segundoNome = segundoNome;
        this.primeiraNota = primeiraNota;
        this.segundaNota = segundaNota;
    }
    
    // 1.1.2.1. Método nomeCompleto
    nomeCompleto() {
        return this.primeiroNome + " " + this.segundoNome;
    }
    
    // 1.1.2.2. Método media: (primeiraNota * 0,6) + (segundaNota * 0,4)
    media() {
        return (this.primeiraNota * 0.6) + (this.segundaNota * 0.4);
    }
    
    // 1.1.2.3. Método situacao: se media > 6 "Aprovado", senão "Reprovado"
    situacao() {
        return this.media() > 6 ? "Aprovado" : "Reprovado";
    }
}

// 1.2. Array que contenha 5 objetos Aluno
const alunos = [
    new Aluno("João", "Silva", 7.0, 8.5),
    new Aluno("Maria", "Oliveira", 9.0, 7.5),
    new Aluno("Pedro", "Santos", 5.0, 6.5),
    new Aluno("Ana", "Souza", 10.0, 9.0),
    new Aluno("Carlos", "Lima", 4.0, 5.0)
];

// 1.3. Função que percorre o array e mostra os dados
function mostrarDadosAlunos() {
    console.log("=== DADOS DOS ALUNOS ===");
    console.log("");
    
    let mensagem = "=== RELATÓRIO DOS ALUNOS ===\n\n";
    
    for (let i = 0; i < alunos.length; i++) {
        const aluno = alunos[i];
        const media = aluno.media();
        const situacao = aluno.situacao();
        
        // Formata a mensagem
        mensagem += `📚 Aluno ${i + 1}: ${aluno.nomeCompleto()}\n`;
        mensagem += `   📝 Primeira Nota: ${aluno.primeiraNota}\n`;
        mensagem += `   📝 Segunda Nota: ${aluno.segundaNota}\n`;
        mensagem += `   📊 Média Ponderada: ${media.toFixed(2)}\n`;
        mensagem += `   ✅ Situação: ${situacao}\n\n`;
        
        // Exibe no console
        console.log(`Aluno ${i + 1}: ${aluno.nomeCompleto()}`);
        console.log(`  Primeira Nota: ${aluno.primeiraNota}`);
        console.log(`  Segunda Nota: ${aluno.segundaNota}`);
        console.log(`  Média: ${media.toFixed(2)}`);
        console.log(`  Situação: ${situacao}`);
        console.log("---");
    }
    
    // Exibe o alerta com todos os dados
    alert(mensagem);
    
    // Exibe estatísticas adicionais
    mostrarEstatisticas();
}

// Função adicional para mostrar estatísticas
function mostrarEstatisticas() {
    let aprovados = 0;
    let reprovados = 0;
    let somaMedias = 0;
    
    for (const aluno of alunos) {
        const media = aluno.media();
        somaMedias += media;
        if (aluno.situacao() === "Aprovado") {
            aprovados++;
        } else {
            reprovados++;
        }
    }
    
    const mediaGeral = somaMedias / alunos.length;
    
    const estatisticas = `=== ESTATÍSTICAS GERAIS ===\n\n` +
                        `📊 Total de Alunos: ${alunos.length}\n` +
                        `✅ Aprovados: ${aprovados}\n` +
                        `❌ Reprovados: ${reprovados}\n` +
                        `📈 Média Geral da Turma: ${mediaGeral.toFixed(2)}\n` +
                        `🎯 Taxa de Aprovação: ${((aprovados/alunos.length)*100).toFixed(1)}%`;
    
    console.log("\n" + estatisticas);
    alert(estatisticas);
}

// Executa a função para mostrar os dados ao carregar a página
mostrarDadosAlunos();
