from sys import stdin
from collections import Counter

def f(w):
    c = {'a':0, 'b':0, 'c':0, 'd':0, 'e':0, 'f':0, 'g':0, 'h':0, 'i':0, 'j':0, 'k':0, 'l':0, 'm':0, 'n':0, 'o':0, 'p':0, 'q':0, 'r':0, 's':0, 't':0, 'u':0, 'v':0, 'w':0, 'x':0, 'y':0, 'z':0, '\n':0}
    c.update(Counter(w))
    return int(''.join(map(str, c.values())))
        
n, k = [int(x) for x in stdin.readline().split()]
u = set()
d = set()
for i in stdin.readlines():
    w = f(i)
    if w not in d:
        if w in u:
            d.add(w)
        else:
            u.add(w)
print(len(u - d))