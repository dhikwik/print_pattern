function letterPattern(n) {
    
    const letters = "ZYXWVUTSRQPONMLKJIHGFEDCBA"; 
    let index = n-1;  
    for (let i = 0; i < n; i++) {
      let row = "";  
     if(i==0){
         row =row +letters[index]; 
     }
        for (var j = 0; j < i; j++) {
            if(j==0){
                row =row +letters[index]; 
                index--;
            }
         row =row +letters[index]; 
         }
      console.log(row);
    }
  }
  
  letterPattern(10); // can give the desired length of the pattern we want
  