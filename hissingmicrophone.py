from sys import stdin

def f(s):
    for i in range(1,len(s)):
        if 's'==s[i]==s[i-1]:
            print('hiss')
            return
    print('no hiss')
        
[f(s) for s in stdin.readlines()]