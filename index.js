'use strict';

var katex = require('katex');
var util = require('hexo-util');
var cheerio;

const predefinedMacros = {};

hexo.extend.filter.register('after_post_render', function (data) {
  var hexo = this,
    options = hexo.config.katex;

  var linkTag = '';

  if (!cheerio) cheerio = require('cheerio');

  var macros = predefinedMacros;
  if (options && options.macros) {
    macros = Object.assign({}, predefinedMacros, options.macros);
  }

  var $ = cheerio.load(data.content, { decodeEntities: true });

  if ($('.math').length > 0) {
    linkTag = util.htmlTag('link', {
      rel: 'stylesheet',
      href: 'https://cdn.jsdelivr.net/npm/katex@0.10.0-beta/dist/katex.min.css',
      integrity:
        'sha384-9tPv11A+glH/on/wEu99NVwDPwkMQESOocs/ZGXPoIiLE8MU/qkqUcZ3zzL+6DuH',
      crossorigin: 'anonymous',
    });
  }

  $('.math.inline').each(function () {
    // remove unnecessary characters "\(" and "\)"
    var html = katex.renderToString($(this).text().slice(2, -2), {
      // throwOnError: false,
      macros: macros
    });

    $(this).replaceWith(html);
  });

  $('.math.display').each(function () {
    // remove unnecessary characters "\[" and "\]"
    var html = katex.renderToString($(this).text().slice(2, -2), {
        // throwOnError: false,
        displayMode: true,
        macros: macros
    });

    $(this).replaceWith(html);
  })

  if (options && options.css === false) {
    data.content = $.html();
  } else {
    data.content = linkTag + $.html();
  }
})
