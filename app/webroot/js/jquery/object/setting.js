//
// | javascript - jquey - object - setting
//
//
//
//
//  Function(s)
//
//      -- create( setting )
//
//
//
//
var setting = {




    // global(s)
    identity:       'js/jquery/object/setting.js',
    visibility:     0,


    // identity
    identify : function() {

        // console - log - identity
        console.log(' I ' + this.identity);

        // return
        return true;

    },


    // | function(s)

        display : function() {

            // display - toggle
            if ( this.visibility === 0 ){

                // display - show
                this.display_show();

                // update - visibility
                this.visibility = 1;

            } else {

                // display - hide
                this.display_hide();

                // update - visibility
                this.visibility = 0;

            }

            // return
            return true;

        },

        display_hide : function() {
            console.log(" display_hide ");
        },

        display_show : function() {
            console.log(" display_show ");
        },

        upload_favicon : function() {
            console.log("upload_favicon under development");
        },

        upload_welcome : function() {
            console.log("upload_welcome under development");
        },

    // function(s) |




}
//
//
//
//
// js - jquery - object - setting |
//
if( debug ){ console.log(' . js/jquery/object/setting.js'); }
