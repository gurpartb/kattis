
#include <iostream>
long exp(long x, long y, long N);
long gcd_iterative(long a, long b);
long* ee(long a, long b);

// *** key ***
void read_key(){
        long N, p, q, q2, phi;
        std::cin >> p; std::cin >> q;
        N = p*q;
        phi = (p-1)*(q-1);
        for(long i =2; i < phi; i++) {
                if(gcd_iterative(i,phi)==1) {
                        q2 = i;
                        break;
                }
        }
        // ee is the inverse
        long* n_ar = ee(q2, phi);
        long ans = (n_ar[0] + phi) %phi;
        std::cout <<N<<" "<<q2<<" "<< ans << '\n';
}

// *** isprime ***
bool isprime(long x){
        if(exp(2, x-1,x)==1 && exp(3, x-1,x)==1 && exp(5,x-1,x)==1) {
                std::cout << "yes" << '\n';
        }else{
                std::cout << "no" << '\n';
        }
}

void read_isprime(){
        long x;
        std::cin >> x;
        isprime(x);
}

// *** inverse ***
long* ee(long a, long b){
        long* n_ar= new long[3];
        if(b==0) {
                n_ar[0]=1; n_ar[1]=0; n_ar[2]=a;
                return n_ar;
        }else{

                long* n_arp= ee(b, a % b);
                long xp = n_arp[0]; long yp = n_arp[1]; long d = n_arp[2];
                n_arp[0]=yp; n_arp[1]=xp-(a/b)*yp; n_arp[2]=d;
                return n_arp;
        }
}

void read_inverse(){
        long a; long N;
        std::cin >> a; std::cin >> N;
        long* n_ar = ee(a, N);
        if(n_ar[2]==1) {
                long ans = (n_ar[0] + N) % N;
                std::cout << ans << '\n';
        }else{
                std::cout << "none" << '\n';
        }
}

// *** exp ***
long exp(long x, long y, long N){
        x = x % N;
        if(y==0) {
                return 1;
        } else {
                long z = exp(x,y/2,N);
                //z = z % N;
                z = z*z;
                z = (z % N+N)%N;
                if(y % 2 == 0) {
                        return z;
                }else{
                        z = x*z;
                        return z % N;
                }
        }
}

void read_exp(){
        long x; long y; long N;
        std::cin >> x; std::cin >> y; std::cin >> N;
        std::cout << exp(x,y,N) << '\n';
}

// *** GCD ***
long gcd_iterative(long a, long b){
        while(b>0) {
                long aModB = a % b;
                a = b;
                b = aModB;
        }
        return a;
}

void read_gcd(){
        long x; long y;
        std::cin >> x; std::cin >> y;
        std::cout <<gcd_iterative(x,y)<< '\n';
}

int main(int argc, char const *argv[]) {
        std::string s = "end";
        std::cin >> s;
        while(s!="end") {
                if(s=="gcd") read_gcd();
                if(s=="exp") read_exp();
                if(s=="inverse") read_inverse();
                if(s=="isprime") read_isprime();
                if(s=="key") read_key();
                s = "end";
                std::cin >> s;
        }
        return 0;
}
