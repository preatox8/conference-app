import $ from 'jquery'

export default class SpeakerList {

    constructor(tkservice){
        this.tkservice = tkservice;
    }

    
    render(idView, idHeader, idNav){
    
        this.tkservice.findAllSpeakers()
        .then((speakers) => {
            const htmlString = '<ul style="list-style-type: none;">'+ speakers.map(speaker => '<li style="padding: 5px;">  <a href="#speaker-detail">'+speaker.lastname+' '+speaker.firstname+'</a></li>').join('') + '</ul>'
            const header = '';
            $(idView).html(htmlString)
            $(idHeader).html(header);
            }
        );
    }

    renderspeaker(idSpeaker){
        
    };
}   