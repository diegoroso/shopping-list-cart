# Shopping List Cart
A simple shopping cart list

## Install
```
$ git clone https://github.com/diegoroso/shopping-list-cart.git
$ cd shopping-list-cart
$ npm install
$ npm start
```

You should also run
```
$ node server.js
```

After that, you'll see something like
```
Listening on port 3000!
```

- Copy the port number
- Open the `./config` folder
- Replicate the file `config.example.js`
- Rename it to `config.local.js`
- Paste the copied port by replacing `PORT`

Ex.: 
```
export default {
    API_URL: 'http://localhost:PORT/'
}
```
to: 
```
export default {
    API_URL: 'http://localhost:3000/'
}
```
