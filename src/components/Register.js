import React from 'react';
import "../css/Register.css";

export default function Register() {
  return (
    <div class="register-page">
    <div class="form">
      <form class="register-form">
        <input type="text" placeholder="name"/>
        <input type="password" placeholder="password"/>
        <input type="text" placeholder="email address"/>
        <button>create</button>
        <p class="message">Already registered? <a href="/register.html">Sign In</a></p>
      </form>
    </div>
  </div>
  )
}
