const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
    '**********': ' ',
};


function decode(expr) {
    let decod = '';
    for (let i = 0; i < (expr.length / 10) ; i++) {
        let ten = expr.slice(i*10, (i*10 + 10));
        let l = '';    
        for (let k = 0; k < 5 ; k++) {
            ten.slice(k*2, (k*2 + 2));
            // console.log(ten.slice(k*2, (k*2 + 2)));
            if (ten.slice(k*2, (k*2 + 2)) == 10) {
                l += '.';
            } else if (ten.slice(k*2, (k*2 + 2)) == 11) {
                l += '-';
            } else if (ten.slice(k*2, (k*2 + 2)) == 00) {
                l += '';
            } else {
                l += '**';
            }
        }
     
        for (let el in MORSE_TABLE) {
            if (el == l) decod += MORSE_TABLE[el];
            
            // expr.slice(0, 10).indexOf(el[0]);
        }    
    }
    return decod;   
}
//decode(expr);
module.exports = {
    decode
};