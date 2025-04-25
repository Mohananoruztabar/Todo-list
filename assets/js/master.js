const inputBox = document.getElementById('input-box');
const listContainer = document.getElementById('list-container')

function addTask(){
    const text = inputBox.value
    if(text == ''){
        alert('you must write something!')
    }else{
        let li = document.createElement('li')
        li.innerHTML = text
        listContainer.appendChild(li)
        inputBox.value = null
        inputBox.focus()
        let span = document.createElement('span')
        span.innerHTML = "\u00d7"
        li.appendChild(span)
    }
}
listContainer.addEventListener('click', function(e){
    if(e.target.tagName === 'LI'){
        e.target.classList.toggle('checked')
    }else if(e.target.tagName == 'SPAN'){
        if(confirm('sure?')){
            e.target.parentElement.remove()
        }
    }
},false)