//| js - jquery - ajax - create
//
//
//
//
//  Function(s)
//
//      -- ajax_create
//
//
//  Trigger(s)
//
//      -- key - enter - simluate - form - submit - up
//      -- key - enter - simluate - form - submit - down
//
//
//  Require(s)
//      -- js/function-valid-url.js
//
//
//
//




    //| function(s)

        function ajax_create() {

            // var - http
            var method = "POST";
            var action = "api.php";
            var data   = $("#create-form").serialize();

            // ajax
            $.ajax({
                        type:       method,
                        url:        action,
                        data:       data,
                        success:    function(data) {
                            display_flash_head(200, 'The AJAX request succeeded');
                        },
                        error:      function() {
                            display_flash_head(400, 'The AJAX request failed');
                        }
            });

            // hide - create
            hide_create();

            // return
            return true;

        };

    // function(s) |


    //| trigger(s)

        // key - enter - simulate form submit

            // down
            $('#create-form-input-url').keydown(function (e){
                if(e.keyCode == 13){
                    if(valid_url($("#create-form-input-url").val())) {
                        $("#create-form-input-submit").addClass("active");
                    }
                }
            });

            // up
            $('#create-form-input-url').keyup(function (e){
                if(e.keyCode == 13){
                    if(valid_url($("#create-form-input-url").val())) {
                        $("#create-form-input-submit").removeClass("active");
                        ajax_create();
                    }
                }
            });

        // key - enter - simulate form submit

        // click - submit
        $('#create-form-input-submit').click(function (){
            if(valid_url($("#create-form-input-url").val())) {
                $("#create-form-input-submit").removeClass("active");
                ajax_create();
            }
        });

    //| trigger(s)




//
//
//  reference @ http://stackoverflow.com/questions/1960240/jquery-ajax-submit-form
//
// js - jquery - ajax - create
