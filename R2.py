from sys import stdin
R1, S = [int(x) for x in stdin.readline().split()]
R2 = 2*S - R1
print(R2)