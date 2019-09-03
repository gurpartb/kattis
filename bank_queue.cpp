#include <iostream>

int main(int argc, char const *argv[]) {
        int N, endt, amount, t;
        std::cin >> N; std::cin >> endt;
        int array[endt+1];
        for (size_t i = 0; i <= endt; i++) {
                array[i]=0;
                // std::cout << "i "<<i << '\n';
        }
        for (size_t i = 0; i < N; i++) {
                std::cin >> amount;
                //std::cout << amount << '\n';
                std::cin >> t;
                for (size_t j = t; j >= 0; j--) {
                        if(array[j]==0) {
                                array[j]=amount;
                                break;
                        }else if(amount>array[j]) {
                                int temp = array[j];
                                array[j]=amount;
                                amount = temp;
                        }
                }
        }
        int sum = 0;
        for (size_t i = 0; i <= endt; i++) {
                sum = sum + array[i];
                // std::cout << array[i]<<'\n';
        }
        std::cout << sum << '\n';
        return 0;
}
