(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{157:function(e,t,a){"use strict";a.r(t);a(41),a(161),a(95),a(96);var n=a(164),l=a(0),s=function(e){return l.createElement("li",{className:"mb-2 pl-4 position-relative"},l.createElement("i",{className:"resume-award-icon fas fa-trophy position-absolute","data-fa-transform":"shrink-2"}),l.createElement("div",{className:"resume-award-name"},e.title),l.createElement("div",{className:"resume-award-desc"},e.description))},r=function(e){return l.createElement("ul",{className:"list-unstyled resume-awards-list"},e.certifications.map(function(e,t){return l.createElement(s,Object.assign({key:t},e))}))},c=function(e){return l.createElement("li",{className:"mb-2"},l.createElement("div",{className:"resume-degree font-weight-bold"},e.titel),l.createElement("div",{className:"resume-degree-org"},e.uni),l.createElement("div",{className:"resume-degree-time"},e.from," - ",e.to))},i=function(e){return l.createElement("ul",{className:"list-unstyled"},e.educations.map(function(e,t){return l.createElement(c,Object.assign({key:t},e))}))},m=a(179),o=a.n(m),u={backgroundColor:"white",color:"black",borderRadius:"0.125rem",padding:"2px"},d=function(e){return l.createElement("div",{className:"secondary-info ml-md-auto mt-2"},l.createElement("ul",{className:"resume-social list-unstyled"},l.createElement("li",{className:"mb-3"},l.createElement("a",{href:"http://"+e.linkedin,target:"_blank",rel:"noopener noreferrer",className:"link-unstyled"},l.createElement("span",{className:"fa-container text-center mr-2"},l.createElement("i",{className:"fab fa-linkedin-in fa-fw",style:u})),e.linkedin)),l.createElement("li",{className:"mb-3"},l.createElement("a",{href:"http://"+e.github,target:"_blank",rel:"noopener noreferrer",className:"link-unstyled"},l.createElement("span",{className:"fa-container text-center mr-2"},l.createElement("i",{className:"fab fa-github fa-fw",style:u})),e.github)),l.createElement("li",{className:"mb-3"},l.createElement("a",{href:"http://"+e.xing,target:"_blank",rel:"noopener noreferrer",className:"link-unstyled"},l.createElement("span",{className:"fa-container text-center mr-2"},l.createElement("i",{className:"fab fa-xing fa-fw",style:u})),e.xing)),l.createElement("li",null,l.createElement("a",{href:"http://"+e.website,target:"_blank",rel:"noopener noreferrer",className:"link-unstyled"},l.createElement("span",{className:"fa-container text-center mr-2"},l.createElement("i",{className:"fas fa-globe",style:u})),e.website))))},E=(a(180),a(160)),p=function(e){return l.createElement("header",{className:"resume-header pt-4 pt-lg-0"},l.createElement("div",{className:"media flex-column flex-lg-row"},l.createElement(o.a,{className:"mr-3 img-fluid picture mx-auto",fluid:e.profile}),l.createElement("div",{className:"media-body p-4 d-flex flex-column flex-lg-row mx-auto mx-lg-0",style:{backgroundImage:"url("+E+")",color:"lightgrey"}},l.createElement("div",{className:"primary-info"},l.createElement("h1",{className:"name mt-0 mb-1 text-white text-uppercase text-uppercase"},e.name),l.createElement("div",{className:"title mb-3"},e.role),l.createElement("ul",{className:"list-unstyled"},l.createElement("li",{className:"mb-2"},l.createElement("a",{href:"mailto:"+e.email,className:"link-unstyled"},l.createElement("i",{className:"far fa-envelope fa-fw mr-2","data-fa-transform":"grow-3"}),e.email)),l.createElement("li",null,l.createElement("a",{href:"tel:"+e.phone,className:"link-unstyled"},l.createElement("i",{className:"fas fa-mobile-alt fa-fw mr-2","data-fa-transform":"grow-6"}),e.phone)))),l.createElement(d,e.socialMedia))))},f=function(e){return l.createElement("li",{className:"mb-2"},l.createElement("span",{className:"resume-lang-name font-weight-bold"},e.language)," ",l.createElement("small",{className:"text-muted font-weight-normal"},e.skill))},N=function(e){return l.createElement("ul",{className:"list-unstyled resume-lang-list"},e.languages.map(function(e,t){return l.createElement(f,Object.assign({key:t},e))}))},g=a(160),h=function(e){return l.createElement("div",{className:"resume-skill-item"},l.createElement("h4",{className:"resume-skills-cat font-weight-bold"},e.title),l.createElement("ul",{className:"list-inline"},e.skills.map(function(e,t){return l.createElement("li",{className:"list-inline-item",key:t},l.createElement("span",{className:"badge",style:{backgroundImage:"url("+g+")",color:"white"}},l.createElement("a",{href:"http://google.com/search?q="+e,target:"_blank",rel:"noopener noreferrer",className:"link-unstyled"},e)))})))},b={de:{CAREER_SUMMARY:"Karriere Zusammenfassung",CERTIFICATIONS:"Zertifizierungen",WORK_XP:"Arbeitserfahrung",WATERSPORT:"Wassersport",HOMEAUTOMATION:"Heim Automation",SKILLS:"Kentnisse",EDUCATION:"Ausbildung",LANGUAGES:"Sprachen",INTEREST:"Interessen",GERMAN:"Deutsch",ENGLISH:"Englisch",NATIVE:"Muttersprache",FLUENT:"Fließend",OPENSOURCE:"Open Source Projekte",SOURCEONGITHUB:"Quellcode auf Github",ACHIEVEMENTS:"Ergebnisse",TECHNOLOGY_USED:"Verwendete Technologie",OTHERS:"Andere",MORE_PROJECTS:"Mehr Projekte auf Github"},en:{CAREER_SUMMARY:"Career Summary",CERTIFICATIONS:"Certifications",WORK_XP:"Work Experience",WATERSPORT:"Watersports",HOMEAUTOMATION:"Home Automation",SKILLS:"Skills",EDUCATION:"Education",LANGUAGES:"Languages",INTEREST:"Interest",GERMAN:"German",ENGLISH:"English",NATIVE:"Native",FLUENT:"Fluent",OPENSOURCE:"Open Source Projects",SOURCEONGITHUB:"Sourcecode on Github",ACHIEVEMENTS:"Achievements",TECHNOLOGY_USED:"Technology used",OTHERS:"Others",MORE_PROJECTS:"More Projects on Github"}},k="en",v=function(e){return b[k]&&b[k][e]?b[k][e]:"key-not-found ["+e+"]"},y=function(e){return l.createElement("div",null,l.createElement("h4",{className:"resume-timeline-item-desc-heading font-weight-bold"},v("ACHIEVEMENTS")),l.createElement("ul",{style:{marginLeft:"17px"}},e.achievements.map(function(e,t){return l.createElement("li",{key:t},e)})))},S=a(160),O=function(e){return l.createElement("div",null,l.createElement("h4",{className:"resume-timeline-item-desc-heading font-weight-bold"},v("TECHNOLOGY_USED")),l.createElement("ul",{className:"list-inline"},e.technologies.map(function(e,t){return l.createElement("li",{className:"list-inline-item",key:t},l.createElement("span",{className:"badge badge-primary badge-pill",style:{backgroundImage:"url("+S+")",fontWeight:"normal"}},l.createElement("a",{href:"http://google.com/search?q="+e,target:"_blank",rel:"noopener noreferrer",className:"link-unstyled"},e)))})))},w=a(160),x=function(e){return l.createElement("article",{className:"resume-timeline-item position-relative pb-5"},l.createElement("div",{className:"resume-timeline-item-header mb-2"},l.createElement("div",{className:"d-flex flex-column flex-md-row"},l.createElement("h3",{className:"resume-position-title font-weight-bold mb-1"},e.title),l.createElement("div",{className:"resume-company-name ml-auto"},e.company)),e.role,l.createElement("a",{href:e.url,rel:"external nofollow",className:"link-unstyled",target:"_blank"},e.url),l.createElement("div",{className:"resume-position-time"},e.from," - ",e.to," ",l.createElement("span",{style:{backgroundImage:"url("+w+")",color:"white",padding:"0px 7px",borderRadius:"25px",float:"right"}},e.location))),l.createElement("div",{className:"resume-timeline-item-desc"},l.createElement("p",null,e.description),l.createElement(y,{achievements:e.achievements}),l.createElement(O,{technologies:e.technologies})))},T=a(160),R=function(e){return l.createElement("li",{className:"mb-2"},l.createElement("div",{className:"resume-skill-name"},l.createElement("a",{href:"http://google.com/search?q="+e.name,target:"_blank",rel:"noopener noreferrer",className:"link-unstyled"},e.name)),l.createElement("div",{className:"progress resume-progress"},l.createElement("div",{className:"progress-bar",role:"progressbar",style:{width:e.xpInPercentage,backgroundImage:"url("+T+")"}})))},I=function(e){return l.createElement("div",{className:"resume-skill-item"},l.createElement("h4",{className:"resume-skills-cat font-weight-bold"},e.title),l.createElement("ul",{className:"list-unstyled mb-4"},e.skills.map(function(e,t){return l.createElement(R,{key:t,name:e.name,xpInPercentage:e.xpInPercentage})})))},A=(a(181),function(e){return l.createElement("main",null,e.items.map(function(t,a){return l.createElement("span",{key:a,onClick:function(){return e.onClick(a)}},l.createElement("input",{type:"radio",name:"tabs",checked:t.checked,onChange:function(){}}),l.createElement("label",{style:{width:"50%"}},l.createElement("i",{className:"mr-2 "+t.icon})," ",l.createElement("span",{className:"\td-none d-md-block"},t.name)))}))});a(182);a.d(t,"query",function(){return P});var C=new(0,a(183).Parser),U=a(224),M=a(160),G=0,_=function(){document&&(G=document.documentElement.scrollTop)},P=(t.default=function(e){var t;t=e.pageContext.locale,k=t;var a=function(){return!e.location.pathname.includes("work")&&!e.location.pathname.includes("opensource")||e.location.pathname.includes("work")},s=l.useState(a()?0:1),c=s[0],m=s[1],o=l.useState([{name:v("WORK_XP"),path:"work",checked:a(),icon:"fas fa-briefcase"},{name:v("OPENSOURCE"),path:"opensource",checked:e.location.pathname.includes("opensource"),icon:"fab fa-github"}]),u=o[0];o[1];l.useEffect(function(){setTimeout(function(){window&&0!==G&&window.scrollTo(0,G)},100)});return l.createElement("div",{className:"container",style:{userSelect:"none"}},l.createElement("article",{className:"resume-wrapper text-center position-relative"},l.createElement("div",{className:"resume-wrapper-inner mx-auto text-left bg-white shadow-lg"},l.createElement(p,{profile:e.data.profile.childImageSharp.fluid,role:e.data.social.nodes[0].childSocialJson.role,name:e.data.social.nodes[0].childSocialJson.name,phone:e.data.social.nodes[0].childSocialJson.phone,email:e.data.social.nodes[0].childSocialJson.email,socialMedia:{github:e.data.social.nodes[0].childSocialJson.social.github,linkedin:e.data.social.nodes[0].childSocialJson.social.linkedin,website:e.data.social.nodes[0].childSocialJson.social.website,xing:e.data.social.nodes[0].childSocialJson.social.xing}}),l.createElement("div",{className:"resume-body p-5",style:{backgroundImage:"url("+U+")",overflow:"hidden"}},l.createElement("div",{className:"text-right"},l.createElement("button",{type:"button",className:"btn",onClick:function(){return t=e.location.pathname,_(),void(t.includes("/de/")?Object(n.a)("/en/"+u[c].path):Object(n.a)("/de/"+u[c].path));var t},style:{cursor:"pointer",backgroundImage:"url("+M+")",color:"lightgrey"}},"de"===e.pageContext.locale?"EN":"DE")),l.createElement("section",{className:"resume-section summary-section mb-5"},l.createElement("h2",{className:"resume-section-title text-uppercase font-weight-bold pb-3 mb-3"},v("CAREER_SUMMARY")),l.createElement("div",{className:"resume-section-content"},C.parse(e.data.summary.html))),l.createElement("div",{className:"row"},l.createElement("div",{className:"col-lg-9"},l.createElement(A,{items:u,onClick:function(t){_(),m(t),Object(n.a)("/"+e.pageContext.locale+"/"+u[t].path)}}),l.createElement("div",{className:"mb-3"}),u[0].checked&&l.createElement("section",{className:"resume-section experience-section mb-5"},l.createElement("div",{className:"resume-section-content"},l.createElement("div",{className:"resume-timeline position-relative"},e.data.projects.nodes[0].childProjectsJson.projects.map(function(e,t){return l.createElement(x,Object.assign({key:t},e))})))),u[1].checked&&l.createElement("section",{className:"resume-section experience-section mb-5"},l.createElement("div",{className:"resume-section-content"},l.createElement("div",{className:"resume-timeline position-relative"},e.data.opensource.nodes[0].childOpensourceJson.projects.map(function(e,t){return l.createElement(x,Object.assign({key:t},e))}))),l.createElement("div",{className:"my-5 text-center"},l.createElement("div",null,v("MORE_PROJECTS")),l.createElement("a",{href:"https://github.com/firsttris?tab=repositories",target:"_blank",rel:"noopener noreferrer",className:"link-unstyled"},"https://github.com/firsttris?tab=repositories")))),l.createElement("div",{className:"col-lg-3",style:{marginTop:"40px"}},l.createElement("section",{className:"resume-section skills-section mb-5"},l.createElement("h2",{className:"resume-section-title text-uppercase font-weight-bold pb-3 mb-3"},v("SKILLS")),l.createElement("div",{className:"resume-section-content"},l.createElement(I,{skills:e.data.skills.nodes[0].childSkillsJson.frontend,title:"Frontend"}),l.createElement(I,{skills:e.data.skills.nodes[0].childSkillsJson.backend,title:"Backend"}),l.createElement(h,{skills:e.data.skills.nodes[0].childSkillsJson.others,title:v("OTHERS")}))),l.createElement("section",{className:"resume-section education-section mb-5"},l.createElement("h2",{className:"resume-section-title text-uppercase font-weight-bold pb-3 mb-3"},v("EDUCATION")),l.createElement("div",{className:"resume-section-content"},l.createElement(i,{educations:e.data.educations.nodes[0].childEducationsJson.educations}))),l.createElement("section",{className:"resume-section reference-section mb-5"},l.createElement("h2",{className:"resume-section-title text-uppercase font-weight-bold pb-3 mb-3"},v("CERTIFICATIONS")),l.createElement("div",{className:"resume-section-content"},l.createElement(r,{certifications:e.data.certs.nodes[0].childCertsJson.certs}))),l.createElement("section",{className:"resume-section language-section mb-5"},l.createElement("h2",{className:"resume-section-title text-uppercase font-weight-bold pb-3 mb-3"},v("LANGUAGES")),l.createElement("div",{className:"resume-section-content"},l.createElement(N,{languages:[{language:v("GERMAN"),skill:v("NATIVE")},{language:v("ENGLISH"),skill:v("FLUENT")}]}))),l.createElement("section",{className:"resume-section interests-section mb-5"},l.createElement("h2",{className:"resume-section-title text-uppercase font-weight-bold pb-3 mb-3"},v("INTEREST")),l.createElement("div",{className:"resume-section-content"},l.createElement("ul",{className:"list-unstyled"},l.createElement("li",{className:"mb-1"},v("WATERSPORT")),l.createElement("li",{className:"mb-1"},v("HOMEAUTOMATION")))))))))),l.createElement("p",{style:{textAlign:"center"}},l.createElement("a",{href:"https://github.com/firsttris/gatsby-cv",className:"link-unstyled",target:"_blank",rel:"noopener noreferrer"},v("SOURCEONGITHUB"))))},"3095932917")},160:function(e,t,a){e.exports=a.p+"static/paper-8700d9ec59e26ed45f894baa0c0a5084.png"},162:function(e,t,a){var n;e.exports=(n=a(165))&&n.default||n},164:function(e,t,a){"use strict";var n=a(0),l=a.n(n),s=a(6),r=a.n(s),c=a(40);a.d(t,"a",function(){return c.navigate});a(162),l.a.createContext({});r.a.object,r.a.string.isRequired,r.a.func,r.a.func},165:function(e,t,a){"use strict";a.r(t);a(41);var n=a(0),l=a.n(n),s=a(6),r=a.n(s),c=a(64),i=function(e){var t=e.location,a=e.pageResources;return a?l.a.createElement(c.a,Object.assign({location:t,pageResources:a},a.json)):null};i.propTypes={location:r.a.shape({pathname:r.a.string.isRequired}).isRequired},t.default=i},180:function(e,t,a){e.exports=a.p+"static/profil-d3c969fc313df9f481ab7aa429916237.png"},224:function(e,t,a){e.exports=a.p+"static/lines-1c2d10c63aca0b8bfd30d30a872a2878.png"}}]);
//# sourceMappingURL=component---src-templates-cv-tsx-cf929b9f411a53f0c57d.js.map