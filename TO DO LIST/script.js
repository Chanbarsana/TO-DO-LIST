const Input = document.getElementById('Input');
const InputButton = document.getElementById('InputButton');
const inputList = document.getElementById('inputList');

InputButton.addEventListener('click', function() {
    const InputText = Input.value.trim(); 
    if (InputText) {
        const li = document.createElement('li');
        const span = document.createElement('span');
        span.textContent = InputText;
        const editbutton = document.createElement('button');
        editbutton.textContent = 'Edit';
        editbutton.className = 'edit-btn';
        const delButton = document.createElement('button');
        delButton.textContent = 'Delete';
        delButton.className = 'del-btn';
        li.appendChild(span);
        li.appendChild(editbutton);
        li.appendChild(delButton);
        inputList.appendChild(li);

        Input.value = ''; 

        delButton.addEventListener('click', function() {
            inputList.removeChild(li);
        });
        editbutton.addEventListener('click', function() {
            const newText = prompt('Edit your task:', span.textContent);
            if (newText !== null && newText.trim() !== '') {
                span.textContent = newText.trim();
            }
        });
        li.addEventListener('click', function() {
            li.classList.toggle('completed');
        });
    }
});





