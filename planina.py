from sys import stdin

i = int(stdin.readline())
p = 1
for j in range(i):
    p *=2
p +=1
print(p*p)