// This script licensed under the MIT.
// http://orgachem.mit-license.org


/**
 * @fileoverview A namespace for URI utilities.
 * @author orga.chem.job@gmail.com (OrgaChem)
 */



/**
 * A namespace for URI utilities.
 * @namespace
 * @exports lib/uriUtil
 */
var uriUtil = {};


/**
 * Returns a file URI with a fragment if any by the specified reference object.
 * @param {module:tsumekusa/lib/references/Reference} ref Reference object.
 * @return {!string} File URI with a fragment is any.
 */
uriUtil.getFileUri = function(ref) {
  return ref.toString();
};


// Exports the namespace.
module.exports = uriUtil;
