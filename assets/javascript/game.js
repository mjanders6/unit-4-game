let heroSelected, defenderSelected


let picObj = {
    catwoman: {
        tag: 'catwoman',
        name: 'Cat Woman',
        hp: 100,
        id: 'heros',
        picClicked: false,
        status: 'waiting',
        pic: './assets/images/thumbnails/catwoman.png'
    },
    drdoom: {
        tag: 'drdoom',
        name: 'Dr. Doom',
        hp: 100,
        id: 'heros',
        picClicked: false,
        status: 'waiting',
        pic: './assets/images/thumbnails/drDoom.png'
    },
    magneto: {
        tag: 'magneto',
        name: 'Magneto',
        hp: 100,
        id: 'heros',
        picClicked: false,
        status: 'waiting',
        pic: './assets/images/thumbnails/magneto.png'
    },
    joker: {
        tag: 'joker',
        name: 'Joker',
        hp: 100,
        id: 'heros',
        picClicked: false,
        status: 'waiting',
        pic: './assets/images/thumbnails/joker.png'
    }
}

const init = _ => {
document.getElementById('heros').innerHTML = ''
document.getElementById('mySelect').innerHTML = ''
document.getElementById('defender').innerHTML = ''

}



const picElem = (picObj) => {
    for (hero in picObj) {
        const heroEl = document.createElement('div')

        const heroCard = `
        <div class="col l2">
            <div class="card">
                <div class="card-image">
                    <img id="${picObj[hero].id}-${hero}" name="${picObj[hero].name}" data-picclicked="${picObj[hero].picClicked}" data-tag="${picObj[hero].tag}" src="${picObj[hero].pic}">
                </div>
                <div class="card-content">
                    <span class="card-title">${picObj[hero].name}</span>
                    <p>HP's: ${picObj[hero].hp}</p>
                </div>
            </div>
        </div>
        `

        heroEl.innerHTML = heroCard;
        document.querySelector(`#${picObj[hero].id}`).append(heroEl)
    }
}

defenderSelected = false
heroSelected = false 

document.addEventListener('click', e => {
    console.log(e);
    console.log(e.target);

    let idChange = document.getElementById(e.target.id)
    let objFind = idChange.dataset.tag
    console.log(picObj[objFind].name);

    if (picObj[objFind].picClicked === false && picObj[objFind].id === 'heros' && defenderSelected === false) {
        picObj[objFind].picClicked = true
        picObj[objFind].id = 'defender'
        picObj[objFind].status = 'fighting'
        defenderSelected = true
        init()
        picElem(picObj)
    } else if (picObj[objFind].picClicked === false && picObj[objFind].id === 'heros' && heroSelected === false) {
        picObj[objFind].picClicked = true
        picObj[objFind].id = 'mySelect'
        picObj[objFind].status = 'fighting'
        heroSelected = true
        init()
        picElem(picObj)
    }


})

picElem(picObj)
