
export class PageHeader {

    execute() {
        let $header = document.querySelector("#header");
        let tag = "";
        tag +=
            `
            #${ControllerMain.getInstance().member} {
                background-color: white;
                border: 1px solid lightgray;
                border-radius: 120px;
                width: 150px;
                height: 50px;
            }
        `;

        $header.innerHTML = tag;


    }

}