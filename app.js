document.querySelector('button').addEventListener('click', clickedFunction);

function clickedFunction(event) {
    console.log('click');
    document.body.classList.toggle('negative');
}
