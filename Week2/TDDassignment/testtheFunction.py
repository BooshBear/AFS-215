
def theFunction(arg):
    switch = {
        1:"1",
        2:"2",
        3:"Pepsi",
        5:"Coke",
    }
    if arg % 3 == 0:
        switch.update({arg: "Pepsi"})
    if arg % 5 == 0:
        switch.update({arg: "Coke"})
    if arg % 5 == 0 and arg % 3 == 0:
        switch.update({arg: "PepsiCoke"})
    return switch.get(arg, "Nothing")


print(theFunction(1))
print(theFunction(2))
print(theFunction(3))
print(theFunction(5))
print(theFunction(6))
print(theFunction(10))
print(theFunction(15))