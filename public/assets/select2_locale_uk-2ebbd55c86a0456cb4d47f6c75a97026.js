!function(t){"use strict";function n(t,n){return t+" "+n+(5>t%10&&t%10>0&&(5>t%100||t%100>19)?t%10>1?"\u0438":"":"\u0456\u0432")}t.extend(t.fn.select2.defaults,{formatMatches:function(t){return n(t,"\u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442")+" \u0437\u043d\u0430\u0439\u0434\u0435\u043d\u043e, \u0432\u0438\u043a\u043e\u0440\u0438\u0441\u0442\u043e\u0432\u0443\u0439\u0442\u0435 \u043a\u043b\u0430\u0432\u0456\u0448\u0456 \u0437\u0456 \u0441\u0442\u0440\u0456\u043b\u043a\u0430\u043c\u0438 \u0432\u0432\u0435\u0440\u0445 \u0442\u0430 \u0432\u043d\u0438\u0437 \u0434\u043b\u044f \u043d\u0430\u0432\u0456\u0433\u0430\u0446\u0456\u0457."},formatNoMatches:function(){return"\u041d\u0456\u0447\u043e\u0433\u043e \u043d\u0435 \u0437\u043d\u0430\u0439\u0434\u0435\u043d\u043e"},formatInputTooShort:function(t,o){return"\u0412\u0432\u0435\u0434\u0456\u0442\u044c \u0431\u0443\u043b\u044c \u043b\u0430\u0441\u043a\u0430 \u0449\u0435 "+n(o-t.length,"\u0441\u0438\u043c\u0432\u043e\u043b")},formatInputTooLong:function(t,o){return"\u0412\u0432\u0435\u0434\u0456\u0442\u044c \u0431\u0443\u043b\u044c \u043b\u0430\u0441\u043a\u0430 \u043d\u0430 "+n(t.length-o,"\u0441\u0438\u043c\u0432\u043e\u043b")+" \u043c\u0435\u043d\u0448\u0435"},formatSelectionTooBig:function(t){return"\u0412\u0438 \u043c\u043e\u0436\u0435\u0442\u0435 \u0432\u0438\u0431\u0440\u0430\u0442\u0438 \u043b\u0438\u0448\u0435 "+n(t,"\u0435\u043b\u0435\u043c\u0435\u043d\u0442")},formatLoadMore:function(){return"\u0417\u0430\u0432\u0430\u043d\u0442\u0430\u0436\u0435\u043d\u043d\u044f \u0434\u0430\u043d\u0438\u0445\u2026"},formatSearching:function(){return"\u041f\u043e\u0448\u0443\u043a\u2026"}})}(jQuery);