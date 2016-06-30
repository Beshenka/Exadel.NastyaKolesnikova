var mySingletone = (function(){
    function biblio() {
    var fs = require('fs');
    var array = fs.readFileSync('biblioteka.txt').toString().split("\n"),
        reg = /\;|\,/,
        str = [],
        lineLibrary  = [],
        error = [],
        instance;

        for(var j = 0; j < array.length; j++ ){
            str[j]  = array.split(reg),
        }

        str = readFile();
            alert(str);
        for(var i = 0; i < str[i].length; i++){
            var flag = false;
            if(str[i].length == 1){
                lineLibrary += str[i][0];
                for(var j=0; j < str.length; j++){
                    for(var k=0; j < str[j].length; k++){
                        if(str[i][0] === str[j][k]){
                            str[j].splice(k, 1); 
                            i=0;
                            flag = true;
                        }
                    }
                    delete str[i];
                }

            }

            if(j == str.length-1 && flag == false){
                error += str[i];
                delete str[i];
            }
        }

    }
        
        return {
        getInstance: function() {
            if (!instance) {
                instance = init();
            }
            return instance;
        }
    }
        

})();
    
console.log('read file = \n', array);
mySingletone.getInstance();
console.log('out string success = ', lineLibrary);
console.log('error string = ', error);
