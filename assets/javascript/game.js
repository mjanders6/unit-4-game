let picObj = {
    catwoman: {
        name: 'Cat Woman',
        class: 'pic',
        id: 'img',
        yourCharacter: false,
        defender: false,
        charList: true,
        pic: './assets/images/thumbnails/catwoman.png'
    },
    drdoom: {
        name: 'Dr. Doom',
        class: 'pic',
        id: 'img',
        yourCharacter: false,
        defender: false,
        charList: true,
        pic: './assets/images/thumbnails/drDoom.png'
    },
    magneto: {
        name: 'Magneto',
        class: 'pic',
        id: 'img',
        yourCharacter: false,
        defender: false,
        charList: true,
        pic: './assets/images/thumbnails/Magneto.png'
    },
    joker: {
        name: 'Joker',
        class: 'pic',
        id: 'img',
        yourCharacter: false,
        defender: false,
        charList: true,
        pic: './assets/images/thumbnails/joker.png'
    },
}
// create a class
// append to that class the image structure with a loop.
// need to loop through the object and pull out the name, picture, 
// document.querySelector('#test').innerHTML = `<img src="${picObj.catwoman.pic}" alt="">`
// document.querySelector('#test').innerHTML = `
// <div class="col l2">
//     <div class="card">
//         <div id="1" class="card-image">
//         <img src="${picObj.catwoman.pic}" alt="">
//             <span class="card-title">Cat Woman</span>
//         </div>
//     </div>
// </div>
// `

for (hero in picObj) {
    // const heroDiv = document.createElement('span')
    // const heroImage = document.createElement('img')
    
    // heroDiv.className = `card ${picObj[hero].class}`
    // heroImage.src = picObj[hero].pic
    // heroDiv.appendChild(heroImage)
    
    const heroCard = `
    <div class="col l2 ">
        <div class="card ${picObj[hero].class}">
            <div id="1" class="card-image">
            <img src="${picObj[hero].pic}" alt="">
            <span class="card-title">${picObj[hero].name}</span>
            </div>
        </div>
    </div>
    `
    const heroEl = document.createElement('div')
    heroEl.innerHTML = heroCard;
    document.querySelector('#test').append(heroEl)
}

document.addEventListener('click', e => {
    console.log(e);
    
})