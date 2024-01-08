for a in range(1,101):
    print(a)
    if a%3==0:
        print(a, "is divisible by 3")
    if(a%7==0) or (a%13==0):
        print( a, "is divisible by 7 or 13")
    if(a%3==0) and (a%9==0): 
        print(a, "is divisible by both 3 and 9")
        
   