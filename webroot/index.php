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


        <!-- title -->
        <title>Miv</title>

        <!-- css - common -->
        <link rel="stylesheet" type="text/css" href="css/common/reset.css"      >
        <link rel="stylesheet" type="text/css" href="css/common/font.css"       >
        <link rel="stylesheet" type="text/css" href="css/common/color.css"      >
        <link rel="stylesheet" type="text/css" href="css/common/container.css"  >

        <!-- css - content -->
        <link rel="stylesheet" type="text/css" href="css/content/flash.css"     >
        <link rel="stylesheet" type="text/css" href="css/content/header.css"    >
        <link rel="stylesheet" type="text/css" href="css/content/input.css"     >

        <!-- css - z - animation -->
        <link rel="stylesheet" type="text/css" href="css/animation/welcome.css" >

        <!-- icon - fav -->
        <link rel="shortcut icon" href="img/icon/favicon.ico">

        <!-- vendor - * -->
        <link rel="stylesheet" type="text/css" href="vendor/font-awesome-4.5.0/css/font-awesome.min.css"    >
        <link rel="stylesheet" type="text/css" href="vendor/google-font-exo/exo.css"                        >
        <script                                 src="vendor/jquery-2.1.4/jquery-2.1.4.min.js"></script>


    </head>
    <body>


        <!-- html -  content -->
        <?php require_once('html/content/flash.html');   ?>
        <?php require_once('html/content/header.html');  ?>
        <?php require_once('html/content/input.html');   ?>
        <?php require_once('html/content/message.html'); ?>


        <!-- | js -->

            <!-- js - debug [ 0 = Disable, 1 = Enable ] -->
            <script>var debug = 0;</script>

            <!-- js - function(s) -->
            <script src='js/function/valid/url.js'></script>

            <!-- | js - jquery -->

                <!-- js - jquery - object(s) -->
                <script src='js/jquery/object/flash.js'></script>
                <script src='js/jquery/object/header.js'></script>
                <script src='js/jquery/object/input.js'></script>

                <!-- js - jquery - listener(s) - element -->
                <script src='js/jquery/listener/element/flash-toggle-body.js'></script>
                <script src='js/jquery/listener/element/flash-toggle-hide.js'></script>
                <script src='js/jquery/listener/element/flash-toggle-love.js'></script>
                <script src='js/jquery/listener/element/header-title.js'></script>
                <script src='js/jquery/listener/element/header-toggle-input.js'></script>
                <script src='js/jquery/listener/element/input-form-input-url.js'></script>

                <!-- js - jquery - listener(s) - keyboard -->
                <script src='js/jquery/listener/keyboard/escape.js'></script>

            <!-- js - jquery | -->

        <!-- js | -->


    </body>
</html>
