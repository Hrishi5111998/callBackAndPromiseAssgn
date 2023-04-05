function doubleArray(arr, callback){
  const array = arr.map(callback)
  return array
}

let myArr = [1,2,3,4,5]

function doubleCallback(element){
    return element * 2
}

let double = doubleArray(myArr, doubleCallback)
console.log(double);