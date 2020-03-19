var arr = [
{value: 100, type: 'USD'},
{value: 215, type: 'EUR'},
{value: 7, type: 'EUR'},
{value: 99, type: 'USD'},
{value: 354, type: 'USD'},
{value: 12, type: 'EUR'},
{value: 77, type: 'USD'},
];

let arr1=arr.filter(money=>money.type==="USD"&&money.value<100);

let sum=arr1.reduce(add_f,0);
console.log(sum);

function add_f(acc,curVal){
  return acc+curVal.value;
}

let arr2=arr.filter(mult_f);
console.log(arr2)

function mult_f(money){
  if(money.type==="EUR"){
    money.value*=2;
    return true;
  }
  else {
    return false;
  }
}
