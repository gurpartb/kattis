#include <iostream>
#include <cmath>

using namespace std;

string secretmessage(string str, int rows, int cols){

    string res = "";

    for (size_t col = 0; col < cols; col++){

        for (int i = rows*cols - cols; i >= 0; i -= cols){

            int j = i + col;

            if(j < str.size()){

                res += str[j];
            }
        }
    }

    return res;
}

int main(int argc, char const *argv[]){

    int i, sum = 0, count = 0;

    cin >> i;

    while( count < i ){

        string j, k;

        cin >> j;

        int d = sqrt(j.size());

        if(d*d < j.size()){

            d++;
        }

        k = secretmessage(j, d, d);

        cout << k <<'\n';

        count++;
    }

    return 0;
}