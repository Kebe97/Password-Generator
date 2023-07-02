lowerCaseAlphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
upperCaseAlphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
numbers = '0123456789'.split('');
symbols = '~`!@#$%^&*()_-+={[}]|\:;<,>.?'.split('');
finalArray = []
let result = document.getElementById("newpass")
let passlenght = document.getElementById("lenght")

let arr1 = [1, 2, 3, 4, 5]
let arr2 = [1,3,5]
function arremove(){
    for (let i = 0; i < arr1.length;i++){
        for (let j = 0; j < arr2.length;j++){
            if (arr1[i] === arr2[j]){
                delete arr1[i]
            }
        }
    }
    arr1 = arr1.filter(function(value){
        return value = true
    })
    console.log(arr1)

}
arremove()

let checkboxsp = document.querySelector("#special");
console.log(checkboxsp.checked)

let checkboxnum = document.querySelector("#number");
console.log(checkboxnum.checked)

let checkboxspupp = document.querySelector("#upperCase");
console.log(checkboxspupp.checked)

let checkboxlow = document.querySelector("#lowerCase");
console.log(checkboxlow.checked)

function generator(array, check){
    if (check.checked === true){
        finalArray = finalArray.concat(array)
    }
    else {
        for (let i = 0; i < finalArray.length;i++){
        for (let j = 0; j < array.length;j++){
            if (finalArray[i] === array[j]){
                delete finalArray[i]
            }
        }
    }
    finalArray = finalArray.filter(function(value){
        return value = true
    })
    }
    
    console.log(finalArray)
    
}

function rand(){
    let ran = Math.floor(Math.random() * finalArray.length)  
    return ran
}

function go(){
    result.textContent = ""
    for (i = 0; i < +passlenght.value; i++){
        result.textContent += finalArray[rand()]
        // console.log(finalArray[rand()])
    }
}







