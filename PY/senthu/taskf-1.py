n=0
c=[1,2,3,6,9,5,7,4]
for i in range(1, n+1):
    for j in range(n - i):
        print(" ", end="")
    for k in range(i):
        # print("{:3d}".format(c), end=" ")
        print("{:3d}".format(c))
        c += 1
    print()