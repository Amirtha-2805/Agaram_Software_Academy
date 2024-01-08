a=int(input("Enter input:"))
if a<=50:
    i=(a*0.50)+(a*0.50)*20/100    
    print("Total Electricity bill is:",i)
elif a<=150:
    j=(50*0.50)+(a-50)*0.75
    print("Total Electicity bill is:",j+j*20/100)
elif a<=250:
    k=(50*0.50)+(100*0.75)+(a-100)*1.2
    print("Total Electicity bill is:",k+k*20/100)
elif a>250:
    l=a*1.50
    print("Total Electricity bill is:",l+l*20/100)    

