import { ControllerMain } from "./controllerMain.js";
//db 공간
import { JsonBoard } from "./Board.js";
import { JsonOrder } from "./order.js";
import { JsonCart } from "./cart.js";
//메뉴

//유저
import { JsonMemder } from "./member.js";

// 시작 페이지

ControllerMain.getInstance().start();
JsonMemder.getInstance().start();
JsonBoard.getInstance().start();
JsonOrder.getInstance().start();
JsonCart.getInstance().start();