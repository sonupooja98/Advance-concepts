const funA = () =>{
    console.log('welcome funA');
}
const funB = () =>{
    console.log('welcome funB');
}
funA();
funB();


const A = () =>{
    setTimeout(function(){
    console.log('welcome A');
}, 3000);
}
const B = () =>{
    console.log('welcome B');
}
A();
B();



