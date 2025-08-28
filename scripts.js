

let choice='X';
let title=document.querySelector('.game-title');


function changeChoice(){

    if(choice==='X'){
        choice='O';
    }else{
        choice='X';
    }

title.innerHTML=choice;

return choice;
}




document.querySelectorAll('.square').forEach((square)=>{

    square.addEventListener('click',()=>{
    if(square.innerHTML===''){
         square.innerHTML=choice;
         changeChoice();
        checkWinner();}else{
            document.querySelector('.game-title').innerHTML=`You can't play in this square`;

         }
         
    });
});

let squares=document.querySelectorAll('.square');

console.log(squares);

function checkWinner(){

    if(squares[0].innerHTML==squares[1].innerHTML && squares[1].innerHTML==squares[2].innerHTML&& squares[0].innerHTML!=''){
         title.innerHTML=`${squares[1].innerHTML} is The Winner`;
         endGame([0,1,2]);
    }

   else if(squares[3].innerHTML==squares[4].innerHTML && squares[4].innerHTML==squares[5].innerHTML&& squares[5].innerHTML!=''){
          title.innerHTML=`${squares[3].innerHTML} is The Winner`;
           endGame([3,4,5]);
    }

    else if(squares[6].innerHTML==squares[7].innerHTML && squares[7].innerHTML==squares[8].innerHTML&& squares[8].innerHTML!=''){
         title.innerHTML=`${squares[6].innerHTML} is The Winner`;
          endGame([6,7,8]);
    }

    else if(squares[0].innerHTML==squares[4].innerHTML && squares[4].innerHTML ==squares[8].innerHTML&& squares[8].innerHTML!=''){
          title.innerHTML=`${squares[4].innerHTML} is The Winner`;
           endGame([0,4,8]);
    }

       else if(squares[2].innerHTML==squares[4].innerHTML && squares[4].innerHTML==squares[6].innerHTML&& squares[6].innerHTML!=''){
          title.innerHTML=`${squares[2].innerHTML} is The Winner`;
           endGame([2,4,6]);
    }

        else if(squares[0].innerHTML==squares[3].innerHTML && squares[3].innerHTML ==squares[6].innerHTML&& squares[6].innerHTML!=''){
          title.innerHTML=`${squares[3].innerHTML} is The Winner`;
           endGame([0,3,6]);
    }

      else if(squares[1].innerHTML==squares[4].innerHTML && squares[4].innerHTML==squares[7].innerHTML&& squares[7].innerHTML!=''){
          title.innerHTML=`${squares[1].innerHTML} is The Winner`;
           endGame([1,4,7]);
    }

         else if(squares[2].innerHTML==squares[5].innerHTML && squares[5].innerHTML ==squares[8].innerHTML&& squares[8].innerHTML!=''){
          title.innerHTML=`${squares[5].innerHTML} is The Winner`;
           endGame([2,5,8]);
    }

}


function endGame(table){
   squares[table[0]].classList.add('winner-square');
   squares[table[1]].classList.add('winner-square');
   squares[table[2]].classList.add('winner-square');

   setInterval(()=>{title.innerHTML+='.';},1000);
   setTimeout(()=>{location.reload()
   },4000);


}