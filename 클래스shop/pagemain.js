import { ControllerMain } from "./controllerMain.js";

export class PageMain {
    
    execute(data) {
        let $content =
        document.querySelector("#content");

        let tag =
            `
        <style>
        #container {
			width: 1000px;
			height: 1600px;
			border: 2px solid lightgray;
			margin:0 auto;
		} 
        table {
			margin: 0 auto;
			width: 100%;
		}
		a {
			text-decoration: none;
			color: black;
		}
		a:hover {
			color: #FFD700;
		}
        #menuT2 {
            text-align: center;
        }
        #menuT2 td {
            height: 700px;
        }
        #menuT2 img {
            width: 800px;
        }

        #menuT3 {
            text-align: center;
        }
        #menuT3 td {
            font-size: 25px;
            font-weight: bold;
        }
        .T3Td1 {
        	height: 160px;
        }
        #T3Td2 {
        	height: 40px;
        }

        
        #menuT3B1 {
            background-color: #FFD700;
            border-style: none;
            width: 200px;
            height: 50px;
            border-radius: 10px;
            font-size: 30px;
        }
        #menuT3B2 {
            background-color: black;
            border-style: none;
            width: 200px;
            height: 50px;
            border-radius: 10px;
            font-size: 30px;
            color: white;
        }

        #menuT4 {
            text-align: center;
        }
        #menuT4 td {
            height: 120px;
        }
        .menuT4B1 {
            background-color: #FFD700;
            border-style: none;
            width: 120px;
            height: 50px;
            border-radius: 30px;
            font-size: 20px;
        }
        .menuT4B2 {
            background-color: black;
            color: white;
            border-style: none;
            width: 110px;
            height: 50px;
            border-radius: 30px;
            font-size: 20px;
        }
        
        .T4IMG1 {
        	width: 200px;
        }
        

        #menuT5 {
            text-align: center;
        }
        #menuT5 a {
            font-size: 20px;
            text-decoration: none;
            color: black;
        }
        #menuT5 td {
            width: 40px;
        }
        #menuT5 img {
        	width: 100px;
        }
        .menuT5Td1 {
            height: 140px;
        }
        .menuT5Td2 {
            height: 40px;
        }
        #menuT5 a:hover {
            color: #FFD700;
        }
        </style>
        `;

        tag +=
            `
        <div id="container">
            <table id="menuT2">
                <tr>
                    <td><a href="#"><img src="img/01_mainImg04.png"></a></td>
                </tr>
            </table>
    
        <table id="menuT3">
            <tr>
                <td class="T3Td1" rowspan="3">
                    <img src="img/img4.png">                	                    	
                </td>
                <td>이달의 추천 메뉴: </td>
            </tr>
            <tr>                    	
                <td><button id="menuT3B1">쿠폰:`+ data["coupon"] +` 개</button></td>
            </tr>
            <tr>
                <td><button id="menuT3B2">스탬프: `+data["coupon"]+` 개</button></td>
            </tr>
            <tr>
                <td id="T3Td2">`+data["name"] +` 님</td>
                <td></td>
            </tr>
        </table>
        <hr style="border: 2px solid lightgray">
        
        <table id="menuT4">
            <tr>
                <td>
                    <img class="T4IMG1" src="img/09_gold.png">
                </td>
                <td>
                    <button class="menuT4B1">퀵오더</button>&nbsp;&nbsp;
                    <button class="menuT4B2">주문</button>
                </td>
            </tr>
        </table>
        <hr style="border: 2px solid lightgray">
        
        <table id="menuT5">
            <tr>
                <td class="menuT5Td1"><img src="img/01_mainImg08.png"></td>
                <td><img src="img/01_mainImg09.png"></td>
                <td><img src="img/01_mainImg10.png"></td>
                <td><img src="img/01_mainImg11.png"></td>
            </tr>
            <tr>
                <td id="event" class="menuT5Td2"><a>이벤트/공지사항</a></td>
                <td id="order"><a>주문하기</a></td>
                <td id="orderlest" ><a>주문내역</a></td>
                <td id="coupn"><a>쿠폰/스탬프</a></td>
            </tr>
        </table>
        </div>
        `;
        $content.innerHTML = tag;

        //하단메뉴
        document.querySelector("#event").addEventListener("click", this.membereventClick);
        document.querySelector("#order").addEventListener("click", this.memberorderClick);
        document.querySelector("#orderlest").addEventListener("click", this.memberorderlestClick);
        document.querySelector("#coupn").addEventListener("click", this.membercoupnClick);
        document.querySelector("#menuT3B1").addEventListener("click", this.membercoupnClick);
        document.querySelector("#menuT3B2").addEventListener("click", this.membercoupnClick);
        
          
    }
    
    membereventClick = (event) => {
       ControllerMain.getInstance().changePage("page-headerE", null);
       ControllerMain.getInstance().changePage("page-event", null);
    }
    memberorderClick = (event) => {
        ControllerMain.getInstance().changePage("page-headerO", null);
        ControllerMain.getInstance().changePage("page-order", null);
    }
    memberorderlestClick = (event) => {
        ControllerMain.getInstance().changePage("page-headerOL", null);
        ControllerMain.getInstance().changePage("page-orderlest", ControllerMain.getInstance().member);
    }
    membercoupnClick = (event) => {
        ControllerMain.getInstance().changePage("page-headerC", null);
        ControllerMain.getInstance().changePage("page-copon",ControllerMain.getInstance().member);
    }


    
    
    

}