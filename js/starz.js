

function stars(){
    let e = document.createElement('div');
    e.setAttribute('class','star');
    document.body.appendChild(e);
    e.style.left = Math.random() * (innerWidth*.75) + 'px';

    let size = Math.random() * 12;
    let duration = Math.random() * 3;

    e.style.fontSize = 12 + size +'px';
    e.style.animationDuration = 2 + duration + 's';

    setTimeout(function(){
        document.body.removeChild(e);
    },5000)
}

setInterval(function(){
    stars()
},500)