let picObj = [
    catwoman = {
        name: 'Cat Woman',
        class: 'pic',
        id: 'img',
        yourCharacter: false,
        defender: false,
        charList: true,
        pic: './assets/images/thumbnails/catwoman.png'
    },
    drdoom = {
        name: 'Dr. Doom',
        class: 'pic',
        id: 'img',
        yourCharacter: false,
        defender: false,
        charList: true,
        pic: './assets/images/thumbnails/drDoom.png'
    },
    magneto = {
        name: 'Magneto',
        class: 'pic',
        id: 'img',
        yourCharacter: false,
        defender: false,
        charList: true,
        pic: './assets/images/thumbnails/magneto.png'
    },
    joker = {
        name: 'Joker',
        class: 'pic',
        id: 'img',
        yourCharacter: false,
        defender: false,
        charList: true,
        pic: './assets/images/thumbnails/joker.png'
    }
]

for (let i = 0; i < picObj.length; i++) {
    
    const heroCard = `
    <div class="col l2">
        <div class="card">
            <div class="card-image">
            <img data-value=${picObj[i].charList} src="${picObj[i].pic}" alt="">
            <span class="card-title">${picObj[i].name}</span>
            </div>
        </div>
    </div>
    `
    const heroEl = document.createElement('div')
    heroEl.innerHTML = heroCard;
    document.querySelector('#test').append(heroEl)
}

document.addEventListener('click', e => {
    console.log(e.target.dataset.value);
    
    
})