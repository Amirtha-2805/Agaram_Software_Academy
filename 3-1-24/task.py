students_marks=[{"name":"Amirtha",
                 "place":"Nagercoil",
                 "major":"Maths Biology",
                 "marks":[{"subject":"Tamil",
                           "max_marks":200,
                           "marks_scored":189
                 },
                 {
                           "subject":"English",
                           "max_marks":200,
                           "marks_scored":192  

                 },
                 {
                           "subject":"Maths",
                           "max_marks":200,
                           "marks_scored":185  
                 },
                 {
                           "subject":"Science",
                           "max_marks":200,
                           "marks_scored":172  
                 },
                 {
                           "subject":"Chemistry",
                           "max_marks":200,
                           "marks_scored":180  
                 },
                 {
                           "subject":"Biology",
                           "max_marks":200,
                           "marks_scored":192  

                 }
                 ],
                 "age":22,
                 "hobbies":["Singing","Drawing","Cooking","Reading Books"],
                 "gender":"Female",
                 "NCC":False,
                 "sports":["Kho-kho","Foot ball","Kabaadi","Volley ball"],
                 "annual_income":96000
},
{"name":"Aiswarya",
                 "place":"Vadiveeswaram",
                 "major":"Science",
                 "marks":[{"subject":"Tamil",
                           "max_marks":200,
                           "marks_scored":150
                 },
                 {
                           "subject":"English",
                           "max_marks":200,
                           "marks_scored":180  

                 },
                 {
                           "subject":"Maths",
                           "max_marks":200,
                           "marks_scored":184  
                 },
                 {
                           "subject":"Science",
                           "max_marks":200,
                           "marks_scored":170 
                 },
                 {
                           "subject":"Physics",
                           "max_marks":200,
                           "marks_scored":183  
                 },
                 {
                           "subject":"Pure science",
                           "max_marks":200,
                           "marks_scored":159 

                 }
                 ],
                 "age":24,
                 "hobbies":["Singing","Drawing","writting poetry"],
                 "gender":"Female",
                 "NCC":False,
                 "sports":["Kho-kho","Foot ball","Volley ball"],
                 "annual_income":92000
},
{"name":"Jayasree",
                 "place":"Nagercoil",
                 "major":"Computer Science",
                 "marks":[{"subject":"Tamil",
                           "max_marks":200,
                           "marks_scored":130
                 },
                 {
                           "subject":"English",
                           "max_marks":200,
                           "marks_scored":150 

                 },
                 {
                           "subject":"Maths",
                           "max_marks":200,
                           "marks_scored":182  
                 },
                 {
                           "subject":"Science",
                           "max_marks":200,
                           "marks_scored":125 
                 },
                 {
                           "subject":"Chemistry",
                           "max_marks":200,
                           "marks_scored":173  
                 },
                 {
                           "subject":"Java",
                           "max_marks":200,
                           "marks_scored":193  

                 }
                 ],
                 "age":25,
                 "hobbies":["Singing","Drawing","Cooking","Crafting"],
                 "gender":"Female",
                 "NCC":True,
                 "sports":["Kho-kho","Foot ball","Volley ball"],
                 "annual_income":90000
},
{"name":"Karthik",
                 "place":"Nagercoil",
                 "major":"Biology",
                 "marks":[{"subject":"Tamil",
                           "max_marks":200,
                           "marks_scored":140
                 },
                 {
                           "subject":"English",
                           "max_marks":200,
                           "marks_scored":176  

                 },
                 {
                           "subject":"Maths",
                           "max_marks":200,
                           "marks_scored":185  
                 },
                 {
                           "subject":"Science",
                           "max_marks":200,
                           "marks_scored":171  
                 },
                 {
                           "subject":"Botony",
                           "max_marks":200,
                           "marks_scored":130  
                 },
                 {
                           "subject":"Zoology",
                           "max_marks":200,
                           "marks_scored":132  

                 }
                 ],
                 "age":20,
                 "hobbies":["Singing","Dancing","Travelling"],
                 "gender":"Male",
                 "NCC":False,
                 "sports":["Cricket","Foot ball","Kabaadi","Volley ball"],
                 "annual_income":98000
},

{"name":"Akil",
                 "place":"Nagercoil",
                 "major":"Chemistry",
                 "marks":[{"subject":"Tamil",
                           "max_marks":200,
                           "marks_scored":156
                 },
                 {
                           "subject":"English",
                           "max_marks":200,
                           "marks_scored":187  

                 },
                 {
                           "subject":"Maths",
                           "max_marks":200,
                           "marks_scored":130 
                 },
                 {
                           "subject":"Science",
                           "max_marks":200,
                           "marks_scored":192 
                 },
                 {
                           "subject":"Physical Chemistry",
                           "max_marks":200,
                           "marks_scored":183  
                 },
                 {
                           "subject":"Bio-chemistry",
                           "max_marks":200,
                           "marks_scored":166

                 }
                 ],
                 "age":26,
                 "hobbies":["Drawing","Cooking","Reading Books","Watching movies"],
                 "gender":"Male",
                 "NCC":True,
                 "sports":["Hockey","Foot ball","Kabaadi", "Cricket","Volley ball"],
                 "annual_income":100000
}
]
# for st in sts:
#     mark = st['marks']
#     total =0
#     for m in mark:
#         total = total + m['scored']

#     print(st['name'],total)

for data in students_marks:
    
    total=0
    for marks in data["marks"]:
                               
             if marks["subject"]=="English":
                total_1=(marks["marks_scored"])
               
             elif marks["subject"]=="Maths":
                total_2=marks["marks_scored"]
                
             elif marks["subject"]=="Science":
               total_3=marks["marks_scored"]  
    total=total_1+total_2+total_3
    percentage=(total/600)*100
    age=data["age"]
    if ((percentage>80) and (age>22)):
         print( data["name"],  "is Eligible")
    elif(percentage>90):
        print(data["name"], "is eligible")
             
    elif (percentage<90):
         print( data["name"], "is not Eligible")
      

                 
                
                
    
    
            
      

        