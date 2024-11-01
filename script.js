document.addEventListener("DOMContentLoaded", () => {

    const todo = document.getElementById("to-do");
    const input = document.getElementById("input");
    const to_do_list = document.getElementById("to_do list");

    todo.addEventListener("submit", (e) => {
        e.preventDefault();
        const taskText = input.value.trim();
        if (taskText !== "") {
            addTask(taskText);
            input.value = "";
        }
    });

    function addTask(taskText) {
        const taskItem = document.createElement("li");
        taskItem.innerHTML = `
            <span>${taskText}</span>
            <button class="remove-btn">X</button>
        `;
        taskItem.addEventListener("click", () => {
            taskItem.classList.toggle("completed");
        });

        taskItem.querySelector(".remove-btn").addEventListener("click", (e) => {
            e.stopPropagation();
            taskItem.remove();
        });

        to_do_list.appendChild(taskItem);
    }

});
