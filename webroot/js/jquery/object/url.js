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
            $("#urls").append("<a id='url-" + id + "' class='url animate-appear'></a>");

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
