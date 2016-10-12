//
// | javascript - jquey - object - setting - container
//
//
var setting_container = {




    /** load **/
    load : function() {
        this.api_get();
    },




    /** | api **/

        // | get

            api_get : function() {
                this.api_get_container_height();
                this.api_get_container_width();
            },

            api_get_container_height : function() {
                $.ajax({
                    type:       "POST",
                    url:        "api.php?object=config&method=read",
                    data:       {
                                    key: 'container_height'
                                },
                    success:    function(data) {
                                    if( data['config']['container_height'] != undefined ){
                                        height = data['config']['container_height'];
                                    } else {
                                        height = "100";
                                    }
                                    $("#setting-container-height input").val(height);
                                    setTimeout( function() {
                                        $("body").css("height", height + "%");
                                    }, 1000);
                                },
                    error:      function() {
                                },
                });
            },

            api_get_container_width : function() {
                $.ajax({
                    type:       "POST",
                    url:        "api.php?object=config&method=read",
                    data:       {
                                    key: 'container_width'
                                },
                    success:    function(data) {
                                    if( data['config']['container_width'] != undefined ){
                                        width = data['config']['container_width'];
                                    } else {
                                        width = "100";
                                    }
                                    $("#setting-container-width input").val(width);
                                    setTimeout( function() {
                                        $("body").css("width", width + "%");
                                    }, 1000);
                                },
                    error:      function() {}
                });
            },

        // get |

        // | usert

            api_usert : function() {
                this.api_usert_container_height();
                this.api_usert_container_width();
            },

            api_usert_container_height : function() {
                $.ajax({
                    type:       "POST",
                    url:        "api.php?object=config&method=usert",
                    data:       {
                                    key:    'container_height',
                                    value:  $("#setting-container-height input").val()
                                },
                    success:    function(data) {
                                    height = $("#setting-container-height input").val() + "%";
                                    $("body").css("height", height);
                                },
                    error:      function() {
                                    error.display_show('Unable to update or insert config.');
                                }
                });
            },

            api_usert_container_width : function() {
                $.ajax({
                    type:       "POST",
                    url:        "api.php?object=config&method=usert",
                    data:       {
                                    key:    'container_width',
                                    value:  $("#setting-container-width input").val()
                                },
                    success:    function(data) {
                                    width = $("#setting-container-width input").val() + "%";
                                    $("body").css("max-width", width);
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
if (debug) { console.log(' . js/jquery/object/setting.container.js'); }
