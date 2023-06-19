import { ControllerMain } from "./controllerMain.js";

export class JsonOrder {
    static instance = new JsonOrder();
    static getInstance() { return JsonOrder.instance; }

    start() {
        this.OrderList = null;
        this.setSampleData();
    }

    setSampleData() {
        this.OrderList = [
            {"category": "season", "menu":"설향생딸기주스", "price": 4000, "stock": 5},
            {"category": "season", "menu":"라치한딸기", "price": 3800, "stock": 5},
            {"category": "season", "menu":"레몬딸기크러쉬", "price": 3800, "stock": 5},
            {"category": "season", "menu":"딸기사요", "price": 4300, "stock": 5},
            {"category": "coffee", "menu":"에스프레소", "price": 1500, "stock": 100},
            {"category": "coffee", "menu":"아메리카노", "price": 1500, "stock": 100},
            {"category": "coffee", "menu":"디카페인더치커피", "price": 3000, "stock": 100},
            {"category": "coffee", "menu":"디카페인더치라떼", "price": 3500, "stock": 100},
            {"category": "coffee", "menu":"카푸치노", "price": 2700, "stock": 100},
            {"category": "coffee", "menu":"카페라떼", "price": 2700, "stock": 100},
            {"category": "coffee", "menu":"바닐라라떼", "price": 3000, "stock": 100},
            {"category": "coffee", "menu":"헤이즐넛라떼", "price": 3000, "stock": 100},
            {"category": "coffee", "menu":"카라멜마기야또", "price": 3300, "stock": 100},
            {"category": "coffee", "menu":"카페모카", "price": 3300, "stock": 100},
            {"category": "coffee", "menu":"돌체라떼", "price": 3500, "stock": 100},
            {"category": "coffee", "menu":"달고나라떼", "price": 3900, "stock": 100},
            {"category": "coffee", "menu":"더치커피", "price": 3000, "stock": 100},
            {"category": "coffee", "menu":"더치라떼", "price": 3500, "stock": 100},
            {"category": "coffee", "menu":"아인슈페너", "price": 3800, "stock": 100},
            {"category": "coffee", "menu":"아인슈페너라떼", "price": 3900, "stock": 100},
            {"category": "nonCoffee", "menu":"더블초코라떼", "price": 3500, "stock": 20},
            {"category": "nonCoffee", "menu":"쿠키초코라떼", "price": 3500, "stock": 20},
            {"category": "nonCoffee", "menu":"민트초코오레오라떼", "price": 3500, "stock": 20},
            {"category": "nonCoffee", "menu":"크린티라떼", "price": 3500, "stock": 20},
            {"category": "nonCoffee", "menu":"곡물라떼", "price": 3000, "stock": 20},
            {"category": "nonCoffee", "menu":"고구마라떼", "price": 3300, "stock": 20},
            {"category": "nonCoffee", "menu":"밀크티", "price": 3800, "stock": 20},
            {"category": "nonCoffee", "menu":"흑당밀크", "price": 3500, "stock": 20},
            {"category": "frappe", "menu":"리얼초코자바칩프라페", "price": 3900, "stock": 60},
            {"category": "frappe", "menu":"민트초코오레오프라페", "price": 3900, "stock": 60},
            {"category": "frappe", "menu":"쿠키초코프라페", "price": 3900, "stock": 60},
            {"category": "frappe", "menu":"그린티프라페", "price": 3900, "stock": 60},
            {"category": "frappe", "menu":"모카자바칩프라페", "price": 4400, "stock": 60},
            {"category": "side", "menu":"바나나케이크", "price": 3300, "stock": 10},
            {"category": "side", "menu":"크로와플", "price": 2000, "stock": 10},
            {"category": "side", "menu":"스위트콘크루아상와플", "price": 3500, "stock": 10},
            {"category": "side", "menu":"레이즌오트밀쿠키", "price": 1000, "stock": 10},
            {"category": "side", "menu":"초콜릿칩쿠키", "price": 1000, "stock": 10}

        ];
    
    }
    getOrderList() {
        return this.OrderList;
    }
    

    

}