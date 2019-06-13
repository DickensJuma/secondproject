// function weird(string){
//     for(var i=0; i<string.length; i+2){
//          string[i].toUpperCase;
//         }
    
//     return string;
// }
// console.log(weird("dickens juma"));


// function toWeirdCase(string) {
//     return string.split(' ').map(word => word.split('')
//               .map((elements, index) =>
//               index % 2 === 0 ? elements.toUpperCase() : elements.toLowerCase()
//           )
//           .join('')
//       )
//       .join(' ')
//   }
//   console.log(toWeirdCase("dickens juma"));


  function me(string){
      return string.split(' ');
  }
  console.log(me('dickens juma'));