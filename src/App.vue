<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  data() {
    return {};
  },
  components: {}
});
</script>


<style>
/* Reset style */
html,
body,
div,
span,
applet,
object,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
a,
abbr,
acronym,
address,
big,
cite,
code,
del,
dfn,
em,
img,
ins,
kbd,
q,
s,
samp,
small,
strike,
strong,
sub,
sup,
tt,
var,
b,
u,
i,
center,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
label,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td,
article,
aside,
canvas,
details,
embed,
figure,
figcaption,
footer,
header,
hgroup,
menu,
nav,
output,
ruby,
section,
summary,
time,
mark,
audio,
video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}

/* HTML5 display-role reset for older browsers */
article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section {
  display: block;
}

body {
  line-height: 1;
}

ol,
ul {
  list-style: none;
}

blockquote,
q {
  quotes: none;
}

blockquote:before,
blockquote:after {
  content: "";
  content: none;
}

q:before,
q:after {
  content: "";
  content: none;
}

table {
  border-collapse: collapse;
  border-spacing: 0;
}

/* FONT PATHS */
@font-face {
  font-family: "Hack";
  src: url("https://cdn.jsdelivr.net/npm/hack-font@3/build/web/fonts/hack-regular.woff2?sha=3114f1256")
      format("woff2"),
    url("https://cdn.jsdelivr.net/npm/hack-font@3/build/web/fonts/hack-regular.woff?sha=3114f1256")
      format("woff");
  font-weight: 400;
  font-style: normal;
}

@font-face {
  font-family: "Hack";
  src: url("https://cdn.jsdelivr.net/npm/hack-font@3/build/web/fonts/hack-bold.woff2?sha=3114f1256")
      format("woff2"),
    url("https://cdn.jsdelivr.net/npm/hack-font@3/build/web/fonts/hack-bold.woff?sha=3114f1256")
      format("woff");
  font-weight: 700;
  font-style: normal;
}

@font-face {
  font-family: "Hack";
  src: url("https://cdn.jsdelivr.net/npm/hack-font@3/build/web/fonts/hack-italic.woff2?sha=3114f1256")
      format("woff2"),
    url("https://cdn.jsdelivr.net/npm/hack-font@3/build/web/fonts/hack-italic.woff?sha=3114f1256")
      format("woff");
  font-weight: 400;
  font-style: italic;
}

@font-face {
  font-family: "Hack";
  src: url("https://cdn.jsdelivr.net/npm/hack-font@3/build/web/fonts/hack-bolditalic.woff2?sha=3114f1256")
      format("woff2"),
    url("https://cdn.jsdelivr.net/npm/hack-font@3/build/web/fonts/hack-bolditalic.woff?sha=3114f1256")
      format("woff");
  font-weight: 700;
  font-style: italic;
}

/* Actual style */
body {
  font-family: Hack, monospace;
  background-color: #aaa;
}

.margin-top {
  margin-top: 15px;
}

.margin-top-30 {
  margin-top: 30px;
}

.container {
  z-index: 3;
  position: relative;
}

.container.main-content {
  width: 900px;
  margin: auto;
  min-height: 95vh;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
}

section {
  margin: auto;
  width: 100%;
}

section.active {
  display: block;
}

section h1 {
  font-weight: bold;
  font-size: 22px;
  padding: 15px 0;
}

section h2 {
  color: red;
  font-size: 18px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  padding-bottom: 15px;
  margin-bottom: 20px;
}

section p {
  font-weight: 300;
  line-height: 26px;
  margin-bottom: 30px;
}

section .icon {
  font-size: 32px;
}

a {
  text-decoration: none;
  color: #000;
  border-bottom: 3px solid rgba(39, 39, 39, 0.6);
}
</style>
