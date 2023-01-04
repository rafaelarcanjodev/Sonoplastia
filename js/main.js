function playSound(idSound){
    var audio = document.querySelector(idSound);
    audio.pause();
    audio.currentTime = 0;
    audio.play();
}

const listOfButtons = document.querySelectorAll('.button');

for (let count = 0; count < listOfButtons.length; count++){

    const button = listOfButtons[count];
    const sound = button.classList[1];
    const idSound = `#sound-${sound}`;

    listOfButtons[count].onclick = function(){
        playSound(idSound)
    }

    button.onkeydown = function(event){
        if((event.code === 'Space')||(event.code == 'Enter')){
            button.classList.add('ativa');
        }
    }

    button.onkeyup = function(){
        button.classList.remove('ativa');
    }
}