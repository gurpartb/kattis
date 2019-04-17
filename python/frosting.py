from sys import stdin

def frosting(n, col, row, mod):

    area = [0]*mod
    colAdj = [0]*mod
    rowAdj = [0]*mod

    for i in range(n):
        rowAdj[i % mod] += row[i]
        colAdj[i % mod] += col[i]

    for j in range(mod):

        for i in range(mod):

            area[(i + j + 2) % mod] += rowAdj[j] * colAdj[i]

    return area

n = int(stdin.readline())
col = [int(x) for x in stdin.readline().split()]
row = [int(x) for x in stdin.readline().split()]

area = frosting(n, col, row, 3)
print(*area)