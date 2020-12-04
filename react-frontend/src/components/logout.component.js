import React, { Component } from "react";
import Cookies from 'universal-cookie';
const cookies = new Cookies();

function logout () {
  cookies.set("id", "")
  cookies.set("password", "")
  console.log("Logout cookies: ",cookies.get('id'), cookies.get('password'))
  return (<p>Bye bye!</p>)
}


export default logout