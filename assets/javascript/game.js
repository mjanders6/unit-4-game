let picObj = [
    catwoman = {
        name: 'Cat Woman',
        hp: 100,
        id: '#heros',
        yourCharacter: false,
        defender: false,
        charList: true,
        pic: './assets/images/thumbnails/catwoman.png'
    },
    drdoom = {
        name: 'Dr. Doom',
        hp: 100,
        id: '#heros',
        yourCharacter: false,
        defender: false,
        charList: true,
        pic: './assets/images/thumbnails/drDoom.png'
    },
    magneto = {
        name: 'Magneto',
        hp: 100,
        id: '#heros',
        yourCharacter: false,
        defender: false,
        charList: true,
        pic: './assets/images/thumbnails/magneto.png'
    },
    joker = {
        name: 'Joker',
        hp: 100,
        id: '#heros',
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
                <img data-value="${picObj[i].charList}" src="${picObj[i].pic}">
            </div>
            <div class="card-content">
                <span class="card-title">${picObj[i].name}</span>
                <p>HP's: ${picObj[i].hp}</p>
            </div>
        </div>
    </div>
    `
    const heros = `${picObj[i].id}`
    const heroEl = document.createElement('div')

    heroEl.innerHTML = heroCard;
    document.querySelector(heros).append(heroEl)
}

document.addEventListener('click', e => {
    console.log(e.target.dataset.value);


})

