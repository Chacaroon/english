/**
 * Created by chacaroon on 21.04.17.
 */

// Инициализация датабазы!
// Загрузим mongoose
var mongoose = require('mongoose');
// Заменим библиотеку Обещаний (Promise) которая идет в поставку с mongoose (mpromise)
mongoose.Promise = require('bluebird');
// На Bluebird
// Подключимся к серверу MongoDB
// В дальнейшем адрес сервера будет загружаться с конфигов
mongoose.connect("mongodb://Chacaroon:Ukrnet299812@ds133340.mlab.com:33340/heroku_2s9jxmmk",{
    server:{
        poolSize: 10
        // Поставим количество подключений в пуле
        // 10 рекомендуемое количество для моего проекта.
        // Вам возможно понадобится и то меньше...
    }
});

// В случае ошибки будет вызвано данная функция
mongoose.connection.on('error', function(err)
{
    console.error("Database Connection Error: " + err);
// Скажите админу пусть включит MongoDB сервер :)
console.error('Админ сервер MongoDB Запусти!');
process.exit(2);
});

// Данная функция будет вызвано когда подключение будет установлено
mongoose.connection.on('connected', function()
{
    // Подключение установлено
    console.info("Succesfully connected to MongoDB Database");
// В дальнейшем здесь мы будем запускать сервер.
});