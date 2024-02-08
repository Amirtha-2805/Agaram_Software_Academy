# words1=[]
# a=int(input("How many words do you want to add?"))
# for words in range(a):
#     b=input("Enter a word")
#     words.append(words1)
# print(words1)    

words1=["apple","orange","mango","grapes"]
words2=["a","o"]
output=[]
for word in words1:
    for each in word:
        for words2 in words2:
              if words2 == each:
                  output.append(word)
print(output)
