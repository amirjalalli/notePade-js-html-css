let $ = document

const inputElem = $.querySelector('#input-field')
const btnSaveElem = $.querySelector('#btn-save')
const btnDeleteElem = $.querySelector('#btn-delete')
const colorBox = $.querySelectorAll('.color-box')
const noteContainer = $.querySelector('#listed')

colorBox.forEach(function(colorBox){
    colorBox.addEventListener('click', function(event){
        console.log(event.target)
        let mainColor = event.target.style.backgroundColor 
        inputElem.style.backgroundColor = mainColor
    }) 
})

function generateNewNote (){
    let newNoteDivElem = $.createElement('div')
    newNoteDivElem.classList = 'card shadow-sm rounded'
    let inputBg = inputElem.style.backgroundColor
    newNoteDivElem.style.backgroundColor = inputBg
    newNoteDivElem.addEventListener('click',removeNote)

    let newNotePElem = $.createElement('p')
    newNotePElem.classList = 'card-text p-3'
    newNotePElem.innerHTML = inputElem.value

    newNoteDivElem.append(newNotePElem)
    noteContainer.append(newNoteDivElem)

    inputElem.value = ''
    inputElem.style.backgroundColor = '#fff'
}

function removeNote(event){
    let removeparentElem =  event.target.parentElement
    removeparentElem.remove()
}



btnDeleteElem.addEventListener('click', function(){
    inputElem.value = ''
    inputElem.style.backgroundColor = '#fff'
})
inputElem.addEventListener('keydown', function(event){
    if (event.keyCode === 13){
       if (inputElem.value) {
           generateNewNote()
       }
    }
})

btnSaveElem.addEventListener('click', generateNewNote)



