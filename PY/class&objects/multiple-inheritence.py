class Father:
    fatherName = "xxxx"

class Mother:
    motherName = "xxxx"


class Child(Father, Mother):
    childName = "yyyy"

    def getParentDetails(self):
        print("fatherName", self.fatherName)
        print("motherName",self.motherName)
        print("childName",self.childName)


obj = Child()



obj.getParentDetails()

