class Person:
    name = ""
    age = 0
    location = ""

class work_details:
    job = ""
    salary = 0
    location = ""

obj1 = Person()
obj2 = work_details()


obj1.name = "sasi"
obj1.age = 28
obj1.location = "pondy"


obj2.job = "HR manager"
obj2.salary = 35000
obj2.location = "chennai"

print(obj1.name)
print(obj1.age)
print(obj1.location)


print()

print(obj2.job)
print(obj2.salary)
print(obj2.location)

print()


print(id(obj1))
print(id(obj2))

