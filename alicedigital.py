from sys import stdin

def subArraySum(i, j, arr):
    sum = 0
    while i < j:
        sum += arr[i]
        i += 1
    return sum

def nextMindex(m, currentM, arr):
    i = currentM + 1
    while i < len(arr):
        if arr[i] == m:
            return i
        i += 1
    return len(arr)

def maxSubArraySum(arr, m):

    prevM = -1
    currentM = 0
    nextM = 0
    sum = 0

    while nextM < len(arr):
        nextM = nextMindex(m, currentM, arr)
        sum = max( sum , subArraySum(prevM + 1, nextM, arr) )
        prevM = currentM
        currentM = nextM
    
    return sum

s = [int(x) for x in stdin.readline().split()]
for i in range(s[0]):
    n_m = [int(x) for x in stdin.readline().split()]
    arr = [int(x) for x in stdin.readline().split()]
    print(maxSubArraySum(arr, n_m[1]))