function countSmileys(arr) {
    var smileys = [":)",";)",":-)",";-)",";~)",":~)",":D",";D",":-D",":~D",";-D",";~D"];
    var count = 0;
    
    for (var i=0; i<arr.length; i++){
      for (var j=0; j<smileys.length; j++){
        if (arr[i]===smileys[j]){
          count++;
        }
      }
      }
    return count;
    }

//solution 4 (RegExp)
    function countSmileys(arr) {
        return arr.filter(x => /^[:;][-~]?[)D]$/.test(x)).length;
      }

    //solution 3(ReqExp/arrow function)
    const countSmileys = arr => arr.filter(s=>s.match(/((:|;)(~|-){0,1}(\)|D))/)).length;