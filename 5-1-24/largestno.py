# array=[1,2,4,6,7,90,100,20]
# largest_no=0
# second_no=0
# for each in array:
#    if(each>largest_no):
#       largest_no=each
# print("large",largest_no)
# for each in array:
#    if(each>second_no and each<largest_no):
#            second_no=each
# print("second",second_no)                

user_input=int(input("Enter a number:"))
factorial=1
for each in range(1,user_input+1):
    factorial=each*factorial
print(factorial)


