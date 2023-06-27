# Arbitrary Arguments, *args

# def my_function(*args):
#     print(args)


# my_function("Emil", "Tobias", "Linus")
# my_function("Emil")
# my_function()

# Keyword Arguments
# You can also send arguments with the key = value syntax.
# This way the order of the arguments does not matter.


# def my_function(child3, child2, child1):
#     print("The youngest child is " + child3)


# my_function(child1="Emil", child2="Tobias", child3="Linus")

# Arbitrary Keyword Arguments, **kwargs

# def my_function(**kwargs):
#     print(kwargs)


# my_function(fname="Tobias", lname="Refsnes")


# Default Parameter Value

# def my_function(country="Norway"):
#    print("I am from " + country)


# my_function("Sweden")
# my_function("India")
# my_function()
# my_function("Brazil")

def add_sub(x, y): return [x+y, x-y]


def add_sub(x, y): return [x+y, x-y]

# def add_sub(x, y):
#     z = x+y
#     z1 = x-y
#     return [z, z1]


result1 = add_sub(10, 2)
result2 = add_sub(11, 32)
print("add values is:", result1)
print("sub values is:", result2)


def myfunc(n):
    return lambda a: a * n


mydoubler = myfunc(2)
mytripler = myfunc(3)

print(mydoubler(4))
print(mytripler(2))
