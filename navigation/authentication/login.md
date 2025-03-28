---
layout: base
title: Login
permalink: /login
search_exclude: true
menu: nav/home.html
---

<div class="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
  <div class="sm:mx-auto sm:w-full sm:max-w-sm">
    <h2 class="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">Sign in to your account</h2>
  </div>

  <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
    <form class="space-y-6" id="loginForm" onsubmit="return handleLogin()">
      <div>
        <label for="username" class="block text-sm/6 font-medium text-gray-900">Username</label>
        <div class="mt-2">
          <input type="text" name="username" id="username" autocomplete="username" required class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6">
        </div>
      </div>
      <div>
        <div class="flex items-center justify-between">
          <label for="password" class="block text-sm/6 font-medium text-gray-900">Password</label>
        </div>
        <div class="mt-2">
          <input type="password" name="password" id="password" autocomplete="current-password" required class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6">
        </div>
      </div>
      <div>
        <button type="submit" class="flex w-full justify-center rounded-md bg-indigo-500 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-rose-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">Sign in</button>
      </div>
      <p id="message" class="text-red-500 text-center"></p>
      <div class="text-center mt-4">
        <p class="text-sm text-gray-600">Don't have an account? <a href="{{site.baseurl}}/signup" class="text-indigo-600 hover:text-indigo-500">Sign up</a></p>
      </div>
    </form>
  </div>
</div>

<script type="module">
    import { mockLogin, isAuthenticated } from '{{site.baseurl}}/assets/js/api/mockAuth.js';

    // Check if user is already logged in
    document.addEventListener('DOMContentLoaded', () => {
        if (isAuthenticated()) {
            window.location.href = '{{site.baseurl}}/';
        }
    });

    // Function to handle login
    window.handleLogin = async function() {
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;
        const messageElement = document.getElementById("message");

        try {
            await mockLogin(username, password);
            // Redirect to home page after successful login
            window.location.href = '{{site.baseurl}}/';
        } catch (error) {
            messageElement.textContent = error.message || 'Invalid username or password';
        }

        return false; // Prevent default form submission behavior
    };
</script>
