from sys import stdin
# flip, convert to int, compare and print the larger value
        
x, y = [s for s in stdin.readline().split()]
x = x[::-1]
y = y[::-1]
if int(x) < int(y):
    print(y)
else:
    print(x)
