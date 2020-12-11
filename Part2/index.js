console.log('The house always wins!')

const grabbing = document.getElementById('grab-id')
const styling = document.getElementById('style-it')

console.log(grabbing)
console.log(styling)

function setCard(){
    const card = document.getElementById(grabbing.value);
    console.log(card);
    card.style.color = styling.value
}