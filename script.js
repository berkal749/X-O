var x = true ;
var matrix = [
    
    
];
var matrixx = [];
var matrixo = [];

var one = document.getElementById("1");
var two = document.getElementById("2");
var three = document.getElementById("3");
var four = document.getElementById("4");     
var five = document.getElementById("5");
var six = document.getElementById("6");
var seven = document.getElementById("7");
var eight = document.getElementById("8");
var nine = document.getElementById("9");

nine.addEventListener("click", function(){check(nine);
checkvictory();
});
one.addEventListener("click", function(){check(one);
checkvictory();
});
two.addEventListener("click", function(){check(two);
checkvictory();
});  
three.addEventListener("click", function(){check(three);
checkvictory();
});
four.addEventListener("click", function(){check(four);
checkvictory();
});
five.addEventListener("click", function(){check(five);
checkvictory();
});
six.addEventListener("click", function(){check(six);
checkvictory();
});
seven.addEventListener("click", function(){check(seven);
checkvictory();
});
eight.addEventListener("click", function(){check(eight);
checkvictory();
});




function check(number){
     matrix.push(number);
    if(x){
       
   matrixx.push(number);

        number.innerText = "X" ;
    }else{
         matrixo.push(number);
        number.innerText = "O";
    }


x = !x ;



}
function reset(){
    one.innerText = "1" ;
    two.innerText = "2" ;
    three.innerText = "3" ;
    four.innerText = "4" ;
    five.innerText = "5" ;
    six.innerText = "6" ;
    seven.innerText = "7" ;
    eight.innerText = "8" ;
    nine.innerText = "9" ;   
    x = true ;
    matrix = [];
    matrixx = [];
    matrixo = [];
    
}

function checkvictory(){


    if((matrixx.includes(one) && matrixx.includes(two) && matrixx.includes(three)) ||
       (matrixx.includes(four) && matrixx.includes(five) && matrixx.includes(six)) ||
       (matrixx.includes(seven) && matrixx.includes(eight) && matrixx.includes(nine)) ||
       (matrixx.includes(one) && matrixx.includes(four) && matrixx.includes(seven)) ||
       (matrixx.includes(two) && matrixx.includes(five) && matrixx.includes(eight)) ||
       (matrixx.includes(three) && matrixx.includes(six) && matrixx.includes(nine)) ||
       (matrixx.includes(one) && matrixx.includes(five) && matrixx.includes(nine)) ||
       (matrixx.includes(three) && matrixx.includes(five) && matrixx.includes(seven))){
        alert("X wins");
        reset();
    }

   if((matrixo.includes(one) && matrixo.includes(two) && matrixo.includes(three)) ||
       (matrixo.includes(four) && matrixo.includes(five) && matrixo.includes(six)) ||
       (matrixo.includes(seven) && matrixo.includes(eight) && matrixo.includes(nine)) ||
       (matrixo.includes(one) && matrixo.includes(four) && matrixo.includes(seven)) ||
       (matrixo.includes(two) && matrixo.includes(five) && matrixo.includes(eight)) ||
       (matrixo.includes(three) && matrixo.includes(six) && matrixo.includes(nine)) ||
       (matrixo.includes(one) && matrixo.includes(five) && matrixo.includes(nine)) ||
       (matrixo.includes(three) && matrixo.includes(five) && matrixo.includes(seven))){
        alert("O wins");
        reset();
    }}


   
