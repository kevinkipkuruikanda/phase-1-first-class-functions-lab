// Code your solution in this file!
const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];
let returnFirstTwoDrivers = ()=>{
    return drivers.slice(0,2)
}
let returnLastTwoDrivers= ()=>{
    return drivers.slice(-2)
}
let selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers]
let createFareMultiplier= (valueA)=>{
    return (valueB)=>{
        return valueA*valueB
    }
}
let fareDoubler = createFareMultiplier(2)


let fareTripler = createFareMultiplier(3)
let selectDifferentDrivers = (drivers,callback)=>{
    return callback(drivers);

} 