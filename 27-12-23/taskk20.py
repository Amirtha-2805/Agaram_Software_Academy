basic_salary=int(input("Enter your basic salary:"))

if basic_salary<=10000:
    print("Gross Salary:",basic_salary+((basic_salary*20)/100)+((basic_salary*80/100)))
elif basic_salary<=20000:
    print("Gross Salary:",basic_salary+((basic_salary*25)/100)+((basic_salary*90/100)))    
elif basic_salary>20000 :
    print("Gross Salary:",basic_salary+((basic_salary*30)/100)+((basic_salary*95/100)))      
