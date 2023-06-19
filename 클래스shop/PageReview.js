import { ControllerMain } from "./controllerMain.js";
import { JsonBoard } from "./Board.js";


export class PageReview {
    전체게시글수 = 0;
    한페이지에보여줄게시글수 = 0;
    현재페이지번호 = 0;
    게시글시작번호 = 0;
    게시글마침번호 = 0;

    페이지번호개수 = 0;
    페이지시작번호 = 0;
    페이지마침번호 = 0;

    execute(data) {
        this.전체게시글수 = JsonBoard.getInstance().getBordCount();
        this.한페이지에보여줄게시글수 = 27;
        this.현재페이지번호 = 1;
        this.게시글시작번호 = 0;
        this.게시글마침번호 = 0;

        // 현재 페이지번호는 하단에 번호를 클릭할 때마다 변경된다.
        if(ControllerMain.getInstance().padding != null) {
            this.현재페이지번호 = Number(ControllerMain.getInstance().padding);
            console.log('!!!')
            console.log(this.현재페이지번호)
        }

        // 게시글 시작번호 계산하기
        this.게시글시작번호 = (this.현재페이지번호 - 1) * this.한페이지에보여줄게시글수;
        // 게시글 마침번호 계산하기
        this.게시글마침번호 = this.게시글시작번호 + this.한페이지에보여줄게시글수;
        if(this.게시글마침번호 > this.전체게시글수) {
            this.게시글마침번호 = this.전체게시글수;
        }
        console.log(this.현재페이지번호)

        let $content =
        document.querySelector("#content");

        let tag =
            `
        <style>
        #container {
			width: 800px;
			height: 1020px;
			border: 2px solid lightgray;
			margin:0 auto;
		} 
		table {
			margin: 0 auto;
			width: 500px;
		}
		a {
			text-decoration: none;
			color: black;
		}
		a:hover {
			color: #FFD700;
		}
		table tr td {
			border-collapse: collapse;
			border: 1px solid lightgray;
		}
        #footer {
            width: 800px;
            margin: 0 auto;
        }
         #footT1 {
			width: 100%;
			height: 80px;
		}
		.T1Td1 {
			padding-left: 20px;
		}
		.T1S1 {
			font-size: 20px;
		}
		.T1S2 {
			font-weight: bold;
			font-size: 20px;			
		}
		.T1Td2 {
			text-align: right;
		}
		#button1 {
			background-color: white;
			border: 1px solid lightgray;
			border-radius: 120px;
			width: 150px;
			height: 50px;
		}
		#button2 {
			background-color: #FFD700;
			border-style: none;
			border-radius: 120px;
			width: 150px;
			height: 50px;
		}
        </style>
        `;

        tag +=
            `
            <div id="container">
        <table id="lastT1">
        <tr>
        <td colspan="8"><h1>게시판 목록</h1></td>
    </tr>
    <tr>
        <td colspan="8" align="right">
            <button id="button-boardWritePage">리뷰작성</button>
        </td>
    </tr>
    <tr>
        <td>번호</td>
        <td>제목</td>
        <td>작성자</td>
        <td>작성일</td>
        <td>조회수</td>
        <td>수정</td>
        <td>삭제</td>
    </tr>
            </table>
            <hr>
            
	`

    let boardList = JsonBoard.getInstance().getBoardPagingList(this.게시글시작번호, this.게시글마침번호);
        for(let i=0; i<boardList.length; i++) {
            tag += 
            `<table id="lastT2">
                <tr>
                    <td class="boardNo">${boardList[i].boardNo}</td>
                    <td align="left">
                    `;

                if(boardList[i].reStep > 1) {
                    for(let j=1; j<boardList[i].reStep; j++) {
                        tag += `→`;
                    }
                }
                //페이지
            tag += 
            `
                        <a class="atag-boardInfoPage" href="#">${boardList[i].title}</a>
                    </td>
                    <td>${boardList[i].writer}</td>
                    <td>${boardList[i].regDate}</td>
                    <td>${boardList[i].readCount}</td>
                    `
            
                if (boardList[i]["writer"] == data["id"]) {
                   tag+= `<td><button class="button-boardModifyPro">수정</button></td>`
                } else {
                    tag+= `<td></td>`
                }
                
            
          
                if (boardList[i]["writer"] == data["id"]) {
                   tag+= `<td><button class="button-boardDeletePro">삭제</button></td>`
                } else {
                    tag+= `<td></td>`
                }
                
            
            tag+=`
                </tr>
            `;
        }

        tag += `</table>
        </div>`;
        //-----------------------------------------------------------------------------------'
        this.페이지번호개수 = 5;
        this.페이지시작번호 = 0;
        this.페이지마침번호 = 0;
        this.전체페이지개수 = parseInt(this.전체게시글수 / this.한페이지에보여줄게시글수);
        if(this.전체게시글수 % this.한페이지에보여줄게시글수 > 0) {
            this.전체페이지개수 += 1;
        }

        if(this.현재페이지번호 % this.페이지번호개수 == 0) {
            this.페이지시작번호 = (parseInt(this.현재페이지번호 / this.페이지번호개수) - 1) * 5 + 1;
        } else {
            this.페이지시작번호 = parseInt(this.현재페이지번호 / this.페이지번호개수) * 5 + 1;
        }

        this.페이지마침번호 = this.페이지시작번호 + this.페이지번호개수;
        if(this.페이지마침번호 > this.전체페이지개수) {
            this.페이지마침번호 = this.전체페이지개수 + 1;
        }

        tag +=
        `
            <table id="content-boardPaging">
                <tr>
        `;
        if(this.페이지시작번호 > 1) {
        tag += 
        `
                    <td>
                        <a id="atag-before" href="#">[이전]</a>
                    </td>
        `;   
        }
        for(let i=this.페이지시작번호; i< this.페이지마침번호; i++) {
        tag += 
        `
                    <td>
                        <a class="atag-boardListPagingPage" href="#">${i}</a>
                    </td>
        `;
        }

        if(this.페이지마침번호 < this.전체페이지개수) {
        tag +=
        `
                    <td>
                        <a id="atag-after" href="#">[이후]</a>
                    </td>
                </tr>
            </table>
        `;
        }

        $content.innerHTML = tag;

        

        this.$atagBoardListPagingPage = document.querySelectorAll(".atag-boardListPagingPage");
        for(let i=0; i<this.$atagBoardListPagingPage.length; i++) {
            this.$atagBoardListPagingPage[i].addEventListener("click", this.atagBoardListPagingPageClick);
        }

        this.$atagBefore = document.querySelector("#atag-before");
        if(this.$atagBefore != null) {
            this.$atagBefore.addEventListener("click", this.atagBeforeClick);
        }

        this.$atageAfter = document.querySelector("#atag-after");
        if(this.$atageAfter != null) {
            this.$atageAfter.addEventListener("click", this.atageAfterClick);
        }
        //======================================================================================

        

        this.$boardNo = document.querySelectorAll(".boardNo");

        this.$atagBoardInfoPage = document.querySelectorAll(".atag-boardInfoPage");
        for(let i=0; i<this.$atagBoardInfoPage.length; i++) {
            this.$atagBoardInfoPage[i].addEventListener("click", this.boardInfoPageClick);
        }
        
         this.$buttonBoardModifyPro = document.querySelectorAll(".button-boardModifyPro");
         for(let i=0; i<this.$buttonBoardModifyPro.length; i++) {
             this.$buttonBoardModifyPro[i].addEventListener("click", this.boardModifyPageClick);
        }
        //수정 기능
        this.$buttonBoardDeletePro = document.querySelectorAll(".button-boardDeletePro");
        for(let i=0; i<this.$buttonBoardDeletePro.length; i++) {
            this.$buttonBoardDeletePro[i].addEventListener("click", this.boardDeleteProClick);
        }
        //삭제
        this.$buttonBoardWritePage = document.querySelector("#button-boardWritePage");
        this.$buttonBoardWritePage.addEventListener("click", this.boardWritePageClick);

    }

