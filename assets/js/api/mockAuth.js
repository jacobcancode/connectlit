// Simple password hashing function (for demo purposes only)
function hashPassword(password) {
    // In a real application, use a proper password hashing algorithm like bcrypt
    return btoa(password); // Base64 encoding for demo purposes
}

// Mock authentication service using localStorage
export function mockSignup(name, username, password) {
    try {
        // Get existing users or initialize empty array
        const users = JSON.parse(localStorage.getItem('users') || '[]');
        
        // Check if username already exists
        if (users.some(user => user.username === username)) {
            throw new Error('Username already exists');
        }

        // Add new user with hashed password
        users.push({
            name,
            username,
            password: hashPassword(password), // Hash the password before storing
            createdAt: new Date().toISOString()
        });

        // Save to localStorage
        localStorage.setItem('users', JSON.stringify(users));
        return true;
    } catch (error) {
        console.error('Signup error:', error);
        throw error;
    }
}

export function mockLogin(username, password) {
    try {
        // Get users from localStorage
        const users = JSON.parse(localStorage.getItem('users') || '[]');
        
        // Find user and compare hashed passwords
        const user = users.find(u => u.username === username && u.password === hashPassword(password));
        
        if (user) {
            // Store current user with all necessary information
            localStorage.setItem('currentUser', JSON.stringify({
                name: user.name,
                username: user.username,
                createdAt: user.createdAt
            }));
            return true;
        }
        
        throw new Error('Invalid username or password');
    } catch (error) {
        console.error('Login error:', error);
        throw error;
    }
}

export function mockLogout() {
    localStorage.removeItem('currentUser');
}

export function getCurrentUser() {
    try {
        return JSON.parse(localStorage.getItem('currentUser'));
    } catch {
        return null;
    }
}

export function isAuthenticated() {
    return !!getCurrentUser();
} 