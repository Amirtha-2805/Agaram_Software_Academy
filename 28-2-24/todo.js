
const inputbox=document.getElementById("inputbox");
const listcontainer=document.getElementById("u_list");
const addBtn=document.querySelector(".btn")
const totalCount=document.getElementById("totalcount");


let taskCount=0;
const displayCount=(taskCount)=>{
    totalCount.innerText=taskCount;
}


// const listArr=[]
//    totalcount.textContent=listArr.length; 


function addtask(){
        if(inputbox.value===''){
            alert("You must enter something")
        }
        else{
            let list=document.createElement("li");
            list.innerHTML=inputbox.value;
            listcontainer.appendChild(list)
            inputbox.value=""
            taskCount=taskCount+1
            displayCount(taskCount) 
             
        }
        saveToLocal()

    }


function deletetask(){
    listcontainer.remove();

    taskCount=taskCount-taskCount;
    displayCount(taskCount);
    
    // addtask()
}


listcontainer.addEventListener("click",function(event){
        if(event.target.tagName === "LI"){
             event.target.classList.toggle("checked");
             
                 taskCount=taskCount-1;
                displayCount(taskCount)
                 
                          
            saveToLocal()

        }        
        // else if(event.target.tagName==="LI") {
        //     event.target.classList.toggle()
        //     taskCount=taskCount+1;
        // }
    
});
// taskCount=taskCount+1;
displayCount(taskCount)
inputbox.value=""

// listcontainer.addEventListener("click",function(event){
//     if(event.target.tagName==="A"){
    
//     }

// })















function saveToLocal(){
    localStorage.setItem("todo",listcontainer.innerHTML);

}


// const editBtn=document.createElement("button")
// editBtn.innerText="Edit";
// editBtn.classList.add("edit")
// listcontainer.appendChild(editBtn)

// editBtn.addEventListener("click",function(event){
//     if(editBtn.innerText.toLowerCase()==="edit"){
//         console.log("edit btn is clicked");
//         inputbox.removeAttribute("readonly");
//         editBtn.innerText="Save";
//         inputbox.focus(listcontainer.value)
//         this.replaceChildren(inputbox.value)
//     }
//     else{
//         inputbox.removeAttribute("readonly","readonly");

//         editBtn.innerText="Edit"
//     }

// })






// function showTasks(){
//     listcontainer.innerHTML=localStorage.getItem("todo")
// }

// showTasks()





