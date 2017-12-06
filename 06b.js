var input = [5,1,10,0,1,7,13,14,3,12,8,10,7,12,0,6];
var infinite = false;
var outputs = [];
outputs.push(input.join(','));

var largest = 0;
var largest_index = 0;
var joined;

while (!infinite) {
    
    largest = 0;
    largest_index = 0;

    for (var i in input) {
        if (input[i] > largest) {
            largest = input[i];
            largest_index = i;
        }
    }

    input[largest_index] = 0;

    while (largest != 0) {
        largest_index++;
        if (largest_index >= input.length) {
            largest_index = 0;
        }
        input[largest_index]++;
        largest--;
    }

    joined = input.join(',');
    if (outputs.indexOf(joined) != -1) {
        infinite = true;
    } else {
        outputs.push(joined);
    }
}
console.log(outputs);
console.log(outputs.length - outputs.indexOf(joined));
