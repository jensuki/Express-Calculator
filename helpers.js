// logic functinos to calculate
// mean(average), median(midpoint), mode(most frequent)

function mean(nums) {
    if (nums.length === 0) return 0;
    return nums.reduce((acc, curr) => acc + curr, 0) / nums.length;
}

function median(nums) {
    nums.sort((a, b) => a - b);

    const middle = Math.floor(nums.length / 2); // middle index

    // if array has an odd length, return middle elememt
    if (nums.length % 2 !== 0) {
        return nums[middle];
    } else {
        return (nums[middle - 1] + nums[middle]) / 2;
    }
}

function mode(nums) {
    const frequencyMap = {}; // obj to store the frequency of each #

    //count frequency of each #
    nums.forEach(num => {
        frequencyMap[num] = (frequencyMap[num] || 0) + 1;
    })

    let maxFrequency = 0; // variable to keep track of highest freq
    let mostFrequent = null; // store # with highest freq

    // loop thorugh frequencyMap to find the # with highest frequency
    for (let num in frequencyMap) {
        if (frequencyMap[num] > maxFrequency) {
            maxFrequency = frequencyMap[num];
            mostFrequent = Number(num); // update mostFrequent with the #
        }
    }
    if (maxFrequency === 1) return 'No mode';
    return mostFrequent;
}
module.exports = { mean, median, mode };