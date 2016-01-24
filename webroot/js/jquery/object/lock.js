//
// | javascript - jquey - object - lock
//
//
//  Global(s):
//
//      locked          --{ 0 = False, 1 = True }
//
//
//  Function(s):
//
//      toggle
//
//
//
var lock = {




    // global(s)
    locked: 0,


    // identify
    identify : function() {

        // console - log
        console.log(' I js/jquery/object/lock.js');

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
                                            key:   "flag_locked"
                                        },
                        success:        function(data) {
                                            if( data['config']['flag_locked'] == "true" ){
                                                thi.toggle_on();
                                            } else {
                                                thi.toggle_off();
                                            }
                                        },
                        error:          function() {}
            });



        },

        toggle : function() {

            // toggle - unlocked -> locked
            if( this.locked == 0 ){
                return this.toggle_on();
            }

            // toggle - locked -> unlocked
            if( this.locked == 1 ){
                return this.toggle_off();
            }

            // return
            return false;

        },

        toggle_on : function() {

            // toggle - on
            this.locked = 1;

            // add - header - class - lock
            $( '#header' ).addClass('lock');

            // add - footer - class - lock
            $( '#footer' ).addClass('lock');

            // usert - key_flagged - true
            this.usert("flag_locked", "true");

            // return
            return true;

        },

        toggle_off : function() {

            // toggle - off
            this.locked = 0;

            // remove - header - class - lock
            $( '#header' ).removeClass('lock');

            // remove - footer - class - lock
            $( '#footer' ).removeClass('lock');

            // usert - key_flagged - false
            this.usert("flag_locked", "false");

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
                                            console.log(data);
                                        },
                        error:          function() {
                                           error.display_show('Unable to update or insert config.');
                                        }
            });

        }

    // function(s) |




};
$(document).ready( function() { lock.load(); } );
//
//
// javascript - jquey - object - lock |
//
if (debug) { console.log(' . js/jquery/object/lock.js'); }
