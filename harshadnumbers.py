from sys import stdin

l = stdin.readline().rstrip()
s = 0
n = int(l)
for li in l:
    s += int(li)
while n%s != 0:
    n +=1
    s +=1
    if n%10 == 0:
        s = 0
        for si in str(n):
            s += int(si)
print(n)