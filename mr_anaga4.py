from sys import stdin

def f(w):
    """
    p is the 2,000,000th prime
    d is dictionary maping or char to prime
    """
    d = {'a':2, 'b':3, 'c':5, 'd':7, 'e':11, 'f':13, 'g':17, 'h':19, 'i':23, 'j':29, 'k':31, 'l':37, 'm':41, 'n':43, 'o':47, 'p':53, 'q':59, 'r':61, 's':67, 't':71, 'u':73, 'v':79, 'w':83, 'x':89, 'y':97, 'z':101, '\n':1}
    n = 1
    p = 32452843
    for i in w:
        n = (n * d[i]) % p
    return n

n, k = [int(x) for x in stdin.readline().split()]
d = {}
for i in stdin.readlines():
    w = f(i)
    if w not in d.keys():
        d[w] = 1
    else:
        d[w] = 0
s = 0
for i in d.values():
    s += i
print(s)
