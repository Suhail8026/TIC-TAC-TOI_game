let newgamebtn = document.querySelector("#new_btn");
let msgContainer = document.querySelector(".msg_cont");
let msg = document.querySelector("#msg");
t='x';
	function fun(i)
     {
         if (t=='x')
          {
              temp=document.getElementsByClassName('all');
              temp[i].innerText=t;
              temp[i].disabled= true;
              t='0';
          }
          else
          {
          	temp=document.getElementsByClassName('all');
          	temp[i].innerText=t;
            temp[i].disabled= true;
          	t='x';
          }




          const ShowWinner=(winner)=>{
            msg.innerText = `congratualation, Winner is ${winner}`;
            msgContainer.classList.remove("hide");
         }



          
          if (temp[0].innerText=='x' && temp[1].innerText=='x' && 
            temp[2].innerText=='x' || temp[3].innerText=='x' && 
            temp[4].innerText=='x' && temp[5].innerText=='x' || 
            temp[6].innerText=='x' && temp[7].innerText=='x' && 
            temp[8].innerText=='x' ||temp[0].innerText=='x'  && 
            temp[3].innerText=='x' && temp[6].innerText=='x' || 
            temp[1].innerText=='x' && temp[4].innerText=='x' && 
            temp[7].innerText=='x'|| temp[2].innerText=='x'&& 
            temp[5].innerText=='x' && temp[8].innerText=='x' || 
            temp[0].innerText=='x' && temp[4].innerText=='x'&& 
            temp[8].innerText=='x' ||temp[2].innerText=='x' && 
            temp[4].innerText=='x' && temp[6].innerText=='x')
           {
           	//alert("game won by x!");
              let Zero =  "x" ;
               ShowWinner(Zero);
           	   gameEnd();
              
           }
           if (temp[0].innerText=='0' && temp[1].innerText=='0' && 
            temp[2].innerText=='0'|| temp[3].innerText=='0' && 
            temp[4].innerText=='0' && temp[5].innerText=='0' || 
            temp[6].innerText=='0' && temp[7].innerText=='0' && 
            temp[8].innerText=='0' ||temp[0].innerText=='0'  && 
            temp[3].innerText=='0' && temp[6].innerText=='0' || 
            temp[1].innerText=='0' && temp[4].innerText=='0' && 
            temp[7].innerText=='0'|| temp[2].innerText=='0'&& 
            temp[5].innerText=='0' && temp[8].innerText=='0' || 
            temp[0].innerText=='0' && temp[4].innerText=='0'&& 
            temp[8].innerText=='0'||temp[2].innerText=='0'&& 
            temp[4].innerText=='0' && temp[6].innerText=='0')
            {
            	//alert("game won by O!");
                let Zero = "O";
                ShowWinner(Zero);
            	gameEnd();
               
            }
            
     }
     function gameEnd()
     {
     	temp=document.getElementsByClassName('all');
       for(i=0;i<9;i++)
       {
           temp[i].disabled='true';
       }
     	
     }
     function resetgame()
     {
     	temp=document.getElementsByClassName('all');
     	for(i=0;i<9;i++)
     	{
     		temp[i].disabled= '';
     		temp[i].innerText='';
     	}
       msg.innerText = 'Winner';
            //msgContainer.classList.remove("hide");
       
     }

     function game()
     {
     	temp=document.getElementsByClassName('all');
     	for(i=0;i<9;i++)
     	{
     		temp[i].disabled= '';
     		temp[i].innerText='';
     	}
       msg.innerText = 'Winner';
            //msgContainer.classList.remove("hide");
       
     }

     


     