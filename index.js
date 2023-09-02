const input = document.querySelector("#tareas");
const btn = document.querySelector("#btn");
const ul = document.querySelector(".ul");

btn.addEventListener('click', function (e) {
    e.preventDefault();

    const texto = input.value;
    const li = document.createElement('li');
    li.classList.add("lista")
    const p = document.createElement("p");
    p.textContent = texto;

    li.appendChild(p);
    li.appendChild(addDeleteBtn())
    ul.appendChild(li);

    input.value = ''; // Limpiar el campo de entrada después de agregar la tarea
})


function addDeleteBtn() {
    const deleteBtn = document.createElement('button');
    
    deleteBtn.textContent = 'X';
    deleteBtn.classList.add("eliminar-X", "btn-danger");

    deleteBtn.addEventListener('click', function(e){
        const item = e.target.parentNode;
        ul.removeChild(item);
    });

    return deleteBtn;
}