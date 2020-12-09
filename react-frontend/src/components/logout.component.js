import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import Cookies from 'universal-cookie';
const cookies = new Cookies();

// Logout function to erase the cookies and redirect the user to login
function logout() {
  cookies.set("id", "")
  cookies.set("password", "")
  console.log("Logout cookies:", cookies.get('id'), cookies.get('password'))
  return (
    <Redirect to="/login" />
  )
}

export default logout