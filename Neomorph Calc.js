const result = document.getElementById('display-result')
const bros = document.querySelectorAll('.bro')

bros.forEach(element => {
    element.addEventListener('click', () => {
        result.value += element.innerText
    })
})

let calculate = (number) => {
    result.value = result.value + number
}

let getResult = () => {
    try {
        result.value = eval(result.value)
    }
    catch(err) {
        alert('Enter a valid input')
    }
}

let clr = () => {
    result.value = ''
}

let del = () => {
    result.value = result.value.slice(0, -1)
}