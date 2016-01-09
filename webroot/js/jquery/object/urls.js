//
// | javascript - jquey - object - urls
//
//
//
//
//  Function(s)
//
//      -- refresh_count()
//
//
//
//
var urls = {




    // global(s)
    identity:       'js/jquery/object/urls.js',


    // identity
    identify : function() {

        // console - log
        console.log(' I ' + this.identity);

        // return
        return true;

    },


    // | function(s)

        refresh : function(){

            // var  - http
            var method = "POST";
            var action = "api.php";

            // ajax - http
            $.ajax({
                        type:       method,
                        url:        action,
                        beforeSend: function (request) {
                            request.setRequestHeader("Miv-Object", "urls");
                            request.setRequestHeader("Miv-Method", "read_list");
                        },
                        success:    function(data) {

                            // debug
                            if( debug ){ console.log(data); }

                            // urls
                            for( id in data['urls'] ){
                                $("#urls").append("<div id='url-" + id + "' class='url color-alphabet-b'>[" + id + "]</div>");
                                url.refresh(id);
                            }

                            // dev
                            console.log('Under Development.');

                        },
                        context:    this,
                        error:      function() {

                            //  error - display
                            error.display_show('Unable to retrieve URLs.');

                        }
            });

            // return
            return true;

        },

        refresh_count : function(){

            // var  - http
            var method = "POST";
            var action = "api.php";

            // ajax - http
            $.ajax({
                        type:       method,
                        url:        action,
                        beforeSend: function (request) {
                            request.setRequestHeader("Miv-Object", "urls");
                            request.setRequestHeader("Miv-Method", "read_count");
                        },
                        success:    function(data) {

                            // debug
                            if( debug ){ console.log(data); }

                            // urls - update - html - length
                            $( ".urls-count" ).html( data["urls"]["count"] );

                        },
                        context:    this,
                        error:      function() {

                            //  error - display
                            error.display_show('Unable to retrieve URLs count.');

                        }
            });

            // return
            return true;

        },

    // function(s) |




}
//
//
// js - jquery - toggle - urls |
//
if( debug ){ console.log(' . js/jquery/object/urls.js'); }
