# a=5
# print(type(a))

# value=True
# print(type(value))
# to use a variable in a string

a=4
print("the number is" f'{a}')

# def addition():
#    a=2
#    b=5
#    c=a+b
#    print("addition of two numbers is",c)

# addition()

# a=3
# if a==3:
#    print("true")

# i=5
# while i<10: 
#    i=i+1
#    print("Run")                                                              

# # print 1 to 7
# i=0
# while i<11:
#    if i==7:
#       break  #to stop the loop
#    i=i+1
#    print(i)

# # print without 7
# i=0
# while i<11:
#     i=i+1   
#     if i==8:
#         continue  #to continue the loop
#     print(i)


# # for loop
# students=["Amirtha","Dhiya","Aishu"] 
# for names in students:
#    if names != "Dhiya":
#     print(names)

# a=[1,2,3]
# total=0
# for each in a:
#    total=total+each
# print("sum is = ",total)

   
# for i in range(1,5):
#    print(i)

# # print without 8
# for i in range(2,10,2):
#    if i==8:
#       break   
#    print("range is",i) 
  

# class in python

# method1

# class Car:
#    def __init__(self):
#       self.name="Amirtha"

#    def getName(self):
#       print(self.name)   

# carObj=Car()
# carObj.getName()      

# Method2
class Car:
    show_room="Nagercoil"
    def __init__(self,brand,year,color):
      #   to make the params which is from the argument as global
        self.brand=brand
        self.year=year
        self.color=color
        self.noOfTyres=3
        
    def getCarName(self):
      #   accessing the global variable
        print("Details",self.brand,self.year,self.color)    

    def test(self):
        self.getCarName() 
        self.noOfTyres=4   

# can pass multiple arguments

hondaObj=Car("Honda",2009,"Black")
mahindraObj=Car("Mahindra",2000,"Red")
hondaObj.getCarName()
mahindraObj.getCarName()
print(hondaObj.noOfTyres)
print(hondaObj.show_room)
hondaObj.test()
print(hondaObj.noOfTyres)

