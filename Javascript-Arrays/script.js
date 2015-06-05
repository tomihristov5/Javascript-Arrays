function increaseArrayMembers() {
    var arr = new Array(20);
    for (var i = 0; i < arr.length; i++) {
        arr[i] = i * 5;
    }

    console.log(arr);
}

function lexicographicallyComparison() {
    var firstArr = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];
    var secondArr = ['a', 'c', 'y', 'a', 'l', 'b', 'd'];
    for (var i = 0; i < firstArr.length; i++) {
        if (firstArr[i] > secondArr[i]) {
            console.log('Lexicograhically ' + firstArr[i] + ' > ' + secondArr[i]);
        }
        else if (secondArr[i] > firstArr[i]) {
            console.log('Lexicograhically ' + firstArr[i] + ' < ' + secondArr[i]);
        }
        else {
            console.log('Lexicograhically ' + firstArr[i] + ' = ' + secondArr[i]);
        }
    }
}

function maximalSequene(sequence) {
    var arr = sequence,
            len = arr.length,
            max = 1,
            currMax = 1,
            maxSeq = [];
    for (var i = 0; i < len; i += 1) {
        if (arr[i] === arr[i + 1]) {
            currMax += 1;
        }
        else {
            currMax = 1;
        }
        if (currMax >= max) {
            max = currMax;
            for (var k = 0; k < max; k += 1) {
                maxSeq[k] = arr[i];
            }
        }
    }

    return 'The maximal repeating sequence is: ' + maxSeq.join(', ');
}

function maximalIncreasingSequence(arr) {
    var best = [arr[0]],
		tmp = [arr[0]];

    for (var i = 1; i < arr.length; i++) {
        if (arr[i] > arr[i - 1]) {
            tmp.push(arr[i]);
        }
        else {
            tmp = [arr[i]];
        }

        if (tmp.length > best.length) {
            best = tmp;
        }
    }

    return 'The maximal increasing sequence is: ' + best.join(', ');
}

function selectionSort(arr) {
    for (var left = 0; left < arr.length; left++) {
        for (var right = left + 1; right < arr.length; right++) {
            if (arr[left] > arr[right]) {
                var tmp = arr[right];
                arr[right] = arr[left];
                arr[left] = tmp;
            }
        }
    }

    return arr.join(', ');
}

function mostFrequentNumber(arr) {
    var mostFreq = {},
		maxNum = arr[0],
		maxCount = 1;

    for (var i = 0; i < arr.length; i++) {
        var num = arr[i];

        if (mostFreq[num] == null) {
            mostFreq[num] = 1;
        } else {
            mostFreq[num]++;
        }

        if (mostFreq[num] > maxCount) {
            maxNum = num;
            maxCount = mostFreq[num];
        }
    }

    return 'The most frequent number is: ' + maxNum + ', ' + maxCount + ' times';
}

function binarySearch(inputArray, numbersToFind) {
    if (arguments.length === 2) {
        var inputArray = inputArray,
            numbersToFind = numbersToFind;
    }
    else {
        var inputArray = [3, 9, 10, 11, 14, 18, 23, 24, 28, 29, 37, 38, 41, 44, 47],
            numbersToFind = [2, 3, 10, 27, 29, 47, 55];
    }

    console.log('Input numbers:')
    console.log(inputArray);
    console.log('Numbers to find:')
    console.log(numbersToFind);

    for (var i = 0; i < numbersToFind.length; i++) {
        console.log(numbersToFind[i] + ' is at index: ' +
            executeBinarySearch(inputArray, numbersToFind[i], 0, inputArray.length - 1));
    }

    function executeBinarySearch(arr, num, min, max) {
        var mid = min + Math.floor((max - min) / 2);

        if (max < min || num > arr[max]) {
            return 'Array not containing this number!';
        }

        if (arr[mid] > num) {
            return executeBinarySearch(arr, num, min, mid - 1);
        } else if (arr[mid] < num) {
            return executeBinarySearch(arr, num, mid + 1, max);
        } else {
            return mid;
        }
    }
}
