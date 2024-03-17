let params=new URLSearchParams(document.location.search);
let index=params.get("index");

let resume_data=localStorage.getItem("resumes");
let resume_parsed=JSON.parse(resume_data);
let resume_index=resume_parsed[index]
document.getElementById("my_name").innerHTML=resume_index.name
document.getElementById("my_mail").innerHTML=resume_index.email
document.getElementById("my_ph").innerHTML=resume_index.phone
document.getElementById("my_obj").innerHTML=resume_index.objectives


let skills_details=''
for(each of resume_index.skills){
    skills_details=skills_details+`
    
    <h4 class="resume-skills-cat font-weight-bold">${each}</h4>
    <ul class="list-unstyled mb-4">
        <li class="mb-2">
            <div class="progress resume-progress">
                <div class="progress-bar theme-progress-bar-dark" role="progressbar" style="width: 98%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
        </li>

`    

}
document.getElementById("my_skills").innerHTML=skills_details


let education_details=''
for(each of resume_index.education){

    education_details=education_details+` <li class="mb-2">
    <div class="resume-degree font-weight-bold">${each.course}</div>
    <div class="resume-degree-org">${each.inst}</div>
    <div class="resume-degree-time">${each.percentage}</div>
</li> `
}
document.getElementById("my_education").innerHTML=education_details

let project_details=''
for(each of resume_index.projects){

project_details=project_details+`<li class="mb-2 ps-4 position-relative">
<i class="resume-award-icon fas fa-trophy position-absolute" data-fa-transform="shrink-2"></i>
<div class="resume-award-name">${each.title}</div>
<div class="resume-award-desc">${each.major},${each.subject}</div>
</li>`
}
document.getElementById("my_project").innerHTML=project_details

let language_details=''
for(each of resume_index.personal_details.languages_known){
    language_details=language_details+`
    <li class="mb-2"><span class="resume-lang-name font-weight-bold">${each}</span> </li>
    `
            

}
document.getElementById("my_lang").innerHTML=language_details
let hobby_details=''
for(each of resume_index.personal_details.hobbies){
    hobby_details=hobby_details+`
    <li class="mb-1">${each}</li>
    `    

}
document.getElementById("my_hobbies").innerHTML=hobby_details

let experience_details=''
for(each of resume_index.experience){

    experience_details=experience_details+` <div class="d-flex flex-column flex-md-row" id="my_experience">
    <h3 class="resume-position-title font-weight-bold mb-1">${each.role}</h3>
    <div class="resume-company-name ms-auto">${each.company_name}</div>
</div><!--//row-->
<div class="resume-position-time">${each.years_of_experience}</div>
</div><!--//resume-timeline-item-header-->
<div class="resume-timeline-item-desc">
`
}
document.getElementById("my_experience").innerHTML=experience_details







