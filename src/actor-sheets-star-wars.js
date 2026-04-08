/**
 * Star Wars character sheet themes for od6s.
 * These extend the base OD6SActorSheet with custom templates.
 */

// Import the base sheet class from the od6s system
// This path works when the module is installed in modules/ alongside systems/
import { OD6SActorSheet } from "../../../systems/od6s/module/actor/actor-sheet.js";

const MOD_ID = 'starwarsd6-essentialcompanion-od6s';

export class ActorSheetStarWars extends OD6SActorSheet {
    static DEFAULT_OPTIONS = foundry.utils.mergeObject(
        OD6SActorSheet.DEFAULT_OPTIONS,
        { classes: ["od6s", "sheet", "actor", "star-wars-2e"] },
        { inplace: false }
    );

    static PARTS = {
        sheet: {
            template: `modules/${MOD_ID}/templates/actor-sheet-tan.html`,
            scrollable: [".sheet-body"]
        }
    };
}

export class ActorSheetStarW1e extends OD6SActorSheet {
    static DEFAULT_OPTIONS = foundry.utils.mergeObject(
        OD6SActorSheet.DEFAULT_OPTIONS,
        { classes: ["od6s", "sheet", "actor", "star-wars-1e"] },
        { inplace: false }
    );

    static PARTS = {
        sheet: {
            template: `modules/${MOD_ID}/templates/actor-sheet-white.html`,
            scrollable: [".sheet-body"]
        }
    };
}
