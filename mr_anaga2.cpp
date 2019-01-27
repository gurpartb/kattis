#include <iostream>
#include <iterator>
#include <cstring>
#include <unordered_map>

const int l = 26;
const int a = 97;

std::string f(std::string w, int k){
        int c[l] = {};
        for (size_t i = 0; i < k; i++) {
                c[w[i]-a]++;
        }
        std::string s = "";
        for (size_t i = 0; i < l; i++) {
                s += std::to_string(c[i]);
        }
        return s;
}

int main(int argc, char const *argv[]) {
        // removes the synchronization with c
        std::ios::sync_with_stdio(false);
        // synchronizes, clears buffer
        std::cin.tie(NULL);
        int n, k;
        std::cin >> n;
        std::cin >> k;
        int count = n;
        std::unordered_map<std::string, int> m;
        std::unordered_map<std::string, int>::iterator it;
        std::string w, w1;
        for (size_t i = 0; i < n; i++) {
                std::cin >> w;
                w = f(w,k);
                it = m.find(w);
                if(it == m.end()) {
                        m.insert(std::pair<std::string, int>(w,1));
                }else{
                        if(m[w] == 1) {
                                m[w] = 0;
                                count--;
                        }
                        count--;
                }
        }
        std::cout << count << '\n';
        return 0;
}
