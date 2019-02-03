from sys import stdin

map = {'A1':2, 'A2':1, 'B2':3, 'B3':2, 'C1':3, 'C3':1}
p = 1
for i in stdin.readline():
    key = i+str(p)
    if key in map:
        p = map[key]
print(p)