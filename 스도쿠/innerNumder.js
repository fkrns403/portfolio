
let frontList1 = [
    [0,4,0],
    [0,0,1],
    [6,0,3],
];
let frontList2 = [
    [0,0,0],
    [0,3,4],
    [0,0,0]
];
let frontList3 = [
    [0,0,0],
    [6,2,0],
    [0,7,0]
];
let frontList4 = [
    [0,0,0],
    [0,0,0],
    [0,0,0]
];
let frontList5 = [
    [4,8,3],
    [0,5,0],
    [0,0,9]
];
let frontList6 = [
    [5,0,7],
    [0,6,0],
    [0,4,0]
];

let frontList7 = [
    [0,0,5],
    [8,0,0],
    [0,0,0]
];
let frontList8 = [
    [0,0,0],
    [5,4,7],
    [0,2,1]
];
let frontList9 = [
    [0,0,1],
    [3,9,6],
    [0,0,0]
];



//----------------답지
let backList1 = [
    [2,4,8],
    [7,5,1],
    [6,9,3],
];
let backList2 = [
    [6,7,5],
    [9,3,4],
    [2,1,8]
];
let backList3 = [
    [1,3,9],
    [6,2,8],
    [4,7,5]
];
let backList4 = [
    [9,2,6],
    [1,8,4],
    [5,3,7]
];
let backList5 = [
    [4,8,3],
    [7,5,2],
    [1,6,9]
];
let backList6 = [
    [5,1,7],
    [9,6,3],
    [8,4,2]
];
let backList7 = [
    [4,7,5],
    [8,1,2],
    [3,6,9]
];
let backList8 = [
    [3,9,6],
    [5,4,7],
    [8,2,1]
];
let backList9 = [
    [2,8,1],
    [3,9,6],
    [7,5,4]
];

function inte() {
    
    let $table = document.querySelector("#frontList1")
    for (let i = 0; i < frontList1.length; i++) {
        for (let j = 0; j < frontList1[i].length; j++) {
            if (frontList1[i][j] == 0) {
                $table.children[0].children[i].children[j].innerText = frontList1[i][j];
                $table.children[0].children[i].children[j].addEventListener("click", clickEvent);
                
            } else {
                $table.children[0].children[i].children[j].innerText = frontList1[i][j];
            }
        }
    }
    $table = document.querySelector("#frontList2")
    for (let i = 0; i < frontList2.length; i++) {
        for (let j = 0; j < frontList2[i].length; j++) {
            if (frontList2[i][j] == 0) {
                $table.children[0].children[i].children[j].innerText = frontList2[i][j];
                $table.children[0].children[i].children[j].addEventListener("click", clickEvent);
                
            } else {
                $table.children[0].children[i].children[j].innerText = frontList2[i][j];
            }
        }
    }
    $table = document.querySelector("#frontList3")
    for (let i = 0; i < frontList3.length; i++) {
        for (let j = 0; j < frontList3[i].length; j++) {
            if (frontList3[i][j] == 0) {
                $table.children[0].children[i].children[j].innerText = frontList3[i][j];
                $table.children[0].children[i].children[j].addEventListener("click", clickEvent);
                
            } else {
                $table.children[0].children[i].children[j].innerText = frontList3[i][j];
            }
        }
    }
    $table = document.querySelector("#frontList4")
    for (let i = 0; i < frontList4.length; i++) {
        for (let j = 0; j < frontList4[i].length; j++) {
            if (frontList4[i][j] == 0) {
                $table.children[0].children[i].children[j].innerText = frontList4[i][j];
                $table.children[0].children[i].children[j].addEventListener("click", clickEvent);
                
            } else {
                $table.children[0].children[i].children[j].innerText = frontList4[i][j];
            }
        }
    }
    $table = document.querySelector("#frontList5")
    for (let i = 0; i < frontList5.length; i++) {
        for (let j = 0; j < frontList5[i].length; j++) {
            if (frontList5[i][j] == 0) {
                $table.children[0].children[i].children[j].innerText = frontList5[i][j];
                $table.children[0].children[i].children[j].addEventListener("click", clickEvent);
                
            } else {
                $table.children[0].children[i].children[j].innerText = frontList5[i][j];
            }
        }
    }
    $table = document.querySelector("#frontList6")
    for (let i = 0; i < frontList6.length; i++) {
        for (let j = 0; j < frontList6[i].length; j++) {
            if (frontList6[i][j] == 0) {
                $table.children[0].children[i].children[j].innerText = frontList6[i][j];
                $table.children[0].children[i].children[j].addEventListener("click", clickEvent);
                
            } else {
                $table.children[0].children[i].children[j].innerText = frontList6[i][j];
            }
        }
    }
    $table = document.querySelector("#frontList7")
    for (let i = 0; i < frontList7.length; i++) {
        for (let j = 0; j < frontList7[i].length; j++) {
            if (frontList7[i][j] == 0) {
                $table.children[0].children[i].children[j].innerText = frontList7[i][j];
                $table.children[0].children[i].children[j].addEventListener("click", clickEvent);
                
            } else {
                $table.children[0].children[i].children[j].innerText = frontList7[i][j];
            }
        }
    }
    $table = document.querySelector("#frontList8")
    for (let i = 0; i < frontList8.length; i++) {
        for (let j = 0; j < frontList8[i].length; j++) {
            if (frontList8[i][j] == 0) {
                $table.children[0].children[i].children[j].innerText = frontList8[i][j];
                $table.children[0].children[i].children[j].addEventListener("click", clickEvent);
                
            } else {
                $table.children[0].children[i].children[j].innerText = frontList8[i][j];
            }
        }
    }
    $table = document.querySelector("#frontList9")
    for (let i = 0; i < frontList9.length; i++) {
        for (let j = 0; j < frontList9[i].length; j++) {
            if (frontList9[i][j] == 0) {
                $table.children[0].children[i].children[j].innerText = frontList9[i][j];
                $table.children[0].children[i].children[j].addEventListener("click", clickEvent);
                
            } else {
                $table.children[0].children[i].children[j].innerText = frontList9[i][j];
            }
        }
    }
    let $checkAll = document.querySelector("#checkAll")
    $checkAll.addEventListener("click",CheckAll);
    let $hints = document.querySelector("#hints")
    $hints.addEventListener("click",Hints);


}


