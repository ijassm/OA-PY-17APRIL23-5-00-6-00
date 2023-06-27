a = input("Enter side a")
b = input("Enter side b")
c = input("Enter side c")
if (a == b == c):
    print("Equilateral Triangle")
elif (a == b) or (b == c) or (a == c):
    print("Isosceles Triangle")
else:
    print("Scalene Triangle")
