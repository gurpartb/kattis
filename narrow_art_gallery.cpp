#include <iostream>
#include <string>
#include <map>

std::map<std::string,int>::iterator it;
std::map<std::string,int> mymap;
int n;
int *zerop;
int *onep;

int maxValue(int r, int close_not,int k){
        std::string key_close_not = std::to_string(r) + std::to_string(close_not) + std::to_string(k);
        if(r==n)
                return 0;
        it = mymap.find(key_close_not);
        if(it !=mymap.end())
                return it->second;
        if(k == n - r) {
                if(close_not == -1) {
                        int close_one = zerop[r] + maxValue(r+1, 0, k-1);
                        int close_zero = onep[r] + maxValue(r+1, 1, k-1);
                        int bigger = std::max(close_one, close_zero);
                        mymap.insert(std::pair<std::string,int>(key_close_not,bigger));
                        return bigger;
                } else if(close_not == 0) {
                        int close_one = zerop[r] + maxValue(r+1, 0, k-1);
                        mymap.insert(std::pair<std::string,int>(key_close_not,close_one));
                        return close_one;
                }else{
                        int close_zero = onep[r] + maxValue(r+1, 1, k-1);
                        mymap.insert(std::pair<std::string,int>(key_close_not,close_zero));
                        return close_zero;
                }
        } else {
                if(close_not == -1) {
                        int close_none = zerop[r] + onep[r] + maxValue(r+1, -1, k);
                        int close_one = zerop[r] + maxValue(r+1, 0, k-1);
                        int close_zero = onep[r] + maxValue(r+1, 1, k-1);
                        int bigger = std::max(close_one, close_zero);
                        bigger =  std::max(bigger, close_none);
                        mymap.insert(std::pair<std::string,int>(key_close_not,bigger));
                        return bigger;
                } else if(close_not == 1) {
                        int close_none = zerop[r] + onep[r] + maxValue(r+1, -1, k);
                        int close_zero = onep[r] + maxValue(r+1, 1, k-1);
                        int bigger =  std::max(close_zero, close_none);
                        mymap.insert(std::pair<std::string,int>(key_close_not,bigger));
                        return bigger;
                }else{
                        int close_none = zerop[r] + onep[r] + maxValue(r+1, -1, k);
                        int close_one = zerop[r] + maxValue(r+1, 0, k-1);
                        int bigger = std::max(close_one, close_none);
                        mymap.insert(std::pair<std::string,int>(key_close_not,bigger));
                        return bigger;
                }
        }
}

int main(int argc, char const *argv[]) {
        int k;
        std::cin >> n; std::cin >> k;
        int zero[n]; int one[n];
        for (size_t i = 0; i < n; i++) {
                std::cin >> zero[i]; std::cin >> one[i];
        }
        zerop = zero; onep=one;
        std::cout << maxValue(0, -1, k) << '\n';
        return 0;
}
