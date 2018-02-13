import $ from 'jquery'

export default class SessionsList {

    constructor(tkservice){
        this.tkservice = tkservice;
    }

    
    render(idView, idHeader, idNav){
    
        this.tkservice.findAllSessions()
        .then((sessions) => {
            const htmlString = '<ul style="list-style-type: none;">' + sessions.map(session => '<li style="padding: 5px;"> <a href="#session-detail">'+session.title+'</a> </li>').join('') + '</ul>'
            const header = '';
            $(idHeader).html(header);
            $(idView).html(htmlString);
            }
        );
    }

    rendersession(idSession){
        
    };
}   