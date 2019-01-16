from sys import stdin

# n: number of lines (int)
# k: length of a word (int)
# u: unique set (string set)
# d: duplicate set (string set)
# w: word (string)

n, k = [int(x) for x in stdin.readline().split()]
u = set()
d = set()
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