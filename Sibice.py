from sys import stdin
n, w, h = [int(x) for x in stdin.readline().split()]
d = w*w + h*h
for i in range(n):
    m = int(stdin.readline())
    if m*m <= d:
        print('DA')
    else:
        print('NE')