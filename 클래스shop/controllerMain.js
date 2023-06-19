import { PageHeader } from "./pageHeader.js";
import { PageHeaderE } from "./pageHeaderE.js";
import { PageHeaderO } from "./pageHeaderO.js";
import { PageHeaderOL } from "./pageHeaderOL.js";
import { PageHeaderC } from "./pageHeaderC.js";
import { PageHeaderR } from "./pageHeaderR.js";
//해더
import { PageIndex } from "./pageIndex.js";
import { PageJoin } from "./pageMemberJoin.js";
import { MenuJoinPro } from "./pageJoinPro.js";
import { pageinQId } from "./pageinQId.js";
import { pageinQPw } from "./pageinQPw.js";
//로그인전
import { PageMain } from "./pagemain.js";
import { pageevent } from "./pageevent.js";
import { pageorder } from "./pageorder.js";
import { Pagecopon } from "./pagecopon.js";
import { pageorderlest } from "./pagerorderlest.js";
//리뷰
import { PageReview } from "./PageReview.js";
import { PageReviewInfo } from "./PageReviewInfo.js";
import { PageReviewModify } from "./PageReviewModify.js";
//댓글
import { PageReviewWrite } from "./pagereviewWrite.js";
import { PageRevieWriteReply } from "./PageRevieWriteReply.js";
//로그인이후
import { PageFooter } from "./PageFooter.js";
//푸터

export class ControllerMain {

    // 싱글톤 패턴
    static instacne = new ControllerMain();
    static getInstance() { return this.instacne; }

    start() {

        this.log = null;
        this.member = null;
        this.padding = null;
        this.PageReview = null;
        this.order = null;
        this.total = 0;
        

        this.pagenum = null;

        this.pageList = {};
        this.setPageList();
        //실행시 첫 화면
        this.changePage("page-header", null);
        this.changePage("page-index", null);
        this.changePage("Page-Footer", null);
    }
    setPageList() {
        this.pageList["page-header"] = new PageHeader();
        this.pageList["page-headerE"] = new PageHeaderE();
        this.pageList["page-headerO"] = new PageHeaderO();
        this.pageList["page-headerOL"] = new PageHeaderOL();
        this.pageList["page-headerC"] = new PageHeaderC();
        this.pageList["page-headerR"] = new PageHeaderR();
        // 헤더
        this.pageList["page-index"] = new PageIndex();
        this.pageList["page-Join"] = new PageJoin();
        this.pageList["page-joinPro"] = new MenuJoinPro();
        this.pageList["page-inQPw"] = new pageinQPw();
        this.pageList["page-inQId"] = new pageinQId();
        this.pageList["page-main"] = new PageMain();
       
        //메인

        //하단 4개
        this.pageList["page-event"] = new pageevent();
        this.pageList["page-copon"] = new Pagecopon();
        this.pageList["page-order"] = new pageorder();
        this.pageList["page-orderlest"] = new pageorderlest();
        // 리뷰
        this.pageList["page-Review"] = new PageReview();
        this.pageList["page-ReviewInfo"] = new PageReviewInfo();
        this.pageList["page-ReviewWrite"] = new PageReviewWrite();
        this.pageList["page-RevieWriteReply"] = new PageRevieWriteReply();
        this.pageList["page-ReviewModify"] = new PageReviewModify();
        //푸터
        this.pageList["Page-Footer"] = new PageFooter();
       
    }
    changePage(pageName, data) {
        //console.log(pageName)
        this.pageList[pageName].execute(data);
    }

}