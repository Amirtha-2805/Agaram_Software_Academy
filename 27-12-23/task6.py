y=int(input("Year:"))
if(y%4==0 and y!=0) or (y%400==0):
    print("y is a leap year")
else:
    print("y is not a leap year")    