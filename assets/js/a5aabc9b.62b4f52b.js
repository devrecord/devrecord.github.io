"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4883],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},v="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),v=s(n),u=i,d=v["".concat(p,".").concat(u)]||v[u]||m[u]||a;return n?r.createElement(d,o(o({ref:t},c),{},{components:n})):r.createElement(d,o({ref:t},c))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[v]="string"==typeof e?e:i,o[1]=l;for(var s=2;s<a;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},454:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>m,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var r=n(7462),i=(n(7294),n(3905));const a={sidebar_position:2},o=void 0,l={unversionedId:"tutorial-hive/Hive\u5165\u95e8\u4e8c-Hive\u5b89\u88c5\u4e0e\u914d\u7f6e",id:"tutorial-hive/Hive\u5165\u95e8\u4e8c-Hive\u5b89\u88c5\u4e0e\u914d\u7f6e",title:"Hive\u5165\u95e8\u4e8c-Hive\u5b89\u88c5\u4e0e\u914d\u7f6e",description:"Hive\u5b89\u88c5\u4e0e\u914d\u7f6e",source:"@site/docs/tutorial-hive/Hive\u5165\u95e8\u4e8c-Hive\u5b89\u88c5\u4e0e\u914d\u7f6e.md",sourceDirName:"tutorial-hive",slug:"/tutorial-hive/Hive\u5165\u95e8\u4e8c-Hive\u5b89\u88c5\u4e0e\u914d\u7f6e",permalink:"/docs/tutorial-hive/Hive\u5165\u95e8\u4e8c-Hive\u5b89\u88c5\u4e0e\u914d\u7f6e",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Hive\u5165\u95e8\u4e00-Hive\u7684\u57fa\u672c\u6982\u5ff5",permalink:"/docs/tutorial-hive/Hive\u5165\u95e8\u4e00-Hive\u7684\u57fa\u672c\u6982\u5ff5"},next:{title:"Hive\u5165\u95e8\u4e09-Hive\u5e38\u7528\u914d\u7f6e",permalink:"/docs/tutorial-hive/Hive\u5165\u95e8\u4e09-Hive\u5e38\u7528\u914d\u7f6e"}},p={},s=[{value:"Hive\u5b89\u88c5\u4e0e\u914d\u7f6e",id:"hive\u5b89\u88c5\u4e0e\u914d\u7f6e",level:2},{value:"\u5b89\u88c5\u914d\u7f6eHive",id:"\u5b89\u88c5\u914d\u7f6ehive",level:2},{value:"\u5b89\u88c5Mysql",id:"\u5b89\u88c5mysql",level:2},{value:"Hive \u5143\u6570\u636e\u914d\u7f6e\u5230Mysql",id:"hive-\u5143\u6570\u636e\u914d\u7f6e\u5230mysql",level:2}],c={toc:s},v="wrapper";function m(e){let{components:t,...n}=e;return(0,i.kt)(v,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"hive\u5b89\u88c5\u4e0e\u914d\u7f6e"},"Hive\u5b89\u88c5\u4e0e\u914d\u7f6e"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u542f\u52a8",(0,i.kt)("inlineCode",{parentName:"li"},"Hadoop"),"\u96c6\u7fa4"),(0,i.kt)("li",{parentName:"ul"},"\u51c6\u5907",(0,i.kt)("inlineCode",{parentName:"li"},"Hive"),"\u5305",(0,i.kt)("inlineCode",{parentName:"li"},"apache-hive-1.2.1-bin.tar.gz ")),(0,i.kt)("li",{parentName:"ul"},"\u914d\u7f6e",(0,i.kt)("inlineCode",{parentName:"li"},"Hive"),"\u73af\u5883\u53d8\u91cf"),(0,i.kt)("li",{parentName:"ul"},"\u5b89\u88c5",(0,i.kt)("inlineCode",{parentName:"li"},"Mysql")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Hive")," \u5143\u6570\u636e\u914d\u7f6e\u5230",(0,i.kt)("inlineCode",{parentName:"li"},"Mysql"))),(0,i.kt)("h2",{id:"\u5b89\u88c5\u914d\u7f6ehive"},"\u5b89\u88c5\u914d\u7f6eHive"),(0,i.kt)("p",null,"\u5047\u8bbe",(0,i.kt)("inlineCode",{parentName:"p"},"Hadoop"),"\u96c6\u7fa4\u5df2\u7ecf\u542f\u52a8\u3002\u6b64\u65f6\u5411\u670d\u52a1\u5668\u4e0a\u4f20",(0,i.kt)("inlineCode",{parentName:"p"},"Hive"),"\u5b89\u88c5\u5305\u653e\u5728",(0,i.kt)("inlineCode",{parentName:"p"},"/opt"),"\u76ee\u5f55\u4e0b\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"[root@localhost opt]# ll\ntotal 540844\n-rw-r--r--. 1 root root  92834839 Mar 21 07:29 apache-hive-1.2.1-bin.tar.gz\n")),(0,i.kt)("p",null,"\u5c06\u5b89\u88c5\u5305\u89e3\u538b\u5230/opt/module",(0,i.kt)("inlineCode",{parentName:"p"},"\u76ee\u5f55\u4e0b\uff0c"),"module`\u81ea\u5df1\u65b0\u5efa\uff0c\u4e5f\u53ef\u4ee5\u5efa\u5176\u4ed6\u540d\u79f0\u7684\u76ee\u5f55\u3002\u914d\u7f6eHive\u73af\u5883\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"\n[root@localhost conf]# vi hive-env.sh \n## \u6253\u5f00 hive-env.sh \uff0c\u6709\u4e9b\u8fd9\u4e2a\u6587\u4ef6\u9ed8\u8ba4\u4e3a hive-env.sh.template\u9700\u8981\u4fee\u6539\u540d\u79f0\nexport HADOOP_HOME=/opt/module/hadoop-2.7.2\nexport HIVE_CONF_DIR=/opt/module/hive/conf\n")),(0,i.kt)("p",null,"\u542f\u52a8",(0,i.kt)("inlineCode",{parentName:"p"},"Hive"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"[root@localhost hive]# bin/hive\n")),(0,i.kt)("p",null,"\u9a8c\u8bc1\u662f\u5426\u5b89\u88c5\u6210\u529f\uff01"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"hive> show databases;\n")),(0,i.kt)("h2",{id:"\u5b89\u88c5mysql"},"\u5b89\u88c5Mysql"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Metastore"),"\u9ed8\u8ba4\u5b58\u50a8\u5728\u81ea\u5e26\u7684derby\u6570\u636e\u5e93\u4e2d\uff0c\u63a8\u8350\u4f7f\u7528",(0,i.kt)("inlineCode",{parentName:"p"},"MySQL"),"\u5b58\u50a8",(0,i.kt)("inlineCode",{parentName:"p"},"Metastore"),"\u3002"),(0,i.kt)("p",null,"\u8fd9\u91cc\u51c6\u5907\u4e86rpm\u5305\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"# \u4f7f\u7528rpm -ivh MySQL-client-5.6.24-1.el6.x86_64.rpm \u5b89\u88c5\n")),(0,i.kt)("h2",{id:"hive-\u5143\u6570\u636e\u914d\u7f6e\u5230mysql"},"Hive \u5143\u6570\u636e\u914d\u7f6e\u5230Mysql"),(0,i.kt)("p",null,"\u5c06",(0,i.kt)("inlineCode",{parentName:"p"},"mysql-connector-java-5.1.27-bin.jar"),"\u9a71\u52a8\u653e\u5230",(0,i.kt)("inlineCode",{parentName:"p"},"Hive")," \u7684lib \u6587\u4ef6\u5939\u4e0b\u3002"),(0,i.kt)("p",null,"\u5728",(0,i.kt)("inlineCode",{parentName:"p"},"Hive")," \u5b89\u88c5\u76ee\u5f55\u4e0b\u627e\u5230",(0,i.kt)("inlineCode",{parentName:"p"},"conf"),"\u76ee\u5f55\uff0c\u8fdb\u5165\u8be5\u76ee\u5f55\u521b\u5efa\u4e00\u4e2a",(0,i.kt)("inlineCode",{parentName:"p"},"hive-site.xml"),"\uff0c",(0,i.kt)("a",{parentName:"p",href:"https://cwiki.apache.org/confluence/display/Hive/AdminManual+Metastore+Administration#AdminManualMetastoreAdministration-RemoteMetastoreDatabase"},"\u914d\u7f6e\u670d\u52a1\u7aef"),"\u3002\u5230\u6b64",(0,i.kt)("inlineCode",{parentName:"p"},"Hive")),(0,i.kt)("p",null,"\u76f8\u5173\u7684\u914d\u7f6e\u57fa\u672c\u5b8c\u6210\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'<?xml version="1.0"?>\n<?xml-stylesheet type="text/xsl" href="configuration.xsl"?>\n<configuration>\n    <property>\n      <name>javax.jdo.option.ConnectionURL</name>\n      <value>jdbc:mysql://node01:3306/metastore?createDatabaseIfNotExist=true</value>\n      <description>JDBC connect string for a JDBC metastore</description>\n    </property>\n\n    <property>\n      <name>javax.jdo.option.ConnectionDriverName</name>\n      <value>com.mysql.jdbc.Driver</value>\n      <description>Driver class name for a JDBC metastore</description>\n    </property>\n\n    <property>\n      <name>javax.jdo.option.ConnectionUserName</name>\n      <value>root</value>\n      <description>username to use against metastore database</description>\n    </property>\n\n    <property>\n      <name>javax.jdo.option.ConnectionPassword</name>\n      <value>vagrant</value>\n      <description>password to use against metastore database</description>\n    </property>\n</configuration>\n')))}m.isMDXComponent=!0}}]);