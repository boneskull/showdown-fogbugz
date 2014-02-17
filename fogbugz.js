/**
 * Converts Markdown-generated code blocks to blocks for FogBugz/Kiln which
 * are then auto-highlighted by FogBugz upon display.
 *
 * The only works if you are using the RTE in FogBugz or have otherwise told
 * FogBugz to save the edit as HTML.  If there's any demand for doing this
 * from the plain text editor, I'll add it (but I have a feeling there won't be!)
 */

(function () {
  'use strict';

  var fogbugz = function fogbugz() {
    return [
      {
        type: 'output',
        filter: function filter(source) {
          // find code blocks and grab stuff inside of it
          return source.replace(/<pre><code.*?>([\s\S]+)<\/code><\/pre>/gi,
            function (match, code) {
              // yes, we must escape the <code> tag, wrap in in a <p>,
              // then wrap each line in a <div> and insert &nbsp;s's
              return '<p>\n&lt;code&gt;</p>\n' +
                code.split('\n').map(function (line) {
                  return '<div>' + line.replace(/\s\s/g, '&nbsp; ') + '</div>';

                  // finally escape and wrap the </code> tag in a div. apparently.
                }).join('\n') + '<div>\n&lt;/code&gt;</div>';
            });
        }
      }
    ];
  };

  // Client-side export
  // If this is the canonical way Showdown expects extensions to register themselves,
  // it should probably explicitly attach itself to the `window` object.
  if (typeof window !== 'undefined' && window.Showdown &&
    window.Showdown.extensions) {
    window.Showdown.extensions.fogbugz = fogbugz;
  }
  // Server-side export
  if (typeof module !== 'undefined') {
    module.exports = fogbugz;
  }

}());
