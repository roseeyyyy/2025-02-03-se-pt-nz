function camelCase(cssProp) {
    return cssProp
      .split('-')
      .map((word, index) => {
        return index === 0 ? word : word.charAt(0).toUpperCase() + word.slice(1);
      })
      .join('')
}
  
//console.log(camelCase('margin-left')) // marginLeft
//console.log(camelCase('background-image')) // backgroundImage
//console.log(camelCase('display')) // display
  
//for loop
function camelCaseFor(cssProp) {
    let words = cssProp.split('-')
    let result = words[0]
    for (let i = 1; i < words.length; i++) {
      result += words[i].charAt(0).toUpperCase() + words[i].slice(1);
    }
    return result
}
  
console.log(camelCaseFor('margin-left')) // marginLeft
console.log(camelCaseFor('background-image')) // backgroundImage
console.log(camelCaseFor('display')) // display

//forEach loop

function camelcaseforEach(cssProp) {
    let words = cssProp.split('-')
    let result = words[0]
    words.slice(1).forEach(word => {
      result += word.charAt(0).toUpperCase() + word.slice(1);
    })
    return result
}
  
console.log(camelcaseforEach('margin-left')) // marginLeft
console.log(camelcaseforEach('background-image')) // backgroundImage
console.log(camelcaseforEach('display')) // display
  
function camelcaseCapitalize(cssProp) {
    return cssProp
      .split('-')
      .map((word, index) => 
        index === 0 
          ? word 
          : word.charAt(0).toUpperCase() + word.slice(1)
      )
      .join('')
  }
  
  console.log(camelcaseCapitalize('margin-left')) // marginLeft
  console.log(camelcaseCapitalize('background-image')) // backgroundImage
  console.log(camelcaseCapitalize('display')) // display
  