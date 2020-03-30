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

function collapseSection(element) {
  // get the height of the element's inner content, regardless of its actual size
  var sectionHeight = element.scrollHeight;
  
  // temporarily disable all css transitions
  var elementTransition = element.style.transition;
  element.style.transition = '';
  
  // on the next frame (as soon as the previous style change has taken effect),
  // explicitly set the element's height to its current pixel height, so we 
  // aren't transitioning out of 'auto'
  requestAnimationFrame(function() {
    element.style.height = sectionHeight + 'px';
    element.style.transition = elementTransition;
    
    // on the next frame (as soon as the previous style change has taken effect),
    // have the element transition to height: 0
    requestAnimationFrame(function() {
      element.style.height = 0 + 'px';
    });
  });
  
  // mark the section as "currently collapsed"
  element.setAttribute('data-collapsed', 'true');
}

function expandSection(element) {
  // get the height of the element's inner content, regardless of its actual size
  var sectionHeight = element.scrollHeight;
  
  // have the element transition to the height of its inner content
  element.style.height = sectionHeight + 'px';

  // when the next css transition finishes (which should be the one we just triggered)
  element.addEventListener('transitionend', function(e) {
    // remove this event listener so it only gets triggered once
    element.removeEventListener('transitionend', arguments.callee);
    
    // remove "height" from the element's inline styles, so it can return to its initial value
    element.style.height = null;
  });
  
  // mark the section as "currently not collapsed"
  element.setAttribute('data-collapsed', 'false');
}

function showHide(target) {	
	var sectionName = target.value;
	var section = document.getElementById(sectionName);
	
	var isCollapsed = section.getAttribute('data-collapsed') === 'true';
	
	if (isCollapsed) {
		expandSection(section)
		section.setAttribute('data-collapsed', 'false');
	} else {
		collapseSection(section);
	}
	
	target.innerHTML = target.innerHTML == 'Hide' ? 'Show' : 'Hide';
}
