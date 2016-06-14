function rpn(expression) {
    "use strict";
    
    var stack = [],
        stackFinal = [];
    
    var reg = new RegExp("\\d*(?!\\D)"),
        rpnExp = expression,
        leng = rpnExp.length;
    

    for (var i = 0; i < leng; i++){
        
       if(i != leng){

		if(rpnExp[i].search(/\d/) != -1){
           stackFinal.push(rpnExp[i, leng].search(reg));  
        }  
                            
		/*if(rpnExp[i].search(^) != -1){			//Веселье со степенями // Проверить на адекватность при наличии скобок
			stackFinal.push(rpnExp[i, leng].search(reg);
		}*/

		/*if(rpnExp[i].search(/\*|\//) != -1){    
            do {
                str = stack.pop();
                stackPush(rpnExp[i], reg);
                } while(str != '-' || str != '+' || str != '(' );
                             
        }*/

		if(rpnExp[i].search(/\+|-/) != -1){
			str = stack.pop();
				if(str != undefined){
					if(str == '+' || str == '-'){
					stackFinal.push(str);
					stackPush(rpnExp[i], reg);
				}

				else
				 	stack.pop(rpnExp[i]);
			}
		}
			
		if(rpnExp[i] == '(')
			stack.push(rpnExp[i]);

		if(rpnExp[i] == ')'){
			while(rpnExp[i] != '(')
				stackFinal.push(stack.pop());

		}
        
    }     
    
        else{
            do{
                stakFinal.push(stack.pop);
                }while(str != undefined);
        }
    }
    
}
    
function stackPush(rpnExp[i], reg){
    stackFinal.push(rpnExp[i++, leng].search(reg)); 
    rpnExp.lastIndex;
    stackFinal.push(rpnExp[--i]);
}




console.log(rpn("2+2"));
console.log(rpn("2+4*8"));