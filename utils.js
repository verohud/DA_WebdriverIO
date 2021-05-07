// zde napis funkci ktera se jmenuje showPageInfo

function showPageInfo(){            //funkce, ktera neprijima zadne parametry. Kdyz ji zavolam, ona zjisti z prohlizece aktualni URL a title

    let actualURL = browser.getUrl();
    let actualTitle = browser.getTitle();

    console.log("URL "+ actualURL)
    console.log("Title "+ actualTitle)
}

// export te funkce, aby dalsi soubory mohly danou funkci videt a pouzit
module.exports = { showPageInfo }