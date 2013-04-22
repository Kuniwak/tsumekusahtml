// This script licensed under the MIT.
// http://orgachem.mit-license.org

/**
 * @fileoverview A class for simple implemenations of an element.
 * @author orga.chem.job@gmail.com (OrgaChem)
 */



/**
 * A class for simple implemenations of an element.
 * @param {string} tagName HTML tag name such as {@code DIV}.
 * @param {?boolean=} opt_unuseEndTag Whether an end tag is unnecessary.
 * @param {?string=} opt_content Optional content.
 * @constructor
 * @exports lib/html/HtmlElement
 */
var HtmlElement = function(tagName, opt_unuseEndTag, opt_content) {
  this.tagName = tagName;
  this.attrMap_ = new HtmlElement.AttributeMap();
  this.endTag_ = !opt_unuseEndTag;
  this.childElements = opt_content ? [opt_content] : [];
  this.childElementsCount_ = 0;
};


/**
 * Elements of the children.
 * @type {Array.<string|module:lib/html/HtmlElement>}
 */
HtmlElement.prototype.childElements = null;


/**
 * Count of child elements.
 * @type {number}
 * @private
 */
HtmlElement.prototype.childElementsCount_ = null;


/**
 * Html attribute map.
 * @type {module:lib/html/HtmlElement.AttributeMap}
 * @private
 */
HtmlElement.prototype.attrMap_ = null;


/**
 * Whether an end tag is necessary.
 * @type {boolean}
 * @private
 */
HtmlElement.prototype.endTag_ = true;


/**
 * Tag name.
 * @type {string}
 */
HtmlElement.prototype.tagName = null;


/**
 * Adds an element.  This method is chainable.
 * @param {string|module:lib/html/HtmlElement} element Element to add.
 * @return {module:lib/html/HtmlElement} This instance.
 */
HtmlElement.prototype.addElement = function(element) {
  this.childElements.push(element);
  this.childElementsCount_++;
  return this;
};


/**
 * Adds an element at the specified 0-based index.  This method is chainable.
 * @param {string|module:lib/html/HtmlElement} element Element to add.
 * @param {number} index 0-based index.
 * @return {module:lib/html/HtmlElement} This instance.
 */
HtmlElement.prototype.addElementAt = function(element, index) {
  if (index >= 0 && index <= this.childElementsCount_) {
    this.childElements.splice(index, 0, element);
    this.childElementsCount_++;
  }
  return this;
};


/**
 * Removes an element.  This method is chainable.
 * @param {string|module:lib/html/HtmlElement} element Element to remove.
 * @return {string|module:lib/html/HtmlElement|null} Removed element if any.
 */
HtmlElement.prototype.removeElement = function(element) {
  var index = this.childElements.indexOf(element);
  if (index > -1) {
    return this.removeElementAt(element, index);
  }
  return null;
};


/**
 * Removes an element at the specified 0-based index.
 * @param {number} index 0-based index.
 * @return {string|module:lib/html/HtmlElement|null} Removed element if any.
 */
HtmlElement.prototype.removeElementAt = function(index) {
  var removed = null;
  if (index >= 0 && index < this.childElementsCount_) {
    removed = this.childElements.splice(index, 1)[0];
    this.childElementsCount_--;
  }
  return removed;
};


/**
 * Returns an attribute map.
 * @return {module:lib/html/HtmlElement.AttributeMap} Attribute map.
 * @protected
 */
HtmlElement.prototype.getAttributeMap = function() {
  return this.attrMap_;
};


/**
 * Sets an attribute.  This method is chainable.
 * @param {string} key Attribute key.
 * @param {string} val Attribute value.
 * @return {module:lib/html/HtmlElement} This instance.
 */
HtmlElement.prototype.setAttribute = function(key, val) {
  var attr = this.getAttributeMap().set(key, val);
  return this;
};


/**
 * Whether the element has an attribute.
 * @param {string} key Attribute key.
 * @return {boolean} Whether the element has an attribute.
 */
HtmlElement.prototype.hasAttribute = function(key) {
  return this.getAttributeMap().contains(key);
};


/**
 * Returns an attribute map.
 * @param {string} key Attribute key.
 * @return {string} Attribute value.
 */
HtmlElement.prototype.getAttribute = function(key) {
  return this.getAttributeMap().get(key);
};


/**
 * Returns a HTML style string.
 * @return {string} String in HTML style.
 */
HtmlElement.prototype.toString = function() {
  var res = '<' + this.tagName;

  if (this.getAttributeMap().getCount() > 0) {
    res += ' ' + this.getAttributeMap();
  }

  res += '>' + this.childElements.join('');

  if (this.endTag_) {
    res += '</' + this.tagName + '>';
  }

  return res;
};



/**
 * A class for simple implementation of attribute maps.
 * @constructor
 */
HtmlElement.AttributeMap = function() {
  this.map_ = {};
  this.count_ = 0;
};


/**
 * Returns a count of attributes.
 * @return {number} Count of attributes.
 */
HtmlElement.AttributeMap.prototype.getCount = function() {
  return this.count_;
};


/**
 * Sets an attribute.
 * @param {string} key Attribute key.
 * @param {*} val Attribute value.
 */
HtmlElement.AttributeMap.prototype.set = function(key, val) {
  if (!this.contains(key)) {
    this.count_++;
  }
  this.map_[key] = val;
};


/**
 * Returns an attribute.
 * @param {string} key Attribute key to get value.
 * @return {string} Attribute value.
 */
HtmlElement.AttributeMap.prototype.get = function(key) {
  return this.map_[key];
};


/**
 * Whether the attribute is contained.
 * @param {string} key Attribute key to test.
 * @return {boolean} Whether the attribute is contained.
 */
HtmlElement.AttributeMap.prototype.contains = function(key) {
  return key in this.map_;
};


/**
 * Removes an attribute.
 * @param {string} key Attribute key to remove.
 * @return {boolean} Whether the attribute was removed.
 */
HtmlElement.AttributeMap.prototype.remove = function(key) {
  if (this.contains(key)) {
    this.count_--;
    delete this.map_[key];
    return true;
  }
  return false;
};


/**
 * Returns attributes string.  For example, if the map contains 2 keys are
 * {@code foo1} and {@code foo2}, and each values are {@code bar1} and {@code
 * bar2} then returns {@code 'foo1="bar1" foo2="bar2"'}.
 * @return {string} Attributes string.
 */
HtmlElement.AttributeMap.prototype.toString = function() {
  var i = 0;
  var vals = [];
  var val;

  for (var key in this.map_) {
    val = this.map_[key];

    switch (typeof val) {
      case 'string':
      case 'number':
        vals[i++] = key + '="' + val + '"';
        break;
      case 'boolean':
        if (val) {
          vals[i++] = key;
        }
        break;
      default:
        if (val) {
          vals[i++] = key + '="' + val + '"';
        }
        break;
    }
  }

  return vals.join(' ');
};


// Exports the constructor.
module.exports = HtmlElement;
