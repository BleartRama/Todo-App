const todoForm = document.querySelector('.formStyle')
const todoInput = document.querySelector('#todo-input')
const todoList = document.querySelector('#todo-list')
const clearBtn = document.querySelector('#clear')

let todoIdCounter = 0

const addTodo = (input) => {
    const li = document.createElement('li')
    const deleteBtn = document.createElement('button')

    // Unikt id för varje checkbox
    const id = `todo-${todoIdCounter++}`

    // <div class="checkbox-wrapper-52">
    const wrapper = document.createElement('div')
    wrapper.classList.add('checkbox-wrapper-52')

    // <label for="todo-x" class="item">
    const itemLabel = document.createElement('label')
    itemLabel.classList.add('item')
    itemLabel.setAttribute('for', id)

    // <input type="checkbox" id="todo-x" class="hidden"/>
    const checkbox = document.createElement('input')
    checkbox.type = 'checkbox'
    checkbox.id = id
    checkbox.classList.add('hidden') // samma som i exemplet, även om CSS redan gömmer den
    li.classList.add('todo-item');

    // <label for="todo-x" class="cbx"> <svg>...</svg> </label>
    const cbxLabel = document.createElement('label')
    cbxLabel.classList.add('cbx')
    cbxLabel.setAttribute('for', id)

    const svgNS = 'http://www.w3.org/2000/svg'
    const svg = document.createElementNS(svgNS, 'svg')
    svg.setAttribute('width', '14px')
    svg.setAttribute('height', '12px')
    svg.setAttribute('viewBox', '0 0 14 12')

    const polyline = document.createElementNS(svgNS, 'polyline')
    polyline.setAttribute('points', '1 7.6 5 11 13 1')

    svg.appendChild(polyline)
    cbxLabel.appendChild(svg)

    // <label for="todo-x" class="cbx-lbl">Din text</label>
    const textLabel = document.createElement('label')
    textLabel.classList.add('cbx-lbl', 'todo-text')
    textLabel.setAttribute('for', id)
    textLabel.textContent = input

    // Viktigt: ordningen MÅSTE vara:
    // input -> cbx -> cbx-lbl
    itemLabel.appendChild(checkbox)
    itemLabel.appendChild(cbxLabel)
    itemLabel.appendChild(textLabel)

    wrapper.appendChild(itemLabel)

    // Lägg in i li
    li.appendChild(wrapper)

    // Delete-knappen
    deleteBtn.textContent = 'x'
    deleteBtn.classList.add('delete-button')
    li.appendChild(deleteBtn)

    // Lägg till i listan
    todoList.appendChild(li)

    // (VALFRITT) extra tydlig strykning med JS + CSS-klassen .done
    checkbox.addEventListener('change', () => {
        if (checkbox.checked) {
            textLabel.classList.add('done')
        } else {
            textLabel.classList.remove('done')
        }
    })

    // Ta bort todo
    deleteBtn.addEventListener('click', () => {
        li.remove()
    })
}

todoForm.addEventListener('submit', (event) => {
    event.preventDefault()
    
    const input = todoInput.value
    

    if (!input.trim()){
        todoForm.reset()
        return
    }

    addTodo(input)
    todoForm.reset()
    
})

clearBtn.addEventListener('click', () => {
    todoList.innerHTML = ''

})





