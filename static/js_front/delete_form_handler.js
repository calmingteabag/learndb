
const getCheckBoxValue = () => {
    let checkboxElems = document.getElementsByClassName("checkbox")
    for (let elem of checkboxElems) {
        console.log(elem.checked)
    }

}
document.addEventListener('DOMContentLoaded', () => { getCheckBoxValue() }, false)