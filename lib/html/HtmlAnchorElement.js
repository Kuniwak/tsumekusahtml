// This script licensed under the MIT.
// http://orgachem.mit-license.org

/**
 * @fileoverview A class for anchor elements.
 * @author orga.chem.job@gmail.com (OrgaChem)
 */


var basePath = '../../lib';
var HtmlElement = require(basePath + '/html/HtmlElement');

var tsumekusa = require('tsumekusa');
var util = tsumekusa.util;



/**
 * A class for anchor elements.
 * @param {string} content Link text.
 * @param {string} href Hyper text reference attribute value.
 * @constructor
 * @extends {module:lib/html/HtmlElement}
 * @exports lib/html/AnchorElement
 */
var HtmlAnchorElement = function(content, href) {
  HtmlElement.call(this, 'a', false, content);
  this.setAttribute('href', href);
};
util.inherits(HtmlAnchorElement, HtmlElement);


// Exports the constructor.
module.exports = HtmlAnchorElement;
