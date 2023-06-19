


export class JsonMemder {
    
    static instance = new JsonMemder();
    static getInstance() {
        return this.instance;
    }
    start() {
        this.memberList = null;
        this.setSampleData();
    }
    setSampleData() {
        this.memberList= [
            {"id":"qwer",
             "pw":"1234", "No": 1001,
             "name":"신짱구", 
             "phone":"01012341234", 
             "stamp":0, "coupon":0,
             "vip":"gokd"},
            {"id":"abcd", 
            "pw":"1234", 
            "name":"신짱아", "No": 1002,
            "phone":"01012341234", 
            "stamp":0, "coupon":0,
            "vip":"cilver"},
            {"id":"asdf", 
            "pw":"1234", 
            "name":"흰둥이", "No": 1003,
            "phone":"01012341234", 
            "stamp":0, "coupon":0,
            "vip":"bronze"}
        ];
    };
    //가입
    putMember(data){
        let lastNumber = this.getMaxMemberNo();
        let member = {};
        member.No= lastNumber + 1;
        member.id = data[0];
        member.pw = data[1];
        member.name = data[2];
        member.phone = data[3];
        member.stamp = 0;
        member.coupon = 0;
        member.vip = "bronze";
        this.memberList.push(member);    
        console.log(this.memberList);  
    }

    //유효성
    memberIdCheckPro(memberId) {
        let check = false;
        for(let i=0; i<this.memberList.length; i++) {
            // if(this.memberList[i]["memberId"] == memberId) {
            if(this.memberList[i].id == memberId) {
                check = true;
                break;
            }
        }

        return check;
    }


    getMaxMemberNo() {
        let No = 1000;
        for(let i=0; i<this.memberList.length; i++) {
            if(No < this.memberList[i].No) {
                No = this.memberList[i].No;
            }
        }
        return No;
    }

    addMember(member) {
        this.memberList.push(member);
        console.log(this.memberList);
    }

    getMemberList() {
        return this.memberList;
    }

    loginMember(memberId, memberPw) {
        console.log(memberId , memberPw);
        for(let i = 0; i < this.memberList.length;i++){
            console.log(this.memberList[i].id);
            console.log(this.memberList[i].pw);
        }

        

        let result = false;
        let json = {};
        for(let i=0; i<this.memberList.length; i++) {

            console.log(this.memberList[i].id , memberId);
            console.log(this.memberList[i].pw , memberPw);

            if(this.memberList[i].id == memberId && this.memberList[i].pw == memberPw) {
                console.log("!!");
                result = true;
                json["result"] = result;
                json["loguser"] = this.memberList[i]

                
                break;
            }
        }
        
        return json;

        //찾기
        

    }
    // 아이디 찾기
    QidMember(membername, memberphone) {
        console.log(membername , memberphone);
        for(let i = 0; i < this.memberList.length;i++){
            console.log(this.memberList[i].name);
            console.log(this.memberList[i].phone);
        }

        

        let result = false;
        let json = {};
        for(let i=0; i<this.memberList.length; i++) {

            console.log(this.memberList[i].name , membername);
            console.log(this.memberList[i].phone , memberphone);

            if(this.memberList[i].name == membername && this.memberList[i].phone == memberphone) {
                console.log("!!");
                result = true;
                json["result"] = result;
                json["loguserid"] = this.memberList[i].id

                
                break;
            }
        }
        
        return json;

        //찾기
        
        

    }
    //비밀번호 찾기
    QpwMember(membername, memberid ,memberphone) {
        console.log(membername , memberid ,memberphone);
        for(let i = 0; i < this.memberList.length;i++){
            console.log(this.memberList[i].name);
            console.log(this.memberList[i].id);
            console.log(this.memberList[i].phone);
        }

        

        let result = false;
        let json = {};
        for(let i=0; i<this.memberList.length; i++) {

            console.log(this.memberList[i].name , membername);
            console.log(this.memberList[i].id , memberid);
            console.log(this.memberList[i].phone , memberphone);

            if(this.memberList[i].name == membername && this.memberList[i].phone == memberphone && this.memberList[i].id == memberid) {
                console.log("!!");
                result = true;
                json["result"] = result;
                json["loguserpw"] = this.memberList[i].pw

                
                break;
            }
        }
        
        return json;

        //찾기
        
        

    }
    
}


