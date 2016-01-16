//
// | js - jquery - listener - element - 'input-form-input-url'
//
//
//
//
//  Require(s):
//
//      js/function/valid/url.js
//
//
//
//




    // | 'input-form-input-url' - change - lock/unlock


        $('#input-form-input-url').bind('input propertychange', function() {

            // debug - console
            if ( debug ){ console.log(' L js/jquery/listener/element/input-form-input-url.js::change'); }

            // var - url
            var iu = $(this).val();

            // reset - form - create
            input.display_reset();

            // ? length - url
            if( iu.length > 0 ){

                // ? valid - url
                if( valid_url(iu) ){

                    // input - display - lock
                    input.display_unlock();

                } else {

                    // input - display - lock
                    input.display_lock();

                }

            }

            // return
            return true;

        });


    // 'input-form-input-url' - change - lock/unlock |



    // | 'input-form-input-url' - key - enter - simlute submit


        // key enter - down [ visual only ]
        $('#input-form-input-url').keydown(function (e){

            // debug - console
            if ( debug ){ console.log(' L js/jquery/listener/element/input-form-input-url.js::keydown'); }

            // key - enter
            if(e.keyCode == 13){

                // ? valid - url
                if(valid_url($("#input-form-input-url").val())) {

                    // input - form - input - submit - add - active
                    $("#input-form-input-submit").addClass("active");

                    // input - form - input - indicator - add - active
                    $("#input-form-input-indicator").addClass("active");

                }
            }

            // return
            return true;

        });


        // key - enter - up [ input - create - url ]
        $('#input-form-input-url').keyup(function (e){

            // debug - console
            if ( debug ){ console.log(' L js/jquery/listener/element/input-form-input-url.js::keyup'); }

            // key - enter
            if(e.keyCode == 13){

                // input - url
                var iu = $("#input-form-input-url").val();

                // ? valid - url
                if( valid_url( iu ) ){

                    // url - create
                    url.create( iu );

                    // flash - display - show - wait 0.5 seconds
                    setTimeout(function() {
                        flash.display_show();
                    }, 0500);

                    // input - display - hide
                    input.display_hide();

                    // input - display - reset
                    input.display_reset();

                    // input - form - input - submit - active
                    $("#input-form-input-submit").removeClass("active");

                    // input - form - input - indicator - add - active
                    $("#input-form-input-indicator").removeClass("active");

                }
            }

            // return
            return true;

        });


        // click [ input - create - url ]
        $('#input-form-input-submit').click(function (){

            // debug - console
            if ( debug ){ console.log(' L js/jquery/listener/element/input-form-input-url.js::click'); }

            // input - url
            var iu = $("#input-form-input-url").val();

            // ? valid - url
            if( valid_url( iu ) ){

                // url - create
                url.create( iu );

                // flash - display - show - wait 0.5 seconds
                setTimeout(function() {
                    flash.display_show();
                }, 0500);

                // input - display - hide
                input.display_hide();

                // input - display - reset
                input.display_reset();

                // input - form - input - submit - active
                $("#input-form-input-submit").addClass("active");

                // input - form - input - indicator - add - active
                $("#input-form-input-indicator").addClass("active");

            }

            // return
            return true;

        });


    // 'input-form-input-url' - key - enter - simlute submit |




//
// js - jquery - listener - element - 'input-form-input-url' |
//
if( debug ){ console.log(' . js/jquery/listener/element/input-form-input-url.js'); }
