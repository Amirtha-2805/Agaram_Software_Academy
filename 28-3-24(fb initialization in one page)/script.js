 // Import the functions you need from the SDKs you need
 import { initializeApp } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-app.js";
 import { getFirestore,addDoc,collection,getDocs,getDoc,doc,updateDoc,query,where,deleteDoc } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-firestore.js";

 // TODO: Add SDKs for Firebase products that you want to use
 // https://firebase.google.com/docs/web/setup#available-libraries

 // Your web app's Firebase configuration
 const firebaseConfig = {
   apiKey: "AIzaSyDDy11LJ-SUWpMfx75fA7FrVVZyR9aEKQ0",
   authDomain: "resume-builder-1cd9c.firebaseapp.com",
   projectId: "resume-builder-1cd9c",
   storageBucket: "resume-builder-1cd9c.appspot.com",
   messagingSenderId: "258294776955",
   appId: "1:258294776955:web:89d72d56de3bb3d21c8ede"
 };
 // Initialize Firebase
 const app = initializeApp(firebaseConfig);
 // Initialize Cloud Firestore and get a reference to the service
 const db = getFirestore(app);

// *****Registration*****//
    async function submit_data(){
        let u_name=document.getElementById("user_name").value
        let u_email=document.getElementById("mail_id").value
        let u_pwd=document.getElementById("security_pin").value           
        if(u_name==""|| u_email==""|| u_pwd=="" ){
            alert("please fill out all the data")
        }
        else{
         await addDoc(collection(db,"registration"),registerdata).then(()=>{
            alert("Your registration completed successfully")
        window.location="login.html"                 
        })   
        }
 }
 window.submit_data=submit_data   
 
// ***** signin*****//

 function signin(){
    window.location=`login.html`
 }
 window.signin=signin

//  *****LogIn*****//
 function logging_in(){
  let login_email=document.getElementById("login_email").value
  let login_pwd=document.getElementById("login_pwd").value  
  if(login_email==""||login_pwd==""){
    alert("Please fill required details")
    window.location="login.html"
}
     
  getDocs(collection(db,"registration")).then(docSnap=>{

    
          let firebase_email=""
          let firebase_pwd=""
          let firebase_name=""
          let firebase_id=""
        
      
              docSnap.forEach((doc)=>{
               
                      if(login_email==doc.data().email && login_pwd==doc.data().password){
                          firebase_email=doc.data().email;
                          firebase_pwd=doc.data().password;
                          firebase_name=doc.data().name;
                          firebase_id=doc.id;
                           }
                      })
                      if(login_email==firebase_email&&login_pwd==firebase_pwd){
                          
                          let localstorage_data={
                              name:firebase_name,
                              email:firebase_email,
                              id:firebase_id
                          }                                                       
                         localStorage.setItem("register_local",JSON.stringify(localstorage_data))
                        //   window.location=`resume_security.html?firebaseid=${firebase_id}`
                        security(firebase_id)
                      }
                     if(login_email!=firebase_email&&login_pwd!=firebase_pwd){
                          alert("please enter valid email and password or create new account")
                          window.location="registration.html"
                      }                                                                                      
                  })                          
                }
                window.logging_in=logging_in
                
    //*****checking firebase id and local strage id and navigate to resume_builder.html*****//   

function security(firebase_id){
       let loc_data= localStorage.getItem("register_local")
       let parsed_data=JSON.parse(loc_data)        
    getDoc(doc(db,"registration",firebase_id)).then(docSnap =>{
        if(docSnap.exists()){
            // console.log("document data:",docSnap.data());
            if(firebase_id==parsed_data.id){
                window.location=`resume_builder.html`
            }
            else{
                window.location="login.html"
            }
        }
        else{
            console.log("No such data")
        }
    })    

}

 //***** to save resume and navigate to list.hhtml page*****//
 async function saveResume(){
    alert("saved")
    //  let params=new URLSearchParams(document.location.search);
    // let firebase_id=params.get("firebaseid");  
    let loc_data= localStorage.getItem("register_local")
    let parsed_data=JSON.parse(loc_data)
    console.log(parsed_data.email);

    const docRef = await addDoc(collection(db,"my_resumes"),{...my_resume,user_id:parsed_data.id});
    window.location=`list.html` 
 }
 window.saveResume=saveResume 


    function register_data(){
     window.location="registration.html"
    }
    window.register_data=register_data


    //*****function to list data*****//
       function get_data(){  
            let loc_data= localStorage.getItem("register_local")
            let parsed_data=JSON.parse(loc_data)             
            const q=query(collection(db, "my_resumes"), where("user_id", "==", parsed_data.id));
            getDocs(q).then(docSnap =>{           
                let renderHTML='';       
                docSnap.forEach((doc)=>{                            
                        renderHTML=renderHTML+`<table class="table">
                        <tr class="t_row"><td class="list_td1"><li class="list"><a href="view_template.html?id=${doc.id}" id="list_a">${doc.data().title}</a></li></td><td class="del_td"><button type="button" class="del" onclick="delete_data('${doc.id}')">Delete</button></td><td class="edit_td"><a href="edit.html?id=${doc.id}">
                        <button type="button" id="update_btn">Edit</button></a></td></tr></table>`                                                                   
        }) 
        document.getElementById("list").innerHTML=renderHTML                            
    
    }) 
    
    } 
    get_data()
    window.get_data=get_data
    
        // *****function to delete data*****//
       async function delete_data(data_id){
                deleteDoc(doc(db,"my_resumes",data_id))
                get_data()
            } 
        window.delete_data=delete_data 
    
    
