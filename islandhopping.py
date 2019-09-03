from sys import stdin
from math import sqrt

def dist(x0, x1):
    return sqrt(
        (x0[0]-x1[0])*(x0[0]-x1[0])
        + (x0[1]-x1[1])*(x0[1]-x1[1])
        )

def shortestSpan(map):
    length = 0
    ssmap = [map.pop(0)]
    islands = len(map)
    for i in range(islands):
        k = 0 # index for the closes island to the ssmap
        for j in range(len(map)):
            dis = dist(ssmap[i], map[j])
            if dis < map[j][2]:
                map[j][2] = dis
            if map[j][2] < map[k][2]:
                k = j
        length += map[k][2]
        ssmap.append(map.pop(k))
    return length

n = int(stdin.readline())
# set inf = 2^31, for this problems max = 3000 is sufficient
# inf = dist([-1000,-1000], [1000,1000]) # range limit
inf = 2147483648
for ni in range(n):
    m = int(stdin.readline())
    map = m*[0]
    for mi in range(m):
        map[mi] = [float(li) for li in stdin.readline().split()]
        map[mi].append(inf)
    print(shortestSpan(map))