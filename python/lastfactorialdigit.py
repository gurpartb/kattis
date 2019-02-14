from sys import stdin

#def f(i):
#    if i <1:
#        i = 1
#    a = [0]*(i+1)
#    a[0] = 1
#    a[1] = 1
#    for j in range(2,len(a)):
#        a[j] = a[j-1]*j
#    s = str(a[i])
#    print(s[len(s)-1])
#
#n = stdin.readline()
#[f(int(x)) for x in stdin.readlines()]


# lets optimize this process
# read new value,
# if array doesn't contains copy array to bigger array
#   compute factorial from end of last array to new value
# print factorial 'dynamic programming'
#a = [1]*2
#l = len(a)
#n = stdin.readline()
#for i in stdin.readlines():
#    j = int(i)+1
#    if l < j:
#        a += [0]*(j-l)
#        for k in range(l,j):
#            a[k] = a[k-1]*k
#            l = j
#    s = str(a[j-1])
#    print(s[len(s)-1])


# cheat solution
d = {'0':1, '1':1, '2':2, '3':6, '4':4}
n = stdin.readline()
for i in stdin.readlines():
    i = i.rstrip()
    if i in d:
        print(d[i])
    else:
        print(0)