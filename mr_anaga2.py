from sys import stdin

# n: number of lines (int)
# k: length of a word (int)
# d: dictionary <key, val> <int, int>
# w: word (string)
# c: character occurence counter array (int list size: 26)
# a: ascii value of 'a' (int)
# j: ascii mapping to c index 'a' -> 0 (int)

def f(w):
    """
    This function takes in string 'w' as a parameter.
    'w' must be a word with all lower case letters and no spaces.
    It counts the number of occurences of each charater of the
    alphabet and increments the corresponding index in 'c'.
    It converts the 'c' array into a single int returns it to the caller.
    """
    a = 97
    l = 26
    c = [0]*l
    for i in w[:k]:
        j = ord(i)-a
        c[j] += 1
    return ''.join([str(x) for x in c])

n, k = [int(x) for x in stdin.readline().split()]
d = {}
for i in stdin.readlines():
    w = f(i)
    if w not in d.keys():
        d[w] = 1
    else:
        d[w] = 0
s = 0
for i in d.values():
    s += i
print(s)