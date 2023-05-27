/*
    1. Crie um script que exiba a mensagem "Hello World!" em um alerta no navegador.
*/
    //let message = 'Hello World!'
    //alert(message)
/*
    2. Crie um script que declare duas variáveis e exiba o resultado da soma entre elas.
*/
    //let valorA = 10
    //let valorB = 20
    //console.log(valorA + valorB)
/*
    3. Crie um script que declare uma variável e verifique se o seu valor é um número.
        Se for, exiba a mensagem "É um número", caso contrário, exiba a mensagem "Não é um número".
        💡 Para saber o tipo de dado você pode usar o operador `typeof`
*/
    //let variableA = 1;
    //let variableB = 'teste';

    //console.log(`1º Caso: ${!isNaN(variableA) ? 'É um número' : 'Não é um número'}`);
    //console.log(`2º Caso: ${!isNaN(variableB) ? 'É um número' : 'Não é um número'}`);

/*
    4. Crie um script que declare uma variável e verifique se o seu valor é uma string. 
    Se for, exiba a mensagem "É uma string", caso contrário, exiba a mensagem "Não é uma string".
*/
    const list = [ 1, 'teste', null, true, undefined];

    function isString(text) {
        return typeof text === 'string' ? 'É uma string' : 'Não é uma string';
    }

    for (const item of list) {
        console.log(`${item}: ${isString(item)}`);        
    }

/*
    5. Crie um script que declare uma variável e verifique se o seu valor é um booleano. Se for, exiba a mensagem "É um booleano", caso contrário, exiba a mensagem "Não é um booleano".
*/

/*
    6. Crie um script que declare duas variáveis e exiba o resultado da subtração entre elas.
*/

/*
    7. Crie um script que declare duas variáveis e exiba o resultado da multiplicação entre elas.
*/

/*
    8. Crie um script que declare duas variáveis e exiba o resultado da divisão entre elas.
*/

/*
    9. Crie um script que declare uma variável e verifique se o seu valor é um número par. Se for, exiba a mensagem "É um número par", caso contrário, exiba a mensagem "Não é um número par".
*/

/*
    10. Crie um script que declare uma variável e verifique se o seu valor é um número ímpar. Se for, exiba a mensagem "É um número ímpar", caso contrário, exiba a mensagem "Não é um número ímpar". 
*/