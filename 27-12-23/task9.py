x=input("Enter your input:")
k=["!","@","#","$","%","^","&","*","(",")","-","_","=","+","[","]","{","}",":",";",",","<",">","/","?"]
if ("a"<=x<="z") or ("A"<=x<="Z"):
    print("It is a alphabet")
elif x in k :
    print("It is a special character")
elif(x<="0" or x>="0"):
    print("It is a digit")    