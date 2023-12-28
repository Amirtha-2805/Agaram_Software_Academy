
a=int(input("Enter a coeff:"))
b=int(input("Enter a coeff:"))
c=int(input("Enter a coeff:"))
x=(-b+(b**2-4*a*c)**0.5)/2*a
y=(-b-(b**2-4*a*c)**0.5)/2*a
d=b**2-4*a*c
if d==0:
    print("The roots are real and equal:",x,"and",y)
elif d>0:
    print("The roots are real and distinct:",x,"and",y)    
elif d<0:
    print("The roots are imaginary:",x,"and",y)   

