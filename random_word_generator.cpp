/*
   This program asks user for two inputs totalWords and wordLenght
   then uses that information two buid and display random strings
   of said lenght to the console
   @author Gurpartap Singh Bhatti
   @version 08/27/2018
 */

#include <iostream>
#include <cstdlib>

using namespace std;

void randomWord();
int totalWords;
int wordLength;

/*
   This Program Generates random words as standard output all words are of same character length as specified by the user.
   It ask user for two inputs:
   1) Number of words to be displayed
   2) Length of the words
 */
int main(int argc, char const *argv[]) {
        // std::cout << "Random Word Genertor." << '\n';
        // std::cout << "Enter number of words to be generated." << '\n';
        std::cin >> totalWords;
        // std::cout << "Enter character length of the words." << '\n';
        std::cin >> wordLength;
        std::cout << totalWords<<" "<< wordLength << '\n';
        randomWord();

        return 0;
}

/*
   This function access the fields: totalWords and wordLength.
   It outputs totalWords of size wordLenght as standard out.
 */
void randomWord(){
        for(int i = 0; i<totalWords; i++) {
                string word = "";
                for(int j = 0; j<wordLength; j++) {
                        word = word+char(96+rand()%26+1);
                }
                std::cout <<word<< '\n';
        }
}
