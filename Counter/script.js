function count() {
    let sta = document.getElementById('sta')
    let end = document.getElementById('end')
    let ste = document.getElementById('ste')
    let res = document.getElementById('res')

    if (sta.value.length == 0 || end.value.length == 0 || ste.value.length == 0) {
        window.alert('[ERROR] Missing information!')
    } else {
        res.innerHTML = 'Counting: '
        let i = Number(sta.value)
        let f = Number(end.value)
        let p = Number(ste.value)
        if (i < f) { //counting up
            for(let c = i; c <= f; c += p) {
            res.innerHTML += ` ${c} \u{1f449}`
            }
            res.innerHTML += `\u{1F3C1}`
        } else { //counting down
            for(let c =i; c >=f; c-= p) {
                res.innerHTML += ` ${c} \u{1F449}`
            }
            res.innerHTML += `\u{1F3C1}`
        }    
    }
}