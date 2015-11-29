<?php
/*
 *
 *      API
 *
 */




    // require - router
    require_once('../php/class-router.php');

    // router - route
    $router = new \miv\router();
    $router->set_request_data($_GET, $_POST);
    $router->set_request_method_from_request_data();
    $router->route();




/*
 *
 *      %(#_@)<
 *
 */
?>
