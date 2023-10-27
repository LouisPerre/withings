<?php

class Withings {

    public function getUserWeight($accessToken) {
        $ch = curl_init();

        curl_setopt($ch, CURLOPT_URL, "https://wbsapi.withings.net/measure");

        curl_setopt($ch, CURLOPT_RETURNTRANSFER, TRUE);

        curl_setopt($ch, CURLOPT_HTTPHEADER, [
            "Authorization: Bearer $accessToken"
        ]);

        curl_setopt($ch, CURLOPT_POSTFIELDS, http_build_query([
            'action' => 'getmeas',
            'meastype' => '1',
            'lastupdate' => '1'
        ]));

        $mesures = json_decode(curl_exec($ch));
        $mesuresArray = $mesures->body->measuregrps;
        $mesure = ((end($mesuresArray))->measures)[0];
        curl_close($ch);

        $value = $mesure->value;
        $unit = $mesure->unit;
        return $value*(pow(10, $unit));
    }
}
