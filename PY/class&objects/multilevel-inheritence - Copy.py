class GrandFather:
    grandfatherName = "xxxx"

class Father(GrandFather):
    fatherName = "zzzz"

class Son(Father):
    sonName = "yyyy"

    def getParentDetails(self):
        print("grandfatherName", self.grandfatherName)
        print("fatherName", self.fatherName)
        print("sonName", self.sonName)

    
obj = Son()

obj.getParentDetails()

