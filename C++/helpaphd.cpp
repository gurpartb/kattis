#include <iostream>
#include <vector>

using namespace std;

vector<string> split(string str, string delimeter){

    vector<string> v;

    string::size_type i = 0;
    string::size_type j = str.find(delimeter);

    while (j != string::npos){

        v.push_back(str.substr(i, j-i));

        i = j;
        j++;

        j = str.find(delimeter, j);

        if (j == string::npos){

            v.push_back(str.substr(i, str.length()));
        }
   }

   return v;
}

vector<int> toInt(vector<string> vstr){

    vector<int> vint;

    for (size_t i = 0; i < vstr.size(); i++){

        vint.push_back(stoi(vstr[i]));
    }

    return vint;
}

int sum(vector<int> vint){
    
    int totalSum = 0;

    for (size_t i = 0; i < vint.size(); i++){

        totalSum += vint[i];
    }
    
    return totalSum;
}

int main(int argc, char const *argv[]){

    int lines, count = 0;;

    cin >> lines;

    while (count < lines){

        string delimeter = "+";
        
        string str;
        cin >> str;

        vector<string> vstr = split(str, delimeter);

        vector<int> vint = toInt(vstr);

        if(vint.size() == 0){

            cout << "skipped"<< endl;
        }
        else {

            int vsum = sum(vint);
            cout << vsum << endl;
        }

        count++;
    }

    return 0;
}
