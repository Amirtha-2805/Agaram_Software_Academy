x=input("Enter your input:")
k="!","@","#","$","%","^","&","*","(",")"
if ("a"<=x<="z") or ("A"<=x<="Z"):
    print("It is a alphabet")
elif x in k :
    print("It is a special character")
else:
    print("It is a digit")    