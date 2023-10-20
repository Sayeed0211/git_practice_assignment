function prime(num){
  if(num <= 1){
    return false
  }
  for(let i = 2;i < num;i++){
    if(num % i === 0){
      return false
    }
  }
  return false // true change
}
let num = 3;
if(prime(num)){
  console.log(num,"is prime")
}else {
  console.log(num,"is not prime")
}