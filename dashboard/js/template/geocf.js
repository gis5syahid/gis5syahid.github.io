import {getCookie} from "https://jscroot.github.io/cookie/croot.js";

export let URLGeoJson = "https://asia-southeast2-msyahid.cloudfunctions.net/GetDataGeo";
export let urlPostGCF = "https://asia-southeast2-msyahid.cloudfunctions.net/InsertDataGeo";
export let UrlLogin = "https://asia-southeast2-msyahid.cloudfunctions.net/LoginGeo";
export let UrlRegister = "https://asia-southeast2-msyahid.cloudfunctions.net/RegisterGeo";
export let tableTag="tr";
export let tableRowClass="content is-small";
export let token = "tokennya"
export let cookie = getCookie("Login")
export let tableTemplate=`


<td>#NAME#</td>
<td >#KORDINAT#</td>
<td>#TYPE#</td>
`
export const clickpopup = `
Long : #LONG#<br>
Lat  : #LAT#<br>
X   : #X#<br>
Y   : #Y#<br>
HDMS : #HDMS#<br>
`