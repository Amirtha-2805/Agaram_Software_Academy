a=int(input("Enter 1st angle:"))
b=int(input("Enter 2nd angle:"))
c=int(input("Enter 3rd angle:"))
x=a+b+c
if (x==180) and (a and b and c!=0):
    print("The triangle is valid")
else:
    print("The triangle is not valid")    
