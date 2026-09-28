let num = document.getElementById('anum')
let list = document.getElementById('list')
let res = document.getElementById('res')
let values = []

function isNumber(n) {
    if(Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inList(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function adding() {
    if(isNumber(num.value) && !inList(num.value, values)) {
        values.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Number ${num.value} added.`
        list.appendChild(item)
        res.innerHTML = ''
    } else {
        window.alert('Invalid number or already in the list!')
    }
    num.value = ''
    num.focus()
}

function finalize() {
    if (values.length == 0) {
        window.alert('Add number before finalize!')
    } else {
        let tot = values.length
        let highest = values[0]
        let lowest = values[0]
        let sum = 0
        let average = 0
        for(let pos in values) {
            sum += values[pos]
            if (values[pos] > highest)
                highest = values[pos]
            if (values[pos] < lowest)
                lowest = values[pos]
        }
        average = sum / tot
        res.innerHTML = ''
        res.innerHTML += `<p> In total, we have ${tot} numbers added. </p>`
        res.innerHTML += `<p> The highest number informed is ${highest}.</p>`
        res.innerHTML += `<p> The lowest number informed is ${lowest}.</p>`
        res.innerHTML += `<p> Summing all the numbers we get ${sum}.</p>`
        res.innerHTML += `<p> The average of number informed is ${average}.</p>`
    }
}