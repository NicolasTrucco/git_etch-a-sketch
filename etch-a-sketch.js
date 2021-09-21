//Crea los divs:
function divCreator(size){
    for (i=1; i<=size*size; i++){
            var d=document.createElement("div");
                container.appendChild(d);
                d.className="border";
                d.addEventListener('mouseover', colorBackground);
    }
}
// Cambia el color del background
function colorBackground (){
    const elements = document.getElementsByClassName('border'); // get all elements
    this.style.backgroundColor = `blue`;
}
// Erase:
const buttonClear = document.querySelector('#erase')
const gridContainer = document.querySelector('#container')

function erase(){
    let wholeGrid = gridContainer.querySelectorAll('div')
    wholeGrid.forEach(oneGrid => oneGrid.style.backgroundColor = '#fff')
};

buttonClear.addEventListener('click', erase)



const blackBackground = document.querySelector('#black')



divCreator(16);


