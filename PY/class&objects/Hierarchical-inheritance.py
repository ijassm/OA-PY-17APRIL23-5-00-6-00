class Father:
    fatherName = "Sasi"

    def getChildDetails(self):
        print("fatherName", self.fatherName)
        print("childName", self.childName)

class Child1(Father):
    childName = "Sathwick"

class Child2(Father):
    childName = "Makizhini"

  
    
obj1 = Child1()
obj2 = Child2()


obj1.getChildDetails()
obj2.getChildDetails()


