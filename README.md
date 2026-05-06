# Atividade de JavaScript - IFSP Câmpus Pirituba

**Disciplina:** Desenvolvimento Web: Client  
**Curso:** Análise e Desenvolvimento de Sistemas  
**Período:** 3º semestre

## Sobre a atividade

Esta atividade foi desenvolvida para a disciplina de Web Client, com o objetivo de praticar conceitos fundamentais de JavaScript, incluindo:

- Inserção de scripts inline e externos
- Declaração e manipulação de variáveis
- Cálculos e operações matemáticas
- Criação de classes e objetos
- Arrays e iterações
- Manipulação do DOM

## Estrutura do projeto

```
atividade-javascript-ifsp/
│
├── Questao_01.html          # Alerta inline no head
├── Questao_2.html           # Script externo com defer
├── Questao_02.js            # JavaScript externo da questão 2
├── Questao_03.html          # Página da questão 3
├── Questao_03.js            # Variáveis e cálculos (5 alunos)
├── Questao_04.html          # Página com classe Aluno
├── Questao_04.js            # Classe Aluno e processamento
│
└── README.md                # Este arquivo
```

## Questões resolvidas

### Questão 01
- ✅ Página HTML com região JavaScript no `<head>`
- ✅ Título "Questão 01" no corpo da página
- ✅ Alerta com mensagem "Alerta: Questão 01"

### Questão 02
- ✅ Página HTML com título "Questão 02"
- ✅ Arquivo JavaScript externo (`Questao_02.js`)
- ✅ Alerta com mensagem "Alerta: Questão 02"
- ✅ Atributo `defer` na tag `<script>`
- ✅ Explicação do comportamento do `defer` no código

### Questão 03
- ✅ Arquivo `Questao_03.js` com variáveis para 5 alunos
- ✅ Cálculo da média ponderada (Nota1 × 0,6 + Nota2 × 0,4)
- ✅ Alertas com notas individuais de cada aluno
- ✅ Alertas com notas totais (médias)
- ✅ Página `Questao_03.html` para exibição

### Questão 04
- ✅ Classe `Aluno` com propriedades e métodos
- ✅ Métodos: `nomeCompleto()`, `media()`, `situacao()`
- ✅ Array com 5 objetos da classe `Aluno`
- ✅ Função para percorrer o array e exibir dados
- ✅ Página `Questao_04.html` com layout estilizado
- ✅ Cards informativos para cada aluno
- ✅ Exibição no console e em alertas

## Como executar

1. **Clone o repositório**
```bash
git clone https://github.com/brondileticia/dwba4-semana-08-PT3037801
```

2. **Abra os arquivos no navegador**
   - Navegue até a pasta do projeto
   - Abra cada arquivo `.html` individualmente
   - Ou use uma extensão como Live Server no VS Code

3. **Para visualizar os resultados**
   - As janelas de alerta aparecerão automaticamente
   - Pressione `F12` para ver o console do navegador
   - Os cards da Questão 04 serão exibidos na página

## Exemplo de saída (Questão 04)

```
=== RELATÓRIO DOS ALUNOS ===

📚 Aluno 1: João Silva
   📝 Primeira Nota: 7
   📝 Segunda Nota: 8.5
   📊 Média Ponderada: 7.60
   ✅ Situação: Aprovado

📚 Aluno 2: Maria Oliveira
   📝 Primeira Nota: 9
   📝 Segunda Nota: 7.5
   📊 Média Ponderada: 8.40
   ✅ Situação: Aprovado

📚 Aluno 3: Pedro Santos
   📝 Primeira Nota: 5
   📝 Segunda Nota: 6.5
   📊 Média Ponderada: 5.60
   ✅ Situação: Reprovado

... (mais alunos)

=== ESTATÍSTICAS GERAIS ===
📊 Total de Alunos: 5
✅ Aprovados: 3
❌ Reprovados: 2
📈 Média Geral da Turma: 7.36
🎯 Taxa de Aprovação: 60.0%
```

## Conceitos abordados

### JavaScript
- Variáveis (`let`, `const`)
- Tipos de dados (string, number)
- Operadores aritméticos
- Estruturas condicionais (`if/else`, operador ternário)
- Laços de repetição (`for`, `for...of`)
- Arrays e métodos
- Classes e Programação Orientada a Objetos
- Métodos e propriedades
- Manipulação do DOM
- Eventos

### HTML/CSS
- Estrutura semântica
- Inclusão de scripts (inline e externo)
- Atributo `defer`
- CSS Grid e Flexbox
- Design responsivo

## Explicação do atributo `defer`

O atributo `defer` usado na Questão 02 tem o seguinte comportamento:

| Sem `defer` | Com `defer` |
|-------------|-------------|
| Script executado imediatamente | Script baixado em paralelo |
| Pode bloquear o carregamento da página | Executa após o HTML ser carregado |
| DOM pode não estar pronto | DOM está completamente carregado |

```html
<!-- Com defer - recomendado para scripts que acessam o DOM -->
<script type="text/javascript" src="Questao_02.js" defer></script>
```

## Checklist de entrega

### Questão 01
- [x] Página HTML criada
- [x] JavaScript no `<head>`
- [x] Alerta exibido corretamente

### Questão 02
- [x] Página HTML criada
- [x] Arquivo JS externo vinculado
- [x] Atributo `defer` utilizado
- [x] Explicação do defer incluída

### Questão 03
- [x] Variáveis declaradas para 3+ alunos
- [x] Cálculos realizados corretamente
- [x] Alertas com notas individuais
- [x] Alertas com notas totais

### Questão 04
- [x] Classe Aluno implementada
- [x] Propriedades definidas
- [x] Métodos implementados
- [x] Array com 5+ objetos criado
- [x] Função de exibição funcionando
- [x] Página HTML estilizada

## Autor

**Nome:** Letícia Brondi Carvalheiro
**Curso:** Análise e Desenvolvimento de Sistemas  
**Disciplina:** Desenvolvimento Web: Client  

## Como Contribuir

Este é um projeto acadêmico, mas sugestões são bem-vindas:

1. Faça um Fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/nova-feature`)
3. Commit suas mudanças (`git commit -m 'Adicionando nova feature'`)
4. Push para a branch (`git push origin feature/nova-feature`)
5. Abra um Pull Request
