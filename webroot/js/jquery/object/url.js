//
// | javascript - jquey - object - url
//
//
//
//
//  Function(s)
//
//      -- create( url )
//
//
//
//
var url = {




    // global(s)
    identity:       'js/jquery/object/url.js',


    // identity
    identify : function() {

        // console - log - identity
        console.log(' I ' + this.identity);

        // return
        return true;

    },


    // | function(s)

        append : function( id ){

            // append - urls - url[ id ]
            $("#urls").append("<div id='url-" + id + "' class='url animate-appear'></div>");

            // append - urls - url[ id ] - edit
            $("#url-" + id).append("<div class='edit hidden color-edit-text'></div>");

            // append - urls - url[ id ] - edit - left / right
            $("#url-" + id + " .edit").append("<div class='left'></div>");
            $("#url-" + id + " .edit").append("<div class='right'></div>");

            // append - urls - url[ id ] - edit - left
            $("#url-" + id + " .edit .left").append("<span class='icon fa fa-chevron-left color-edit-text-hover'></span>");
            $("#url-" + id + " .edit .left").append("<span class='icon fa fa-chevron-right color-edit-text-hover'></span>");

            // append - urls - url[ id ] - edit - right
            $("#url-" + id + " .edit .right").append("<span class='icon fa fa-close color-edit-text-hover'></span>");


            // refresh
            url.refresh(id);

            // return
            return true;

        },

        create : function( url ){

            // this
            var thi = this;

            // ajax
            $.ajax({

                        type:           "POST",
                        url:            "api.php",
                        data:           $("#input-form").serialize(),

                        beforeSend:     function(request) {
                                            request.setRequestHeader("Miv-Object", "url");
                                            request.setRequestHeader("Miv-Method", "create");
                                        },
                        success:        function(data) {
                                            if( debug ){ console.log(data); }
                                            thi.append( data['url']['id'] );
                                            $("html, body").animate({ scrollTop: $(document).height() }, 1500);
                                            msg.create( 200, 'Created URL[' + data['url']['id'] + ']' );
                                        },
                        error:          function() {
                                            msg.create( 400, 'Create URL' );
                                        }
            });

            // return
            return true;

        },

        refresh : function( id ) {

            // ajax
            $.ajax({

                        type:           "POST",
                        url:            "api.php",

                        beforeSend:     function(request) {
                                            request.setRequestHeader("Miv-Object", "url");
                                            request.setRequestHeader("Miv-Method", "read");
                                        },
                        data:           {
                                            id:   id
                                        },
                        success:        function(data) {
                                            if( debug ){ console.log(data); }
                                            $("#url-" + id).addClass("color-alphabet-"    + data['url']['letter']);
                                            $("#url-" + id).append("<div class='letter'>" + data['url']['letter'] + "</div>");
                                            $("#url-" + id).append("<div class='title'>"  + data['url']['url']    + "</div>");
                                            $("#url-" + id).attr('href', data['url']['url']);
                                        },
                        error:          function() {
                                            msg.create( 400, 'Read URL[' + id + ']' );
                                        }
            });

            // return
            return true;

        }

    // function(s) |




}
//
//
//
//
// js - jquery - toggle - url |
//
if( debug ){ console.log(' . js/jquery/object/url.js'); }
