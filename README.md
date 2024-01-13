# WEATHER & TRANSLATER API

## Installing
<summary><span>Clone the repo</span></summary>
<pre>git clone https://github.com/xongs08/weather-and-translater-api.git</pre>
<summary><span>Go to the repo directory</span></summary>
<pre>cd weather-and-translater-api</pre>
<summary><span>Installing dependencies and starting the server</span></summary>
<div>
  <br>
  YARN
  <pre>yarn && yarn dev</pre>
  NPM
  <pre>npm install && npm run dev</pre>
</div>

## How to use
The server will start at localhost port 3000
### How to get weather?
```js
fetch('http://localhost:3000/api/weather/new+york')
  .then(resp => resp.json())
  .then(data => console.log(data))
  .catch(err => console.log(`Error at fetching data: ${err}`));
```
<img alt="RESPONSE" src="https://i.imgur.com/no6dtqL.png">
