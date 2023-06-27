fruits = ["apple", "banana", "cherry", "kiwi", "mango"]

# check 'a' value exits in each word

# newlist = []

# for x in fruits:
#     if "a" in x:
#         newlist.append(x)

# print(newlist)

listComprehension = [x for x in fruits if "a" in x]

# print(listComprehension)


# even odd

num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
even = [i for i in num if i % 2 == 0]
odd = [i for i in num if i % 2 != 0]


# for i in num:
#     if (i % 2 == 0):
#         even.append(i)
#     else:
#         odd.append(i)


print(even, "even")
print(odd, "odd")

# print("a" not in "apple")
# print("a" not in fruits[2])
