// var obj = {
//     key1: value1,
//     key2: value2
// }
// console.log(obj.key3);
// Object.key1 ="value1";
// console.log(obj.key1);
// var fruits = ['apple', 'orange' ,'kiwi','strawberry'];
// fruits.splice(4,1,'banana');
// console.log(fruits);
// function a(){
//     console.log("Inside a");

//     function b(){
//         console.log("Inside b");
//     }
// }
// b();
// function f(a,b = 1){
//     console.log(a*b)
// }
// var x =  //some hidden value ans is 1
// f(5,x);
// const obj1 = {
//     property1: 2
// };
// Object.seal(obj1);
// obj1.property1 = 4;
// console.log(obj1.property1);
// delete obj1.property1;
// const obj1 = { first: 20 , second: 30 , first:50};
// console.log(obj1);
let n = 24;
let l = 0,r = 100,ans = n;
while(l<=r){
    let mid = Math.floor((l+r)/2);
    if(mid*mid <=n){
        ans = mid;
        l = mid+1;
    }
    else{
        r = mid-1;
    }
}
console.log(ans);