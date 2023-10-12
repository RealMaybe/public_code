(function($) {
    $.fn.typewriter = function() {
        this.each(function() {
            var $ele = $(this),
                str = $ele.html(),
                progress = 0;
            $ele.html('');
            var timer = setInterval(function() {
                var current = str.substr(progress, 1);
                if (current == '<') {
                    progress = str.indexOf('>', progress) + 1;
                } else {
                    progress++;
                }
                $ele.html(str.substring(0, progress) + (progress & 1 ? '_' : ''));
                if (progress >= str.length) {
                    clearInterval(timer);
                }
            }, 150);
        });
        return this;
    };
})(jQuery);

/* 调用示例 传入值为打字速度，单位为ms */
$("#pic").show().typewriter(50);