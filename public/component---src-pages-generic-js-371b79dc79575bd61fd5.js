(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{179:function(e,a,t){"use strict";t.r(a);var n=t(0),i=t.n(n),c=t(193),r=t.n(c),l=t(190),s=t(191),u=t(194),m=t.n(u);var o=function(e){var a,t;function n(){return e.apply(this,arguments)||this}return t=e,(a=n).prototype=Object.create(t.prototype),a.prototype.constructor=a,a.__proto__=t,n.prototype.render=function(){return i.a.createElement(l.a,null,i.a.createElement(r.a,{title:"Keeg's Generic Page Title"}),i.a.createElement(s.a,null),i.a.createElement("div",{id:"main"},i.a.createElement("section",{id:"content",className:"main"},i.a.createElement("span",{className:"image main"},i.a.createElement("img",{src:m.a,alt:""})),i.a.createElement("h2",null,"Magna feugiat lorem"),i.a.createElement("p",null,"Donec eget ex magna. Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque venenatis dolor imperdiet dolor mattis sagittis. Praesent rutrum sem diam, vitae egestas enim auctor sit amet. Pellentesque leo mauris, consectetur id ipsum sit amet, fergiat. Pellentesque in mi eu massa lacinia malesuada et a elit. Donec urna ex, lacinia in purus ac, pretium pulvinar mauris. Curabitur sapien risus, commodo eget turpis at, elementum convallis fames ac ante ipsum primis in faucibus."),i.a.createElement("p",null,"Pellentesque venenatis dolor imperdiet dolor mattis sagittis. Praesent rutrum sem diam, vitae egestas enim auctor sit amet. Consequat leo mauris, consectetur id ipsum sit amet, fersapien risus, commodo eget turpis at, elementum convallis elit enim turpis lorem ipsum dolor sit amet feugiat. Phasellus convallis elit id ullamcorper pulvinar. Duis aliquam turpis mauris, eu ultricies erat malesuada quis. Aliquam dapibus, lacus eget hendrerit bibendum, urna est aliquam sem, sit amet est velit quis lorem."),i.a.createElement("h2",null,"Tempus veroeros"),i.a.createElement("p",null,"Cep risus aliquam gravida cep ut lacus amet. Adipiscing faucibus nunc placerat. Tempus adipiscing turpis non blandit accumsan eget lacinia nunc integer interdum amet aliquam ut orci non col ut ut praesent. Semper amet interdum mi. Phasellus enim laoreet ac ac commodo faucibus faucibus. Curae ante vestibulum ante. Blandit. Ante accumsan nisi eu placerat gravida placerat adipiscing in risus fusce vitae ac mi accumsan nunc in accumsan tempor blandit aliquet aliquet lobortis. Ultricies blandit lobortis praesent turpis. Adipiscing accumsan adipiscing adipiscing ac lacinia cep. Orci blandit a iaculis adipiscing ac. Vivamus ornare laoreet odio vis praesent nunc lorem mi. Erat. Tempus sem faucibus ac id. Vis in blandit. Nascetur ultricies blandit ac. Arcu aliquam. Accumsan mi eget adipiscing nulla. Non vestibulum ac interdum condimentum semper commodo massa arcu."))))},n}(i.a.Component);a.default=o},187:function(e,a,t){var n;e.exports=(n=t(189))&&n.default||n},188:function(e,a,t){"use strict";var n=t(0),i=t.n(n),c=t(11),r=t.n(c),l=t(58),s=t.n(l);t.d(a,"a",function(){return s.a});t(187),i.a.createContext({});r.a.object,r.a.string.isRequired,r.a.func,r.a.func},189:function(e,a,t){"use strict";t.r(a);t(21);var n=t(0),i=t.n(n),c=t(11),r=t.n(c),l=t(84),s=function(e){var a=e.location,t=e.pageResources;return t?i.a.createElement(l.a,Object.assign({location:a,pageResources:t},t.json)):null};s.propTypes={location:r.a.shape({pathname:r.a.string.isRequired}).isRequired},a.default=s},190:function(e,a,t){"use strict";var n=t(0),i=t.n(n),c=(t(192),t(188),function(e){return i.a.createElement("footer",{id:"footer"},i.a.createElement("section",null,i.a.createElement("h2",null,"Thank you for stopping by!"),i.a.createElement("p",null,"If you have any questions or if there's anything I can help you with project-wise please get in touch. I look forward to hearing from you!"),i.a.createElement("ul",{className:"actions"})),i.a.createElement("section",null,i.a.createElement("h2",null,"Contact:"),i.a.createElement("dl",{className:"alt"},i.a.createElement("dt",null,"Phone"),i.a.createElement("dd",null,"(206) 446-8469"),i.a.createElement("dt",null,"Email"),i.a.createElement("dd",null,i.a.createElement("a",{href:"#"},"keeganslane@gmail.com")))),i.a.createElement("section",null,i.a.createElement("div",{className:"formstyle"},i.a.createElement("form",{method:"POST",action:"/success",className:"contact-card__form","data-netlify":"true","data-netlify-honeypot":"bot-field",name:"contact-form"},i.a.createElement("input",{type:"hidden",name:"bot-field"}),i.a.createElement("div",{className:"contact-card__fields"},i.a.createElement("div",{className:"contact-card__field half"},i.a.createElement("input",{className:"contact-card__name",type:"text",name:"name",id:"name",placeholder:"Name"})),i.a.createElement("div",{className:"contact-card__field half"},i.a.createElement("input",{className:"contact-card__email ",type:"email",name:"email",id:"email",placeholder:"Email"})),i.a.createElement("div",{className:"contact-card__field"},i.a.createElement("textarea",{className:"contact-card__message ",name:"message",id:"message",rows:"8",placeholder:"Start typing..."})),i.a.createElement("div",{className:"contact-card__field"},i.a.createElement("div",{"data-netlify-recaptcha":"true"}))),i.a.createElement("ul",{className:"contact-card__actions"},i.a.createElement("li",null,i.a.createElement("input",{className:"contact-card__send-message btn",type:"submit",value:"Send Message"})))))))});var r=function(e){var a,t;function n(a){var t;return(t=e.call(this,a)||this).state={loading:"is-loading"},t}t=e,(a=n).prototype=Object.create(t.prototype),a.prototype.constructor=a,a.__proto__=t;var r=n.prototype;return r.componentDidMount=function(){var e=this;this.timeoutId=setTimeout(function(){e.setState({loading:""})},100)},r.componentWillUnmount=function(){this.timeoutId&&clearTimeout(this.timeoutId)},r.render=function(){var e=this.props.children;return i.a.createElement("div",{className:"body "+this.state.loading},i.a.createElement("div",{id:"wrapper"},e,i.a.createElement(c,null)))},n}(i.a.Component);a.a=r},191:function(e,a,t){"use strict";var n=t(0),i=t.n(n);a.a=function(e){return i.a.createElement("header",{id:"header"},i.a.createElement("h1",null,"Keegan Helmbrecht"),i.a.createElement("p",null,"Full Stack Developer"))}},194:function(e,a,t){e.exports=t.p+"static/pic04-1609dea61acb9e992d846c586683a226.jpg"}}]);
//# sourceMappingURL=component---src-pages-generic-js-371b79dc79575bd61fd5.js.map