const [,, a,op,b]= Process.argv;
const x=parseFloat(a),
 y=parseFloat(b);

 switch(op){
    case "+":
        console.log(`${x}+ ${y}=${x+y}`);
        break;
        case "-":
      console.log(`${x} - ${y} = ${x - y}`); 
        break;
        case "*": 
        console.log(`${x} * ${y} = ${x * y}`); 
        break;
        case "/":
             if (y === 0) 
        console.log("Error");
        else console.log(`${x} / ${y} = ${x / y}`);
         break;
          default: console.log("Usage: node calc.js 5 + 3"); }
 