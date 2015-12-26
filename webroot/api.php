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
    $debug = true;




    /** | require **/

        require_once('../php/system/router.php');
        require_once('../php/display/json.php');

    /** require | **/


    /** | router **/

        $router = new \miv\system\router($debug);
        $router->set_request(200, null, null, $_POST);
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
