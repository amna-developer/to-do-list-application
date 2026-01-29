
const input = document.getElementById('todo-input');
const addBtn = document.getElementById('add-btn');
const todoList = document.getElementById('todo-list');

function addTask() {
    const text = input.value.trim();
    
    if (text !== "") {
        const li = document.createElement('li');
        
        li.innerHTML = `
            <span class="task-text">${text}</span>
            <button class="delete-btn">✕</button>
        `;

        
        li.querySelector('.task-text').addEventListener('click', function() {
            this.classList.toggle('completed');
        });

     
        li.querySelector('.delete-btn').addEventListener('click', function() {
            li.style.transform = "translateX(20px)";
            li.style.opacity = "0";
            setTimeout(() => li.remove(), 200);
        });

        todoList.appendChild(li);
        input.value = ""; 
    }
}


addBtn.addEventListener('click', addTask);

input.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') addTask();
});