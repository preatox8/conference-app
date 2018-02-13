import TalkService from './common/talk.service'
import Layout from './layout/index'
const tkservice = new TalkService();
const layout = new Layout();

alert('Conférence App démarré !');


tkservice.findAllSpeakers()
.then((speakers) => speakers.forEach(speakers => {
    console.log("Présentateur :", speakers.firstname)
}));

tkservice.findAllSessions()
.then((sessions) => sessions.forEach(sessions => {
    console.log("Session :", sessions.title)
}));

layout.render();


