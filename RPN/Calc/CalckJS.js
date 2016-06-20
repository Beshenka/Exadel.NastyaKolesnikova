function inpitExp() {
    var expression = document.querySelectorAll('#calculator span'); //Получили все элементы класса span
    var operators = ['+', '-', 'x', '/', '^', '(', ')'];
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
                input.innerHTML = rpnCount(rpn(equation)); 
                
            }
				
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
			
			decimalAdded = false;
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
        priorit = 0,
        priority = new Map();
    
    priority.set('^', 4);
    priority.set('*', 3);
    priority.set('/', 3);
    priority.set('+', 2);
    priority.set('-', 2);
    priority.set('(', 1);
    priority.set(')', 1);
    
        
    for (var i=0; i < leng; i++) {
        
        if(isFinite(rpnExp[i]))
           str = str + rpnExp[i];
        
        if(rpnExp[i] === '(')
            stack.push(rpnExp[i]);
            
        else{
            
            priorit = priority.get(rpnExp[i]);
             var t = stack.pop;

            if(t!== undefined){
                if(rpnExp[i] === ')'){
                    while(t !== '(') 
                        str = str + ' ' + t;
                    }
                if( priority.get(t) <= priorit) //???
                    str = str + ' ' + t;
                else
                    stack.push(rpnExp[i]);

            }
            
        }

    }
    
    t = stack.pop;
    while(t!== undefined){
        str = str + ' ' + t;
        t = stack.pop();
    }
    
    return str;
   
}    


function rpnCount(rpn){

    var str = rpn,
    stack = [],
    leng = str.length;
    
  for(var i = 0; i < leng; i++){
    
    if(str[i] === ' ')
        continue;
      
    if(typeof str[i] == 'number')
            stack.push(str[i]);
       
    else{
        
        t1 = stack.pop();
        t2 = stack.pop();
        if(t1 == null || t2 == null){
         
            switch(str[i]) {
                
                case '^': {
                    //str[i-2] = Math.pow(t2, t1);
                    //i= i-1;
                    //str = sdvig(str, i);
                    stack.push(Math.pow(t2, t1));
                    break;
                //Можно сделать проверку    
                }
        
                case '*': {
                    //str[i-2] = t2 * t1;
                    //i= i-1;
                    //str = sdvig(str, i);
                    stack.push(t2 * t1);
                    break;
                }
                    
                case '/': {
                    //str[i-2] = t2 / t1;
                    //i= i-1;
                    //str = sdvig(str, i);
                    stack.push(t2 / t1);
                    break;
                }
                    
                case '+': {
                    //str[i-2] = t2 + t1;
                    //i= i-1;
                    //str = sdvig(str, i);
                    stack.push(t2 + t1);
                    break;
                }
                    
                case '-': {
                    //str[i-2] = t2 - t1;
                    //i= i-1;
                    //str = sdvig(str, i);
                    stack.push(t2 - t1);
                    break;
                    
                } 
                
            }
            
        }
        
     }

  }
    return stack.pop();
              
}

function sdvig(str, i) {
    
    for(var j = i; j < str.length - 1; j++)
        str[j] = str[j+1];
    return str;
         
}

inpitExp();
