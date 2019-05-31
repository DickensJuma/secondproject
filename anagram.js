

function isAnagram(test, original){
    let result = original.filter(word=>{
        let word1 = word.split('').sort().join('');
        let word2 =test.split('').sort().join('');
       return word1===word2;
    })
    return result;
}
console.log(isAnagram('aba',['baa','bee', 'aabb']));

function towerBuilder(nFloors) {
    var tower = [];
    for (var i = 0; i < nFloors; i++) {
      tower.push(" ".repeat(nFloors - i - 1) + "*".repeat((i * 2)+ 1) + " ".repeat(nFloors - i - 1));
    }
    return tower;
  }

  console.log(towerBuilder(5));


  function tri(n){
      var arr=[];
      for(var i=0; i<n; i++){
          arr.push("*".repeat(n-i));
      }
      return arr;
  }
  console.log(tri(5));