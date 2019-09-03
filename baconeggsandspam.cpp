#include <algorithm>
#include <iostream>
#include <iterator>
#include <sstream>
#include <vector>
#include <map>

using namespace std;

void print_vector( vector<string> v ){

    sort(v.begin(), v.end());

    for (size_t i = 0; i < v.size(); i++){

        cout << v[i] << ' ';
    }
}

vector<string> get_keys( map<string, vector <string> *> *dict ){

    vector<string> keys;

    map<string, vector <string> *>::iterator it;

    for ( it = dict->begin(); it != dict->end(); it++ ){

        keys.push_back( it->first );
    }
    return keys;
}

void add_to_map( map <string, vector<string> *> *dict, vector<string> keys, const string val ) {

    for (size_t i = 0; i < keys.size(); i++){

        string key = keys[i];

        // if no key, inser key val pair
        if( dict->find( key ) == dict->end()  ){

            dict->insert( pair <string , vector <string> *> (key, new vector <string>()) );
        }

        vector<string> *vals = dict->at( key );
        vals->push_back( val );
    }
    
}

vector < string > string_split( string ticket, char delimeter ){

    vector<string> res;
    std::string line;
    std::stringstream data( ticket );

    while(std::getline( data, line, delimeter )){

        res.push_back(line); 
    }

    return res;
}


int main(int argc, char const *argv[]){

    int n, i = 0;
    string ticket, str_n;
    map < string, vector < string > * > *dict = new map < string, vector < string > *>();

    getline (cin, str_n);
    n = stoi(str_n);

    while(i < n){

        vector<string> parsed_ticket;

        getline (cin, ticket);

        parsed_ticket = string_split(ticket, ' ');

        string customer_name = parsed_ticket[0];

        parsed_ticket.erase(parsed_ticket.begin());

        add_to_map(dict, parsed_ticket, customer_name);

        i++;

        if( i == n ){

            vector<string> keys = get_keys(dict);
            sort( keys.begin(), keys.end() );

            for (size_t i = 0; i < keys.size(); i++){
                
                vector<string> *vals = dict->at(keys[i]);

                cout << keys[i]<<' ';

                print_vector(*vals);
                cout << '\n';
            }
        
            cout << '\n';

            getline (cin, str_n);
            n = stoi(str_n);

            i = 0;

            dict->erase( dict->begin(), dict->end() );

        }
    }

    return 0;

}
