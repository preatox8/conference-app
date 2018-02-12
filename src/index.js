import { resolve } from "url";

alert('Conférence App démarré !');

/ Service TalkService
var tkservice = require('./common/talk.service.js');

tkservice.TalkService().forEach(element => {
    console.log("Présentateur :", element.firstname + " " + element.lastname);
});
