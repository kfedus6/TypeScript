//let x: number = 2;
//let y: boolean = true;
//console.log(x + y);
var arrUser = [];
var addUser = function () {
    var newLogin = prompt('Login:');
    var newPassword = +prompt('Password:');
    arrUser[arrUser.length] = { login: newLogin, password: newPassword };
    return arrUser;
};
var seeBalance = function () {
    var login = prompt('Login:');
    var password = +prompt('Password:');
    var sum = { sum: 0 };
    arrUser.filter(function (item) {
        if (item.login === login && item.password === password) {
            Object.assign(item, sum);
            console.log("".concat(item.login, ": ").concat(item.sum));
        }
        else {
            console.log("неверний логин или пароль");
        }
    });
    return arrUser;
};
var menu;
var exit;
do {
    menu = parseInt((prompt("1-Открыть счет\n 2-Посмотреть баланс\n 3-Снять деньги с баланса\n 4-Пополнить баланс\n 5-Выйти")));
    switch (menu) {
        case 1: {
            addUser();
            console.log(arrUser);
            break;
        }
        case 2: {
            seeBalance();
            console.log(arrUser);
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
