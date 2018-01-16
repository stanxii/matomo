$(function () {



  $('.icon-arrowdown').click( function(event) {
   Mousetrap.trigger('z');
   $(this).toggleClass('icon-arrowup').toggleClass('icon-arrowdown');
  });


/*
  $('.icon-arrowup').click( function(event) {
   Mousetrap.trigger('z');
   $('.icon-arrowup').addClass('icon-arrowdown').removeClass('icon-arrowup')
  });
*/


    angular.element(document).injector().invoke(handleZenMode);

    function handleZenMode ($rootElement, $cookies) {
        var zenMode = !!parseInt($cookies.get('zenMode'), 10);

        function updateZenMode() {
            if (zenMode) {
                $('body').addClass('zenMode');
            } else {
                $('body').removeClass('zenMode');
            }
        }

        piwikHelper.registerShortcut('z', _pk_translate('CoreHome_ShortcutZenMode'), function (event) {
            if (event.altKey) {
                return;
            }
            zenMode = !zenMode;
            $cookies.put('zenMode', zenMode ? '1' : '0');
            updateZenMode();
        });

        updateZenMode();
    }
});
