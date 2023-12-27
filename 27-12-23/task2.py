a=int(input("Enter Number1:"))
b=int(input("Enter Number2:"))
c=int(input("Enter Number3:"))
if a>b>c:
    print("a is the highest number among all")
elif c>b>a:
    print(" c is the highest number among all") 
elif b>a>c:
    print("b is the highest number among all")
elif b>=a and b>=c:
    print("b is greater")
elif a>b and (b<=c or c<=a):
    print("a must be the highest number")   

