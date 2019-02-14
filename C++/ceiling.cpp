// This program takes in n positive integers. Inserts them into a binary
// search tree. It creates k such trees. Prints to screen how many different
// shapes are creted by k trees.

// Build binary trees using struct Node
// Use queue to do a level order treversal
// As the nodes are poped off, p r l n
//

#include <iostream>
#include <queue>
#include <string>
#include <set>

struct Node {
        int value;
        Node* leftP;
        Node* rightP;
};

Node* ConstructNode(int);
void AddNode(int);
void LevelOrderTraversal();

Node* rootP;
std::set<std::string> globalSet;

int main(int argc, char const *argv[]) {
        int numTrees, numLeaves, leafVal;
        std::cin >> numTrees;
        std::cin >> numLeaves;
        // read all the trees
        for(int i = 0; i<numTrees; i++) {
                // build the tree
                rootP = NULL;
                for(int j = 0; j<numLeaves; j++) {
                        std::cin >> leafVal;
                        AddNode(leafVal);
                }
                LevelOrderTraversal();
        }
        std::cout << globalSet.size()<<'\n';
        return 0;
}

Node* ConstructNode(int leafVal){
        Node* tempP = new Node();
        tempP->value = leafVal;
        tempP->leftP = NULL;
        tempP->rightP = NULL;
        return tempP;
}

void AddNode(int leafVal){
        if(rootP == NULL) {
                rootP = ConstructNode(leafVal);
        } else {
                bool foundHome = false;
                Node* parentP = rootP;
                while(!foundHome) {
                        if(leafVal<parentP->value) {
                                if(parentP->leftP!=NULL) {
                                        parentP = parentP->leftP;
                                } else {
                                        parentP->leftP = ConstructNode(leafVal);
                                        foundHome = true;
                                }
                        }else {
                                if(parentP->rightP!=NULL) {
                                        parentP = parentP->rightP;
                                } else {
                                        parentP->rightP = ConstructNode(leafVal);
                                        foundHome = true;
                                }
                        }
                }
        }
}

void LevelOrderTraversal(){
        std::queue<Node*> leafQueue;
        std::string shape = "";
        if(rootP!=NULL) {
                leafQueue.push(rootP);
                while(!leafQueue.empty()) {
                        shape = shape+"p";
                        Node* currentNodeP = leafQueue.front();
                        if(currentNodeP->leftP !=NULL) {
                                leafQueue.push(currentNodeP->leftP);
                                shape = shape+"l";
                        }
                        if(currentNodeP->rightP !=NULL) {
                                leafQueue.push(currentNodeP->rightP);
                                shape = shape+"r";
                        }
                        leafQueue.pop();
                }
        }
        globalSet.insert(shape);
}
