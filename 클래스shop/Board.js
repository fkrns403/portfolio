import { ControllerMain } from "./controllerMain.js";

export class JsonBoard {
    static instance = new JsonBoard();
    static getInstance() { return JsonBoard.instance; }

    start() {
        this.boardList = null;
        this.setSampleData();
    }

    setSampleData() {
        this.boardList = [
            
        ];
    }

    getBoardList() {
        return this.boardList;
    }

    getBoardSortList() {
        // 같은 ref기준으로 내림차순 정렬
        // 같은 ref기준으로 다시 reLvel기준으로 오름차순 정렬

        for(let i=0; i<this.boardList.length; i++) {
            for(let j=i+1; j<this.boardList.length; j++) {
               
                if(this.boardList[i].ref < this.boardList[j].ref) {
                    let temp = this.boardList[i];
                    this.boardList[i] = this.boardList[j];
                    this.boardList[j] = temp;
                } 

                if(this.boardList[i].ref == this.boardList[j].ref) {
                    if(this.boardList[i].reLevel > this.boardList[j].reLevel) {
                        let temp = this.boardList[i];
                        this.boardList[i] = this.boardList[j];
                        this.boardList[j] = temp;
                    }
                }    
            }
        }

        console.log(this.boardList);
        return this.boardList;
    }

    getBoard(boardNo) {
        let index = 0;
        for(let i=0; i<this.boardList.length; i++) {
            if(this.boardList[i].boardNo == boardNo) {
                index = i;
                break;
            }
        } 

        return this.boardList[index];
    }

    modifyBoard(boardNo, boardTitle, boardContent) {
        let index = 0;
        for(let i=0; i<this.boardList.length; i++) {
            if(this.boardList[i].boardNo == boardNo) {
                index = i;
                break;
            }
        } 

        this.boardList[index].title = boardTitle;
        this.boardList[index].content = boardContent;
    }
    
    deleteBoard(boardNo) {
        let index = 0;
        for(let i=0; i<this.boardList.length; i++) {
            if(this.boardList[i].boardNo == boardNo) {
                index = i;
                break;
            }
        } 

        this.boardList.splice(index, 1);
    }

    getMaxBoardNo() {
        let maxBoardNo = 1000;
        for(let i=0; i<this.boardList.length; i++) {
            if(maxBoardNo < this.boardList[i].boardNo) {
                maxBoardNo = this.boardList[i].boardNo;
            }
        }
        return maxBoardNo;
    }

    

    getBordCount() {
        return this.boardList.length;
    }

    getBoardPagingList(startIndex, endIndex) {
        let boardPagingList = [];
        for(let i=startIndex; i<endIndex; i++) {
            boardPagingList.push(this.boardList[i]);
        }

        return boardPagingList;
    }




    boardWritePro(inputBoardTitle, textareaBoardContent) {

        
        let date = new Date();
        let year = date.getFullYear();
        let month = date.getMonth() + 1;
        if(month < 10) {
            month = "0" + month;
        }
        let day = date.getDate();
        let today = year + "-" + month + "-" + day;

        let writer = ControllerMain.getInstance().log;

        let maxboardNo = this.getMaxBoardNo() + 1;
        let dummyBoard = {
            "boardNo"   : maxboardNo,
            "title"     : inputBoardTitle,
            "content"   : textareaBoardContent,
            "writer"    : writer,
            "regDate"   : today,
            "readCount" : 0,
            "ref"       : 1,
            "reStep"    : 1,
            "reLevel"   : 1
        };

        this.boardList.push(dummyBoard);
        
    }

    checkBoardDeletePro(deleteList) {

        for(let i=0; i<deleteList.length; i++) {

            for(let j=0; j<this.boardList.length; j++) {
                if(this.boardList[j].boardNo == deleteList[i]) {
                    this.boardList.splice(j, 1);
                }
            }

        }


    }

    boardWriteReplyPro(inputBoardTitle, textareaBoardContent, boardNo) {

        // 부모의 ref, reStep, reLevel
        let parBoard = this.getBoard(boardNo);
        let parRef = parBoard.ref;
        let parReStep = parBoard.reStep;
        let parReLevel = parBoard.reLevel;

        // 답글
        // 1. 부모의 ref를 따름
        // 2. 부모의 reStep + 1증가
        // 3. 같은 ref그룹 내에서 
        //    부모의 reLevel보다 더 큰 기존의 게시글이 있으면 모두 reLvel +1증가
        // 4. 이후 현재 답글은 부모 reLevel에 +1증가

        let ref = parRef;
        let reStep = parReStep + 1;
        for(let i=0; i<this.boardList.length; i++) {
            if(parRef == this.boardList[i].ref) {
                if(parReLevel < this.boardList[i].reLevel) {
                    this.boardList[i].reLevel += 1;
                }
            }
        }
        let reLevel = parReLevel + 1;


        let date = new Date();
        let year = date.getFullYear();
        let month = date.getMonth() + 1;
        if(month < 10) {
            month = "0" + month;
        }
        let day = date.getDate();
        let today = year + "-" + month + "-" + day;

        let writer = ControllerMain.getInstance().log;

        let maxboardNo = this.getMaxBoardNo() + 1;
        let dummyBoard = {
            "boardNo"   : maxboardNo,//번호
            "title"     : inputBoardTitle,
            "content"   : textareaBoardContent,
            "writer"    : writer,
            "regDate"   : today,
            "readCount" : 0,
            "ref"       : ref,
            "reStep"    : reStep,
            "reLevel"   : reLevel
        };

        this.boardList.push(dummyBoard);

    }

}