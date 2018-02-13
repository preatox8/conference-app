import $ from 'jquery'

export default class Views {

    constructor(tkservice){
        this.tkservice = tkservice;
    }
 
    render(idView, idNav, idFooter, idHeader){
            const menu  =  '<img src="./images/acateland.jpg" alt="image"height="100" width="100">';
            $(idHeader).html(menu);
    }
}   