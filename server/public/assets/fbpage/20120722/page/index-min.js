KISSY.add("utils/build-page",function(a){var b=a.all;return{init:function(){var c=b(".fb-build-page");c.on("click",function(c){c.preventDefault();var d=b(c.target),e=d.siblings(".status"),f=d.siblings("input");e.html("building...");var g=f.val();a.ajax({url:d.attr("href"),data:{timestamp:g},dataType:"json",success:function(a){if(a.err){var b=a.err;e.html("Error:"+b.message);return}e.html("success!"),setTimeout(function(){e.html("")},2e3)}})})}}}),KISSY.add("utils/calendar-init",function(a,b,c){var d=a.all;return{init:function(e){var f=new c.Popup;f.render();var g=(new b(f.get("contentEl"))).on("select",function(b){this.targetInput&&d(this.targetInput).val(a.Date.format(b.date,"yyyymmdd")),f.hide()});d(e.triggers).on("focus",function(a){f.show();var b=d(a.target);f.align(b,["bl","tl"]),g.targetInput=b}),d("body").on("mousedown",function(a){f.get("contentEl").contains(a.target)||f.hide()})}}},{requires:["calendar","overlay","calendar/assets/base.css"]}),KISSY.add("page/index",function(a,b,c){var d=a.all;a.ready(function(){b.init(),c.init({triggers:"input.timestamp-input"})})},{requires:["utils/build-page","utils/calendar-init"]}); 