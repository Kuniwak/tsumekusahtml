// This script licensed under the MIT.
// http://orgachem.mit-license.org


var basePath = '../lib';
var defProp = Object.defineProperty;


/**
 * Element publisher map.
 * @exports tsumekusahtml
 */
module.exports = {


  /**
   * An alias for HTML code publishers.
   * @type {module:lib/HtmlCodePublisher}
   */
  get CODE() {
    defProp(this, 'CODE', {
      value: require(basePath + '/HtmlCodePublisher').getInstance()
    });
    return this.CODE;
  },


  /**
   * An alias for HTML container publishers.
   * @type {module:lib/HtmlContainerPublisher}
   */
  get CONTAINER() {
    defProp(this, 'CONTAINER', {
      value: require(basePath + '/HtmlContainerPublisher').getInstance()
    });
    return this.CONTAINER;
  },


  /**
   * An alias for HTML definition publishers.
   * @type {module:lib/HtmlDefinitionPublisher}
   */
  get DEFINITION() {
    defProp(this, 'DEFINITION', {
      value: require(basePath + '/HtmlDefinitionPublisher').getInstance()
    });
    return this.DEFINITION;
  },


  /**
   * An alias for HTML definition list publishers.
   * @type {module:lib/HtmlDefinitionListPublisher}
   */
  get DEFINITION_LIST() {
    defProp(this, 'DEFINITION_LIST', {
      value: require(basePath + '/HtmlDefinitionListPublisher').getInstance()
    });
    return this.DEFINITION_LIST;
  },


  /**
   * An alias for HTML ducument publishers.
   * @type {module:lib/HtmlDodumentPublisher}
   */
  get DOCUMENT() {
    defProp(this, 'DOCUMENT', {
      value: require(basePath + '/HtmlDocumentPublisher').getInstance()
    });
    return this.DOCUMENT;
  },


  /**
   * An alias for HTML element array publishers.
   * @type {module:lib/HtmlElementArrayPublisher}
   */
  get ELEMENT_ARRAY() {
    defProp(this, 'ELEMENT_ARRAY', {
      value: require(basePath + '/HtmlElementArrayPublisher').getInstance()
    });
    return this.ELEMENT_ARRAY;
  },


  /**
   * An alias for HTML inline code publishers.
   * @type {module:lib/HtmlInlineCodePublisher}
   */
  get INLINE_CODE() {
    defProp(this, 'INLINE_CODE', {
      value: require(basePath + '/HtmlInlineCodePublisher').getInstance()
    });
    return this.INLINE_CODE;
  },


  /**
   * An alias for HTML link publishers.
   * @type {module:lib/HtmlLinkPublisher}
   */
  get LINK() {
    defProp(this, 'LINK', {
      value: require(basePath + '/HtmlLinkPublisher').getInstance()
    });
    return this.LINK;
  },


  /**
   * An alias for HTML list publishers.
   * @type {module:lib/HtmlListPublisher}
   */
  get LIST() {
    defProp(this, 'LIST', {
      value: require(basePath + '/HtmlListPublisher').getInstance()
    });
    return this.LIST;
  },


  /**
   * An alias for HTML list item publishers.
   * @type {module:lib/HtmlListItemPublisher}
   */
  get LIST_ITEM() {
    defProp(this, 'LIST_ITEM', {
      value: require(basePath + '/HtmlListItemPublisher').getInstance()
    });
    return this.LIST_ITEM;
  },


  /**
   * An alias for HTML paragraph publishers.
   * @type {module:lib/HtmlParagraphPublisher}
   */
  get PARAGRAPH() {
    defProp(this, 'PARAGRAPH', {
      value: require(basePath + '/HtmlParagraphPublisher').getInstance()
    });
    return this.PARAGRAPH;
  },


  /**
   * An alias for HTML preformatted paragraph publishers.
   * @type {module:lib/HtmlPreformattedParagraphPublisher}
   */
  get PREFORMATTED_PARAGRAPH() {
    defProp(this, 'PREFORMATTED_PARAGRAPH', {
      value: require(basePath + '/HtmlPreformattedParagraphPublisher').
          getInstance()
    });
    return this.PREFORMATTED_PARAGRAPH;
  },


  /**
   * An alias for HTML strong publishers.
   * @type {module:lib/HtmlStrongPublisher}
   */
  get STRONG() {
    defProp(this, 'STRONG', {
      value: require(basePath + '/HtmlStrongPublisher').getInstance()
    });
    return this.STRONG;
  },


  /**
   * Utilities for tsumekusahtml.
   * @namespace
   * @exports tsumekusahtml.util
   */
  util: {


    /**
     * An alias for a simple implemenation for HTML elements.
     * @type {module:lib/html/HtmlElement}
     */
    get HtmlElement() {
      defProp(this, 'STRONG', {
        value: require(basePath + '/html/HtmlElement').getInstance()
      });
      return this.STRONG;
    },


    /**
     * An alias for a simple implemenation for HTML anchor elements.
     * @type {module:lib/html/HtmlAnchorElement}
     */
    get HtmlAnchorElement() {
      defProp(this, 'STRONG', {
        value: require(basePath + '/html/HtmlAnchorElement').getInstance()
      });
      return this.STRONG;
    }
  }
};
