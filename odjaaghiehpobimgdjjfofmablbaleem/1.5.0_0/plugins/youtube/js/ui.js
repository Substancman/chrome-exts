/**
 * Declares the supported query parameters along with their types.
 */
var parameters = [
  {
    name: 'autoplay',
    type: 'boolean'
  },
  {
    name: 'autohide',
    type: 'boolean'
  },
  {
    name: 'list',
    type: 'string'
  },
  {
    name: 'loop',
    type: 'boolean'
  },
  {
    name: 'controls',
    type: 'boolean'
  },
  {
    name: 'disablekb',
    type: 'boolean'
  }
];

/**
 * Dictionary mapping a query parameter name to its value.
 */
var settings = {};

/**
 * Youtube video id of the clip, see https://developers.google.com/youtube/v3/.
 */
var video_id;

/**
 * This dictionary of parsers associates with each type string a parser that
 * parses the respective type from a string.
 */
var Parser = {
  'boolean': function(s) {
    return (s === 'true' || s === 1);
  },
  'integer': function(s) {
    var n = parseInt(s);
    return isNaN(n) ? undefined : n;
  },
  'string': function(s) {
    if (!s || s.length === 0)
      return undefined;
    else
      return s;
  }
};

/**
 * This dictionary maps a type string to a function which sets a property of
 * the respective type on the passed DOM object |e|.
 */
var Setter = {
  'boolean': function(v, e) {
    e.checked = v;
  },
  'integer': function(v, e) {
    e.value = v;
  },
  'string': function(v, e) {
    e.value = v;
  }
};

/**
 * This dictionary maps a type string to a function which retrieves a
 * property of the respective type from the passed DOM object |e|.
 */
var Getter = {
  'boolean': function(e) {
    return e.checked;
  },
  'integer': function(e) {
    return e.value;
  },
  'string': function(e) {
    return e.value;
  }
};

/**
 * Attempts to parse the passed in |url| and saves the extracted video id in the
 * global variable |video_id| and populates the |settings| dictionary with the
 * known settings extracted from the query parameters.
 * @param {string} url The url to parse.
 */
function youtube_parser(url) {
    var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?^\s]*).*/;
    var match = url.match(regExp);
    if (match && match[7] && match[7].length == 11)
      video_id = match[7];

    // extract parameters
    parameters.map(function(parameter) {
      var regExp = new RegExp('[?&]' + parameter.name + '=([^&]*)');
      var match = url.match(regExp);
      if (match && match[1]) {
        var value = Parser[parameter.type](match[1]);
        if (typeof value !== 'undefined')
          settings[parameter.name] = value;
      }
    });
}

/**
 * Function invoked when the user presses the 'OK' button. If the url could not
 * be parsed, returns the unmodified url. If url was successfully parsed, builds
 * a new embedding url for the video id with the user specified options encoded
 * as query parameters.
 */
function done() {
  if (!video_id)
    resolve(url_typed);
  var result_url = 'https://www.youtube.com/embed/' + video_id;

  var looping = false;
  var playlist_set = false;
  parameters.forEach(function(parameter, index) {
    var element = document.getElementById(parameter.name);
    var value_string = Getter[parameter.type](element).toString();
    if (parameter.name === 'loop') {
      looping = value_string == 'true';
    }
    if (value_string.length > 0) {
      if (parameter.name === 'list')
        playlist_set = true;
      result_url = result_url + (index === 0 ? '?' : '&') + parameter.name +
          '=' + value_string;
    }
  });

  // If loop=1 has been set,  add the playlist parameter to allow looping single
  // video playlists.
  if (looping && !playlist_set) {
    result_url += (parameters.length === 0 ? '?' : '&') + 'playlist=' +
        video_id;
  }

  resolve(result_url);
  window.close();
}

/**
 * Once the window content has been successfully loaded, configures the
 * Bootstrap switches, parses the passed in url and updates the UI.
 */
document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('done').onclick = done;
  $.fn.bootstrapSwitch.defaults.size = 'mini';
  $.fn.bootstrapSwitch.defaults.onColor = 'success';
  $.fn.bootstrapSwitch.defaults.offColor = 'danger';

  // extract settings from url
  youtube_parser(url_typed);

  // update UI
  parameters.forEach(function(parameter) {
    var element = document.getElementById(parameter.name);
    if (settings.hasOwnProperty(parameter.name))
      Setter[parameter.type](settings[parameter.name], element);
  });

  // initialize buttons
  $("[id='autoplay']").bootstrapSwitch();
  $("[id='autohide']").bootstrapSwitch();
  $("[id='loop']").bootstrapSwitch();
  $("[id='controls']").bootstrapSwitch();
  $("[id='disablekb']").bootstrapSwitch();
}, false);
