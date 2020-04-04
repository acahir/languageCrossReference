# Language Comparison Quick Reference

This repository is the [hugo](https://github.com/gohugoio/hugo) site for a quick reference website for multiple programming languages. It allows different language references to be listed side-by-side to quickly look up syntax for basic functions, similar to a product comparison.

The information covered is not meant to be exhaustive, instead is a quick reference mainly providing quick syntax lookup for those of us that often work in multiple languages or only work in some language infrequently. More details information is provided via external links.

#### Features include
- selectable language 
- expandable/collapsable sections
- light/dark code 
- easy code selection for copy/paste
- lightweight
	- minimal javascript & images
	- responsive design (though single language reference is best on small screens)

#### Planned Features
- print friendly format
- additional languages

### Status

**2020-3-27**
- Completed reference for Swift and Dart
- Completed Basic webpage design

#### Todo
- [x] Modify website design to align sub-sections across languages. Two options:
	- [ ] ~~create additional css grid rows~~
	- [x] use a sub grid and remove separate grid columns for each language
- [x] Transfer design to hugo theme
	- [x] code-wrapper shortcode
	- [x] Build hugo template for comparison page
- [x] Include option for column color in front matter
	- look at css media format output from hugo
  - [x] Controls to choose number of columns
  - [x] Javascript to change number of columns
    - set number of columns/control based on media query when page loads
  - [x] add css columnX declarations to auto-generated css
- [x]	Fix margin bug with "more info" link
- [x] Switch html to use semantic elements
	- main, header, nav, and sections
	- section titles to header tags
- [x] Automatically create select menus from data files available
- [x] Add support for changing to dark mode (color scheme already created)
  - [x] check for problems in header, more info, references, etc in dark mode
- [x] Check Firefox and Chrome
- [x] Clean up repetitive CSS for top nav "buttons"
- [x] Pull down menu with links to sections?
- [x] Filter out data files with "template" in filename
- [x] Complete reference for Dart
- [x] Complete reference for python
- [ ] Additional languages (not started)
	- [ ] Javascript
	- [ ] Perl
- [ ] Change about link to be pulled from front matter param
- [ ] Update readme to document actual usage and design decisions
- [x] Use hugo pipes for assets
- [ ] Add column language selection to local storage for persistance?
  - could cause problems if became out of sync with current numColumns
    - only load/save on page load/close?

### Feedback and Suggestions

If you come across any errors or want to add missing information or additional languages, please submit pull requests. Overall