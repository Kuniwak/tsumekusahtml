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
HtmlContainerPublisher.prototype.publishSubContainers = function(element) {
  var subContainersStrings = this.publishSubContainersInternal(element);

  if (subContainersStrings) {
    return subContainersStrings.join('');
  }
  else {
    return null;
  }
};


/**
 * Publish a container element.
 * Published HTML structure is (HAML):
 * <pre>
 * %div
 *   %section= TopBlockElements
 *   %div = SubContainerElements
 * </pre>
 * @param {module:tsumekusa.Container} element Tsumekusa element to publish.
 * @return {string} Published string.
 * @override
 */
HtmlContainerPublisher.prototype.publish = function(element) {
  var output = [], outputIndex = 0;
  var section = [], sectionIndex = 0;

  var header;
  if (header = this.publishHeader(element)) {
    section[sectionIndex++] = header;
  }

  var topElements;
  if (topElements = this.publishTopElements(element)) {
    section[sectionIndex++] = topElements;
  }

  if (sectionIndex > 0) {
    output[outputIndex++] = this.createSectionDom(element, section.join(''));
  }

  var subContainers;
  if (subContainers = this.publishSubContainers(element)) {
    output[outputIndex++] = this.createSubSectionDom(element, subContainers);
  }

  var footer;
  if (footer = this.publishFooter(element)) {
    output[outputIndex++] = footer;
  }

  return this.createContainerDom(element, output.join('')).toString();
};


/**
 * Creates a HTML element wrapping contents in this container.
 * @param {module:tsumekusa.Container} element Tsumekusa element.
 * @param {string} contents Contents as this container is wrapped by the created
 *     element.
 * @return {module:lib/html/HtmlElement} HTML element wrapping contents.
 */
HtmlContainerPublisher.prototype.createContainerDom = function(element,
    contents) {
  return new HtmlElement('div', false, contents);
};


/**
 * Creates a HTML element wrapping top contents in this container.
 * @param {module:tsumekusa.Container} element Tsumekusa element.
 * @param {string} contents Top contents is wrapped by the created element.
 * @return {module:lib/html/HtmlElement} HTML element wrapping contents.
 */
HtmlContainerPublisher.prototype.createSectionDom = function(element,
    contents) {
  var section = new HtmlElement('div', false, contents);

  var ref = element.getReference(), refID;
  if (refId = ref.getReferenceId()) {
    section.setAttribute('id', refId);
  }
  return section;
};


/**
 * Creates a HTML element wrapping top contents in this container.
 * @param {module:tsumekusa.Container} element Tsumekusa element.
 * @param {string} contents Contents as the sub containers is wrapped by the
 *     created element.
 * @return {module:lib/html/HtmlElement} HTML element wrapping contents.
 */
HtmlContainerPublisher.prototype.createSubSectionDom = function(element,
    contents) {
  return new HtmlElement('div', false, contents);
};


/**
 * Creates a HTML header element.  Override if you want to add an attribute such
 * as 'class'.
 * @param {module:tsumekusa.Container} element Tsumekusa element.
 * @return {module:lib/html/HtmlElement} HTML header element.
 */
HtmlContainerPublisher.prototype.createHeaderDom = function(element) {
  var caption = element.getCaption();
  var tagName = 'h' + (element.getDepth() + 1);
  var header = new HtmlElement(tagName, false, caption);
  return header;
};



// Export the constructor.
module.exports = HtmlContainerPublisher;
