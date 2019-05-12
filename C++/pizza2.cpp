#include <iostream>

int main(int argc, char const *argv[])
{
    double c, r, cheese, ratio;

    std::cout.precision(9);

    std::cin >> r >> c;

    cheese = r - c;
    
    ratio = 100 * (cheese * cheese) / (r * r);

    std::cout << ratio << '\n';

    return 0;
}