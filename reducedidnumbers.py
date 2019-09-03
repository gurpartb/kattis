## exceeds time limit, I need to optimize it ##
from sys import stdin

g = int(stdin.readline())
arr = g*[0]

for i in range(g):
    arr[i] = int(stdin.readline())

m = min(arr)
arr = [ (i - m) for i in arr]

modset = []
n = g
while len(modset) < g:
    modset = []
    for i in arr:
        r = i % n
        if r in modset:
            break
        modset.append(r)
    n += 1
print(n-1)
