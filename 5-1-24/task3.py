resume={}
# get_name=input("Enter your name:")
# resume["name"]=get_name

# email=input("Enter your email id:")
# resume["email_id"]=email

# mobile=input("Enter your mobile number:")
# resume["mobile_no"]=mobile

# date=input("Enter date:")
# resume["date"]=date
# print(resume)

# objectives=input("Enter your objectives:")
# resume["objectives"]=objectives

# declaration=input("Enter your declaration:")
# resume["declaration"]=declaration


# no_of_education_qualification=int(input("How many education qualification do you want to add?"))
# resume["educational_qualification"]=[]

# for qualifications in range(no_of_education_qualification):
#     course=input("Enter your course:")
#     major=input("Enter your major")
#     percentage=input("Enter your percentage")
#     resume["educational_qualification"].append({"course":course,
#                                                 "major":major,
#                                                 "percentage":percentage
#                                                 })

    
#
user_entry_1=int(input("How many educational qualification do you want to add"))  
resume["educational_qualification"]=[]

user_entry_2=int(input("How many experience do you want to add?"))
resume["experience"]=[]

user_entry_3=int(input("How many projects do you want to add?"))
resume["projects"]=[]

user_entry_4=int(input("How many certificated do you want to add?"))
resume["certifications"]=[]

resume["personal_info"]={}

user_entry_6=int(input("How many skills do you want to add?"))
resume["skills"]=[]



def user_details(no_of_education,location_1,no_of_experience,location_2,no_of_projects,location_3,no_of_certificates,location_4,location_5,no_of_hobbies,no_of_skills,location_6):

    for qualifications in range(no_of_education):
        course=input("Enter your course:")
        major=input("Enter your major:")
        percentage=input("Enter your percentage:")
        location_1.append({
        "course":course,
        "major":major,
        "percentage":percentage

        })

    for a in range(no_of_experience):
        company_name=input("Enter your company name:")
        years=int(input("Enter your years of experience:"))
        location_2.append({
                "company_name":company_name,
                "years_of_experience":years
            })
    for b in range(no_of_projects):
        title=input("Enter your project title:")
        subject=input("Enter your project topic:")
        location_3.append({"title":title,
                           "subject":subject

        }) 
    for c in range(no_of_certificates):
        course_name=input("Enter your couse name:")
        level=input("Enter your level:")
        year=input("Enter the years of completion:")        

        location_4.append({
            "course_name":course_name,
            "level":level,
            "year":year
        })

father_name=input("Enter your father's name:"),
mother_name=input("Enter your mother's name:"),
date_of_birth=input("Enter your date of birth:"),
address=input("Enter your address:"),
pin_code=input("Enter your pincode:")    
resume["personal_info"]["father_name"]=father_name
resume["personal_info"]["mother_name"]=mother_name
resume["personal_info"]["date_od_birth"]=date_of_birth
resume["personal_info"]["address"]=address
resume["personal_info"]["pin_code"]=pin_code
hobbies=[]
user_entry_5=int(input("How many hobbies do you want to add?"))
for i in range(user_entry_5):
        list_of_hobbies=input("Enter your hobbies:")
        hobbies.append(list_of_hobbies)
resume["personal_info"]["hobbies"]=hobbies
for j in range(user_entry_6):
        list_of_skills=input("Enter your skills:")
        resume["skills"].append(list_of_skills)



    
   

user_details(user_entry_1,resume["educational_qualification"],user_entry_2,resume["experience"],user_entry_3,resume["projects"],user_entry_4,resume["certifications"],resume["personal_info"],user_entry_5,user_entry_6,resume["skills"])


print(resume)









