from sys import stdin

d = ['OCT 31','DEC 25']
l = stdin.readline().rstrip()
if l in d:
    print('yup')
else:
    print('nope')