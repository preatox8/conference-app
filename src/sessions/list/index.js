import $ from 'jquery'

export default class SessionsList {

    constructor(tkservice){
        this.tkservice = tkservice;
    }

    
    render(idView, idHeader, idNav){
    
        this.tkservice.findAllSessions()
        .then((sessions) => {
            const htmlString = '<ul style="list-style-type: none;">' + sessions.map(session => '<li style="padding: 5px;"> <a href="#">'+session.title+'</a> </li>').join('') + '</ul>'
            const header = '';
            const nav = '<nav id="navhtml" class="navbar navbar-expand-lg navbar-light bg-light"><a class="navbar-brand" href="#sessions-list">Sessions</a> <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation"> <span class="navbar-toggler-icon"></span>  </button>   <div class="collapse navbar-collapse" id="navbarNavAltMarkup">  <div class="navbar-nav">  <a class="nav-item nav-link active" href="#sessions-list">Sessions     <span class="sr-only">(current)</span> </a>    <a class="nav-item nav-link" href="#speakers-list">Présentateurs</a></div></div></nav>';
            $(idHeader).html(header);
            $(idView).html(htmlString);
            $(idNav).html(nav);
            }
        );
    }
}   