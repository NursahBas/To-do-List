
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
       /* document.querySelector('#tasks').innerHTML
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
        
        `;*/

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

/*var bugun = new Date();
//gun
var formatliTarih=bugun.getDate();
//getmonth fonksiyonu ayları 0 ile 11 aralığında doner
//bu yuzden +1 biz ekliyoruz , 0 birinci ay yani
formatliTarih=formatliTarih+"."+Number(bugun.getMonth()+1);
//yıl
formatliTarih=formatliTarih+"."+bugun.getFullYear();
document.getElementById("formatliTarih").innerHTML = formatliTarih;*/
   
/* Ayrııııı
    var tarih=new Date();
	var formatliTarih=tarih.getDay();
	var formatliTarih=formatliTarih+"/"+Number(tarih.getMonth()+1);
	var formatliTarih=formatliTarih+"/"+tarih.getFullYear();
    document.getElementById("formatliTarih").innerHTML = formatliTarih;

    var saat=new Date();
	var formatlSaat=saat.getHours();
	var formatlSaat=formatlSaat+"/"+saat.getMinutes();
	var formatlSaat=formatlSaat+"/"+saat.getSeconds();	
	document.getElementById("formatlSaat").innerHTML = formatlSaat;
*/

    var tarih=new Date();
	var yil=tarih.getFullYear();
	var ay=tarih.getMonth();
	var gun=tarih.getDay();
	var saat=tarih.getHours();
	var dakika=tarih.getMinutes();
	var saniye=tarih.getSeconds();	
	document.write(gun+"/"+ay+"/"+yil+"<br>"+saat+":"+dakika+":"+saniye);


   /* function startTime() {
        const today = new Date();
        let h = today.getHours();
        let m = today.getMinutes();
        let s = today.getSeconds();
        m = checkTime(m);
        s = checkTime(s);
        document.getElementById('txt').innerHTML =  h + ":" + m + ":" + s;
        setTimeout(startTime, 1000);
      }
      
      function checkTime(i) {
        if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
        return i;
      }*/