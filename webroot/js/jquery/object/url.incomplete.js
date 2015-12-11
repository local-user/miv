//
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




//
//
//  reference @ http://stackoverflow.com/questions/1960240/jquery-ajax-submit-form
//
//
