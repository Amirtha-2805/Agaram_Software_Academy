let params=new URLSearchParams(document.location.search);
let index=params.get("index");

let resume_data=localStorage.getItem("resumes");
let resume_parsed=JSON.parse(resume_data);
// console.log(resume_parsed);
let resume_index=resume_parsed[index]

let education_details=''
for(each in resume_index.education){

    education_details=education_details+` <li class="time-line-item">
    <span class="badge badge-primary">${each.course}</span>
    <h6 class="time-line-item-title">Master In Computer Science</h6>
    <p class="time-line-item-subtitle">MASTER, UNIVERSITY</p>
    <p class="time-line-item-content">Mauris magna sapien, pharetra consectetur fringilla
        vitae, interdum sed tortor.</p>
</li>`
}
document.getElementById("my_education2").innerHTML=education_details

// let experience_details=''
// for(each of resume_index.experience){

//     experience_details=experience_details+` <li class="time-line-item">
//     <span class="badge badge-primary">${each.years_of_experience}</span>
//     <h6 class="time-line-item-title">${each.role}</h6>
//     <p class="time-line-item-subtitle">${each.company_name}</p>
    
// </li> `
// }
// document.getElementById("my_experience").innerHTML=experience_details
