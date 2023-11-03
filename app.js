

function result() {
    const number = parseInt(document.getElementById('number').value);
    
    const result_ = document.getElementById('result_');

    let sum = number;

    for (let i = 0; i <= number; i++) {
        if(i % 2 === 0){
            sum += i
        }
    }

    result_.textContent = `La suma de todos sus pares es igual a ${sum}`
}
