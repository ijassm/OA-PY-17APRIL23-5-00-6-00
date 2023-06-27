c = 0


# def recursion():
#     global c
#     c += 1
#     print(c)
#     if (c < 10):
#         recursion()


# recursion()


def factorial(x):
    """This is a recursive function
    to find the factorial of an integer"""

    if x == 1:
        return 1
    else:
        return (x * factorial(x-1))


num = 5
print("The factorial of", num, "is", factorial(num))
