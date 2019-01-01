#include <iostream>
#include <vector>
#include <cstring>
using namespace std;

std::vector<int> dis;
std::string seq;
int unreachable = 99999999;

int count = 0;

int min_height(int index, int current_height, int heightp[40][1001], int climbChart[40][1001]){
        if(current_height<0) {
                return unreachable;
        }
        if(index == dis.size()) {
                if(current_height!=0) {
                        return unreachable;
                }else{
                        return current_height;
                }
        }
        if(heightp[index][current_height]!=-1) {
                //std::cout << "here"<<heightp[index][current_height] << '\n';
                return heightp[index][current_height];
        }
        int climbUp = min_height((index+1), current_height + dis.at(index), heightp,climbChart);
        int climbDown = min_height((index+1), current_height - dis.at(index),heightp,climbChart);

        int min;
        if(climbUp<climbDown) {
                min = climbUp;
                climbChart[index][current_height] = 2;
        } else{
                min = climbDown;
                climbChart[index][current_height] = 1;
        }
        heightp[index][current_height] = std::max(current_height, min);
        return heightp[index][current_height];
}


int main(int argc, char const *argv[]) {
        int n;
        std::cin >> n;
        for (size_t i = 0; i < n; i++) {
                int k;
                std::cin >> k;
                dis.clear();

                for (size_t j = 0; j < k; j++) {
                        int val;
                        std::cin >> val;
                        dis.push_back(val);
                }
                int h[40][1001];
                int c[40][1001];
                memset(h, -1, sizeof(h[0][0])*40*1001);
                memset(c, -1, sizeof(c[0][0])*40*1001);
                //heightp = new [40][1001]={-1};
                //climbChart = new [40][1001]={-1};
                if(min_height(0,0,h,c)== unreachable) {
                        std::cout << "IMPOSSIBLE" <<'\n';
                }else{
                        int height = 0;
                        std::string seq;
                        for (size_t i = 0; i < k; i++) {
                                if(c[i][height]==2) {
                                        seq = seq + "U";
                                        height = height + dis.at(i);
                                }else{
                                        seq = seq + "D";
                                        height = height - dis.at(i);
                                }
                        }
                        std::cout << seq << '\n';
                }
        }
        //  std::cout << '\n';
        return 0;
}
