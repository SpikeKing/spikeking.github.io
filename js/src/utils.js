NexT.utils=NexT.$u={wrapImageWithFancyBox:function(){$(".content img").not(".group-picture img").each(function(){var e=$(this),t=e.attr("title"),i=e.parent("a");i.size()<1&&(i=e.wrap('<a href="'+this.getAttribute("src")+'"></a>').parent("a")),i.addClass("fancybox"),i.attr("rel","group"),t&&(i.append('<p class="image-caption">'+t+"</p>"),i.attr("title",t))}),$(".fancybox").fancybox({helpers:{overlay:{locked:!1}}})},lazyLoadPostsImages:function(){$("#posts").find("img").lazyload({placeholder:"/images/loading.gif",effect:"fadeIn"})},registerBackToTop:function(){var e=50;$top=$(".back-to-top"),$(window).on("scroll",function(){$top.toggleClass("back-to-top-on",document.body.scrollTop>e)}),$top.on("click",function(){$("body").velocity("scroll")})},embeddedVideoTransformer:function(){var e=$("iframe"),t=["www.youtube.com","player.vimeo.com","player.youku.com","music.163.com","www.tudou.com"],i=new RegExp(t.join("|"));e.each(function(){var e=this,t=$(this);if(this.src.search(i)>0){var o=t.height()/t.width()*100;this.src.search("music.163.com")>0&&(o+=10),t.width("100%").height("100%").css({position:"absolute",top:"0",left:"0"});var n=document.createElement("div");n.className="fluid-vids",n.style.width="100%",n.style.position="relative",n.style.paddingTop=o+"%";var a=e.parentNode;a.insertBefore(n,e),n.appendChild(e)}})},addActiveClassToMenuItem:function(){var e=window.location.pathname;e="/"===e?e:e.substring(0,e.length-1),$('.menu-item a[href="'+e+'"]').parent().addClass("menu-item-active")},hasMobileUA:function(){var e=window.navigator,t=e.userAgent,i=/iPad|iPhone|Android|Opera Mini|BlackBerry|webOS|UCWEB|Blazer|PSP|IEMobile|Symbian/g;return i.test(t)},isTablet:function(){return window.screen.width<992&&window.screen.width>767&&this.hasMobileUA()},isMobile:function(){return window.screen.width<767&&this.hasMobileUA()},isDesktop:function(){return!this.isTablet()&&!this.isMobile()},escapeSelector:function(e){return e.replace(/[!"$%&'()*+,.\/:;<=>?@[\\\]^`{|}~]/g,"\\$&")},displaySidebar:function(){this.isDesktop()&&$(".sidebar-toggle").trigger("click")},isMist:function(){return"Mist"===CONFIG.scheme},isPisces:function(){return"Pisces"===CONFIG.scheme}};