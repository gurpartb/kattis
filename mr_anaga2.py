from sys import stdin

# n: number of lines (int)
# k: length of a word (int)
# u: unique set (string set)
# d: duplicate set (string set)
# w: word (string)
# c: chars indices array (int list size: 26)
# a: ascii value of 'a' (int)
# j: ascii mapping to c index 'a' -> 0 (int)

def to_int(w):
    c = [0]*26
    a = 97
    for i in w:
        j = ord(i)-a
        if j >= 0:
            c[j] += 1
    return int(''.join(map(str, c)))

n, k = [int(x) for x in stdin.readline().split()]
u = set()
d = set()
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