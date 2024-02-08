a=[5,4,2,1]
target=5
# for i in range(len(a)):
output=[]
for j in a:
        for b in a:
            if b+j==target:
                output.append(a.index(b))
            #     # i=[b-1,j-1]
        #     #    i=[i,i]
                print(output)         
              