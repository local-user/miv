<html>
    <head>

        <!-- title -->
        <title>Miv</title>

        <!-- css - common -->
        <link rel="stylesheet" type="text/css" href="css/common-reset.css"      >
        <link rel="stylesheet" type="text/css" href="css/common-font.css"       >
        <link rel="stylesheet" type="text/css" href="css/common-color.css"      >
        <link rel="stylesheet" type="text/css" href="css/common-container.css"  >

        <!-- css - content -->
        <link rel="stylesheet" type="text/css" href="css/content-flash.css" >
        <link rel="stylesheet" type="text/css" href="css/content-header.css" >
        <link rel="stylesheet" type="text/css" href="css/content-create.css" >

        <!-- css - vendor -->
        <link rel="stylesheet" type="text/css" href="vendor/font-awesome-4.5.0/css/font-awesome.min.css"    >
        <link rel="stylesheet" type="text/css" href="vendor/google-font-exo/exo.css"                        >

        <!-- icon -->
        <link rel="shortcut icon" href="img/icon/favicon.ico">

        <!-- js  - jquery -->
        <script src="vendor/jquery-2.1.4/jquery-2.1.4.min.js"></script>

    </head>
    <body>

                <!-- html -  content -->
        <?php   require_once('html/content-flash.html');    ?>
        <?php   require_once('html/content-header.html');   ?>
        <?php   require_once('html/content-create.html');   ?>
        <?php   require_once('html/content-message.html');  ?>

                <!-- js - function(s) -->
        <script src='js/function-valid-url.js'></script>

                <!-- js - jquery - ajax -->
        <script src='js/jquery/ajax-create.js'          ></script>

                <!-- js - jquery - lock(s) -->
        <script src='js/jquery/lock-create-form.js'     ></script>

                <!-- js - jquery - toggle(s) -->
        <script src='js/jquery/toggle-create.js'        ></script>
        <script src='js/jquery/toggle-edit.js'          ></script>
        <script src='js/jquery/toggle-flash.js'         ></script>
        <script src='js/jquery/toggle-message.js'       ></script>

    </body>
</html>
