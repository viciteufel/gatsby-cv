(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{156:function(e,t,a){"use strict";a.r(t);a(41);var n=a(0),s=function(e){return n.createElement("li",{className:"mb-2 pl-4 position-relative"},n.createElement("i",{className:"resume-award-icon fas fa-trophy position-absolute","data-fa-transform":"shrink-2"}),n.createElement("div",{className:"resume-award-name"},e.title),n.createElement("div",{className:"resume-award-desc"},e.description))},l=function(e){return n.createElement("ul",{className:"list-unstyled resume-awards-list"},e.certifications.map(function(e,t){return n.createElement(s,Object.assign({key:t},e))}))},r=function(e){return n.createElement("li",{className:"mb-2"},n.createElement("div",{className:"resume-degree font-weight-bold"},e.titel),n.createElement("div",{className:"resume-degree-org"},e.uni),n.createElement("div",{className:"resume-degree-time"},e.from," - ",e.to))},m=function(e){return n.createElement("ul",{className:"list-unstyled"},e.educations.map(function(e,t){return n.createElement(r,Object.assign({key:t},e))}))},c=(a(158),{backgroundColor:"white",color:"black",borderRadius:"0.125rem",padding:"2px"}),i=function(e){return n.createElement("div",{className:"secondary-info ml-md-auto mt-2"},n.createElement("ul",{className:"resume-social list-unstyled"},n.createElement("li",{className:"mb-3"},n.createElement("a",{href:"http://"+e.linkedin,target:"_blank",rel:"noopener noreferrer",className:"link-unstyled"},n.createElement("span",{className:"fa-container text-center mr-2"},n.createElement("i",{className:"fab fa-linkedin-in fa-fw",style:c})),e.linkedin)),n.createElement("li",{className:"mb-3"},n.createElement("a",{href:"http://"+e.github,target:"_blank",rel:"noopener noreferrer",className:"link-unstyled"},n.createElement("span",{className:"fa-container text-center mr-2"},n.createElement("i",{className:"fab fa-github-alt fa-fw",style:c})),e.github)),n.createElement("li",{className:"mb-3"},n.createElement("a",{href:"http://"+e.xing,target:"_blank",rel:"noopener noreferrer",className:"link-unstyled"},n.createElement("span",{className:"fa-container text-center mr-2"},n.createElement("i",{className:"fab fa-xing fa-fw",style:c})),e.xing)),n.createElement("li",null,n.createElement("a",{href:"http://"+e.website,target:"_blank",rel:"noopener noreferrer",className:"link-unstyled"},n.createElement("span",{className:"fa-container text-center mr-2"},n.createElement("i",{className:"fas fa-globe",style:c})),e.website))))},o=a(160),u=function(e){return n.createElement("header",{className:"resume-header pt-4 pt-md-0"},n.createElement("div",{className:"media flex-column flex-md-row"},n.createElement("img",{className:"mr-3 img-fluid picture mx-auto",src:o,alt:"",style:{height:"216px"}}),n.createElement("div",{className:"media-body p-4 d-flex flex-column flex-md-row mx-auto mx-lg-0",style:{backgroundColor:"#434E5E",color:"lightgrey"}},n.createElement("div",{className:"primary-info"},n.createElement("h1",{className:"name mt-0 mb-1 text-white text-uppercase text-uppercase"},e.name),n.createElement("div",{className:"title mb-3"},e.role),n.createElement("ul",{className:"list-unstyled"},n.createElement("li",{className:"mb-2"},n.createElement("a",{href:"#",className:"link-unstyled"},n.createElement("i",{className:"far fa-envelope fa-fw mr-2","data-fa-transform":"grow-3"}),e.email)),n.createElement("li",null,n.createElement("a",{href:"#",className:"link-unstyled"},n.createElement("i",{className:"fas fa-mobile-alt fa-fw mr-2","data-fa-transform":"grow-6"}),e.phone)))),n.createElement(i,e.socialMedia))))},d=function(e){return n.createElement("li",{className:"mb-2"},n.createElement("span",{className:"resume-lang-name font-weight-bold"},e.language)," ",n.createElement("small",{className:"text-muted font-weight-normal"},e.skill))},E=function(e){return n.createElement("ul",{className:"list-unstyled resume-lang-list"},e.languages.map(function(e,t){return n.createElement(d,Object.assign({key:t},e))}))},p=function(e){return n.createElement("div",{className:"resume-skill-item"},n.createElement("h4",{className:"resume-skills-cat font-weight-bold"},"Others"),n.createElement("ul",{className:"list-inline"},e.skills.map(function(e,t){return n.createElement("li",{className:"list-inline-item",key:t},n.createElement("span",{className:"badge badge-light"},e))})))},f=function(e){return n.createElement("div",null,n.createElement("h4",{className:"resume-timeline-item-desc-heading font-weight-bold"},"Achievements:"),n.createElement("ul",null,e.achievements.map(function(e,t){return n.createElement("li",{key:t},e)})))},g=function(e){return n.createElement("div",null,n.createElement("h4",{className:"resume-timeline-item-desc-heading font-weight-bold"},"Technologies used:"),n.createElement("ul",{className:"list-inline"},e.technologies.map(function(e,t){return n.createElement("li",{className:"list-inline-item",key:t},n.createElement("span",{className:"badge badge-primary badge-pill",style:{backgroundColor:"#434E5E"}},n.createElement("a",{href:"http://google.com/search?q="+e,target:"_blank",rel:"noopener noreferrer",className:"link-unstyled"},e)))})))},b=function(e){return n.createElement("article",{className:"resume-timeline-item position-relative pb-5"},n.createElement("div",{className:"resume-timeline-item-header mb-2"},n.createElement("div",{className:"d-flex flex-column flex-md-row"},n.createElement("h3",{className:"resume-position-title font-weight-bold mb-1"},e.title),n.createElement("div",{className:"resume-company-name ml-auto"},e.company)),e.role,n.createElement("div",{className:"resume-position-time"},e.from," - ",e.to," ",n.createElement("span",{style:{backgroundColor:"#434E5E",color:"white",padding:"0px 7px",borderRadius:"25px",float:"right"}},e.location))),n.createElement("div",{className:"resume-timeline-item-desc"},n.createElement("p",null,e.description),n.createElement(f,{achievements:e.achievements}),n.createElement(g,{technologies:e.technologies})))},N=function(e){return n.createElement("li",{className:"mb-2"},n.createElement("div",{className:"resume-skill-name"},e.name),n.createElement("div",{className:"progress resume-progress"},n.createElement("div",{className:"progress-bar theme-progress-bar-dark",role:"progressbar",style:{width:e.xpInPercentage}})))},h=function(e){return n.createElement("div",{className:"resume-skill-item"},n.createElement("h4",{className:"resume-skills-cat font-weight-bold"},e.title),n.createElement("ul",{className:"list-unstyled mb-4"},e.skills.map(function(e,t){return n.createElement(N,{key:t,name:e.name,xpInPercentage:e.xpInPercentage})})))};a(161);a.d(t,"query",function(){return v});t.default=function(e){return n.createElement("div",{className:"container"},n.createElement("article",{className:"resume-wrapper text-center position-relative"},n.createElement("div",{className:"resume-wrapper-inner mx-auto text-left bg-white shadow-lg"},n.createElement(u,{role:"Full Stack Developer",name:"Tristan Teufel",phone:"0176 45744166",email:"tristanteufel@gmail.com",socialMedia:{github:"github.com/firsttris",linkedin:"sadsadadasd",website:"sadasdasdasd",xing:"asdasdasd"}}),n.createElement("div",{className:"resume-body p-5"},n.createElement("section",{className:"resume-section summary-section mb-5"},n.createElement("h2",{className:"resume-section-title text-uppercase font-weight-bold pb-3 mb-3"},"CAREER SUMMARY"),n.createElement("div",{className:"resume-section-content"},n.createElement("p",{className:"mb-0"},"Summarise your career here. You can make a PDF version of your resume using our free Sketch template here. Aenean commodo ligula eget dolor aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget."))),n.createElement("div",{className:"row"},n.createElement("div",{className:"col-lg-9"},n.createElement("section",{className:"resume-section experience-section mb-5"},n.createElement("h2",{className:"resume-section-title text-uppercase font-weight-bold pb-3 mb-3"},"Work Experience"),n.createElement("div",{className:"resume-section-content"},n.createElement("div",{className:"resume-timeline position-relative"},e.data.allFile.edges[0].node.childProjectsJson.projects.map(function(e,t){return n.createElement(b,Object.assign({key:t},e))}))))),n.createElement("div",{className:"col-lg-3"},n.createElement("section",{className:"resume-section skills-section mb-5"},n.createElement("h2",{className:"resume-section-title text-uppercase font-weight-bold pb-3 mb-3"},"Skills & Tools"),n.createElement("div",{className:"resume-section-content"},n.createElement(h,{title:"Frontend",skills:[{name:"reactjs",xpInPercentage:"50%"}]}),n.createElement(h,{title:"Backend",skills:[{name:"nodeJs",xpInPercentage:"50%"}]}),n.createElement(p,{skills:["devOps","docker"]}))),n.createElement("section",{className:"resume-section education-section mb-5"},n.createElement("h2",{className:"resume-section-title text-uppercase font-weight-bold pb-3 mb-3"},"Education"),n.createElement("div",{className:"resume-section-content"},n.createElement(m,{educations:[{titel:"bachelor",uni:"karlsruhe",from:"2008",to:"2012"},{titel:"bachelor",uni:"karlsruhe",from:"2008",to:"2012"}]}))),n.createElement("section",{className:"resume-section reference-section mb-5"},n.createElement("h2",{className:"resume-section-title text-uppercase font-weight-bold pb-3 mb-3"},"Certifications"),n.createElement("div",{className:"resume-section-content"},n.createElement(l,{certifications:[{title:"Oracle ADF",description:"Some oracle JAva Thing"},{title:"FreecodeCamp",description:"Responsive Web Development Projects"}]}))),n.createElement("section",{className:"resume-section language-section mb-5"},n.createElement("h2",{className:"resume-section-title text-uppercase font-weight-bold pb-3 mb-3"},"Languages"),n.createElement("div",{className:"resume-section-content"},n.createElement(E,{languages:[{language:"German",skill:"(native)"}]}))),n.createElement("section",{className:"resume-section interests-section mb-5"},n.createElement("h2",{className:"resume-section-title text-uppercase font-weight-bold pb-3 mb-3"},"Interests"),n.createElement("div",{className:"resume-section-content"},n.createElement("ul",{className:"list-unstyled"},n.createElement("li",{className:"mb-1"},"Climbing"),n.createElement("li",{className:"mb-1"},"Snowboarding"),n.createElement("li",{className:"mb-1"},"Cooking"))))))))))};var v="534457508"},158:function(e,t,a){var n=a(12).f,s=Function.prototype,l=/^\s*function ([^ (]*)/;"name"in s||a(10)&&n(s,"name",{configurable:!0,get:function(){try{return(""+this).match(l)[1]}catch(e){return""}}})},160:function(e,t,a){e.exports=a.p+"static/profil-d3c969fc313df9f481ab7aa429916237.png"}}]);
//# sourceMappingURL=component---src-templates-cv-tsx-46aa40f79e82f5510c5f.js.map