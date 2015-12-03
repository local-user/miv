<?php
/*
 *
 *      MIV/API
 *
 */




    // debug
    $debug = false;

    // require - router
    require_once('../php/miv/system/router.php');

    // router - route
    $router = new \miv\system\router($debug);
    $router->set_request_data($_GET, $_POST);
    $router->set_request_method_from_request_data();
    $router->route($debug);




/*
 *
 *      %(#_@)<
 *
 */
?>
