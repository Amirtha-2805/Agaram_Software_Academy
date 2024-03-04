let todo=JSON.parse(localStorage.getItem("todo")) || [];

const todoInput=document.getElementById("input_container")
const todoList=document.getElementById("list")
const todoCount=document.getElementById("total_items")
const addButton=document.getElementById("addbutton")
const deleteButton=document.getElementById("deleteitems")


document.addEventListener("DOMContentLoaded",function () {

   addButton.addEventListener("click", addTask());

    todoInput.addEventListener('keydown',function(event){

    if(event.key ==="Enter"){
        event.preventDefault();
        addTask();
    }

});
deleteButton.addEventListener("click",deletedata);
display();
});
function addTask(){

    const newInput=todoInput.value;
    if(newInput!==""){
        todo.push({
            text: newInput,
            disabled: false,
        }
        )
    saveLocal();
    todoInput.value = "";
    display()


    }


}






function deletedata(){

}


function display(){


}


function saveLocal(){
    localStorage.setItem("todo",JSON.stringify(todo));
}




