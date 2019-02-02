from sys import stdin
n = int(stdin.readline())
s = 0
for i in range(n):
    j = [float(x) for x in stdin.readline().split()]
    s += j[0]*j[1]
print("%.3f" % s)