/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__interface__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__calculator__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__output__ = __webpack_require__(3);




window.addEventListener( 'load', function() {
    let mainNode = document.getElementsByTagName( 'main' )[0];
    Object(__WEBPACK_IMPORTED_MODULE_0__interface__["a" /* default */])( mainNode );
    document.getElementsByClassName( 'buttonSet' )[0].addEventListener( 'click', function( event ) {
        let firstNumber = parseInt( document.getElementsByClassName( 'inputSet' )[0].firstChild.value );
        let secondNumber = parseInt( document.getElementsByClassName( 'inputSet' )[0].lastChild.value );
        let buttonText = event.target.innerText;
        let result = Object(__WEBPACK_IMPORTED_MODULE_1__calculator__["a" /* default */])(firstNumber, secondNumber, buttonText);
        let resultStr = firstNumber.toString() + ' ' + buttonText + ' ' + secondNumber.toString()+' = '+ result;
        Object(__WEBPACK_IMPORTED_MODULE_2__output__["a" /* default */])( resultStr, mainNode );
    });
});



/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (( mainNode ) => {
    // div for future result
    let resultSet = document.createElement( 'div' );
    resultSet.classList.add( 'resultSet' );
    mainNode.appendChild( resultSet );

    // input for numbers
    let inputSet = document.createElement( 'div' );
    inputSet.classList.add( 'inputSet' );
    mainNode.appendChild( inputSet );
    let firstInput = document.createElement( 'input' );
    firstInput.setAttribute( 'type', 'number' );
    firstInput.setAttribute( 'placeholder', 'first number' );
    inputSet.appendChild( firstInput );
    let secondInput = document.createElement( 'input' );
    secondInput.setAttribute( 'type', 'number' );
    secondInput.setAttribute( 'placeholder', 'second number' );
    inputSet.appendChild( secondInput );

    // operation buttons
    let buttonSet = document.createElement( 'div' );
    buttonSet.classList.add( 'buttonSet' );
    mainNode.appendChild( buttonSet );
    let addButton = document.createElement( 'button' );
    addButton.innerText = '+';
    buttonSet.appendChild( addButton );
    let subtractButton = document.createElement( 'button' );
    subtractButton.innerText = '-';
    buttonSet.appendChild( subtractButton );
    let divideButton = document.createElement( 'button' );
    divideButton.innerText = '/';
    buttonSet.appendChild( divideButton );
    let multiplyButton = document.createElement( 'button' );
    multiplyButton.innerText = '*';
    buttonSet.appendChild( multiplyButton );
});

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (( firstNumber, secondNumber, operation ) => {
    switch( operation ) {
        case '+':
            return firstNumber + secondNumber;
            break;
        case '-':
            return firstNumber - secondNumber;
            break;
        case '/':
            return firstNumber / secondNumber;
            break;
        case '*':
            return firstNumber * secondNumber;
            break;
        default :
            return console.log("Error, no such operation");
    }
});


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (( result, mainNode ) => {
    if( mainNode.getElementsByClassName('result')[0] ){
        // change result
        mainNode.getElementsByClassName('result')[0].innerText = result;
    } else {
        // create result output and output result
        let resultField = mainNode.getElementsByClassName('resultSet')[0];
        let textLabel = document.createElement( 'label' );
        textLabel.innerText = 'Expression: ';
        resultField.appendChild( textLabel );
        let resultLabel = document.createElement( 'label' );
        resultLabel.classList.add( 'result' );
        resultLabel.innerText = result;
        resultField.appendChild( resultLabel );

    }
});

/***/ })
/******/ ]);