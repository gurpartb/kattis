#include <string>
#include <vector>
#include <iostream>

using namespace std;

int sumOfDigits(int i){

    int sum = 0;
    int zero = 48;

    string str = to_string(i);

    for(int i = 0; i < str.size(); i++){

        sum += (int)str[i] - zero;
    }

    return sum;
}

int findP(int n, int sumn, int pmin){

    int p = pmin;
    while(true){

        int np = n*p;
        int sumnp = sumOfDigits(np);

        if(sumnp == sumn){

            return p;
        }

        p++;
    }
}

int main(int argc, char const *argv[])
{
    int n, pmin = 11;

    while(true){


        cin >> n;

        if(!n){

            break;
        }

        int sumn = sumOfDigits(n);
        int p = findP(n, sumn, pmin);
        cout << p << '\n';
    }
    return 0;
}
