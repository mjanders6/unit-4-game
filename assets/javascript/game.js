let picObj = [
    catwoman = {
        name: 'Cat Woman',
        hp: 100,
        id: 'heros',
        picClicked: false,
        // yourCharacter: true,
        // defender: false,
        // charList: true,
        pic: './assets/images/thumbnails/catwoman.png'
    },
    drdoom = {
        name: 'Dr. Doom',
        hp: 100,
        id: 'heros',
        picClicked: false,
        // yourCharacter: false,
        // defender: false,
        // charList: true,
        pic: './assets/images/thumbnails/drDoom.png'
    },
    magneto = {
        name: 'Magneto',
        hp: 100,
        id: 'heros',
        picClicked: false,
        // yourCharacter: false,
        // defender: false,
        // charList: true,
        pic: './assets/images/thumbnails/magneto.png'
    },
    joker = {
        name: 'Joker',
        hp: 100,
        id: 'heros',
        picClicked: false,
        // yourCharacter: false,
        // defender: false,
        // charList: true,
        pic: './assets/images/thumbnails/joker.png'
    }
]

const init = _ => {
}



for (let i = 0; i < picObj.length; i++) {
    const heroEl = document.createElement('div')

    const heroCard = `
    <div class="col l2">
        <div class="card">
            <div class="card-image">
                <img class="${picObj[i].id}" data-name="${picObj[i]}" data-picclicked="${picObj[i].picClicked}" src="${picObj[i].pic}">
            </div>
            <div class="card-content">
                <span class="card-title">${picObj[i].name}</span>
                <p>HP's: ${picObj[i].hp}</p>
            </div>
        </div>
    </div>
    `

    heroEl.innerHTML = heroCard;
    document.querySelector(`#${picObj[i].id}`).append(heroEl)
}

document.addEventListener('click', e => {
    console.log(e.target.dataset.name);



})
