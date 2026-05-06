// Mensagem de alerta
alert("Alerta: Questão 02");

/*
EXPLICAÇÃO DO ATRIBUTO defer:

O atributo "defer" faz com que o script seja baixado em paralelo 
enquanto o HTML é parseado, mas só será executado após o documento 
HTML ter sido completamente carregado.

Comportamento:
1. O navegador continua carregando o HTML enquanto baixa o script
2. O script só executa depois que todo o HTML foi processado
3. Mantém a ordem de execução dos scripts
4. É útil quando o script precisa acessar elementos do DOM que ainda não foram carregados

Sem o defer: o script é executado imediatamente, podendo bloquear o carregamento da página.
Com o defer: a página carrega primeiro, depois o script executa.
*/
