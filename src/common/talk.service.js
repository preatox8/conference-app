module.exports = class TalkService { 
    constructor() {
        this.mapSpeakers = new Map();
    }

    findAllSpeakers() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(mapSpeakers);                
                reject("Speakers map not found");
            }, 2000);
        });
    }

}

const req = new XMLHttpRequest();
rep.open('GET', 'http://localhost:3000/speakers', true);
req.onreadystatechange = (aEvt) => {
    if(req.readyState == 4) {
        if(req.status == 200)
            req.responseText;
        else
            throw "Erreur pendant le chargement de la page";
    }
};
req.send(null);

function findAllSpeakers(value) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const req = new XMLHttpRequest();
            req.open('GET', url, true);
            req.onreadystatechange = (aEvt) => {
                if (req.readyState == 4) {
                    if (req.status == 200)
                        resolve(JSON.parse(req.responseText));
                    else (reject("Erreur pendant le chargement de la page"))
                }
            };
            req.send(null)
        }, 3000)
    })
}


    
   

