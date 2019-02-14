from sys import stdin 

a = [1, 1, 2, 2, 2, 8]
b = stdin.readline().split()
for i,j in zip(a,b):
    print(i-int(j))