/**
 * Demo.js
 *
 * Released under LGPL License.
 * Copyright (c) 1999-2016 Ephox Corp. All rights reserved
 *
 * License: http://www.tinymce.com/license
 * Contributing: http://www.tinymce.com/contributing
 */

import SpellCheckerPlugin from 'tinymce/plugins/spellchecker/Plugin';

declare let tinymce: any;

SpellCheckerPlugin();

tinymce.init({
  selector: "textarea.tinymce",
  plugins: "spellchecker code",
  toolbar: "spellchecker code",
  skin_url: "../../../../../js/tinymce/skins/lightgray",
  height: 600
});