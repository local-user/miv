<?php namespace miv\request; ?>
<?php




    // require - php - action - read - url
    require_once(__DIR__.'/../action/read/url.php');

    // require - php - request
    require_once(__DIR__.'/../request.php');




?>
<?php
/*
 *   php - request - read - url
 * ( masquarades as request_ext )
 *
 */
class request_ext extends request {




    // var - action
    private $action = null;




    /** | load **/

        public function __construct() {

            // load - miv - action - read - url
            $this->action = new \miv\action\read\url();

            // return
            return true;

        }

    /** load | **/


    /** | process **/

        public function process() {

            // action - url - read - all
            $data = $this->action->database_read_all();

            // set - return - data
            $this->set_return_data( 200, 'urls', $data );

            // return
            return true;

        }

    /** process | **/




}
/*
 *   php - request - get - url
 *
 */
?>
