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

            // db - detail(s)
            $db_type = 'sqlite';
            $db_path = __DIR__.'/../database.sqlite';

            // db - init
            $this->db = new \PDO("{$db_type}:{$db_path}");

            // db - attribute(s)
            $this->db->setAttribute(\PDO::ATTR_ERRMODE, \PDO::ERRMODE_EXCEPTION);

            // return
            return true;

        }

    /** magic | **/


    /** | prepare **/

        public function prepare() {

            // db - prepare
            $this->db->prepare($this->get_query());

            // return
            return true;

        }

    /** prepare | **/


    /** | query **/

        public function query() {

            // db - execute - w/ - query - data
            $this->db->excute(array($this->get_query_data()));

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
