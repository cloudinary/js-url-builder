/**
 * Utility function used to import items from @cloudinary/transformation-builder-sdk
 * @param {string} pathInLib - relative path inside ./dist, for example 'actions/resize'
 *                              The result will be `import resize from '../../dist/resize`;
 * @returns string
 */
function importFromLib(pathInLib: string, namedVariableName: string): string {

  return `
    import {${namedVariableName}} from '@cloudinary/transformation-builder-sdk/${pathInLib}';
    // we console log to force the bundle not to tree shake
    console.log(${namedVariableName});
  `;
}


export default importFromLib;
