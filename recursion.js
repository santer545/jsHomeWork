function pow(x, n) {

    if (n != 1) {
        return x * pow(x, n - 1);
    } else {
        return x;
    }
}

x = prompt('Введите число', 2);
n = prompt('Введите степень', 2);

if (n <= 1) {
    alert('Степень ' + n + ' не поддерживается значение степени меньше или равной 1');
} else {
    alert(pow(x, n));
}