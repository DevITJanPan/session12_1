 // Khai báo mảng 2 chiều gồm 0 phần tử
 let arrInt = [];
 // Nhập số dòng và số cột của mảng 2 chiều
 let row = Number(prompt("Nhập vào số dòng của mảng 2 chiều"));
 let col = Number(prompt("Nhập vào số cột của mảng 2 chiều"));
 // Nhập giá trị các phần tử của mảng 2 chiều
 for (let i = 0; i < row; i++) {
     let arrRow = [];
     for (let j = 0; j < col; j++) {
         // Nhập vào 1 dòng của mảng 2 chiều
         let number = Number(prompt("Nhập vào một số:"));
         arrRow.push(number);
     }
     // Thêm arrRow vào arrInt
     arrInt.push(arrRow);
 }
 console.log("Mảng 2 chiều sau khi nhập--->", arrInt);
 console.log("Các phần tử nằm trên đường biên");
 for (let i = 0; i < row; i++) {
     for (let j = 0; j < col; j++) {
         if (i == 0 || j == 0 || i == row - 1 || j == col - 1) {
             console.log(arrInt[i][j]);
         }
     }
 }
 if (row == col) {
     console.log("Các phần tử nằm trên đường chéo chính");
     for (let i = 0; i < row; i++) {
         for (let j = 0; j < col; j++) {
             if (i == j) {
                 console.log(arrInt[i][j]);
             }
         }
     }
     console.log("Các phần tử nằm trên đường chéo phụ");
     for (let i = 0; i < row; i++) {
         for (let j = 0; j < col; j++) {
             if (i + j == row - 1) {
                 console.log(arrInt[i][j]);
             }
         }
     }
 } else {
     console.log("Không có đường chéo chính và chéo phụ");
 }
 // Sắp xếp mảng tăng dần theo dòng
 for (let i = 0; i < row; i++) {
     //Đang xét dòng i --> arrInt[i]: dòng i
     for (let j = 0; j < col - 1; j++) {
         for (let k = j + 1; k < col; k++) {
             if (arrInt[i][j] > arrInt[i][k]) {
                 // Đổi chỗ 2 phần tử
                 let temp = arrInt[i][j];
                 arrInt[i][j] = arrInt[i][k];
                 arrInt[i][k] = temp;
             }
         }
     }
 }
 console.log("Mảng sau khi sắp xếp là --->", arrInt);