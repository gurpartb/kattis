#include <iostream>
#include <string.h>
#include <vector>
#include <iterator>
#include <map>
#include <stack>

class v {
public:
std::string _name;
int _weight;
bool _pre;
int _post;
std::vector<v*> _children;
v(std::string name, int weight)
        : _name(name), _weight(weight),_pre(false),_post(-1){

}
void _print(){
        std::cout << _name<<" "<<_weight<<" ";
        std::cout << _pre<<" "<<_post << '\n';
}
void _printedges(){
        for (std::vector<v*>:: iterator itc=_children.begin(); itc!=_children.end(); itc++) {
                std::cout << _name<< " "<< _post;
                std::cout << " ----> ";
                std::cout << (*itc)->_name<<" "<<(*itc)->_post;
                std::cout <<'\n';
        }
}
};
std::map<std::string, v> mapV;
std::map<std::string, v>:: iterator it;
std::vector<v*> vectorV;
void buildmap(){
        int numV, weight;
        std::string name;
        std::cin >> numV;
        for (size_t i = 0; i < numV; i++) {
                std::cin >> name;
                std::cin >> weight;
                v vertex(name, weight);
                mapV.insert(std::pair<std::string, v>(name, vertex));
                //  std::cout << "i " <<i<< '\n';
        }
}

void addedges(){
        int numE;
        std::string start, end;
        std::cin >> numE;
        for (size_t i = 0; i < numE; i++) {
                std::cin >> start;
                std::cin >> end;
                mapV.at(start)._children.push_back(&mapV.at(end));
        }
}

void dfs(){
        int postCount = mapV.size()-1;
        std::stack<v*> stackV;
        for (it = mapV.begin(); it !=mapV.end(); it++) {
                if(it->second._post==-1) {
                        stackV.push(&(it->second));
                        while(!stackV.empty()) {
                                //  stackV.top()->_print();
                                v* vp = stackV.top();
                                bool childrenAddedToStack= false;
                                for (size_t i = 0; i < vp->_children.size(); i++) {
                                        if(vp->_children.at(i)->_post==-1) {
                                                stackV.push(vp->_children.at(i));
                                                childrenAddedToStack = true;
                                                break;
                                        }
                                }
                                if(!childrenAddedToStack) {
                                        vp->_post = postCount;
                                        postCount--;
                                        stackV.pop();
                                }
                        }
                }
        }
}
void linearize(){
        vectorV.resize(mapV.size());
        for (it = mapV.begin(); it !=mapV.end(); it++) {
                vectorV.at(it->second._post)=&(it->second);
        }
}


void cheapestroute(std::string name, std::map<std::string, int> &costMap){
        int currentCost = costMap.at(name);
        v* cvp = &mapV.at(name);
        for (size_t i = 0; i < cvp->_children.size(); i++) {
                //if(cvp->_eV.at(i)->_post < evp->_post) {
                std::map<std::string, int>::iterator iter = costMap.find(cvp->_children.at(i)->_name);
                if(iter == costMap.end()) {
                        costMap.insert(std::pair<std::string, int>(cvp->_children.at(i)->_name,currentCost + cvp->_children.at(i)->_weight));
                }else{
                        if(costMap.at(cvp->_children.at(i)->_name) > currentCost+cvp->_children.at(i)->_weight) {
                                costMap.at(cvp->_children.at(i)->_name)=currentCost+cvp->_children.at(i)->_weight;
                        }
                }
        }
}

void routes(){
        int numRoutes;
        std::string start, end;
        std::cin >> numRoutes;
        //v* svp, evp;
        for (size_t i = 0; i < numRoutes; i++) {
                std::cin >> start; std::cin >> end;
                v*  svp = &mapV.at(start); v* evp = &mapV.at(end);
                if(svp->_post>evp->_post) {
                        std::cout << "NO" << '\n';
                        continue;
                }
                if(svp->_post==evp->_post) {
                        std::cout << 0 << '\n';
                        continue;
                }
                std::map<std::string, int> costMap;
                costMap.insert(std::pair<std::string, int>(start, 0));
                for (size_t i = mapV.at(start)._post; i < mapV.at(end)._post; i++) {
                        std::map<std::string, int>::iterator iter = costMap.find(vectorV.at(i)->_name);
                        if(iter != costMap.end()) {
                                cheapestroute(vectorV.at(i)->_name, costMap);
                        }
                }
                std::map<std::string, int>::iterator iter = costMap.find(evp->_name);
                if(iter == costMap.end()) {
                        std::cout << "NO" << '\n';
                }else{
                        std::cout << costMap.at(evp->_name)<< '\n';
                }
        }
}


void printmap(){
        for( it = mapV.begin(); it !=mapV.end(); it++) {
                it->second._print();
        }
}
void printmapedges(){
        for( it = mapV.begin(); it !=mapV.end(); it++) {
                it->second._printedges();
        }
}
void printvector(){
        for (size_t i = 0; i < vectorV.size(); i++) {
                vectorV.at(i)->_print();
        }
}

int main(int argc, char const *argv[]) {
        buildmap();
        // printmap();
        addedges();
        dfs();
        // printmapedges();
        linearize();
        // printvector();
        routes();
        //  std::cout << "mapvSize" <<mapV.size()<< '\n';
        return 0;
}
