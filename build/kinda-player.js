/**
 * KindaPlayer is a simple HTML/CSS based music-player
 *
 * http://github.com/MadRabbit/kinda-player
 *
 * Copyright (C) 2010 Nikolay Nemshilov
 */
eval((function(s,d){for(var i=d.length-1;i>-1;i--)if(d[i])s=s.replace(new RegExp(i,'g'),d[i]);return s})("34 21=new 183(Observer,{extend:{EVENTS:$w('41 95 132 52 163 174 error 150 33 78 61 un61 jump'),81:{178:'101 41 52 87 61 47',167:'fade',75:400,scrollFx:141,size:'full',166:123,useID3:141,loop:141,171:4000,show18147:141,56Links:'a[rel^=17-15]',119:'a[rel^=17-15-album]',auto41:149},98:{101:'Previous Song',87:'Next Song',41:'181/Pause',52:'S130',61:'Mute/Un61',47:'Toggle 31',105:'Close the 15'},145:149,72:[]},118:19(s,o){13.$super(o);13.37=13.build();13.set18147(s);21.72.push(13)},90To:19(e,p){13.37.50('17-15-56').90To(e,p);28 13},showAt:19(e){if(21.56&&21.56!==13)21.56.109();13.37.55('17-15-56').55('17-15-no47').90To(138.body).moveTo($(e).23()).show(13.45.167,{106:13.45.75});13.47El.109();28 21.56=13},109:19(){if(13.37.has183('17-15-56')&&13.37.visible()){13.52().37.109(13.45.167,{106:13.45.75});21.56=null}28 13}});21.147({build:19(){34 e=$E('26',{'43':'17-15'}).90([13.buildBox(),13.173()]);if(13.45.size=='62')e.55('17-15-62');if(!13.45.show181List)e.55('17-15-no47');if(!21.145)e.55('17-15-122');13.105180=$E('26',{html:'&times;','43':'17-15-22-105',54:21.98.105}).90To(e,'130').51(13.109.68(13));28 e},buildBox:19(){13.175El=$E('26',{'43':'17-15-175'});13.175El.90([13.146(),13.139()]);28 13.175El},146:19(){13.38186El=$E('26',{'43':'17-15-38-line'});13.38LoadEl=$E('26',{'43':'17-15-38-174'});13.38181El=$E('26',{'43':'17-15-38-41'});13.38182El=$E('26',{'43':'17-15-38-176'});13.38185El=$E('26',{'43':'17-15-38-time'});if(13.45.scrollFx)13.144(13.38182El);28 13.38El=$E('26',{'43':'17-15-38'}).90([13.38182El,13.38185El,13.38186El.90([13.38LoadEl,13.38181El])])},139:19(){13.101180=$E('29',{112:'22',107:'','43':'17-15-22-101',54:21.98.101});13.87180=$E('29',{112:'22',107:'','43':'17-15-22-87',54:21.98.87});13.41180=$E('29',{112:'22',107:'','43':'17-15-22-41',54:21.98.41});13.52180=$E('29',{112:'22',107:'','43':'17-15-22-52',54:21.98.52});13.61180=$E('29',{112:'22',107:'','43':'17-15-22-61',54:21.98.61});13.47180=$E('29',{112:'22',107:'','43':'17-15-22-47',54:21.98.47});28 $E('26',{'43':'17-15-22s'}).90($w(13.45.178).map(19(n){28 13[n+'180']},13).compact())},173:19(){28 13.47El=$E('ul',{'43':'17-15-47'})},148:19(){13.47El.clean();13.31.142(19(s){13.47El.90($E('li',{html:s.54}))},13);[13.101180,13.87180].142(13.31.79<2?'disable':'enable');28 13},144:19(e){(19(){if(!e.59)e.59=1;34 c=e.117;34 n=c+e.59*1;e.117=n;if(e.117==c)e.59*=-1}).periodical(400)}});21.147({set18147:19(s){13.31=[];if(isString(s))s=[s];if(isArray(s))for(34 i=0;i<s.79;i++)13.126(s[i]);else if(isHash(s))for(34 a in s)13.126(a,s[a]);28 13},126:19(u,t){if(!13.31)13.31=[];13.31.push(13.129({id:'p'+21.72.79+'_'+u.replace(/[^a-z0-9]/g,'_'),url:u,54:t||decodeURIComponent(u.split('/').last())}));28 13.148()},78:19(i){if(13.31[i]){34 p=13.46;13.46=i;13.35=13.31[i];if(p!=i)13.97('78')}28 13},41:19(i){if(13.33)13.33.49.52();34 a=13.78(i).35;if(a){34 e='41';13.125(13.45.166);if(a.49.95d){a.49.132();e='132'}else{a.49.84(0);a.49.41()}13.33=a;13.97(e)}28 13},95:19(){if(13.33){13.33.49.95();13.33=149;13.97('95')}28 13},toggle:19(){28 13.33?13.95():13.41(13.46||0)},52:19(){if(13.33){13.33.49.52();13.33=149;13.97('52')}28 13},87:19(){28 13.41((defined(13.46)&&13.31[13.46+1])?13.46+1:0)},101:19(){28 13.41((defined(13.46)&&13.31[13.46-1])?13.46-1:13.31.79-1)},61:19(){34 i=13.35;if(i){34 e=i.49.61d?'un61':'61';i.49[e]();13.97(e)}28 13},125:19(v){if(135(v)&&13.35)13.35.49.125(13.45.166=v);28 13},84:19(p){if(135(p)&&13.35){if(p<0)p=0;if(p>123)p=123;34 t=13.35.49;34 d=t.174ed?t.106:t.106Estimate;if(d!==undefined)t.84(d*p);13.97('jump',p)}28 13},129:19(a){if(21.145){34 c=19(p,n,i){if(i)p.97(n,p.31.72Of(i))};a.49=49Manager.createSound({id:a.id,url:a.url,ondataerror:c.73(13,'error',a),on163:c.73(13,'163',a),on174:c.73(13,'174',a),on95:c.73(13,'95',a),on41:c.73(13,'41',a),on132:c.73(13,'132',a),on52:c.73(13,'52',a),while150:c.73(13,'150',a),while33:c.73(13,'33',a),onid3:13.94ID3.68(13,a)})}28 a},94ID3:19(b){34 a=13.31.72Of(b);34 i=b.49.id3;34 t=i.songname;if(t&&i.artist)t+=\" by \"+i.artist;b.54=t;13.47El.137('li')[a].94(t);if(a===13.46)13.38182El.94(t)}});21.147((19(){34 o=21.proto112.118;28{118:19(){o.apply(13,arguments);13.47El.51(19(e){34 i=13.47El.137('li').72Of(e.target);if(i>-1)13.41(i)}.68(13));13.38186El.51(19(e){if(13.35){34 d=13.38186El.dimensions();13.41().84((e.23().x-d.left)/d.83)}}.68(13));13.101180.51(13.101.68(13));13.87180.51(13.87.68(13));13.41180.51(13.toggle.68(13));13.52180.51(13.52.68(13));13.61180.51(13.61.68(13));13.47180.51(13.159.68(13));13.on({78:19(i){13.liById(i).radio183('17-15-47-78ed');if(!13.33){13.38182El.94(13.35.54);13.38185El.94('0:00/0:00')}},41:19(){13.37.55('17-15-33');13.38182El.94(13.35.54)},95:19(){13.37.50('17-15-33')},52:19(){13.37.50('17-15-33')},163:19(){13.37.50('17-15-33');if(13.45.loop&&13.31.79>1)13.87.68(13).delay(13.45.171)},61:19(){13.37.55('17-15-61d')},un61:19(){13.37.50('17-15-61d')},150:19(i){13.94184(i)},33:19(i){13.94184(i)}});13.78(0)},97:19(n,i){28 13.$super(n,135(i)?i:13.46)},liById:19(i){28 13.47El.137('li')[i]},159:19(){34 v=13.47El.visible();13.47El[v?'109':'show']('slide');13.37[v?'55':'50']('17-15-no47')},94184:19(i){if(i===13.46){34 t=13.31[i].49;34 d=t.174ed?t.106:t.106Estimate;34 p=t.23;13.38181El.128.83=(p/d*123).154()+'%';13.38LoadEl.128.83=(t.bytesLoaded/t.bytesTotal*123).154()+'%';13.38185El.94(13.115(p)+'/'+13.115(d))}},115:19(m){34 t=(m/1230).154();34 s=t % 60;if(s<10)s='0'+s;28(t/60).154()+\":\"+s}}})());49Manager.on145(19(){21.145=141;21.72.142(19(p){p.31.142(19(i){p.129(i)});p.37.50('17-15-122')})});$(138.138Element).51(19(e){34 t=$(e.target);if(t&&t.parents().79){if(t.match(21.81.56Links)){e.52();34 a=t.match(21.81.119)?$$(21.81.119):[t];34 d=a.72Of(t);34 c={};a.142(19(l){c[l.href]=l.innerHTML});34 b=new 21(c).78(d).showAt(t);if(21.81.auto41)b.41.68(b,d).delay(21.81.75+123)}else if(21.56){34 p=t.parents();if(!p.slice(0,p.79-2).first('has183','17-15'))21.56.109()}}});138.write(\"<128 112=\\\"176/css\\\">26.17-15,26.17-15*{58:170;71:170;83:auto;91:auto;39:110;25:110;47-128:110}26.17-15{83:20em;-151-39-69:.169;-92-39-69:.169}26.17-15-122{63:0.6;133:155(63=60)}26.17-15-122*{93:default !important}26.17-15-175,ul.17-15-47{39:1px 177 #BBB;25:#EEE;71:.4em;23:66;-151-39-69:.169;-92-39-69:.169}26.17-15-38{23:66;58-bottom:.36em}26.17-15-38-line{23:66;91:.4em;39:1px 177 #AAA;-151-39-69:.77;-92-39-radus:.77;93:124;58-130:.77}26.17-15-38-41,26.17-15-38-174{23:89;83:0%;91:123%;25:#CCC;z-72:1;-151-39-69:.134;-92-39-radus:.134}26.17-15-38-41{25:#999;z-72:2}26.17-15-38-176{white-space:168;136:164;71:0 .77;23:66;z-72:3;58-86:5.5em}26.17-15-38-time{23:89;130:0;86:.77;white-space:168;z-72:4}26.17-15-22s{23:66}26.17-15-22s 29{dis41:inline-block;*dis41:inline;*zoom:1;83:18px;91:18px;58-86:2px;25-82:#CCC;25-image:url(./images/17_15_icons.png);25-repeat:no-repeat;39:1px 177 #AAA;-151-39-69:.3em;-92-39-69:.3em;93:124;63:0.7;133:155(63=70)}26.17-15-22s 29:152{63:1;133:155(63=123)}26.17-15-22s 29:disabled,26.17-15-22s 29:disabled:152{93:default;25-82:#BBB;63:0.3;133:155(63=30)}29.17-15-22-101{25-23:170 67}29.17-15-22-87{25-23:-16px 67}29.17-15-22-41{25-23:-32px 67}29.17-15-22-52{25-23:-64px 67}29.17-15-22-61{25-23:-111px 67}29.17-15-22-47{25-23:-8170 67}26.17-15-61d 29.17-15-22-61{25-23:-127px 67}26.17-15-33 29.17-15-22-41{25-23:-48px 67}26.17-15-no47 29.17-15-22-47{25-23:-96px 67}29.17-15-22-61,29.17-15-22-47{23:89;130:170;86:2170}29.17-15-22-47{86:170}ul.17-15-47{58:0;71:0;39-130:110;25-82:#F8F8F8;71:0 .77;136:164}ul.17-15-47 li{71:.77;93:124;82:#444;white-space:168;136:164}ul.17-15-47 li:152{25:#CCC;82:#000}ul.17-15-47 li.17-15-47-78ed{82:#000;font-weight:bold}26.17-15-62 26.17-15-175{71:.77}26.17-15-62 26.17-15-38{23:66;58-left:42px;58-bottom:0}26.17-15-62 26.17-15-38-line{58-130:0}26.17-15-62 26.17-15-22s{23:89;130:.77;left:.77}26.17-15-62 26.17-15-22s 29{91:2.77}26.17-15-62 29.17-15-22-101,26.17-15-62 29.17-15-22-87,26.17-15-62 29.17-15-22-52,26.17-15-62 29.17-15-22-47,26.17-15-62 ul.17-15-47{dis41:110}26.17-15-62 29.17-15-22-61{23:66;86:auto}26.17-15-56{23:89;dis41:110;z-72:9999;-151-175-162:#888 .134 .77 .5em;-92-175-162:#888 .134 .77 .5em}26.17-15-22-105{font-weight:bold;93:124;83:1170;91:1170;82:#888;float:86;font-size:120%;58-86:-14px;dis41:110;176-162:#CCC .134 .134 .134}26.17-15-22-105:152{82:#000}26.17-15-56 26.17-15-22-105{dis41:block}</128>\");",",,,,,,,,,,,,,this,,player,,kinda,,function,,KindaPlayer,button,position,,background,div,,return,input,,playlist,,playing,var,currentItem,,element,status,border,,play,,class,,options,current,list,,sound,removeClass,onClick,stop,statusTextEl,title,addClass,popup,listEl,margin,scroll_direction,,mute,mini,opacity,,buttons,relative,center,bind,radius,,padding,index,curry,statusLineEl,showDuration,statusTimeEl,2em,select,length,,Options,color,width,setPosition,display,right,next,,absolute,insert,height,webkit,cursor,update,pause,,fire,i18n,,,prev,statusLoadEl,updateStatus,statusPlayEl,close,duration,value,insertTo,hide,none,,type,durationEstimate,prevButton,formatTime,nextButton,scrollLeft,initialize,albumLinks,,indexOf,waiting,100,pointer,setVolume,addToList,,style,initSound,top,nolist,resume,filter,1em,isNumber,overflow,subNodes,document,buildButtons,soundManager,true,each,setPlaylist,scrollingFx,ready,buildStatus,include,rebuildList,false,loading,moz,hover,muted,round,alpha,popupLinks,listButton,muteButton,toggleList,stopButton,playButton,shadow,finish,hidden,unmute,volume,showFx,nowrap,24em,0px,loopDealy,updateID3,buildList,load,box,text,solid,controls,autoplay,Button,Play,Text,Class,Status,Time,Line".split(",")));