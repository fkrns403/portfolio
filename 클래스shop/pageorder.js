import { ControllerMain } from "./controllerMain.js";
import { JsonOrder } from "./order.js";
import { JsonCart } from "./cart.js";


export class pageorder {
    execute(date) {
        let $content =
        document.querySelector("#content");
		let cartList = JsonCart.getInstance().getcartList();
		let tag = null;
        if (ControllerMain.getInstance().order == null) {
		tag =
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
        #menuT1 {
			width: 100%;
			text-align: center;
			font-weight: bold;
			font-size: 20px;
		}
		#menuT1 td {
			height: 50px;
			background-color: #FFD700;
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
		
            <table id="menuT1">
                <tr>
                    <td><a id="season">시즌메뉴</a></td>
                    <td><a id="coffee">커피</a></td>
                    <td><a id="nonCoffee">논커피</a></td>
                    <td><a id="frappe">프라페</a></td>
                    <td><a id="side">사이드</a></td>
                </tr>
            </table>
			
            
            <table id="orderT1">
                        <tr>
                    
                        </tr>
            </table>
        </div>
    
    
        <!-- -------------------------------- -->
    
        <div id="footer">
            <table id="footT1">
                <tr>
                    <td class="T1Td1"><span class="T1S1">총 상품금액</span> <br> <span class="T1S2">0원</span></td>
                    <td class="T1Td4" colspan="3">
                        <button id="button2">장바구니</button>
                    </td>
                </tr>
            </table>
        </div>
        `;

		} else {
			tag =
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
        #menuT1 {
			width: 100%;
			text-align: center;
			font-weight: bold;
			font-size: 20px;
		}
		#menuT1 td {
			height: 50px;
			background-color: #FFD700;
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
		#${ControllerMain.getInstance().order} {
			background-color: white;
			
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
		
            <table id="menuT1">
                <tr>
                    <td><a id="season">시즌메뉴</a></td>
                    <td><a id="coffee">커피</a></td>
                    <td><a id="nonCoffee">논커피</a></td>
                    <td><a id="frappe">프라페</a></td>
                    <td><a id="side">사이드</a></td>
                </tr>
            </table>
			
            
            <table id="orderT1">
			<tr>`
			let orderlest = JsonOrder.getInstance().getOrderList();
			let count = 1;
                for (let i = 0; i < orderlest.length; i++) {
					if (ControllerMain.getInstance().order == orderlest[i].category) {
						if (orderlest[i].stock != 0 && count % 4 != 0) {
							tag += `<td>
							<img alt="" src="menuImg/${i + 1}.png"></a>
							<p class="orderT1Td1">${orderlest[i].menu}</p>
							<p>${orderlest[i].price}원</p>
						</td>`
						count ++
						} else if (orderlest[i].stock != 0 && count % 4 == 0) {
							tag += `<td>
							<img alt="" src="menuImg/${i + 1}.png"></a>
							<p class="orderT1Td1">${orderlest[i].menu}</p>
							<p>${orderlest[i].price}원</p>
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
                    <td class="T1Td1"><span class="T1S1">총 상품금액</span> <br> <span class="T1S2" id="total">${ControllerMain.getInstance().total}원</span></td>
                    <td class="T1Td4" colspan="3">
                        <button id="button2">장바구니</button>
                    </td>
                </tr>
            </table>
        </div>
        `;
		}
        $content.innerHTML = tag;
		if(ControllerMain.getInstance().log != null) {
            document.querySelector("#season").addEventListener("click", this.seasonClick);
            document.querySelector("#coffee").addEventListener("click", this.coffeeClick);
            document.querySelector("#nonCoffee").addEventListener("click", this.nonCoffeeClick);
            document.querySelector("#frappe").addEventListener("click", this.frappeClick);
            document.querySelector("#side").addEventListener("click", this.sideClick);
            document.querySelector("#button2").addEventListener("click", this.button2Click);
        }
		if(ControllerMain.getInstance().log != null) {
			let e = document.querySelectorAll(".orderT1Td1")
			
            for (let i = 0; i < e.length; i++) {
				e[i].addEventListener("click", this.orderClick);
			}
        }

    }
	seasonClick = (event) => {
		ControllerMain.getInstance().order="season"
        ControllerMain.getInstance().changePage("page-order", ControllerMain.getInstance().member);
    }
	coffeeClick = (event) => {
		ControllerMain.getInstance().order="coffee"
        ControllerMain.getInstance().changePage("page-order", ControllerMain.getInstance().member);
    }
	nonCoffeeClick = (event) => {
		ControllerMain.getInstance().order="nonCoffee"
        ControllerMain.getInstance().changePage("page-order", ControllerMain.getInstance().member);
    }
	frappeClick = (event) => {
		ControllerMain.getInstance().order="frappe"
        ControllerMain.getInstance().changePage("page-order", ControllerMain.getInstance().member);
    }
	sideClick = (event) => {
		ControllerMain.getInstance().order="side"
        ControllerMain.getInstance().changePage("page-order", ControllerMain.getInstance().member);
    }
	button2Click = (event) => {
        ControllerMain.getInstance().changePage("page-headerOL", null);
        ControllerMain.getInstance().changePage("page-orderlest", ControllerMain.getInstance().member);
    }
	orderClick = (event) => {
		let t =event.target.innerText
		let price = 0;
		let menu = JsonOrder.getInstance().getOrderList();
		for (let i = 0; i < menu.length; i++) {
			if (t == menu[i].menu) {
				console.log(menu[i].stock)
				menu[i].stock --;
				price = menu[i].price
				console.log(menu[i].stock)
			}
			
		}
		let cartpush = JsonCart.getInstance().cartList
		let check = false;
		for (let i = 0; i < cartpush.length; i++) {
			if (cartpush[i].menu == t && cartpush[i].id == ControllerMain.getInstance().log) {
				check = true;
				break;
			}
		}
		if (check == false){
			cartpush.push({"id":ControllerMain.getInstance().log,"menu":t ,"stock":1, "price": price})
		}else{
			for (let i = 0; i < cartpush.length; i++) {
				if (cartpush[i].menu == t && cartpush[i].id == ControllerMain.getInstance().log){
					cartpush[i].stock ++;
					break;
				}
			}
		}


		
		// for (let i = 0; i < cartpush.length; i++) {
		// 	if (cartpush[i].menu == t && cartpush[i].id == ControllerMain.getInstance().log) {
		// 		cartpush[i].stock ++;
		// 	} else {
		// 		console.log(ControllerMain.getInstance().log)
		// 		cartpush.push({"id":ControllerMain.getInstance().log,"menu":t ,"stock":1})
		// 	}
			
		// }
		let totallest1 = [];

		
		for (let i = 0; i < cartpush.length; i++) {
			if (cartpush[i].id == ControllerMain.getInstance().log) {
				console.log(cartpush[i].stock)
				console.log(cartpush[i].price)
				let num = Number(cartpush[i].stock) * Number(cartpush[i].price)
				console.log(num)
				totallest1.push(num)
			}
			
		}
		console.log(totallest1)
		ControllerMain.getInstance().total = 0;
		for (let i = 1; i < totallest1.length; i++) {
			ControllerMain.getInstance().total += totallest1[i]
			
		}
		document.querySelector("#total").innerText = `${ControllerMain.getInstance().total}`
    }
    

}