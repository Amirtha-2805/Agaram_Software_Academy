let params=new URLSearchParams(document.location.search);
let index=params.get("index");

let resume_data=localStorage.getItem("resumes");
let resume_parsed=JSON.parse(resume_data);
let resume_index=resume_parsed[index]
document.getElementById("my_name1").innerHTML=resume_index.name
document.getElementById("my_mail").innerHTML=resume_index.email
document.getElementById("my_ph").innerHTML=resume_index.phone
document.getElementById("my_obj").innerHTML=resume_index.objectives


let language_details=''
for(each of resume_index.personal_details.languages_known){
    language_details=language_details+`
    <li>English <span class="lang-desc">(Native)${each}</span></li>`
            

}
document.getElementById("my_lang").innerHTML=language_details



let skills_details=''
for(each of resume_index.skills){
    skills_details=skills_details+`
    <div class="item" id="my_skills">
    <h3 class="level-title">${each}</h3>
    <div class="progress level-bar">
        <div class="progress-bar theme-progress-bar" role="progressbar" style="width: 99%" aria-valuenow="99" aria-valuemin="0" aria-valuemax="100"></div>
    </div>                               
</div><!--//item-->
`    

}
document.getElementById("my_skills").innerHTML=skills_details

let hobby_details=''
for(each of resume_index.personal_details.hobbies){
    hobby_details=hobby_details+`
    <li>${each}</li>
    `    

}
document.getElementById("my_hobby").innerHTML=hobby_details


let education_details=''
for(each of resume_index.education){

    education_details=education_details+`  <div class="item" id="my_education1">
    <h4 class="degree">${each.course}</h4>
    <h5 class="meta">${each.inst}</h5>
        <div class="time">${each.percentage}</div>
</div><!--//item-->`
}
document.getElementById("my_education").innerHTML=education_details

let experience_details=''
for(each of resume_index.experience){

    experience_details=experience_details+` <div class="meta">
    <div class="upper-row">
        <h3 class="job-title">${each.role}</h3>
        <div class="time">${each.years_of_experience}</div>
    </div><!--//upper-row-->
    <div class="company">${each.company_name}</div>
</div><!--//meta-->
<div class="details">
    </div><!--//details-->
</div><!--//item-->`
}
document.getElementById("my_experience").innerHTML=experience_details

let project_details=''
for(each of resume_index.projects){

project_details=project_details+`<div class="item" id="my_project">
<span class="project-title"><a href="https://themes.3rdwavemedia.com/bootstrap-templates/startup/coderpro-bootstrap-5-startup-template-for-software-projects/" target="_blank">${each.title}</a></span> - <span class="project-tagline">${each.subject},${each.major}</span>

</div><!--//item--> `
}
document.getElementById("my_project").innerHTML=project_details

