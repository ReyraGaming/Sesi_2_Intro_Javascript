function removeDuplicates(inputArray) {
    let newArray = []
    inputArray.forEach(function(nilai){
        if(newArray.indexOf(nilai) === -1 ){
            newArray.push(nilai)
        }
    });

    return newArray 
}
const arrayData = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 9, 20, 20, 25]
console.log(removeDuplicates(arrayData))