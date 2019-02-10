from sys import stdin

def f(b, p):
    h = [b-1, b, b+1]
    h = [60*x/p for x in h]
    print(*h, sep=' ')
    
n = stdin.readline()
for l in stdin.readlines():
    b, p = [float(li) for li in l.split()]
    f(b, p)