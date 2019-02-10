from sys import stdin
from math import radians, sin, ceil

# 'o' oppisite side size
# 'a' angle in degrees
# 'l' ladder size 
o, a = [int(x) for x in stdin.readline().split()]
l = ceil(o/sin(radians(a)))
print(l)