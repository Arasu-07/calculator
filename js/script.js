let result = document.getElementById("result");

let display = (num) =>{
    result.value += num;
}

let calculate = () => {

    // try {
    //     result.value = eval(result.value);
    // } catch (error) {
    //     result.value = "Error";
    // }
 
          //or//

    try {
        let expression = result.value;// value in the input box saved, '23+3-4*5'
        let numbers = expression.split(/[-+*/%]/).map(Number);// can remove the symbols b\w the num and stored every num in a array and a separate substring for each num => ['23','3','4','5']
        let operators = expression.split(/[0-9.]+/).filter((op) => op !== "");// can remove the number and store the symbols in a array; filter method should be used for removing the empty substring => ['', '', '+', '-', '*', '']

        let total = numbers[0];

        for (let i = 0; i < operators.length; i++) {
            let nextNumber = numbers[i + 1];
            switch (operators[i]) {
                case '+':
                    total += nextNumber;
                    break;
                case '-':
                    total -= nextNumber;
                    break;
                case '*':
                    total *= nextNumber;
                    break;
                case '/':
                    total /= nextNumber;
                    break;
                case '%':
                    total = (total / 100) * nextNumber;
                    break;
                default:
                    break;
            }
        }
        result.value = total;
    } catch (error) {
        result.value = "Error";
    }   

}


function clearValue(){
    result.value = '';
}

function del(){
    result.value = result.value.slice(0, -1);
}
