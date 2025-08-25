const minNum = 0;
let maxNum ;
let guess ;

const Easybtn =  document.getElementById("Easybtn");
const Hardbtn = document.getElementById("Hardbtn");
                
       
    function startgame(levelmax){
    maxNum = levelmax ;
    let Attempts = 0 ;  
    let random = Math.floor(Math.random()*(maxNum - minNum + 1)) + minNum;
    while(Attempts < 10){
        
    guess = window.prompt(`The Number is Between ${minNum} And ${maxNum}:`);

    if(guess === null){
        window.alert("Game Canceled");
         break;
    }
        
    if(guess.trim() === ""){
        window.alert("You must enter a number");
        continue;
        
    }
        guess = Number(guess);
    if(isNaN(guess) || guess > maxNum || guess < minNum){
        window.alert("invaild Number,please try again");
         continue;
    }
 

        Attempts ++ ;
        if(random===guess){
        
         window.alert(`${random} is Correct!, ${Attempts} Attempts 🥳`);
                 
        break;                
        
        }
        
        if(Attempts === 10){
                window.alert(`Stupied!,The Correct Answer was ${random} 🤪`);
                break; }
                
        else if(random < guess){
                window.alert(`Too High,Try Again`);
               
        }
        else if(random > guess){
                window.alert(`Too Low,Try Again`);  
               
        }    
        
} 
  }

        


Easybtn.onclick = function(){
startgame(500);
};


Hardbtn.onclick = function(){
startgame(1000);

};


