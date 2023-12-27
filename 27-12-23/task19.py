a=int(input("physics:"))
b=int(input("Chemistry:"))
c=int(input("Biology:"))
d=int(input("Mathematics:"))
e=int(input("Computer:"))
percentage=(a+b+c+d+e)/500*100
if percentage>=90:
    print("Grade A")
elif percentage>=80:
    print("Grade B")
elif percentage>=70:
    print("Grade C")
elif percentage>=60:
    print("Grade D")
elif percentage>=40:
    print("Grade E")
elif percentage<40:
    print("Grade F")

print(percentage)    




