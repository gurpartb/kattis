from sys import stdin

while True:

    num = int(stdin.readline())

    if num == 0:
        break

    # convert int to binary
    num = bin(num - 1)

    # conver num to string, split it, reverse it
    # pop the last two elements-->(binary markers)
    rev = list(str(num))
    rev.reverse()
    rev.pop()
    rev.pop()

    # intialize var for the for loop
    mult = 1
    three = 3
    outstr = ""

    # given subset corresponds to a multiple of three
    # that occurs where binary digit equal '1'
    for x in rev:

        if x == "1":

            outstr += str(mult)+", "

        mult *= three

    # remove the last comma and space
    if len(outstr) > 0:
        outstr = outstr.rstrip(', ')

    # print the formated string
    print('{ '+outstr+' }')