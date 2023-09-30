
const button = document.querySelector('button');
button.addEventListener('click', ()=>{
   fetch('https://api.adviceslip.com/advice')
    .then(res => res.json())
    .then(data => {
        document.querySelector('p').innerText = `ADVICE #${data.slip.id}`;
        const advice = document.querySelector('.advice');
        advice.innerText = `“${data.slip.advice}”`;
    }); 
});
fetch('https://api.adviceslip.com/advice')
.then(res => res.json())
.then(data =>{
    document.querySelector('p').innerText = `ADVICE #${data.slip.id}`;
    const advice = document.querySelector('.advice');
    advice.innerText = `“${data.slip.advice}”`;
});

button.addEventListener('click', () =>{
    const audio = new Audio("click.mp3");
    audio.volume = 0.2;
    audio.play();
});
button.addEventListener('mouseenter', ()=> {
    const hover = new Audio('hover.mp3');
    hover.volume = 0.2;
    hover.play();
});
