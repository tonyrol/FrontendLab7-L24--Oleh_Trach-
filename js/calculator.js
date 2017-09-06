export default ( firstNumber, secondNumber, operation ) => {
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
};
