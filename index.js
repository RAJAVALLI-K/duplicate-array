// duplicate array

let num = [1, 2, 4, 3, 3, 6, 2, 7];
function duplicateNum(num) {
    let arrayNum = [];
    for (i = 0; i < num.length; i++) {
        let exit = false;
        for (j = 0; j < arrayNum.length; j++) {
            if (num[i] === arrayNum[j]) {
                exit = true;
                break;
            }
        }
        if (!exit) {
            arrayNum.push(num[i]);
        }
    }
    return arrayNum;
}
console.log(duplicateNum(num));