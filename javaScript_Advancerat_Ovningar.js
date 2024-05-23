//Lös nedan uppgifter:

//#1 Skapa en en linje funktion som adderar två parametrar

const sum = (a, b) => a + b;


const addTo = x => y => x + y
var addToTen = addTo(10)
addToTen(3) // Ger värdet 13

//Currying: Vilket värde kommer det att bli?
const sum = (a, b) => a + b
const curriedSum = (a) => (b) => a + b
curriedSum(30)(1)

// Return kommer ge oss 31

//Currying: Vilket värde kommer det att bli?
const sum = (a, b) => a + b
const curriedSum = (a) => (b) => a + b
const add5 = curriedSum(5)
add5(12)

// Return kommer ge oss 17

//Composing: Vilket värde kommer det att bli?
const compose = (f, g) => (a) => f(g(a));
const add1 = (num) => num + 1;
const add5 = (num) => num + 5;
compose(add1, add5)(10)

// Värdet kommer bli = 16

//Vad krävs för att skapa en pure function?
//Det krävs 1. Deterministic Funktionell kod som bara gör det vi säger & 2. No side effects Ingen kod
//för annat än programmets syfte och förlitar sig helt på den input vi ger programmet