function clickEvent() {
    let num = this.innerText;
    let $mytable = document.querySelector("#frontList1");
    for (let i = 0; i < frontList1.length; i++) {
        for (let j = 0; j < frontList1.length; j++) {
            if (this == $mytable.children[0].children[i].children[j]) {
                num ++;
                if (num > 9) {
                    num = 0;
                }
                this.innerText= num;
            }
        }
        
    }
    num = this.innerText;
    $mytable = document.querySelector("#frontList2");
    for (let i = 0; i < frontList2.length; i++) {
        for (let j = 0; j < frontList2.length; j++) {
            if (this == $mytable.children[0].children[i].children[j]) {
                num ++;
                if (num > 9) {
                    num = 0;
                }
                this.innerText= num;
            }
        }
        
    }
    $mytable = document.querySelector("#frontList3");
    for (let i = 0; i < frontList3.length; i++) {
        for (let j = 0; j < frontList3.length; j++) {
            if (this == $mytable.children[0].children[i].children[j]) {
                num ++;
                if (num > 9) {
                    num = 0;
                }
                this.innerText= num;
            }
        }
        
    }
    $mytable = document.querySelector("#frontList4");
    for (let i = 0; i < frontList3.length; i++) {
        for (let j = 0; j < frontList3.length; j++) {
            if (this == $mytable.children[0].children[i].children[j]) {
                num ++;
                if (num > 9) {
                    num = 0;
                }
                this.innerText= num;
            }
        }
        
    }
    $mytable = document.querySelector("#frontList5");
    for (let i = 0; i < frontList3.length; i++) {
        for (let j = 0; j < frontList3.length; j++) {
            if (this == $mytable.children[0].children[i].children[j]) {
                num ++;
                if (num > 9) {
                    num = 0;
                }
                this.innerText= num;
            }
        }
        
    }
    $mytable = document.querySelector("#frontList6");
    for (let i = 0; i < frontList3.length; i++) {
        for (let j = 0; j < frontList3.length; j++) {
            if (this == $mytable.children[0].children[i].children[j]) {
                num ++;
                if (num > 9) {
                    num = 0;
                }
                this.innerText= num;
            }
        }
        
    }
    $mytable = document.querySelector("#frontList7");
    for (let i = 0; i < frontList3.length; i++) {
        for (let j = 0; j < frontList3.length; j++) {
            if (this == $mytable.children[0].children[i].children[j]) {
                num ++;
                if (num > 9) {
                    num = 0;
                }
                this.innerText= num;
            }
        }
        
    }
    $mytable = document.querySelector("#frontList8");
    for (let i = 0; i < frontList3.length; i++) {
        for (let j = 0; j < frontList3.length; j++) {
            if (this == $mytable.children[0].children[i].children[j]) {
                num ++;
                if (num > 9) {
                    num = 0;
                }
                this.innerText= num;
            }
        }
        
    }
    $mytable = document.querySelector("#frontList9");
    for (let i = 0; i < frontList3.length; i++) {
        for (let j = 0; j < frontList3.length; j++) {
            if (this == $mytable.children[0].children[i].children[j]) {
                num ++;
                if (num > 9) {
                    num = 0;
                }
                this.innerText= num;
            }
        }
        
    }
    
}
function CheckAll() {
    let check = false;
    let $mytable = document.querySelector("#frontList1");
    for (let i = 0; i < frontList1.length; i++) {
        for (let j = 0; j < frontList1.length; j++) {
            if (backList1[i][j] != $mytable.children[0].children[i].children[j].innerText) {
                check = true;
            }
        }
        
    }
    num = this.innerText;
    $mytable = document.querySelector("#frontList2");
    for (let i = 0; i < frontList2.length; i++) {
        for (let j = 0; j < frontList2.length; j++) {
            if (backList2[i][j] != $mytable.children[0].children[i].children[j].innerText) {
                check = true;
            }
        }
        
    }
    $mytable = document.querySelector("#frontList3");
    for (let i = 0; i < frontList3.length; i++) {
        for (let j = 0; j < frontList3.length; j++) {
            if (backList3[i][j] != $mytable.children[0].children[i].children[j].innerText) {
                check = true;
            }
        }
        
    }
    $mytable = document.querySelector("#frontList4");
    for (let i = 0; i < frontList4.length; i++) {
        for (let j = 0; j < frontList3.length; j++) {
            if (backList4[i][j] != $mytable.children[0].children[i].children[j].innerText) {
                check = true;
            }
        }
        
    }
    $mytable = document.querySelector("#frontList5");
    for (let i = 0; i < frontList3.length; i++) {
        for (let j = 0; j < frontList3.length; j++) {
            if (backList5[i][j] != $mytable.children[0].children[i].children[j].innerText) {
                check = true;
            }
        }
        
    }
    $mytable = document.querySelector("#frontList6");
    for (let i = 0; i < frontList3.length; i++) {
        for (let j = 0; j < frontList3.length; j++) {
            if (backList6[i][j] != $mytable.children[0].children[i].children[j].innerText) {
                check = true;
            }
        }
        
    }
    $mytable = document.querySelector("#frontList7");
    for (let i = 0; i < frontList3.length; i++) {
        for (let j = 0; j < frontList3.length; j++) {
            if (backList7[i][j] != $mytable.children[0].children[i].children[j].innerText) {
                check = true;
            }
        }
        
    }
    $mytable = document.querySelector("#frontList8");
    for (let i = 0; i < frontList3.length; i++) {
        for (let j = 0; j < frontList3.length; j++) {
            if (backList8[i][j] != $mytable.children[0].children[i].children[j].innerText) {
                check = true;
            }
        }
        
    }
    $mytable = document.querySelector("#frontList9");
    for (let i = 0; i < frontList3.length; i++) {
        for (let j = 0; j < frontList3.length; j++) {
            if (backList9[i][j] != $mytable.children[0].children[i].children[j].innerText) {
                check = true;
            }
        }
        
    }
    if (check) {
        alert("오답 힌트를 확인해주세요");
    } else {
        alert("정답 수고하셨습니다");
    }
}

