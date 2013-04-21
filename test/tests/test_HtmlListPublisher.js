// This script licensed under the MIT.
// http://orgachem.mit-license.org


var basePath = '../../lib'
var HtmlPublishers = require(basePath);

var tsumekusa = require('tsumekusa');
var List = tsumekusa.List;
var ElementArray = tsumekusa.ElementArray;
var Paragraph = tsumekusa.Paragraph;
tsumekusa.registerPublishers(HtmlPublishers);

tsumekusa.Element.prototype.getReference = function() {
  return new tsumekusa.Reference(this.getReferenceId(), 'file_name.html');
};

module.exports = {
  'Publish an ordered list': function(test) {
    var list = new List(List.ListType.ORDERED);

    var arr1 = new ElementArray();
    var arr2 = new ElementArray();
    var arr3 = new ElementArray();

    var p1 = new Paragraph('Item1');
    var p2 = new Paragraph('Item2');
    var p3 = new Paragraph('Item3');
    var p4 = new Paragraph('Item4');
    var p5 = new Paragraph('Item5');

    arr1.addChild(p1);
    arr2.addChild(p2);
    arr2.addChild(p3);
    arr3.addChild(p4);
    arr3.addChild(p5);

    list.addListItem(arr1);
    list.addListItem(arr2);
    list.addListItem(arr3);

    var CORRECT = [
      '<ol>',
        '<li><p>Item1</p></li>',
        '<li><p>Item2</p><p>Item3</p></li>',
        '<li><p>Item4</p><p>Item5</p></li>',
      '</ol>'
    ].join('');

    test.equal(list.publish(), CORRECT);
    test.done();
  },
  'Publish an unordered list': function(test) {
    var list = new List(List.ListType.UNORDERED);

    var arr1 = new ElementArray();
    var arr2 = new ElementArray();
    var arr3 = new ElementArray();

    var p1 = new Paragraph('Item1');
    var p2 = new Paragraph('Item2');
    var p3 = new Paragraph('Item3');
    var p4 = new Paragraph('Item4');
    var p5 = new Paragraph('Item5');

    arr1.addChild(p1);
    arr2.addChild(p2);
    arr2.addChild(p3);
    arr3.addChild(p4);
    arr3.addChild(p5);

    list.addListItem(arr1);
    list.addListItem(arr2);
    list.addListItem(arr3);

    var CORRECT = [
      '<ul>',
        '<li><p>Item1</p></li>',
        '<li><p>Item2</p><p>Item3</p></li>',
        '<li><p>Item4</p><p>Item5</p></li>',
      '</ul>'
    ].join('');

    test.equal(list.publish(), CORRECT);
    test.done();
  },
  'Publish a nested definition list': function(test) {
    var list1 = new List(List.ListType.ORDERED);
    var list2 = new List(List.ListType.ORDERED);
    var list3 = new List(List.ListType.ORDERED);

    var arr1 = new ElementArray();
    var arr2 = new ElementArray();
    var arr3 = new ElementArray();
    var arr4 = new ElementArray();

    list1.addListItem(arr1);
    list1.addListItem(list2);

    list2.addListItem(arr2);
    list2.addListItem(list3);
    list2.addListItem(arr4);

    list3.addListItem(arr3);

    var p1 = new Paragraph('Item1');
    var p2 = new Paragraph('Item2');
    var p3 = new Paragraph('Item3');
    var p4 = new Paragraph('Item4');
    var p5 = new Paragraph('Item5');
    var p6 = new Paragraph('Item6');
    var p7 = new Paragraph('Item7');
    var p8 = new Paragraph('Item8');

    arr1.addChild(p1);
    arr1.addChild(p2);
    arr2.addChild(p3);
    arr2.addChild(p4);
    arr3.addChild(p5);
    arr3.addChild(p6);
    arr4.addChild(p7);
    arr4.addChild(p8);

    var CORRECT = [
      '<ol>',
        '<li>',
          '<p>Item1</p>',
          '<p>Item2</p>',
        '</li>',
        '<ol>',
          '<li>',
            '<p>Item3</p>',
            '<p>Item4</p>',
          '</li>',
          '<ol>',
            '<li>',
              '<p>Item5</p>',
              '<p>Item6</p>',
            '</li>',
          '</ol>',
          '<li>',
            '<p>Item7</p>',
            '<p>Item8</p>',
          '</li>',
        '</ol>',
      '</ol>'
    ].join('');

    test.equal(list1.publish(), CORRECT);
    test.done();
  }
};
