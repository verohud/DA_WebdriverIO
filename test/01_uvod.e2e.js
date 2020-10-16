
describe('Web Czechitas', () => {
    it('se otevře v prohlížeci a počká 5sekund než se prohlížeč zavře', () => {
        // Jdi na adresu https://www.czechitas.cz/cs
        browser.url('https://www.czechitas.cz/cs/');

        // Pockej 5sekund nez provedes dalsi prikaz
        browser.pause(5000)

        // Dalsi prikaz tady momentalne neni, takze po 5sekundach se prohlizec zavre.
        // Exekuce testu skončí a Ty můžeš vidět výsledky testu v terminálu.

        // Zde pak můžeš přidat další příkazy
        // Zkus například tyto dva příkazy odkomentovat a spustit npm test znovu - co se stane?
        // browser.maximizeWindow()
        // browser.pause(5000)
    });
});
