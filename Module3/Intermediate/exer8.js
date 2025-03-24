//a & b)
const phoneBookDEF = new Map([
        ['Dion', '0278892145'],
        ['Eirene', '0800465771'],
        ['Fiona', '0291643578']
    ]);
  
//c) update caroline's number
const phoneBookABC = new Map([
        ['Annabelle', '0412312343'],
        ['Barry', '0433221117'],
        ['Caroline', '0455221182']
    ]);
  
phoneBookABC.set('Caroline', '0210456671')
  
//d) print phonebook
function printPhoneBook(contacts) {
    for (let [name, phoneNumber] of contacts) {
        console.log(`${name}: ${phoneNumber}`)
    }
}

printPhoneBook(phoneBookABC);
printPhoneBook(phoneBookDEF);
  
//e) combine phonebooks
const phoneBook = new Map([...phoneBookABC, ...phoneBookDEF])
printPhoneBook(phoneBook);

//f)print all
console.log("List of names in phone book:")
    for (let name of phoneBook.keys()) {
        console.log(name);
    }
  