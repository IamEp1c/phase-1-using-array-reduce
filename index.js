const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// a = 0, c = 4, 4 gets added into 0 making 4

// a = 4, c = 5, 5 gets added into 4

// a = 9, c = 3, 3 gets added into 9 

// Code your solution here
const totalBatteries = batteryBatches.reduce((accumulator, currentValue) => {
     return accumulator + currentValue
})

