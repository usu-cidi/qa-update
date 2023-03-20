//Ludo's Ally API example - converted to JS

const OAuth = require('oauth-sign');
/*******************
*  CONFIGURATION  *
*******************/
/* You will need your unique Ally institutional ID. This can be found by looking in your Ally LTI settings in the launch URL setting. If your launch URL is https://prod.ally.ac/api/v1/4/lti/institution then the institutional  */
const allyID = ---;
/* When Ally was installed at your institution, a Consumer Key and Shared Secret was generated for you from Blackboard that you used to install Ally in Canvas. These values are needed to access the Ally API */
const consumerKey = '-------------';
const sharedSecret = '------------------------------------------------------';
/**********************
*  END CONFIGURATION  *
**********************/
function allyAuth(fileID, courseID) {
  const url = `https://prod.ally.ac/api/v1/${allyID}/formats/${courseID}/${fileID}/Html`;
  const oauthSignature = OAuth.hmacsign(
    'GET',
    url,
    {
      acceptTOU: 'true',
      asAttachment: 'true',
      role: 'administrator',
      userId: '1'
    },
    consumerKey,
    sharedSecret
  );
  const options = {
    url: `${url}?asAttachment=true&acceptTOU=true&role=administrator&userId=1`,
    headers: {
      Authorization: oauthSignature
    }
  };
  return new Promise((resolve, reject) => {
    request.get(options, (error, response, body) => {
      if (error) {
        reject(error);
      } else {
        const obj = JSON.parse(body);
        if (obj.url) {
          resolve(obj.url);
        } else {
          reject(obj.status);
        }
      }
    });
  });
}

/*You can call this function by passing the fileID and courseID*/