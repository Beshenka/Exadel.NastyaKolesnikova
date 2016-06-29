function biblio(){
    
    var FSO = new ActiveXObject("Scripting.FileSystemObject"); 
    var fileFSO = FSO.OpenTextFile("\\biblioteki.txt", 1, true); /* Открывает файл*/
    var file = filehandle.ReadAll();/* Считывает */
    //var poisk = document.getElementById("folk");
    //var spisok = document.getElementById("tab_find");
    var reg = /\;||\,/;
    var str  = [];
    var lineLibrary  = [];
    var error = [];
       
    var library = file.split(reg);
    while(!file.AtEndOfStream){ 
        str[i] = file.ReadLine().split(reg); //Cчитывание строк
    }
    
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
    
