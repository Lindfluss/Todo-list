//GET запрос
fetch('db.json')
    .then((res) => res.json())
    .then((data) => setTodos(data));
    
function setTodos({todos}) {
    list.insertAdjacentHTML(
        'beforeend', `
            ${todos.map((todo) => `
            <li>${todo.description}
                <span class="icons">
                    <input class="check" type="checkbox" />
                    <i class="fas fa-trash"></i>
                </span>
            </li>`).join(' ')}
        `
    );
}