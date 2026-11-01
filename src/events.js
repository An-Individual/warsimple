import { ElementCatalog } from "./elementcatalog.js";
import { ScoreManager } from "./scoremanager.js";

/**
 * Hooks up the UI events that call the Score Manager,
 * which will notify the Renderer to update the UI
 * if changes are made. This is the Controller part
 * of our Model View Controller.
 */
export class Events {
    static Initialise() {
        ElementCatalog.Initialise();

        Events.AttachSideRoundSelectorEvents();
        Events.AttachScoreSummaryEvents();
        Events.AttachArrowEvents();
        Events.AttachNewGameEvents();
    }

    static AttachSideRoundSelectorEvents() {
        ElementCatalog.roundSideElems[1].onclick = function() {
            ScoreManager.SetRound(1);
        }

        ElementCatalog.roundSideElems[2].onclick = function() {
            ScoreManager.SetRound(2);
        }

        ElementCatalog.roundSideElems[3].onclick = function() {
            ScoreManager.SetRound(3);
        }

        ElementCatalog.roundSideElems[4].onclick = function() {
            ScoreManager.SetRound(4);
        }

        ElementCatalog.roundSideElems[5].onclick = function() {
            ScoreManager.SetRound(5);
        }

        ElementCatalog.roundSideElems[6].onclick = function() {
            ScoreManager.SetRound(6);
        }
    }

    static AttachScoreSummaryEvents() {
        ElementCatalog.roundSummaryElems[1].onclick = function() {
            ScoreManager.SetRound(1);
        }

        ElementCatalog.roundSummaryElems[2].onclick = function() {
            ScoreManager.SetRound(2);
        }

        ElementCatalog.roundSummaryElems[3].onclick = function() {
            ScoreManager.SetRound(3);
        }

        ElementCatalog.roundSummaryElems[4].onclick = function() {
            ScoreManager.SetRound(4);
        }

        ElementCatalog.roundSummaryElems[5].onclick = function() {
            ScoreManager.SetRound(5);
        }

        ElementCatalog.roundSummaryElems[6].onclick = function() {
            ScoreManager.SetRound(6);
        }
    }

    static AttachArrowEvents() {
        ElementCatalog.currentPrimaryAdjusterElem.onclick = function(e) {
            let elemArea = ElementCatalog.currentPrimaryAdjusterElem.getBoundingClientRect();
            let xLoc = e.clientX - elemArea.left;
            if (xLoc < elemArea.width/2) {
                ScoreManager.IncrementPrimary(-1);
            } else {
                ScoreManager.IncrementPrimary(1);
            }
        }

        ElementCatalog.currentSecondaryAdjusterElem.onclick = function(e) {
            let elemArea = ElementCatalog.currentSecondaryAdjusterElem.getBoundingClientRect();
            let xLoc = e.clientX - elemArea.left;
            if (xLoc < elemArea.width/2) {
                ScoreManager.IncrementSecondary(-1);
            } else {
                ScoreManager.IncrementSecondary(1);
            }
        }

        ElementCatalog.cpAdjusterElem.onclick = function(e) {
            let elemArea = ElementCatalog.cpAdjusterElem.getBoundingClientRect();
            let yLoc = e.clientY - elemArea.top;
            if (yLoc < elemArea.height/2) {
                ScoreManager.IncrementCP(1);
            } else {
                ScoreManager.IncrementCP(-1);
            }
        }
    }

    static AttachNewGameEvents() {
        ElementCatalog.newGameButtonElem.onclick = function() {
            ElementCatalog.modalOverlayElem.style.display = "block";
            ElementCatalog.newGameMenuElem.style.display = "block";
        }

        ElementCatalog.newGameYesElem.onclick = function() {
            ScoreManager.ClearData();
            ElementCatalog.modalOverlayElem.style.display = "none";
            ElementCatalog.newGameMenuElem.style.display = "none";
        }

        ElementCatalog.newGameNoElem.onclick = function() {
            ElementCatalog.modalOverlayElem.style.display = "none";
            ElementCatalog.newGameMenuElem.style.display = "none";
        }
    }
}