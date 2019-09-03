from sys import stdin

ocelot = 'O'
bells = 0

n = int(stdin.readline())

n -= 1

for i in stdin.readlines():

    if i.strip() == ocelot:
        bells += 2**n

    n -= 1

print(bells)