//Fibonacci Sequence: 1,1,2,3,5,8,13,21,34,55,89,144,233,377,610,987

//Example One (Textbook example)
function fibonacci(n) { //3
    let a = 0; //0
    let b = 1;//1
    if (n === 0) {
    return a;
    }
    for (let i = 2; i <= n; i++) {
    let c = a + b; //0 + 1
    a = b; //1
    b = c; //1
    }
    return b;
    }
    console.log(fibonacci(3)); //2

    //Example Two
    function fibonacciTwo(n) { //4
        let a = 1; //1
        let b = 1;//1
        if (n === 0) {
        return a; //Failsafe in case of error
        }
        for (let i = 2; i <= n; i++) {
        let c = a + b; //2
        a = b; //1 - We are assigning A as B (A contains the value of B)
        b = c; //2 - We are assigning B as C (B contains the value of C)
        }
        return b;
        }
        console.log(fibonacciTwo(4)); //2

        //Testing theories 
        let a = 2;
        let b = 4;
        let c = a + b;

        a = b;
        b = c;
        
        //In theory, if a is assigned to b, then it should console log the same number whether I put in a or b in the parameter.

        console.log(b);

        //Example 3
        
        
function fibonacciThree(n) { //5
    //The function can start with any number
    let a = 3; //3
    let b = 5;//5
    if (n === 0) {
    return a;
    }
    for (let i = 2; i <= n; i++) { //It is going to iterate from i = 2 to i = 5
    let c = a + b; //3 + 5
    a = b; //5
    b = c; //8
    }
    return b;
    }
    console.log(fibonacciThree(5)); //13 - *This is the first iteration. Iterate the the fibonacci number two more times.
    //i.e. go down the fibonnaci sequence two more times, and the final answer will be 34.