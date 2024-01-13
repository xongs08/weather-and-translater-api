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
<span>Params</span>
<pre>/weather/REGION+NAME</pre>
```js
fetch('http://localhost:3000/api/weather/new+york')
  .then(resp => resp.json())
  .then(data => console.log(data))
  .catch(err => console.log(`Error at fetching weather data: ${err}`));
```
<img alt="WEATHER RESPONSE" src="https://i.imgur.com/no6dtqL.png">

### How to translate a text?
<span>Params</span>
<pre>/translater/SOURCE_LANGUAGE/TARGET_LANGUAGE/TEXT+TO+BE+TRANSLATED</pre>
```js
fetch('http://localhost:3000/api/translater/pt/en/Olá+mundo!')
  .then(resp => resp.json())
  .then(data => console.log(data))
  .catch(err => console.log(`Error at translating: ${err}`));
```
<img alt="TRANSLATER RESPONSE" src="https://i.imgur.com/md9sPAE.png">

### I don't want to use port 3000
<p>It's ok</p>
<summary><span>Go to the API directory</span></summary>
<pre>cd weather-and-translater-api/src</pre>
<span>Then go to the server.js file</span>
<img alt="server.js file" src="https://i.imgur.com/h0LzYJ3.png">
