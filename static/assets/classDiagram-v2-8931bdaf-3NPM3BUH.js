import{a as P,b as N,c as $}from"./chunk-Q7SFOICH.js";import{a as z}from"./chunk-5N5GTYLJ.js";import"./chunk-DNBLW6CQ.js";import"./chunk-2GUY7UNH.js";import"./chunk-WQNNISML.js";import{a as G}from"./chunk-DHRALF6T.js";import"./chunk-FHXD2RFP.js";import{Ca as D,Da as F,Ka as H,b as K,c as Q,da as d,h as w,ha as C,na as i,pa as q,v as L,z as U}from"./chunk-RQT2CUZQ.js";import"./chunk-CIZ5P7CP.js";import{a as S,h as T}from"./chunk-2YVZDWG7.js";var ie=T(K(),1),re=T(Q(),1),ce=T(U(),1);var _=s=>C.sanitizeText(s,i()),E={dividerMargin:10,padding:5,textHeight:10,curve:void 0},X=function(s,o,f,a){let e=Object.keys(s);d.info("keys:",e),d.info(s),e.forEach(function(r){var y;var l,c;let t=s[r],p={shape:"rect",id:t.id,domId:t.domId,labelText:_(t.id),labelStyle:"",style:"fill: none; stroke: black",padding:(y=(l=i().flowchart)==null?void 0:l.padding)!=null?y:(c=i().class)==null?void 0:c.padding};o.setNode(t.id,p),W(t.classes,o,f,a,t.id),d.info("setNode",p)})},W=function(s,o,f,a,e){let r=Object.keys(s);d.info("keys:",r),d.info(s),r.forEach(function(l){var g,m;var c,t;let n=s[l],p="";n.cssClasses.length>0&&(p=p+" "+n.cssClasses.join(" "));let y={labelStyle:"",style:""},v=(g=n.label)!=null?g:n.id,b=0,h="class_box",u={labelStyle:y.labelStyle,shape:h,labelText:_(v),classData:n,rx:b,ry:b,class:p,style:y.style,id:n.id,domId:n.domId,tooltip:a.db.getTooltip(n.id,e)||"",haveCallback:n.haveCallback,link:n.link,width:n.type==="group"?500:void 0,type:n.type,padding:(m=(c=i().flowchart)==null?void 0:c.padding)!=null?m:(t=i().class)==null?void 0:t.padding};o.setNode(n.id,u),e&&o.setParent(n.id,e),d.info("setNode",u)})},Y=function(s,o,f,a){d.info(s),s.forEach(function(e,r){var m;var l,c;let t=e,n="",p={labelStyle:"",style:""},y=t.text,v=0,b="note",h={labelStyle:p.labelStyle,shape:b,labelText:_(y),noteData:t,rx:v,ry:v,class:n,style:p.style,id:t.id,domId:t.id,tooltip:"",type:"note",padding:(m=(l=i().flowchart)==null?void 0:l.padding)!=null?m:(c=i().class)==null?void 0:c.padding};if(o.setNode(t.id,h),d.info("setNode",h),!t.class||!(t.class in a))return;let u=f+r,g={id:`edgeNote${u}`,classes:"relation",pattern:"dotted",arrowhead:"none",startLabelRight:"",endLabelLeft:"",arrowTypeStart:"none",arrowTypeEnd:"none",style:"fill:none",labelStyle:"",curve:D(E.curve,L)};o.setEdge(t.id,t.class,g,u)})},Z=function(s,o){let f=i().flowchart,a=0;s.forEach(function(e){var c;var r;a++;let l={classes:"relation",pattern:e.relation.lineType==1?"dashed":"solid",id:"id"+a,arrowhead:e.type==="arrow_open"?"none":"normal",startLabelRight:e.relationTitle1==="none"?"":e.relationTitle1,endLabelLeft:e.relationTitle2==="none"?"":e.relationTitle2,arrowTypeStart:V(e.relation.type1),arrowTypeEnd:V(e.relation.type2),style:"fill:none",labelStyle:"",curve:D(f==null?void 0:f.curve,L)};if(d.info(l,e),e.style!==void 0){let t=F(e.style);l.style=t.style,l.labelStyle=t.labelStyle}e.text=e.title,e.text===void 0?e.style!==void 0&&(l.arrowheadStyle="fill: #333"):(l.arrowheadStyle="fill: #333",l.labelpos="c",((c=(r=i().flowchart)==null?void 0:r.htmlLabels)!=null?c:i().htmlLabels)?(l.labelType="html",l.label='<span class="edgeLabel">'+e.text+"</span>"):(l.labelType="text",l.label=e.text.replace(C.lineBreakRegex,`
`),e.style===void 0&&(l.style=l.style||"stroke: #333; stroke-width: 1.5px;fill:none"),l.labelStyle=l.labelStyle.replace("color:","fill:"))),o.setEdge(e.id1,e.id2,l,a)})},j=function(s){E=S(S({},E),s)},O=async function(s,o,f,a){var m,A,I,M;d.info("Drawing class - ",o);let e=(m=i().flowchart)!=null?m:i().class,r=i().securityLevel;d.info("config:",e);let l=(A=e==null?void 0:e.nodeSpacing)!=null?A:50,c=(I=e==null?void 0:e.rankSpacing)!=null?I:50,t=new G({multigraph:!0,compound:!0}).setGraph({rankdir:a.db.getDirection(),nodesep:l,ranksep:c,marginx:8,marginy:8}).setDefaultEdgeLabel(function(){return{}}),n=a.db.getNamespaces(),p=a.db.getClasses(),y=a.db.getRelations(),v=a.db.getNotes();d.info(y),X(n,t,o,a),W(p,t,o,a),Z(y,t),Y(v,t,y.length+1,p);let b;r==="sandbox"&&(b=w("#i"+o));let h=r==="sandbox"?w(b.nodes()[0].contentDocument.body):w("body"),u=h.select(`[id="${o}"]`),g=h.select("#"+o+" g");if(await z(g,t,["aggregation","extension","composition","dependency","lollipop"],"classDiagram",o),H.insertTitle(u,"classTitleText",(M=e==null?void 0:e.titleTopMargin)!=null?M:5,a.db.getDiagramTitle()),q(t,u,e==null?void 0:e.diagramPadding,e==null?void 0:e.useMaxWidth),!(e!=null&&e.htmlLabels)){let R=r==="sandbox"?b.nodes()[0].contentDocument:document,J=R.querySelectorAll('[id="'+o+'"] .edgeLabel .label');for(let k of J){let B=k.getBBox(),x=R.createElementNS("http://www.w3.org/2000/svg","rect");x.setAttribute("rx",0),x.setAttribute("ry",0),x.setAttribute("width",B.width),x.setAttribute("height",B.height),k.insertBefore(x,k.firstChild)}}};function V(s){let o;switch(s){case 0:o="aggregation";break;case 1:o="extension";break;case 2:o="composition";break;case 3:o="dependency";break;case 4:o="lollipop";break;default:o="none"}return o}var ee={setConf:j,draw:O},ye={parser:P,db:N,renderer:ee,styles:$,init:s=>{s.class||(s.class={}),s.class.arrowMarkerAbsolute=s.arrowMarkerAbsolute,N.clear()}};export{ye as diagram};
