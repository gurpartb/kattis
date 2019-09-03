// Solved this problem using python
// c++ doesn't have natively built arbitrary integers

#include <iostream>

unsigned long long* mem_Cp;


// C(n) is nth catalan number
// C(n) = C(n-1)C(0) + C(n-2)C(1) + ... + C(1)C(n-2) + C(0)C(n-1)
unsigned long long C(int n){
    if(mem_Cp[n] != 0){
        
        return mem_Cp[n];
    }
    unsigned long long sum = 0;
    for(int i = 0; i < n; i++)
    {
        sum += C(n-1-i)*C(i);
    }
    mem_Cp[n] = sum;
    std::cout<<n<<" "<<sum<<'\n';
    return mem_Cp[n];
}


// S(n) = sum, [ 0 <= k <= n ], C(k)C(n-k)
unsigned long long S(int n){
    return C(n+1);
}


int main(int argc, char const *argv[])
{
    int n;
    std::cin >> n;
    unsigned long long mem_C[n+2];
    memset(mem_C, 0, sizeof(mem_C));
    mem_C[0] = 1;
    mem_C[1] = 1;
    mem_Cp = mem_C;
    std::cout<< S(n);
    return 0;
}