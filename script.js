let container = document.querySelector(".container");
let rows ;
let cell;
let btn = document.querySelector(".erase");


function makeGrid(){
    makeRows(16);
    makeColumns(16);
}

function makeRows(num){
    for(i=0;i<num;i++){
        let row = document.createElement("div");
        container.appendChild(row).className = "gridRow";
        rows = document.getElementsByClassName("gridRow");
    }
}

function makeColumns(num){
    for(i=0;i<rows.length;i++){
        for(j=0;j<num;j++){
        let col = document.createElement("div");
        rows[j].appendChild(col).className = "cell";
        }
    }
}

function changeColor(e){
    e.target.classList.add('colored');
}

function ClearAll(){
    cell.forEach(cell => cell.classList.remove('colored'));
}

makeGrid();

cell = Array.from(document.querySelectorAll('.cell'));
cell.forEach(cell => cell.addEventListener('mouseover', changeColor));
btn.addEventListener('click',ClearAll);


