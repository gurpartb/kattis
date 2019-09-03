#include <iostream>
#include <map>

using namespace std;

int main(int argc, char const *argv[])
{
    map< string, string > m;
    
    const string key = "name";
    const string val = "----gurpartap----";

    m.insert( pair<string, string>(key, val));

    cout << m.at(key);

    return 0;
}

