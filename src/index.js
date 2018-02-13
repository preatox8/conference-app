import TalkService from './common/talk.service'
import Layout from './layout/index'
import SpeakerList from './speakers/list/index'
import SessionsList from './sessions/list/index'

const tkservice = new TalkService();
const layout = new Layout();
const speakerlist = new SpeakerList(tkservice);
const sessionlist = new SessionsList(tkservice);
const idView = "#main-view";


alert('Conférence App démarré !');
layout.render();

var router = () => {
    if (location.hash == '#speakers-list') {
        speakerlist.render(idView);
    } else if (location.hash == '#sessions-list') {
        sessionlist.render(idView);
    } else {
        layout.render();
    }
}

window.addEventListener('load', () => {
    window.onhashchange = () => {
        router();
    };
    router();
});
