from sys import stdin 

x, y = [int(s) for s in stdin.readline().split()]
print(x*(y-1)+1)