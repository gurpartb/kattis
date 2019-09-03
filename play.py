from sys import stdin
from math import sqrt, inf

print(sqrt(2))
S = [int(s) for s in stdin.readline().split()]
S.append(inf)
print(S)
p = S.pop(2)
print(p, S)