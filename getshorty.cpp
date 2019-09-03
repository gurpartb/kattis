#include <iostream>
#include <map>
#include <array>
#include <queue>
#include <vector>
#include <iterator>
#include <iomanip>

class node {
public:

double factor;
std::map<int, double> dest;
node() : factor(-1){
}
void destInsert(int end, double factor){
        dest.insert(std::pair<int, double>(end, factor));
}
};
class cmpFunction {
public:
bool operator()(node* a, node* b){
        return a->factor<b->factor;
}
};

void dijkstra(node* graph[], int graphSize){
        std::priority_queue<node*, std::vector<node*>, cmpFunction> pq;
        graph[0]->factor=1;
        pq.push(graph[0]);
        while(!pq.empty()) {
                node* u = pq.top();
                pq.pop();
                for(std::map<int, double>::iterator it = u->dest.begin(); it!=u->dest.end(); it++) {
                        if(graph[it->first]->factor<u->factor*(it->second)) {
                                graph[it->first]->factor = u->factor*(it->second);
                                pq.push(graph[it->first]);
                        }
                }
        }
        float v = graph[graphSize-1]->factor;
        std::cout << std::fixed;
        std::cout << std::setprecision(4);
        std::cout << v<<std::endl;
}
void readcorridors(){
        int numCorridors, numNodes;
        std::cin >> numNodes;
        std::cin >> numCorridors;
        while(!(numNodes==0 && numCorridors==0)) {
                node* graph[numNodes];
                for (size_t i = 0; i < numNodes; i++) {
                        graph[i] = NULL;
                }
                for (size_t i = 0; i < numCorridors; i++) {
                        int start, end;
                        double factor;
                        std::cin >> start;
                        std::cin >> end;
                        std::cin >> factor;

                        if(!graph[start])
                                graph[start]=new node;

                        graph[start]->destInsert(end, factor);

                        if(!graph[end])
                                graph[end]=new node;
                        graph[end]->destInsert(start, factor);
                }
                dijkstra(graph, numNodes);
                std::cin >> numNodes;
                std::cin >> numCorridors;
        }
}

int main(int argc, char const *argv[]) {
        readcorridors();
        return 0;
}
