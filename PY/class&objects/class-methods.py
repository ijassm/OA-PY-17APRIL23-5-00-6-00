class Person:
    firstname = "---"
    lastname = "---"
    age = 0
    location = "---"

    def getDetails(self):
        print("FirstName : ", self.firstname)
        print("LastName  : ", self.lastname)
        print("Age       : ", self.age)
        print("Location  : ", self.location)

    def getFullname(self):
        print("Fullname : ",  self.firstname + " " + self.lastname)

    def updateDetails(self, **args):
        # if(args["firstname"]):
        #     self.firstname = args["firstname"]
        #     print("FirstName : ", self.firstname)
        if(args["location"]):
                self.location = args["location"]
                print("Location: ", self.location)
        # print("LastName       : ", self.lastname)
        # print("Age            : ", self.age)
        # print("Location       : ", self.location)


obj1 = Person()

obj1.firstname = "ocean"
obj1.lastname  = "academy"
obj1.age       = 25
obj1.location  = "chennai"


obj1.getDetails()

obj1.updateDetails(location = "lawspet, pondy")
# obj1.getFullname()