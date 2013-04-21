// This script licensed under the MIT.
// http://orgachem.mit-license.org


var basePath = '../lib';
var defProp = Object.defineProperty;


/**
 * Element publisher map.
 * @enum {function(new:tsumekusa.publishing.IElementPublisher)}
 * @exports tsumekusahtml
 */
module.exports = {
  /** Publisher for codes. */
  get CODE() {
    defProp(this, 'CODE', {
      value: require(basePath + '/HtmlCodePublisher').getInstance()
    });
    return this.CODE;
  },
  /** Publisher for containers. */
  get CONTAINER() {
    defProp(this, 'CONTAINER', {
      value: require(basePath + '/HtmlContainerPublisher').getInstance()
    });
    return this.CONTAINER;
  },
  /** Publisher for definitions. */
  get DEFINITION() {
    defProp(this, 'DEFINITION', {
      value: require(basePath + '/HtmlDefinitionPublisher').getInstance()
    });
    return this.DEFINITION;
  },
  /** Publisher for definition lists. */
  get DEFINITION_LIST() {
    defProp(this, 'DEFINITION_LIST', {
      value: require(basePath + '/HtmlDefinitionListPublisher').getInstance()
    });
    return this.DEFINITION_LIST;
  },
  /** Publisher for documents. */
  get DOCUMENT() {
    defProp(this, 'DOCUMENT', {
      value: require(basePath + '/HtmlDocumentPublisher').getInstance()
    });
    return this.DOCUMENT;
  },
  /** Publisher for element arrays. */
  get ELEMENT_ARRAY() {
    defProp(this, 'ELEMENT_ARRAY', {
      value: require(basePath + '/HtmlElementArrayPublisher').getInstance()
    });
    return this.ELEMENT_ARRAY;
  },
  /** Publisher for inline codes. */
  get INLINE_CODE() {
    defProp(this, 'INLINE_CODE', {
      value: require(basePath + '/HtmlInlineCodePublisher').getInstance()
    });
    return this.INLINE_CODE;
  },
  /** Publisher for links. */
  get LINK() {
    defProp(this, 'LINK', {
      value: require(basePath + '/HtmlLinkPublisher').getInstance()
    });
    return this.LINK;
  },
  /** Publisher for lists. */
  get LIST() {
    defProp(this, 'LIST', {
      value: require(basePath + '/HtmlListPublisher').getInstance()
    });
    return this.LIST;
  },
  /** Publisher for list items. */
  get LIST_ITEM() {
    defProp(this, 'LIST_ITEM', {
      value: require(basePath + '/HtmlListItemPublisher').getInstance()
    });
    return this.LIST_ITEM;
  },
  /** Publisher for paragraphs. */
  get PARAGRAPH() {
    defProp(this, 'PARAGRAPH', {
      value: require(basePath + '/HtmlParagraphPublisher').getInstance()
    });
    return this.PARAGRAPH;
  },
  /** Publisher for preformatted paragraphs. */
  get PREFORMATTED_PARAGRAPH() {
    defProp(this, 'PREFORMATTED_PARAGRAPH', {
      value: require(basePath + '/HtmlPreformattedParagraphPublisher').
          getInstance()
    });
    return this.PREFORMATTED_PARAGRAPH;
  },
  /** Publisher for strongs. */
  get STRONG() {
    defProp(this, 'STRONG', {
      value: require(basePath + '/HtmlStrongPublisher').getInstance()
    });
    return this.STRONG;
  }
};
