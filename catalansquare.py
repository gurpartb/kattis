from sys import stdin

# C(n) is nth catalan number
# C(n) = C(n-1)C(0) + C(n-2)C(1) + ... + C(1)C(n-2) + C(0)C(n-1)
def C(n):
    # below is mathematical solution ###
    if n<2 :
        return 1
    cn = 2
    dn = 1
    for k in range(2, n):
        cn = cn*(n+k)
        dn = dn*k
    cn = cn//dn
    return cn

# S(n) = C(n+1)
def main():
    n = int(stdin.readline())
    print(C(n+1))

if __name__ == '__main__':
    main()

# mem_C = [0]*(n+2)
# mem_C[0] = 1
# mem_C[1] = 1

# def C(n):
# # below is iterative solution ###
    # for k in range(2, n + 1):
    #     sum = 0
    #     for i in range(int(k//2)):
    #         sum += 2*mem_C[k-1-i]*mem_C[i]
    #     if k % 2:
    #         mem_C[k] = sum + mem_C[int(k//2)]*mem_C[int(k//2)]
    #     else:
    #         mem_C[k] = sum
    # return mem_C[n] == int(cn)

# def C(n):
    # below is recursive solution ####
    # if mem_C[n] != 0:
    #     return mem_C[n]
    # sum = 0
    # for i in range(n):
    #     sum += C(n-1-i)*C(i)
    # mem_C[n] = sum
    # print(n, mem_C)
    # return mem_C[n]