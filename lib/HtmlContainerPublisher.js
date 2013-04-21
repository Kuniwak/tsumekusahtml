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


/** @override */
HtmlContainerPublisher.prototype.publishSubContainers = function(container) {
  var subContainersStrings = this.publishSubContainersInternal(container);

  if (subContainersStrings) {
    return subContainersStrings.join('');
  }
  else {
    return null;
  }
};


/** @override */
HtmlContainerPublisher.prototype.publish = function(elem) {
  var output = [], outputIdx = 0;

  var header;
  if (header = this.publishHeader(elem)) {
    output[outputIdx++] = header;
  }

  var topElements;
  if (topElements = this.publishTopElements(elem)) {
    output[outputIdx++] = topElements;
  }

  var subContainers;
  if (subContainers = this.publishSubContainers(elem)) {
    output[outputIdx++] = subContainers;
  }

  var footer;
  if (footer = this.publishFooter(elem)) {
    output[outputIdx++] = footer;
  }

  return output.join('');
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



// Export the constructor.
module.exports = HtmlContainerPublisher;
