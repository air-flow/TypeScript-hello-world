

function twoSum(num: number[], target: number) {
    let number = []
    loop :for (let index = 0; index < num.length; index++) {
        number  =  [index]
        for (let j = 0; j < num.length; j++) {
            if (j != index){
                let temp = [num[number[0]],num[j]]
                let total = temp.reduce(function(sum, element){
                    return sum + element;
                }, 0);
                if (total == target) {
                    number.push(j)
                    console.log(number);
                    break loop
                }
            }
        }
    }
    return []
}
let num = [2,7,11,15], target = 9
console.log(twoSum(num,target));

