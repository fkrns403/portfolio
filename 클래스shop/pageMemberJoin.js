
import { ControllerMain } from "./controllerMain.js";

export class PageJoin {

    execute(data) {
        let $content =
        document.querySelector("#content");

        let tag =
            `
        <style>
        
		
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


        #logT2 td {
			height: 70px;
			font-size: 30px;
		}
		#input-memberId,
		#input-memberPw,
		#btn-memberjoinPro, 
		#input-membername ,
		#input-memberphone {
			border: 1px solid lightgray;
			width: 100%;
			height: 90%;
			font-size: 30px;
		}
		.logT2Td1 {
			text-align: center;
		}
		.logT2Inp2 {
			width: 100px;
            height: 40px;
            font-size: 20px;
            border: 1px solid #FFD700;
            background-color: #FFD700;
            border-radius: 5px;
		}
		#logT3 {
			margin-top: 50px;
			text-align: center;
			font-size: 20px;
		}
		#logT3 td {
			height: 40px;
		}	
        </style>
        `;

        tag +=
            `
            <table id="logT2">
                <tr>
                    <td>이름</td>
                </tr>
                <tr>
                    <td><input id="input-membername" type="text" name="id"></td>
                </tr>
                <tr>
                    <td>아이디</td>
                </tr>
                <tr>
                    <td><input id="input-memberId" type="text" name="id"></td>
                </tr>
                <tr>
                    <td>비밀번호</td>
                </tr>
                <tr>
                    <td><input id="input-memberPw" type="password" name="pw"></td>
                </tr>
                <tr>
                    <td>핸드폰번호</td>
                </tr>
                <tr>
                    <td><input id="input-memberphone" type="text" name="pw"></td>
                </tr>
                <tr>
                    <td class="logT2Td1"><input id="btn-memberjoinPro" type="submit" value="회원가입"></td>
                </tr>
            </table>
        
            <table id="logT3">
            <tr>
                <td><a id="btn-login">로그인</a></td>
                <td>│</td>
                <td><a id="btn-Qid">아이디 찾기</a></td>
                <td>│</td>
                <td><a id="btn-Qpw">비밀번호 찾기</a></td>
            </tr>
        </table>
        `;

        $content.innerHTML = tag;

        
        document.querySelector("#btn-login").addEventListener("click", this.memberlogineClick);
        document.querySelector("#btn-Qid").addEventListener("click", this.memberidClick);
        document.querySelector("#btn-Qpw").addEventListener("click", this.memberpwClick);

       ///가입
       let $btn= document.querySelector('#btn-memberjoinPro');
        console.log($btn);
        $btn.addEventListener('click', this.joinPro);
        


    }
    //가입
    joinPro = (event) => {
        let id= document.querySelector('#input-membername').value;
        let pw= document.querySelector('#input-memberPw').value;
        let name= document.querySelector('#input-membername').value;
        let phone= document.querySelector('#input-memberphone').value;
        let data = [];
        data.push(id);
        data.push(pw);
        data.push(name);
        data.push(phone);
        ControllerMain.getInstance().changePage("page-joinPro" ,data);
    }

   
  
    //이동
    memberlogineClick = (event) => {
        ControllerMain.getInstance().changePage("page-index", null);
    }
    memberidClick = (event) => {
        ControllerMain.getInstance().changePage("page-inQId", null);
    }
    memberpwClick = (event) => {
        ControllerMain.getInstance().changePage("page-inQPw", null);
    }
}