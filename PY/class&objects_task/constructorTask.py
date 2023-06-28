


class Student_Details:

    def __init__(self, firstname, lastname, age, address):
        self.firstname = firstname
        self.lastname = lastname
        self.age = age
        self.address = address
        
class Mark_list:

    def __init__(self, Tamil, English, Maths, Science, Social):
        
        self.Tamil = Tamil
        self.English = English
        self.Maths = Maths
        self.Science = Science
        self.Social = Social

class Mark_Details:

    def __init__(self, average, percentage):
        
        self.average = average
        self.percentage = percentage

    
    def getFullname(self):
        return self.firstname + " " + self.lastname

    # def getBirthYear(self):
    #     currentYear = datetime.datetime.now().year
    #     return currentYear - self.age
    def getpercentage(self):
        markStatement = self.Tamil + self.English + self.Maths + self.Science + self.Social
        self.average = markStatement/ 5.0
        self.percentage = (markStatement / 500.0) * 100 
        return markStatement

    

obj = Student_Details("Roobini", 'k', 12, "pondy")

print(obj.firstname)
print(obj.lastname)
print(obj.age)
print(obj.address)

obj = Mark_list(80, 90, 89, 97, 88,)

print(obj.Tamil)
print(obj.English)
print(obj.Maths)
print(obj.Science)
print(obj.Social)

obj = Mark_Detail()

print(obj.average)
print(obj.percentage)
# print(obj.getFullname())
# print(obj.getBirthYear())
print(obj. getpercentage())