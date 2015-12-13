<?php namespace miv\request; ?>
<?php




    // require - php - action - read - msgs
    require_once(__DIR__.'/../action/read/msgs.php');

    // require - php - request
    require_once(__DIR__.'/../request.php');




?>
<?php
/*
 *   php - request - read - msgs
 * ( masquarades as request_ext )
 *
 */
class request_ext extends request {




    // var - action
    private $action = null;




    /** | load **/

        public function __construct() {

            // load - miv - action - read - msgs
            $this->action = new \miv\action\read\msgs();

            // return
            return true;

        }

    /** load | **/


    /** | process **/

        public function process() {

            // action - msgs - read - all
            $data = $this->action->database_read_all();

            // set - return - data
            $this->set_return_data( 200, 'msgs', $data );

            // return
            return true;

        }

    /** process | **/




}
/*
 *   php - request - get - msgs
 *
 */
?>
