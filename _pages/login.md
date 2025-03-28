---
layout: base
title: Login
permalink: /connectlit/login
search_exclude: true
menu: nav/home.html
---

<script>
document.getElementById('login-form').addEventListener('submit', async function(e) {
    e.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    try {
        const response = await fetch('/connectlit/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, password }),
        });
        
        if (response.ok) {
            const user = await response.json();
            localStorage.setItem('currentUser', JSON.stringify(user));
            window.location.href = '/connectlit/profile';
        } else {
            alert('Invalid username or password');
        }
    } catch (error) {
        console.error('Login error:', error);
        alert('An error occurred during login');
    }
});
</script>

// ... existing code ... 