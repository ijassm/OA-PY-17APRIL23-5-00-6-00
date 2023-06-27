# n = 10
# j = 0
# for i in range(1, n+1):
#     for j in range(n, i):
#         print(j, " ")
#     print()

n = 20

c = 1

for i in range(1, n + 1):
    for j in range(n - i):
        print(" ", end="")
    for k in range(i):
        print("{:3d}".format(c), end=" ")
        c += 1
    print()
