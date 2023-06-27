class Person:
    name = "xxxx"
    age = 0
    location = "not found"

obj1 = Person()
obj2 = Person()
obj3 = Person()
obj4 = obj1


# obj1.name = "robert"
obj4.name = "changed"
obj1.age = 10
obj1.location = "pondy"
obj1.designation = "developer"

obj2.name = "johnson"
obj2.age = 20
obj2.location = "chennai"

print(obj1.name)
print(obj1.age)
print(obj1.location)
print(obj1.designation)

print()

print(obj2.name)
print(obj2.age)
print(obj2.location)

print()

print(obj3.name)
print(obj3.age)
print(obj3.location)

print(id(obj1))
print(id(obj2))
print(id(obj3))
print(id(obj4))