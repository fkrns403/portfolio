

export class PageFooter {

    execute(data){
        var $tag = document.querySelector("#footer");  
        var tag = "";
        tag += 
        `
        
            <hr size="1" color="lightgray">

            <table id="footer">
                <tr>
                    <td width="500px"  align="center">
                        <font size="2" color="gray">
                        서울사무소 : 서울특별시 송파구 법원로9길 26, H비지니스파크 C동 1206호-1209호<br>
                        부산본사 : 부산시 기장군 기장읍 대변3길 11<br>
                        TEL : 1899-5685 / FAX : 02-5236-9635 / e-mail : compose@composecoffee.com<br>
                        사업자등록번호 : 521-81-02386 / 대표 : 김진성	
                        </font>
                    </td>
                </tr>
            </table>
        
        `;
        $tag.innerHTML = (tag);
    }
}