// Мінімум

// Напиши всі можливі варіанти створення функцій.

function number(x,y) {
    return x + y;
}

let number = function(x,y) {
    return x + y;
}

let number = (x,y) => {
    return x + y;
}

// Створи функцію, яка буде виводити кількість переданих їй аргументів.

let data = function () {
    return arguments.length;
}
console.log(data(2,3,4,5,5,5,5,'hello','one',149))

// Напиши функцію, яка приймає 2 числа і повертає :
// -1, якщо перше число менше, ніж друге; 
// 1 - якщо перше число більше, ніж друге; 
// 0 - якщо числа рівні.

let number1 = function (a,b) {
    if (a === b) {
        return 0;
    } else if (a > b) {
        return 1;
    } else if (a < b) {
        return -1;
    } else if ((typeof a) == 'undefined' || (typeof b) == 'undefined') {
        return `Введіть правильні дані`
    }
}
console.log(number1(3,5));

// Напиши функцію, яка обчислює факторіал переданого їй числа.

let factorial = function(number2) {
    let result = 1;
    for (i = 1; i <= number2; i++) {
        result = result * i;
        console.log(result);
    }
    return result;
}
console.log(factorial(7));

// Напиши функцію, яка приймає три окремі цифри і перетворює їх 
// в одне число. Наприклад: цифри 1, 4, 9 перетворяться в число 149.

let numbers = function (a,b,c) {
    if ((typeof a) != 'number' || (typeof b) != 'number' ||  (typeof c) != 'number') {
        return ('Введіть будь-ласка числа');
    } else {
        return `${a}${b}${c}`;
    }
}
console.log(numbers(1,2,3));

// Напиши функцію, яка приймає довжину і ширину прямокутника і обчислює 
// його площу. Якщо 
// в функцію передали 1 параметр, то вона обчислює площу квадрата.

let area = function (a,b) {
    if ((typeof a) != 'number' && (typeof b) != 'number' || a === 0 || b === 0) {
        return `Будь ласка вкажіть правильні дані`;
    } else {
         if (a && b) {
            return a * b;
        } else if ((typeof b) === 'undefined') {
            return a * a;
        } 
    }
}
console.log(area(3));


// Норма

// Напиши функцію, яка перевіряє, чи є передане 
// їй число “досконалим числом”. Досконале число - 
// це число, яке дорівнює сумі всіх своїх дільників.

let number3 = function (a) {
    let result = 0;
    for (i = 1; i < a; i++) {
        if (a % i == 0) {
            result = result + i;
        }
    }
    if (result === a) {
        return `${a} - це досконале число`
    } else {
        return `${a} - це не досконале число`
    }
}

console.log(number3(7));


// Напиши функцію, яка приймає мінімальне і максимальне 
// значення для діапазону, і виводить тільки ті числа з 
// діапазону, які є досконалими. Використовуй написану 
// раніше функцію, щоб дізнатися, чи є це число досконалим.

let range = function (min,max) {
    
    for (let k = min; k <= max; k++) {
        let result = 0;
        for (let i = 1; i < k; i++) {
            if (k % i == 0) {
                result = result + i;
            }
        }
        if (result == k) {
           console.log(k);
        }
        
    }
    
}
range(1, 10000);
