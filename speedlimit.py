from sys import stdin

while True:
    n = int(stdin.readline())
    if n == -1:
        break
    s = 0
    st = 0
    for i in range(n):
        m, et = [int(x) for x in stdin.readline().split()]
        s += m*(et-st)
        st = et
    print(s, 'miles')