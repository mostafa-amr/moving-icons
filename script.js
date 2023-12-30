//variables
var interval

//topImage vars
var yy =1
var y=0
//icon1Image vars
var ic11 =1
var ic1=0
// icon2Image vars
var ic22 =1
var ic2=0
//catching images
var topp =document.getElementById('topp')
var icon1 = document.getElementById('icon1')
console.log(icon1.offsetWidth)

var icon2 = document.getElementById('icon2')
console.log(icon2.offsetWidth)
var contt =document.getElementById('container')
var CalcHeight = contt.offsetHeight-topp.offsetHeight
var Calc1Width = contt.offsetWidth - icon1.offsetWidth
var Calc2Width = contt.offsetWidth - icon2.offsetWidth

function startInterval(){
   
    if (interval){
        clearInterval(interval);
    }
    interval = setInterval(function(){
        topMo()
        incon1Mo()
        icon2Mo()
    },0)    
    
}
function topMo(){
  if (y+yy>CalcHeight||y +yy<0){
    yy=-yy
  }
  else{
    y+=yy
   topp.style.top=y+'px'

  }
}
function incon1Mo(){
 
    if (ic1+ic11>Calc1Width||ic1 +ic11<0){
        ic11=-ic11
      }
      else{
        ic1+=ic11
       icon1.style.left=ic1+'px'
    
    document.getElementById('picon1').innerText=icon1.getBoundingClientRect().left
      }
}
function icon2Mo(){

    if (ic2+ic22>Calc2Width||ic2 +ic22<0){
        ic22=-ic22
        
      }
      else{
        ic2+=ic22
       icon2.style.right=ic2+'px'
    
        document.getElementById('picon2').innerText=icon2.getBoundingClientRect().left
        
      }
}

function stopInterval(){
    clearInterval(interval);
}