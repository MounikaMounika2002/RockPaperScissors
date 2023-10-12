// let student={
//     name:"Mounika",
//     phno:7981711313,
//     cgpa:8.4
// }
// let x=typeof student
// console.log(typeof student);
// document.write(`${student.name}`);


// // --------------------------2----------------------------------
// let str=9.0071993e+15;
// //console.log(str+21)
// console.log(typeof str)
// let bigInt=Number.MAX_SAFE_INTEGER+1;
// // console.log(typeof bigInt );
// let bigNum = BigInt(
//     "123422222222222222222222222222222222222");
//   console.log(typeof bigNum);
// const x="Mounika";
// // x=21 -----------error---
// const obj={
//     cgpa:8.4,
//     name:"Mounika",
//     phno:7981711313,
//     feeling:"happy"
// }
// obj.friend="shilpa"+1
// obj.phno=obj.phno+1
// obj["name"]="Mouni"
// console.log(obj)

// function check()
//  {
//     let age1=document.getElementById("age").value;
//     console.log(age1)
//     if(age1>10 && age1<20)
//     {
//         console.log("age is in between 10 and 20")
//     }
// } 
// const errorMsg = "the # is not even";
// for (let number = 2; number <= 5; number++) {
//   console.log(`the # is ${number}`);
//   console.assert(number % 2 === 0, "%o", { number, errorMsg });
// }
// console.dir(document.getElementsByTagName("form"))

// drivingEligibility();
// function drivingEligibility()
// {
//     let age=Number.parseInt(prompt("Enter your age"))
// if(age>=18)
// {
    
//     alert("You are eligible to drive legally")
//     let color=(prompt("enter color"))
//     document.body.style.backgroundColor=color
//     // var y=confirm("do you wanna enter your age again??")
//     if(y)
//     drivingEligibility();
// }
// else if(age<18 && age>0)
// {
//     if(age>4){
//     alert("You are not eligible to drive legally")
//     document.body.style.backgroundColor="red"
//     // document.location="https://google.com"
//     var y=confirm("do you wanna enter your age again??")
//     if(y)
//     drivingEligibility();}

// }
// else if(age<0)
// {
//     alert("come on yaa.. how can age be negative")
//     console.error("age is negative")
//     var y=confirm("do you wanna enter your age again??")
//     if(y)
//     drivingEligibility();
// }

// else
// {
//     alert("enter a valid age")
//     var y=confirm("do you wanna enter your age again??")
//     if(y)
//     drivingEligibility();

// }
// }
// console.log(typeof document)
// console.log(typeof window)
// console.log(document.firstElementChild)
// console.log(document.getElementsByTagName("form"))
// console.log(document.head.nextElementSibling)
// console.log(document.lastElementChild)
//  document.getElementById("navbar").firstElementChild.style.color="orange"
// document.getElementById("navbar").lastElementChild.style.color="orange"
// Array.from(document.getElementsByTagName("li")).forEach((e)=>{
//     e.style.background="cyan"

