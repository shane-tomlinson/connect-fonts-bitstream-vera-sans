# connect-fonts-bitstream-vera-sans

Bitstream Vera Sans fontpack for [connect-fonts](https://github.com/shane-tomlinson/connect-fonts).

## Usage

1. Include [connect-fonts](https://github.com/shane-tomlinson/connect-fonts) in a node module.
```js
const font_middleware = require("connect-fonts");
```

2. Include the font packs that you want to serve.
```js
const font_pack  = require("connect-fonts-bitstream-vera-sans");
```

3. Add a middleware by calling the `setup` function.
```js
    app.use(font_middleware.setup({
      fonts: [ font_pack ],
      allow_origin: "https://exampledomain.com"
    }));
```

4. Add a link tag to include the font CSS.
```html
<link href="/vera-bold-italic/fonts.css" type="text/css" rel="stylesheet"/ >
```

Multiple fonts from the family can be included by using a comma separated list of fonts:
```html
<link href="/vera-bold-italic,vera-bold,vera-italic,vera/fonts.css" type="text/css" rel="stylesheet"/ >
```

Available fonts:
* vera-bold-italic
* vera-bold
* vera-italic
* vera

Locale-optimised font sets can be served by specifying the locale in the fonts.css URL.
```html
<link href="/latin/vera-bold-italic/fonts.css" type="text/css" rel="stylesheet"/ >
```

Available subsets:
* latin

5. Set your CSS up to use the new font by using the "Bitstream Vera Sans" font-family.
```
    body {
      font-family: 'Bitstream Vera Sans', 'sans-serif', 'serif';
    }
```

## Font Info
Bitstream Vera Sans

* Copyright: Copyright (c) 2003 by Bitstream, Inc. All Rights Reserved.
* Trademark: Bitstream Vera is a trademark of Bitstream, Inc.
* Vendor: Bitstream Inc.
* Vendor URL: http://www.bitstream.com

## Development Info
* Homepage: https://github.com/shane-tomlinson/connect-fonts-bitstream-vera-sans
* Repo: https://github.com/shane-tomlinson/connect-fonts-bitstream-vera-sans.git
* Bugs: https://github.com/shane-tomlinson/connect-fonts-bitstream-vera-sans/issues

## Font pack author
* Shane Tomlinson
* shane@shanetomlinson.com
* stomlinson@mozilla.com
* set117@yahoo.com
* https://shanetomlinson.com
* https://github.com/shane-tomlinson
* @shane_tomlinson


## License


  

Software: Licenced under version 2.0 of the MPL

  https://www.mozilla.org/MPL/

