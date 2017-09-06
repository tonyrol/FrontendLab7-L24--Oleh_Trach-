export default ( result, mainNode ) => {
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
}