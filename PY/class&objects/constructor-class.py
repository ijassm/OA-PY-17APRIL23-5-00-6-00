import datetime


class Person:

    def __init__(self, firstname, lastname, age, location):
        print("CONSTRUCTOR METHOD INVOKED")
        self.firstname = firstname
        self.lastname = lastname
        self.age = age
        self.location = location
    
    def getFullname(self):
        return self.firstname + " " + self.lastname

    def getBirthYear(self):
        currentYear = datetime.datetime.now().year
        return currentYear - self.age

    

obj = Person("ocean", 'academy', 20, "pondy")

print(obj.firstname)
print(obj.lastname)
print(obj.age)
print(obj.location)

# print(obj.getFullname())
print(obj.getBirthYear())