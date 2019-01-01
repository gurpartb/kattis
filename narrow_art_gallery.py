from sys import stdin

g = "global"
n = "global"
di = "global"
close_none_array = "global"
close_one_array = "global"
close_zero_array = "global"
close_n = "global"


def maxvalue_dic(k):
    temp_close_one = 0
    temp_close_zero = 0
    for i5 in range(n - 1, n - k - 1, -1):
        temp_close_one = temp_close_one + g[0][i5]
        temp_close_zero = temp_close_zero + g[1][i5]
        close_one_array[i5] = temp_close_one
        close_zero_array[i5] = temp_close_zero
        close_none_array[i5] = max(temp_close_one, temp_close_zero)
        close_n[i5] = temp_close_one + temp_close_zero


def maxvalue(r, close_not, k):
    if r == n:
        return 0
    if k == n - r:
        if close_not == -1:
            return close_none_array[r]
        elif close_not == 0:
            return close_one_array[r]
        else:
            return close_zero_array[r]
    if k < 0:
        return close_n[r]
    key = str(r) + str(close_not) + str(k)
    if key in di:
        return di[key]
    close_none = g[0][r] + g[1][r] + maxvalue(r + 1, -1, k)
    if close_not == -1:
        close_one = g[0][r] + maxvalue(r + 1, 0, k - 1)
        close_zero = g[1][r] + maxvalue(r + 1, 1, k - 1)
        temp = max(close_one, close_zero, close_none)
    elif close_not == 1:
        close_zero = g[1][r] + maxvalue(r + 1, 1, k - 1)
        temp = max(close_zero, close_none)
    else:
        close_one = g[0][r] + maxvalue(r + 1, 0, k - 1)
        temp = max(close_one, close_none)
    di[key] = temp
    return temp


n, kin = [int(x2) for x2 in stdin.readline().split()]
g = [[0]*n, [0]*n]
close_none_array = [0]*n
close_one_array = [0]*n
close_zero_array = [0]*n
close_n = [0]*n
di = {}
for i in range(n):
    g[0][i], g[1][i] = [int(x2) for x2 in stdin.readline().split()]
maxvalue_dic(kin)
print(maxvalue(0, -1, kin))
