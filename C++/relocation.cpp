#include <iostream>
#include <vector>

using namespace std;

int main(int argc, char const *argv[])
{
    int n, q, count = 0;
    vector<int> v;

    cin >> n;
    cin >> q;

    while(count < n){
        int i;
        cin >> i;
        v.push_back(i);
        count++;
    }

    count = 0;

    while(count < q){

        int a, b, c;

        cin >> a >> b >> c;

        b--;
        if(a == 1){

            v[b] = c;
        }
        else if(a == 2){

            c--;
            int d = abs(v[b] - v[c]);
            cout << d << '\n';
        }

        count++;
    }

    return 0;
}

