<?php
/*
 *
 *      API
 *
 */




    // require - router
    require_once('../php/class-router.php');


    // router - init
    $router = new router();

    // router - set - payload - get
    $router->set_payload_get($_GET);

    // router - set - payload - post
    $router->set_payload_post($_POST);

    // router - route
    $router->route();




/*
 *
 *      %(#_@)<
 *
 */
?>
