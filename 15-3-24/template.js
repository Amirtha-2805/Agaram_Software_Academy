
let params=new URLSearchParams(document.location.search);
let index=params.get("index");

let resume_data=localStorage.getItem("resumes");
let resume_parsed=JSON.parse(resume_data);
let resume_index=resume_parsed[index]
document.getElementById("my_title").innerHTML=resume_index.title



document.getElementById("my_name").innerHTML="Hello!  "+ resume_index.name
document.getElementById("my_dob").innerHTML="BIRTHDAY: "+ resume_index.date
document.getElementById("my_ph").innerHTML="PHONE NO: "+ resume_index.phone
document.getElementById("my_mail").innerHTML="MAIL ID: "+ resume_index.email






let education_details=''
for(each of resume_index.education){

    education_details=education_details+` <li class="time-line-item">
    <span class="badge badge-primary">${each.course}</span>
    
    <h6 class="time-line-item-title">${each.course}</h6>
    <p class="time-line-item-subtitle">${each.inst}</p>
    <p class="time-line-item-content">${each.percentage}</p>
</li>`
}
document.getElementById("my_education").innerHTML=education_details

let experience_details=''
for(each of resume_index.experience){

    experience_details=experience_details+` <li class="time-line-item">
    <span class="badge badge-primary">${each.years_of_experience}</span>
    <h6 class="time-line-item-title">${each.role}</h6>
    <p class="time-line-item-subtitle">${each.company_name}</p>
    
</li> `
}
document.getElementById("my_experience").innerHTML=experience_details


let language_details=''
for(each of resume_index.personal_details.languages_known){
    language_details=language_details+`
        <p >${each}</p>`    

}
document.getElementById("my_lang").innerHTML=language_details