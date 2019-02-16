process.stdin.on('data', function(data){
    var lines = data.toString().split('\n');
    var cost = parseInt(lines[0]);
    var n = parseInt(lines[1]);
    var costs = []
    for(i = 2; i<lines.length;i++){
        var dims = lines[i].split(' ');
        var area = parseInt(dims[0])*parseInt(dims[1]);
        var totCost = cost*area;
        costs.push(totCost);
    }
    var sum = costs.reduce((a, b) => a + b, 0);
    console.log(sum);
});