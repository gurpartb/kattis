from sys import stdin

def to_int(w):
    wn = [0]*26
    av = 97
    for i in w:
        wi = ord(i)-av
        if wi >= 0:
            wn[wi] += 1
    return int(''.join(map(str, wn)))

n, k = [int(x) for x in stdin.readline().split()]
u= set()
d= set()
for i in range(n):
    w = stdin.readline()
    w = to_int(w)
    if w not in d:
        if w in u:
            u.remove(w)
            d.add(w)
        else:
            u.add(w)
print(len(u))