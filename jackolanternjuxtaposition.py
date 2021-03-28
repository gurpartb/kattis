from sys import stdin

nums = [int(x) for x in stdin.readline().split()]

total = 1
for x in nums:
    total *= x

print(total)