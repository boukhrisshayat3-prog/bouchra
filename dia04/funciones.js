function convertEurToDollar(eur){
    const change = 1.10;
    return eur * change;

}
const pricePhone =500;
const priceEars =50;
 const pricePhoneDolar = convertEurToDollar(pricePhone)
 const priceEarsDolar = convertEurToDollar(priceEars)
 console.log (`el telefono movil cuesta ${pricePhoneDolar}$`)
 console.log (`los autifons cuesta ${priceEarsDolar}$`)