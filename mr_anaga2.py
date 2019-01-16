from sys import stdin

# n: number of lines (int)
# k: length of a word (int)
# u: unique set (string set)
# d: duplicate set (string set)
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
    c = [0]*26
    a = 97
    for i in w:
        j = ord(i)-a
        if j >= 0:
            c[j] += 1
    return int(''.join(map(str, c)))

n, k = [int(x) for x in stdin.readline().split()]
u = set()
d = set()
for i in range(n):
    w = stdin.readline()
    w = f(w)
    if w not in d:
        if w in u:
            u.remove(w)
            d.add(w)
        else:
            u.add(w)
print(len(u))