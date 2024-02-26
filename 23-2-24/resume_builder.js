let my_resume={
    skills:[],
    hobbies:[],
    personal_details:{},
    education:[

            {
                course:"",
                inst:"",
                percentage:""
            },
            {
                course:"",
                inst:"",
                percentage:""
            },
            {
                course:"",
                inst:"",
                percentage:""
            }


    ], 

}
function resume(element,key,p_key,index,c_key){

    if(p_key){
        my_resume[p_key][key]=element.value
    }
    else if(c_key){

        my_resume[key][index][c_key]=element.value
    }
    else{
    my_resume[key]=element.value
    }
    preview()
}


function preview(){
    document.getElementById("code").innerHTML=JSON.stringify(my_resume,null,4)    
}

function add_array(key,id){

   let value=document.getElementById(id).value 
   my_resume[key].push(value)

//    to clear already typed data   
    document.getElementById(id).value=""

    preview()
}

// function p_det(element,key){
//     my_resume[personal_details][key]=element.value
//     preview()
// }