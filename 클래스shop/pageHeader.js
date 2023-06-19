import { ControllerMain } from "./controllerMain.js";

export class PageHeader {

    execute(data) {
        let $header = document.querySelector("#header");  
        
        let tag = "";
        

        // [로그아웃] 상태 화면
        if(ControllerMain.getInstance().log == null) {
            tag += 
            `
            <style>
                table tr td {
                    border-collapse: collapse;
                    border: 1px solid lightgray;
                }
    
                #logT1 {
                    margin-top: 50px;
                    margin-bottom: 50px;
                }	
                img {
                    width: 500px;
                }	
            </style>
            `;

            tag += 
            `
            <table id="logT1">
                <tr>
                    <td><img src="img/00_composeLogo.png"></td>
                </tr>
            </table>
            `;

        } else {
            tag += 
            `
            <style>
            a {
                text-decoration: none;
                color: black;
            }
            a:hover {
                color: #FFD700;
            }
            #menuT1 {
                width: 1100px;
                text-align: center;
            }
            #menuT1 td {
                height: 100px;
            }
            "#btn-memberLogoutPro" {
                width: 55px;
            }
            .T1Img2 {
                width: 400px;
            }
            .T1Img3 {
                width: 90px;
            }
            
            </style>
            `;
            tag += 
            `
            <table id="menuT1">
                <tr>
                    <td><a ><img id="btn-memberLogoutPro" src="img/00_logout.png"></a></td>
                    <td><a><img class="T1Img2" src="img/01_mainImg02.png"></a></td>
                    <td><a><img class="T1Img3" src="img/01_mainImg03.png"></a></td>
                </tr>
            </table>
            `;
        }

        $header.innerHTML = tag;


        // [로그아웃] 상태 화면
        if(ControllerMain.getInstance().log != null) {
            document.querySelector("#btn-memberLogoutPro").addEventListener("click", this.memberLogoutProClick);
        }

        
    }

    memberLogoutProClick = (event) => {
        alert("로그아웃 되었습니다.");

        ControllerMain.getInstance().log = null;
        ControllerMain.getInstance().changePage("page-header", null);
        ControllerMain.getInstance().changePage("page-index", null);
        ControllerMain.getInstance().changePage("Page-Footer", null);
    }
    memberorderClick = (event) => {
        ControllerMain.getInstance().log = null;
        ControllerMain.getInstance().changePage("page-header", null);
        ControllerMain.getInstance().changePage("page-index", null);
        ControllerMain.getInstance().changePage("Page-Footer", null);
    }
   
}