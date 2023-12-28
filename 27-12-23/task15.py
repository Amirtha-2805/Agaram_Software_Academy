a=int(input("Enter 1st length:"))
b=int(input("Enter 2nd length:"))
c=int(input("Enter 3rd length:"))
if (a+b>c) or (b+c>a) or (a+c>b):
    print("The triangle is valid")
else:
    print("The triangle is not valid")    