function Hints() {

    // console.log(backList1[0][0]);

    let check = false;
    let $mytable = document.querySelector("#frontList1");
    for (let i = 0; i < frontList1.length; i++) {
        for (let j = 0; j < frontList1.length; j++) {
            console.log($mytable.children[0].children[i].children[j].innerHTML);
            if (backList1[i][j] != $mytable.children[0].children[i].children[j].innerHTML) {
                $mytable.children[0].children[i].children[j].style.backgroundColor= "red";
            } else {
                $mytable.children[0].children[i].children[j].style.backgroundColor= "";
            }
        }
        
    }
    num = this.innerText;
    $mytable = document.querySelector("#frontList2");
    for (let i = 0; i < frontList2.length; i++) {
        for (let j = 0; j < frontList2.length; j++) {
            if (backList2[i][j] != $mytable.children[0].children[i].children[j].innerHTML) {
                $mytable.children[0].children[i].children[j].style.backgroundColor= "red";
            } else {
                $mytable.children[0].children[i].children[j].style.backgroundColor= "";
            }
        }
        
    }
    $mytable = document.querySelector("#frontList3");
    for (let i = 0; i < frontList3.length; i++) {
        for (let j = 0; j < frontList3.length; j++) {
            if (backList3[i][j] != $mytable.children[0].children[i].children[j].innerHTML) {
                $mytable.children[0].children[i].children[j].style.backgroundColor= "red";
            } else {
                $mytable.children[0].children[i].children[j].style.backgroundColor= "";
            }
        }
        
    }
    $mytable = document.querySelector("#frontList4");
    for (let i = 0; i < frontList3.length; i++) {
        for (let j = 0; j < frontList3.length; j++) {
            if (backList4[i][j] != $mytable.children[0].children[i].children[j].innerHTML) {
                $mytable.children[0].children[i].children[j].style.backgroundColor= "red";
            } else {
                $mytable.children[0].children[i].children[j].style.backgroundColor= "";
            }
        }
        
    }
    $mytable = document.querySelector("#frontList5");
    for (let i = 0; i < frontList3.length; i++) {
        for (let j = 0; j < frontList3.length; j++) {
            if (backList5[i][j] != $mytable.children[0].children[i].children[j].innerHTML) {
                $mytable.children[0].children[i].children[j].style.backgroundColor= "red";
            } else {
                $mytable.children[0].children[i].children[j].style.backgroundColor= "";
            }
        }
        
    }
    $mytable = document.querySelector("#frontList6");
    for (let i = 0; i < frontList3.length; i++) {
        for (let j = 0; j < frontList3.length; j++) {
            if (backList6[i][j] != $mytable.children[0].children[i].children[j].innerHTML) {
                $mytable.children[0].children[i].children[j].style.backgroundColor= "red";
            } else {
                $mytable.children[0].children[i].children[j].style.backgroundColor= "";
            }
        }
        
    }
    $mytable = document.querySelector("#frontList7");
    for (let i = 0; i < frontList3.length; i++) {
        for (let j = 0; j < frontList3.length; j++) {
            if (backList7[i][j] != $mytable.children[0].children[i].children[j].innerHTML) {
                $mytable.children[0].children[i].children[j].style.backgroundColor= "red";
            } else {
                $mytable.children[0].children[i].children[j].style.backgroundColor= "";
            }
        }
        
    }
    $mytable = document.querySelector("#frontList8");
    for (let i = 0; i < frontList3.length; i++) {
        for (let j = 0; j < frontList3.length; j++) {
            if (backList8[i][j] != $mytable.children[0].children[i].children[j].innerHTML) {
                $mytable.children[0].children[i].children[j].style.backgroundColor= "red";
            } else {
                $mytable.children[0].children[i].children[j].style.backgroundColor= "";
            }
        }
        
    }
    $mytable = document.querySelector("#frontList9");
    for (let i = 0; i < frontList3.length; i++) {
        for (let j = 0; j < frontList3.length; j++) {
            if (backList9[i][j] != $mytable.children[0].children[i].children[j].innerHTML) {
                $mytable.children[0].children[i].children[j].style.backgroundColor= "red";
            } else {
                $mytable.children[0].children[i].children[j].style.backgroundColor= "";
            }
        }
        
    }

}




inte();

