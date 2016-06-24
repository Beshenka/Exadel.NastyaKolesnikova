function inpitExp() {
    var expression = document.querySelectorAll('#calculator span'); //Получили все элементы класса span
    var operators = ['+', '-', 'x', '/', '^', '(', ')'];
   // var decimalAdded = false;


for(var i = 0; i < expression.length; i++) {
	expression[i].onclick = function(e) {
        
		var input = document.querySelector('.screen'); // Считали элементы с элемента с тегом screen и разметку
		var inputVal = input.innerHTML; //достаём содержимое внутри тэга
		var btnVal = this.innerHTML; //заносим содержимое кнопки которую мы нажали
		

		if(btnVal === 'C') {
			input.innerHTML = '';
			//decimalAdded = false;
		}
		
		else if(btnVal === '=') {
			var equation = inputVal;
			var lastChar = equation[equation.length - 1];
			

			equation = equation.replace(/x/g, '*').replace(/÷/g, '/'); // E_E
			
			/*if(operators.indexOf(lastChar) > -1 || lastChar === '.')
				equation = equation.replace(/.$/, '');*/
			
			if(equation){
                input.innerHTML = rpnCount(rpn(equation));   
            }
				
			//decimalAdded = false;
		}
		

		else if(operators.indexOf(btnVal) > -1) { 

			var lastChar = inputVal[inputVal.length - 1]; //Занесение  символов в поле #calculator span.
			
			if(inputVal != '' && operators.indexOf(lastChar) == -1) 
				input.innerHTML += btnVal;
			
			else if(inputVal == '' && btnVal == '-') 
				input.innerHTML += btnVal;
			
			if(operators.indexOf(lastChar) > -1 && inputVal.length > 1) { 

				input.innerHTML = inputVal.replace(/.$/, btnVal);
			}
			
			//decimalAdded = false;
		}
		
		/*else if(btnVal === '.') {
			if(!decimalAdded) {
				input.innerHTML += btnVal;
				decimalAdded = true;
			}
		}*/
		
		else {
			input.innerHTML += btnVal;
		}
		
		e.preventDefault();
	} 
}
    
    
    
    
}

function rpn(expression) {
    "use strict";
    
    
    var stack = [],
        str = '',
        rpnExp = expression,
        leng = rpnExp.length,
        priority = new Map();
    
    priority.set('^', 4);
    priority.set('*', 3);
    priority.set('/', 3);
    priority.set('+', 2);
    priority.set('-', 2);
    priority.set('(', 1);
    priority.set(')', 1);
    
        
    for (var i=0; i < leng; i++) {
        
        if (!isNaN(rpnExp[i])) {
            if (i > 0 && isNaN(rpnExp[i-1])) //если цифра, то нужно проверить прдыдущий символ в строке
                str += ' '; //если цифра то пробел не нужен
            str = str + rpnExp[i];
        }
        else if (rpnExp[i] === '(') {
            stack.push(rpnExp[i]);
        }
        else if (rpnExp[i] === ')') {
            var t = stack.pop();
            while (t !== '(') {
                if (t === undefined) {
                    str = "";
                    break;//todo если стек закончился раньше чем встретилась открывающая скобка  тогда выражение записано неверно
                }
                str = str + ' ' + t;
                t = stack.pop();
            }
        }
        else {
            var t = stack.pop();
            while (t !== undefined && priority.get(t) >= priority.get(rpnExp[i])) {
                str = str + ' ' + t;
                t = stack.pop();
            }
            if (t !== undefined)
                stack.push(t);
            stack.push(rpnExp[i]);
        }
    } 
    
    var t = stack.pop();
    while(t){
        str = str + ' ' + t;
        t = stack.pop();
    }
    
    return str;
}

function rpnCount(rpn){

    var rpnExp = rpn,
    stack = [],
    leng = rpnExp.length,
    t1 = 0,
    t2 = 0;
   // flag = leng;
    
  for(var i = 0; i < leng; i++){
    
    if(rpnExp[i] == ' '){
       // flag --;
        continue;
    }
      
    if(!isNaN(rpnExp[i])){
        var str = '';
       while(rpnExp[i] != ' '){
           str = str + rpnExp[i++];
       }
        stack.push(str);
        //flag ++;
    }

       
    else{
        
        t1 = stack.pop();
        t2 = stack.pop();
        
        if(t2 !== undefined ){
         
            switch(rpnExp[i]) {
                
                case '^': {
                    stack.push(Math.pow(t2, t1));
                    //flag -= 2;
                    break; 
                }
        
                case '*': {
                    stack.push(t2 * t1);
                    //flag -= 2;
                    break;
                }
                    
                case '/': {
                    stack.push(t2 / t1);
                    //flag -= 2;
                    break;
                }
                    
                case '+': {
                    stack.push(t2 + t1);
                    //flag -= 2;
                    break;
                }
                    
                case '-': {
                    stack.push(t2 - t1);
                    //flag -= 2;
                    break;
                } 
            }
         }
      }
   } 
    
    if(stack.length > 1) {
        return "error";
    } else {
        return stack.pop();    
    }    
}

inpitExp();
