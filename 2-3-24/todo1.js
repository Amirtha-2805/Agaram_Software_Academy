const inputTodo=document.getElementById("inputbox")
const list_box=document.getElementById("list-container")

function addtask(){
    if(inputTodo.value ===''){
        alert(" OOps You must enter something!");
    }
    else{
        let list = document.createElement("li");
        list.innerHTML=inputTodo.value;
        list_box.appendChild(list);
        inputTodo.value=""
        let span=document.createElement("span");
        span.innerHTML="\u00d7"
        list.appendChild(span);
    }
saveToLocal()
}
document.addEventListener("click",function(event){
if(event.target.tagName==="LI"){
    event.target.classList.toggle("checked");
    saveToLocal()


}

else if(event.target.tagName==="SPAN"){

    event.target.parentElement.remove();
    saveToLocal()

}

});
 function saveToLocal(){
    localStorage.setItem("todo",list_box.innerHTML)
 }
//  function showdata(){

//     list_box.innerHTML=localStorage.getItem("todo");
//  }
//  showdata()