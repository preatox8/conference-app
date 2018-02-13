import $ from 'jquery'

export default class SessionsList {

    constructor(tkservice){
        this.tkservice = tkservice;
    }

    
    render(idView){
    
        this.tkservice.findAllSessions()
        .then((sessions) => {
            const htmlString = '<ul>' + sessions.map(session => '<li>'+session.title+'</li>').join('') + '</ul>'
            $(idView).html(htmlString)
            }
        );
    }
}   