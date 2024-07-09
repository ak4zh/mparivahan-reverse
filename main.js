const CLIENT_ID = process.env.CLIENT_ID;
const CLIENT_SECRET = process.env.CLIENT_SECRET;

function getHeaders(token) {
    const baseHeaders = {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Accept-Encoding': 'br;q=1.0, gzip;q=0.9, deflate;q=0.8',
        'User-Agent': 'okhttp/4.9.2',
        'Accept-Language': 'en-IN;q=1.0',
        'timestamp': new Date().getTime().toString(),
        'Cookie': 'SERVERID_mparivahan_services_bck_183=mparivahan_services_9091_183; SERVERID_mparivahan_services_bck_193=mparivahan_services_9095_193;'
    }
    if (token) baseHeaders['Authorization'] = 'Bearer ' + token
    return baseHeaders
} 

function encryptData(data) {
    // need to figure out how this is encrypted
    const encryptedData = data;
    return encryptedData
} 

// this request doesn't necessarily require token
const oauth2Token = async (token) => fetch('https://delhigw.napix.gov.in/nic/parivahan/oauth2/token', {
    method: 'POST',
    headers: getHeaders(token),
    body: new URLSearchParams({
      'client_id': CLIENT_ID,
      'client_secret': CLIENT_SECRET,
      'grant_type': 'client_credentials',
      'scope': 'napix'
    })
  });

// pre-check if user is existing or new
const validateCtzUser = async (token, data) => fetch('https://delhigw.napix.gov.in/nic/parivahan/mparivahan/citizenapi/service/validateCtzUser', {
    method: 'POST',
    headers: getHeaders(token),
    body: JSON.stringify({
      'data': encryptData(data)
    })
});

// login in the user
const loginUser = async () => fetch('https://delhigw.napix.gov.in/nic/parivahan/mparivahan/citizenapi/service/userLogin', {
    method: 'POST',
    body: JSON.stringify({
        'data': encryptData(data)
      })
  });

// probably to signup
const sendSMSAlerts = async (token, data) => fetch('https://delhigw.napix.gov.in/nic/parivahan/mparivahan/alertsapi/service/sendSMSAlerts', {
    method: 'POST',
    headers: getHeaders(token),
    body: JSON.stringify({
      'data': encryptData(data)
    })
});

// verify otp
const verifySMSOtp = async (token, data) => fetch('https://delhigw.napix.gov.in/nic/parivahan/mparivahan/alertsapi/service/verifySMSOtp', {
    method: 'POST',
    headers: getHeaders(token),
    body: JSON.stringify({
        'data': encryptData(data)
    })
});

// fetch records
const viewdocInfo = async (token, data) => fetch('https://delhigw.napix.gov.in/nic/parivahan/mparivahan/nrapi/service/viewdocInfo', {
    method: 'POST',
    headers: getHeaders(token),
    body: JSON.stringify({
        'data': encryptData(data)
    })
});