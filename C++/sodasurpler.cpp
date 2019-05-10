#include <iostream>

using namespace std;

int main(int argc, char const *argv[]){
    
    int e, f, c, soda = 0;

    cin >> e >> f >> c;

    e += f;

    while(e >= c){

        soda += e / c;

        e = e / c + (e % c);
    }

    cout << soda << '\n';
    return 0;
}
