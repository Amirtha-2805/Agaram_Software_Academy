
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
            role:""

        },
        {
            company_name:"",
            years_of_experience:"",
            role:""

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
let registerdata={}
function register(element,key){
    registerdata[key]=element.value
}
console.log(registerdata);


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

//to save one resume
// let resumes=[]
// function saveToLocal(){

//     resumes.push(my_resume);
//     localStorage.setItem("resumes",JSON.stringify(resumes));



//     console.log(store_data)
// }




//to save multiple resumes in one array

// function saveResume(){
//     if(!localStorage.getItem("resumes")){
//         localStorage.setItem("resumes",JSON.stringify([]))
//     }
//         let resume_data=localStorage.getItem("resumes");
//         let resume_parsed=JSON.parse(resume_data);


//         //array extraction:
//                 //a=[1,2];
//                 // b=[3,4];
//                 // c=[...a,...b]
//                 // =>c=[1,2,3,4]


//         let store_data=[...resume_parsed,my_resume]
//         localStorage.setItem("resumes",JSON.stringify(store_data))
        
//         window.location="list.html"

// }


// function listed_resumes(){

//     let resume_data=localStorage.getItem("resumes");
//     let resume_parsed=JSON.parse(resume_data);
//     let renderHTML=''

//     for(let each in resume_parsed){
//       renderHTML=renderHTML+`<li><a href="view.html?index=${each}">${resume_parsed[each].title}</a><div id="btncontainer"><button type="button" id="deletebtn" onclick=delete_data('${each}')>delete</button><a href="edit.html?index=${each}"><button type="button" id="editbtn"> edit</button></a></div></li>`
//       document.getElementById("list").innerHTML=renderHTML

      
//     //   console.log(renderHTML)
//         // list.innerHTML=renderHTML
//     }

// }

// function delete_data(arr_index){
//     //    alert(arr_index)
//     let resume_data=localStorage.getItem("resumes");
//     let resume_parsed=JSON.parse(resume_data);
    
//  let new_array=[];
 
//     for (let each in resume_parsed){
    

//         //to store remaining datas in an array exept the one we want to delete
   
//         if(arr_index!==each){
//         new_array.push((resume_parsed)[each])
//         // console.log((resume_parsed)[each])
           
    
//     }
    
//   }  
//   localStorage.setItem("resumes",JSON.stringify(new_array))
//   window.location="list.html"    
// }

