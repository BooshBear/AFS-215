
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


thearg = int(input("choose a number: "))

print(theFunction(thearg))