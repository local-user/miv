<?php
/*
 *
 *      MIV/API
 *
 *
 */
?>
<?php




    // debug
    $debug = false;

    // require - php - machine - system - router
    require_once('../php/machine/system/router.php');

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
