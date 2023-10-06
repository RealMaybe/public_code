/* set url */
function updateUrlParams(o,t,n){const e=new URLSearchParams;for(const[o,n]of Object.entries(t))e.append(o,n);const a=e.toString();let r,c,i,s=window.location.href;o?n.indexOf("./")>=0?({protocol:r,host:c,pathname:i}=new URL(n,s)):({protocol:r,host:c,pathname:i}=new URL(n)):({protocol:r,host:c,pathname:i}=window.location);const l=`${r}//${c}${i}?${a}`;if(o)return l;window.history.replaceState(null,"",l)}

/* get url */
function parseUrlParams(n,e){let r,o,t,s=window.location.href;const a={};if(!(t=n?(o=e.indexOf("./")>=0?new URLSearchParams(new URL(e,s).search):new URLSearchParams(new URL(e).search)).toString():(r=window.location.search).substr(1)))return{};const c=t.split("&");for(const n of c){const[e,r]=n.split("=");a[e]=decodeURIComponent(r)}return a}