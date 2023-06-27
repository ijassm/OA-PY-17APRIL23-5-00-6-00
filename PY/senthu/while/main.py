i = 0
even = []
odd = []

while (i < 10):
    i += 1
    if (i % 2 == 0):
        even.append(i)
    else:
        odd.append(i)

print(even)
print(odd)
