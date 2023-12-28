x=input("Enter your input:")
k="!","@","#","$","%","^","&","*","(",")"
if ("a"<=x<="z") or ("A"<=x<="Z"):
    print("It is a alphabet")
elif (x=="!") or(x=="@")or (x=="#") or (x=="$") or (x=="%") or (x=="^") or (x=="&") or (x=="*") or (x=="(") or (x==")") or (x=="-") or (x=="_") or (x=="=") or (x=="+") or (x=="[") or (x=="]") or (x=="{") or (x=="}") or (x==":") or (x==";") or (x==",") or (x=="<") or (x==".") or (x==">") or (x=="/") or (x=="?") :
    print("It is a special character")
else:
    print("It is a digit")    