// let btnShow = true

function showSecret(){

    const spideyBtn = document.querySelector('#spideyBtn');
    const spideyImg = document.querySelector('#spideyGif');
    const coolText = document.querySelector('#coolText')

    
    if(spideyBtn.textContent === 'Reveal'){
        spideyBtn.innerText = 'Hide';
        spideyImg.classList.toggle('hideSecret');
        coolText.classList.toggle('skittles')
        console.log('insidebtnShow');
    } else {
        spideyBtn.textContent = 'Reveal';
        spideyImg.classList.toggle('hideSecret');
        coolText.classList.toggle('skittles')
        console.log('else btn');
    }

    

    // console.log('clicked')
}