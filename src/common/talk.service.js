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


