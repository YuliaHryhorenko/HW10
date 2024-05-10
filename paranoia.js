var arr = [
    {
        userName:"Test",
        lastName:"Test",
        email:"test.test@gmail.com>"
    },
    {
        userName:"Dmitro",
        lastName:"Porohov",
        email:"dmitro.porohov@yahoo.com>"
    },
    {
        userName:"Andrii",
        lastName:"",
        email:"andrii@mail.ru>" // Нам такі не підходять
    },
];

// витягую мепом тільки імейли
var allEmails = arr.map(obj => obj.email);

// з усіх адрес робимо один рядок
var fullStr = allEmails.join(" ");

// в створеному рядку прибираємо >
var str = fullStr.replace(/[>]/g, '');

// прописуємо валідацію + домени адрес, гідних довіри
var pattern = /([a-zA-Z0-9]+\.[a-zA-Z0-9]+|[a-zA-Z0-9]+)@(gmail\.com|yahoo\.com)/g;

var emails = str.match(pattern);

// виводимо адреси, гідні довіри
console.log(emails); 
