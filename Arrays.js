const arr = [`,23,15,45,-6,-8`];
console.log(arr)
const deleted =arr.splice (1,2,1,3,5,-9);
// arr.splice(1,2);
// console .log ('deleted,deleted')
// console.log (arr);
console.log (arr.slice());

const a = arr.slice();
a.push(99)
console.log (a);

console.log(1,2,3,4,5);
const reduceMap =arr.reduce(acc, item) => {
    acc.push (itemI * 2)
    return acc;
}, []);




// if (item>0)acc.positives +=
// else acc.negatives+=


const fruits = ['orange',
]
