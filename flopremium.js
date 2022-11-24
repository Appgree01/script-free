var flo = JSON.parse($response.body);
      
    flo = {
  "status" : "active",
  "expiration_date" : "9999-12-24T02:52:35Z",
  "features" : [

  ],
  "transaction_id" : 540001080267092,
  "auto_renew_status" : true,
  "service_level" : 1
}

$done({body: JSON.stringify(flo)});

