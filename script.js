let addToDoButton = document.getElementById('addToDo');
let toDoContainer = document.getElementById('toDoContainer');
let inputField = document.getElementById('inputField');


addToDoButton.addEventListener('click', function(){

    if ((inputField.value).length > 0){

        var todo = document.createElement('div');
        todo.classList.add('todo');
        todo.setAttribute('id', 'todo');
    
        var paragraph = document.createElement('p');
        paragraph.classList.add('paragraph-styling');
   
        paragraph.innerText = (inputField.value[0].toUpperCase() + inputField.value.slice(1));    // Make first character capital

        paragraph.style.marginLeft = '10px'
    
        var delButton = document.createElement('button');
        delButton.classList.add('del');
        delButton.setAttribute('id', 'del');
        delButton.textContent = 'X'
        delButton.style.marginRight = '10px'
    
        toDoContainer.appendChild(todo);
        todo.appendChild(paragraph);
        todo.appendChild(delButton);
    
        inputField.value = '';

    }
    else{
        alert('Please enter any todo');
    };

    delButton.addEventListener('click', function(){
        toDoContainer.removeChild(todo);
    });

    todo.addEventListener('click', function(){
        paragraph.style.textDecoration= 'line-through';
    });

});


inputField.addEventListener('keypress', function(event){

    if (event.key == "Enter") {

        if ((inputField.value).length > 0){
    
            var todo = document.createElement('div');
            todo.classList.add('todo');
            todo.setAttribute('id', 'todo');
        
            var paragraph = document.createElement('p');
            paragraph.classList.add('paragraph-styling');
       
            paragraph.innerText = (inputField.value[0].toUpperCase() + inputField.value.slice(1));    // Make first character capital
    
            paragraph.style.marginLeft = '10px'
        
            var delButton = document.createElement('button');
            delButton.classList.add('del');
            delButton.setAttribute('id', 'del');
            delButton.innerText = 'X'
            delButton.style.marginRight = '10px'
        
            toDoContainer.appendChild(todo);
            todo.appendChild(paragraph);
            todo.appendChild(delButton);
        
            inputField.value = '';
    
        }
        else{
            alert('Please enter any todo');
        };
    }

    delButton.addEventListener('click', function(){
        toDoContainer.removeChild(todo);
    });

    todo.addEventListener('click', function(){
        paragraph.style.textDecoration= 'line-through';
    });
 

});
