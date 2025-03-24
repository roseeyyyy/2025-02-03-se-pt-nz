let twentyCents = 0.20
let tenCents = 0.10

console.log(`${twentyCents} + ${tenCents} = ${twentyCents + tenCents}`)
// 0.2 + 0.1 = 0.30000000000000004

//a) it can cause inaccurancy or errors

//b
function currencyAddition(float1, float2) {
        const factor = 100
        return (Math.round(float1 * factor) + Math.round(float2 * factor)) / factor
    }
  
//c
function currencyOperation(float1, float2, operation) {
    const factor = 100
    let result

    const int1 = Math.round(float1 * factor)
    const int2 = Math.round(float2 * factor)

    switch (operation) {
      case '+':
        result = (int1 + int2) / factor
        break;
      case '-':
        result = (int1 - int2) / factor
        break;
      case '*':
        result = (int1 * int2) / (factor * factor) 
        break;
      case '/':
        result = (int1 / int2)
        break;
    }
  
    return result
}
  
console.log(0.3 == currencyAddition(0.1, 0.2))
console.log(0.3 == currencyOperation(0.1, 0.2, '+'))
console.log(0.3 == currencyOperation(0.1, 0.2, '+', 3))

