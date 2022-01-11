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
                <button class="task">
                <i class="far fa-check-circle"></i>
                </button>
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

        //Crossing off a completed task
        
        var tasks = document.querySelectorAll(".task");
        for(var i=0; i<tasks.length; i++){
            tasks[i].onclick = function(){
                
                this.classList.toggle('completed');
            }
        }

        //Clearing the input field after each entry

        document.querySelector("#newTask input").value = "";
    }

}
    
