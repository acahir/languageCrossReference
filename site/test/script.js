document.addEventListener('DOMContentLoaded', function() {
    // DEBUG
    // preset menus and vars for repeated reloads while developing
    var menu2 = document.getElementById('column2-select');
    menu2.value = 'swift';
    selectChange(menu2);
    
    var menu3 = document.getElementById('column3-select');
    menu3.value = 'dart';
    selectChange(menu3);
    
}, false);



function selectChange(element) {
  let root = document.documentElement;
  
  var newSelectedLanguage = element.value;
  var selectedColumn = element.name;
  
  // TODO - change storage of what language is currently displayed in a column
  //        to html data attribute, insted of unused css variable. 
  // TODO - handle "none" option in select menus?
  
  // create css variable names
  var langVisibilityVariableName = '--' + element.value + '-visibility';
  var langColumnPropertyName = '--' + element.value + '-column';
  var columnLanguagePropertyName = '--column' + element.name;
  
  // cleanup from previous settings
  var menus = document.getElementsByTagName('select');
  for (menu of menus) {
    // clear any prev lang in current column
    if (menu == element) {
      var prevLanguage = root.style.getPropertyValue(columnLanguagePropertyName).trim();

      if (prevLanguage != '') {
        var prevLanguageVisibilityVariableName = '--' + prevLanguage + '-visibility';
        root.style.setProperty(prevLanguageVisibilityVariableName, 'none');
      }
      continue;
    }
    
    // clean up previous location, if currently displayed
    if (menu.value === element.value) {
      var prevColumnLanguagePropertyName = '--column' + menu.name;
      root.style.setProperty(prevColumnLanguagePropertyName, '');
      
      menu.value = '';
    }
  }
  
  // set variables for new selection 
  root.style.setProperty(langVisibilityVariableName, 'block');
  root.style.setProperty(langColumnPropertyName, element.name);
  root.style.setProperty(columnLanguagePropertyName, element.value);
}	

  document.getElementById('column2-select').onchange = function() {
		selectChange(this);
	}
  document.getElementById('column3-select').onchange = function() {
    selectChange(this);
	}
//   document.getElementById('column4-select').onchange = function() {
// 		selectChange(this);
// 	}


document.addEventListener('click', function (event) {
	// handle all show/hide button click events
	if (event.target.classList.contains('section-hide')) {
		showHide(event.target);
	}
}, false);

function showHide(target) {
	var sectionName = target.value;
	var classList = 'lang ' + sectionName;

	var elements = document.getElementsByClassName(classList);
	for (e of elements) {
		e.classList.toggle('collapsed'); 
	}
	target.innerHTML = target.innerHTML == 'Hide' ? 'Show' : 'Hide';
}
