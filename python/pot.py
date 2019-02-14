from sys import stdin

def sum(i):
    p = int(i[len(i)-1])
    b = int(i[0:len(i)-1])
    s = 1
    for i in range(p):
        s *= b
    return s


n = stdin.readline()
s = 0
for i in stdin.readlines():
    s += sum(i.rstrip())
print(s)