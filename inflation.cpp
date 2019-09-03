#include <iostream>
#include <vector>
#include <algorithm>

using namespace std;

int main(int argc, char const *argv[])
{
    int n, i = 0;
    double ratio, sml_ratio = 1;
    vector<int> v;

    cin >> n;

    while(i < n){
        double vi;
        
        cin >> vi;

        v.push_back(vi);

        i++;
    }

    sort( v.begin(), v.end());

    i = 1;

    while( i <= v.size()){

        ratio = v[i - 1]/double(i);

        //cout << ratio<< ' '<< v[i] << ' ' << i;

        if(ratio < sml_ratio){

            sml_ratio = ratio;
        }
        else if(ratio > 1){

            cout << "impossible\n";

            return 0;
        }

        i++;
    }

    cout << sml_ratio << '\n';

    return 0;
}
