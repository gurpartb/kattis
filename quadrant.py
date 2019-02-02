from sys import stdin

def f(i):
    if i<0:
        return '1'
    else:
        return '0'
    
d = {'00' : 1, '10':2, '11':3, '01':4}
x = int(stdin.readline())
y = int(stdin.readline())
s = f(x)
s += f(y)
print(d[s])