//*****getting datas from firebase database to display it in a edit page and updating*****//

    
    let params2=new URLSearchParams(document.location.search);
    let id=params2.get("id");
    getDoc(doc(db,"my_resumes",id)).then(docSnap=>{
        edited_resume=docSnap.data()       
        if(docSnap.exists()){  
    document.getElementById("data_input2").value=edited_resume.name;
    document.getElementById("data_input1").value=edited_resume.title;
    
    let skills_added=''    
   for (let each of edited_resume.skills){                  
    skills_added=skills_added+`<input type="text" value=${each} class="added_skills" id="multi_skills"/>`              
   }      
   document.getElementById("skills").innerHTML=skills_added

      let hobbies_added=''    
   for (let each of edited_resume.personal_details.hobbies){          
    hobbies_added=hobbies_added+`<input type="text" value="${each}" class="added_hobbies"/>`               
   }
   document.getElementById("hobbies").innerHTML=hobbies_added


   let languages_added=''    
   for (let each of edited_resume.personal_details.languages_known){          
    languages_added=languages_added+`<input type="text" value="${each}" class="added_languages"/>`               
   }
   document.getElementById("languages").innerHTML=languages_added

   
let no_of_education=''
for(let each in edited_resume.education){

no_of_education=no_of_education+`<tr>
    <td><input type="text" value="${edited_resume.education[each].course}"  class="course" onkeyup="edit(this,${each},'education','course')"/></td>
    <td><input type="text" value="${edited_resume.education[each].inst}" class="institute"  onkeyup="edit(this,${each},'education','inst')"/></td>
    <td><input type="text" value="${edited_resume.education[each].percentage}" class="percentage" onkeyup="edit(this,${each},'education','percentage')"/></td>                              
    </tr>`
    document.getElementById("tabledatas").innerHTML=no_of_education       
}

let no_of_experience=''
for(let each in edited_resume.experience){
no_of_experience=no_of_experience+`<tr>
    <td><input type="text" value="${edited_resume.experience[each].company_name}" onkeyup="edit(this,${each},'experience','company_name')"/></td>
    <td><input type="text" value="${edited_resume.experience[each].years_of_experience}" onkeyup="edit(this,${each},'experience','years_of_experience')"/><td> <input type="text" value="${edited_resume.experience[each].role}"  onkeyup="edit(this,${each},'experience','role')"/></td>                                  
    </tr>`
        }
        document.getElementById("experience").innerHTML=no_of_experience

let no_of_projects=''

for(let each in edited_resume.projects){

no_of_projects=no_of_projects+`<tr>
    <td><input type="text" value="${edited_resume.projects[each].title}" onkeyup="edit(this,${each},'projects','title')"/></td>    
    <td><input type="text" value="${edited_resume.projects[each].major}" onkeyup="edit(this,${each},'projects','major')"/><td> <input type="text" value="${edited_resume.projects[each].subject}"  onkeyup="edit(this,${each},'projects','subject')"/></td>                                  
    </tr>`
        }
        document.getElementById("projects").innerHTML=no_of_projects


    function edit(ele,key_index,key,c_key){
            if(key=='education'){
        edited_resume[key][key_index][c_key]=ele.value;
        
            }
            if(key=='experience'){
        edited_resume[key][key_index][c_key]=ele.value;
            }

            if(key=='projects'){
        edited_resume[key][key_index][c_key]=ele.value;
            }

   }
 window.edit=edit
 
document.getElementById("up_btn").addEventListener('click',async(e)=>{
    let updated_value1=document.getElementById("data_input1").value
    let updated_value2=document.getElementById("data_input2").value
    if(id==docSnap.id){     
      edited_resume.title=updated_value1
      edited_resume.name=updated_value2
          //   console.log(edited_resume) 

let updated_skills= document.getElementsByClassName("added_skills");
    let skills_added=[]
    for (let each of updated_skills){
        skills_added.push(each.value)         
    } 
    edited_resume.skills=skills_added   

    let updated_hobbies=document.getElementsByClassName("added_hobbies");
    let new_hobbies=[]
    for( let each of updated_hobbies){
        new_hobbies.push(each.value);
    }
    edited_resume.personal_details.hobbies=new_hobbies

    let updated_languages=document.getElementsByClassName("added_languages");
    let new_language=[]
    for(let each of updated_languages){    
            new_language.push(each.value);
    }
    edited_resume.personal_details.languages_known=new_language

    updateDoc(doc(db,"my_resumes",id),edited_resume)                       
   }   
})      
        }
})


