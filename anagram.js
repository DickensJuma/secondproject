gi
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