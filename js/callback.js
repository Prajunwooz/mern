 const printHello=(callback)=>{
    console.log("Hello ");
    callback();
}
//call means to invoke the function callback meaning to execute the function passed as parameter


const printGoodbye=()=>{
    console.log("hi i am prajun nice to meet you ");
}   
printHello(printGoodbye);

//export {printHello, printGoodbye};