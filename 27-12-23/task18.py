cost_price=int(input("Enter a cost price:"))
selling_price=int(input("Enter a selling price:"))
if selling_price>cost_price:
    print("profit")
elif selling_price<cost_price:
    print("loss") 
else:
    print("Neither profit nor loss")
