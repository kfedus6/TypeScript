//let x: number = 2;
//let y: boolean = true;
//console.log(x + y);
var arrUser = [];
var addUser = function () {
    var newLogin = prompt('Login:');
    var newPassword = +prompt('Password:');
    var sum = 0;
    arrUser[arrUser.length] = { login: newLogin, password: newPassword, sum: sum };
    return arrUser;
};
var watchBalance = function () {
    var login = prompt('Login:');
    var password = +prompt('Password:');
    arrUser.filter(function (item) {
        if (item.login === login && item.password === password) {
            console.log("".concat(item.login, ": ").concat(item.sum));
        }
        else {
            console.log('неверний логин или пароль');
        }
    });
};
var takeMoney = function () {
    var login = prompt('Login:');
    var password = +prompt('Password:');
    arrUser.forEach(function (item) {
        if (item.login === login && item.password === password) {
            var money = +prompt('Снять деньги с баланса:');
            item.sum -= money;
            console.log("".concat(item.login, ": ").concat(item.sum));
        }
        else {
            console.log('неверний логин или пароль');
        }
    });
    return arrUser;
};
var addSum = function () {
    var login = prompt('Login:');
    arrUser.forEach(function (item) {
        if (item.login === login) {
            var money = +prompt('Пополнить баланс:');
            item.sum += money;
            console.log("".concat(item.login, ": ").concat(item.sum));
        }
        else {
            console.log('неверний логин');
        }
    });
};
var menu;
var exit;
do {
    menu = parseInt((prompt("1-Открыть счет\n 2-Посмотреть баланс\n 3-Снять деньги с баланса\n 4-Пополнить баланс\n 5-Выйти")));
    switch (menu) {
        case 1: {
            console.log(addUser());
            break;
        }
        case 2: {
            watchBalance();
            break;
        }
        case 3: {
            takeMoney();
            break;
        }
        case 4: {
            addSum();
            break;
        }
        case 5: {
            exit = true;
            console.log('Ви вийшли');
            break;
        }
        default: {
            console.log('error');
            break;
        }
    }
} while (!exit);
