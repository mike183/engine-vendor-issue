define('test-engine/config/environment', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var config;

  try {
    var metaName = 'test-engine/config/environment';
    var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
    config = JSON.parse(unescape(rawConfig));
  } catch (err) {
    throw new Error('Could not read config from meta tag with name "' + metaName + '" due to error: ' + err);
  }

  exports.default = config;
});
define('test-engine/engine', ['exports', 'ember-engines/engine', 'ember-load-initializers', 'test-engine/resolver', 'test-engine/config/environment'], function (exports, _engine, _emberLoadInitializers, _resolver, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var modulePrefix = _environment.default.modulePrefix;


  var Eng = _engine.default.extend({
    modulePrefix: modulePrefix,
    Resolver: _resolver.default
  });

  (0, _emberLoadInitializers.default)(Eng, modulePrefix);

  exports.default = Eng;
});
define('test-engine/resolver', ['exports', 'ember-resolver'], function (exports, _emberResolver) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _emberResolver.default;
});
define("test-engine/templates/application", ["exports"], function (exports) {
  "use strict";

  exports.__esModule = true;
  exports.default = Ember.HTMLBars.template({ "id": "3WXUiP2D", "block": "{\"statements\":[[1,[26,[\"outlet\"]],false],[0,\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"hasPartials\":false}", "meta": { "moduleName": "test-engine/templates/application.hbs" } });
});//# sourceMappingURL=engine.map
