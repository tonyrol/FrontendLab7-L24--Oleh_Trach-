export default ( mainNode ) => {
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
}