let points = 0;
let play = 1; //true


function createGrid() {
    const box = document.getElementById('mainDiv');
    for (i=0 ; i<100 ; i++) {
        let square = document.createElement('div');  //creazione div quadrato
        square.classList.add('square'); //attribuzione .square al div appena creato
        square.setAttribute('onclick', 'step(this)') //attribuzione funzioni al div .square
        box.appendChild(square); //inseriamo i div .square nel div creato nel html
    }
    createBombs();
}


function createBombs() {
    let squares = document.querySelectorAll('.square');
    for (i=0; i<20; i++) {
        let casual = Math.floor(Math.random() * 100);
        squares[casual].classList.add('bomb');
    }
}

function step(e) {
    if (!e.classList.contains('bomb') && play == 1) {  //!=negazione
        e.classList.add('good');
        points++
        document.getElementById('points').innerText = points;
    } else if (e.classList.contains('bomb') && play == 1) {
        e.classList.add('explosion');
        play = 0;
        document.getElementById('gameover').style.opacity = '1';
    }
}


/*function step(event) {
    console.log(event);
    }*/

createGrid();


