// Immediately Invoked Function Expressions (IIFE)

(function chai (){
    // named IIFE
    console.log(`DB CONNECTED`);
})();


(  (name) =>{
    // simple IIFE
    console.log(`DB CONNECTED ${name}`);
})("afaq")