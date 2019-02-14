from sys import stdin

n = stdin.readline()
a = [int(x) for x in stdin.readline().split()]
print(a.index(min(a)))