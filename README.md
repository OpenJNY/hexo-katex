# hexo-katex-macros

Use KaTeX to display math in Hexo sites.

## Install 

Install [hexo-renderer-pandoc](https://github.com/wzpan/hexo-renderer-pandoc) and config math engine.

```
pandoc:
  mathEngine: katex
```

Then install hexo-katex-macro.

```
# cd your-hexo-project
npm install --save hexo-katex-macros
```

KaTeX css link will be automatically injected into post, if you want to add it manually, modify `_config.yml`.

```
katex:
  css: false
```

## Writing

Inline math `$E = m * c^2$`

Display math

```
$$
E = m * c^2
$$
```
### Macros

You can use macros to help writing math equations, which should be specified in '_config.yml'.

```
katex:
  css: true
  macros:
    "\\foo": "\\mathrm{foo}"
    "\\set": "\\left\\{ #1 \\right\\}"
```

The above configuration, for instance, makes it possible to write as follows:

```
$$
\set{ \foo(x)_n }_{n=1}^N
$$
```
