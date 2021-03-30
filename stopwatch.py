from sys import stdin

def read_int():
    return int(stdin.readline())

def time_difference():
    start_time = read_int()
    end_time = read_int()
    return end_time - start_time

def get_total_time(m):
    total_time = 0
    while  0 < m:
        total_time += time_difference()
        m -= 1
    return total_time

def main():
    n = read_int()
    # if even
    if not n % 2:
        m = n // 2
        total_time = get_total_time(m)
        print(total_time)
    else:
        print('still running')

if __name__ == "__main__":
    main()