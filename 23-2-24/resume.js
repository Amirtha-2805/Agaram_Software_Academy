let my_resume={
    name:"Amirtha.N",
    education_qualification:[
        {
        course:"10th",
        major:"Maths Biology",
        percentage:97,
        institute_name:"St.Joseph's convent Higher Secondary School"
          },
         {
        course:"HSC",
        major:"Maths Biology",
        percentage:90,
        institute_name:"St.Joseph's convent Higher Secondary School"
         },
         {

        course:"B.sc",
        major:"Mathematics",
        percentage:85,
        institute_name:"Government Arts and Science College,Konam"
        },
        {
        course:"M.Sc",
        major:"Mathematics",
        percentage:90,
        institute_name:"Vivekananda College"
        }
                
        ],
    experience:
             [
             {
        company_name:"Guidehouse",
        years_of_experience:3
            },
           {
             company_name:"Hcl",
             years_of_experience:1

           }
    
          ],
    projects:[
        {
        title:"The Riccati's Equation",
        major:"Mathematics",
        subject:"Differential Equations"
        },
        {

        title:"Rings",
        major:"Mathematics",
        subject:"Algebra"
        }
    ],
    certificates:
        
            [
                
                { 
                 course_name:"English Typewriting",
                 level:"Junior",
                 year_of_completion:2013

            
                 },
                 {
                  course_name:"English Typewriting",
                  level:"Higher",
                  year_of_completion:2015

                 },
                 {
                     course_name:"Computer on office Automation",
                     level:"",
                     year_of_completion:2023
                     

                 }
          ],

    
    email:"amirthanatarajan14@gmail.com",
    mobile:"+916385811613",
    skills:["English Typing","Team work","Patience"],
    objectives:"Hard working and team worker,maintains punctuality and put my skills to good use and grow my career",
    personal_information:{
    
        date_of_birth:"14-05-2001",
        father_name:"Natarajan.S",
        mother_name:"Jayasree.G",
        address:"15/A, Ammasimadam Street,Meenakshipuram,Nagercoil",
        pin_code:"629 001",
        hobbies:["Singing","Cooking","Drawing","Listening to music"],
        languages_known:["Tamil","English"]

    },
    declaration:"I declared that the informations given above are true",
    date:"21-12-23"

}

function resume(){
    // console.log(my_resume.education_qualification)
    // let qualification=my_resume.education_qualification;
    // console.log(my_resume.skills)


    for (let count=0;count<my_resume.education_qualification.length;count=count+1){
        console.log(my_resume.education_qualification[count]["course"] + "_" + my_resume.education_qualification[count]["percentage"])
    }
   
    for(let i=0; i<my_resume.skills.length;i=i+1){
        console.log(my_resume.skills[i])
    }
}