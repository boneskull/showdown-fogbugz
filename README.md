* showdown-fogbugz

[Showdown](https://github.com/coreyti/showdown) extension for outputting code blocks in a format FogBugz understands.

** Usage

Include scripts; include Showdown first.

```html
<script src="/path/to/showdown.js"></script>
<script src="/path/to/fogbugz.js"></script>
```

```js
var converter = new Showdown.converter({extensions: ['fogbugz']}),
  html = converter.makeHtml(some_markdown);
```

The value of `html` will be very ugly and it's not worth displaying here, but what it does is tells FogBugz/Kiln to syntax-highlight and line-number the code block when displaying the text you just entered.

** Wait, FogBugz supports Markdown?

[Not out of the box](http://boneskull.github.io/bugmonkey-markdown/).

** License

MIT

** Author

[Christopher Hiller](http://boneskull.github.io/)
