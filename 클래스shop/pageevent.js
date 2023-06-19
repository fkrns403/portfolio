export class pageevent {

    execute(deta) {
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
        #evtT2 {
			width: 100%;
			text-align: center;
		}
		.evtT2Td {
			height: 50px;
			width: 50%;
			font-weight: bold;
			font-size: 30px;
		}
		#evtT3 {
			margin-top: 50px;
			width: 95%;
			border: 1px solid lightgray;
			box-shadow: 5px 5px 5px lightgray;
		}
		#evtT3 img {
			width: 100%;
		}
		.evtT3Sp1 {
			font-weight: bold;
			font-size: 23px;
		}
		.evtT3Sp2 {
			font-size: 20px;
		}
		
		#eventList1 {
			width: 95%;
		}
        </style>
        `;

        tag +=
            `
			<div id="container">
			
			
			<table id="evtT2">
				<tr>
					<td class="evtT2Td" colspan="2"><a>공지사항</a></td>
					<td class="evtT2Td" colspan="2"><a>이벤트</a></td>
				</tr>
			</table>
			
			<hr>
			
			<table id="evtT3">
				<tr>
					<td><img src="img/07_event01.png"></td>
				</tr>
				<tr>
					<td>
						<span class="evtT3Sp1">컴포즈커피 적립 시스템 변경 안내</span> <br>
						<span class="evtT3Sp2">2023-05-01</span>
				</tr>
			</table>
			</div>
        `;

        $content.innerHTML = tag;


    }

    

}