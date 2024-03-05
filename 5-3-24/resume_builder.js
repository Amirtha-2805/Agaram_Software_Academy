let my_resume={
    skills:[],
    personal_details:{
        hobbies:[],
        languages_known:[],
    },
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
    experience:[

        {
            company_name:"",
            years_of_experience:"",

        },
        {
            company_name:"",
            years_of_experience:"",

        },

    ],
    projects:[
        {
        title:"",
        major:"",
        subject:""
        },
        {

        title:"",
        major:"",
        subject:""
        }
    ],
    certificates:
        
            [
                
                { 
                 course_name:"",
                 level:"",
                 year_of_completion:"",

            
                 },
                 {
                  course_name:"",
                  level:"",
                  year_of_completion:""

                 },
                 {
                     course_name:"",
                     level:"",
                     year_of_completion:""
                     

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
    // saveToLocal()
}


function preview(){
    document.getElementById("code").innerHTML=JSON.stringify(my_resume,null,4)    
}

function add_array(key,id,child){

   
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
function array(key,id,parent){
    let values=document.getElementById(id).value;
    my_resume[parent][key].push(values)
    document.getElementById(id).value=""

preview()
}
// function submission(){
//     // let submitted_value=document.getElementsByClass('submit').value
//     if(document.querySelector(".one").value===""){
//         alert("please enter required details");

//       }  
            
//       else{
//         alert("succesfully submitted")
//         preview()
//       }
// }


let resumes=[]
function saveToLocal(){

    resumes.push(my_resume);
    localStorage.setItem("resumes",JSON.stringify(resumes))

}
// saveToLocal()
