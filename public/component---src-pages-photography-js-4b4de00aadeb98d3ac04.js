(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{183:function(e,a,t){"use strict";t.r(a);var n=t(0),i=t.n(n),r=t(193),l=t.n(r),u=t(190),c=t(191),s=t(194),m=t.n(s);var o=function(e){var a,t;function n(){return e.apply(this,arguments)||this}return t=e,(a=n).prototype=Object.create(t.prototype),a.prototype.constructor=a,a.__proto__=t,n.prototype.render=function(){return i.a.createElement(u.a,null,i.a.createElement(l.a,{title:"Photography "}),i.a.createElement(c.a,null),i.a.createElement("div",{id:"main"},i.a.createElement("section",{id:"content",className:"main"},i.a.createElement("span",{className:"image main"},i.a.createElement("img",{src:m.a,alt:""})),i.a.createElement("h2",null,"Photography Page"),i.a.createElement("p",null,"Donec eget ex magna. Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque venenatis dolor imperdiet dolor mattis sagittis. Praesent rutrum sem diam, vitae egestas enim auctor sit amet. Pellentesque leo mauris, consectetur id ipsum sit amet, fergiat. Pellentesque in mi eu massa lacinia malesuada et a elit. Donec urna ex, lacinia in purus ac, pretium pulvinar mauris. Curabitur sapien risus, commodo eget turpis at, elementum convallis fames ac ante ipsum primis in faucibus."),i.a.createElement("p",null,"Pellentesque venenatis dolor imperdiet dolor mattis sagittis. Praesent rutrum sem diam, vitae egestas enim auctor sit amet. Consequat leo mauris, consectetur id ipsum sit amet, fersapien risus, commodo eget turpis at, elementum convallis elit enim turpis lorem ipsum dolor sit amet feugiat. Phasellus convallis elit id ullamcorper pulvinar. Duis aliquam turpis mauris, eu ultricies erat malesuada quis. Aliquam dapibus, lacus eget hendrerit bibendum, urna est aliquam sem, sit amet est velit quis lorem."),i.a.createElement("h2",null,"Tempus veroeros"),i.a.createElement("p",null,"Cep risus aliquam gravida cep ut lacus amet. Adipiscing faucibus nunc placerat. Tempus adipiscing turpis non blandit accumsan eget lacinia nunc integer interdum amet aliquam ut orci non col ut ut praesent. Semper amet interdum mi. Phasellus enim laoreet ac ac commodo faucibus faucibus. Curae ante vestibulum ante. Blandit. Ante accumsan nisi eu placerat gravida placerat adipiscing in risus fusce vitae ac mi accumsan nunc in accumsan tempor blandit aliquet aliquet lobortis. Ultricies blandit lobortis praesent turpis. Adipiscing accumsan adipiscing adipiscing ac lacinia cep. Orci blandit a iaculis adipiscing ac. Vivamus ornare laoreet odio vis praesent nunc lorem mi. Erat. Tempus sem faucibus ac id. Vis in blandit. Nascetur ultricies blandit ac. Arcu aliquam. Accumsan mi eget adipiscing nulla. Non vestibulum ac interdum condimentum semper commodo massa arcu."))))},n}(i.a.Component);a.default=o},187:function(e,a,t){var n;e.exports=(n=t(189))&&n.default||n},188:function(e,a,t){"use strict";var n=t(0),i=t.n(n),r=t(11),l=t.n(r),u=t(58),c=t.n(u);t.d(a,"a",function(){return c.a});t(187),i.a.createContext({});l.a.object,l.a.string.isRequired,l.a.func,l.a.func},189:function(e,a,t){"use strict";t.r(a);t(21);var n=t(0),i=t.n(n),r=t(11),l=t.n(r),u=t(84),c=function(e){var a=e.location,t=e.pageResources;return t?i.a.createElement(u.a,Object.assign({location:a,pageResources:t},t.json)):null};c.propTypes={location:l.a.shape({pathname:l.a.string.isRequired}).isRequired},a.default=c},190:function(e,a,t){"use strict";var n=t(0),i=t.n(n),r=(t(192),t(188),function(e){return i.a.createElement("footer",{id:"footer"},i.a.createElement("section",null,i.a.createElement("h2",null,"Thank you for stopping by!"),i.a.createElement("p",null,"If you have any questions or if there's anything I can help you with project-wise please get in touch. I look forward to hearing from you!"),i.a.createElement("ul",{className:"actions"},i.a.createElement("form",{name:"contact",method:"POST","data-netlify-recaptcha":"true","data-netlify":"true"},i.a.createElement("p",null,i.a.createElement("label",null,"Your Name: ",i.a.createElement("input",{type:"text",name:"name"}))),i.a.createElement("p",null,i.a.createElement("label",null,"Your Email: ",i.a.createElement("input",{type:"email",name:"email"}))),i.a.createElement("p",null,i.a.createElement("label",null,"Message: ",i.a.createElement("textarea",{name:"message"}))),i.a.createElement("p",null,i.a.createElement("div",{"data-netlify-recaptcha":"true"})),i.a.createElement("p",null,i.a.createElement("button",{type:"submit"},"Send"))))),i.a.createElement("section",null,i.a.createElement("h2",null,"Contact:"),i.a.createElement("dl",{className:"alt"},i.a.createElement("dt",null,"Phone"),i.a.createElement("dd",null,"(206) 446-8469"),i.a.createElement("dt",null,"Email"),i.a.createElement("dd",null,i.a.createElement("a",{href:"#"},"keeganslane@gmail.com")))),i.a.createElement("section",null))});var l=function(e){var a,t;function n(a){var t;return(t=e.call(this,a)||this).state={loading:"is-loading"},t}t=e,(a=n).prototype=Object.create(t.prototype),a.prototype.constructor=a,a.__proto__=t;var l=n.prototype;return l.componentDidMount=function(){var e=this;this.timeoutId=setTimeout(function(){e.setState({loading:""})},100)},l.componentWillUnmount=function(){this.timeoutId&&clearTimeout(this.timeoutId)},l.render=function(){var e=this.props.children;return i.a.createElement("div",{className:"body "+this.state.loading},i.a.createElement("div",{id:"wrapper"},e,i.a.createElement(r,null)))},n}(i.a.Component);a.a=l},191:function(e,a,t){"use strict";var n=t(0),i=t.n(n);a.a=function(e){return i.a.createElement("header",{id:"header"},i.a.createElement("h1",null,"Keegan Helmbrecht"),i.a.createElement("p",null,"Full Stack Developer"))}},194:function(e,a,t){e.exports=t.p+"static/pic04-1609dea61acb9e992d846c586683a226.jpg"}}]);
//# sourceMappingURL=component---src-pages-photography-js-4b4de00aadeb98d3ac04.js.map