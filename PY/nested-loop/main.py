c = 0

for i in range(2):
    c += 1
    for j in range(2):
        c += 1
        for k in range(2):
            c += 1
            print(i, j, k)


print(c)
