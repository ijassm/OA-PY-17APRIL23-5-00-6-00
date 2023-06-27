# print(2 % 2 == 0)
# print(4 % 2 == 0)
# print(6 % 2 == 0)
# print(8 % 2 == 0)
# print(9 % 2 == 0)

# num = int(input("enter the num to check even or odd => "))

# if (num % 2 == 0):
#     print(num, "=> it is even number")
# else:
#     print(num, "=> it is odd number")


# user = input("find input length : ")

# print(len(user))
# print(user.lower())
# print(user.upper())

a = int(input("enter A value : "))
b = int(input("enter B value : "))
c = int(input("enter C value : "))

if (a > b and a > c):
    print("a is greater than all")
elif (b > c):
    print("b is greater than all")
else:
    print("c is greater than all")
