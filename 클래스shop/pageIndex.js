import { JsonMemder } from "./member.js";
import { ControllerMain } from "./controllerMain.js";

export class PageIndex {

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
		#button-memberLoginPro {
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
                    <td class="logT2Td1"><input id="button-memberLoginPro" type="submit" value="로그인"></td>
                </tr>
            </table>
        
            <table id="logT3">
            <tr>
                <td><a id="btn-memberJoinPage">회원가입</a></td>
                <td>│</td>
                <td><a id="btn-Qid">아이디 찾기</a></td>
                <td>│</td>
                <td><a id="btn-Qpw">비밀번호 찾기</a></td>
            </tr>
        </table>
        `;

        $content.innerHTML = tag;

        
        document.querySelector("#btn-memberJoinPage").addEventListener("click", this.memberJoinPageClick);
        document.querySelector("#btn-Qid").addEventListener("click", this.memberidClick);
        document.querySelector("#btn-Qpw").addEventListener("click", this.memberpwClick);

        //로그인버튼
        this.$inputMemberId = document.querySelector("#input-memberId");
        this.$inputMemberPw = document.querySelector("#input-memberPw");
       
        this.$buttonMemberLoginPro = document.querySelector("#button-memberLoginPro");
        this.$buttonMemberLoginPro.addEventListener("click", this.memberLoginPro);
        


    }

    memberJoinPageClick = (event) => {
        ControllerMain.getInstance().changePage("page-Join", null);
    }
    memberidClick = (event) => {
        ControllerMain.getInstance().changePage("page-inQId", null);
    }
    memberpwClick = (event) => {
        ControllerMain.getInstance().changePage("page-inQPw", null);
    }
    //로그인
    memberLoginPro = (event) => {
        if(this.$inputMemberId.value == "") {
            alert("아이디를 입력해주세요.");
            this.$inputMemberId.focus();
            return false;
        }
        if(this.$inputMemberPw.value == "") {
            alert("비밀번호를 입력해주세요.");
            this.$inputMemberPw.focus();
            return false;
        }
    
        // console.log(this.$inputMemberId.value)
        // console.log(this.$inputMemberPw.value)

        //let result = JsonMemder.getInstance().loginMember(this.$inputMemberId.value, this.$inputMemberPw.value);
        let json = JsonMemder.getInstance().loginMember(this.$inputMemberId.value, this.$inputMemberPw.value);
        let result = json["result"];
        let loguser = json["loguser"];
        ControllerMain.getInstance().member = loguser;
        console.log(loguser);

        if(result) {
            ControllerMain.getInstance().log = this.$inputMemberId.value;
            ControllerMain.getInstance().changePage("page-header", null);
            ControllerMain.getInstance().changePage("page-main", loguser);
        } else {
            alert("아이디와 비밀번호를 확인해주세요.");
            this.$inputMemberId.value = "";
            this.$inputMemberPw.value = "";
            this.$inputMemberId.focus();
        }
    }

    

}