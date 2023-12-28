a=int(input("Enter input1:"))
b=int(input("Enter input2:"))
c=int(input("Enter input3:"))
if ((a==b) and (a!=c) and (b!=c) )or ((a==c) and (a!=b) and (b!=c)) or ((b==c) and (a!=c)and(a!=b)):
    print("Isosceles Triangle")
elif (a==b) and (b==c) and (c==a):
    print("Equilateral Triangle")
elif (a!=b) and (b!=c) and (c!=a):
    print("Scalene Triangle")        