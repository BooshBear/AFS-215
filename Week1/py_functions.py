
class data():
    def __init__(self):
        self.ary = []

    def addToAry(self, x):
        self.ary.append(x)

    def showAry(self):
        return self.ary

ary = data()

def str():
    string = "Poof"
    ary.addToAry(string)
    print(ary.showAry())
def int():
    int = 4
    ary.addToAry(int)
    print(ary.showAry())
def dict():
    dictionary = {"pie": "ApplePie"}
    ary.addToAry(dictionary)
    print(ary.showAry())
def tuple():
    tuple = ("pie", "is", "good")
    ary.addToAry(tuple)
    print(ary.showAry())
str()
int()
dict()
tuple()
