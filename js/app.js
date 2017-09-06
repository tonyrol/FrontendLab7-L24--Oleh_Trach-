import generator from './interface';
import calculate from './calculator';
import output from './output';

window.addEventListener( 'load', function() {
    let mainNode = document.getElementsByTagName( 'main' )[0];
    generator( mainNode );
    document.getElementsByClassName( 'buttonSet' )[0].addEventListener( 'click', function( event ) {
        event.preventDefault();
        let firstNumber = parseInt( document.getElementsByClassName( 'inputSet' )[0].firstChild.value );
        let secondNumber = parseInt( document.getElementsByClassName( 'inputSet' )[0].lastChild.value );
        let buttonText = event.target.innerText;
        let result = calculate(firstNumber, secondNumber, buttonText);
        let resultStr = firstNumber.toString() + ' ' + buttonText + ' ' + secondNumber.toString()+' = '+ result;
        output( resultStr, mainNode );
    });
});

