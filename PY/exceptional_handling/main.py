# try:
#     print(54 / 0)
# except NameError:
#     print("An exception occurred")
# except ZeroDivisionError:
#     print("You can't divide by zero")
# else:
#     print("successfully completed without any error")

# finally:
#     print("finally is executed")

# Program to depict Raising Exception

# try:
#     raise NameError("Hi there")  # Raise Error
# except NameError:
#     print("An exception")
#     raise  # To determine whether the exception was raised or not

age = int(input("enter your age: "))


if (age <= 0):
    raise Exception("Age below 1 can't be accepted")
elif (age >= 18):
    print("eligible for voting")
else:
    print("not eligible for voting")
