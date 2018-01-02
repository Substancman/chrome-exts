/**
 * |PluginInterfaces| contains a dictionary which associates a version string
 * with an interface description. When a new plugin connects to Chrome Sign
 * Builder, CSB scans the plugin to determine which version of the CSB interface
 * the plugin supports. Currently only interface version '1.0' is defined.
 */
var PluginInterfaces = {
  '1.0': {
    getName: {
      parameters: {},
      result: 'string'
    },
    isResponsible: {
      parameters: {
        url: 'string'
      },
      result: 'boolean'
    },
    openUI: {
      parameters: {
        url: 'string'
      },
      result: 'string'
    }
  }
};
