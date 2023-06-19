import { ControllerMain } from "./controllerMain.js";
import { JsonBoard } from "./Board.js";

export class PageReviewWrite {

    execute(data) {
        let $content =
        document.querySelector("#content");

        let log = ControllerMain.getInstance().log;
        let maxBoardNo = JsonBoard.getInstance().getMaxBoardNo() + 1;

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
                <td colspan="4" id="title"><h1>새 게시글 작성</h1></td>
            </tr>
            <tr>
                <td>번호</td>
                <td>${maxBoardNo}</td>
                <td>작성자</td>
                <td>${log}</td>
            </tr>
            <tr>
                <td>제목</td>
                <td colspan="3"><input type="text" id="input-boardTitle"></td>
            </tr>
            <tr>
                <td>내용</td>
                <td colspan="3"><textarea rows="10" cols="50" id="textarea-boardContent"></textarea></td>
            </tr>
            <tr>
                <td colspan="4" id="boardPro">
                    <button id="button-boardWritePro">작성하기</button>
                </td>
            </tr>
            </table>
            <hr>
	</div>`

    $content.innerHTML = tag;

        let $buttonBoardWritePro = document.querySelector("#button-boardWritePro");
        $buttonBoardWritePro.addEventListener("click", this.boardWritePro);
    }

    boardWritePro = (event) => {

        let inputBoardTitle = document.querySelector("#input-boardTitle").value;
        let textareaBoardContent = document.querySelector("#textarea-boardContent").value;
        console.log(JsonBoard.getInstance());
       JsonBoard.getInstance().boardWritePro(inputBoardTitle, textareaBoardContent);

      ControllerMain.getInstance().changePage("page-Review",  ControllerMain.getInstance().member);
    }
    
}