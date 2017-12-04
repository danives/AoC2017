var input = 277678;
var i = 1;
var step = 0;
var iterator = 0;

var container = [];

while (i <= input) {
    
    if (!container[step]) {
        container[step] = [];
    }
    
    container[step].push(i);

    if (step == 0 || container[step].length === step) {
        step += 8;
    }
    i++;

}

while (container[step].length < step) {
    container[step].push(i);
    iterator++;
    i++;
}

var distance_from_middle = step / 8; // this gets the 'base' distance from the middle

var length = container[step].length; // get the length of the outside most square

// Split the outside container into 4 'lengths'
var arrays = [];
while (container[step].length > 0) {
    arrays.push(container[step].splice(0, length / 4));
}

for (i in arrays) {
    var index = arrays[i].indexOf(input);
    if (index !== -1) {
        var middle = arrays[i][Math.round((arrays[i].length - 1) / 2)];
        var difference = Math.abs(input - middle);
        console.log(distance_from_middle + difference + 1);
        break;
    }
}
