a=int(input("Enter input:"))
i=a*0.50+0.2
j=a*0.75+0.2
k=a*1.20+0.2
l=a*1.50+0.2


if 1<=a and a<=50:
    print("Total Electricity bill is:",i)
elif 51<=a and a<=100:
    print("Total Electicity bill is:",j)
elif 101<=a and a<=200:
    print("Total Electicity bill is:",k)
elif a>250:
    print("Total Electricity bill is:",l)    

