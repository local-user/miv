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
            $("#urls").append("<div id='url-" + id + "' class='url animate-appear' data-url-id='" + id + "'></div>");

            // append - urls - url[ id ] - edit
            $("#url-" + id).append("<div class='edit hidden color-edit-text'></div>");

            // append - urls - url[ id ] - edit - left / right
            $("#url-" + id + " .edit").append("<div class='left  l1'></div>");
            $("#url-" + id + " .edit").append("<div class='left  l2'></div>");
            $("#url-" + id + " .edit").append("<div class='right r1'></div>");
            $("#url-" + id + " .edit").append("<div class='right r2'></div>");

            // append - urls - url[ id ] - edit - image
            $("#url-" + id + " .edit .l1").append("<span class='url-trigger-dropzone     icon fa fa-picture-o color-edit-text-hover' ></span>");

            // append - urls - url[ id ] - edit - delete
            $("#url-" + id + " .edit .r1").append("<span class='url-trigger-delete       icon fa fa-close color-edit-text-hover'></span>");

            // append - urls - url[ id ] - edit - priority
            $("#url-" + id + " .edit .r2").append("<span class='url-trigger-priority-up   icon fa fa-chevron-up    color-edit-text-hover' ></span>");
            $("#url-" + id + " .edit .r2").append("<span class='                          void priority                                 ' ></span>");
            $("#url-" + id + " .edit .r2").append("<span class='url-trigger-priority-down icon fa fa-chevron-down  color-edit-text-hover' ></span>");

            // append - urls - url[ id ] - edit - dzm - dropzone
            $("#url-" + id).append("<div class='dzm hidden'></div>");

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
                        url:            "api.php?object=url&method=create",
                        data:           $("#input-form").serialize(),
                        success:        function(data) {
                                            if( debug ){ console.log(data); }
                                            thi.append( data['url']['id'] );
                                            $("html, body").animate({ scrollTop: $(document).height() }, 1500);
                                            msg.create( 200, 'Create URL[' + data['url']['id'] + ']' );
                                        },
                        error:          function() {
                                            msg.create( 400, 'Create URL' );
                                        }
            });

            // return
            return true;

        },

        delete : function( id ){

            // this
            var thi = this;

            // ajax
            $.ajax({

                        type:           "POST",
                        url:            "api.php?object=url&method=delete",
                        data:           {
                                            id:   id
                                        },
                        success:        function(data) {
                                            if( debug ){ console.log(data); }
                                            msg.create( 200, 'Delete URL[' + id + ']' );
                                            thi.deppend(id);
                                        },
                        error:          function() {
                                            msg.create( 400, 'Delete URL[' + id + ']' );
                                        }
            });

            // return
            return true;

        },

        deppend : function( id ) {

            // url - [ id ] - class - animate - disspear
            $("#url-" + id).addClass('animate-disappear');

            // return
            return true;

        },

        dropzone : function( id ){

            // this
            var thi = this;

            // url - [ id ] - dzm/dropzone - class - toggle - hidden
            $("#url-" + id + " .dzm").toggleClass("hidden");

            // url - [ id ] - dzm/dropzone - class - toggle - remove
            $("#url-" + id + " .dzm").empty();

            // url - [ id ] - dzm/dropzone - class - toggle - set
            $("#url-" + id + " .dzm").append("<form class='dropzone'></form>");
            $("#url-" + id + " .dzm .dropzone").dropzone({
                dictDefaultMessage:     "Drag or click to upload image.",
                init:                   function () {
                                            this.on("complete", function (file) {
                                                thi.dropzone(id);
                                                thi.refresh_img(id);
                                            });
                                            this.on('sending', function(file, xhr, formData){
                                                formData.append('id_url', id);
                                            });
                                        },
                maxFiles:               1,
                url:                    "api.php?object=img&method=upload"
            });

            // return
            return true;

        },

        priority : function( id, priority ) {

            // this
            var thi = this;

            // ajax
            $.ajax({

                        type:           "POST",
                        url:            "api.php?object=url&method=priority",
                        data:           {
                                            id:         id,
                                            priority:   priority
                                        },
                        success:        function(data) {
                                            if( debug ){ console.log(data); }
                                            msg.create( 200, 'Priority URL[' + id + '][' + priority + ']');
                                            $("#url-" + id + " .priority").text(priority);
                                        },
                        error:          function() {
                                            msg.create( 400, 'Priority URL[' + id + '][' + priority + ']');
                                        }
            });

            // return
            return true;

        },

        refresh : function( id ) {

            // this
            var thi = this;

            // ajax
            $.ajax({

                        type:           "POST",
                        url:            "api.php?object=url&method=read",
                        data:           {
                                            id:   id
                                        },
                        success:        function(data) {
                                            if( debug ){ console.log(data); }

                                            // url - add - color - alphabet
                                            $("#url-" + id).addClass("color-alphabet-"    + data['url']['letter']);

                                            // url - add - link
                                            $("#url-" + id).append("<a class='link'></a>");
                                            $("#url-" + id + " .link").append("<div class='default'></div>");
                                            $("#url-" + id + " .link").attr('href', data['url']['url']);
                                            $("#url-" + id + " .default").append("<div class='letter'>" + data['url']['letter'] + "</div>");
                                            $("#url-" + id + " .default").append("<div class='title'>"  + data['url']['url']    + "</div>");

                                            // url - update - prirority
                                            $("#url-" + id + " .priority").text(data['url']['priority']);

                                            // url - image - refresh
                                            thi.refresh_img( id );

                                        },
                        error:          function() {
                                            msg.create( 400, 'Read URL[' + id + ']' );
                                        }
            });

            // return
            return true;

        },

        refresh_img : function( id ){

            // this
            var thi = this;

            // ajax
            $.ajax({

                        type:           "POST",
                        url:            "api.php?object=img&method=read",
                        data:           {
                                            id_url:   id
                                        },
                        success:        function(data) {
                                            if( debug ){ console.log(data); }

                                            // url - default - add - class - hidden
                                            $("#url-" + id + " .default").addClass("hidden");

                                            // url - append - img - container
                                            $("#url-" + id + " .link").append("<div class='img'></div>");

                                            // url - append - img
                                            $("#url-" + id + " .img").css('background-image', 'url(img/upload/' + data['img']['filename'] + ')');


                                        },
                        error:          function() {
                                            msg.create( 400, 'Read IMG[id_url::' + id + ']' );
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
