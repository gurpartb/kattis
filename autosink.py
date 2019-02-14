from sys import stdin

class node:
    pre = 0
    post = 0
    toll = 0
    parents = []
    def __init__(self, i):
        self.toll = i
    def set_pre(self, i):
        self.pre = i
    def set_post(self, i):
        self.post = i
    def add_parent(self, i):
        self.parents.append(i)
    def get_toll(self):
        return self.toll

dict = {}
n = int(stdin.readline())
for i in range(n):
    #l = [x for x in stdin.readline().split()]
    l = stdin.readline().split()
    print(l)
    dict[l[0]] = node(int(l[1]))
n = stdin.readline()
print(n)cs
# for i in range(n):
#     l = 

for i in dict.values():
    print(i.toll)