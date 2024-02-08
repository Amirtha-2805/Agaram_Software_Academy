# list1=[1,2,4]
# list2=[1,3,4]
# merged_list=list1+list2
# print(merged_list)

list1=[1,2,3,4,5]
list2=[8,7,9]
merged_list=list1+list2
if len(merged_list)%2==0:
   a=merged_list[3]+merged_list[4]/2
   print("median is:",a)
else:
   b=len(merged_list)/2
   print("median is:",b)   
 
