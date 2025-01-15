import{_ as a,aE as ii,l as Pt,K as Rt,I as ei,D as ct,C as Lt,B as si,i as ni,q as Et,s as ai,g as ri,p as oi,b as hi,c as li,v as ci,G as ui,k as gi}from"./BlogPost.astro_astro_type_script_index_0_lang.Bc1ryDJx.js";import{i as xi}from"./init.Gi6I4Gst.js";import{o as di}from"./ordinal.BYWQX77i.js";import{l as Tt}from"./linear.BI8dLiCx.js";function pi(t,i,e){t=+t,i=+i,e=(n=arguments.length)<2?(i=t,t=0,1):n<3?1:+e;for(var s=-1,n=Math.max(0,Math.ceil((i-t)/e))|0,u=new Array(n);++s<n;)u[s]=t+s*e;return u}function at(){var t=di().unknown(void 0),i=t.domain,e=t.range,s=0,n=1,u,g,p=!1,C=0,T=0,k=.5;delete t.unknown;function A(){var m=i().length,D=n<s,S=D?n:s,v=D?s:n;u=(v-S)/Math.max(1,m-C+T*2),p&&(u=Math.floor(u)),S+=(v-S-u*(m-C))*k,g=u*(1-C),p&&(S=Math.round(S),g=Math.round(g));var f=pi(m).map(function(_){return S+u*_});return e(D?f.reverse():f)}return t.domain=function(m){return arguments.length?(i(m),A()):i()},t.range=function(m){return arguments.length?([s,n]=m,s=+s,n=+n,A()):[s,n]},t.rangeRound=function(m){return[s,n]=m,s=+s,n=+n,p=!0,A()},t.bandwidth=function(){return g},t.step=function(){return u},t.round=function(m){return arguments.length?(p=!!m,A()):p},t.padding=function(m){return arguments.length?(C=Math.min(1,T=+m),A()):C},t.paddingInner=function(m){return arguments.length?(C=Math.min(1,m),A()):C},t.paddingOuter=function(m){return arguments.length?(T=+m,A()):T},t.align=function(m){return arguments.length?(k=Math.max(0,Math.min(1,m)),A()):k},t.copy=function(){return at(i(),[s,n]).round(p).paddingInner(C).paddingOuter(T).align(k)},xi.apply(A(),arguments)}var rt=function(){var t=a(function(B,o,l,c){for(l=l||{},c=B.length;c--;l[B[c]]=o);return l},"o"),i=[1,10,12,14,16,18,19,21,23],e=[2,6],s=[1,3],n=[1,5],u=[1,6],g=[1,7],p=[1,5,10,12,14,16,18,19,21,23,34,35,36],C=[1,25],T=[1,26],k=[1,28],A=[1,29],m=[1,30],D=[1,31],S=[1,32],v=[1,33],f=[1,34],_=[1,35],h=[1,36],E=[1,37],X=[1,43],bt=[1,42],At=[1,47],$=[1,50],w=[1,10,12,14,16,18,19,21,23,34,35,36],J=[1,10,12,14,16,18,19,21,23,24,26,27,28,34,35,36],I=[1,10,12,14,16,18,19,21,23,24,26,27,28,34,35,36,41,42,43,44,45,46,47,48,49,50],wt=[1,64],tt={trace:a(function(){},"trace"),yy:{},symbols_:{error:2,start:3,eol:4,XYCHART:5,chartConfig:6,document:7,CHART_ORIENTATION:8,statement:9,title:10,text:11,X_AXIS:12,parseXAxis:13,Y_AXIS:14,parseYAxis:15,LINE:16,plotData:17,BAR:18,acc_title:19,acc_title_value:20,acc_descr:21,acc_descr_value:22,acc_descr_multiline_value:23,SQUARE_BRACES_START:24,commaSeparatedNumbers:25,SQUARE_BRACES_END:26,NUMBER_WITH_DECIMAL:27,COMMA:28,xAxisData:29,bandData:30,ARROW_DELIMITER:31,commaSeparatedTexts:32,yAxisData:33,NEWLINE:34,SEMI:35,EOF:36,alphaNum:37,STR:38,MD_STR:39,alphaNumToken:40,AMP:41,NUM:42,ALPHA:43,PLUS:44,EQUALS:45,MULT:46,DOT:47,BRKT:48,MINUS:49,UNDERSCORE:50,$accept:0,$end:1},terminals_:{2:"error",5:"XYCHART",8:"CHART_ORIENTATION",10:"title",12:"X_AXIS",14:"Y_AXIS",16:"LINE",18:"BAR",19:"acc_title",20:"acc_title_value",21:"acc_descr",22:"acc_descr_value",23:"acc_descr_multiline_value",24:"SQUARE_BRACES_START",26:"SQUARE_BRACES_END",27:"NUMBER_WITH_DECIMAL",28:"COMMA",31:"ARROW_DELIMITER",34:"NEWLINE",35:"SEMI",36:"EOF",38:"STR",39:"MD_STR",41:"AMP",42:"NUM",43:"ALPHA",44:"PLUS",45:"EQUALS",46:"MULT",47:"DOT",48:"BRKT",49:"MINUS",50:"UNDERSCORE"},productions_:[0,[3,2],[3,3],[3,2],[3,1],[6,1],[7,0],[7,2],[9,2],[9,2],[9,2],[9,2],[9,2],[9,3],[9,2],[9,3],[9,2],[9,2],[9,1],[17,3],[25,3],[25,1],[13,1],[13,2],[13,1],[29,1],[29,3],[30,3],[32,3],[32,1],[15,1],[15,2],[15,1],[33,3],[4,1],[4,1],[4,1],[11,1],[11,1],[11,1],[37,1],[37,2],[40,1],[40,1],[40,1],[40,1],[40,1],[40,1],[40,1],[40,1],[40,1],[40,1]],performAction:a(function(o,l,c,x,b,r,N){var d=r.length-1;switch(b){case 5:x.setOrientation(r[d]);break;case 9:x.setDiagramTitle(r[d].text.trim());break;case 12:x.setLineData({text:"",type:"text"},r[d]);break;case 13:x.setLineData(r[d-1],r[d]);break;case 14:x.setBarData({text:"",type:"text"},r[d]);break;case 15:x.setBarData(r[d-1],r[d]);break;case 16:this.$=r[d].trim(),x.setAccTitle(this.$);break;case 17:case 18:this.$=r[d].trim(),x.setAccDescription(this.$);break;case 19:this.$=r[d-1];break;case 20:this.$=[Number(r[d-2]),...r[d]];break;case 21:this.$=[Number(r[d])];break;case 22:x.setXAxisTitle(r[d]);break;case 23:x.setXAxisTitle(r[d-1]);break;case 24:x.setXAxisTitle({type:"text",text:""});break;case 25:x.setXAxisBand(r[d]);break;case 26:x.setXAxisRangeData(Number(r[d-2]),Number(r[d]));break;case 27:this.$=r[d-1];break;case 28:this.$=[r[d-2],...r[d]];break;case 29:this.$=[r[d]];break;case 30:x.setYAxisTitle(r[d]);break;case 31:x.setYAxisTitle(r[d-1]);break;case 32:x.setYAxisTitle({type:"text",text:""});break;case 33:x.setYAxisRangeData(Number(r[d-2]),Number(r[d]));break;case 37:this.$={text:r[d],type:"text"};break;case 38:this.$={text:r[d],type:"text"};break;case 39:this.$={text:r[d],type:"markdown"};break;case 40:this.$=r[d];break;case 41:this.$=r[d-1]+""+r[d];break}},"anonymous"),table:[t(i,e,{3:1,4:2,7:4,5:s,34:n,35:u,36:g}),{1:[3]},t(i,e,{4:2,7:4,3:8,5:s,34:n,35:u,36:g}),t(i,e,{4:2,7:4,6:9,3:10,5:s,8:[1,11],34:n,35:u,36:g}),{1:[2,4],9:12,10:[1,13],12:[1,14],14:[1,15],16:[1,16],18:[1,17],19:[1,18],21:[1,19],23:[1,20]},t(p,[2,34]),t(p,[2,35]),t(p,[2,36]),{1:[2,1]},t(i,e,{4:2,7:4,3:21,5:s,34:n,35:u,36:g}),{1:[2,3]},t(p,[2,5]),t(i,[2,7],{4:22,34:n,35:u,36:g}),{11:23,37:24,38:C,39:T,40:27,41:k,42:A,43:m,44:D,45:S,46:v,47:f,48:_,49:h,50:E},{11:39,13:38,24:X,27:bt,29:40,30:41,37:24,38:C,39:T,40:27,41:k,42:A,43:m,44:D,45:S,46:v,47:f,48:_,49:h,50:E},{11:45,15:44,27:At,33:46,37:24,38:C,39:T,40:27,41:k,42:A,43:m,44:D,45:S,46:v,47:f,48:_,49:h,50:E},{11:49,17:48,24:$,37:24,38:C,39:T,40:27,41:k,42:A,43:m,44:D,45:S,46:v,47:f,48:_,49:h,50:E},{11:52,17:51,24:$,37:24,38:C,39:T,40:27,41:k,42:A,43:m,44:D,45:S,46:v,47:f,48:_,49:h,50:E},{20:[1,53]},{22:[1,54]},t(w,[2,18]),{1:[2,2]},t(w,[2,8]),t(w,[2,9]),t(J,[2,37],{40:55,41:k,42:A,43:m,44:D,45:S,46:v,47:f,48:_,49:h,50:E}),t(J,[2,38]),t(J,[2,39]),t(I,[2,40]),t(I,[2,42]),t(I,[2,43]),t(I,[2,44]),t(I,[2,45]),t(I,[2,46]),t(I,[2,47]),t(I,[2,48]),t(I,[2,49]),t(I,[2,50]),t(I,[2,51]),t(w,[2,10]),t(w,[2,22],{30:41,29:56,24:X,27:bt}),t(w,[2,24]),t(w,[2,25]),{31:[1,57]},{11:59,32:58,37:24,38:C,39:T,40:27,41:k,42:A,43:m,44:D,45:S,46:v,47:f,48:_,49:h,50:E},t(w,[2,11]),t(w,[2,30],{33:60,27:At}),t(w,[2,32]),{31:[1,61]},t(w,[2,12]),{17:62,24:$},{25:63,27:wt},t(w,[2,14]),{17:65,24:$},t(w,[2,16]),t(w,[2,17]),t(I,[2,41]),t(w,[2,23]),{27:[1,66]},{26:[1,67]},{26:[2,29],28:[1,68]},t(w,[2,31]),{27:[1,69]},t(w,[2,13]),{26:[1,70]},{26:[2,21],28:[1,71]},t(w,[2,15]),t(w,[2,26]),t(w,[2,27]),{11:59,32:72,37:24,38:C,39:T,40:27,41:k,42:A,43:m,44:D,45:S,46:v,47:f,48:_,49:h,50:E},t(w,[2,33]),t(w,[2,19]),{25:73,27:wt},{26:[2,28]},{26:[2,20]}],defaultActions:{8:[2,1],10:[2,3],21:[2,2],72:[2,28],73:[2,20]},parseError:a(function(o,l){if(l.recoverable)this.trace(o);else{var c=new Error(o);throw c.hash=l,c}},"parseError"),parse:a(function(o){var l=this,c=[0],x=[],b=[null],r=[],N=this.table,d="",G=0,Ct=0,Kt=2,St=1,Zt=r.slice.call(arguments,1),R=Object.create(this.lexer),W={yy:{}};for(var it in this.yy)Object.prototype.hasOwnProperty.call(this.yy,it)&&(W.yy[it]=this.yy[it]);R.setInput(o,W.yy),W.yy.lexer=R,W.yy.parser=this,typeof R.yylloc>"u"&&(R.yylloc={});var et=R.yylloc;r.push(et);var Jt=R.options&&R.options.ranges;typeof W.yy.parseError=="function"?this.parseError=W.yy.parseError:this.parseError=Object.getPrototypeOf(this).parseError;function ti(L){c.length=c.length-2*L,b.length=b.length-L,r.length=r.length-L}a(ti,"popStack");function _t(){var L;return L=x.pop()||R.lex()||St,typeof L!="number"&&(L instanceof Array&&(x=L,L=x.pop()),L=l.symbols_[L]||L),L}a(_t,"lex");for(var P,O,M,st,z={},j,V,kt,Q;;){if(O=c[c.length-1],this.defaultActions[O]?M=this.defaultActions[O]:((P===null||typeof P>"u")&&(P=_t()),M=N[O]&&N[O][P]),typeof M>"u"||!M.length||!M[0]){var nt="";Q=[];for(j in N[O])this.terminals_[j]&&j>Kt&&Q.push("'"+this.terminals_[j]+"'");R.showPosition?nt="Parse error on line "+(G+1)+`:
`+R.showPosition()+`
Expecting `+Q.join(", ")+", got '"+(this.terminals_[P]||P)+"'":nt="Parse error on line "+(G+1)+": Unexpected "+(P==St?"end of input":"'"+(this.terminals_[P]||P)+"'"),this.parseError(nt,{text:R.match,token:this.terminals_[P]||P,line:R.yylineno,loc:et,expected:Q})}if(M[0]instanceof Array&&M.length>1)throw new Error("Parse Error: multiple actions possible at state: "+O+", token: "+P);switch(M[0]){case 1:c.push(P),b.push(R.yytext),r.push(R.yylloc),c.push(M[1]),P=null,Ct=R.yyleng,d=R.yytext,G=R.yylineno,et=R.yylloc;break;case 2:if(V=this.productions_[M[1]][1],z.$=b[b.length-V],z._$={first_line:r[r.length-(V||1)].first_line,last_line:r[r.length-1].last_line,first_column:r[r.length-(V||1)].first_column,last_column:r[r.length-1].last_column},Jt&&(z._$.range=[r[r.length-(V||1)].range[0],r[r.length-1].range[1]]),st=this.performAction.apply(z,[d,Ct,G,W.yy,M[1],b,r].concat(Zt)),typeof st<"u")return st;V&&(c=c.slice(0,-1*V*2),b=b.slice(0,-1*V),r=r.slice(0,-1*V)),c.push(this.productions_[M[1]][0]),b.push(z.$),r.push(z._$),kt=N[c[c.length-2]][c[c.length-1]],c.push(kt);break;case 3:return!0}}return!0},"parse")},Qt=function(){var B={EOF:1,parseError:a(function(l,c){if(this.yy.parser)this.yy.parser.parseError(l,c);else throw new Error(l)},"parseError"),setInput:a(function(o,l){return this.yy=l||this.yy||{},this._input=o,this._more=this._backtrack=this.done=!1,this.yylineno=this.yyleng=0,this.yytext=this.matched=this.match="",this.conditionStack=["INITIAL"],this.yylloc={first_line:1,first_column:0,last_line:1,last_column:0},this.options.ranges&&(this.yylloc.range=[0,0]),this.offset=0,this},"setInput"),input:a(function(){var o=this._input[0];this.yytext+=o,this.yyleng++,this.offset++,this.match+=o,this.matched+=o;var l=o.match(/(?:\r\n?|\n).*/g);return l?(this.yylineno++,this.yylloc.last_line++):this.yylloc.last_column++,this.options.ranges&&this.yylloc.range[1]++,this._input=this._input.slice(1),o},"input"),unput:a(function(o){var l=o.length,c=o.split(/(?:\r\n?|\n)/g);this._input=o+this._input,this.yytext=this.yytext.substr(0,this.yytext.length-l),this.offset-=l;var x=this.match.split(/(?:\r\n?|\n)/g);this.match=this.match.substr(0,this.match.length-1),this.matched=this.matched.substr(0,this.matched.length-1),c.length-1&&(this.yylineno-=c.length-1);var b=this.yylloc.range;return this.yylloc={first_line:this.yylloc.first_line,last_line:this.yylineno+1,first_column:this.yylloc.first_column,last_column:c?(c.length===x.length?this.yylloc.first_column:0)+x[x.length-c.length].length-c[0].length:this.yylloc.first_column-l},this.options.ranges&&(this.yylloc.range=[b[0],b[0]+this.yyleng-l]),this.yyleng=this.yytext.length,this},"unput"),more:a(function(){return this._more=!0,this},"more"),reject:a(function(){if(this.options.backtrack_lexer)this._backtrack=!0;else return this.parseError("Lexical error on line "+(this.yylineno+1)+`. You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).
`+this.showPosition(),{text:"",token:null,line:this.yylineno});return this},"reject"),less:a(function(o){this.unput(this.match.slice(o))},"less"),pastInput:a(function(){var o=this.matched.substr(0,this.matched.length-this.match.length);return(o.length>20?"...":"")+o.substr(-20).replace(/\n/g,"")},"pastInput"),upcomingInput:a(function(){var o=this.match;return o.length<20&&(o+=this._input.substr(0,20-o.length)),(o.substr(0,20)+(o.length>20?"...":"")).replace(/\n/g,"")},"upcomingInput"),showPosition:a(function(){var o=this.pastInput(),l=new Array(o.length+1).join("-");return o+this.upcomingInput()+`
`+l+"^"},"showPosition"),test_match:a(function(o,l){var c,x,b;if(this.options.backtrack_lexer&&(b={yylineno:this.yylineno,yylloc:{first_line:this.yylloc.first_line,last_line:this.last_line,first_column:this.yylloc.first_column,last_column:this.yylloc.last_column},yytext:this.yytext,match:this.match,matches:this.matches,matched:this.matched,yyleng:this.yyleng,offset:this.offset,_more:this._more,_input:this._input,yy:this.yy,conditionStack:this.conditionStack.slice(0),done:this.done},this.options.ranges&&(b.yylloc.range=this.yylloc.range.slice(0))),x=o[0].match(/(?:\r\n?|\n).*/g),x&&(this.yylineno+=x.length),this.yylloc={first_line:this.yylloc.last_line,last_line:this.yylineno+1,first_column:this.yylloc.last_column,last_column:x?x[x.length-1].length-x[x.length-1].match(/\r?\n?/)[0].length:this.yylloc.last_column+o[0].length},this.yytext+=o[0],this.match+=o[0],this.matches=o,this.yyleng=this.yytext.length,this.options.ranges&&(this.yylloc.range=[this.offset,this.offset+=this.yyleng]),this._more=!1,this._backtrack=!1,this._input=this._input.slice(o[0].length),this.matched+=o[0],c=this.performAction.call(this,this.yy,this,l,this.conditionStack[this.conditionStack.length-1]),this.done&&this._input&&(this.done=!1),c)return c;if(this._backtrack){for(var r in b)this[r]=b[r];return!1}return!1},"test_match"),next:a(function(){if(this.done)return this.EOF;this._input||(this.done=!0);var o,l,c,x;this._more||(this.yytext="",this.match="");for(var b=this._currentRules(),r=0;r<b.length;r++)if(c=this._input.match(this.rules[b[r]]),c&&(!l||c[0].length>l[0].length)){if(l=c,x=r,this.options.backtrack_lexer){if(o=this.test_match(c,b[r]),o!==!1)return o;if(this._backtrack){l=!1;continue}else return!1}else if(!this.options.flex)break}return l?(o=this.test_match(l,b[x]),o!==!1?o:!1):this._input===""?this.EOF:this.parseError("Lexical error on line "+(this.yylineno+1)+`. Unrecognized text.
`+this.showPosition(),{text:"",token:null,line:this.yylineno})},"next"),lex:a(function(){var l=this.next();return l||this.lex()},"lex"),begin:a(function(l){this.conditionStack.push(l)},"begin"),popState:a(function(){var l=this.conditionStack.length-1;return l>0?this.conditionStack.pop():this.conditionStack[0]},"popState"),_currentRules:a(function(){return this.conditionStack.length&&this.conditionStack[this.conditionStack.length-1]?this.conditions[this.conditionStack[this.conditionStack.length-1]].rules:this.conditions.INITIAL.rules},"_currentRules"),topState:a(function(l){return l=this.conditionStack.length-1-Math.abs(l||0),l>=0?this.conditionStack[l]:"INITIAL"},"topState"),pushState:a(function(l){this.begin(l)},"pushState"),stateStackSize:a(function(){return this.conditionStack.length},"stateStackSize"),options:{"case-insensitive":!0},performAction:a(function(l,c,x,b){switch(x){case 0:break;case 1:break;case 2:return this.popState(),34;case 3:return this.popState(),34;case 4:return 34;case 5:break;case 6:return 10;case 7:return this.pushState("acc_title"),19;case 8:return this.popState(),"acc_title_value";case 9:return this.pushState("acc_descr"),21;case 10:return this.popState(),"acc_descr_value";case 11:this.pushState("acc_descr_multiline");break;case 12:this.popState();break;case 13:return"acc_descr_multiline_value";case 14:return 5;case 15:return 8;case 16:return this.pushState("axis_data"),"X_AXIS";case 17:return this.pushState("axis_data"),"Y_AXIS";case 18:return this.pushState("axis_band_data"),24;case 19:return 31;case 20:return this.pushState("data"),16;case 21:return this.pushState("data"),18;case 22:return this.pushState("data_inner"),24;case 23:return 27;case 24:return this.popState(),26;case 25:this.popState();break;case 26:this.pushState("string");break;case 27:this.popState();break;case 28:return"STR";case 29:return 24;case 30:return 26;case 31:return 43;case 32:return"COLON";case 33:return 44;case 34:return 28;case 35:return 45;case 36:return 46;case 37:return 48;case 38:return 50;case 39:return 47;case 40:return 41;case 41:return 49;case 42:return 42;case 43:break;case 44:return 35;case 45:return 36}},"anonymous"),rules:[/^(?:%%(?!\{)[^\n]*)/i,/^(?:[^\}]%%[^\n]*)/i,/^(?:(\r?\n))/i,/^(?:(\r?\n))/i,/^(?:[\n\r]+)/i,/^(?:%%[^\n]*)/i,/^(?:title\b)/i,/^(?:accTitle\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*\{\s*)/i,/^(?:\{)/i,/^(?:[^\}]*)/i,/^(?:xychart-beta\b)/i,/^(?:(?:vertical|horizontal))/i,/^(?:x-axis\b)/i,/^(?:y-axis\b)/i,/^(?:\[)/i,/^(?:-->)/i,/^(?:line\b)/i,/^(?:bar\b)/i,/^(?:\[)/i,/^(?:[+-]?(?:\d+(?:\.\d+)?|\.\d+))/i,/^(?:\])/i,/^(?:(?:`\)                                    \{ this\.pushState\(md_string\); \}\n<md_string>\(\?:\(\?!`"\)\.\)\+                  \{ return MD_STR; \}\n<md_string>\(\?:`))/i,/^(?:["])/i,/^(?:["])/i,/^(?:[^"]*)/i,/^(?:\[)/i,/^(?:\])/i,/^(?:[A-Za-z]+)/i,/^(?::)/i,/^(?:\+)/i,/^(?:,)/i,/^(?:=)/i,/^(?:\*)/i,/^(?:#)/i,/^(?:[\_])/i,/^(?:\.)/i,/^(?:&)/i,/^(?:-)/i,/^(?:[0-9]+)/i,/^(?:\s+)/i,/^(?:;)/i,/^(?:$)/i],conditions:{data_inner:{rules:[0,1,4,5,6,7,9,11,14,15,16,17,20,21,23,24,25,26,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45],inclusive:!0},data:{rules:[0,1,3,4,5,6,7,9,11,14,15,16,17,20,21,22,25,26,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45],inclusive:!0},axis_band_data:{rules:[0,1,4,5,6,7,9,11,14,15,16,17,20,21,24,25,26,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45],inclusive:!0},axis_data:{rules:[0,1,2,4,5,6,7,9,11,14,15,16,17,18,19,20,21,23,25,26,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45],inclusive:!0},acc_descr_multiline:{rules:[12,13],inclusive:!1},acc_descr:{rules:[10],inclusive:!1},acc_title:{rules:[8],inclusive:!1},title:{rules:[],inclusive:!1},md_string:{rules:[],inclusive:!1},string:{rules:[27,28],inclusive:!1},INITIAL:{rules:[0,1,4,5,6,7,9,11,14,15,16,17,20,21,25,26,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45],inclusive:!0}}};return B}();tt.lexer=Qt;function q(){this.yy={}}return a(q,"Parser"),q.prototype=tt,tt.Parser=q,new q}();rt.parser=rt;var fi=rt;function ot(t){return t.type==="bar"}a(ot,"isBarPlot");function ut(t){return t.type==="band"}a(ut,"isBandAxisData");function F(t){return t.type==="linear"}a(F,"isLinearAxisData");var It=class{constructor(t){this.parentGroup=t}static{a(this,"TextDimensionCalculatorWithFont")}getMaxDimension(t,i){if(!this.parentGroup)return{width:t.reduce((n,u)=>Math.max(u.length,n),0)*i,height:i};const e={width:0,height:0},s=this.parentGroup.append("g").attr("visibility","hidden").attr("font-size",i);for(const n of t){const u=ii(s,1,n),g=u?u.width:n.length*i,p=u?u.height:i;e.width=Math.max(e.width,g),e.height=Math.max(e.height,p)}return s.remove(),e}},Dt=.7,vt=.2,Mt=class{constructor(t,i,e,s){this.axisConfig=t,this.title=i,this.textDimensionCalculator=e,this.axisThemeConfig=s,this.boundingRect={x:0,y:0,width:0,height:0},this.axisPosition="left",this.showTitle=!1,this.showLabel=!1,this.showTick=!1,this.showAxisLine=!1,this.outerPadding=0,this.titleTextHeight=0,this.labelTextHeight=0,this.range=[0,10],this.boundingRect={x:0,y:0,width:0,height:0},this.axisPosition="left"}static{a(this,"BaseAxis")}setRange(t){this.range=t,this.axisPosition==="left"||this.axisPosition==="right"?this.boundingRect.height=t[1]-t[0]:this.boundingRect.width=t[1]-t[0],this.recalculateScale()}getRange(){return[this.range[0]+this.outerPadding,this.range[1]-this.outerPadding]}setAxisPosition(t){this.axisPosition=t,this.setRange(this.range)}getTickDistance(){const t=this.getRange();return Math.abs(t[0]-t[1])/this.getTickValues().length}getAxisOuterPadding(){return this.outerPadding}getLabelDimension(){return this.textDimensionCalculator.getMaxDimension(this.getTickValues().map(t=>t.toString()),this.axisConfig.labelFontSize)}recalculateOuterPaddingToDrawBar(){Dt*this.getTickDistance()>this.outerPadding*2&&(this.outerPadding=Math.floor(Dt*this.getTickDistance()/2)),this.recalculateScale()}calculateSpaceIfDrawnHorizontally(t){let i=t.height;if(this.axisConfig.showAxisLine&&i>this.axisConfig.axisLineWidth&&(i-=this.axisConfig.axisLineWidth,this.showAxisLine=!0),this.axisConfig.showLabel){const e=this.getLabelDimension(),s=vt*t.width;this.outerPadding=Math.min(e.width/2,s);const n=e.height+this.axisConfig.labelPadding*2;this.labelTextHeight=e.height,n<=i&&(i-=n,this.showLabel=!0)}if(this.axisConfig.showTick&&i>=this.axisConfig.tickLength&&(this.showTick=!0,i-=this.axisConfig.tickLength),this.axisConfig.showTitle&&this.title){const e=this.textDimensionCalculator.getMaxDimension([this.title],this.axisConfig.titleFontSize),s=e.height+this.axisConfig.titlePadding*2;this.titleTextHeight=e.height,s<=i&&(i-=s,this.showTitle=!0)}this.boundingRect.width=t.width,this.boundingRect.height=t.height-i}calculateSpaceIfDrawnVertical(t){let i=t.width;if(this.axisConfig.showAxisLine&&i>this.axisConfig.axisLineWidth&&(i-=this.axisConfig.axisLineWidth,this.showAxisLine=!0),this.axisConfig.showLabel){const e=this.getLabelDimension(),s=vt*t.height;this.outerPadding=Math.min(e.height/2,s);const n=e.width+this.axisConfig.labelPadding*2;n<=i&&(i-=n,this.showLabel=!0)}if(this.axisConfig.showTick&&i>=this.axisConfig.tickLength&&(this.showTick=!0,i-=this.axisConfig.tickLength),this.axisConfig.showTitle&&this.title){const e=this.textDimensionCalculator.getMaxDimension([this.title],this.axisConfig.titleFontSize),s=e.height+this.axisConfig.titlePadding*2;this.titleTextHeight=e.height,s<=i&&(i-=s,this.showTitle=!0)}this.boundingRect.width=t.width-i,this.boundingRect.height=t.height}calculateSpace(t){return this.axisPosition==="left"||this.axisPosition==="right"?this.calculateSpaceIfDrawnVertical(t):this.calculateSpaceIfDrawnHorizontally(t),this.recalculateScale(),{width:this.boundingRect.width,height:this.boundingRect.height}}setBoundingBoxXY(t){this.boundingRect.x=t.x,this.boundingRect.y=t.y}getDrawableElementsForLeftAxis(){const t=[];if(this.showAxisLine){const i=this.boundingRect.x+this.boundingRect.width-this.axisConfig.axisLineWidth/2;t.push({type:"path",groupTexts:["left-axis","axisl-line"],data:[{path:`M ${i},${this.boundingRect.y} L ${i},${this.boundingRect.y+this.boundingRect.height} `,strokeFill:this.axisThemeConfig.axisLineColor,strokeWidth:this.axisConfig.axisLineWidth}]})}if(this.showLabel&&t.push({type:"text",groupTexts:["left-axis","label"],data:this.getTickValues().map(i=>({text:i.toString(),x:this.boundingRect.x+this.boundingRect.width-(this.showLabel?this.axisConfig.labelPadding:0)-(this.showTick?this.axisConfig.tickLength:0)-(this.showAxisLine?this.axisConfig.axisLineWidth:0),y:this.getScaleValue(i),fill:this.axisThemeConfig.labelColor,fontSize:this.axisConfig.labelFontSize,rotation:0,verticalPos:"middle",horizontalPos:"right"}))}),this.showTick){const i=this.boundingRect.x+this.boundingRect.width-(this.showAxisLine?this.axisConfig.axisLineWidth:0);t.push({type:"path",groupTexts:["left-axis","ticks"],data:this.getTickValues().map(e=>({path:`M ${i},${this.getScaleValue(e)} L ${i-this.axisConfig.tickLength},${this.getScaleValue(e)}`,strokeFill:this.axisThemeConfig.tickColor,strokeWidth:this.axisConfig.tickWidth}))})}return this.showTitle&&t.push({type:"text",groupTexts:["left-axis","title"],data:[{text:this.title,x:this.boundingRect.x+this.axisConfig.titlePadding,y:this.boundingRect.y+this.boundingRect.height/2,fill:this.axisThemeConfig.titleColor,fontSize:this.axisConfig.titleFontSize,rotation:270,verticalPos:"top",horizontalPos:"center"}]}),t}getDrawableElementsForBottomAxis(){const t=[];if(this.showAxisLine){const i=this.boundingRect.y+this.axisConfig.axisLineWidth/2;t.push({type:"path",groupTexts:["bottom-axis","axis-line"],data:[{path:`M ${this.boundingRect.x},${i} L ${this.boundingRect.x+this.boundingRect.width},${i}`,strokeFill:this.axisThemeConfig.axisLineColor,strokeWidth:this.axisConfig.axisLineWidth}]})}if(this.showLabel&&t.push({type:"text",groupTexts:["bottom-axis","label"],data:this.getTickValues().map(i=>({text:i.toString(),x:this.getScaleValue(i),y:this.boundingRect.y+this.axisConfig.labelPadding+(this.showTick?this.axisConfig.tickLength:0)+(this.showAxisLine?this.axisConfig.axisLineWidth:0),fill:this.axisThemeConfig.labelColor,fontSize:this.axisConfig.labelFontSize,rotation:0,verticalPos:"top",horizontalPos:"center"}))}),this.showTick){const i=this.boundingRect.y+(this.showAxisLine?this.axisConfig.axisLineWidth:0);t.push({type:"path",groupTexts:["bottom-axis","ticks"],data:this.getTickValues().map(e=>({path:`M ${this.getScaleValue(e)},${i} L ${this.getScaleValue(e)},${i+this.axisConfig.tickLength}`,strokeFill:this.axisThemeConfig.tickColor,strokeWidth:this.axisConfig.tickWidth}))})}return this.showTitle&&t.push({type:"text",groupTexts:["bottom-axis","title"],data:[{text:this.title,x:this.range[0]+(this.range[1]-this.range[0])/2,y:this.boundingRect.y+this.boundingRect.height-this.axisConfig.titlePadding-this.titleTextHeight,fill:this.axisThemeConfig.titleColor,fontSize:this.axisConfig.titleFontSize,rotation:0,verticalPos:"top",horizontalPos:"center"}]}),t}getDrawableElementsForTopAxis(){const t=[];if(this.showAxisLine){const i=this.boundingRect.y+this.boundingRect.height-this.axisConfig.axisLineWidth/2;t.push({type:"path",groupTexts:["top-axis","axis-line"],data:[{path:`M ${this.boundingRect.x},${i} L ${this.boundingRect.x+this.boundingRect.width},${i}`,strokeFill:this.axisThemeConfig.axisLineColor,strokeWidth:this.axisConfig.axisLineWidth}]})}if(this.showLabel&&t.push({type:"text",groupTexts:["top-axis","label"],data:this.getTickValues().map(i=>({text:i.toString(),x:this.getScaleValue(i),y:this.boundingRect.y+(this.showTitle?this.titleTextHeight+this.axisConfig.titlePadding*2:0)+this.axisConfig.labelPadding,fill:this.axisThemeConfig.labelColor,fontSize:this.axisConfig.labelFontSize,rotation:0,verticalPos:"top",horizontalPos:"center"}))}),this.showTick){const i=this.boundingRect.y;t.push({type:"path",groupTexts:["top-axis","ticks"],data:this.getTickValues().map(e=>({path:`M ${this.getScaleValue(e)},${i+this.boundingRect.height-(this.showAxisLine?this.axisConfig.axisLineWidth:0)} L ${this.getScaleValue(e)},${i+this.boundingRect.height-this.axisConfig.tickLength-(this.showAxisLine?this.axisConfig.axisLineWidth:0)}`,strokeFill:this.axisThemeConfig.tickColor,strokeWidth:this.axisConfig.tickWidth}))})}return this.showTitle&&t.push({type:"text",groupTexts:["top-axis","title"],data:[{text:this.title,x:this.boundingRect.x+this.boundingRect.width/2,y:this.boundingRect.y+this.axisConfig.titlePadding,fill:this.axisThemeConfig.titleColor,fontSize:this.axisConfig.titleFontSize,rotation:0,verticalPos:"top",horizontalPos:"center"}]}),t}getDrawableElements(){if(this.axisPosition==="left")return this.getDrawableElementsForLeftAxis();if(this.axisPosition==="right")throw Error("Drawing of right axis is not implemented");return this.axisPosition==="bottom"?this.getDrawableElementsForBottomAxis():this.axisPosition==="top"?this.getDrawableElementsForTopAxis():[]}},mi=class extends Mt{static{a(this,"BandAxis")}constructor(t,i,e,s,n){super(t,s,n,i),this.categories=e,this.scale=at().domain(this.categories).range(this.getRange())}setRange(t){super.setRange(t)}recalculateScale(){this.scale=at().domain(this.categories).range(this.getRange()).paddingInner(1).paddingOuter(0).align(.5),Pt.trace("BandAxis axis final categories, range: ",this.categories,this.getRange())}getTickValues(){return this.categories}getScaleValue(t){return this.scale(t)??this.getRange()[0]}},yi=class extends Mt{static{a(this,"LinearAxis")}constructor(t,i,e,s,n){super(t,s,n,i),this.domain=e,this.scale=Tt().domain(this.domain).range(this.getRange())}getTickValues(){return this.scale.ticks()}recalculateScale(){const t=[...this.domain];this.axisPosition==="left"&&t.reverse(),this.scale=Tt().domain(t).range(this.getRange())}getScaleValue(t){return this.scale(t)}};function ht(t,i,e,s){const n=new It(s);return ut(t)?new mi(i,e,t.categories,t.title,n):new yi(i,e,[t.min,t.max],t.title,n)}a(ht,"getAxis");var bi=class{constructor(t,i,e,s){this.textDimensionCalculator=t,this.chartConfig=i,this.chartData=e,this.chartThemeConfig=s,this.boundingRect={x:0,y:0,width:0,height:0},this.showChartTitle=!1}static{a(this,"ChartTitle")}setBoundingBoxXY(t){this.boundingRect.x=t.x,this.boundingRect.y=t.y}calculateSpace(t){const i=this.textDimensionCalculator.getMaxDimension([this.chartData.title],this.chartConfig.titleFontSize),e=Math.max(i.width,t.width),s=i.height+2*this.chartConfig.titlePadding;return i.width<=e&&i.height<=s&&this.chartConfig.showTitle&&this.chartData.title&&(this.boundingRect.width=e,this.boundingRect.height=s,this.showChartTitle=!0),{width:this.boundingRect.width,height:this.boundingRect.height}}getDrawableElements(){const t=[];return this.showChartTitle&&t.push({groupTexts:["chart-title"],type:"text",data:[{fontSize:this.chartConfig.titleFontSize,text:this.chartData.title,verticalPos:"middle",horizontalPos:"center",x:this.boundingRect.x+this.boundingRect.width/2,y:this.boundingRect.y+this.boundingRect.height/2,fill:this.chartThemeConfig.titleColor,rotation:0}]}),t}};function Vt(t,i,e,s){const n=new It(s);return new bi(n,t,i,e)}a(Vt,"getChartTitleComponent");var Ai=class{constructor(t,i,e,s,n){this.plotData=t,this.xAxis=i,this.yAxis=e,this.orientation=s,this.plotIndex=n}static{a(this,"LinePlot")}getDrawableElement(){const t=this.plotData.data.map(e=>[this.xAxis.getScaleValue(e[0]),this.yAxis.getScaleValue(e[1])]);let i;return this.orientation==="horizontal"?i=Rt().y(e=>e[0]).x(e=>e[1])(t):i=Rt().x(e=>e[0]).y(e=>e[1])(t),i?[{groupTexts:["plot",`line-plot-${this.plotIndex}`],type:"path",data:[{path:i,strokeFill:this.plotData.strokeFill,strokeWidth:this.plotData.strokeWidth}]}]:[]}},wi=class{constructor(t,i,e,s,n,u){this.barData=t,this.boundingRect=i,this.xAxis=e,this.yAxis=s,this.orientation=n,this.plotIndex=u}static{a(this,"BarPlot")}getDrawableElement(){const t=this.barData.data.map(n=>[this.xAxis.getScaleValue(n[0]),this.yAxis.getScaleValue(n[1])]),e=Math.min(this.xAxis.getAxisOuterPadding()*2,this.xAxis.getTickDistance())*(1-.05),s=e/2;return this.orientation==="horizontal"?[{groupTexts:["plot",`bar-plot-${this.plotIndex}`],type:"rect",data:t.map(n=>({x:this.boundingRect.x,y:n[0]-s,height:e,width:n[1]-this.boundingRect.x,fill:this.barData.fill,strokeWidth:0,strokeFill:this.barData.fill}))}]:[{groupTexts:["plot",`bar-plot-${this.plotIndex}`],type:"rect",data:t.map(n=>({x:n[0]-s,y:n[1],width:e,height:this.boundingRect.y+this.boundingRect.height-n[1],fill:this.barData.fill,strokeWidth:0,strokeFill:this.barData.fill}))}]}},Ci=class{constructor(t,i,e){this.chartConfig=t,this.chartData=i,this.chartThemeConfig=e,this.boundingRect={x:0,y:0,width:0,height:0}}static{a(this,"BasePlot")}setAxes(t,i){this.xAxis=t,this.yAxis=i}setBoundingBoxXY(t){this.boundingRect.x=t.x,this.boundingRect.y=t.y}calculateSpace(t){return this.boundingRect.width=t.width,this.boundingRect.height=t.height,{width:this.boundingRect.width,height:this.boundingRect.height}}getDrawableElements(){if(!(this.xAxis&&this.yAxis))throw Error("Axes must be passed to render Plots");const t=[];for(const[i,e]of this.chartData.plots.entries())switch(e.type){case"line":{const s=new Ai(e,this.xAxis,this.yAxis,this.chartConfig.chartOrientation,i);t.push(...s.getDrawableElement())}break;case"bar":{const s=new wi(e,this.boundingRect,this.xAxis,this.yAxis,this.chartConfig.chartOrientation,i);t.push(...s.getDrawableElement())}break}return t}};function Bt(t,i,e){return new Ci(t,i,e)}a(Bt,"getPlotComponent");var Si=class{constructor(t,i,e,s){this.chartConfig=t,this.chartData=i,this.componentStore={title:Vt(t,i,e,s),plot:Bt(t,i,e),xAxis:ht(i.xAxis,t.xAxis,{titleColor:e.xAxisTitleColor,labelColor:e.xAxisLabelColor,tickColor:e.xAxisTickColor,axisLineColor:e.xAxisLineColor},s),yAxis:ht(i.yAxis,t.yAxis,{titleColor:e.yAxisTitleColor,labelColor:e.yAxisLabelColor,tickColor:e.yAxisTickColor,axisLineColor:e.yAxisLineColor},s)}}static{a(this,"Orchestrator")}calculateVerticalSpace(){let t=this.chartConfig.width,i=this.chartConfig.height,e=0,s=0,n=Math.floor(t*this.chartConfig.plotReservedSpacePercent/100),u=Math.floor(i*this.chartConfig.plotReservedSpacePercent/100),g=this.componentStore.plot.calculateSpace({width:n,height:u});t-=g.width,i-=g.height,g=this.componentStore.title.calculateSpace({width:this.chartConfig.width,height:i}),s=g.height,i-=g.height,this.componentStore.xAxis.setAxisPosition("bottom"),g=this.componentStore.xAxis.calculateSpace({width:t,height:i}),i-=g.height,this.componentStore.yAxis.setAxisPosition("left"),g=this.componentStore.yAxis.calculateSpace({width:t,height:i}),e=g.width,t-=g.width,t>0&&(n+=t,t=0),i>0&&(u+=i,i=0),this.componentStore.plot.calculateSpace({width:n,height:u}),this.componentStore.plot.setBoundingBoxXY({x:e,y:s}),this.componentStore.xAxis.setRange([e,e+n]),this.componentStore.xAxis.setBoundingBoxXY({x:e,y:s+u}),this.componentStore.yAxis.setRange([s,s+u]),this.componentStore.yAxis.setBoundingBoxXY({x:0,y:s}),this.chartData.plots.some(p=>ot(p))&&this.componentStore.xAxis.recalculateOuterPaddingToDrawBar()}calculateHorizontalSpace(){let t=this.chartConfig.width,i=this.chartConfig.height,e=0,s=0,n=0,u=Math.floor(t*this.chartConfig.plotReservedSpacePercent/100),g=Math.floor(i*this.chartConfig.plotReservedSpacePercent/100),p=this.componentStore.plot.calculateSpace({width:u,height:g});t-=p.width,i-=p.height,p=this.componentStore.title.calculateSpace({width:this.chartConfig.width,height:i}),e=p.height,i-=p.height,this.componentStore.xAxis.setAxisPosition("left"),p=this.componentStore.xAxis.calculateSpace({width:t,height:i}),t-=p.width,s=p.width,this.componentStore.yAxis.setAxisPosition("top"),p=this.componentStore.yAxis.calculateSpace({width:t,height:i}),i-=p.height,n=e+p.height,t>0&&(u+=t,t=0),i>0&&(g+=i,i=0),this.componentStore.plot.calculateSpace({width:u,height:g}),this.componentStore.plot.setBoundingBoxXY({x:s,y:n}),this.componentStore.yAxis.setRange([s,s+u]),this.componentStore.yAxis.setBoundingBoxXY({x:s,y:e}),this.componentStore.xAxis.setRange([n,n+g]),this.componentStore.xAxis.setBoundingBoxXY({x:0,y:n}),this.chartData.plots.some(C=>ot(C))&&this.componentStore.xAxis.recalculateOuterPaddingToDrawBar()}calculateSpace(){this.chartConfig.chartOrientation==="horizontal"?this.calculateHorizontalSpace():this.calculateVerticalSpace()}getDrawableElement(){this.calculateSpace();const t=[];this.componentStore.plot.setAxes(this.componentStore.xAxis,this.componentStore.yAxis);for(const i of Object.values(this.componentStore))t.push(...i.getDrawableElements());return t}},_i=class{static{a(this,"XYChartBuilder")}static build(t,i,e,s){return new Si(t,i,e,s).getDrawableElement()}},Y=0,Wt,H=dt(),U=xt(),y=pt(),lt=U.plotColorPalette.split(",").map(t=>t.trim()),K=!1,gt=!1;function xt(){const t=ei(),i=ct();return Lt(t.xyChart,i.themeVariables.xyChart)}a(xt,"getChartDefaultThemeConfig");function dt(){const t=ct();return Lt(si.xyChart,t.xyChart)}a(dt,"getChartDefaultConfig");function pt(){return{yAxis:{type:"linear",title:"",min:1/0,max:-1/0},xAxis:{type:"band",title:"",categories:[]},title:"",plots:[]}}a(pt,"getChartDefaultData");function Z(t){const i=ct();return ni(t.trim(),i)}a(Z,"textSanitizer");function Ot(t){Wt=t}a(Ot,"setTmpSVGG");function zt(t){t==="horizontal"?H.chartOrientation="horizontal":H.chartOrientation="vertical"}a(zt,"setOrientation");function Ft(t){y.xAxis.title=Z(t.text)}a(Ft,"setXAxisTitle");function ft(t,i){y.xAxis={type:"linear",title:y.xAxis.title,min:t,max:i},K=!0}a(ft,"setXAxisRangeData");function Xt(t){y.xAxis={type:"band",title:y.xAxis.title,categories:t.map(i=>Z(i.text))},K=!0}a(Xt,"setXAxisBand");function Nt(t){y.yAxis.title=Z(t.text)}a(Nt,"setYAxisTitle");function Yt(t,i){y.yAxis={type:"linear",title:y.yAxis.title,min:t,max:i},gt=!0}a(Yt,"setYAxisRangeData");function Ht(t){const i=Math.min(...t),e=Math.max(...t),s=F(y.yAxis)?y.yAxis.min:1/0,n=F(y.yAxis)?y.yAxis.max:-1/0;y.yAxis={type:"linear",title:y.yAxis.title,min:Math.min(s,i),max:Math.max(n,e)}}a(Ht,"setYAxisRangeFromPlotData");function mt(t){let i=[];if(t.length===0)return i;if(!K){const e=F(y.xAxis)?y.xAxis.min:1/0,s=F(y.xAxis)?y.xAxis.max:-1/0;ft(Math.min(e,1),Math.max(s,t.length))}if(gt||Ht(t),ut(y.xAxis)&&(i=y.xAxis.categories.map((e,s)=>[e,t[s]])),F(y.xAxis)){const e=y.xAxis.min,s=y.xAxis.max,n=(s-e)/(t.length-1),u=[];for(let g=e;g<=s;g+=n)u.push(`${g}`);i=u.map((g,p)=>[g,t[p]])}return i}a(mt,"transformDataWithoutCategory");function yt(t){return lt[t===0?0:t%lt.length]}a(yt,"getPlotColorFromPalette");function Ut(t,i){const e=mt(i);y.plots.push({type:"line",strokeFill:yt(Y),strokeWidth:2,data:e}),Y++}a(Ut,"setLineData");function $t(t,i){const e=mt(i);y.plots.push({type:"bar",fill:yt(Y),data:e}),Y++}a($t,"setBarData");function qt(){if(y.plots.length===0)throw Error("No Plot to render, please provide a plot with some data");return y.title=Et(),_i.build(H,y,U,Wt)}a(qt,"getDrawableElem");function Gt(){return U}a(Gt,"getChartThemeConfig");function jt(){return H}a(jt,"getChartConfig");var ki=a(function(){ci(),Y=0,H=dt(),y=pt(),U=xt(),lt=U.plotColorPalette.split(",").map(t=>t.trim()),K=!1,gt=!1},"clear"),Ri={getDrawableElem:qt,clear:ki,setAccTitle:ai,getAccTitle:ri,setDiagramTitle:oi,getDiagramTitle:Et,getAccDescription:hi,setAccDescription:li,setOrientation:zt,setXAxisTitle:Ft,setXAxisRangeData:ft,setXAxisBand:Xt,setYAxisTitle:Nt,setYAxisRangeData:Yt,setLineData:Ut,setBarData:$t,setTmpSVGG:Ot,getChartThemeConfig:Gt,getChartConfig:jt},Ti=a((t,i,e,s)=>{const n=s.db,u=n.getChartThemeConfig(),g=n.getChartConfig();function p(f){return f==="top"?"text-before-edge":"middle"}a(p,"getDominantBaseLine");function C(f){return f==="left"?"start":f==="right"?"end":"middle"}a(C,"getTextAnchor");function T(f){return`translate(${f.x}, ${f.y}) rotate(${f.rotation||0})`}a(T,"getTextTransformation"),Pt.debug(`Rendering xychart chart
`+t);const k=ui(i),A=k.append("g").attr("class","main"),m=A.append("rect").attr("width",g.width).attr("height",g.height).attr("class","background");gi(k,g.height,g.width,!0),k.attr("viewBox",`0 0 ${g.width} ${g.height}`),m.attr("fill",u.backgroundColor),n.setTmpSVGG(k.append("g").attr("class","mermaid-tmp-group"));const D=n.getDrawableElem(),S={};function v(f){let _=A,h="";for(const[E]of f.entries()){let X=A;E>0&&S[h]&&(X=S[h]),h+=f[E],_=S[h],_||(_=S[h]=X.append("g").attr("class",f[E]))}return _}a(v,"getGroup");for(const f of D){if(f.data.length===0)continue;const _=v(f.groupTexts);switch(f.type){case"rect":_.selectAll("rect").data(f.data).enter().append("rect").attr("x",h=>h.x).attr("y",h=>h.y).attr("width",h=>h.width).attr("height",h=>h.height).attr("fill",h=>h.fill).attr("stroke",h=>h.strokeFill).attr("stroke-width",h=>h.strokeWidth);break;case"text":_.selectAll("text").data(f.data).enter().append("text").attr("x",0).attr("y",0).attr("fill",h=>h.fill).attr("font-size",h=>h.fontSize).attr("dominant-baseline",h=>p(h.verticalPos)).attr("text-anchor",h=>C(h.horizontalPos)).attr("transform",h=>T(h)).text(h=>h.text);break;case"path":_.selectAll("path").data(f.data).enter().append("path").attr("d",h=>h.path).attr("fill",h=>h.fill?h.fill:"none").attr("stroke",h=>h.strokeFill).attr("stroke-width",h=>h.strokeWidth);break}}},"draw"),Di={draw:Ti},Ii={parser:fi,db:Ri,renderer:Di};export{Ii as diagram};
