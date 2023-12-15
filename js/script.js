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
        let expression = result.value;
        let numbers = expression.split(/[-+*/%]/).map(Number);
        let operators = expression.split(/[0-9.]+/).filter((op) => op !== "");

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
