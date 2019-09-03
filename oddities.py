from sys import stdin

def f(i):
    if i % 2 == 0:
        print(str(i) + ' is even')
    else:
        print(str(i) + ' is odd')
        
        
n = stdin.readline()
[f(int(i)) for i in stdin.readlines()]