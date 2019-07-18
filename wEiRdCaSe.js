

function toWeirdCase(string) {
    return string.split(',').map(word => word.split('')
              .map((elements, index) =>
              index % 2 === 0 ? elements.toUpperCase() : elements.toLowerCase()).join('')).join(' ')
  }
  console.log(toWeirdCase("dickens juma"));



  const swapCase = function(string){
    return string.split(',').map(word => word.split('')
    .map((i,e)  => i % 2 === 0 ? e.toUpperCase() : e.toLowerCase()).join('')).join(' ')


}
console.log(swapCase("can we do it today alraight!"));


const capitallize = function(string){

    const words=string.split(',').map(word => word.toUpperCase());
        
    
    return words;
}
console.log(capitallize("i am superman"));


