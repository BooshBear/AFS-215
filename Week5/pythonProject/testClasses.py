import pytest

from Classes import Stuff

# def testFail():
#     instanc1 = Stuff()
#     assert instanc1.findItem("Pie") == True
#
# def test1():
#     instanc2 = Stuff()
#     instanc2.addToList("Pie")
#     assert instanc2.findItem("Pie") == True

@pytest.fixture
def stuff():
    stuff = Stuff()
    return stuff

def testFail(stuff):
    assert stuff.findItem("Pie") == True

def test1(stuff):
    stuff.addToList("Pie")
    assert stuff.findItem("Pie") == True

def test2(stuff):
    stuff.addToList("Pie")
    stuff.addToList("People")
    stuff.addToList("Packing")
    stuff.addToList("Pycharm")
    assert stuff.showList() == ["Pie", "People", "Packing", "Pycharm"]

