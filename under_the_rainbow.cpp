#include <iostream>
#include <vector>
#include <math.h>

std::vector<int> dis;
int size;
int *pen;

int penalty(int i){
        if(i==size)
                return 0;
        if(pen[i]!= -1)
                return pen[i];
        for(size_t k = i+1; k <=size; k++) {
                int temp = pow(400 -(dis[k] - dis[i]), 2) + penalty(k);
                if(temp < pen[i]||pen[i]==-1)
                        pen[i] = temp;
        }
        return pen[i];
}

int main(int argc, char const *argv[]) {
        std::cin >> size;
        pen = new int[size+1];
        for (size_t i = 0; i <= size; i++) {
                int num;
                std::cin >> num;
                dis.push_back(num);
                pen[i] = -1;
        }
        std::cout << penalty(0) << '\n';
        return 0;
}
