<?php
/*
 *
 *      MIV/INDEX
 *
 *
 */
?>
<html>
    <head>

        <!-- css - common - reset -->
        <link rel="stylesheet" type="text/css" href="css/common/reset.css"      >

        <!--| 3rdparty - vendor -->

            <!-- vendor - css -->
            <link rel="stylesheet" type="text/css" href="vendor/font-awesome-4.5.0/css/font-awesome.min.css"    >
            <link rel="stylesheet" type="text/css" href="vendor/google-font-exo/exo.css"                        >
            <link rel="stylesheet" type="text/css" href="vendor/dropzonejs/dropzone.css"                        >

            <!-- vendor - js -->
            <script src="vendor/jquery-2.1.4/jquery-2.1.4.min.js"></script>
            <script src="vendor/dropzonejs/dropzone.js"></script>

        <!-- 3rdparty - vendor |-->

        <!-- css - common -->
        <link rel="stylesheet" type="text/css" href="css/common/alphabet.css"   >
        <link rel="stylesheet" type="text/css" href="css/common/color.css"      >
        <link rel="stylesheet" type="text/css" href="css/common/container.css"  >
        <link rel="stylesheet" type="text/css" href="css/common/font.css"       >
        <link rel="stylesheet" type="text/css" href="css/common/overlay.css"    >

        <!-- css - content -->
        <link rel="stylesheet" type="text/css" href="css/content/dzm.css"       >
        <link rel="stylesheet" type="text/css" href="css/content/error.css"     >
        <link rel="stylesheet" type="text/css" href="css/content/flash.css"     >
        <link rel="stylesheet" type="text/css" href="css/content/header.css"    >
        <link rel="stylesheet" type="text/css" href="css/content/input.css"     >
        <link rel="stylesheet" type="text/css" href="css/content/urls.css"      >
        <link rel="stylesheet" type="text/css" href="css/content/welcome.css"   >

        <!-- css - z - animation -->
        <link rel="stylesheet" type="text/css" href="css/animation/welcome.css" >

        <!-- icon - fav -->
        <link rel="shortcut icon" href="img/icon/favicon.ico">

        <!-- js - min - config -->
        <script> var debug = 1; </script>

        <!-- title -->
        <title>miv.</title>

    </head>
    <body id='body' class='overlay'>

        <!-- | html -->

            <!-- html - content -->
            <?php require_once('html/content/error.html');      ?>
            <?php require_once('html/content/welcome.html');    ?>
            <?php require_once('html/content/flash.html');      ?>
            <?php require_once('html/content/input.html');      ?>
            <?php require_once('html/content/dzm.html');        ?> <!-- dzm // dropzone miv -->
            <?php require_once('html/content/header.html');     ?>
            <?php require_once('html/content/message.html');    ?>
            <?php require_once('html/content/urls.html');       ?>
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
                <script src='js/jquery/listener/element/header-toggle-overlay.js'   ></script>
                <script src='js/jquery/listener/element/header-toggle-refresh.js'   ></script>
                <script src='js/jquery/listener/element/input-form-input-url.js'    ></script>
                <script src='js/jquery/listener/element/url-trigger-delete.js'      ></script>
                <script src='js/jquery/listener/element/url-trigger-priority.js'    ></script>
                <script src='js/jquery/listener/element/welcome.js'                 ></script>

                <!-- js - jquery - listener(s) - keyboard -->
                <script src='js/jquery/listener/keyboard/ctrl.js'                   ></script>
                <script src='js/jquery/listener/keyboard/down.js'                   ></script>
                <script src='js/jquery/listener/keyboard/esc.js'                    ></script>

                <!-- js - jquery - object(s) -->
                <script src='js/jquery/object/dzm.js'                               ></script>
                <script src='js/jquery/object/error.js'                             ></script>
                <script src='js/jquery/object/edit.js'                              ></script>
                <script src='js/jquery/object/flash.js'                             ></script>
                <script src='js/jquery/object/header.js'                            ></script>
                <script src='js/jquery/object/input.js'                             ></script>
                <script src='js/jquery/object/msg.js'                               ></script>
                <script src='js/jquery/object/msgs.js'                              ></script>
                <script src='js/jquery/object/overlay.js'                           ></script>
                <script src='js/jquery/object/url.js'                               ></script>
                <script src='js/jquery/object/urls.js'                              ></script>

            <!-- js - jquery | -->

        <!-- js | -->

    </body>
</html>
