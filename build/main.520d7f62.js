(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{170:function(n,t,s){},173:function(n,t,s){"use strict";s.r(t);var e=s(187),a=s(41),r=s(2),i=s.n(r);t.default=function(n){var t=n.children,s=n.text,o=n.textProp,c=void 0===o?"children":o,p=n.renderText,l=void 0===p?null:p,u=n.duration,j=void 0===u?1e3:u,_=n.delay,S=void 0===_?0:_,x=n.iterationCount,y=void 0===x?1:x,d=n.reverse,h=void 0!==d&&d,E=n.active,k=void 0===E||E,m=n.onStart,P=void 0===m?null:m,g=n.onChange,C=void 0===g?null:g,T=n.onEnd,b=void 0===T?null:T,f=Object(r.useState)(""),B=Object(a.a)(f,2),v=B[0],O=B[1],G=Object(r.useState)(""),M=Object(a.a)(G,2),L=M[0],w=M[1],I=Object(r.useState)(null),R=Object(a.a)(I,2),D=R[0],A=R[1],H=Object(r.useState)(null),N=Object(a.a)(H,2),K=N[0],$=N[1],W=Object(r.useState)(!1),U=Object(a.a)(W,2),q=U[0],V=U[1],J=Object(r.useState)(1),z=Object(a.a)(J,2),F=z[0],X=z[1],Y=Object(r.useRef)(v);Y.current=v;var Z=Object(r.useRef)(L);Z.current=L;var Q=Object(r.useRef)(D);Q.current=D;var nn=Object(r.useRef)(K);nn.current=K;var tn=Object(r.useRef)(q);tn.current=q;var sn=Object(r.useRef)(F);sn.current=F;var en=Object(r.useCallback)((function(){return null!==nn.current||null!==Q.current}),[nn,Q]),an=Object(r.useCallback)((function(){return Y.current===s}),[Y,s]),rn=Object(r.useCallback)((function(){return sn.current===y&&an()}),[sn,y,an]),on=Object(r.useCallback)((function(){return an()?"":h?s[s.length-Y.current.length-1]:s[Y.current.length]}),[Y,s,an,h]),cn=Object(r.useCallback)((function(){if(an())return"";var n=on();return h?n+Y.current:Y.current+n}),[Y,on,an,h]),pn=Object(r.useCallback)((function(){if(null===l)return cn();var n=an();return l(n?"":Z.current,n?"":on(),n?"":Y.current,sn.current)}),[l,cn,Z,on,Y,sn,an]),ln=Object(r.useCallback)((function(){nn.current&&(clearTimeout(nn.current),$(null)),null!==Q.current&&(clearInterval(Q.current),A(null))}),[nn,Q]),un=Object(r.useCallback)((function(){if(!en()){var n=setTimeout((function(){tn.current||P&&P();var n=setInterval((function(){var n=cn(),t=pn(),s=on();O(n),w(t),C&&C(n,s,sn.current),rn()?(ln(),b&&b()):an()&&X((function(n){return n+1}))}),j/s.length);A(n),$(null),V(!0)}),tn.current?0:S);$(n)}}),[en,cn,pn,on,s,j,S,sn,an,rn,ln,P,C,b]);return Object(r.useEffect)((function(){k?un():ln()}),[un,ln,k]),Object(r.useEffect)((function(){return function(){nn.current&&clearTimeout(nn.current),null!==Q.current&&clearInterval(Q.current)}}),[]),i.a.cloneElement(t,Object(e.a)({},c,L))}},188:function(n,t,s){n.exports=s(772)},339:function(n,t,s){var e={"./Binary_Property/ASCII.js":340,"./Binary_Property/ASCII_Hex_Digit.js":341,"./Binary_Property/Alphabetic.js":342,"./Binary_Property/Any.js":343,"./Binary_Property/Assigned.js":344,"./Binary_Property/Bidi_Control.js":345,"./Binary_Property/Bidi_Mirrored.js":346,"./Binary_Property/Case_Ignorable.js":347,"./Binary_Property/Cased.js":348,"./Binary_Property/Changes_When_Casefolded.js":349,"./Binary_Property/Changes_When_Casemapped.js":350,"./Binary_Property/Changes_When_Lowercased.js":351,"./Binary_Property/Changes_When_NFKC_Casefolded.js":352,"./Binary_Property/Changes_When_Titlecased.js":353,"./Binary_Property/Changes_When_Uppercased.js":354,"./Binary_Property/Dash.js":355,"./Binary_Property/Default_Ignorable_Code_Point.js":356,"./Binary_Property/Deprecated.js":357,"./Binary_Property/Diacritic.js":358,"./Binary_Property/Emoji.js":359,"./Binary_Property/Emoji_Component.js":360,"./Binary_Property/Emoji_Modifier.js":361,"./Binary_Property/Emoji_Modifier_Base.js":362,"./Binary_Property/Emoji_Presentation.js":363,"./Binary_Property/Extended_Pictographic.js":364,"./Binary_Property/Extender.js":365,"./Binary_Property/Grapheme_Base.js":366,"./Binary_Property/Grapheme_Extend.js":367,"./Binary_Property/Hex_Digit.js":368,"./Binary_Property/IDS_Binary_Operator.js":369,"./Binary_Property/IDS_Trinary_Operator.js":370,"./Binary_Property/ID_Continue.js":371,"./Binary_Property/ID_Start.js":372,"./Binary_Property/Ideographic.js":373,"./Binary_Property/Join_Control.js":374,"./Binary_Property/Logical_Order_Exception.js":375,"./Binary_Property/Lowercase.js":376,"./Binary_Property/Math.js":377,"./Binary_Property/Noncharacter_Code_Point.js":378,"./Binary_Property/Pattern_Syntax.js":379,"./Binary_Property/Pattern_White_Space.js":380,"./Binary_Property/Quotation_Mark.js":381,"./Binary_Property/Radical.js":382,"./Binary_Property/Regional_Indicator.js":383,"./Binary_Property/Sentence_Terminal.js":384,"./Binary_Property/Soft_Dotted.js":385,"./Binary_Property/Terminal_Punctuation.js":386,"./Binary_Property/Unified_Ideograph.js":387,"./Binary_Property/Uppercase.js":388,"./Binary_Property/Variation_Selector.js":389,"./Binary_Property/White_Space.js":390,"./Binary_Property/XID_Continue.js":391,"./Binary_Property/XID_Start.js":392,"./General_Category/Cased_Letter.js":393,"./General_Category/Close_Punctuation.js":394,"./General_Category/Connector_Punctuation.js":395,"./General_Category/Control.js":396,"./General_Category/Currency_Symbol.js":397,"./General_Category/Dash_Punctuation.js":398,"./General_Category/Decimal_Number.js":399,"./General_Category/Enclosing_Mark.js":400,"./General_Category/Final_Punctuation.js":401,"./General_Category/Format.js":402,"./General_Category/Initial_Punctuation.js":403,"./General_Category/Letter.js":404,"./General_Category/Letter_Number.js":405,"./General_Category/Line_Separator.js":406,"./General_Category/Lowercase_Letter.js":407,"./General_Category/Mark.js":408,"./General_Category/Math_Symbol.js":409,"./General_Category/Modifier_Letter.js":410,"./General_Category/Modifier_Symbol.js":411,"./General_Category/Nonspacing_Mark.js":412,"./General_Category/Number.js":413,"./General_Category/Open_Punctuation.js":414,"./General_Category/Other.js":415,"./General_Category/Other_Letter.js":416,"./General_Category/Other_Number.js":417,"./General_Category/Other_Punctuation.js":418,"./General_Category/Other_Symbol.js":419,"./General_Category/Paragraph_Separator.js":420,"./General_Category/Private_Use.js":421,"./General_Category/Punctuation.js":422,"./General_Category/Separator.js":423,"./General_Category/Space_Separator.js":424,"./General_Category/Spacing_Mark.js":425,"./General_Category/Surrogate.js":426,"./General_Category/Symbol.js":427,"./General_Category/Titlecase_Letter.js":428,"./General_Category/Unassigned.js":429,"./General_Category/Uppercase_Letter.js":430,"./Script/Adlam.js":431,"./Script/Ahom.js":432,"./Script/Anatolian_Hieroglyphs.js":433,"./Script/Arabic.js":434,"./Script/Armenian.js":435,"./Script/Avestan.js":436,"./Script/Balinese.js":437,"./Script/Bamum.js":438,"./Script/Bassa_Vah.js":439,"./Script/Batak.js":440,"./Script/Bengali.js":441,"./Script/Bhaiksuki.js":442,"./Script/Bopomofo.js":443,"./Script/Brahmi.js":444,"./Script/Braille.js":445,"./Script/Buginese.js":446,"./Script/Buhid.js":447,"./Script/Canadian_Aboriginal.js":448,"./Script/Carian.js":449,"./Script/Caucasian_Albanian.js":450,"./Script/Chakma.js":451,"./Script/Cham.js":452,"./Script/Cherokee.js":453,"./Script/Chorasmian.js":454,"./Script/Common.js":455,"./Script/Coptic.js":456,"./Script/Cuneiform.js":457,"./Script/Cypriot.js":458,"./Script/Cyrillic.js":459,"./Script/Deseret.js":460,"./Script/Devanagari.js":461,"./Script/Dives_Akuru.js":462,"./Script/Dogra.js":463,"./Script/Duployan.js":464,"./Script/Egyptian_Hieroglyphs.js":465,"./Script/Elbasan.js":466,"./Script/Elymaic.js":467,"./Script/Ethiopic.js":468,"./Script/Georgian.js":469,"./Script/Glagolitic.js":470,"./Script/Gothic.js":471,"./Script/Grantha.js":472,"./Script/Greek.js":473,"./Script/Gujarati.js":474,"./Script/Gunjala_Gondi.js":475,"./Script/Gurmukhi.js":476,"./Script/Han.js":477,"./Script/Hangul.js":478,"./Script/Hanifi_Rohingya.js":479,"./Script/Hanunoo.js":480,"./Script/Hatran.js":481,"./Script/Hebrew.js":482,"./Script/Hiragana.js":483,"./Script/Imperial_Aramaic.js":484,"./Script/Inherited.js":485,"./Script/Inscriptional_Pahlavi.js":486,"./Script/Inscriptional_Parthian.js":487,"./Script/Javanese.js":488,"./Script/Kaithi.js":489,"./Script/Kannada.js":490,"./Script/Katakana.js":491,"./Script/Kayah_Li.js":492,"./Script/Kharoshthi.js":493,"./Script/Khitan_Small_Script.js":494,"./Script/Khmer.js":495,"./Script/Khojki.js":496,"./Script/Khudawadi.js":497,"./Script/Lao.js":498,"./Script/Latin.js":499,"./Script/Lepcha.js":500,"./Script/Limbu.js":501,"./Script/Linear_A.js":502,"./Script/Linear_B.js":503,"./Script/Lisu.js":504,"./Script/Lycian.js":505,"./Script/Lydian.js":506,"./Script/Mahajani.js":507,"./Script/Makasar.js":508,"./Script/Malayalam.js":509,"./Script/Mandaic.js":510,"./Script/Manichaean.js":511,"./Script/Marchen.js":512,"./Script/Masaram_Gondi.js":513,"./Script/Medefaidrin.js":514,"./Script/Meetei_Mayek.js":515,"./Script/Mende_Kikakui.js":516,"./Script/Meroitic_Cursive.js":517,"./Script/Meroitic_Hieroglyphs.js":518,"./Script/Miao.js":519,"./Script/Modi.js":520,"./Script/Mongolian.js":521,"./Script/Mro.js":522,"./Script/Multani.js":523,"./Script/Myanmar.js":524,"./Script/Nabataean.js":525,"./Script/Nandinagari.js":526,"./Script/New_Tai_Lue.js":527,"./Script/Newa.js":528,"./Script/Nko.js":529,"./Script/Nushu.js":530,"./Script/Nyiakeng_Puachue_Hmong.js":531,"./Script/Ogham.js":532,"./Script/Ol_Chiki.js":533,"./Script/Old_Hungarian.js":534,"./Script/Old_Italic.js":535,"./Script/Old_North_Arabian.js":536,"./Script/Old_Permic.js":537,"./Script/Old_Persian.js":538,"./Script/Old_Sogdian.js":539,"./Script/Old_South_Arabian.js":540,"./Script/Old_Turkic.js":541,"./Script/Oriya.js":542,"./Script/Osage.js":543,"./Script/Osmanya.js":544,"./Script/Pahawh_Hmong.js":545,"./Script/Palmyrene.js":546,"./Script/Pau_Cin_Hau.js":547,"./Script/Phags_Pa.js":548,"./Script/Phoenician.js":549,"./Script/Psalter_Pahlavi.js":550,"./Script/Rejang.js":551,"./Script/Runic.js":552,"./Script/Samaritan.js":553,"./Script/Saurashtra.js":554,"./Script/Sharada.js":555,"./Script/Shavian.js":556,"./Script/Siddham.js":557,"./Script/SignWriting.js":558,"./Script/Sinhala.js":559,"./Script/Sogdian.js":560,"./Script/Sora_Sompeng.js":561,"./Script/Soyombo.js":562,"./Script/Sundanese.js":563,"./Script/Syloti_Nagri.js":564,"./Script/Syriac.js":565,"./Script/Tagalog.js":566,"./Script/Tagbanwa.js":567,"./Script/Tai_Le.js":568,"./Script/Tai_Tham.js":569,"./Script/Tai_Viet.js":570,"./Script/Takri.js":571,"./Script/Tamil.js":572,"./Script/Tangut.js":573,"./Script/Telugu.js":574,"./Script/Thaana.js":575,"./Script/Thai.js":576,"./Script/Tibetan.js":577,"./Script/Tifinagh.js":578,"./Script/Tirhuta.js":579,"./Script/Ugaritic.js":580,"./Script/Vai.js":581,"./Script/Wancho.js":582,"./Script/Warang_Citi.js":583,"./Script/Yezidi.js":584,"./Script/Yi.js":585,"./Script/Zanabazar_Square.js":586,"./Script_Extensions/Adlam.js":587,"./Script_Extensions/Ahom.js":588,"./Script_Extensions/Anatolian_Hieroglyphs.js":589,"./Script_Extensions/Arabic.js":590,"./Script_Extensions/Armenian.js":591,"./Script_Extensions/Avestan.js":592,"./Script_Extensions/Balinese.js":593,"./Script_Extensions/Bamum.js":594,"./Script_Extensions/Bassa_Vah.js":595,"./Script_Extensions/Batak.js":596,"./Script_Extensions/Bengali.js":597,"./Script_Extensions/Bhaiksuki.js":598,"./Script_Extensions/Bopomofo.js":599,"./Script_Extensions/Brahmi.js":600,"./Script_Extensions/Braille.js":601,"./Script_Extensions/Buginese.js":602,"./Script_Extensions/Buhid.js":603,"./Script_Extensions/Canadian_Aboriginal.js":604,"./Script_Extensions/Carian.js":605,"./Script_Extensions/Caucasian_Albanian.js":606,"./Script_Extensions/Chakma.js":607,"./Script_Extensions/Cham.js":608,"./Script_Extensions/Cherokee.js":609,"./Script_Extensions/Chorasmian.js":610,"./Script_Extensions/Common.js":611,"./Script_Extensions/Coptic.js":612,"./Script_Extensions/Cuneiform.js":613,"./Script_Extensions/Cypriot.js":614,"./Script_Extensions/Cyrillic.js":615,"./Script_Extensions/Deseret.js":616,"./Script_Extensions/Devanagari.js":617,"./Script_Extensions/Dives_Akuru.js":618,"./Script_Extensions/Dogra.js":619,"./Script_Extensions/Duployan.js":620,"./Script_Extensions/Egyptian_Hieroglyphs.js":621,"./Script_Extensions/Elbasan.js":622,"./Script_Extensions/Elymaic.js":623,"./Script_Extensions/Ethiopic.js":624,"./Script_Extensions/Georgian.js":625,"./Script_Extensions/Glagolitic.js":626,"./Script_Extensions/Gothic.js":627,"./Script_Extensions/Grantha.js":628,"./Script_Extensions/Greek.js":629,"./Script_Extensions/Gujarati.js":630,"./Script_Extensions/Gunjala_Gondi.js":631,"./Script_Extensions/Gurmukhi.js":632,"./Script_Extensions/Han.js":633,"./Script_Extensions/Hangul.js":634,"./Script_Extensions/Hanifi_Rohingya.js":635,"./Script_Extensions/Hanunoo.js":636,"./Script_Extensions/Hatran.js":637,"./Script_Extensions/Hebrew.js":638,"./Script_Extensions/Hiragana.js":639,"./Script_Extensions/Imperial_Aramaic.js":640,"./Script_Extensions/Inherited.js":641,"./Script_Extensions/Inscriptional_Pahlavi.js":642,"./Script_Extensions/Inscriptional_Parthian.js":643,"./Script_Extensions/Javanese.js":644,"./Script_Extensions/Kaithi.js":645,"./Script_Extensions/Kannada.js":646,"./Script_Extensions/Katakana.js":647,"./Script_Extensions/Kayah_Li.js":648,"./Script_Extensions/Kharoshthi.js":649,"./Script_Extensions/Khitan_Small_Script.js":650,"./Script_Extensions/Khmer.js":651,"./Script_Extensions/Khojki.js":652,"./Script_Extensions/Khudawadi.js":653,"./Script_Extensions/Lao.js":654,"./Script_Extensions/Latin.js":655,"./Script_Extensions/Lepcha.js":656,"./Script_Extensions/Limbu.js":657,"./Script_Extensions/Linear_A.js":658,"./Script_Extensions/Linear_B.js":659,"./Script_Extensions/Lisu.js":660,"./Script_Extensions/Lycian.js":661,"./Script_Extensions/Lydian.js":662,"./Script_Extensions/Mahajani.js":663,"./Script_Extensions/Makasar.js":664,"./Script_Extensions/Malayalam.js":665,"./Script_Extensions/Mandaic.js":666,"./Script_Extensions/Manichaean.js":667,"./Script_Extensions/Marchen.js":668,"./Script_Extensions/Masaram_Gondi.js":669,"./Script_Extensions/Medefaidrin.js":670,"./Script_Extensions/Meetei_Mayek.js":671,"./Script_Extensions/Mende_Kikakui.js":672,"./Script_Extensions/Meroitic_Cursive.js":673,"./Script_Extensions/Meroitic_Hieroglyphs.js":674,"./Script_Extensions/Miao.js":675,"./Script_Extensions/Modi.js":676,"./Script_Extensions/Mongolian.js":677,"./Script_Extensions/Mro.js":678,"./Script_Extensions/Multani.js":679,"./Script_Extensions/Myanmar.js":680,"./Script_Extensions/Nabataean.js":681,"./Script_Extensions/Nandinagari.js":682,"./Script_Extensions/New_Tai_Lue.js":683,"./Script_Extensions/Newa.js":684,"./Script_Extensions/Nko.js":685,"./Script_Extensions/Nushu.js":686,"./Script_Extensions/Nyiakeng_Puachue_Hmong.js":687,"./Script_Extensions/Ogham.js":688,"./Script_Extensions/Ol_Chiki.js":689,"./Script_Extensions/Old_Hungarian.js":690,"./Script_Extensions/Old_Italic.js":691,"./Script_Extensions/Old_North_Arabian.js":692,"./Script_Extensions/Old_Permic.js":693,"./Script_Extensions/Old_Persian.js":694,"./Script_Extensions/Old_Sogdian.js":695,"./Script_Extensions/Old_South_Arabian.js":696,"./Script_Extensions/Old_Turkic.js":697,"./Script_Extensions/Oriya.js":698,"./Script_Extensions/Osage.js":699,"./Script_Extensions/Osmanya.js":700,"./Script_Extensions/Pahawh_Hmong.js":701,"./Script_Extensions/Palmyrene.js":702,"./Script_Extensions/Pau_Cin_Hau.js":703,"./Script_Extensions/Phags_Pa.js":704,"./Script_Extensions/Phoenician.js":705,"./Script_Extensions/Psalter_Pahlavi.js":706,"./Script_Extensions/Rejang.js":707,"./Script_Extensions/Runic.js":708,"./Script_Extensions/Samaritan.js":709,"./Script_Extensions/Saurashtra.js":710,"./Script_Extensions/Sharada.js":711,"./Script_Extensions/Shavian.js":712,"./Script_Extensions/Siddham.js":713,"./Script_Extensions/SignWriting.js":714,"./Script_Extensions/Sinhala.js":715,"./Script_Extensions/Sogdian.js":716,"./Script_Extensions/Sora_Sompeng.js":717,"./Script_Extensions/Soyombo.js":718,"./Script_Extensions/Sundanese.js":719,"./Script_Extensions/Syloti_Nagri.js":720,"./Script_Extensions/Syriac.js":721,"./Script_Extensions/Tagalog.js":722,"./Script_Extensions/Tagbanwa.js":723,"./Script_Extensions/Tai_Le.js":724,"./Script_Extensions/Tai_Tham.js":725,"./Script_Extensions/Tai_Viet.js":726,"./Script_Extensions/Takri.js":727,"./Script_Extensions/Tamil.js":728,"./Script_Extensions/Tangut.js":729,"./Script_Extensions/Telugu.js":730,"./Script_Extensions/Thaana.js":731,"./Script_Extensions/Thai.js":732,"./Script_Extensions/Tibetan.js":733,"./Script_Extensions/Tifinagh.js":734,"./Script_Extensions/Tirhuta.js":735,"./Script_Extensions/Ugaritic.js":736,"./Script_Extensions/Vai.js":737,"./Script_Extensions/Wancho.js":738,"./Script_Extensions/Warang_Citi.js":739,"./Script_Extensions/Yezidi.js":740,"./Script_Extensions/Yi.js":741,"./Script_Extensions/Zanabazar_Square.js":742,"./index.js":743,"./unicode-version.js":744};function a(n){var t=r(n);return s(t)}function r(n){if(!s.o(e,n)){var t=new Error("Cannot find module '"+n+"'");throw t.code="MODULE_NOT_FOUND",t}return e[n]}a.keys=function(){return Object.keys(e)},a.resolve=r,n.exports=a,a.id=339},769:function(n,t,s){var e={"D:\\Documents\\React Projects\\components\\react-pulse-text\\src\\components\\PulseText\\css\\examples.css":s(170),react:s(2)},a=s(171).default.bind(null,e);s(172).default.bind(null,"const styles$0 = require('D:\\\\Documents\\\\React Projects\\\\components\\\\react-pulse-text\\\\src\\\\components\\\\PulseText\\\\css\\\\examples.css');\nconst styles = styles$0.default || (styles$0['styles'] || styles$0);\nconst React$0 = require('react');\nconst React = React$0.default || (React$0['React'] || React$0);",a),n.exports=[{type:"markdown",content:'### npm\n\n```bash\n<span class="token function">npm</span> i react-pulse-text\n```\n\n### yarn\n\n```bash\n<span class="token function">yarn</span> <span class="token function">add</span> react-pulse-text\n```'}]},770:function(n,t,s){n.exports={doclets:{},displayName:"PulseText",methods:[],props:[],examples:s(771)}},771:function(n,t,s){var e={"D:\\Documents\\React Projects\\components\\react-pulse-text\\src\\components\\PulseText\\css\\examples.css":s(170),react:s(2),"./PulseText.jsx":s(173)},a=s(171).default.bind(null,e),r=s(172).default.bind(null,"const styles$0 = require('D:\\\\Documents\\\\React Projects\\\\components\\\\react-pulse-text\\\\src\\\\components\\\\PulseText\\\\css\\\\examples.css');\nconst styles = styles$0.default || (styles$0['styles'] || styles$0);\nconst React$0 = require('react');\nconst React = React$0.default || (React$0['React'] || React$0);\nconst PulseText$0 = require('./PulseText.jsx');\nconst PulseText = PulseText$0.default || (PulseText$0['PulseText'] || PulseText$0);",a);n.exports=[{type:"markdown",content:"## Examples\n\n### Basic"},{type:"code",content:'<PulseText text="Pulse text" duration={6000}>\n    <h1>Pulse text</h1>\n</PulseText>',settings:{},evalInContext:r},{type:"markdown",content:"* * *\n\n### With delay"},{type:"code",content:'<PulseText text="Pulse text" duration={6000} delay={4000}>\n    <h1>Pulse text</h1>\n</PulseText>',settings:{},evalInContext:r},{type:"markdown",content:"* * *\n\n### With several iterations"},{type:"code",content:'<PulseText text="Pulse text" duration={6000} iterationCount={99999}>\n    <h1>Pulse text</h1>\n</PulseText>',settings:{},evalInContext:r},{type:"markdown",content:"* * *\n\n### Animate other prop"},{type:"code",content:'<PulseText text="Pulse text" textProp="value" duration={6000} iterationCount={99999}>\n    <textarea />\n</PulseText>',settings:{},evalInContext:r},{type:"code",content:'<PulseText text="Pulse text" textProp="placeholder" duration={6000} iterationCount={99999}>\n    <input />\n</PulseText>',settings:{},evalInContext:r},{type:"markdown",content:"* * *\n\n### With reverse"},{type:"code",content:'<PulseText text="Pulse text" duration={6000} iterationCount={99999} reverse>\n    <h1>Pulse text</h1>\n</PulseText>',settings:{},evalInContext:r},{type:"markdown",content:"* * *\n\n### Pause and resume"},{type:"code",content:"const [active, setActive] = React.useState(true);\n<>\n    <button type=\"button\" onClick={() => setActive(!active)}>\n        {active ? 'Pause' : 'Resume'}\n    </button>\n    \n    <PulseText text=\"Pulse text\" duration={6000} iterationCount={99999} active={active}>\n        <h1>Pulse text</h1>\n    </PulseText>\n</>",settings:{},evalInContext:r},{type:"markdown",content:"* * *\n\n### With custom text"},{type:"code",content:"const renderText = (currentText, nextLetter, currentRawText) => (\n    nextLetter \n    ? <>\n        {currentText}\n        <span style={{color: currentRawText.length % 2 === 0 ? 'red' : 'green'}}>\n            {nextLetter}\n        </span>\n    </>\n    : ''\n);\n<PulseText text=\"Pulse text\" duration={6000} iterationCount={99999} renderText={renderText}>\n    <h1>Pulse text</h1>\n</PulseText>",settings:{},evalInContext:r},{type:"markdown",content:"* * *\n\n### Text with blinking caret"},{type:"code",content:'<PulseText text="Pulse text" duration={6000} iterationCount={99999}>\n    <h1 className="text-with-cursor">Pulse text</h1>\n</PulseText>',settings:{},evalInContext:r},{type:"markdown",content:'_css_\n\n```css\n<span class="token atrule"><span class="token rule">@keyframes</span> blink-animation</span> <span class="token punctuation">{</span>\n    <span class="token selector">50%</span> <span class="token punctuation">{</span>\n        <span class="token property">opacity</span><span class="token punctuation">:</span> <span class="token number">0</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n<span class="token selector"><span class="token class">.text-with-cursor</span><span class="token pseudo-element">::after</span></span> <span class="token punctuation">{</span>\n    <span class="token property">content</span><span class="token punctuation">:</span> <span class="token string">\'|\'</span><span class="token punctuation">;</span>\n    <span class="token property">color</span><span class="token punctuation">:</span> <span class="token color">gray</span><span class="token punctuation">;</span>\n    <span class="token property">display</span><span class="token punctuation">:</span> inline-block<span class="token punctuation">;</span>\n    <span class="token property">animation-name</span><span class="token punctuation">:</span> blink-animation<span class="token punctuation">;</span>\n    <span class="token property">animation-duration</span><span class="token punctuation">:</span> <span class="token number">1000</span><span class="token unit">ms</span><span class="token punctuation">;</span>\n    <span class="token property">animation-iteration-count</span><span class="token punctuation">:</span> infinite<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n```\n\n* * *\n\n### Input with caret'},{type:"code",content:"const renderText = (currentText, nextLetter, currentRawText) => (\n    nextLetter \n    ? currentRawText + nextLetter + (currentText.length % 2 === 0 ? '_' : '')\n    : ''\n);\n\n<PulseText text=\"Pulse text\" textProp=\"value\" duration={3000} iterationCount={99999} renderText={renderText}>\n    <input />\n</PulseText>",settings:{},evalInContext:r},{type:"markdown",content:"* * *\n\n### With animated letters"},{type:"code",content:"const renderText = (currentText, nextLetter, currentRawText) => (\n    nextLetter \n        ? <>\n            {currentRawText}\n            <span key={currentRawText.length} className=\"letter\">\n                {nextLetter === ' ' ? '_' : nextLetter}\n            </span>\n        </>\n        : ''\n);\n\n<PulseText text=\"Pulse text\" duration={10000}  iterationCount={99999} renderText={renderText}>\n    <h1>Pulse text</h1>\n</PulseText>",settings:{},evalInContext:r},{type:"markdown",content:'_Css_\n\n```css\n<span class="token atrule"><span class="token rule">@keyframes</span> letter-animation</span> <span class="token punctuation">{</span>\n    <span class="token selector">from</span> <span class="token punctuation">{</span>\n        <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">scale</span><span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">)</span> <span class="token function">translateX</span><span class="token punctuation">(</span><span class="token number">-400</span><span class="token unit">px</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n    <span class="token selector">to</span> <span class="token punctuation">{</span>\n        <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">scale</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token function">translateX</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n<span class="token selector"><span class="token class">.letter</span></span> <span class="token punctuation">{</span>\n    <span class="token property">color</span><span class="token punctuation">:</span> <span class="token color">red</span><span class="token punctuation">;</span>\n    <span class="token property">display</span><span class="token punctuation">:</span> inline-block<span class="token punctuation">;</span>\n    <span class="token property">animation-name</span><span class="token punctuation">:</span> letter-animation<span class="token punctuation">;</span>\n    <span class="token property">animation-duration</span><span class="token punctuation">:</span> <span class="token number">1000</span><span class="token unit">ms</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n```'}]}},[[188,1,2]]]);