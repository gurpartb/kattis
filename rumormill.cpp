#include <iostream>
#include <string.h>
#include <iterator>
#include <vector>
#include <queue>
#include <map>
#include <set>

struct person {
        std::string name;
        bool visited;
        std::vector<person*> friends;
};

std::map<std::string, person*> graph;
std::map<std::string, person*>::iterator it;
void readperson(){
        std::string name;
        int numperson;
        std::cin >> numperson;
        for (size_t i = 0; i < numperson; i++) {
                person* p = new person();
                std::cin >> p->name;
                p->visited = false;
                graph.insert(std::pair<std::string, person*>(p->name, p));
        }
}

void readfriends(){
        std::string friend1, friend2;
        int numfriends;
        std::cin >> numfriends;
        for (size_t i = 0; i < numfriends; i++) {
                std::cin >> friend1;
                std::cin >> friend2;
                //  std::cout << friend1<<" "<<friend2 << '\n';
                graph.at(friend1)->friends.push_back(graph.at(friend2));
                graph.at(friend2)->friends.push_back(graph.at(friend1));
        }
}
std::set<std::string> namesofunvisitedfriends(std::queue<person*> &visitedperson){
        std::queue<person*> visitedfriends;
        std::set<std::string> namesofvisitedfriends;
        while(!visitedperson.empty()) {
                person* p=visitedperson.front();
                visitedperson.pop();
                for(std::vector<person*>::iterator itvl = p->friends.begin(); itvl!=p->friends.end(); itvl++) {
                        if(!(*itvl)->visited) {
                                (*itvl)->visited=true;
                                namesofvisitedfriends.insert((*itvl)->name);
                                visitedfriends.push((*itvl));
                        }
                }
        }
        visitedperson=visitedfriends;
        return namesofvisitedfriends;
}

void printnames(std::set<std::string> &names) {
        for(std::set<std::string>::iterator itsl=names.begin(); itsl!=names.end(); itsl++) {
                std::cout << (*itsl)<<" ";
        }
}

void dfs(std::string sourcename){
        std::queue<person*> visitedperson;
        person* p = graph.at(sourcename);
        p->visited=true;
        std::cout <<p->name<<" ";
        visitedperson.push(p);
        while (!visitedperson.empty()) {
                std::set<std::string> names=namesofunvisitedfriends(visitedperson);
                printnames(names);
        }
        for(it = graph.begin(); it!=graph.end(); it++) {
                if(!it->second->visited) {
                        std::cout <<it->second->name<<" ";
                }
                it->second->visited=false;
        }
        std::cout <<'\n';
}

// void sanitizegraph(){
//         for(it = graph.begin(); it!=graph.end(); it++) {
//                 it->second->visited=false;
//         }
// }

void startrumormill(){
        int sourcenum;
        std::string sourcename;
        std::cin >> sourcenum;
        for (size_t i = 0; i < sourcenum; i++) {
                // if(i>0) {
                //         sanitizegraph();
                // }
                std::cin >> sourcename;
                dfs(sourcename);
        }
}

int main(int argc, char const *argv[]) {
        readperson();
        readfriends();
        startrumormill();
        return 0;
}
