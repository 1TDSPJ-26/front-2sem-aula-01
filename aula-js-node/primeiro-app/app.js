let nome = 'Ana'; //No momento da atribuição ocorre a tipagem dinâmica da variável, ou seja, o JavaScript entende que a variável é do tipo string. Isso, em JavaScript. É pouco definido, podendo gerar confusão.

/*
Exemplo de concatenação:
console.log ('Olá, '+nome + '!'); 
*/

// A template string é mais recomendada de uso, pois é mais elegante
console.log (`Olá, ${nome}!`); //Exemplo de template string contendo interpolação de variável

// --------------------------------------------------------------------------------------------------
/*
O Node.js é uma plataforma de desenvolvimento que permite a execução de código JavaScript fora do navegador.
Por exemplo: A curtida no Instagram.
Sem o Node.js, aquele coração é só uma imagem pintada de vermelho, sem valor. 
Com o Node.js, o coração ganha o valor de uma curtida, que é armazenada em um banco de dados.
*/

/*
O NPM (Node Package Manager) é o gerenciador de pacotes do Node.js. Ele permite que você instale e gerencie bibliotecas e dependências para os projetos Node.js. Com o NPM, você pode facilmente adicionar funcionalidades ao seu aplicativo, como frameworks, bibliotecas de utilitários e muito mais. 
*/

/* 
Nas sprints não deve ser utilizado o NPM, pois o objetivo é aprender a programar. 
Caso fosse para um cliente real, o NPM poderia ser utilizado livremente, pois o objetivo seria entregar um produto funcional.
*/

/* 
No arquivo package.json, o script "start" foi adicionado para permitir a execução do aplicativo com o comando "npm run start".
Agora, todas as vezes que eu quiser rodar o código do app.js, basta digitar no terminal esse comando.
O json é uma forma de armazenar dados em formato de texto. Facilita o manuseio e agiliza a leitura de dados. É muito utilizado em APIs, pois é uma forma de enviar e receber dados entre sistemas diferentes.
*/

/* 
O TypeScript é uma capa que colocamos no JavaScript. O objetivo principal do TypeScript é trazer a segurança e a previsibilidade que linguagens tradicionais de backend (como Java ou C#) possuem para o mundo do desenvolvimento web front-end.
Dizem que ele é o JavaScript com superpoderes.
Ele tem um compilador próprio que converte o código TypeScript em JavaScript.
*/
// --------------------------------------------------------------------------------------------------