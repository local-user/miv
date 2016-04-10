<?php
/*
 *
 *      MIV/API
 *
 *
 */
?>
<?php




    // global(s)
    $debug = false;




    /** | require **/

        require_once('../php/system/router.php');
        require_once('../php/display/json.php');

    /** require | **/


    /** | router **/

        $router = new \miv\system\router($debug);
        $router->set_request(200, $_GET['object'], $_GET['method'], $_POST);
        $router->route();

    /** router | **/


    /** | display **/

        $display = new \miv\display\json($debug);
        $display->set_response($router->get_response());
        $display->display();

    /** display | **/




/*
 *
 *      %(#_@)<
 *
 */
?>
