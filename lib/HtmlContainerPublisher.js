// This script licensed under the MIT.
// http://orgachem.mit-license.org


/**
 * @fileoverview A singleton class for container publishers for html.
 * @author orga.chem.job@gmail.com (OrgaChem)
 */


var basePath = '../lib';
var HtmlElement = require(basePath + '/html/HtmlElement');

var tsumekusa = require('tsumekusa');
var util = tsumekusa.util;
var ContainerPublisher = tsumekusa.DefaultPublishers.CONTAINER.constructor;



/**
 * A singleton class for container publishers for html.
 * @constructor
 * @extends {module:tsumekusa/lib/publishing/ContainerPublisher}
 * @exports lib/publishing/HtmlContainerPublisher
 */
var HtmlContainerPublisher = function() {
  ContainerPublisher.call(this);
  this.setDisplayWidth(Number.MAX_VALUE);
};
util.inherits(HtmlContainerPublisher, ContainerPublisher);
util.addSingletonGetter(HtmlContainerPublisher);


/** @override */
HtmlContainerPublisher.prototype.publishHeader = function(content) {
  return this.createHeaderDom(content).toString();
};


/**
 * Creates a html header element.  Override if you want to add an attribute such
 * as 'class'.
 * @param {module:tsumekusa.Container} container Elements container.
 * @return {module:lib/html/HtmlElement} Html header element.
 */
HtmlContainerPublisher.prototype.createHeaderDom = function(container) {
  var caption = container.getCaption();
  var tagName = 'h' + (container.getDepth() + 1);
  var header = new HtmlElement(tagName, false, caption);

  var ref = container.getReference(), refID;
  if (refId = ref.getReferenceId()) {
    header.setAttribute('id', refId);
  }
  return header;
};


/** @override */
HtmlContainerPublisher.prototype.getSubContainerSeparator = function(
    container) {
  return this.createSubContainerSeparatorDom(container).toString();
};


HtmlContainerPublisher.prototype.createSubContainerSeparatorDom = function(
    container) {
  return new HtmlElement('hr', true);
};



// Export the constructor.
module.exports = HtmlContainerPublisher;
