import { ScoreManager } from "./scoremanager.js";
import { Renderer } from "./renderer.js";
import { Events } from "./events.js";
import { DataManager } from "./datamanager.js";

async function initialize() {
    try {
        Renderer.Initialise();
        ScoreManager.Initialize();
        ScoreManager.AddListener(Renderer.OnChange);
        ScoreManager.NotifyListeners();
        ScoreManager.AddListener(DataManager.SaveData);
        Events.Initialise();
    } catch (error) {
        alert(error);
        throw error;
    }
}

document.addEventListener("DOMContentLoaded", async (event) => {
	await initialize();
});

// Attempt to lock the orientation because iOS will ignore
// the manifest's attempt to stop it. Solution from
// https://stackoverflow.com/questions/5298467/prevent-orientation-change-in-ios-safari.
window.addEventListener('orientationchange', function () {
    if (window.orientation == -90) {
        document.getElementById('orient').className = 'orientright';
    }
    if (window.orientation == 90) {
        document.getElementById('orient').className = 'orientleft';
    }
    if (window.orientation == 0) {
        document.getElementById('orient').className = '';
    }
}, true);