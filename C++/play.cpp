#include <iostream>

long* mem_Cp;

int main(int argc, char const *argv[])
{
    int count = 5;
    long mem_C[count];
    memset(mem_C, -1, sizeof(mem_C));
    mem_Cp = mem_C;
    mem_C[0] = 1;
    mem_C[1] = 1;
    for(int i = 0; i < count; i++)
    {
        std::cout << mem_Cp[i]<<'\n';
    }

    
    return 0;
}
