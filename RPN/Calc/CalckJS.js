function inpitExp() {
    var expression = document.querySelectorAll('#calculator span'); //Получили все элементы класса span
    var operators = ['+', '-', '*', '/', '^', '(', ')'];
   var decimalAdded = false;


for(var i = 0; i < expression.length; i++) {
	expression[i].onclick = function(e) {
        
		var input = document.querySelector('.screen'); // Считали элементы с элемента с тегом screen и разметку
		var inputVal = input.innerHTML; //достаём содержимое внутри тэга
		var btnVal = this.innerHTML; //заносим содержимое кнопки которую мы нажали
		
        
		if(btnVal === 'C') {
			input.innerHTML = '';
			decimalAdded = false;
		}
		
		else if(btnVal === '=') {
			var equation = inputVal;
			var lastChar = equation[equation.length - 1];
			
            
			equation = equation.replace(/x/g, '*').replace(/÷/g, '/'); // E_E
			
			/*if(operators.indexOf(lastChar) > -1 || lastChar === '.')
				equation = equation.replace(/.$/, '');*/
			
			if(equation){
                //input.innerHTML = rpnCount(rpn(equation));  
                input.innerHTML = rpn(equation);  
            }
				
			decimalAdded = false;
		}
		
		else if(operators.indexOf(btnVal) > -1) { 
			var lastChar = inputVal[inputVal.length - 1]; //Занесение  символов в поле #calculator span.
			
			if(inputVal != '' && operators.indexOf(lastChar) == -1) 
				input.innerHTML += btnVal;
			
			else if(inputVal == '' && btnVal == '-') 
				input.innerHTML += btnVal;
			
            
            else if(operators.indexOf(lastChar) > -1 && inputVal.length > 1 && btnVal !== '(') { 
				input.innerHTML = inputVal.replace(/.$/, btnVal);
			}
			
            else{
                input.innerHTML += btnVal;
            }
			decimalAdded = false;
		}
        
		else if(btnVal === '.') {
			if(!decimalAdded) {
				input.innerHTML += btnVal;
				decimalAdded = true;
			}
		}
		
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
        
        if (!isNaN(rpnExp[i]) || rpnExp[i] === '.') {
            if (i > 0 && ((!isNaN(rpnExp[i]) || rpnExp[i] !== '.') && (rpnExp[i+1] !== '.' || rpnExp[i-1] !== '.')))
                str += ' ';
            
            str = str + rpnExp[i];
        }

        else if (rpnExp[i] === '(') {
            stack.push(rpnExp[i]);
        }
        else if (rpnExp[i] === ')') {
            var t = stack.pop();
            while (t !== '(') { //Проблема со скобками!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
                if (t === undefined) {
                    str = "";
                    break;
                }
                
                str = str + ' ' + t;
                t = stack.pop();
            } 
        }

        else {
            var z = stack.pop();
            while (z !== undefined && priority.get(z) >= priority.get(rpnExp[i])) {
                str = str + ' ' + z;
                z = stack.pop();
            }
            if (z !== undefined)
                stack.push(z);
            stack.push(rpnExp[i]);
        }
    } 
    //alert(str);
    var q = stack.pop();
    while(q){
        str = str + ' ' + q;
        q = stack.pop();
    }
    return str;
}

function rpnCount(rpn){

    var rpnExp = rpn,
    stack = [],
    t1 = 0,
    t2 = 0,
    leng = rpnExp.length;
    
  for(var i = 0; i < leng; i++){
    
    if(rpnExp[i] == ' ')
        continue;
      
    if(!isNaN(rpnExp[i])){
       var str = '';
       while(rpnExp[i] != ' '){
           str = str + rpnExp[i++];
       }
        stack.push(str);
    }

       
    else{
        
        t1 = stack.pop();
        t2 = stack.pop();
        
        if(t2 !== undefined){
         
            switch(rpnExp[i]) {
                
                case '^': {
                    stack.push(Math.pow(t2, t1));
                    break; 
                }
        
                case '*': {
                    stack.push(t2 * t1);
                    break;
                }
                    
                case '/': {
                    stack.push(t2 / t1);
                    break;
                }
                    
                case '+': {
                    stack.push(t2 + t1);
                    break;
                }
                    
                case '-': {
                    stack.push(t2 - t1);
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

/*function probel(str){
    for(var i=0, i<str.length; i++){
        if(str[i]= '.' && rpnExp[i+1] == ' ')
            for(var j=i; j<str.length; j++)
                str[j] = str[j+1];
    }
    
    return str;
}*/

inpitExp();
