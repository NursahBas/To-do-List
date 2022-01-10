document.querySelector('#push').onclick = function
(){ 
    //adding validation for empty input field

    if(document.querySelector('#newTask input').value.length ==0){
        alert("Please Enter a Task")
    }
    //adding a new
    else{
        document.querySelector('#tasks').innerHTML
        += `
            <div class="task">
                <span id="taskname">
                    ${document.querySelector('#newTask input').value}
                </span>
                <button class="delete">
                <i class="far fa-trash-alt"></i>

                </button>

            </div>
        
        `;

        //deleting a task

        var current_tasks = document.querySelectorAll(".delete");
        for(var i=0 ; i<current_tasks.length;i++){
            current_tasks[i].onclick = function(){
                this.parentNode.remove();
            }
        }
    }

}
    
