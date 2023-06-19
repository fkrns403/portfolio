import { ControllerMain } from "./controllerMain.js";

export class PageHeaderOL {

    execute(data) {
        let $header = document.querySelector("#header");  
        
        let tag = "";
        

        // [로그아웃] 상태 화면
        
            tag += 
            `
            <style>
            #header {
                width: 800px;
                margin: 0 auto;
            }
    
    
            #topT1 {
                width: 100%;
                text-align: center;
            }
            .T1Td1 {
                width: 20%;
            }
            .T1Td1 img {
                width: 50px;
            }
            .T1Td2 {
                height: 100px;
                width: 600px;
                
                font-weight: bold;
                font-size: 35px;
            }
            .T1Td3 {
                text-align: center;
            }
            .t1B {
                background-color: #FFD700;
                border-style: none;
                border-radius: 120px;
                height: 50px;
                width: 120px;
                font-size: 20px;
            }
            </style>
            `;
            tag += 
            `
            <table id="topT1">
			<tr>
				<td class="T1Td1"><a id="btn-membermain"><img alt="" src="img/00_back.png"></a></td>
				<td class="T1Td2"> 장바구니</td>
				<td class="T1Td3"><button id="btn-membercopon" class="t1B" >리뷰</button></td>
			</tr> 
		    </table>
		
		    <hr>
            `;
        

        $header.innerHTML = tag;


        // [로그아웃] 상태 화면
        if(ControllerMain.getInstance().log != null) {
            document.querySelector("#btn-membermain").addEventListener("click", this.membermainClick);
            document.querySelector("#btn-membercopon").addEventListener("click", this.membercoponClick);
        }

        
    }

    membermainClick = (event) => {
        ControllerMain.getInstance().changePage("page-header", null);
        ControllerMain.getInstance().changePage("page-main", ControllerMain.getInstance().member);
        ControllerMain.getInstance().changePage("Page-Footer", null);
    }
    membercoponClick = (event) => {
        ControllerMain.getInstance().padding= null;
        ControllerMain.getInstance().changePage("page-headerR", null);
        ControllerMain.getInstance().changePage("page-Review",ControllerMain.getInstance().member);
        ControllerMain.getInstance().changePage("Page-Footer", null);
    }
   
}