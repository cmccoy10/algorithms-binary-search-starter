function binarySearch(list, target) {
    if (list.length === 0) {
        return false;
    }
    let slicePoint;
    if (list.length % 2 === 0) {
        slicePoint = list.length / 2;
    } else {
        slicePoint = (list.length - 1) / 2;
    }
    let leftList = list.slice(0, slicePoint);
    let rightList = list.slice(slicePoint + 1);


    if (target < list[slicePoint]) {
        return binarySearch(leftList, target);
    } else if (target > list[slicePoint]) {
        return binarySearch(rightList, target);
    } else {
        return true;
    }
}

function binarySearchIndex(list, target, start = 0, end = list.length - 1) {

    if (start > end) {
        return -1;
    }

    let midPoint = Math.floor((start + end) / 2);

    if (target < list[midPoint]) {
        return binarySearchIndex(list, target, start, midPoint - 1);
    } else if (target > list[midPoint]) {
        return binarySearchIndex(list, target, midPoint + 1, end);
    } else {
        return midPoint;
    }

}


console.log(binarySearchIndex([1,2,4,6,8], 8))

module.exports = {
  binarySearch,
  binarySearchIndex
};
