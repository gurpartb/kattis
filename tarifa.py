from sys import stdin

x = int(stdin.readline())
n = int(stdin.readline())
p = [int(i) for i in stdin.readlines()]
print(x*(n+1)-sum(p))