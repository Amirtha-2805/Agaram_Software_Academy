basic_salary=int(input("Enter your basic salary:"))
hra_percentage=float(input("Enter:"))
da_percentage=float(input("Enter:"))
hra=(basic_salary*hra_percentage)/100
da=(basic_salary*da_percentage)/100
gross_salary=basic_salary+hra+da 
if basic_salary<=10000:
    print(gross_salary)
elif basic_salary<=20000:
    print(gross_salary)  
elif basic_salary>20000 :
    print(gross_salary)      
