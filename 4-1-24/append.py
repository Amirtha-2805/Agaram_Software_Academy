a=["apple","mango","orange"]
for fruits in a:
    print(fruits)
    
a.append("grapes")
for fruits in a:
    print(fruits) 

a.remove("mango")
for fruits in a:
    print(fruits)

a[0]="strawberry"
for fruits in a:
    print(fruits)  

a[len(a)-1]="Kiwi"
for fruits in a:
    print(fruits)
