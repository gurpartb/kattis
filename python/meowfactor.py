n = int(input())
m = int(n**(1/9.0)) + 1

while n % m**9:
    m -= 1

print(m)