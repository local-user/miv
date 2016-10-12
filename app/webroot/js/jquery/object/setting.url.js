//
// | javascript - jquey - object - setting - url
//
//
var setting_url = {




    /** load **/
    load : function() {
        this.api_get();
    },




    /** | api **/

        // | get

            api_get : function() {
                this.api_get_url_height();
                this.api_get_url_width();
            },

            api_get_url_height : function() {
                $.ajax({
                    type:       "POST",
                    url:        "api.php?object=config&method=read",
                    data:       {
                                    key: 'url_height'
                                },
                    success:    function(data) {
                                    if( data['config']['url_height'] != undefined ){
                                        height = data['config']['url_height'];
                                    } else {
                                        height = "100";
                                    }
                                    $("#setting-url-height input").val( height );
                                    setTimeout( function() {
                                        $(".url").css("height", height + "%");
                                    }, 1000);
                                },
                    error:      function() {}
                });
            },

            api_get_url_width : function() {
                $.ajax({
                    type:       "POST",
                    url:        "api.php?object=config&method=read",
                    data:       {
                                    key: 'url_width'
                                },
                    success:    function(data) {
                                    if( data['config']['url_width'] != undefined ){
                                        width = data['config']['url_width'];
                                    } else {
                                        width = "99";
                                    }
                                    $("#setting-url-width input").val( width );
                                    setTimeout( function() {
                                        $(".url").css("width", width + "%");
                                    }, 1000);
                                },
                    error:      function() {}
                });
            },

        // get |

        // | usert

            api_usert : function() {
                this.api_usert_url_height();
                this.api_usert_url_width();
            },

            api_usert_url_height : function() {
                $.ajax({
                    type:       "POST",
                    url:        "api.php?object=config&method=usert",
                    data:       {
                                    key:    'url_height',
                                    value:  $("#setting-url-height input").val()
                                },
                    success:    function(data) {
                                    height = $("#setting-url-height input").val() + "%";
                                    $(".url").css("height", height);
                                },
                    error:      function() {
                                    error.display_show('Unable to update or insert config.');
                                }
                });
            },

            api_usert_url_width : function() {
                $.ajax({
                    type:       "POST",
                    url:        "api.php?object=config&method=usert",
                    data:       {
                                    key:    'url_width',
                                    value:  $("#setting-url-width input").val()
                                },
                    success:    function(data) {
                                    width = $("#setting-url-width input").val() + "%";
                                    $(".url").css("max-width", width);
                                },
                    error:      function() {
                                    error.display_show('Unable to update or insert config.');
                                }
                });
            }

        // usert |

    /** api | **/




};
//
//
// javascript - jquey - object - turl |
//
if (debug) { console.log(' . js/jquery/object/setting.url.js'); }
