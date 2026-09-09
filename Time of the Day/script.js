function loading() {
var msg = document.getElementById('msg')
var img = document.getElementById('photos')
var dt = new Date()
var hour = dt.getHours()

msg.innerHTML = `Now is ${hour} hours.`

if (hour >= 0 && hour < 12) {
    img.src = 'images/morning.png'
    document.body.style.background = '#af884b'
} else if (hour >= 12 && hour <= 18) {
    img.src = 'images/afternoon.png'
    document.body.style.background = '#b88083'
} else {
    img.src = 'images/night.png'
    document.body.style.background = '#2f2f27'
}
}



