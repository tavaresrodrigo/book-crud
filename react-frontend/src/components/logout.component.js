import React, { Component } from "react";
import Cookies from 'universal-cookie';
const cookies = new Cookies();

function logout () {
  cookies.set("id", "1")
  cookies.set("password", "1")
  console.log(cookies.id, cookies.password)
  return 1
 // console.log(response.data.id, response.data.password)
}
export default logout