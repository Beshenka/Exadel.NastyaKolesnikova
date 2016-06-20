function inpitExp() {
    var expression = document.querySelectorAll('#calculator span');
    var operators = ['+', '-', 'x', '/', '^', '(', ')'];
    var decimalAdded = false;


for(var i = 0; i < expression.length; i++) {
	expression[i].onclick = function(e) {
        
		var input = document.querySelector('.screen');
		var inputVal = input.innerHTML;
		var btnVal = this.innerHTML;
		

		if(btnVal == 'C') {
			input.innerHTML = '';
			decimalAdded = false;
		}
		
		else if(btnVal == '=') {
			var equation = inputVal;
			var lastChar = equation[equation.length - 1];
			

			equation = equation.replace(/x/g, '*').replace(/÷/g, '/');
			
			if(operators.indexOf(lastChar) > -1 || lastChar == '.')
				equation = equation.replace(/.$/, '');
			
			if(equation)
				input.innerHTML = eval(equation);
				
			decimalAdded = false;
		}
		

		else if(operators.indexOf(btnVal) > -1) {

			var lastChar = inputVal[inputVal.length - 1];
			
			if(inputVal != '' && operators.indexOf(lastChar) == -1) 
				input.innerHTML += btnVal;
			
			else if(inputVal == '' && btnVal == '-') 
				input.innerHTML += btnVal;
			
			if(operators.indexOf(lastChar) > -1 && inputVal.length > 1) {

				input.innerHTML = inputVal.replace(/.$/, btnVal);
			}
			
			decimalAdded =false;
		}
		
		else if(btnVal == '.') {
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
        priorit = 0,
        priority = {};
    
    priority['^'] = 4;
    priority['*'] = 3;
    priority['/'] = 3;
    priority['+'] = 2;
    priority['-'] = 2;
    priority['('] = 1;
    priority[')'] = 1;
    
        
    for (var i=0; i < leng; i++) {
        
        
        if(isFinite(rpnExp[i]))
           str = str + rpnExp[i];
        
        if(rpnExp[i] == '(')
            stack.push(rpnExp[i]);
            
        else{
            
            priorit = priority.get(rpnExp[i]);

            if(t = stack.pop || t!= undefined){
                if(rpnExp[i] == ')'){
                    while(t != '(') 
                        str = str + ' ' + t;
                    }
                if( get(t) =< priorit) //???
                    str = str + ' ' + t;
                else
                    stack.push(rpnExp[i]);

            }
            
        }

    }
    
    while(t = stack.pop || t!= undefined)
        str = str + ' ' + t;
   
}    

function get(k) {
return priority[k];
}

function rpnCount(rpn){

     stack = null;
  var leng = str.length,
       str = '';
    
  for(var i = 0; i < leng; i++){
    
    if(str[i] == ' ')
        continue;
      
    if(typeof str[i] == number)
            stack.push(str[i]);
       
    else{
        
        t1 = stack.pop();
        t2 = stack.pop();
        if(t1 == null || t2 == null){
         
            switch(t): {
                
                case '^': {
                    str[i-2] = Math.pow(t2, t1);
                    i= i-1;
                    sdvig(str, i);
                    break;
                //Можно сделать проверку    
                }
        
                case '*': {
                    str[i-2] = t2 * t1;
                    i= i-1;
                    sdvig(str, i);
                }
                    
                case '/': {
                    str[i-2] = t2 / t1;
                    i= i-1;
                    sdvig(str, i);
                }
                    
                case '+': {
                    str[i-2] = t2 + t1;
                    i= i-1;
                    sdvig(str, i);
                }
                    
                case '-': {
                    str[i-2] = t2 - t1;
                    i= i-1;
                    sdvig(str, i);
                    
                } 
                
            }
            
        }
        
     }

  }
              
}

function sdvig(str, i){
    
    for(var j = i; j < str.length; j++)
        str[j] = str[j+1];
         
}

