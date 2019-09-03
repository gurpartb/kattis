from sys import stdin

class Node:
    def __init__(self):
        self.neighbors = []
        self.squawk = [0]

def build_nodes(n):
    while n > 0:
        nodes.append(Node())
        n -= 1

def build_link(i, j):
    nodes[i].neighbors.append(j)
    nodes[j].neighbors.append(i)

def infect_node(i):
    nodes[i].squawk[0] = 1

def update_squawks(i, t):
    squawks = 0
    for j in nodes[i].neighbors:
        squawks += nodes[j].squawk[t]
    nodes[i].squawk.append(squawks)

def spread_infection(t):
    for ti in range(1,t+1):
        for i in range(len(nodes)):
            update_squawks(i, ti - 1)

def sum_final_squawks(t):
    final_squawks = 0
    for node in nodes:
        final_squawks += node.squawk[t]
    return final_squawks

# list of all nodes
nodes = []

# read first line
nmst = [int(x) for x in stdin.readline().split(' ')]

# build n nodes
build_nodes(nmst[0])

# read and build all links
for i in range(nmst[1]):
    line = stdin.readline().split(' ')
    build_link(int(line[0]), int(line[1]))

# infect first node
infect_node(nmst[2])

# spread infection for t iterations
spread_infection(nmst[3])

# print the final squawk
print(sum_final_squawks(nmst[3]))