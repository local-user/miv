//
// | js - jquery - listener - element - 'input-form-input-url'
//
console.log(' . js/jquery/listener/element/input-form-input-url.js');
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

            // var - url
            var url = $(this).val();

            // reset - form - create
            input.display_reset();

            // ? valid - url
            if ( valid_url(url) ) {

                // input - display - lock
                input.display_unlock();

            } else {

                // input - display - lock
                input.display_lock();

            }

            // return
            return true;

        });


    // 'input-form-input-url' - change - lock/unlock |



    // | 'input-form-input-url' - key - enter - simlute submit


        // key enter - down [ visual only ]
        $('#input-form-input-url').keydown(function (e){

            // key - enter
            if(e.keyCode == 13){

                // ? valid - url
                if(valid_url($("#input-form-input-url").val())) {

                    // input - form - input - submit - add - active
                    $("#input-form-input-submit").addClass("active");

                }
            }

            // return
            return true;

        });


        // key - enter - up [ input - create - url ]
        $('#input-form-input-url').keyup(function (e){

            // key - enter
            if(e.keyCode == 13){

                // ? valid - url
                if(valid_url($("#input-form-input-url").val())) {

                    // input - form - input - submit - active
                    $("#input-form-input-submit").removeClass("active");

                    // input - create - url
                    //url.create();

                    // input - display - hide
                    input.display_hide();

                    // flash - display - show
                    flash.display_show();

                }
            }

            // return
            return true;

        });


        // click [ input - create - url ]
        $('#input-form-input-submit').click(function (){

            // ? valid - url
            if(valid_url($("#input-form-input-url").val())) {

                // input - form - input - submit - active
                $("#input-form-input-submit").removeClass("active");

                // url - create
                //url.create();

                // input - display - hide
                input.display_hide();

                // flash - display - show
                flash.display_show();

            }

            // return
            return true;

        });


    // 'input-form-input-url' - key - enter - simlute submit |




//
// js - jquery - listener - element - 'input-form-input-url' |
//
