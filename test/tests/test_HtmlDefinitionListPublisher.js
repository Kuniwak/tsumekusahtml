// This script licensed under the MIT.
// http://orgachem.mit-license.org


var basePath = '../../lib'
var HtmlPublishers = require(basePath);

var tsumekusa = require('tsumekusa');
var DefinitionList = tsumekusa.DefinitionList;
var ElementArray = tsumekusa.ElementArray;
var Paragraph = tsumekusa.Paragraph;
tsumekusa.registerPublishers(HtmlPublishers);


tsumekusa.Element.prototype.getReference = function() {
  return new tsumekusa.Reference(this.getReferenceId(), 'file_name.html');
};


module.exports = {
  'Publish a no merker definition list': function(test) {
    var defList = new DefinitionList();

    var term1 = new Paragraph('Term1');
    var descs1 = new ElementArray();
    descs1.addChild(new Paragraph('Desc1-1'));
    descs1.addChild(new Paragraph('Desc1-2'));
    defList.addDefinition(term1, descs1);

    var term2 = new Paragraph('Term2');
    var descs2 = new ElementArray();
    descs2.addChild(new Paragraph('Desc2-1'));
    descs2.addChild(new Paragraph('Desc2-2'));
    defList.addDefinition(term2, descs2);

    var term3 = new Paragraph('Term3');
    var descs3 = new ElementArray();
    descs3.addChild(new Paragraph('Desc3-1'));
    descs3.addChild(new Paragraph('Desc3-2'));
    defList.addDefinition(term3, descs3);

    var CORRECT = [
      '<dl>',
        '<dt>Term1</dt>',
        '<dd>',
          '<p>Desc1-1</p>',
          '<p>Desc1-2</p>',
        '</dd>',
        '<dt>Term2</dt>',
        '<dd>',
          '<p>Desc2-1</p>',
          '<p>Desc2-2</p>',
        '</dd>',
        '<dt>Term3</dt>',
        '<dd>',
          '<p>Desc3-1</p>',
          '<p>Desc3-2</p>',
        '</dd>',
      '</dl>'
    ].join('');

    test.equal(defList.publish(), CORRECT);

    test.done();
  },
  'Publish an ordered definition list': function(test) {
    var defList = new DefinitionList(DefinitionList.ListType.ORDERED);

    var term1 = new Paragraph('Term1');
    var descs1 = new ElementArray();
    descs1.addChild(new Paragraph('Desc1-1'));
    descs1.addChild(new Paragraph('Desc1-2'));
    defList.addDefinition(term1, descs1);

    var term2 = new Paragraph('Term2');
    var descs2 = new ElementArray();
    descs2.addChild(new Paragraph('Desc2-1'));
    descs2.addChild(new Paragraph('Desc2-2'));
    defList.addDefinition(term2, descs2);

    var term3 = new Paragraph('Term3');
    var descs3 = new ElementArray();
    descs3.addChild(new Paragraph('Desc3-1'));
    descs3.addChild(new Paragraph('Desc3-2'));
    defList.addDefinition(term3, descs3);

    var CORRECT = [
      '<dl>',
        '<dt>Term1</dt>',
        '<dd>',
          '<p>Desc1-1</p>',
          '<p>Desc1-2</p>',
        '</dd>',
        '<dt>Term2</dt>',
        '<dd>',
          '<p>Desc2-1</p>',
          '<p>Desc2-2</p>',
        '</dd>',
        '<dt>Term3</dt>',
        '<dd>',
          '<p>Desc3-1</p>',
          '<p>Desc3-2</p>',
        '</dd>',
      '</dl>'
    ].join('');

    test.equal(defList.publish(), CORRECT);

    test.done();
  },
  'Publish an unordered definition list': function(test) {
    var defList = new DefinitionList(DefinitionList.ListType.UNORDERED);

    var term1 = new Paragraph('Term1');
    var descs1 = new ElementArray();
    descs1.addChild(new Paragraph('Desc1-1'));
    descs1.addChild(new Paragraph('Desc1-2'));
    defList.addDefinition(term1, descs1);

    var term2 = new Paragraph('Term2');
    var descs2 = new ElementArray();
    descs2.addChild(new Paragraph('Desc2-1'));
    descs2.addChild(new Paragraph('Desc2-2'));
    defList.addDefinition(term2, descs2);

    var term3 = new Paragraph('Term3');
    var descs3 = new ElementArray();
    descs3.addChild(new Paragraph('Desc3-1'));
    descs3.addChild(new Paragraph('Desc3-2'));
    defList.addDefinition(term3, descs3);

    var CORRECT = [
      '<dl>',
        '<dt>Term1</dt>',
        '<dd>',
          '<p>Desc1-1</p>',
          '<p>Desc1-2</p>',
        '</dd>',
        '<dt>Term2</dt>',
        '<dd>',
          '<p>Desc2-1</p>',
          '<p>Desc2-2</p>',
        '</dd>',
        '<dt>Term3</dt>',
        '<dd>',
          '<p>Desc3-1</p>',
          '<p>Desc3-2</p>',
        '</dd>',
      '</dl>'
    ].join('');

    test.equal(defList.publish(), CORRECT);

    test.done();
  },
  'Publish a nested definition list': function(test) {
    var defList1 = new DefinitionList(DefinitionList.ListType.UNORDERED);
    var defList2 = new DefinitionList(DefinitionList.ListType.UNORDERED);

    var term1 = new Paragraph('Term1');
    var term2 = new Paragraph('Term2');
    var descs1 = new ElementArray();
    var descs2 = new ElementArray();

    descs1.addChild(new Paragraph('Desc1-1'));
    descs1.addChild(new Paragraph('Desc1-2'));
    descs1.addChild(defList2);

    descs2.addChild(new Paragraph('Desc2-1'));
    descs2.addChild(new Paragraph('Desc2-2'));

    defList1.addDefinition(term1, descs1);
    defList2.addDefinition(term2, descs2);

    var CORRECT = [
      '<dl>',
        '<dt>Term1</dt>',
        '<dd>',
          '<p>Desc1-1</p>',
          '<p>Desc1-2</p>',
          '<dl>',
            '<dt>Term2</dt>',
            '<dd>',
              '<p>Desc2-1</p>',
              '<p>Desc2-2</p>',
            '</dd>',
          '</dl>',
        '</dd>',
      '</dl>'
    ].join('');

    test.equal(defList1.publish(), CORRECT);
    test.done();
  }
};
