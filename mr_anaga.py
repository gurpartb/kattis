from sys import stdin

n, k = [int(x) for x in stdin.readline().split()]
u= set()
d= set()
for i in range(n):
    w = stdin.readline()
    w = "".join(sorted(w))
    if w not in d:
        if w in u:
            u.remove(w)
            d.add(w)
        else:
            u.add(w)
print(len(u))