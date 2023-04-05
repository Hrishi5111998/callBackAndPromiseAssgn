function manipulateString(str){
    let manipulatedStr = str.toUpperCase()
    function logString(){
        
        console.log('The manipulated string is: ' + manipulatedStr);
    }
    return logString
}

const result = manipulateString('hello')
result()