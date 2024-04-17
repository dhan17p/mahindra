//@ui5-bundle folderstruc/Component-preload.js
jQuery.sap.registerPreloadedModules({
"version":"2.0",
"modules":{
	"folderstruc/Component.js":function(){sap.ui.define(["sap/ui/core/UIComponent","sap/ui/Device","folderstruc/model/models"],function(e,t,i){"use strict";return e.extend("folderstruc.Component",{metadata:{manifest:"json"},init:function(){e.prototype.init.apply(this,arguments);this.getRouter().initialize();this.setModel(i.createDeviceModel(),"device")}})});
},
	"folderstruc/controller/App.controller.js":function(){sap.ui.define(["sap/ui/core/mvc/Controller"],function(n){"use strict";return n.extend("folderstruc.controller.App",{onInit:function(){}})});
},
	"folderstruc/controller/Folder.controller.js":function(){sap.ui.define(["sap/ui/core/mvc/Controller","sap/m/VBox","sap/m/Label","sap/ui/webc/main/TreeItemCustom","sap/m/HBox","sap/ui/core/Icon","sap/m/Text","sap/m/MessageBox"],function(e,t){"use strict";var o=false;var a;var n;var s=[];var r;var g=[];return e.extend("folderstructure.controller.Folder_View",{onInit:function(){},edit:async function(e){debugger;a=this.getView().mAggregations.content[0].mAggregations.content[1].mAggregations.items[0].mAggregations.items[0].mAggregations.items;for(let e=0;e<a.length;e++){a[e].mAggregations.content[0].mAggregations.items[1].mAggregations.items[1].setEditable(true)}},button:async function(e){for(let e=0;e<a.length;e++){a[e].mAggregations.content[0].mAggregations.items[1].mAggregations.items[1].setEditable(false)}debugger;var t=this.getView().byId("main").getItems()[0].mAggregations.items[0].mAggregations.items;for(let a=0;a<t.length;a++){var o=t[a].mAggregations.content[0].mAggregations.items[1].mAggregations.items[0].getText();var n=t[a].mAggregations.content[0].mAggregations.items[1].mAggregations.items[1].getSelectedKeys();if(o.length&&n.length!=0){let t="data";let a=e.oSource.getModel().bindContext(`/${t}(...)`);a.setParameter("id",o);a.setParameter("Data",n);await a.execute();const r=a.getBoundContext();var s=r.getValue();console.log(s)}}var r="Saved Successfully";new sap.m.MessageBox.success(r)},onAfterRendering:async function(e){var t=this.getView().byId("page");var a=this.getView().byId("hbox");a.addItem(new sap.m.Title({text:"Folders"}).addStyleClass("folder"));a.addItem(new sap.m.Title({text:"Assign"}).addStyleClass("title"));debugger;function i(){const e=Math.random().toString(36).substr(2,9);const t=Date.now().toString(36);const o=e+t;return o}debugger;let l="getdata";var m="1";let c=e.oSource.getModel().bindContext(`/${l}(...)`);c.setParameter("id",m);await c.execute();const d=c.getBoundContext();var u=d.getValue();u=JSON.parse(u.value);var x=[];for(let e=0;e<u.data1.length;e++){x.push(u.data1[e].Folder_Name)}console.log(u);var f=this.getView().byId("main");var h=["rajendraakshay1@gmail.com","johnson.rozario@peolsolutions.com","dhanush.k@peolsolutions.com"];var p=[];var w=["John","Ajay"];f.addItem(new sap.ui.webc.main.Tree(`tree${i()}`,{itemClick:async function(e){},items:[new sap.ui.webc.main.TreeItemCustom(`fold1${i()}`,{content:[new sap.m.HBox({items:[new sap.ui.core.Icon({src:"sap-icon://folder-full"}),new sap.m.HBox(`hbox_fold1_text`,{justifyContent:"SpaceBetween",items:[new sap.m.Text({text:"ROOT"})]}).addStyleClass("child")]})]})]}));let v=f.getItems()[0];for(let t=0;t<x.length;t++){var b=x[t];p=[];for(let e=0;e<u.data.length;e++){if(b==u.data[e].id){p.push(u.data[e].Data)}}var A;v.getItems()[0].addItem(new sap.ui.webc.main.TreeItemCustom(`fold1.1${i()}`,{content:[new sap.m.HBox({items:[new sap.ui.core.Icon(`hbox_fold1.1_icon${i()}`,{src:"sap-icon://folder-full"}).addStyleClass("ven1"),new sap.m.HBox(`hbox_fold1.1_text${i()}`,{width:"700px",justifyContent:"SpaceBetween",items:[new sap.m.Text({text:x[t]}).addStyleClass("ven1"),new sap.m.MultiComboBox({width:"400px",editable:o,items:h.map(function(e){return new sap.ui.core.Item({key:e,text:e})}),selectedKeys:p,showSelectAll:true,selectionFinish:async function(t){debugger;let o=[];let a=t.mParameters.selectedItems;if(a.length==0){let o=t.oSource.oParent.mAggregations.items[0].mProperties.text;let a="delete1";let s=e.oSource.getModel().bindContext(`/${a}(...)`);s.setParameter("id",o);await s.execute();const r=s.getBoundContext();var n=r.getValue();console.log(n);return}let s=t.mParameters.selectedItems[0].oParent.oParent.mAggregations.items[0].getText();for(var r=0;r<a.length;r++){console.log();o.push(a[r].getText())}console.log();let g="check";var i="1";let l=e.oSource.getModel().bindContext(`/${g}(...)`);l.setParameter("id",o);l.setParameter("fold",s);await l.execute();const m=l.getBoundContext();var n=m.getValue();console.log("unselected value has been removed")},change:async function(e){debugger;if(A){r=e.oSource.mAggregations.tokenizer.mAggregations.tokens;for(let e=0;e<r.length;e++){g.push(r[e].getText())}var t=s.filter(e=>!g.includes(e));var o=e.oSource.getParent().mAggregations.items[0].getText();if(t.length&&o.length>0){let n="remove";let r=e.oSource.getModel().bindContext(`/${n}(...)`);r.setParameter("id",o);r.setParameter("fold",t);await r.execute();const i=r.getBoundContext();var a=i.getValue();console.log("executed delete");s=[];g=[]}}A=false},selectionChange:async function(e){debugger;A=true;n=e.oSource.mAggregations.tokenizer.mAggregations.tokens;for(let e=0;e<n.length;e++){s.push(n[e].getText())}n=Array.from(new Set(s));if(n=="Select All"){}console.log()}}).addStyleClass("box")]}).addStyleClass("child")]})]}));debugger}}})});
},
	"folderstruc/i18n/i18n.properties":'# This is the resource bundle for folderstruc\n\n#Texts for manifest.json\n\n#XTIT: Application name\nappTitle=App Title\n\n#YDES: Application description\nappDescription=An SAP Fiori application.\n#XTIT: Main view title\ntitle=App Title\n\n#XFLD,39\nflpTitle=Folder Assign\n',
	"folderstruc/manifest.json":'{"_version":"1.59.0","sap.app":{"id":"folderstruc","type":"application","i18n":"i18n/i18n.properties","applicationVersion":{"version":"0.0.1"},"title":"{{appTitle}}","description":"{{appDescription}}","resources":"resources.json","sourceTemplate":{"id":"@sap/generator-fiori:basic","version":"1.13.2","toolsId":"eca043ff-aef8-44a4-a527-36f30151693a"},"dataSources":{"mainService":{"uri":"odata/v4/my/","type":"OData","settings":{"annotations":[],"odataVersion":"4.0"}}},"crossNavigation":{"inbounds":{"Folder-Display":{"semanticObject":"Folder","action":"Display","title":"{{flpTitle}}","signature":{"parameters":{},"additionalParameters":"allowed"}}}}},"sap.ui":{"technology":"UI5","icons":{"icon":"","favIcon":"","phone":"","phone@2":"","tablet":"","tablet@2":""},"deviceTypes":{"desktop":true,"tablet":true,"phone":true}},"sap.ui5":{"flexEnabled":true,"dependencies":{"minUI5Version":"1.122.2","libs":{"sap.m":{},"sap.ui.core":{},"sap.f":{},"sap.suite.ui.generic.template":{},"sap.ui.comp":{},"sap.ui.generic.app":{},"sap.ui.table":{},"sap.ushell":{},"sap.ui.webc.main":{}}},"contentDensities":{"compact":true,"cozy":true},"models":{"i18n":{"type":"sap.ui.model.resource.ResourceModel","settings":{"bundleName":"folderstruc.i18n.i18n"}},"":{"dataSource":"mainService","preload":true,"settings":{"synchronizationMode":"None","operationMode":"Server","autoExpandSelect":true,"earlyRequests":true}}},"resources":{"css":[{"uri":"css/style.css"}]},"routing":{"config":{"routerClass":"sap.m.routing.Router","viewType":"XML","async":true,"viewPath":"folderstruc.view","controlAggregation":"pages","controlId":"app","clearControlAggregation":false},"routes":[{"name":"RouteFolder","pattern":":?query:","target":["TargetFolder"]}],"targets":{"TargetFolder":{"viewType":"XML","transition":"slide","clearControlAggregation":false,"viewId":"Folder","viewName":"Folder"}}},"rootView":{"viewName":"folderstruc.view.App","type":"XML","async":true,"id":"App"}},"sap.cloud":{"public":true,"service":"mahindravendorapprouter"}}',
	"folderstruc/model/models.js":function(){sap.ui.define(["sap/ui/model/json/JSONModel","sap/ui/Device"],function(e,n){"use strict";return{createDeviceModel:function(){var i=new e(n);i.setDefaultBindingMode("OneWay");return i}}});
},
	"folderstruc/view/App.view.xml":'<mvc:View controllerName="folderstruc.controller.App"\n    xmlns:html="http://www.w3.org/1999/xhtml"\n    xmlns:mvc="sap.ui.core.mvc" displayBlock="true"\n    xmlns="sap.m"><App id="app"></App></mvc:View>\n',
	"folderstruc/view/Folder.view.xml":'<mvc:View controllerName="folderstruc.controller.Folder"\n    xmlns:mvc="sap.ui.core.mvc" displayBlock="true"\n    xmlns="sap.m"><Page id="page"><headerContent><Button id="b11" text="Edit" type="Emphasized" press="edit" iconFirst="true" icon="sap-icon://edit"></Button></headerContent><HBox id="hbox"></HBox><VBox id="main" height="90vh" backgroundDesign="Transparent"></VBox><footer><OverflowToolbar class="save" id="t1" style="Standard"><Button id="b1" text="save" type="Emphasized" press="button" iconFirst="true" icon="sap-icon://save"></Button></OverflowToolbar></footer></Page></mvc:View>\n'
}});
