import TalkService from './common/talk.service';
import Layout from './layout/index';
import SpeakerList from './speakers/list/index';
import SessionsList from './sessions/list/index';
import Views from './views/index';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';

const tkservice = new TalkService();
const layout = new Layout();
const speakerlist = new SpeakerList(tkservice);
const sessionlist = new SessionsList(tkservice);
const view = new Views(tkservice);
const idView = "#main-view";
const idHeader = "#headerhtml";
const idNav = "#navhtml";


layout.render();
var router = () => {
    if (location.hash == '#speakers-list') {
        speakerlist.render(idView, idHeader, idNav);
    } else if (location.hash == '#sessions-list') {
        sessionlist.render(idView, idHeader, idNav);
    } else if(location.hash == '#speaker-detail'){
        speakerlist.renderspeaker();
    }
}

window.addEventListener('load', () => {
    window.onhashchange = () => {
        router();
    };
    router();
});