    boardInfoPageClick = (event) =>  {
        let index = 0;
        for(let i=0; i<this.$atagBoardInfoPage.length; i++) {
            if(event.target == this.$atagBoardInfoPage[i]) {
                index = i;
                break;
            }
        }
        alert(this.$boardNo[index].innerText);
        console.log(this.$boardNo[index].innerText)
        ControllerMain.getInstance().changePage("page-ReviewInfo", this.$boardNo[index].innerText);
    }

     boardModifyPageClick = (event) => {
         let index = 0;
         for(let i=0; i<this.$buttonBoardModifyPro.length; i++) {
             if(event.target == this.$buttonBoardModifyPro[i]) {
                 index = i;
                 break;
             }
         }
        
         ControllerMain.getInstance().changePage("page-ReviewModify", this.$boardNo[index].innerText);
     }

    boardDeleteProClick = (event) => {
        
        let index = 0;
        for(let i=0; i<this.$buttonBoardDeletePro.length; i++) {
            if(event.target == this.$buttonBoardDeletePro[i]) {
                index = i;
                break;
            }
        }
        

        JsonBoard.getInstance().deleteBoard(this.$boardNo[index].innerText);
        ControllerMain.getInstance().changePage("page-Review",ControllerMain.getInstance().member);
    }

    boardWritePageClick = (event) => {
        ControllerMain.getInstance().changePage("page-ReviewWrite", ControllerMain.getInstance().member);
    }

    

    //==================================================================================

    atagBoardListPagingPageClick = (event) => {
        let index = 0;
        for(let i=0; i<this.$atagBoardListPagingPage.length; i++) {
            if(event.target == this.$atagBoardListPagingPage[i]) {
                index = i;
                break;
            }
        }
        
        ControllerMain.getInstance().padding = this.$atagBoardListPagingPage[index].innerText;
        let a = ControllerMain.getInstance().padding
        console.log(a)
        console.log("!!!!!")
        ControllerMain.getInstance().changePage("page-Review",ControllerMain.getInstance().member);
    }

    atagBeforeClick = (event) => {
        ControllerMain.getInstance().padding = this.페이지시작번호 - 1;
        ControllerMain.getInstance().changePage("page-Review", ControllerMain.getInstance().member);
    }

    atageAfterClick = (event) => {
        ControllerMain.getInstance().padding = this.페이지마침번호;
        ControllerMain.getInstance().changePage("page-Review", ControllerMain.getInstance().member);
    }

}