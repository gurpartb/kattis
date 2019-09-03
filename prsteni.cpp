#include <iostream>

using namespace std;

int gcd(int a, int b){

    while(b){
        int t = b;
        b = a % b;
        a = t;
    }

    return a;
}

int main(int argc, char const *argv[])
{
    int rings, firstRing, count;

    cin >> rings >> firstRing;

    count = 1;

    while(count < rings){

        int _gcd, nth_ring;

        cin >> nth_ring;

        _gcd = gcd(firstRing, nth_ring);

        cout << firstRing / _gcd << '/' << nth_ring / _gcd << '\n';

        count++;
    }

    return 0;
}