// })
//  let nav1=document.getElementsByTagName("nav")[0]
// console.log(nav1)
// console.log(nav1.getAttribute("id"))
// console.log(nav1.getAttribute("class"))
// nav1.setAttribute("class","navcls1")
// console.log(nav1.removeAttribute("class"))
// console.log(nav1.attributes)
//  let a3=document.createElement("a")
//  a3.href="https://google.com"
// nav1.append(a3)
// console.log(a3)
// // nav1.before(a3)
// nav1.insertAdjacentHTML(`beforebegin`,`a3`)
// nav1.insertAdjacentHTML(`afterend`,`<a href="https:google.com"></a>`)
// a3.remove()
// let x=setTimeout(()=>alert("heyTimeOut"),3000)
// let y=setInterval(()=>alert("heyInterval"),3000)
// clearTimeout(x)
// clearInterval(y)
// let bulb=document.getElementById("bulbid")
// bulb.addEventListener("mousemove",function(){
//     bulb.classList.toggle("bulbyellowclass")
// })
// setInterval(function(){
//     let bulb=document.getElementById("bulbid1")
//     bulb.classList.toggle("bulbyellowcls")
// },500)
// setInterval(function(){
//     let bulb=document.getElementById("bulbid2")
//     bulb.classList.toggle("bulbredcls")
// },600)
// setInterval(function(){
//     let bulb=document.getElementById("bulbid3")
//     bulb.classList.toggle("bulbbluecls")
// },700)
// setInterval(function(){
//     let bulb=document.getElementById("bulbid4")
//     bulb.classList.toggle("bulbgreencls")
// },800)
// setInterval(function(){
//     let bulb=document.getElementById("bulbid5")
//     bulb.classList.toggle("bulborangecls")
// },900)
// setInterval(function(){
//     let bulb=document.getElementById("bulbid6")
//     bulb.classList.toggle("bulbmagentacls")
// },1000)
// function loadscript(src,callback){
//     var script=document.createElement("script")
//     script.src=src
//     script.onload=()=>{
//         callback(null)
//     }
//     script.onerror=()=>{
//         callback(new Error("failed"))
//     }
//     document.head.append(script)
// }
// loadscript("https://codewithhrry.com",(error)=>{
//     if(error){
//     console.log(error)
//     return
//     }
//     else{
//     alert("script loaded")
//     }
// })
alert("are you bored...play RockPaperScissors and have some fun!!")
var userScore=0;
var systemScore=0;
function rockfun(){
    alert("you chose rock")
    setTimeout(()=>{var rpsarr=["paper","scissors","rock"]
    var rndm=Math.floor(Math.random()*3)
    var sys=rpsarr[rndm]
    var user="rock"
    if(sys=="paper"){
        systemScore=systemScore+1
        let obtscore=document.createElement("li")
        obtscore.textContent=systemScore
        let sysscorecls=document.getElementsByClassName("sysScore")[0]
        if(sysscorecls.hasChildNodes()){
            let li=sysscorecls.firstChild;
            console.log(li)
            sysscorecls.replaceChild(obtscore,li)
         }
        sysscorecls.appendChild(obtscore)
        alert("Sorry...System chose paper so you lost")
    }
    else if(sys=="scissors"){
        
        userScore=userScore+1
        var obtscore2=document.createElement("li")
        obtscore2.textContent=userScore
        var userscorecls=document.getElementsByClassName("userScore")[0]
        if(userscorecls.hasChildNodes()){
           let li=userscorecls.firstChild;
           console.log(li)
           userscorecls.replaceChild(obtscore2,li)
        }
        userscorecls.appendChild(obtscore2)
     alert("hey,HURRAY..You Won..System chose scissors")
    
    }
    else
    alert("its a tie...try again..System has also chosen rock")},800)
}
function paperfun(){
    alert("you chose paper")
    setTimeout(()=>{var rpsarr=["rock","paper","scissors"]
    var rndm=Math.floor(Math.random()*4)
    var sys=rpsarr[rndm]
    var user="paper"
    if(sys=="Scissors"){
        systemScore=systemScore+1
        let obtscore=document.createElement("li")
        obtscore.textContent=systemScore
        let sysscorecls=document.getElementsByClassName("sysScore")[0]
        if(sysscorecls.hasChildNodes()){
            let li=sysscorecls.firstChild;
            console.log(li)
            sysscorecls.replaceChild(obtscore,li)
         }
        sysscorecls.appendChild(obtscore)
     alert("Sorry...System chose Scissors so you lost ")
    }
    else if(sys=="rock"){
        userScore=userScore+1
        var obtscore2=document.createElement("li")
        obtscore2.textContent=userScore
        var userscorecls=document.getElementsByClassName("userScore")[0]
        if(userscorecls.hasChildNodes()){
           let li=userscorecls.firstChild;
           console.log(li)
           userscorecls.replaceChild(obtscore2,li)
        }
        userscorecls.appendChild(obtscore2)
     alert("hey,HURRAY..You Won..System chose rock")
    }
    else
    alert("its a tie...try again..System has also chosen paper")},800)
}
function scissorsfun(){
    alert("you chose Scissors")
    setTimeout(()=>{var rpsarr=["rock","paper","scissors"]
    var rndm=Math.floor(Math.random()*4)
    var sys=rpsarr[rndm]
    var user="Scissorsr"
    if(sys=="rock"){
        systemScore=systemScore+1
        let obtscore=document.createElement("li")
        obtscore.textContent=systemScore
        let sysscorecls=document.getElementsByClassName("sysScore")[0]
        if(sysscorecls.hasChildNodes()){
            let li=sysscorecls.firstChild;
            console.log(li)
            sysscorecls.replaceChild(obtscore,li)
         }
        sysscorecls.appendChild(obtscore)
     alert("Sorry...System chose rock so you lost ")
     
    }
    else if(sys=="paper"){
        userScore=userScore+1
        var obtscore2=document.createElement("li")
        obtscore2.textContent=userScore
        var userscorecls=document.getElementsByClassName("userScore")[0]
        if(userscorecls.hasChildNodes()){
           let li=userscorecls.firstChild;
           console.log(li)
           userscorecls.replaceChild(obtscore2,li)
        }
        userscorecls.appendChild(obtscore2)
     alert("hey,HURRAY..You Won..System chose rock")
    }
    else
    alert("its a tie...try again..System has also chosen Scissors")},800)
}

