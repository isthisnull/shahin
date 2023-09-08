let customerIsBanned=false;
let reply;
let soup=`chiken noodle`;

if(customerIsBanned){
reply=`no soup for you`    
}
else if(soup){
    reply= `here is your ${soup}`

}
console.log(reply);

let playerMove='paper';
let computerMove='paper';
switch(playerMove){

    case computerMove:
            console.log("Tie Game!");
    break;

    case 'rock':
        if(computerMove==='paper'){
            console.log("Computer win!");
        } else{
            console.log("Player win!");
        }
    break;

    case 'scissors':
        if(computerMove==='rock'){
            console.log("Computer win!");
                    } else{
            console.log("Player win!");
        }
    break;

    case 'paper':
        if(computerMove==='scissors'){
            console.log("Computer win!");
        } else{
            console.log("Player win!");
        }
    break;
}