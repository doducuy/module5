function sumFibonacci() {
    let numOne:number=0;
    let numTwo:number=1;
    let arr:number[]=[0,1];
    let check:number=2;
    while (true){
        let numThree = numOne+numTwo;
        arr.push(numThree);
        numOne = numTwo;
        numTwo= numThree;
        check++
        if(check>9){
            break;
        }
    }
    let sum:number=0;
    arr.forEach(function (value) {
        sum+= value;
    })
     console.log(sum);
}
sumFibonacci();