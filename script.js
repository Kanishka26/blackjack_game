const st=document.getElementById("start-btn");
const ng=document.getElementById("new-btn");
let head=document.querySelector(".head");
let card=document.querySelector(".card");
let sums=document.querySelector(".sum");
let fn,sn;
let cards=[];
let sum=0;
isAlive=false;
isBlackJack=false;
st.addEventListener("click",startGame);
ng.addEventListener("click",newgame);
function startGame(){
    cards=[];;
    assignrandom();
    rendergame();
}
function rendergame(){ if(sum<=20){
        head.textContent="Do you want to draw a new card?";
        isAlive=true;
    }
    else if(sum===21){
        head.textContent="Wohoo! You've got Blackjack!";
        isBlackJack=true;
    }
    else{
        head.textContent="You're out of the game!";
    }}
function assignrandom(){
    fn=Math.floor(Math.random() * 13 + 1);
    sn=Math.floor(Math.random() * 13 + 1);
    //console.log(fn);
    //console.log(sn);
    cards.push(fn);
    cards.push(sn);
    card.textContent="Cards: "+cards;
    sum=fn+sn;
    sums.textContent="Sum: "+sum;
}

function newgame(){
    if(isAlive && !isBlackJack&& sum<21){
        let newcard=Math.floor(Math.random()*13+1);
        sum=sum+newcard;
        cards.push(newcard);
        card.textContent="Cards: "+cards;
        sums.textContent="Sum: "+sum;}
        rendergame();
    }