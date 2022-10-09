

class Stuff():
    def __init__(self):
        self.list = []

    def addToList(self, x):
        self.list.append(x)
    
    def findItem(self, x):
        for eac in self.list:
            if eac == x:
                return True

    def showList(self):
        return self.list