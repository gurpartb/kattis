# very basic solution, there has to be a way to optimize it
from sys import stdin

def sum(i):
    s = 0
    si = str(i)
    for j in si:
        s += int(j)
    return s

def min(l, d, x):
    for i in range(l,d+1):
        if sum(i) == x:
            return i
        
def max(l, d, x):
    for i in range(d, l-1, -1):
        if sum(i) == x:
            return i

l = [int(x.rstrip()) for x in stdin.readlines()] 
print(min(l[0], l[1], l[2]))
print(max(l[0], l[1], l[2]))