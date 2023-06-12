let arrayInt = [];
let row = Number(prompt('Nhap vao so dong cua mang'));
let colum = Number(prompt('Nhap vao so cot cua mang'));
for (i = 0; i < row; i++) {
  let arrRow = [];
  for (j = 0; j < colum; j++) {
    let number = Number(prompt('nhap vao mot so:'));
    arrRow = number;
  }
 arrayInt.push(arrRow);
}
console.log('Mang 2 chieu sau khi nhap', arrayInt);
console.log('In cac gia tri tren duong bien');
for (i = 0; i < row; i++) {
  for (j = 0; j < colum; j++) {
    if (i == 0 || j == 0 || i == row - 1 || j == colum - 1) {
      console.log(arrayInt[i][j]);
    }
  }
}
if ((row = colum)) {
  console.log('cac phan tu nam tren duong cheo chinh');
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < colum; j++) {
      if ((i = j)) {
        console.log(arrayInt[i][j]);
      }
    }
  }
  console.log('Cac phan tu nam tren duong cheo phu');
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < colum; j++) {
      if (i + j == row - 1) {
        console.log(arrayInt[i][j]);
      }
    }
  }
} else {
  console.log('khong co duong cheo chinh va cheo phu');
}
for(let i=0;i<row;i++){
    for(let j=0; j<colum-1;j++){
        for(let k=j+1;k<colum;k++){
            if(arrayInt[i][j]>arrayInt[i][k]);
            let temp=arrayInt[i][k];
            arrayInt[i][k]=temp;
        }
    }
}
console.log("Mang sau khi sap xep la", arrayInt);