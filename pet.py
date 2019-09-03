from sys import stdin

# read all lines
# sum each line
# store each sum
# print highest sum and the corresponding index + 1

a = []
for x in stdin.readlines():
    s = [int(j) for j in x.split()]
    a.append(sum(s))
m = a.index(max(a))
print(m+1, a[m])