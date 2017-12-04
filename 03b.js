var input = 277678;
var i = 1;
var step = 0;
var index = 0;
var divider;
var subtractor = 1;

var container = [];

while (i <= input) {
    
    if (!container[step]) {
        container[step] = [];
    }

    if (step != 0) {
        if (index === 0) {
            if (container[step-8].length === 1) {
                i = container[step-8][0];
            } else {
                i = container[step-8][0] + container[step-8][container[step-8].length-1];
            }   
        } else {
            var ignore_inner_next = false;
            var ignore_inner_previous = false;
            i = container[step][index-1]; // get the prior value

            if ((index+1) % divider === 0) {
                // We have a corner
                subtractor++;
                ignore_inner_previous = true;
                ignore_inner_next = true;
            } else if ((index+1) > divider && (index+1) % divider == 1) {
                subtractor++;
                i += container[step][index-2]; // get the value prior to the prior one...yup
                ignore_inner_previous = true;
            } else if ((index+2) % divider === 0) {
                // We're just before a corner
                ignore_inner_next = true;
            }

            if (container[step-8].length == 1) {
                i += container[step-8][0];
            } else {
                i += container[step-8][index - subtractor];
                if (!ignore_inner_previous) {
                    if ((index - subtractor -1) < 0) {
                        i += container[step-8][container[step-8].length - 1];
                    } else {
                        i += container[step-8][index - subtractor - 1];
                    }
                }
                if (!ignore_inner_next) {
                    if ((index - subtractor +1) > container[step-8].length) {
                        i += container[step-8][0];
                    } else {
                        i += container[step-8][index - subtractor + 1];
                    }
                }
            }
            if (index >= step-2) { // if its the final or penultimate entry, then make sure to add the first one we added also, as that matches diaognally
                i += container[step][0];
            }
        }
    }

    container[step].push(i);

    if (step == 0 || container[step].length === step) {
        step += 8;
        index = 0;
        divider = (step / 4);
        subtractor = 1;
    } else {
        index++;
    }
}
console.log(container);
