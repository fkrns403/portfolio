import { ControllerMain } from "./controllerMain.js";

export class PageHeaderE {

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
            }
            .T1Td1 {
                width: 20%;
            }
            .T1Td1 img {
                width: 50px;
            }
            .T1Td2 {
                height: 100px;
                text-align: center;
                font-weight: bold;
                font-size: 35px;
            }
            .T1Td3 {
                text-align: center;
            }
            
            </style>
            `;
            tag += 
            `
            <table id="topT1">
			<tr>
				<td class="T1Td1"><a id="btn-membermain"><img alt="" src="img/00_back.png"></a></td>
				<td class="T1Td2" id="btn-membercopon"> 이벤트</td>
				<td class="T1Td3"><img id="btn-membermain1" src="img/02_orderList.png"></td>
			</tr>
		    </table>
		
		    <hr>
            `;
        

        $header.innerHTML = tag;


        // [로그아웃] 상태 화면
        if(ControllerMain.getInstance().log != null) {
            document.querySelector("#btn-membermain").addEventListener("click", this.membermainClick);
            document.querySelector("#btn-membercopon").addEventListener("click", this.membermainClick);
            document.querySelector("#btn-membermain1").addEventListener("click", this.membermainClick);
        }

        
    }

    membermainClick = (event) => {
        ControllerMain.getInstance().changePage("page-header", null);
        ControllerMain.getInstance().changePage("page-main", ControllerMain.getInstance().member);
        ControllerMain.getInstance().changePage("Page-Footer", null);
    }
    
   
}