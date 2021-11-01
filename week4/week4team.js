let player1Turn = true;

const play = (id) => {
    const currentCell = document.getElementById(id);
    
    if(player1Turn && currentCell.textContent === ''){
        currentCell.textContent = 'X';
        player1Turn = false;
    } else if(currentCell.textContent === ''){
        currentCell.textContent = 'O';
        player1Turn = true;
    }
}

const resetBoard = () => {
    let cellList = document.getElementsByClassName("cell");

    for (let i = 0; i < cellList.length; i++) {
        const element = cellList[i];
        element.textContent = '';
    }
    player1Turn = true;
}