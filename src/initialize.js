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