(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{330:function(t,s,a){"use strict";a.r(s);var e=a(0),n=Object(e.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h3",{attrs:{id:"ueditor显示效果和编辑效果不一致问题解决方案："}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ueditor显示效果和编辑效果不一致问题解决方案：","aria-hidden":"true"}},[t._v("#")]),t._v(" UEditor显示效果和编辑效果不一致问题解决方案：")]),t._v(" "),a("p",[t._v("显示效果和编辑效果不一致的原因是显示时文章内容受到了文章内容以外的样式的影响，为了解决这个问题，我们可以让编辑时也受到同样的影响。\nUEditor支持在编辑的时候引入一个css样式表文件，默认是UEditor目录下的themes/iframe.css。我们可以将显示页面的能够影响文章显示的css添加到iframe.css中。")]),t._v(" "),a("p",[t._v("我们还可以对文章显示区域进行样式重置。")]),t._v(" "),a("p",[t._v("首先将文章显示区域放到一个div中")]),t._v(" "),a("div",{staticClass:"language-html line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("article_content"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\t...\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br")])]),a("p",[t._v("然后增加使用reset css对article_content中的各种元素进行样式重置，选择器都要加上"),a("code",[t._v("article_content")]),t._v("这个类，保证重置时只能重置文章区域。")]),t._v(" "),a("p",[t._v("而且reset css需要在其他会影响到文章显示的css文件后面，保证优先级最高。")]),t._v(" "),a("p",[t._v("为了避免ueditor编辑时的效果和显示有细微差异，我们还可以将上面的reset css也加入到frame.css中。")])])},[],!1,null,null,null);s.default=n.exports}}]);