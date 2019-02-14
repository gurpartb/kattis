from sys import stdin

a = ['does not matter','advertise', 'do not advertise']
def f(i):
    i[0] *=-1
    i[2] *=-1
    g = sum(i)
    j = lambda k: int(k/abs(k)) if k != 0 else k
    return a[j(g)]
    
n = stdin.readline()
for l in stdin.readlines():
    i = [int(li) for li in l.split()]
    print(f(i))