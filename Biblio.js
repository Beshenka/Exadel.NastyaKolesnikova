function biblio(){
    
    var FSO = new ActiveXObject("Scripting.FileSystemObject"); 
    var fileFSO = FSO.OpenTextFile("\\biblioteki.txt", 1, true); /* Открывает файл*/
    var file = filehandle.ReadAll();/* Считывает */
    //var poisk = document.getElementById("folk");
    //var spisok = document.getElementById("tab_find");
    var reg = /\r?\n/;
    var str  = [];
    var line  = [];
       
    var library = file.split(reg);
    while(!file.AtEndOfStream){ 
        str[i] = file.ReadLine().split(reg); //Cчитывание строк
    }
    
    for(var i = 0; i < str[i].length; i++){
        
        if(str.[i].length == 1){
            for(var j=0; j<)
            
            
            
            
        }
        
    }
    
    
    
    
    
}
    
