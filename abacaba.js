const alpha = Array.from(Array(26)).map((e, i) => i + 65);
const alphabet = alpha.map((x) => String.fromCharCode(x)); //taken from google
function abaCaba(n) {
    if(n === 0) {
        return alphabet[n];
    }
    return abaCaba(n - 1) + alphabet[n] + abaCaba(n - 1);
}

console.log(abaCaba(2));