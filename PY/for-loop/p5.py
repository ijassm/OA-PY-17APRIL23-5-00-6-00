row = 5
for i in range(1, row+1):
    for j in range(0, i+1):
        print("*", end=' ')
    print("\r")

for i in range(row,0,-1):
    for j in range(1, i-0):
        print("*", end=' ')
    print("\r")
print("")