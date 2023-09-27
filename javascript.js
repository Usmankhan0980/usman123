let totalexpense = 0;
var a ;
window.addEventListener('load',()=>{

    const form = document.querySelector('#new-task-form');
    const input = document.querySelector('#new-task-input');
    const fname = document.querySelector('#fathername');
    const Score = document.querySelector('#Score');

    const list_el3 = document.querySelector('.tasks3');
    const list_el2 = document.querySelector('.tasks2');
    const list_el1 = document.querySelector('.tasks1');
    const list_el = document.querySelector('.tasks');

    form.addEventListener('submit',(e)=>{
        e.preventDefault();

        
        const task1 = fname.value;
        const task2 = Score.value;
        
        const task = input.value;

        if(!task){
            alert("Please fill task");
            return;
        }


        const task_el = document.createElement("div");
        task_el.classList.add("task");
        const td = document.createElement("td");
        td.appendChild(task_el)
        const task_content_el = document.createElement("P");
        task_content_el.classList.add("content");
   
  
        task_content_el.textContent = task;
   
        task_el.appendChild(task_content_el);
        list_el.appendChild(task_el);
  


        
        const task_el1 = document.createElement("div");
        task_el1.classList.add("task1");
        const td1 = document.createElement("td");
        td1.appendChild(task_el1)
        const task_content_el1 = document.createElement("P");
        task_content_el1.classList.add("content");
   
  
        task_content_el1.textContent = task1;
   
        task_el1.appendChild(task_content_el1);
        list_el1.appendChild(task_el1);
        


          const task_el2 = document.createElement("div");
        task_el2.classList.add("task");
        const td2 = document.createElement("td");
        td.appendChild(task_el2)
        const task_content_el2 = document.createElement("P");
        task_content_el2.classList.add("content");
   
  
        task_content_el2.textContent = task2;
   
        task_el2.appendChild(task_content_el2);
        list_el2.appendChild(task_el2);
  

        input.value = "";
// Declare and initialize the totalexpense variable.


function abc() {

  totalexpense += parseInt(task2);


  console.log(totalexpense);

  const task_el3 = document.createElement("div");
  task_el3.classList.add("task");
  const td3 = document.createElement("td");
  td3.appendChild(task_el3);
  const task_content_el3 = document.createElement("p");
  task_content_el3.classList.add("content");

  // Set the text content of the task element to the updated total expense.
  task_content_el3.textContent = totalexpense;
   task_el3.appendChild(task_content_el3);

  list_el3.appendChild(task_el3);
}

    abc();
   
});

            })
        

