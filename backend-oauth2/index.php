<?php
	// TODO create your script to use the Withings public API with Oauth2 protocol
    require_once 'config.php';
    require_once 'oauth.php';
    require_once 'withings.php';
    if (array_key_exists('code', $_GET)) {
        try {
            $oauth = new OAuth($config);
            $accessToken = $oauth->getAccessToken($_GET['code']);
            $withings = new Withings($config);
            $weight = $withings->getUserWeight($accessToken);
        } catch (Exception $e) {
            echo 'Error ' . $e->getMessage();
        }
    }
?>

<html>
	<head>
		<title>Withings Oauth2</title>
	</head>
	<body>
		<h1>Hello world</h1>
        <a href="https://account.withings.com/oauth2_user/authorize2?response_type=code&client_id=a16837aaa8f536b229ce20fa8e90a2739885b640ff67de7b84562b6fe0e27513&redirect_uri=http://localhost:7070&state=withings_test&scope=user.metrics&mode=demo">Get your access token</a>
        <?php
            if (isset($weight)) {
                echo '<div><p>The demo user weight is: ' . $weight . 'kg</p></div>';
            }
        ?>
	</body>
</html>