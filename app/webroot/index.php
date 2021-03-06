<?php
/*
 *
 *      MIV/INDEX
 *
 *
 */
?>
<?php

    /** require - config - locked **/
    require_once('../config/locked.php');

?>
<html>
    <head>

        <!-- meta -->
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width">
        <meta name="mobile-web-app-capable" content="yes">
        <meta name="theme-color" content="#222222" />

        <!-- css - common - reset -->
        <link rel="stylesheet" type="text/css" href="css/common/reset.css" >

        <!--| 3rdparty - vendor -->

            <!-- google - font(s) -->
            <link href="https://fonts.googleapis.com/css?family=Titillium+Web" rel="stylesheet">

            <!-- vendor - css -->
            <link rel="stylesheet" type="text/css" href="vendor/font-awesome-4.5.0/css/font-awesome.min.css"    >
            <link rel="stylesheet" type="text/css" href="vendor/dropzonejs/dropzone.css"                        >

            <!-- vendor - js -->
            <script src="vendor/jquery-2.1.4/jquery-2.1.4.min.js"></script>
            <script src="vendor/dropzonejs/dropzone.js"></script>

            <!-- vendor - materialzie -->
            <link type="text/css" rel="stylesheet" href="vendor/materialize/css/materialize.min.css"  media="screen,projection"/>
            <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">

        <!-- 3rdparty - vendor |-->

        <!-- css - common -->
        <link rel="stylesheet" type="text/css" href="css/common/alphabet.css"   >
        <link rel="stylesheet" type="text/css" href="css/common/color.css"      >
        <link rel="stylesheet" type="text/css" href="css/common/container.css"  >
        <link rel="stylesheet" type="text/css" href="css/common/font.css"       >

        <!-- css - content -->
        <link rel="stylesheet" type="text/css" href="css/content/error.css"     >
        <link rel="stylesheet" type="text/css" href="css/content/footer.css"    >
        <link rel="stylesheet" type="text/css" href="css/content/flash.css"     >
        <link rel="stylesheet" type="text/css" href="css/content/header.css"    >
        <link rel="stylesheet" type="text/css" href="css/content/input.css"     >
        <link rel="stylesheet" type="text/css" href="css/content/loading.css"   >
        <link rel="stylesheet" type="text/css" href="css/content/padding.css"   >
        <link rel="stylesheet" type="text/css" href="css/content/setting.css"   >
        <link rel="stylesheet" type="text/css" href="css/content/urls.css"      >
        <link rel="stylesheet" type="text/css" href="css/content/welcome.css"   >

        <!-- icon - fav -->
        <link rel="shortcut icon" href="img/favicon.ico">

        <!-- js - min - config -->
        <script> var debug = 0; </script>

        <!-- title -->
        <title><?php echo gethostname(); ?> </title>

    </head>
    <body id='body' class=''>

        <!-- | html -->

            <!-- html - content -->
            <?php

                if( $locked ){
                    require_once('html/content/error.html');
                    require_once('html/content/welcome.html');
                    require_once('html/content/padding.html');
                    require_once('html/content/urls.html');
                }

                if( ! $locked ){
                    require_once('html/content/error.html');
                    require_once('html/content/welcome.html');
                    require_once('html/content/loading.html');
                    require_once('html/content/padding.html');
                    require_once('html/content/flash.html');
                    require_once('html/content/input.html');
                    require_once('html/content/header.html');
                    require_once('html/content/setting.html');
                    require_once('html/content/message.html');
                    require_once('html/content/urls.html');
                    require_once('html/content/footer.html');
                }

            ?>
            <!-- note - [ order affects visual(s) ] -->

        <!-- html | -->

        <!-- | js -->

            <!-- js - function(s) -->
            <script src='js/function/valid_url.js'></script>

            <!-- | js - jquery -->

                <!-- js - jquery - listener(s) - element -->
                <script src='js/jquery/listener/element/error.js'                   ></script>
                <script src='js/jquery/listener/element/flash-toggle-body.js'       ></script>
                <script src='js/jquery/listener/element/flash-toggle-hide.js'       ></script>
                <script src='js/jquery/listener/element/flash-toggle-love.js'       ></script>
                <script src='js/jquery/listener/element/header-title.js'            ></script>
                <script src='js/jquery/listener/element/header-toggle-edit.js'      ></script>
                <script src='js/jquery/listener/element/header-toggle-input.js'     ></script>
                <script src='js/jquery/listener/element/header-trigger-welcome.js'  ></script>
                <script src='js/jquery/listener/element/header-trigger-refresh.js'  ></script>
                <script src='js/jquery/listener/element/header-toggle-setting.js'   ></script>
                <script src='js/jquery/listener/element/input-form-input-url.js'    ></script>
                <script src='js/jquery/listener/element/setting-container-height.js'></script>
                <script src='js/jquery/listener/element/setting-container-width.js' ></script>
                <script src='js/jquery/listener/element/setting-url-height.js'      ></script>
                <script src='js/jquery/listener/element/setting-url-width.js'       ></script>
                <script src='js/jquery/listener/element/url-trigger-delete.js'      ></script>
                <script src='js/jquery/listener/element/url-trigger-dropzone.js'    ></script>
                <script src='js/jquery/listener/element/url-trigger-priority.js'    ></script>
                <script src='js/jquery/listener/element/welcome.js'                 ></script>

                <!-- js - jquery - listener(s) - event -->
                <script src='js/jquery/listener/event/resize.js'                    ></script>
                <script src='js/jquery/listener/event/ready.js'                     ></script>

                <!-- js - jquery - listener(s) - keyboard -->
                <script src='js/jquery/listener/keyboard/ctrl.js'                   ></script>
                <script src='js/jquery/listener/keyboard/esc.js'                    ></script>
                <script src='js/jquery/listener/keyboard/e.js'                      ></script>
                <script src='js/jquery/listener/keyboard/l.js'                      ></script>
                <script src='js/jquery/listener/keyboard/i.js'                      ></script>
                <script src='js/jquery/listener/keyboard/n.js'                      ></script>
                <script src='js/jquery/listener/keyboard/r.js'                      ></script>
                <script src='js/jquery/listener/keyboard/s.js'                      ></script>
                <script src='js/jquery/listener/keyboard/t.js'                      ></script>

                <!-- js - jquery - object(s) -->
                <script src='js/jquery/object/error.js'                             ></script>
                <script src='js/jquery/object/edit.js'                              ></script>
                <script src='js/jquery/object/flash.js'                             ></script>
                <script src='js/jquery/object/footer.js'                            ></script>
                <script src='js/jquery/object/header.js'                            ></script>
                <script src='js/jquery/object/img.js'                               ></script>
                <script src='js/jquery/object/input.js'                             ></script>
                <script src='js/jquery/object/loading.js'                           ></script>
                <script src='js/jquery/object/lock.js'                              ></script>
                <script src='js/jquery/object/msg.js'                               ></script>
                <script src='js/jquery/object/msgs.js'                              ></script>
                <script src='js/jquery/object/padding.js'                           ></script>
                <script src='js/jquery/object/setting.js'                           ></script>
                <script src='js/jquery/object/setting.container.js'                 ></script>
                <script src='js/jquery/object/setting.url.js'                       ></script>
                <script src='js/jquery/object/turl.js'                              ></script>
                <script src='js/jquery/object/url.js'                               ></script>
                <script src='js/jquery/object/urls.js'                              ></script>
                <script src='js/jquery/object/welcome.js'                           ></script>

                <!-- vendor - materialize -->
                <script type="text/javascript" src="vendor/materialize/js/materialize.min.js"></script>

            <!-- js - jquery | -->

            <!-- js - load - complete -->
            <script>console.log('miv.')</script>

        <!-- js | -->

    </body>
</html>
