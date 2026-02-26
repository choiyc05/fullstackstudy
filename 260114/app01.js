// 변수
var a = 1
let b = 1
const c = 1

// 자료형
console.log(typeof 1)
console.log(typeof 1.0)
console.log(typeof "") // 포멧팅 `{a}`
console.log(typeof true)
console.log(typeof null)
console.log(typeof undefined)
console.log(typeof {})
console.log(typeof [])

// 제어문
// 조건문 (if, else, else if)

if (5 > 1) {

} else if (5 < 1) {

} else {

}

// 반복문 (for)
for (; false;) {
    console.log("반복")
}

for (const a in []) { //인덱스

}

for (const a of []) { //값

}

const arr = [[1, 2], [1], [1, 2, 3]]
for (const y in arr) { // 인덱스
    for (const x in arr[y]) {   // 인덱스 
        console.log(y, x, arr[y][x])
    }
}

for (i = 0; i < arr.length; i++) {
    for (j = 0; j < arr[i].length; j++) {
        console.log(i, j, arr[i][j])
    }
}

const arr1 = new Object() // {}과 동일
const arr2 = {}
console.log(typeof(arr1), typeof(arr2))
console.log(typeof Number("1")) // 형변환

console.log(10 == "10") // 참

obj = {}
obj["key"] = 10
console.log(obj, typeof obj)

const arr3 = []
arr3[0] = 10
console.log(arr3, typeof arr3)

const arr4 = new Array()
arr4.push(10)
console.log(arr4,typeof arr4)
arr4[0] = 20
console.log(arr4,typeof arr4)