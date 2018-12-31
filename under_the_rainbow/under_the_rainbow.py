
# Solution for Python 2
from sys import stdin

n = "global"
distance = "global"
penalties = "global"


def penalty(i):
    if i == n:
        return 0
    if penalties[i] > -1:
        return penalties[i]
    for k in range(n, i, -1):
        dis = distance[k]-distance[i]
        temp = 160000 + (dis-800)*dis + penalty(k)
        if temp < penalties[i] or penalties[i] < 0:
            penalties[i] = temp
    return penalties[i]


n = int(stdin.readline())
distance = [0]*(n+1)
penalties = [-1]*(n+1)
for j in range(n+1):
    distance[j] = int(stdin.readline())
print(penalty(0))
