<template>
  <div id="app" class="container main-content">
    <transition name="fade" mode="out-in" :duration="300">
      <router-view />
    </transition>

    <span id="bottom-note">
      <a :href="repository" target="_blank">
        <img src="./static/fork-banner.png" />
      </a>
    </span>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import config from "./config";

export default Vue.extend({
  data() {
    return {
      repository: config.repository
    };
  }
});
</script>

<style>
#bottom-note {
  right: 0;
  position: fixed;
  top: 0;
  width: 149px;
}

#bottom-note img {
  width: 100%;
  height: auto;
}

#bottom-note a {
  width: 100%;
  height: auto;
  border-bottom: none;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}
.fade-enter,
.fade-leave-active {
  opacity: 0;
}

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
  src: url("/fonts/hack-regular.woff2") format("woff2"),
    url("/fonts/hack-regular.woff") format("woff");
  font-weight: 400;
  font-style: normal;
}

@font-face {
  font-family: "Hack";
  src: url("/fonts/hack-bold.woff2") format("woff2"),
    url("/fonts/hack-bold.woff") format("woff");
  font-weight: 700;
  font-style: normal;
}

/* Actual style */
body {
  font-family: Hack, monospace;
  background-color: #f5f5f5;
  color: #161616;
}

.margin-top {
  margin-top: 15px;
}

.margin-top-30 {
  margin-top: 30px;
}

.margin-bottom {
  margin-bottom: 15px;
}

.margin-bottom-30 {
  margin-bottom: 30px;
}

.text-center {
  text-align: center;
}

img {
  max-width: 100%;
}

.section img.rounded {
  border-radius: 130px;
  margin-bottom: 30px;
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

@media (min-width: 1280px) {
  .bg-image {
    background-size: cover;
    background-repeat: no-repeat;
    -webkit-filter: blur(3px);
    filter: blur(3px);
    background-size: 102%;
    background-position: center;
  }
  .bg-overlay.transparent {
    opacity: 0.9;
  }
  .menu-social {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: end;
    -webkit-justify-content: flex-end;
    -ms-flex-pack: end;
    justify-content: flex-end;
    padding-top: 50px;
    width: 100%;
  }
  .menu-social .icon {
    font-size: 20px;
    color: #ffffff;
    -webkit-transition: 0.25s;
    transition: 0.25s;
    margin-left: 25px;
  }
  .menu-social .icon:hover {
    color: #ffc400;
  }
}

@media (max-width: 900px) {
  .container {
    margin: 0 30px;
  }
  .container.main-content {
    width: 92%;
    min-height: 0;
    margin-top: 50px;
    margin-bottom: 50px;
  }
  .container.main-content .section {
    width: 100%;
  }
  #bottom-note {
    width: 100px;
  }
}

section {
  margin: auto;
  width: 100%;
  padding: 80px 0 80px 0;
}

section.active {
  display: block;
}

section h1 {
  font-size: 24px;
  font-weight: bold;
  padding: 15px 0;
  margin-bottom: 20px;
}

section h2 {
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 20px;
  background: #393939;
  color: #ffffff;
  padding: 5px;
  width: max-content;
}

section h3,
section ul.list li {
  font-size: 14px;
  font-weight: bold;
  margin-bottom: 20px;
  display: block;
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
  padding-bottom: 3px;
  border-bottom: 2px solid #1616163b;
  -webkit-transition: 0.25s;
  transition: 0.25s;
}

a:hover {
  border-bottom: 2px solid #161616d2;
}

#back-link {
  margin-bottom: 10px;
  display: inline-block;
}
</style>
