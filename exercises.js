// https://www.codewars.com/kata/convert-a-string-to-an-array/train/javascript

function stringToArray(string){
    return array = string.split(" ");
  }

// https://www.codewars.com/kata/dna-to-rna-conversion/train/javascript

function DNAtoRNA(dna) {
    const reg = /T/gi;
    return rna = dna.replace(reg, 'U');
  }

// https://www.codewars.com/kata/577a98a6ae28071780000989/train/javascript

  var min = function(list){
    list.sort( (a, b) => a - b );
    return list[0];
}

var max = function(list){
    list.sort( (a, b) => b - a );
    return list[0];
}

// https://www.codewars.com/kata/544a54fd18b8e06d240005c0/train/javascript

function min(arr, toReturn) {
  const minNum = Math.min(...arr);
  return toReturn === "value" ? minNum : arr.indexOf(minNum);
}

// https://www.codewars.com/kata/a-wolf-in-sheeps-clothing/train/javascript

function warnTheSheep(queue) {
  
  function findWolf(animal) {
    return animal === "wolf";
  }
  
  const index = queue.findIndex(findWolf);
  
  if ( index === queue.length - 1 ) {
    return "Pls go away and stop eating my sheep";
  }
  return "Oi! Sheep number " + (queue.length - index - 1) + "! You are about to be eaten by a wolf!";
}
