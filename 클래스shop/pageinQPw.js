import { JsonMemder } from "./member.js";
import { ControllerMain } from "./controllerMain.js";

export class pageinQPw {

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
		#input-membername,
		#input-memberid,
		#input-memberphone,
		#button-memberQpwPro {
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
                    <td>ID</td>
                </tr>
                <tr>
                    <td><input id="input-memberid" type="text" name="id"></td>
                </tr>
                <tr>
                    <td>폰번호</td>
                </tr>
                <tr>
                    <td><input id="input-memberphone" type="text" name="pw"></td>
                </tr>
                <tr>
                    <td class="logT2Td1"><input id="button-memberQpwPro" type="submit" value="조회"></td>
                </tr>
            </table>
        
            <table id="logT3">
            <tr>
                <td><a id="btn-memberJoinPage" >회원가입</a></td>
                <td>│</td>
                <td><a id="btn-login">로그인</a></td>
                <td>│</td>
                <td><a id="btn-Qid">비밀번호 찾기</a></td>
            </tr>
        </table>
        `;

        $content.innerHTML = tag;

        
        document.querySelector("#btn-memberJoinPage").addEventListener("click", this.memberJoinPageClick);
        document.querySelector("#btn-login").addEventListener("click", this.memberlogineClick);
        document.querySelector("#btn-Qid").addEventListener("click", this.memberidClick);

        //찾기
        this.$inputMemberName = document.querySelector("#input-membername");
        this.$inputMemberid = document.querySelector("#input-memberid");
        this.$inputMemberphone = document.querySelector("#input-memberphone");
       
        this.$buttonMemberQpwPro = document.querySelector("#button-memberQpwPro");
        this.$buttonMemberQpwPro.addEventListener("click", this.memberQpwPro);
        


    }

    memberJoinPageClick = (event) => {
        ControllerMain.getInstance().changePage("page-Join", null);
    }
    memberlogineClick = (event) => {
        ControllerMain.getInstance().changePage("page-index", null);
    }
    memberidClick = (event) => {
        ControllerMain.getInstance().changePage("page-inQId", null);
    }
    //찾기
    memberQpwPro = (event) => {
        if(this.$inputMemberName.value == "") {
            alert("이름를 입력해주세요.");
            this.$inputMemberName.focus();
            return false;
        }
        if(this.$inputMemberid.value == "") {
            alert("ID를 입력해주세요.");
            this.$inputMemberid.focus();
            return false;
        }
        if(this.$inputMemberphone.value == "") {
            alert("핸드폰 번호를 입력해주세요.");
            this.$inputMemberphone.focus();
            return false;
        }
        let json = JsonMemder.getInstance().QpwMember(this.$inputMemberName.value, this.$inputMemberid.value ,this.$inputMemberphone.value);
        let result = json["result"];
        let loguserpw = json["loguserpw"];
        console.log(loguserpw);

        if(result) {
            alert(loguserpw);
        } else {
            alert("이름와 핸드폰 번호 또느 ID를 확인해주세요.");
            this.$inputMemberName.value = "";
            this.$inputMemberid.value = "";
            this.$inputMemberphone.value = "";
            this.$inputMemberName.focus();
        }
    }
    
    
    

}