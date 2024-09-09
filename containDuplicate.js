function containDuplicate(nums){
    const uniqueSet = new Set()
    for (let num of nums){
        if (uniqueSet.has(num)){
            return true
        }
        uniqueSet.add(num)
    }
    return false
    
}
console.log(
    containDuplicate([1,2,3])
)
