const cidade = "Curitiba";
const tempCelsius = 19;

const tempFahrenheit = tempCelsius * (9 / 5) + 32
const tempKelvin = tempCelsius + 273.15;
const variacaoDiaria = 26.3 - tempCelsius;

console.log(`\nA temperatura em ${cidade} está ${tempCelsius} Cº`);
console.log(`Celsius: ${tempCelsius} Cº`);
console.log(`Fahrenheit: ${tempFahrenheit} Fº`);
console.log(`Kelvin : ${tempKelvin} Kº`);
console.log(`Variação Prevista: ${variacaoDiaria}`);
