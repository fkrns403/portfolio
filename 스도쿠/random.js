
let a = [
    [frontList1,frontList2,frontList3],
    [frontList4,frontList5,frontList6],
    [frontList6,frontList7,frontList8]
];
let tmep = [
    [],[],[],
    [],[],[],
    [],[],[]
];
let m = 0;
let T = 0;
for (let i = 0; i < 9; i++) {
    for (let n1 = 0; n1 < 3; n1++) {
        tmep[i].push(a[T][m][n1])
    }
    for (let n2 = 0; n2 < 3; n2++) {
        tmep[i].push(a[T][m][n1])
        
    }
    for (let n3 = 0; n3 < 3; n3++) {
        tmep[i].push(a[T][m][n1])
        
    }
    if (m == 2) {
        m = 0;
    } else {
        m ++;
    }
    if (i == 2) {
        T ++;
    }
    document.write(tmep[i] + "<br>");
}





let randommiX = Math.floor(Math.random() * 18)+1
let random = Math.floor(Math.random() * 9)+1