/*
   INPUT: The first line contains integers n and k separated by a space, where 1≤n≤10000 and 1≤k≤1000. The n words, one to a line, follow. Each word contains exactly k lower case letters. (The words are not necessarily in any dictionary you’ve ever seen.)

   OUTPUT: Produce a single line of output that contains the number of words on the list that are not anagrams of any other words on the list. This number, of course, should be between 0 and n inclusive.

   @author Gurpartap Singh Bhatti
   @version 08/27/2018
 */
#include <iostream>
#include <algorithm>
#include <set>

using namespace std;

/*
   Reads in strings from the console, prints out count of unique strings
 */
int main(int argc, char const *argv[]) {
        int totalWords;
        int wordLength;

        set<string> uniqueSet;
        set<string> duplicateSet;

        string word;

        std::cin >> totalWords;
        std::cin >> wordLength;

        for(int i =0; i<totalWords; i++)
        {
                std::cin >> word;
                sort(word.begin(), word.end());
                bool notInUniqueSet = uniqueSet.find(word) == uniqueSet.end();
                bool notInDuplicateSet = duplicateSet.find(word) == duplicateSet.end();
                //std::cout << notInUniqueSet<< '\n';
                if(notInUniqueSet&&notInDuplicateSet) {
                        uniqueSet.insert(word);
                }else{
                        uniqueSet.erase(word);
                        duplicateSet.insert(word);
                }
        }
        std::cout << uniqueSet.size() << '\n';
        return 0;
}
