<?php

    class Config {

        public $serverName;
        public $userName;
        public $password;
        public $dbName;

        function Config() {
            $this->serverName = 'localhost';
            $this->userName = 'admin_income';
            $this->password = 'NqVMpM91';
            $this->dbName = $this->userName;
        }

    }
