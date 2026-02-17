 const colorsArr = ['red', 'green', 'blue', 'yellow', 'purple','orange','pink','black'];
 let arrrandomColor=[];
 createRandomColors();
 console.log(arrrandomColor);

 
     let colors = document.querySelector(".colors");

     //בדיקה האם הלחיצה היא בול או פגיעה \
     //בול - גם המקום וגם הצבע טובים 
     //פגיעה - הצבע קיים במערך המוגרל
      let count=0;
      let countBull=0;
      let countHit=0;
      let generalcount=0;

   let clickMark =function (e) 
{
    count++;
    let currentColor=e.currentTarget.style.backgroundColor
const choice=document.querySelector(`[class="${count+generalcount}"]`); //בחירת התיבה המתאימה
choice.style.backgroundColor=currentColor; 
//פונקציה שבודקת בול או פגיעה
checkBullOrHit(currentColor);
    if(countBull==4)
        {
    alert("You Win");
   

}
if(count==4)
{

endTurn();
} 
if(generalcount==48)
{
    alert("Game Over");
}

 }

createColorBoxes();



// פונקציה שיוצרת את תיבות הצבעים ללחיצה ----//

function createColorBoxes()
{
for(let i=0; i<8; i++)
{
    let div = document.createElement("div");
    div.classList.add("box");
    div.style.backgroundColor = colorsArr[i];
    div.onclick = clickMark;
    colors.append(div);
}
}


// פונקציה שבודקת בול או פגיעה ----//
function checkBullOrHit(currentColor)
{
    if( currentColor==arrrandomColor[count-1])
    {
        countBull++;
    }
    else
    {
        for (let index = 0; index < arrrandomColor.length; index++) {
           if(arrrandomColor[index]==currentColor)
           {
            countHit++;            
           }
        }
    }
}

// פונקציה שמסיימת את התור ומציגה את התוצאות ----//
    function endTurn()
{
        generalcount+=4;

const resultBull=document.querySelector(`.a${generalcount/4}`);
const resultHit=document.querySelector(`.b${generalcount/4}`);
resultBull.textContent=countBull;
resultHit.textContent=countHit;
    count=0;
    countBull=0;
    countHit=0;
}


function createRandomColors() {
//יצירת מערך של 4 צבעים אקראיים ללא חזרות
 for (let index = 0; index < 4; index++) 
    {
        
    let x=-1;
    let current;
        let random = Math.floor(Math.random() * 8);
   //     current=colorsArr[random];
    //    arrrandomColor[index]=current;

 while(x==-1)
 {
      x=0;  
     current=colorsArr[random];

    for (let i = 0; i < index; i++)
     {
    if(arrrandomColor[i]==current)
    {
        x=-1;
     random = Math.floor(Math.random() * 8);

    }
    }
 }
  arrrandomColor[index]=current;
    }
 }