<?php

//config.php

//Include Google Client Library for PHP autoload file
require_once 'vendor/autoload.php';

//Make object of Google API Client for call Google API
$google_client = new Google_Client();

//Set the OAuth 2.0 Client ID
$google_client->setClientId('689122452455-us9hto3u0u1u8eacssrb7u0b1llhu9q1.apps.googleusercontent.com');

//Set the OAuth 2.0 Client Secret key
$google_client->setClientSecret(  'GEsHs9cAL2bxK-yCsnjgA1Fj');

//Set the OAuth 2.0 Redirect URI
$google_client->setRedirectUri('');

//
$google_client->addScope('email');

$google_client->addScope('profile');

//start session on web page
session_start();

?>