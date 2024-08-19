window.isiOS=!1;if(/iPhone|iPad|iPod/i.test(navigator.userAgent)){window.isiOS=!0}
window.isiOSVersion='';if(window.isiOS){var version=(navigator.appVersion).match(/OS (\d+)_(\d+)_?(\d+)?/);if(version!==null){window.isiOSVersion=[parseInt(version[1],10),parseInt(version[2],10),parseInt(version[3]||0,10)]}}
function t_throttle(fn,threshhold,scope){var last;var deferTimer;threshhold||(threshhold=250);return function(){var context=scope||this;var now=+new Date();var args=arguments;if(last&&now<last+threshhold){clearTimeout(deferTimer);deferTimer=setTimeout(function(){last=now;fn.apply(context,args)},threshhold)}else{last=now;fn.apply(context,args)}}}
function t898_init(recId){var rec=document.getElementById('rec'+recId);if(!rec)return;var container=rec.querySelector('.t898');if(!container)return;rec.setAttribute('data-animationappear','off');rec.style.opacity=1;var whatsApp=rec.querySelector('.t898__icon-whatsapp_wrapper');if(whatsApp){var whatsAppHref=whatsApp.getAttribute('href');if(whatsAppHref&&(whatsAppHref.indexOf('whatsapp://')>-1||whatsAppHref.indexOf('wa.me')>-1)){t898_removeExtraSymbolsFromWhatsApp(whatsApp,whatsAppHref)}}
if(window.lazy==='y'||document.getElementById('allrecords').getAttribute('data-tilda-lazy')==='yes'){t_onFuncLoad('t_lazyload_update',function(){t_lazyload_update()})}}
function t898_removeExtraSymbolsFromWhatsApp(whatsApp,whatsAppHref){if(whatsAppHref&&whatsAppHref.indexOf('?text=')!==-1){var whatsAppHrefArr=whatsAppHref.split('?text=');whatsAppHrefArr[0]=whatsAppHrefArr[0].replace(/[\(\)+-]/g,'');whatsAppHref=whatsAppHrefArr[0]+'?text='+whatsAppHrefArr[1]}else{whatsAppHref=whatsAppHref.replace(/[\(\)+-]/,'')}
whatsApp.setAttribute('href',whatsAppHref)}
function t702_initPopup(recId){var rec=document.getElementById('rec'+recId);if(!rec)return;var container=rec.querySelector('.t702');if(!container)return;rec.setAttribute('data-animationappear','off');rec.setAttribute('data-popup-subscribe-inited','y');rec.style.opacity=1;var documentBody=document.body;var popup=rec.querySelector('.t-popup');var popupTooltipHook=popup.getAttribute('data-tooltip-hook');var analitics=popup.getAttribute('data-track-popup');var popupCloseBtn=popup.querySelector('.t-popup__close');var hrefs=rec.querySelectorAll('a[href*="#"]');var submitHref=rec.querySelector('.t-submit[href*="#"]');if(popupTooltipHook){t_onFuncLoad('t_popup__addAttributesForAccessibility',function(){t_popup__addAttributesForAccessibility(popupTooltipHook)});document.addEventListener('click',function(event){var target=event.target;var href=target.closest('a[href$="'+popupTooltipHook+'"]')?target:!1;if(!href)return;event.preventDefault();t702_showPopup(recId);t_onFuncLoad('t_popup__resizePopup',function(){t_popup__resizePopup(recId)});t702__lazyLoad();if(analitics&&window.Tilda){Tilda.sendEventToStatistics(analitics,popupTooltipHook)}});t_onFuncLoad('t_popup__addClassOnTriggerButton',function(){t_popup__addClassOnTriggerButton(document,popupTooltipHook)})}
popup.addEventListener('scroll',t_throttle(function(){t702__lazyLoad()}));popup.addEventListener('click',function(event){var windowWithoutScrollBar=window.innerWidth-17;if(event.clientX>windowWithoutScrollBar)return;if(event.target===this)t702_closePopup(recId)});popupCloseBtn.addEventListener('click',function(){t702_closePopup(recId)});if(submitHref){submitHref.addEventListener('click',function(){if(documentBody.classList.contains('t-body_scroll-locked')){documentBody.classList.remove('t-body_scroll-locked')}})}
for(var i=0;i<hrefs.length;i++){hrefs[i].addEventListener('click',function(){var url=this.getAttribute('href');if(!url||url.substring(0,7)!='#price:'){t702_closePopup(recId);if(!url||url.substring(0,7)=='#popup:'){setTimeout(function(){if(typeof t_triggerEvent==='function')t_triggerEvent(document.body,'popupShowed');documentBody.classList.add('t-body_popupshowed')},300)}}})}
function t702_escClosePopup(event){if(event.key==='Escape')t702_closePopup(recId)}
popup.addEventListener('tildamodal:show'+popupTooltipHook,function(){document.addEventListener('keydown',t702_escClosePopup)});popup.addEventListener('tildamodal:close'+popupTooltipHook,function(){document.removeEventListener('keydown',t702_escClosePopup)})}
function t702_lockScroll(){var documentBody=document.body;if(!documentBody.classList.contains('t-body_scroll-locked')){var bodyScrollTop=typeof window.pageYOffset!=='undefined'?window.pageYOffset:(document.documentElement||documentBody.parentNode||documentBody).scrollTop;documentBody.classList.add('t-body_scroll-locked');documentBody.style.top='-'+bodyScrollTop+'px';documentBody.setAttribute('data-popup-scrolltop',bodyScrollTop)}}
function t702_unlockScroll(){var documentBody=document.body;if(documentBody.classList.contains('t-body_scroll-locked')){var bodyScrollTop=documentBody.getAttribute('data-popup-scrolltop');documentBody.classList.remove('t-body_scroll-locked');documentBody.style.top=null;documentBody.removeAttribute('data-popup-scrolltop');document.documentElement.scrollTop=parseInt(bodyScrollTop)}}
function t702_showPopup(recId){var rec=document.getElementById('rec'+recId);if(!rec)return;var container=rec.querySelector('.t702');if(!container)return;var windowWidth=window.innerWidth;var screenMin=rec.getAttribute('data-screen-min');var screenMax=rec.getAttribute('data-screen-max');if(screenMin&&windowWidth<parseInt(screenMin,10))return;if(screenMax&&windowWidth>parseInt(screenMax,10))return;var popup=rec.querySelector('.t-popup');var popupTooltipHook=popup.getAttribute('data-tooltip-hook');var ranges=rec.querySelectorAll('.t-range');var documentBody=document.body;if(ranges.length){Array.prototype.forEach.call(ranges,function(range){t702__triggerEvent(range,'popupOpened')})}
t_onFuncLoad('t_popup__showPopup',function(){t_popup__showPopup(popup)});if(typeof t_triggerEvent==='function')t_triggerEvent(document.body,'popupShowed');documentBody.classList.add('t-body_popupshowed');documentBody.classList.add('t702__body_popupshowed');if(/iPhone|iPad|iPod/i.test(navigator.userAgent)&&!window.MSStream&&window.isiOSVersion&&window.isiOSVersion[0]===11){setTimeout(function(){t702_lockScroll()},500)}
t702__lazyLoad();t702__triggerEvent(popup,'tildamodal:show'+popupTooltipHook);t_onFuncLoad('t_forms__calculateInputsWidth',function(){t_forms__calculateInputsWidth(recId)})}
function t702_closePopup(recId){var rec=document.getElementById('rec'+recId);var popup=rec.querySelector('.t-popup');var popupTooltipHook=popup.getAttribute('data-tooltip-hook');var popupAll=document.querySelectorAll('.t-popup_show:not(.t-feed__post-popup):not(.t945__popup)');if(popupAll.length==1){if(typeof t_triggerEvent==='function')t_triggerEvent(document.body,'popupHidden');document.body.classList.remove('t-body_popupshowed')}else{var newPopup=[];for(var i=0;i<popupAll.length;i++){if(popupAll[i].getAttribute('data-tooltip-hook')===popupTooltipHook){popupAll[i].classList.remove('t-popup_show');newPopup.push(popupAll[i])}}
if(newPopup.length===popupAll.length){if(typeof t_triggerEvent==='function')t_triggerEvent(document.body,'popupHidden');document.body.classList.remove('t-body_popupshowed')}}
if(typeof t_triggerEvent==='function')t_triggerEvent(document.body,'popupHidden');popup.classList.remove('t-popup_show');document.body.classList.remove('t702__body_popupshowed');if(/iPhone|iPad|iPod/i.test(navigator.userAgent)&&!window.MSStream&&window.isiOSVersion&&window.isiOSVersion[0]===11){t702_unlockScroll()}
t_onFuncLoad('t_popup__addFocusOnTriggerButton',function(){t_popup__addFocusOnTriggerButton()});setTimeout(function(){var popupHide=document.querySelectorAll('.t-popup:not(.t-popup_show)');for(var i=0;i<popupHide.length;i++){popupHide[i].style.display='none'}},300);t702__triggerEvent(popup,'tildamodal:close'+popupTooltipHook)}
function t702_sendPopupEventToStatistics(popupName){var virtPage='/tilda/popup/';var virtTitle='Popup: ';if(popupName.substring(0,7)=='#popup:'){popupName=popupName.substring(7)}
virtPage+=popupName;virtTitle+=popupName;if(window.Tilda&&typeof Tilda.sendEventToStatistics=='function'){Tilda.sendEventToStatistics(virtPage,virtTitle,'',0)}else{if(ga){if(window.mainTracker!='tilda'){ga('send',{hitType:'pageview',page:virtPage,title:virtTitle})}}
if(window.mainMetrika&&window[window.mainMetrika]){window[window.mainMetrika].hit(virtPage,{title:virtTitle,referer:window.location.href})}}}
function t702_onSuccess(form){t_onFuncLoad('t_forms__onSuccess',function(){t_forms__onSuccess(form)})}
function t702__lazyLoad(){if(window.lazy==='y'||document.getElementById('allrecords').getAttribute('data-tilda-lazy')==='yes'){t_onFuncLoad('t_lazyload_update',function(){t_lazyload_update()})}}
function t702__triggerEvent(el,eventName){var event;if(typeof window.CustomEvent==='function'){event=new CustomEvent(eventName)}else if(document.createEvent){event=document.createEvent('HTMLEvents');event.initEvent(eventName,!0,!1)}else if(document.createEventObject){event=document.createEventObject();event.eventType=eventName}
event.eventName=eventName;if(el.dispatchEvent){el.dispatchEvent(event)}else if(el.fireEvent){el.fireEvent('on'+event.eventType,event)}else if(el[eventName]){el[eventName]()}else if(el['on'+eventName]){el['on'+eventName]()}}
function t746_initPopup(recid){var rec=document.getElementById('rec'+recid);if(!rec)return!1;rec.setAttribute('data-animationappear','off');rec.style.opacity='1';var popup=rec.querySelector('.t-popup');var iframeBody=rec.querySelectorAll('.t746__frame');var hook=popup?popup.getAttribute('data-tooltip-hook'):'';var analitics=popup?popup.getAttribute('data-track-popup'):'';t746_imageHeight(recid);t746_arrowWidth(recid);t746_show(recid);t746_hide(recid);window.addEventListener('resize',t_throttle(function(){t746_arrowWidth(recid)},200));window.addEventListener('orientationchange',function(){setTimeout(function(){t_onFuncLoad('t_slds_updateSlider',function(){t_slds_updateSlider(recid)})},500)});if(hook){t_onFuncLoad('t_popup__addAttributesForAccessibility',function(){t_popup__addAttributesForAccessibility(hook)});if(popup){popup.addEventListener('click',function(e){if(e.target===popup){Array.prototype.forEach.call(iframeBody,function(iframeB){iframeB.innerHTML='';iframeB.style.zIndex=''});t746_closePopup(recid)}})}
var popupClose=rec.querySelector('.t-popup__close');if(popupClose){popupClose.addEventListener('click',function(){Array.prototype.forEach.call(iframeBody,function(iframeB){iframeB.innerHTML='';iframeB.style.zIndex=''});t746_closePopup(recid)})}
document.addEventListener('keydown',function(e){if(e.keyCode===27){Array.prototype.forEach.call(iframeBody,function(iframeB){iframeB.innerHTML='';iframeB.style.zIndex=''});t746_closePopup(recid)}});var allRec=document.getElementById('allrecords');var lazyMode=allRec?allRec.getAttribute('data-tilda-lazy'):'';var isInitSlds=!1;document.addEventListener('click',function(e){var href=e.target.closest('a[href="'+hook+'"]');if(href){e.preventDefault();t746_showPopup(recid);if(isInitSlds){t_onFuncLoad('t_slds_updateSlider',function(){t_slds_updateSlider(recid)})}else{t_onFuncLoad('t_sldsInit',function(){t_sldsInit(recid);isInitSlds=!0})}
t746_arrowWidth(recid);t_onFuncLoad('t_popup__resizePopup',function(){t_popup__resizePopup(recid)});if(window.lazy==='y'||lazyMode==='yes'){t_onFuncLoad('t_lazyload_update',function(){t_lazyload_update()})}
if(analitics&&window.Tilda){var virtTitle=hook;if(virtTitle.substring(0,7)==='#popup:'){virtTitle=virtTitle.substring(7)}
Tilda.sendEventToStatistics(analitics,virtTitle)}}});t_onFuncLoad('t_popup__addClassOnTriggerButton',function(){t_popup__addClassOnTriggerButton(document,hook)})}}
function t746_showPopup(recid){var rec=document.getElementById('rec'+recid);var popup=rec?rec.querySelector('.t-popup'):null;t_onFuncLoad('t_popup__showPopup',function(){t_popup__showPopup(popup)});if(typeof t_triggerEvent==='function')t_triggerEvent(document.body,'popupShowed');document.body.classList.add('t-body_popupshowed')}
function t746_closePopup(recid){var rec=document.getElementById('rec'+recid);var popup=rec?rec.querySelector('.t-popup'):null;var popupHook=popup?popup.getAttribute('data-tooltip-hook'):'';var popupHookLink=document.querySelectorAll('[data-tooltip-hook="'+popupHook+'"]');if(popup&&!popup.classList.contains('t-popup_show')){return}else if(popup){Array.prototype.forEach.call(popupHookLink,function(popup){popup.classList.remove('t-popup_show')})}
if(!document.querySelector('.t-popup_show')){if(typeof t_triggerEvent==='function')t_triggerEvent(document.body,'popupHidden');document.body.classList.remove('t-body_popupshowed')}
var allCovers=rec.querySelectorAll('.t-bgimg');Array.prototype.forEach.call(allCovers,function(cover){if(cover.style.opacity==='0'){cover.style.opacity=''}});t_onFuncLoad('t_popup__addFocusOnTriggerButton',function(){t_popup__addFocusOnTriggerButton()});setTimeout(function(){if(popup)popup.style.display='none'},300)}
function t746_sendPopupEventToStatistics(popupname){var virtPage='/tilda/popup/';var virtTitle='Popup: ';if(popupname.substring(0,7)==='#popup:'){popupname=popupname.substring(7)}
virtPage+=popupname;virtTitle+=popupname;if(ga){if(window.mainTracker!=='tilda'){ga('send',{'hitType':'pageview','page':virtPage,'title':virtTitle,})}}
if(window.mainMetrika>''&&window[window.mainMetrika]){window[window.mainMetrika].hit(virtPage,{title:virtTitle,referer:window.location.href,})}}
function t746_show(recid){var rec=document.getElementById('rec'+recid);if(!rec)return;var playBtns=rec?rec.querySelectorAll('.t746__play'):[];Array.prototype.forEach.call(playBtns,function(play){play.addEventListener('click',function(){var videoType=play.getAttribute('data-slider-video-type');var url;var nextEl;var prevEl;var iframe;switch(videoType){case 'youtube':url=play.getAttribute('data-slider-video-url');nextEl=play.nextElementSibling;prevEl=play.previousElementSibling.previousElementSibling;if(nextEl){iframe=document.createElement('iframe');iframe.classList.add('t746__iframe');iframe.width='100%';iframe.height='100%';iframe.src='https://www.youtube.com/embed/'+url+'?autoplay=1&enablejsapi=1';iframe.frameBorder='0';iframe.setAttribute('webkitallowfullscreen','');iframe.setAttribute('mozallowfullscreen','');iframe.setAttribute('allowfullscreen','');iframe.setAttribute('allow','autoplay');if(nextEl)nextEl.innerHTML='';if(nextEl)nextEl.appendChild(iframe)}
if(prevEl&&prevEl.classList.contains('t-bgimg'))prevEl.style.opacity='0';break;case 'vimeo':url=play.getAttribute('data-slider-video-url');nextEl=play.nextElementSibling;prevEl=play.previousElementSibling.previousElementSibling;var idMatch=/vimeo[^/]*\/(\d+)\/?(\w*)\/?/i.exec(url);var id=idMatch?idMatch[1]:null;var hash=idMatch?'?h='+idMatch[2]:null;if(nextEl){iframe=document.createElement('iframe');iframe.classList.add('t746__iframe');iframe.width='100%';iframe.height='100%';iframe.src='https://player.vimeo.com/video/'+id+hash+'?autoplay=1&amp;api=1';iframe.frameBorder='0';iframe.setAttribute('allowfullscreen','');iframe.setAttribute('allow','autoplay; fullscreen');if(nextEl)nextEl.innerHTML='';if(nextEl)nextEl.appendChild(iframe)}
if(prevEl&&prevEl.classList.contains('t-bgimg'))prevEl.style.opacity='0';break}
if(nextEl)nextEl.style.zIndex='3'})})}
function t746_hide(recid){var rec=document.getElementById('rec'+recid);if(!rec)return;var popupBody=rec?rec.querySelector('.t746__frame'):null;rec.addEventListener('updateSlider',function(){popupBody.innerHTML='';popupBody.style.zIndex=''})}
function t746_imageHeight(recid){var rec=document.getElementById('rec'+recid);if(!rec)return;var images=rec.querySelectorAll('.t746__separator');Array.prototype.forEach.call(images,function(img){var width=img.getAttribute('data-slider-image-width')||0;var height=img.getAttribute('data-slider-image-height')||0;var ratio=height/width;var padding=ratio*100;img.style.paddingBottom=padding+'%'})}
function t746_arrowWidth(recid){var rec=document.getElementById('rec'+recid);if(!rec)return;var arrows=rec?rec.querySelectorAll('.t-slds__arrow_wrapper'):[];var slide=rec?rec.querySelector('.t-slds__wrapper'):null;var slideWidth=slide?slide.offsetWidth:0;var arrowWidth=window.innerWidth-slideWidth;Array.prototype.forEach.call(arrows,function(arrow){var arrowContainer=arrow?arrow.closest('.t-slds__arrow_container'):null;var isArrowNearPic=arrowContainer?arrowContainer.classList.contains('t-slds__arrow-nearpic'):!1;if(window.innerWidth>960&&isArrowNearPic){arrow.style.width=(arrowWidth/2)+'px'}else{arrow.style.width=''}})}
if(!Element.prototype.matches){Element.prototype.matches=Element.prototype.matchesSelector||Element.prototype.msMatchesSelector||Element.prototype.mozMatchesSelector||Element.prototype.webkitMatchesSelector||Element.prototype.oMatchesSelector}
if(!Element.prototype.closest){Element.prototype.closest=function(s){var el=this;while(el&&el.nodeType===1){if(Element.prototype.matches.call(el,s)){return el}
el=el.parentElement||el.parentNode}
return null}}