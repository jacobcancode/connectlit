// Authentication check function
function checkAuth() {
    try {
        const currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (!currentUser) {
            window.location.href = '/connectlit/login';
            return false;
        }
        return currentUser;
    } catch (error) {
        console.error('Error parsing user data:', error);
        localStorage.removeItem('currentUser');
        window.location.href = '/connectlit/login';
        return false;
    }
}

// Run auth check when page loads
document.addEventListener('DOMContentLoaded', () => {
    const currentPath = window.location.pathname;
    // Skip auth check for login, signup, and profile pages
    if (!currentPath.includes('/login') && 
        !currentPath.includes('/signup') && 
        !currentPath.includes('/profile')) {
        checkAuth();
    }
}); 