function verify() {
    var dt = new Date()
    var year = dt.getFullYear()
    var fyear = document.getElementById('year')
    var res = document.getElementById('res')

    if (fyear.value.length ==0 || Number (fyear.value) > year) {
        window.alert('[ERROR] Verify the information and try again!')
    } else {
        var fgend = document.getElementsByName('gend')
        var age = year - Number(fyear.value)
        var gender = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'photo')
        if (fgend[0].checked) {
            gender = 'Female'
            if (age >=0 && age <10 ){
                img.setAttribute('src', 'girl.png')
            } else if (age < 21){
                img.setAttribute('src', 'teen-girl.png')
            } else if (age < 50){
                img.setAttribute('src', 'woman.png')
            } else {
                img.setAttribute('src', 'older.woman.png')
            }
        } else if (fgend[1].checked) {
            gender = 'Male'
            if (age >=0 && age <10 ){
                img.setAttribute('src', 'boy.png')
            } else if (age < 21){
                img.setAttribute('src', 'teen-boy.png')
            } else if (age < 50){
                img.setAttribute('src', 'man.png')
            } else {
                img.setAttribute('src', 'older.man.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `You are a ${gender} and is ${age} years.`
        res.appendChild(img)
    }
}