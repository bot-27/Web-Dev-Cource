var randomNUmmber1=Math.random()*6;
randomNUmmber1=Math.floor(randomNUmmber1) + 1;

var randomNUmmber2=Math.random()*6;
randomNUmmber2=Math.floor(randomNUmmber2) + 1;


var dice1img="images/dice"+randomNUmmber1+".png";

document.querySelectorAll("img")[0].setAttribute("src",dice1img);

var dice2img="images/dice"+randomNUmmber2+".png";

document.querySelectorAll("img")[1].setAttribute("src",dice2img);

if(randomNUmmber1>randomNUmmber2){
    document.querySelector("h1").innerHTML = "Player 1 wins";
}else if(randomNUmmber2>randomNUmmber1){
    document.querySelector("h1").innerHTML = "Player 2 wins";
}else{
    document.querySelector("h1").innerHTML = "Draw"
}
