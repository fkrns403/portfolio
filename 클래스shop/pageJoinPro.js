
import { JsonMemder } from "./member.js";
import { ControllerMain } from "./controllerMain.js";

export class MenuJoinPro{

    execute(data){
        JsonMemder.getInstance().putMember(data);
        alert("회원가입을 축하합니다");
        ControllerMain.getInstance().changePage("page-index" , null);
    }
}