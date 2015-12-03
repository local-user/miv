<?php namespace miv; ?>
<?php
/*
 *  php - miv - database
 *
 */
class database extends miv {




    /** var - db **/
    private $db             =   null;

    /** var - query **/
    private $query          =   null;
    private $query_data     =   null;




    /** | magic **/

        public function __construct() {

            // db - require - config - database
            require_once(__DIR__.'/../config/database.php');

            // db - init
            $this->db = new \PDO("{$db_type}:{$db_host};{$db_name}", $db_user, $db_pass);

            // db - attribute(s)
            $this->db->setAttribute(\PDO::ATTR_ERRMODE, \PDO::ERRMODE_EXCEPTION);

            // return
            return true;

        }

    /** magic | **/


    /** | prepare **/

        public function prepare() {

            // db - prepare
            $this->db = $this->db->prepare($this->get_query());

            // return
            return true;

        }

    /** prepare | **/


    /** | query **/

        public function query() {

            // db - execute - w/ - query - data
            $this->db->execute($this->get_query_data());

            // return
            return true;

        }

    /** query | **/


    /** | get **/

        private function get_query() {

            // ? null - query
            if( is_null($this->query) ){
                throw new NoDataException();
            }

            // return
            return $this->query;

        }

        private function get_query_data() {

            // ? null - query
            if( is_null($this->query_data) ){
                throw new NoDataException();
            }

            // return
            return $this->query_data;

        }

    /** get | **/


    /** | set **/

        public function set_query($query) {

            // set
            $this->query = $query;

            // return
            return true;

        }

        public function set_query_data($data) {

            // ? array
            if( ! is_array($data) ){
                throw new InvalidArgumentException('invalid data');
            }

            // set
            $this->query_data = $data;

            // return
            return true;

        }

    /** set | **/


    /** | valid **/
    /** valid | **/




}
/*
 *  php - miv_database
 *
 */
?>
