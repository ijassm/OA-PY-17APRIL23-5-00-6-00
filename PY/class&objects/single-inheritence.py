class Parent:
    parentName = "xxxx"

    def getParentName(self):
        print(self.Parentname)


class Child(Parent):
    childName = "yyyy"

    def getChildName(self):
        print(self.Parentname)

obj = Child()

obj.parentName = "gggg"

print(obj.parentName)

