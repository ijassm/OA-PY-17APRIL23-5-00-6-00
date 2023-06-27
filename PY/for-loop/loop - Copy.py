# a = list(range(0, 11, 2))
# print(a)

list = [1, 4, 5, 6, 7, 234, 223, 12, 35]
even = []
odd = []
l = len(list)


# for i in range(l):
#     if (list[i] % 2 == 0):
#         even.append(list[i])
#     else:
#         odd.append(list[i])

for i in list:
    if (i % 2 == 0):
        even.append(i)
    else:
        odd.append(i)


print(even)
print(odd)
