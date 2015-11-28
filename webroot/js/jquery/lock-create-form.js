//| js - jquery - validate - create - form
//
// requires @ function-valid-url.js
//




    // function - create - form - lock
    function lock_create_form_lock() {

        // remove - class(s)
        $( '#create-form-input-indicator'   ).addClass('s400');
        $( '#create-form-input-url'         ).addClass('color-create-text-invalid');

        // return
        return true;

    }

    // function - create - form - reset
    function lock_create_form_reset() {

        // remove - class(s)
        $( '#create-form-input-indicator' ).removeClass('s200');
        $( '#create-form-input-indicator' ).removeClass('s400');
        $( '#create-form-input-submit'    ).removeClass('s2');
        $( '#create-form-input-url'       ).removeClass('s2');
        $( '#create-form-input-url'       ).removeClass('color-create-text-invalid');
        $( '#create-form-input-url'       ).removeClass('color-create-text-valid');

        // return
        return true;

    }

    // function - create - form - unlock
    function lock_create_form_unlock() {

        // add - class(s)
        $( '#create-form-input-indicator'   ).addClass('s200');
        $( '#create-form-input-submit'      ).addClass('s2');
        $( '#create-form-input-url'         ).addClass('s2');
        $( '#create-form-input-url'         ).addClass('color-create-text-valid');

        // return
        return true;

    }


    // key - change - lock/unlock - create - form
    $('#create-form-input-url').bind('input propertychange', function() {

        // var - url
        var url = $(this).val();

        // reset - form - create
        lock_create_form_reset();

        // valid - url - lock - reset - unlock
        if ( valid_url(url) ) {
            lock_create_form_unlock();
        } else {
            lock_create_form_lock();
        }

        // return
        return true;

    });




//
// reference @ http://stackoverflow.com/questions/2723140/validating-url-with-jquery-without-the-validate-plugin
// reference @ http://stackoverflow.com/questions/9205164/validate-html-text-input-as-its-typed
//
// js - jquery - validate - create - form |
