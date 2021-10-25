// // buttons and counter text
// var counter = document.querySelector('p')
// var btnPlus = document.querySelector('.plus')
// var btnminus = document.querySelector('.minus')
// var btnlike = document.querySelectorAll('.like')
// var price = document.querySelector('.price')
// var priceunite = document.querySelector('.unitPrice')
// var btndel = document.querySelector('.delete')

// // initialize the count variable
// var count = 0;
// var tot = 0;
// //btns.forEach((plus) => {
// //	plus.addEventListener('click', (e) => {
// 	//		count++;
//     //  counter.textContent = count;
//   //})
  
// //})
  
// //});
// btnPlus.addEventListener('click',function(){
//   count+=1;
//   counter.textContent = count;
// })

// btnminus.addEventListener('click',function(){
//   count-=1;
//   if(count<0){
//     count=0;
//     counter.textContent = count;
//   }
//   counter.textContent = count;
// })

// btnPlus.addEventListener('click',function(){
// counter.style.color="red";
// })
// btnPlus.addEventListener('click',function(){
//   var qtite=counter.innerText;
//   var pce=priceunite.innerText;
//   tot = qtite*pce;
//   console.log(priceunite);
//   console.log(counter);
//   console.log(tot);
//   price.textContent = tot;
//   })
//   btnminus.addEventListener('click',function(){
//     var qtite=counter.innerText;
//     var pce=priceunite.innerText;
//     tot = qtite*pce;
//     console.log(priceunite);
//     console.log(counter);
//     console.log(tot);
//     price.textContent = tot;
//     })
// btndel.addEventListener('click',function(){
//   count=0;
//   tot=0;
//   counter.textContent = count;
//   price.textContent = tot;
// })

  
// // btnlike.addEventListener('click',function(){
// //   if(btnlike.style.color!='red'){
// //   btnlike.style.color='red';}
// //   else{
// //   btnlike.style.color='gray'
// //   }
// // })
// btnlike.forEach((like) => {
//   plus.addEventListener('click', (e) => {
//     if(btnlike.style.color!='red'){
//       btnlike.style.color='red';}
//       else{
//       btnlike.style.color='gray';
//       }
//     })
// });

var btnPlus = document.querySelectorAll('.plus')
var prices = document.querySelectorAll('.price')
console.log(prices)
var unitPrice = document.querySelectorAll('.unitePrice')

  for (let i = 0; i < btnPlus.length; i++) {
    btnPlus[i].addEventListener('click',increment)
    };

function increment(event){
 var count = event.target;
 var parent = count.parentElement;
 var tar =Number(parent.querySelector('p').innerHTML);
tar++
parent.querySelector('p').innerHTML = tar;
var grandparent = parent.parentElement;
var tab = grandparent.parentElement;
var uprc = Number(tab.querySelector('.unitPrice').innerHTML);
var pce = tar*uprc;
tab.querySelector('.price').innerHTML = pce
total()
};

var btnminus = document.querySelectorAll('.minus')

  for (let i = 0; i < btnminus.length; i++) {
    btnminus[i].addEventListener('click',decrement)
    };

function decrement(event){
 var count1 = event.target;
 var parent1 = count1.parentElement;
 var tar =Number(parent1.querySelector('p').innerHTML);
tar--;
if(tar<0){
  tar=0;
  parent1.querySelector('p').innerHTML = tar;
}
else{
parent1.querySelector('p').innerHTML = tar
}
var grandparent = parent1.parentElement;
var tab = grandparent.parentElement;
var uprc = Number(tab.querySelector('.unitPrice').innerHTML);
var pce = tar*uprc;
tab.querySelector('.price').innerHTML = pce
total()
};

var btnlike = document.querySelectorAll('.like')

  for (let i = 0; i < btnlike.length; i++) {
    btnlike[i].addEventListener('click',stl)
    };
function stl(event){
var tar = event.target;
var parent = tar.parentElement;
if(parent.style.color != "red"){
parent.style.color="red";
}
else{
  parent.style.color = "#424242";
}
}
var btndel = document.querySelectorAll('.delete')
for (let i = 0; i < btndel.length; i++) {
  btndel[i].addEventListener('click',dlt) 
};
function dlt(event){
var tar = event.target
var parent = tar.closest("tr")
var del1 = Number(parent.querySelector('.price').innerHTML)
del1 = 0
parent.querySelector('.price').innerHTML = del1
parent.querySelector('p').innerHTML = 0
total()
};

function total(){
  var tot = 0;
for (let i = 0; i < prices.length; i++) {

//  var tar0 = Number(prices[0].innerHTML);
//  var tar1 = Number(prices[1].innerHTML);
//  var tar2 = Number(prices[2].innerHTML);
//  var tar3 = Number(prices[3].innerHTML);
//  tot=tar0+tar1+tar2+tar3
 console.log(Number(prices[i].innerHTML))

 tot+=Number(prices[i].innerHTML);
 

}
document.querySelector('#total').innerHTML=tot;
}
