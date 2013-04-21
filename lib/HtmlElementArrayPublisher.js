// This script licensed under the MIT.
// http://orgachem.mit-license.org


/**
 * @fileoverview A class for list publishers for HTML.
 * @author orga.chem.job@gmail.com (OrgaChem)
 */


var basePath = '../lib';
var HtmlElement = require(basePath + '/html/HtmlElement');

var tsumekusa = require('tsumekusa');
var util = tsumekusa.util;
var ElementArrayPublisher = tsumekusa.DefaultPublishers.ELEMENT_ARRAY.
    constructor;


/**
 * A class for element array publishers for HTML.
 * @constructor
 * @extends {module:tsumekusa/lib/publishing/ElementArrayPublisher}
 * @exports lib/HtmlElementArrayPublisher
 */
var HtmlElementArrayPublisher = function() {
  ElementArrayPublisher.call(this);
  this.setDisplayWidth(Number.MAX_VALUE);
};
util.inherits(HtmlElementArrayPublisher, ElementArrayPublisher);
util.addSingletonGetter(HtmlElementArrayPublisher);


/** @override */
HtmlElementArrayPublisher.prototype.publish = function(elemArr) {
  return this.publishForEachChild(elemArr).join('');
};


// Exports the constructor.
module.exports = HtmlElementArrayPublisher;
