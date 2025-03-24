function truncate(str, max) {
    if (str.length > max) {
        return str.slice(0, max - 3) + "...";
    }
    return str;
}

console.log(truncate('This text will be truncated if it is too long', 25));

const truncate1 = (str, max) => 
    str.length > max ? str.slice(0, max - 3) + "..." : str;

console.log(truncate1('This text will be truncated if it is too long', 25));

