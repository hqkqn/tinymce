/**
 * Demo.js
 *
 * Released under LGPL License.
 * Copyright (c) 1999-2016 Ephox Corp. All rights reserved
 *
 * License: http://www.tinymce.com/license
 * Contributing: http://www.tinymce.com/contributing
 */

import AnchorPlugin from 'tinymce/plugins/anchor/Plugin';

declare let tinymce: any;

AnchorPlugin();

tinymce.init({
  selector: "textarea.tinymce",
  theme: "modern",
  skin_url: "../../../../../js/tinymce/skins/lightgray",
  plugins: "anchor code",
  toolbar: "anchor code",
  height: 600
});
