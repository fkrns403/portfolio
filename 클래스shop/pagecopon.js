export class Pagecopon {

    execute(data) {
        let $content =
        document.querySelector("#content");

        let tag =
            `
        <style>
        #container {
			width: 800px;
			height: 1500px;
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
		
		
		#coupT1 {
			margin-top: 30px;
			width: 70%;
			margin-bottom: 30px;
		}
		.coupT1Td1 {
			font-weight: bold;
			font-size: 25px;
		}
		.coupT1Td2 {
			text-align: right;
		}
		.coupT1Img1 {
			width: 100px;
		}
		.coupT1Img2 {
			width: 90px;
		}
		#coupT2 {
			margin-top: 30px;
			width: 70%;
		}
		#couponB1 {
			background-color: #FFD700;
			border-style: none;
			border-radius: 120px;
			width: 100px;
			height: 35px;
			font-size: 20px;
		}
		p {
			font-size: 12px;
			color: #bdbebd;
		}
        </style>
        `;

        tag +=
            `
			<div id="container">
            <hr>
		
		<table id="coupT1">
			<tr>
				<td class="coupT1Td1">
					<img alt="" src="img/03_coupon01.png">1384호점 관악당곡점
				</td>
				<td class="coupT1Td2">
					<button onclick="location.href=''" id="couponB1">쿠폰:<b>0</b></button>
				</td>
			</tr>
			<tr>
                <td id= "copon">
				`
				for (let i = 0; i < 10; i++) {
					if (i < data["coupon"]) {
						tag +=`<img class="coupT1Img1" alt="" src="img/03_cup1.png"></img>`
					} else {
						tag +=`<img class="coupT1Img2" alt="" src="img/03_cup2.png">`
					}
					
				}
		

			tag +=	`
                    
                </td>			
			</tr>
		</table>
		
		<hr>
		
		<table id="coupT2">
			<tr>
				<td>
					<p>-가맹점명을 터치하시면 스탬프 내역을 볼 수 있습니다.</p>
					<p>-스탬프 7개 적립 시 1,500원 할인쿠폰이 발생됩니다.</p>
					<p>-스탬프 터치 시 유효기간 확인이 가능합니다.</p>
					<p>-유효기간: 쿠폰은 발생일로 1개월 │ 스탬프는 발행일로 6개월</p>
					<p>-조회가능기간: 쿠폰은 최근 6개월까지 │ 스탬프는 최근 1년까지</p>
				</td>
			</tr>
		</table>
		</div>
        `;

        $content.innerHTML = tag;


    }

    

}