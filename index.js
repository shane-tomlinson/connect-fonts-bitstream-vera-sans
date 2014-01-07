const path = require("path");

module.exports = {
  "root": path.join(__dirname, "fonts"),

  // Package info
  "package": {
    "name": "connect-fonts-bitstream-vera-sans",
    "homepage": "https://github.com/shane-tomlinson/connect-fonts-bitstream-vera-sans",
    "repourl": "https://github.com/shane-tomlinson/connect-fonts-bitstream-vera-sans.git",
    "bugsurl": "https://github.com/shane-tomlinson/connect-fonts-bitstream-vera-sans/issues"
  },
  
  // Package author info
  "author": {
    "name": "Shane Tomlinson",
    "emails": "shane@shanetomlinson.com,stomlinson@mozilla.com,set117@yahoo.com",
    "urls": "https://shanetomlinson.com",
    "githubs": "https://github.com/shane-tomlinson",
    "twitter": "@shane_tomlinson"
  },
  

  // Common font information
  "font_common": {
    "names": "vera-bold-italic,vera-bold,vera-italic,vera",
    "family": "Bitstream Vera Sans",
    "copyright": "Copyright (c) 2003 by Bitstream, Inc. All Rights Reserved.",
    "trademark": "Bitstream Vera is a trademark of Bitstream, Inc.",
    "manufacturer": "Bitstream Inc.",
    "url_vendor": "http://www.bitstream.com"
  },


  // where to find a locale's fonts in the fonts directory
  "locale-to-subdirs": { 
  },

  // what font types are enabled and what are the extensions of
  // the font files.
  //
  // valid types are embedded-opentype, woff, truetype, svg
  "enabled-types": [ "eot", "woff", "ttf", "svg" ],

  // The fonts. The name of the font must be the same as the font
  // in the fonts directory.
  "fonts": {
      "vera-bold-italic": {
        "fontFamily": "Bitstream Vera Sans",
        "fontStyle": "italic",
        "fontWeight": "700",
        "local": [ "Bitstream Vera Sans Bold Oblique", "BitstreamVeraSans-BoldOblique" ]
      },
      "vera-bold": {
        "fontFamily": "Bitstream Vera Sans",
        "fontStyle": "normal",
        "fontWeight": "700",
        "local": [ "Bitstream Vera Sans Bold", "BitstreamVeraSans-Bold" ]
      },
      "vera-italic": {
        "fontFamily": "Bitstream Vera Sans",
        "fontStyle": "italic",
        "fontWeight": "400",
        "local": [ "Bitstream Vera Sans Oblique", "BitstreamVeraSans-Oblique" ]
      },
      "vera-regular": {
        "fontFamily": "Bitstream Vera Sans",
        "fontStyle": "normal",
        "fontWeight": "400",
        "local": [ "Bitstream Vera Sans", "BitstreamVeraSans-Roman" ]
      }
  }
};
