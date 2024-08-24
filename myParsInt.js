
function parseInt(str, base = 10) {
    let sign = 1;
    if (str[0] === '-') {
        sign = -1;
        str = str.slice(1);
    } else if (str[0] === '+') {
        str = str.slice(1);
    }
    if (base < 2 || base > 36) {
        throw new Error('Error');
    }
    
    let result = 0;
    const digits = '0123456789abcdefghijklmnopqrstuvwxyz';
    
    for (let i = 0; i < str.length; i++) {
        const char = str[i].toLowerCase(); 
        const value = digits.indexOf(char);
    
       if (value === -1 || value >= base) {
           throw new Error('Error');
        }
    
        result = result * base + value;
    }
    return sign * result;
}
    
        console.log(parseInt("123"));   