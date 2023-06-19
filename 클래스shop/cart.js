import { ControllerMain } from "./controllerMain.js";

export class JsonCart {
    static instance = new JsonCart();
    static getInstance() { return JsonCart.instance; }

    start() {
        this.cartList = null;
        this.setSampleData();
    }

    setSampleData() {
        this.cartList= [
            {"id":"qwer","total":0
             },
            {"id":"abcd", "total":0
            },
            {"id":"asdf", "total":0
            }
        ];
    
    }
    
    getcartList() {
        return this.cartList;
    }

    

    

}