# numbers=[1,8,8,1,9,9,6,6,4,5][::-1]
# # for i in numbers:
# print(numbers)

# integer=input("Enter your input:")[::-1]
# # a="ammu"
# # print(a[::-1])

# print(integer)

# s="geeksforgeeks"
# def reverse(s):
#     string=""
#     for i in s:
#         string=i+string
#     print(string)

#     reverse(s) 


# s=["[","]","{","}","(",")"]
# paranthesis=input("Enter paranthesis:")
# list=[]
# if paranthesis=="(":
#     list.append(paranthesis)
#     list.append(")")
#     print ("True",list)
# elif paranthesis==")":
#     list.append(paranthesis)
#     list.append("(")
#     print("True",list)
# elif paranthesis=="[":
#     list.append(paranthesis)
#     list.append("]")
#     print("True",list)
# elif paranthesis=="]":
#     list.append(paranthesis)
#     list.append("[")
#     print("True",list)
# elif paranthesis=="{":
#     list.append(paranthesis)
#     list.append("}")
#     print("True",list)
# elif paranthesis=="}":
#     list.append(paranthesis,"{")
# elif paranthesis==[{}] and {()} and ({}) and {[]} and [()] and () and [] and {}:
#     print("True")
# else:
#     print("paranthesis not valid")    

# numbers=[1,2,2,1,6]

# def singleno(single):
#     result=0
#     for i in numbers:
#         result=result^i
#     return result
    
# print(singleno(numbers))  


# number=int(input("Enter a number:"))
# square_root=int(number**0.5)
# if square_root**2==number:
#     print("It is a perfect square")
# else:
#     print("It is not a perfect square") 



# input1=["a","b","c","d"]
# input2=["a","b","c","d","e"]
# for i in input1:
#     input2.remove(i)
# print(input2)

a=int(input("Enter a number:"))
def smallest_no():
    if a%2==0:
        return a
    else:
        return a*2
print(smallest_no())    
   

    
    


