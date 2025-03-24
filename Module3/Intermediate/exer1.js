function uppercase(s) {
    return s.split(' ') 
              .map(word => word.charAt(0).toUpperCase() + word.slice(1))
              .join(' ')
}              

console.log(uppercase("los angeles")); // Los Angeles