//  *****to add extra input box *****//
async function add_newskill(){
    getDoc(doc(db,"my_resumes",id)).then(docSnap=>{
        if(docSnap.exists()){    
            let skills_added=''    
            for (let each of edited_resume.skills){          
                skills_added=skills_added+`<input type="text" value=${each} class="added_skills" id="multi_skills"/>`              
            }      
            document.getElementById("skills").innerHTML=skills_added;
            let input=`<input type="text" class="added_skills"/>`
            document.getElementById("skills").innerHTML=skills_added+input;          
            }    
})
}
window.add_newskill=add_newskill
   
function add_newhobby(){
    getDoc(doc(db,"my_resumes",id)).then(docSnap=>{
        if(docSnap.exists()){
            let hobbies_added=''    
            for (let each of edited_resume.personal_details.hobbies){          
                hobbies_added=hobbies_added+`<input type="text" value="${each}" class="added_hobbies"/>`               
            }
            document.getElementById("hobbies").innerHTML=hobbies_added
            let input1=`<input type="text" class="added_hobbies"/>`    
            document.getElementById("hobbies").innerHTML=hobbies_added+input1;
        }
    })
}
window.add_newhobby=add_newhobby
        
  
function add_newlang(){
    getDoc(doc(db,"my_resumes",id)).then(docSnap=>{
        if(docSnap.exists()){
            let languages_added=''    
            for (let each of edited_resume.personal_details.languages_known){          
                languages_added=languages_added+`<input type="text" value="${each}" class="added_languages"/>`               
            }
            document.getElementById("languages").innerHTML=languages_added
            let input=`<input type="text" class="added_languages"/>`   
            document.getElementById("languages").innerHTML=languages_added+input;           
        }
    })
}
window.add_newlang=add_newlang  
     
function add_newedu(){
    getDoc(doc(db,"my_resumes",id)).then(docSnap=>{
        if(docSnap.exists()){            
            let tbody=document.getElementById("tabledatas").innerHTML
            let education_index=edited_resume.education.length
            let new_tablerow=`<tr>
                    <td><input type="text" onkeyup="edit(this,${education_index},'education','course')"/></td>
                    <td><input type="text" onkeyup="edit(this,${education_index},'education','inst')"/></td>
                    <td><input type="text" onkeyup="edit(this,${education_index},'education','percentage')"/></td>
                </tr>`
                document.getElementById("tabledatas").innerHTML=tbody+new_tablerow
                edited_resume.education[education_index]={
                course:"",
                inst:"",
                percentage:""
                }
                }
    })
}
window.add_newedu=add_newedu

function add_newexperience(){
    getDoc(doc(db,"my_resumes",id)).then(docSnap=>{
        if(docSnap.exists()){           
            let tbody=document.getElementById("experience").innerHTML
            let experience_index=edited_resume.experience.length
            let new_tablerow=`<tr>
                    <td><input type="text" onkeyup="edit(this,${experience_index},'experience','company_name')"/></td>
                    <td><input type="text" onkeyup="edit(this,${experience_index},'experience','years_of_experience')"/></td>
                    <td><input type="text" onkeyup="edit(this,${experience_index},'experience','role')"/></td>
                </tr>`
                document.getElementById("experience").innerHTML=tbody+new_tablerow
                edited_resume.experience[experience_index]={
                company_name:"",
                years_of_experience:"",
                role:""
                }
                }
    })
}
window.add_newexperience=add_newexperience

function add_newprojects(){
    getDoc(doc(db,"my_resumes",id)).then(docSnap=>{
        if(docSnap.exists()){            
            let tbody=document.getElementById("projects").innerHTML
            let project_index=edited_resume.projects.length

            let new_tablerow=`<tr>
                    <td><input type="text" onkeyup="edit(this,${project_index},'projects','title')"/></td>
                    <td><input type="text" onkeyup="edit(this,${project_index},'projects','major')"/></td>
                    <td><input type="text" onkeyup="edit(this,${project_index},'projects','subject')"/></td>
                </tr>`
                document.getElementById("projects").innerHTML=tbody+new_tablerow
                edited_resume.projects[project_index]={
                title:"",
                major:"",
                subject:""
                }
                }
    })
}
window.add_newprojects=add_newprojects




