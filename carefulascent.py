from sys import stdin

xy = [int(x) for x in stdin.readline().split()]
line = int(stdin.readline())

sumt = 0
factor = 0
for i in range(line):
    arr = [float(x) for x in stdin.readline().split()]
    dt = arr[1] - arr[0]
    sumt += dt
    factor += dt*arr[2]

dx = xy[0]/(factor + xy[1] - sumt)
print(dx)