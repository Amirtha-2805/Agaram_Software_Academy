a=int(input("Enter input1:"))
b=int(input("Enter input2:"))
c=int(input("Enter input3:"))
if (((a==b) and (a!=c) and (b!=c) )or ((a==c) and (a!=b) and (b!=c)) or ((b==c) and (a!=c)and(a!=b))) and (a and b and c!=0):
    print("Isosceles Triangle")
elif ((a==b) and (b==c) and (c==a)) and (a and b and c!=0):
    print("Equilateral Triangle")
elif ((a!=b) and (b!=c) and (c!=a)) and (a and b and c!=0):
    print("Scalene Triangle")
else:
     print("It is not a triangle")    
          