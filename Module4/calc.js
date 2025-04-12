document.addEventListener("DOMContentLoaded", function () {
    const input = document.getElementById("calc-input");
    const buttons = document.querySelectorAll(".calc-button");
    const clearButton = document.getElementById("clear-button");
    let input1 = ''
    let input2 = ''
    let input3 = ''
    //const firstPrompt = document.getElementById('first-prompt')
   // const secondPrompt = document.getElementById('second-prompt')
    //const thirdPrompt = document.getElementById('third-prompt')
    //const fourthPrompt = document.getElementById('fourth-prompt')

    //secondPrompt.style.display = 'none'
    //thirdPrompt.style.display = 'none'
    //fourthPrompt.style.display = 'none'

     buttons.forEach(button => {
        button.addEventListener("click", () => {
        input.value += button.textContent;
        });
     });

    input.addEventListener('keydown', (e) => {
        if (
            e.key === 'Backspace' ||
            e.key === 'Delete' ||
            e.key === 'ArrowLeft' ||
            e.key === 'ArrowRight'
        ) {
            return;
        }

        if (!/[0-9+\-*/]/.test(e.key)) {
            e.preventDefault();
        }

        if (e.key === 'equals-button') {
            if (!input1 && !input2) {
                input1 = input.value
                //thirdPrompt.style.display = 'block'
               // firstPrompt.style.display = 'none'
                input.value = ''
            } else if (input1 && !input3) {
                input3 = input.value
               // thirdPrompt.style.display = 'none'
               // secondPrompt.style.display = 'block'
                input.value = ''
            } else {
                input2 = input.value
                input.value = calculateResult()
                //secondPrompt.style.display = 'none'
               // firstPrompt.style.display = 'block'
            }
        }
    })

    clearButton.addEventListener("click", () => {
        input.value = ""
        input1 = ''
        input2 = ''
        input3 = ''
        firstPrompt.style.display = 'block'
    })

    function calculateResult() {
        let result;

        switch(input3) {
            case '+':
                result = parseFloat(input1) + parseFloat(input2);
                break;
            case '-':
                result = parseFloat(input1) - parseFloat(input2);
                break;
            case '*':
                result = parseFloat(input1) * parseFloat(input2);
                break;
            case '/':
                if (input2 === '0') {
                    result = 'Error: Cannot divide by zero';
                } else {
                    result = parseFloat(input1) / parseFloat(input2);
                }
                break;
            default:
                result = 'Invalid Operator';
                break;
        }

        return result
    }
})
