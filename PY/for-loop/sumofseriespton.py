n = 5
start = 2
sum_seq = 0
for i in range(1, n+1):
    print(start, end=" ")
    sum_seq += start
    start = start*10+2
print("sum of series:", sum_seq)
