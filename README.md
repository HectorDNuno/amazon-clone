# Nozama - an Amazon Clone

![project screenshot](https://github.com/HectorDNuno/amazon-clone/blob/main/public/project-screenshot.png?raw=true)

![license](https://img.shields.io/badge/license-MIT-orange)

## Description

Hello! This is an e-commerece web app that is a clone of the Amazon website. Not only does it look like Amazon, it also has similar features. In the web app, you can do things like create a log in, add and remove items from the cart, 'purchase' items, and compare different products! This project registers and authenticates accounts using [firebase](https://firebase.google.com/). To keep track of items in the cart I use a reducer to dispatch the selected items to the data layer. For purchasing items, I use [Stripe](https://stripe.com/) for payment processing. For all the totals and subtotals I used [react-currency-format] (https://www.npmjs.com/package/react-currency-format).

The biggest challenge was using the data layer. I hadn't worked with something that was a little more abstract before so trying to visualzie what was happening was difficult. Other challenges were learning how to use the right syntax for Stripe and firebase.

In the future, I'd like to improve the comparing products function and add other fuctionalites like searching for products and product pages.

## Install Locally

Clone the project from GitHub by running this on the command line

```
$ git clone <URL-for-this-project>
```

## Dependencies

Material UI

```
$ npm install @mui/material @emotion/react @emotion/styled @mui/icons-material
```

Stripe

```
$ npm install @stripe/react-stripe-js @stripe/stripe-js
```

Axios

```
$ npm install axios
```

Firebase

```
$ npm install firebase
```

Moment.js

```
$ npm install moment
```

react-currency-format

```
$ npm install react-currency-format
```

react-router-dom

```
$ npm install react-router-dom
```
