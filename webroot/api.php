<?php
/*
 *
 *      API
 *
 */




    // debug
    $debug = true;

    // require - router
    require_once('../php/class-router.php');

    // router - route
    $router = new \miv\router($debug);
    $router->set_request_data($_GET, $_POST);
    $router->set_request_method_from_request_data();
    $router->route($debug);




/*
 *
 *      %(#_@)<
 *
 */
?>
