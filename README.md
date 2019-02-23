# hexo-katex-macros

Use KaTeX to display math in Hexo sites.

## Install 

Install [hexo-renderer-pandoc](https://github.com/wzpan/hexo-renderer-pandoc) and config math engine.

Then install [hexo-katex-macros](https://www.npmjs.com/package/hexo-katex-macros).

```
# cd your-hexo-project
npm install --save hexo-katex-macros
```

## Config

Modify `_config.yml` like this:

```
katex:
  css: true
  macros:
    "\\foo": "\\mathrm{foo}"
    "\\set": "\\left\\{ #1 \\right\\}"
```

#### css

By default, KaTeX css link will be automatically injected into post.
If you want to add it manually, set `css` be a boolean value.

#### macros

You can use macros to help writing math equations, which should be specified in 'macros'.
The above configuration, for instance, makes it possible to write as follows:

```
$$
\set{ \foo(x)_n }_{n=1}^N
$$
```

## Writing

Inline math `$E = m * c^2$`

Display math

```
$$
E = m * c^2
$$
```
