<?php

class OAuth {
    private $config;

    public function __construct($config) {
        $this->config = $config;
    }

    public function getAccessToken($code) {
        $ch = curl_init();

        curl_setopt($ch, CURLOPT_URL, "https://wbsapi.withings.net/v2/oauth2");
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, TRUE);
        curl_setopt($ch, CURLOPT_POSTFIELDS, http_build_query([
            'action' => 'requesttoken',
            'grant_type' => 'authorization_code',
            'client_id' => $this->config['client_id'],
            'client_secret' => $this->config['client_secret'],
            'code' => $code,
            'redirect_uri' => $this->config['redirect_uri']
        ]));
        $response = json_decode(curl_exec($ch));
        curl_close($ch);
        return $response->body->access_token;
    }
}