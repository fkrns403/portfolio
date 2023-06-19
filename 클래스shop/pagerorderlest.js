import { ControllerMain } from "./controllerMain.js";
import { JsonCart } from "./cart.js";


export class pageorderlest {

    execute(date) {
        let $content =
        document.querySelector("#content");
		let cartList = JsonCart.getInstance().getcartList();
		
		
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
		#menuT2 {
			margin-top: 30px;
		}
		#orderT1 {
			text-align: center;
			width: 100%;
		}
		#orderT1 th {
			width: 160px;
		}
		

        /* ---------------------------------- */
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
		.T1Td4 {
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
			
            
            <table id="orderT1">
			<tr>`
			let cart = JsonCart.getInstance().cartList;
			let count = 1;
                for (let i = 3; i < cart.length; i++) {
					if (ControllerMain.getInstance().log == cart[i].id) {
						if (count % 4 != 0) {
							tag += `<td class="orderT1Td1">
							<p>${cart[i].menu}</p>
							<p>${cart[i].stock}잔</p>
						</td>`
						count ++
						} else if (count % 4 == 0) {
							tag += `<td class="orderT1Td1">
							<p>${cart[i].menu}</p>
							<p>${cartList[i].stock}잔</p>
							</td>
							</td>
							<tr>`
							count ++;
						}
					}
				}     
        tag +=    `</td>
		</table>
        </div>
    
    
        <!-- -------------------------------- -->
    
        <div id="footer">
            <table id="footT1">
                <tr>
                    <td class="T1Td1"><span class="T1S1">총 상품금액</span> <br> <span class="T1S2">${ControllerMain.getInstance().total}원</span></td>
                    <td class="T1Td4" colspan="3">
                        <button onclick="location.href='07_buy.html'" id="button2">장바구니</button>
                    </td>
                </tr>
            </table>
        </div>
        `;
		
        $content.innerHTML = tag;
		

    }
	

}