//
// | javascript - jquey - object - turl
//
//
//  Global(s):
//
//      turled          --{ 0 = False, 1 = True }
//
//
//  Function(s):
//
//      toggle
//
//
//
var turl = {




    // global(s)
    turled: 0,


    // identify
    identify : function() {

        // console - log
        console.log(' I js/jquery/object/turl.js');

        // return
        return true;

    },



    // | function(s)

        load : function() {

            // this
            var thi = this;

            // ajax
            $.ajax({

                        type:           "POST",
                        url:            "api.php?object=config&method=read",
                        data:           {
                                            key:   "flag_turled"
                                        },
                        success:        function(data) {
                                            if( data['config']['flag_turled'] == "true" ){
                                                thi.toggle_on();
                                            } else {
                                                thi.toggle_off();
                                            }
                                        },
                        error:          function() {}
            });



        },

        toggle : function() {

            // toggle - unturled -> turled
            if( this.turled == 0 ){
                return this.toggle_on();
            }

            // toggle - turled -> unturled
            if( this.turled == 1 ){
                return this.toggle_off();
            }

            // return
            return false;

        },

        toggle_on : function() {

            // toggle - on
            this.turled = 1;

            // urls - display - turl
            $( "#urls .url .turl" ).removeClass("hidden");

            // usert - key_flagged - true
            this.usert("flag_turled", "true");

            // return
            return true;

        },

        toggle_off : function() {

            // toggle - off
            this.turled = 0;

            // urls - display - turl
            $( "#urls .url .turl" ).addClass("hidden");

            // usert - key_flagged - false
            this.usert("flag_turled", "false");

            // return
            return true;

        },

        usert : function(key, value) {

            // ajax
            $.ajax({

                        type:           "POST",
                        url:            "api.php?object=config&method=usert",
                        data:           {
                                            key:    key,
                                            value:  value
                                        },
                        success:        function(data) {
                                        },
                        error:          function() {
                                           error.display_show('Unable to update or insert config.');
                                        }
            });

        }

    // function(s) |




};
//
//
// javascript - jquey - object - turl |
//
if (debug) { console.log(' . js/jquery/object/turl.js'); }
