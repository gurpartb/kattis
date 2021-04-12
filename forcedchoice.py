from sys import stdin

def read_int_array():
    return [int(x) for x in stdin.readline().split(' ')]

def main():
    nps = read_int_array()
    for i in range(nps[2]):
        s = read_int_array()
        if nps[1] in s[1:]:
            print('keep')
        else:
            print('remove')

if __name__ == '__main__':
    main()