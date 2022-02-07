

document.querySelector('#push').onclick = function(){ 
    //boş giriş alanı için doğrulama ekleme
    
   
    if(document.querySelector('#newTask input').value.length ==0){
        alert("Please Enter a Task")
    }
    //yeni ekleme
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
        function SetMaxLength(){
            var input = document.getElementById("myInput");
            input.SetMaxLength = 10;
        }

        /*//SORMAN LAZIIIIIIIIIIIIIIIIIIIIIIIIIIM !!!!!!!!!!!!!!!
        document.getElementById("#push").addEventListener("click",function(){
        document.querySelector(".popup").style.display = "flex";
        })
        document.querySelector(".buttons").addEventListener("click",function(){
        document.querySelector(".popup").style.display = "none";
        }) */
       
        
     

       
        //deleting a task

        var current_tasks = document.querySelectorAll(".delete");
        for(var i=0 ; i<current_tasks.length;i++){
            current_tasks[i].onclick = function(){
                this.parentNode.remove();
            }
        }

        //Tamamlanmış bir görevi geçmek
        
        var tasks = document.querySelectorAll(".task");
        for(var i=0; i<tasks.length; i++){
            tasks[i].onclick = function(){
            
                this.classList.toggle('completed');
            }
            
        }

        //Her girişten sonra giriş alanını temizleme 

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
	var ay=tarih.getMonth()+1;
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


      window.addEventListener('load', (event) => {
        console.log('page is fully loaded');
        /*var body = document.querySelector("body")
        body.style.backgroundColor= red */
        /*document.body.style.backgroundColor = "#AA0000";*/
    
        var popup = document.getElementById('popupid')
        var button = document.getElementById('buttonsgec');
             
        
        popup.style.display="block"; 
       /* $("#popupid").toggle(3000); */
        function getInputValue(){
            
        }

         
        document.getElementById("buttonsgec").onclick = function () {
            
            /*alert($(#popupid).text(Tebrikler));*/
            /*console.log("TEBRİKLER")*/
           /* var popup = document.getElementById('popupid');*/
           
            popup.style.display = "none";
            
         };
           
        
        

      });
     
