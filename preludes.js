const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let count = 1;
rl.on('line', (line) => {
    
    chopin(count, line);
    count++;
});

function chopin(count, line = 'G minor'){

    const unique = 'UNIQUE';
    const uniqueSet = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];
    const alternateNames = {'A#':'Bb', 'Bb':'A#', 'C#':'Db', 'Db':'C#', 'D#':'Eb',
                            'Eb':'D#', 'F#':'Gb', 'Gb':'F#', 'G#':'Ab', 'Ab':'G#'}

    const noteTonality = line.split(' ');

    const isUnique = uniqueSet.includes(noteTonality[0]);

    if(isUnique){

        print(count, unique);
        return;
    }

    const str = alternateNames[noteTonality[0]] + ' ' + noteTonality[1];
    print(count, str)
}

function print(count, str){

    console.log(`Case ${count}: ${str}`);
}