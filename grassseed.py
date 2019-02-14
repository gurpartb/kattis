from sys import stdin

cost = float(stdin.readline().rstrip())
n = int(stdin.readline().rstrip())
costs = []
for i in range(n):
    line = [float(x) for x in stdin.readline().split(' ')]
    totCost = cost*line[0]*line[1]
    costs.append(totCost)
print(sum(costs))