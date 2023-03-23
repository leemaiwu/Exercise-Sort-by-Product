function sortByProduct (array) {
    let totals = []
    array.forEach((e, i) => {
        let totalNum = {
            total: e*(i + 1),
            i: i
        }
        totals.push(totalNum)
    })
    totals.sort((x, y) => x.total - y.total)
    let newArr = []
    totals.forEach(e => newArr.push(array[e.i]))
    return newArr
}
console.log(sortByProduct([23, 2, 3, 4, 5]))


///// Jared's Solution //////

function multSort(arr) {
    // make a new array that contains, instead of numbers,
    // sub-arrays that contain both the originial number,
    // amd the nultiplied number
    let arrOfarrs = arr.map((element, index, array) => {
        return [element, element * (index + 1)]
    })
    // console.log(arrOfarrs)
    // sort the array by the multiplied value in the sub array
    // which is the second value
    // sort it ascending
    arrOfarrs.sort((a, b) => a[1] - b[1]
        // {
        // if (a[1] > [b[1]]) {
        //     return 1
        // } else if (a[1] < b[1]){
        //     return -1
        // } else {
        //     return 0
        // }}
    )
    // console.log(arrOfarrs)
    // conver the sub arrays back into the numbers
    // which will be teh first number of the sub array
    let finalArr = arrOfarrs.map((element) => {
        return element[0]
    })
    // return the final array
    return finalArr
}
console.log(multSort([23, 2, 3, 4, 5]))
