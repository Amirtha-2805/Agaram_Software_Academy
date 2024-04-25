my_resume={
    "name":"Amirtha.N",
    "education_qualification":[
        {
        "course":"10th",
        "major":"Maths Biology",
        "percentage":97,
        "institute_name":"St.Joseph's convent Higher Secondary School"
          },
         {
        "course":"HSC",
        "major":"Maths Biology",
        "percentage":90,
        "institute_name":"St.Joseph's convent Higher Secondary School"
         },
         {

        "course":"B.sc",
        "major":"Mathematics",
        "percentage":85,
        "institute_name":"Government Arts and Science College,Konam"
        },
        {
        "course":"M.Sc",
        "major":"Mathematics",
        "percentage":90,
        "institute_name":"Vivekananda College"
        }
        
        
        ],
    "experience":
             [
             {
        "company_name":"Guidehouse",
        "years_of_experience":3
            },
           {
             "company_name":"Hcl",
             "years_of_experience":1

           }
    
          ],
    "projects":[
        {
        "title":"The Riccati's Equation",
        "major":"Mathematics",
        "subject":"Differential Equations"
        },
        {

        "title":"Rings",
        "major":"Mathematics",
        "subject":"Algebra"
        }
    ],
    "certificates":
        
            [
                
                { 
                 "course_name":"English Typewriting",
                 "level":"Junior",
                 "year_of_completion":2013

            
                 },
                 {
                  "course_name":"English Typewriting",
                  "level":"Higher",
                  "year_of_completion":2015

                 },
                 {
                     "course_name":"Computer on office Automation",
                     "level":"",
                     "year_of_completion":2023
                     

                 }
          ],

    
    "email":"amirthanatarajan14@gmail.com",
    "mobile":"+916385811613",
    "skills":["English Typing","Team work","Patience"],
    "objectives":"Hard working and team worker,maintains punctuality and put my skills to good use and grow my career",
    "personal_information":{
    
        "date_of_birth":"14-05-2001",
        "father_name":"Natarajan.S",
        "mother_name":"Jayasree.G",
        "address":"15/A, Ammasimadam Street,Meenakshipuram,Nagercoil",
        "pin_code":"629 001",
        "hobbies":["Singing","Cooking","Drawing","Listening to music"],
        "languages_known":["Tamil","English"]

    },
    "declaration":"I declared that the informations given above are true",
    "date":"21-12-23"

}

# print(my_resume["certificates"][1]["course_name"])

def education():
 if len(my_resume["education_qualification"])<2:
  a=my_resume["education_qualification"]
  a.append({
    "course":"Diploma",
    "major":"",
    "percentage":89,
    "institute_name":"Government colege"  
       
})
  print(a)

 print(my_resume["education_qualification"])
 education()



# project=input("Did you want to attach your project?")
# if (project=="no" )or (project=="No"):
#     print("No need to attach")

# if project=="yes":
#     title=input("Enter your title:")
#     major=input("Enter your major:")
#     subject=input("Enter your subject:")
#     my_resume["projects"].append({

#           "title":title,
#           "major":major,
#           "subject":subject
# })
#     print(my_resume["projects"])


# for each in my_resume["projects"]:
#     print(each)   


# project=input("Did you want to attach your project?:")
# if project=="no":
#     print("No need to attach")

# if project=="yes":
#     title=input("Enter your title:")
#     major=input("Enter your major:")
#     subject=input("Enter your subject:")
#     a={}
#     a["title"]=title
#     a["major"]=major
#     a["subject"]=subject
#     my_resume["projects"].append(a)
#     print(my_resume["projects"])




# a=my_resume["education_qualification"]
# a.append({"Title":"Boolean like semirings",
#           "Major":"Mathematics",
#           "subject":"Algebra"                               
#           })
# print(a)




# for each in my_resume["education_qualification"]:
#     if each["course"]=="HSC":
#         each["course"]="12th"

#     print(each)