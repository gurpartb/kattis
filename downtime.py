from sys import stdin
import math

def main():
    max_req = 0
    req_times = []
    time_per_req = 1000
    arr = [int(x) for x in stdin.readline().split(' ')]
    for line in stdin.readlines():
        ti = int(line)
        if req_times and req_times[0] <= ti - time_per_req:
            if max_req < len(req_times):
                max_req = len(req_times)
            while req_times and req_times[0] <= ti - time_per_req:
                req_times.pop(0)
        req_times.append(ti)
        
    if max_req < len(req_times):
                max_req = len(req_times)
    print(math.ceil(max_req/arr[1]))

if __name__ == "__main__":
    main()