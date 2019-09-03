const readline = require('readline');

const rl = readline.createInterface({

    input: process.stdin,
    output: process.stdout
});

let problemsTests, problemsCount, testCount, canSolveTest, canSolveTestCount;

rl.on('line', (line) => {

    if(!problemsTests){

        problemsTests = line.split(' ').map( x => parseInt(x) );

        problemsCount = 0;
        canSolveTestCount = 0;

        // reset these prameters after each set of tests
        testCount = 0;
        canSolveTest = true;
    }
    else {

        testCount++;
        if(canSolveTest){

            canSolveTest = isSolvable(line);
        }

        // A set of tests are finished
        if(testCount === problemsTests[1]){

            if(canSolveTest){

                canSolveTestCount++;
            }
    
            testCount = 0;
            canSolveTest = true;

            problemsCount++;
        }

        // All sets of test are finished
        // a problem is finished
        if(problemsCount === problemsTests[0]){

            console.log(canSolveTestCount);
            process.exit();
        }
    }
});

// return true if string char at index 1 to n - 1 are lower case
function isSolvable(str){

    let a = 'a';

    for(let i = 1; i <str.length; i++){

        if(str[i] < a){

            return false;
        }
    }

    return true;
}