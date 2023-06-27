# def sum(x):
#     def func(y=None):
#         if (y != None):
#             return sum(x+y)
#         else:
#             return x
#     return func


def sum(x):
    return lambda y = None: sum(x+y) if y != None else x


print(sum(2)(7)())
