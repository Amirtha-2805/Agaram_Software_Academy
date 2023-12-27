a=int(input("Enter:"))
b=int(input("Enter:"))
c=int(input("Enter:"))
if (a==b) and (a!=c) and (b!=c):
    print("Isosceles Triangle")
elif (a==b) and (b==c) and (c==a):
    print("Equilateral Triangle")
elif (a!=b) and (b!=c) and (c!=a):
    print("Scalene Triangle")        