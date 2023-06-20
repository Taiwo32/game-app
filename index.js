var scores, roundScore, activePlayer, dice, gamePlaying;

init()







document.querySelector('.btn--roll').addEventListener('click', function(){
    if(gamePlaying){
         ///1 Random number 
    var dice = Math.floor(Math.random() * 6) + 1
    ////2. Displaying result

    var diceDom = document.querySelector('.dice')
    diceDom.style.display = 'block';
    diceDom.src = 'dice-' + dice + '.png'
    ///3 updating the resu.qult to the round score
    

    if (dice !=1){
        roundScore += dice
    document.querySelector('#current--' + activePlayer).textContent = roundScore
    } else{
        nextPlayer()
    }

    }
   
    
});
document.querySelector('.btn--hold').addEventListener('click', function(){
    if(gamePlaying){
        scores[activePlayer] += roundScore

        document.querySelector('#score--' + activePlayer).textContent = scores[activePlayer]
        if (scores[activePlayer] >= 20 ){
            document.querySelector('#name--' + activePlayer).textContent = 'winner!'
            document.querySelector('.dice').style.display = 'none'
            document.querySelector('.player--' + activePlayer).classList.add('player--winner')
            document.querySelector('.player--' + activePlayer).classList.remove('player--active')
            gamePlaying = false
        }else{
            nextPlayer() 
    
        }

    }
   



  
  
  
})


function nextPlayer(){
    activePlayer === 0 ? activePlayer =1 : activePlayer = 0;
    roundScore = 0
    document.getElementById('current--0').textContent = '0'
    document.getElementById('current--1').textContent = '0'
    document.querySelector('.dice').style.display = 'none'

    document.querySelector('.player--0').classList.toggle('player--active')
    document.querySelector('.player--1').classList.toggle('player--active')

}
document.querySelector('.btn--new').addEventListener('click',init)

function init(){
    scores = [0,0]
roundScore = 0;
activePlayer = 0;
gamePlaying = true;




document.querySelector('.dice').style.display = 'none'
document.getElementById('score--0').textContent = '0'
document.getElementById('score--1').textContent = '0'
document.getElementById('current--0').textContent = '0'
document.getElementById('current--1').textContent = '0'
document.getElementById('name--0').textContent = 'player 1'
document.getElementById('name--1').textContent = 'player 2'
document.querySelector('.player--0').classList.remove('player--winner')
document.querySelector('.player--1').classList.remove('player--winner')
document.querySelector('.player--0').classList.remove('player--active')
document.querySelector('.player--1').classList.remove('player--active')
document.querySelector('.player--0').classList.add('player--active')

}


