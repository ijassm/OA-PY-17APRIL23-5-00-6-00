class University:
    univName= "pondy university"
    def getUniversityDetails1(self):
        print("univName", self.univerName)

class Course(University):
    courseName = "CSE"
    def getUniversityDetails2(self):
        print("courseName", self.courseName)

class Batch(Course):
    batchName = 2023
    def getUniversityDetails3(self):
        print("batchName", self.batchName)

class Department(Course, University):
    departmentName = "Computer Science"
    def getUniversityDetails4(self):
        print("departmentName", self.departmentName)

    

obj = Department()
obj1 = Batch()

obj.getUniversityDetails4()



