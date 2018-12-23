'use strict';
// Домашнее задание
// Дом. задание №3
/*
  Есть массив logins с логинами пользователей. Напишите скрипт добавления логина в массив logins.
  
  Добавляемый логин должен:
    - проходить проверку на длину от 4 до 16-ти символов включительно
    - быть уникален, то есть отсутствовать в массиве logins
 
  🔔 Разбейте задачу на подзадачи с помощью функций.
  
  Напишите функцию isLoginValid(login), в которой проверьте количество символов 
  параметра login и верните true или false в зависимости от того, попадает ли длина параметра 
  в заданный диапазон от 4-х до 16-ти символов включительно.
 
  Создайте функцию isLoginUnique(allLogins, login), которая принимает логин и список 
  всех логинов как параметры и проверяет наличие login в массиве allLogins, возвращая true 
  если такого логина еще нет и false если логин уже используется.
  Далее напишите функцию addLogin(allLogins, login) которая:
    - Принимает новый логин и массив всех логинов как параметры
    - Проверяет валидность логина используя вспомогательную функцию isLoginValid
    - Если логин не валиден, прекратить исполнение функции addLogin 
      и вернуть строку 'Ошибка! Логин должен быть от 4 до 16 символов'
    - Если логин валиден, функция addLogin проверяеть уникальность логина 
      с помощью функции isLoginUnique
    - Если isLoginUnique вернет true, addLogin добавляет новый логин 
       в logins и возвращает строку 'Логин успешно добавлен!'
    - Если isLoginUnique вернет false, тогда addLogin не добавляет 
       логин в массив и возвращает строку 'Такой логин уже используется!'
       
  🔔 Принцип единственной ответственности функции - каждая функция делает что-то одно. Это 
     позволяет переиспользовать код и изменять логику работы функции только в одном месте, 
     не затрагивая работу программы в целом. Предикатные функции возвращают только true или 
     false. Такие функции принято называть начиная с is: isLoginUnique и isLoginValid в нашем случае.
      - isLoginUnique только проверяет есть ли такой логин в массиве и возвращает true или false. 
      - isLoginValid только проверяет валидный ли логин и возвращает true или false.
      - addLogin добавляет или не добавляет логин в массив. 
      При этом для проверок условия добавления 
        используются результаты вызовов других функций - isLoginUnique и isLoginValid.
*/

const logins = ["Mango", "robotGoogles", "Poly", "Aj4x1sBozz", "qwerty123"];

const messError = 'Ошибка! Логин должен быть от 4 до 16 символов';
const messSuccess = 'Логин успешно добавлен';
const messLogExist = 'Такой логин уже используется!';

const isLoginValid = (login) => {
  const elemLength = login.length;
  if (elemLength >= 4  && elemLength <= 16) return true;
  return false;   
};

const isLoginUnique = (allLogins, login) => {
  if (allLogins.includes(login)) return false;
  return true;
};

const addLogin = function(login) {
  if (!isLoginValid(login)) return messError;  
  if (isLoginUnique(logins, login)) {
      logins.push(login);
      return messSuccess;
  } else {
    return messLogExist;
    } 
};

// Вызовы функции для проверки
console.log(addLogin('Ajax')); // 'Логин успешно добавлен!'
console.log(addLogin('robotGoogles')); // 'Такой логин уже используется!'
console.log(addLogin('Zod')); // 'Ошибка! Логин должен быть от 4 до 16 символов'
console.log(addLogin('jqueryisextremelyfast')); // 'Ошибка! Логин должен быть от 4 до 16 символов'
  