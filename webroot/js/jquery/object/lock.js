//
// | javascript - jquey - object - lock
//
//
//  Global(s):
//
//      toggled          --{ 0 = False, 1 = True }
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
    toggled: 0,


    // identify
    identify : function() {

        // console - log
        console.log(' I js/jquery/object/lock.js');

        // return
        return true;

    },



    // | function(s)

        load : function() {

            // perform ajax setting state check here

        },

        toggle : function() {

            // toggle - toggled
            if( this.toggled == 0 ){ this.toggled = 1; }
            if( this.toggled == 1 ){ this.toggled = 0; }

            // toggle - header - class - lock
            $( '#header' ).toggleClass('lock');

            // toggle - footer - class - lock
            $( '#footer' ).toggleClass('lock');

            // return
            return true;

        },

        toggle_on : function() {

            // toggle - on
            if( this.toggled == 0 ){ this.toggled = 1; }

            // add - header - class - lock
            $( '#header' ).addClass('lock');

            // add - footer - class - lock
            $( '#footer' ).addClass('lock');

            // return
            return true;

        },

        toggle_off : function() {

            // toggle - off
            if( this.toggled == 1 ){ this.toggled = 0; }

            // remove - header - class - lock
            $( '#header' ).removeClass('lock');

            // remove - footer - class - lock
            $( '#footer' ).removeClass('lock');

            // return
            return true;

        }

    // function(s) |




};
$(document).ready( function() { lock.load(); } );
//
//
// javascript - jquey - object - lock |
//
if (debug) { console.log(' . js/jquery/object/lock.js'); }
