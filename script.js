function scrollDown() {
    window.scrollTo({top: window.innerHeight, behavior: 'smooth' });
}

let button = document.querySelector('.arrow-next')
button.addEventListener('click', scrollDown)

// Code that needs fixing
let item_name_objects = document.querySelectorAll('.merch-item-name')
let item_names = ['White shirt', 'Barca hoodie', 'Nike pants', 'Liverpool jersey', 'Flower pot', 'Red headphones']
for (let i = 0; i < item_names.length ; i += 1) {
    item_name_objects[i].innerHTML = item_names[i]
}

let block = document.querySelector('.block')
document.addEventListener('mousemove', function(e) {
    let dx = e.pageX - window.innerWidth / 2
    let dy = e.pageY - window.innerHeight / 2
    let angleX = 20 * dx / window.innerWidth / 2
    let angleY = 20 * dy / window.innerHeight / 2
    block.style.transform = `rotateX(${-angleY}deg) rotateY(${angleX}deg)`
})

