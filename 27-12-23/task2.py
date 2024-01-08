a=int(input("Enter Number1:"))
b=int(input("Enter Number2:"))
c=int(input("Enter Number3:"))
if (a>b>c) and (a!=b) and (b!=c) and (c!=a):
    print("a is the highest number among all")
elif (c>b>a) and (a!=b) and (b!=c) and (c!=a):
    print(" c is the highest number among all") 
elif(b>a>c)and (a!=b) and (b!=c) and (c!=a):
    print("b is the highest number among all")
elif (a==b==c) or (a==b) or (b==c) or (c==a):  
    print("The given values are equal please change")
