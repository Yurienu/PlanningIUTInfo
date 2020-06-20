/**
 * This file is part of ADE Planning Viewer.
 * Copyright © 2012-2015 Julien Papasian
 *
 * ADE Planning Viewer is free software; you can redistribute it and/or
 * modify it under the terms of the Affero General Public License
 * as published by Affero; either version 3 of the License, or (at
 * your option) any later version.
 *
 * ADE Planning Viewer is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * Affero General Public License for more details.
 *
 * You should have received a copy of the Affero General Public
 * License along with this program. If not, see
 * <https://www.gnu.org/licenses/agpl-3.0.html>.
 */

/**
 * Gestion des écouteurs
 */
// Sélecteur de groupe
let select_idTree = document.getElementById("idTree");
if (select_idTree) {
    if (select_idTree.addEventListener) {
        select_idTree.addEventListener('change', submitForm, false);
    } else {
        select_idTree.attachEvent('onchange', submitForm);
    }
}

// Sélecteur de semaine
let select_idPianoWeek = document.getElementById("idPianoWeek");
if (select_idPianoWeek) {
    if (select_idPianoWeek.addEventListener) {
        select_idPianoWeek.addEventListener('change', submitForm, false);
    } else {
        select_idPianoWeek.attachEvent('onchange', submitForm);
    }
}

// Bouton de semaine précédente
let button_previous_week = document.getElementById("previous_week");
if (button_previous_week) {
    if (button_previous_week.addEventListener) {
        button_previous_week.addEventListener('click', go_previous_week, false);
    } else {
        button_previous_week.attachEvent('onclick', go_previous_week);
    }
}

// Bouton de semaine suivante
let button_next_week = document.getElementById("next_week");
if (button_next_week) {
    if (button_next_week.addEventListener) {
        button_next_week.addEventListener('click', go_next_week, false);
    } else {
        button_next_week.attachEvent('onclick', go_next_week);
    }
}

// Checkbox de samedi
let input_saturday = document.getElementById("saturday");
if (input_saturday) {
    if (input_saturday.addEventListener) {
        input_saturday.addEventListener('change', submitForm, false);
    } else {
        input_saturday.attachEvent('onchange', submitForm);
    }
}

// Checkbox de dimanche
let input_sunday = document.getElementById("sunday");
if (input_sunday) {
    if (input_sunday.addEventListener) {
        input_sunday.addEventListener('change', submitForm, false);
    } else {
        input_sunday.attachEvent('onchange', submitForm);
    }
}

// Sélecteur d’affichage
let select_displayConfId = document.getElementById("displayConfId");
if (select_displayConfId) {
    if (select_displayConfId.addEventListener) {
        select_displayConfId.addEventListener('change', submitForm, false);
    } else {
        select_displayConfId.attachEvent('onchange', submitForm);
    }
}

// Sélecteur de dimensions
let select_width = document.getElementById("width");
if (select_width) {
    if (select_width.addEventListener) {
        select_width.addEventListener('change', submitForm, false);
    } else {
        select_width.attachEvent('onchange', submitForm);
    }
}

// Image
let img_planning = document.getElementById("img_planning");
if (img_planning) {
    img_planning.onerror = function () {
        img_planning.onerror = null;
        img_planning.src = 'img/error.png';
    };
    img_planning.onabort = function () {
        img_planning.src = 'img/error.png';
    };
}

// Lien sur l'image pour recharger si besoin
let href_planning = document.getElementById("href_planning");
if (href_planning) {
    href_planning.addEventListener('click', reloadImage);
}

// Bouton iCal
let ical_button = document.getElementById("genbutton");
if (ical_button) {
    if (ical_button.addEventListener) {
        ical_button.addEventListener('click', showiCal, false);
    } else {
        ical_button.attachEvent('onclick', showiCal);
    }
}