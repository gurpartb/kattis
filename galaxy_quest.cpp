#include <iostream>
#include <math.h>
#include <vector>

struct star {
        bool isDead;
        long x;
        long y;
};

long glacticDiameterSquared;

long distanceBetweenStarsSquared(star star1, star star2){
        return pow(star1.x-star2.x, 2.0)+pow(star1.y-star2.y, 2.0);
}

bool inTheSameGalaxy(star s1, star s2){
        if(distanceBetweenStarsSquared(s1, s2)>glacticDiameterSquared) {
                return false;
        }
        return true;
}

star deadStarMethod(){
        star deadStar;
        deadStar.x = 0;
        deadStar.y = 0;
        deadStar.isDead = true;
        return deadStar;
}

long count;

bool isMajority(std::vector<star>* v, star s){
        count = 0;
        for (std::vector<star>::iterator it = v->begin(); it != v->end(); ++it) {
                if(inTheSameGalaxy(s, *it)) {
                        count++;
                }
        }
        if(count>v->size()/2) {
                return true;
        } else {
                return false;
        }
}

star findMajority(std::vector<star>* starVector){
        star sx, sy;
        if((*starVector).size()==0) {
                return deadStarMethod();
        } else if((*starVector).size()==1) {
                return (starVector->at(0));
        } else {
                long halfSize = (*starVector).size()/2;
                std::vector<star> sv1((*starVector).begin(),(*starVector).begin()+halfSize);
                std::vector<star> sv2((*starVector).begin()+halfSize, (*starVector).end());
                sx = findMajority(&sv1);
                sy = findMajority(&sv2);
        }

        if(sx.isDead&&sy.isDead) {
                return sx;
        } else if(sx.isDead) {
                if(isMajority(starVector, sy)) {
                        return sy;
                } else {
                        return deadStarMethod();
                }
        } else if(sy.isDead) {
                if(isMajority(starVector, sx)) {
                        return sx;
                } else {
                        return deadStarMethod();
                }
        } else {
                if(isMajority(starVector, sx)) {
                        return sx;
                } else if(isMajority(starVector, sy)) {
                        return sy;
                } else {
                        return deadStarMethod();
                }
        }
}

void buildStarVector(std::vector<star>* starvector, long starCountK){
        // build and store stars in a vector
        for(int i=0; i<starCountK; i++) {
                star s1;
                long x, y;
                std::cin >> x;
                std::cin >> y;
                s1.x = x;
                s1.y = y;
                s1.isDead = false;
                (*starvector).push_back(s1);
        }
}

int main(int argc, char const *argv[]) {
        std::vector<star> starVector;
        long glacticDiameter, starCountK;
        std::cin >> glacticDiameter;
        std::cin >> starCountK;
        glacticDiameterSquared = pow(glacticDiameter,2.0);
        buildStarVector(&starVector, starCountK);
        star majority = findMajority(&starVector);
        // long marjorityStarCount =0;
        if(majority.isDead) {
                std::cout << "NO" << '\n';
        } else {
                isMajority(&starVector, majority);
                std::cout << count << '\n';
        }
        return 0;
}
