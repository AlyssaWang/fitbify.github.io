// var request = require('request');
//
// var headers = {
//     'Accept': 'application/json',
//     'Authorization': 'Bearer BQCielBCUjO6g-4kCjwa8ZeOCsZe-4P7A4hXGiDxBJdI_xx3m_7-C3QSipJP89z2HLlOYRWf20EKB1rvH64YvIT3GzZdR5mviCZfVbR4WC2QR_RbFcl4vKvyDlplsm2zV_LYn0NfJ2zhaDR3D7hlLBQ3sSRaYUMLaOTCVHSj14pJ1RN_VAFObHfml5lMwB1xxUIjaRE_Ehm63HSgSanKcchkzm6rrCdimNKFi51zYQqQwevflGqlR6NB9mLOlvlfiT3Q3pSUrPi78qvDHy6gkjN9Yz_gOusOHLIwyZfFqqSf6Vi3apop'
// };
//
// var options = {
//     url: 'https://api.spotify.com/v1/me',
//     headers: headers
// };
//
// function callback(error, response, body) {
//     if (!error && response.statusCode == 200) {
//         console.log(body);
//     }
// }
//
// request(options, callback);
// //window.open(options.url);
// console.log(options.url); //returns useer profile link

//------------------------------------------

var request = require('request');

var headers = {
    'Accept': 'application/json',
    'Authorization': 'Bearer BQCielBCUjO6g-4kCjwa8ZeOCsZe-4P7A4hXGiDxBJdI_xx3m_7-C3QSipJP89z2HLlOYRWf20EKB1rvH64YvIT3GzZdR5mviCZfVbR4WC2QR_RbFcl4vKvyDlplsm2zV_LYn0NfJ2zhaDR3D7hlLBQ3sSRaYUMLaOTCVHSj14pJ1RN_VAFObHfml5lMwB1xxUIjaRE_Ehm63HSgSanKcchkzm6rrCdimNKFi51zYQqQwevflGqlR6NB9mLOlvlfiT3Q3pSUrPi78qvDHy6gkjN9Yz_gOusOHLIwyZfFqqSf6Vi3apop'
};

var options = {
    url: 'https://api.spotify.com/v1/recommendations/available-genre-seeds',
    headers: headers
};

var genre_list = new Array();


function callback(error, response, body) {
    if (!error && response.statusCode == 200) {
        genre_list = body;
        console.log(genre_list);
    }
}


request(options, callback);
