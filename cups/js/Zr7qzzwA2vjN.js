function t396_initVideo(e){var t,o,a,i,r,n,d=e.querySelector(".tn-atom__videoiframe"),s=e.querySelector(".tn-atom");s&&d&&!d.querySelector("iframe, video")&&(s.style.backgroundColor="#000",o=document.getElementById("allrecords"),t={recid:(t=e?e.closest(".r"):null)?t.id.replace("rec",""):"",elementID:e.getAttribute("data-elem-id")||"",hasCover:"y"===s.getAttribute("data-atom-video-has-cover"),hasAutoplay:"y"===t396_elem__getFieldValue(e,"autoplay"),hasInfo:"y"===t396_elem__getFieldValue(e,"showinfo"),hasLoop:"y"===t396_elem__getFieldValue(e,"loop"),isMuted:"y"===t396_elem__getFieldValue(e,"mute"),startSec:t396_elem__getFieldValue(e,"startsec")||"",endSec:t396_elem__getFieldValue(e,"endsec")||"",vimeoHash:d.getAttribute("data-vimeohash")||"",hiddenControls:"hidden"===d.getAttribute("data-video-controls"),isCoverFit:"cover"===d.getAttribute("data-video-object-fit"),isEditMode:!!o&&"edit"===o.getAttribute("data-tilda-mode"),isLazy:"y"===window.lazy},e="",document.createElement("script").textContent='lazyload_iframe = new LazyLoad({elements_selector: ".t-iframe"});',o=d.getAttribute("data-youtubeid"),r=d.getAttribute("data-vimeoid"),a=d.getAttribute("data-mp4video"),o||r?(e=t396_video__generateIframeSrc(o||r,t,Boolean(o)),i=t396_video__createIframe(e,t,Boolean(o)),o&&!t.isLazy&&i.addEventListener("load",function(){s.style.backgroundColor=""})):a&&(t.hasCover&&(t.isCoverFit=!0),i=t396_video__createVideoHTML(a,t),r="display: flex; align-items: center;height:100%;",t.isCoverFit&&(r+="position: relative;"),d.style.cssText=r),t.hasCover?s.addEventListener("click",function(){var e;s.querySelector("iframe, video")||(i&&d.appendChild(i),s.style.backgroundImage="none",(e=s.querySelector(".tn-atom__video-play-link"))&&(e.style.display="none"),a&&i&&!s.processVideo&&(i.play(),s.processVideo=!0))}):(i&&d.appendChild(i),o&&t.isLazy&&t396_video__processYoutubeIframeBgOnLoad(s,i),a&&(n=d.querySelector("video"),t396_video__setLoaderForHTMLVideo(s,n,t.isCoverFit),t396_video__lazyLoadProcessHTMLVideo(n,t),n&&!t.isEditMode&&t.hiddenControls&&!t.hasAutoplay&&n.addEventListener("click",function(){n.readyState<2||(n.paused?n.play():n.pause())}))))}function t396_video__processYoutubeIframeBgOnLoad(t,o){var a;o&&t&&"MutationObserver"in window&&(a=new MutationObserver(function(e){e.forEach(function(e){"attributes"===e.type&&"src"===e.attributeName&&e.target.src&&o.addEventListener("load",function(){t.style.backgroundColor="",a.disconnect()})})})).observe(o,{attributes:!0})}function t396_video__generateIframeSrc(e,t,o){var a=o?"https://www.youtube.com/embed/":"//player.vimeo.com/video/";return a+=e+"?",!o&&t.vimeoHash&&(t.vimeoHash=t.vimeoHash.trim(),a+=t.vimeoHash?"h="+t.vimeoHash+"&":""),o||(a+="color=ffffff&badge=0"),t.hasInfo&&o&&(a+="&showinfo=1"),t.hasInfo&&!o&&(a+="&title=1&byline=1&portrait=1"),t.hasInfo||o||(a+="&title=0&byline=0&portrait=0"),t.hasLoop&&(a+="&loop=1"),t.hasLoop&&o&&(a+="&playlist="+e),o&&0<t.startSec&&(a+="&start="+t.startSec),o&&0<t.endSec&&(a+="&end="+t.endSec),t.isMuted&&(a+=o?"&mute=1":"&muted=1"),(t.hasCover||t.hasAutoplay&&!t.isEditMode)&&(a+="&autoplay=1",t.hasCover&&o&&(a+="&amp;rel=0")),a+=o?"&enablejsapi=1":"&api=1"}function t396_video__createIframe(e,t,o){var a=document.createElement("iframe"),o=o?"youtube":"vimeo";return o+="-iframe-"+t.recid+"-"+t.elementID,a.id=o,a.width="100%",a.height="100%",a.frameBorder="0",a.allowFullscreen=!0,!t.hasCover&&t.isLazy?(a.classList.add("t-iframe"),a.setAttribute("data-original",e)):a.src=e,t.hasCover&&(a.allow="autoplay"),a}function t396_video__createVideoHTML(e,t){var o=window.t396__isMobile&&window.isSafari&&!t.hasCover?"#t=0.001":"",e=e?'<source src="'+e+o+'" type="video/mp4">':"",o=document.createElement("video");return o.style.cssText="width: 100%;"+(t.hasCover?"":"display:none;")+(t.isCoverFit?"height: 100%; object-fit: cover; position: absolute;":"")+(t.hiddenControls&&!t.hasAutoplay?"cursor: pointer;":""),o.id="html-video-"+t.recid+"-"+t.elementID,o.innerHTML=e,t.hiddenControls||(o.controls=!0),!t.isEditMode&&t.hasAutoplay&&(o.autoplay=!0),t.isMuted&&(o.muted=!0),o.playsInline=!0,t.hasLoop&&(o.loop=!0),o}function t396_video__lazyLoadProcessHTMLVideo(e,t){var o;t.hasAutoplay&&!t.isEditMode&&e&&"IntersectionObserver"in window&&(o=new IntersectionObserver(function(e){e.forEach(function(e){var t=e.target;e.isIntersecting?(2<=t.readyState&&t.play(),o.unobserve(t)):t.pause()})})).observe(e)}function t396_video__setLoaderForHTMLVideo(e,t,o){var a;t&&(a=/iPhone|iPad|iPod/i.test(navigator.userAgent)||"ontouchend"in document&&/Macintosh/.test(navigator.userAgent),e.style.cssText+='background-image: url("https://tilda.ws/img/spinner-white.gif");background-repeat: no-repeat; background-position: center;',t.addEventListener(a?"loadedmetadata":"canplay",function(){e.style.backgroundImage="",o&&(e.style.backgroundColor=""),t.style.display="block"}))}