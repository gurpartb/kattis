from sys import stdin

def v(b):
    # Victory Cards
    p = ['Province', 8, 6]
    d = ['Duchy', 5, 3]
    e = ['Estate',2, 1]
    if b >= p[1]:
        return p[0]
    if b >= d[1]:
        return d[0]
    if b >= e[1]:
        return e[0]
    return ''
    
def t(b):
    # Treasure Cards
    g = ['Gold', 6, 3]
    s = ['Silver', 3, 2]
    c = ['Copper', 0, 1]
    if b >= g[1]:
        return g[0]
    if b >= s[1]:
        return s[0]
    if b >= c[1]:
        return c[0]
    return ''

def g(v1, t1):
    if len(v1)>1:
        if len(t1)>1:
            return v1+' or '+t1
        return v1
    return t1

i = [int(x) for x in stdin.readline().split()]
b = i[0]*3 + i[1]*2 + i[2]
v1 = v(b)
t1 = t(b)
print(g(v1,t1))
