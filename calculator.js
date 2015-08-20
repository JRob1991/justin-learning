(function() {
  'use strict';

  var number1 = document.getElementById('number1');
  var number2 = document.getElementById('number2');
  var resultElement = document.getElementById('result');
  var btnAdd = document.getElementById('btnAdd');
  var btnSubtract = document.getElementById('btnSubtract');
  var btnMultiply = document.getElementById('btnMultiply');
  var btnDivide = document.getElementById('btnDivide');

  // setup event listeners
  btnAdd.addEventListener('click', function() {
    var result = addNumbers(number1.value, number2.value);
    resultElement.innerHTML = result;
  });

  btnSubtract.addEventListener('click', function(){
    var result = subtractNumbers(number1.value, number2.value);
    resultElement.innerHTML = result;
  });

  btnMultiply.addEventListener('click', function(){
    var result = multiplyNumbers(number1.value, number2.value);
    resultElement.innerHTML = result;
  });

  btnDivide.addEventListener('click', function(){
    var result = divideNumbers(number1.value, number2.value);
    resultElement.innerHTML = result;
  });

  function addNumbers(x, y) {
    x = parseInt(x);
    y = parseInt(y);
    return x + y;
  }

  function subtractNumbers(x, y) {
    x = parseInt(x);
    y = parseInt(y);
    return x - y;
  }

  function multiplyNumbers(x, y) {
    x = parseInt(x);
    y = parseInt(y);
    return x * y;
  }

  function divideNumbers(x, y) {
    x = parseInt(x);
    y = parseInt(y);
    return x / y;
  }

  /*
  var buttons = {};
  var buttonIds = ['btnAdd', 'btnSubtract', 'btnMultiply', 'btnDivide'];

  function getButton(btnId) {
    return document.getElementById(btnId);
  }

  function addToButtonsObject(btnId) {
    buttons[btnId] = getButton(btnId);
  }

  buttonIds.forEach(addToButtonsObject);
  You are adding all of these buttons to the buttons object.
  buttons = {
    'btnAdd': <button id="btnAdd"></button>,
    'btnSubtract': <button id="btnSubtract"></button>,
    'btnMultiply': <button id="btnMultiply"></button>,
    'btnDivide': <button id="btnDivide"></button>
  }
  */



}());
