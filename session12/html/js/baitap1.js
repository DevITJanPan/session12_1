// Khai báo mảng một chiều
let arrayInt = [];

// Nhập 5 giá trị số nguyên từ bàn phím
for (let i = 0; i < 5; i++) {
  let value = Number(prompt("Nhập giá trị số nguyên thứ " + (i + 1) + ":"));
  arrayInt.push(value);
}
console.log("Các phần tử của mảng:");
for (let i = 0; i < arrayInt.length; i++) {
    console.log(arrayInt[i]);
  }
// In các phần tử có giá trị chẵn và tính tổng
console.log("Các phần tử có giá trị chẵn:");
let sum = 0;
for (let i = 0; i < arrayInt.length; i++) {
  if (arrayInt[i] % 2 === 0) {
    console.log(arrayInt[i]);
   sum += arrayInt[i];
  }
}
console.log("Tổng các phần tử có giá trị chẵn: " + sum);

 // In các phần tử có chỉ số lẻ và tính tổng
console.log("Các phần tử có chỉ số lẻ:");
let Sum = 0;
for (let i = 1; i < arrayInt.length; i += 2) {
  console.log(arrayInt[i]);
 Sum += arrayInt[i];
}
console.log("Tổng các phần tử có chỉ số lẻ: " + Sum);

// In giá trị các phần tử trong mảng là số nguyên tố
console.log("Các phần tử là số nguyên tố:");
for (let i = 0; i < arrayInt.length; i++) {
  let checkPrime = true;
  if (arrayInt[i] <= 1) {
    checkPrime = false;
  } else {
    for (let j = 2; j <= Math.sqrt(arrayInt[i]); j++) {
      if (arrayInt[i] % j === 0) {
        checkPrime = false;
        break;
      }
    }
  }
  if (checkPrime) {
    console.log(arrayInt[i]);
  }
}

// In các phần tử có giá trị là max hoặc min
console.log("Các phần tử có giá trị là max hoặc min:");
let max = Math.max(...arrayInt);
let min = Math.min(...arrayInt);
for (let i = 0; i < arrayInt.length; i++) {
  if (arrayInt[i] === max || arrayInt[i] === min) {
    console.log(arrayInt[i]);
  }
}


// g. Sắp xếp mảng giảm dần - Bubble soft, Selection soft, Insertion soft
for (let i = 0; i < arrInt.length - 1; i++) {
  // max i = arrInt.length -2
  // So sánh phần tử arrInt[i] với các phần tử sau arrInt[j]
  for (let j = i + 1; j < arrInt.length; j++) {
      //max j = arrInt.length -1
      // So sánh arrInt[i] với arrInt[j]
      if (arrInt[i] < arrInt[j]) {
          // Đổi chỗ 2 phần tử
          let temp = arrInt[i];
          arrInt[i] = arrInt[j];
          arrInt[j] = temp;
      }
  }
}
// In ra mảng sau khi sắp xếp
console.log("Mảng sau khi sắp xếp là --->", arrInt);
// h. Nhập vào 1 số, thống kê có bao nhiêu phần tử = số đó
// - Nhập vào 1 số
let numberFind = Number(prompt("Nhập vào 1 số cần tìm"));
// - Thống kê các phần tử
let cnt = 0;
for (let index = 0; index < arrInt.length; index++) {
  if (arrInt[index] == numberFind) {
      cnt++;
  }
}
console.log("Số phần tử có giá trị bằng " + numberFind + " là " + cnt);