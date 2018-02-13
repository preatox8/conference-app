import $ from 'jquery'

export default class SpeakerList {

    constructor(tkservice){
        this.tkservice = tkservice;
    }

    
    render(idView){
    
        this.tkservice.findAllSpeakers()
        .then((speakers) => {
            const htmlString = '<ul>' + speakers.map(speaker => '<li>'+speaker.firstname+'</li>').join('') + '</ul>'
            $(idView).html(htmlString)
           
            }
        );
    }
}   