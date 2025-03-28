---
layout: base
title: Profile
permalink: /connectlit/profile
search_exclude: true
menu: nav/home.html
---

<meta http-equiv="refresh" content="0;url=/connectlit/login" id="auth-redirect">

<script>
// Check if user is authenticated
const user = JSON.parse(localStorage.getItem('currentUser'));
if (user) {
    // Remove the redirect meta tag if user is authenticated
    document.getElementById('auth-redirect').remove();
    
    // Update profile information
    document.getElementById('profile-name').textContent = user.name;
    document.getElementById('profile-username').textContent = `@${user.username}`;
    
    // Format and display member since date
    const memberSince = new Date(user.createdAt);
    document.getElementById('member-since').textContent = `Member since: ${memberSince.toLocaleDateString()}`;

    // Load mock data for reading stats and lists
    document.getElementById('books-read').textContent = '12';
    document.getElementById('reading-streak').textContent = '5 days';
    document.getElementById('total-pages').textContent = '2,450';

    // Add mock reading history
    const readingHistory = document.getElementById('reading-history');
    const mockHistory = [
        { title: 'The Great Gatsby', progress: 100, date: '2024-03-15' },
        { title: '1984', progress: 100, date: '2024-03-10' },
        { title: 'To Kill a Mockingbird', progress: 100, date: '2024-03-05' }
    ];

    mockHistory.forEach(book => {
        const historyItem = document.createElement('div');
        historyItem.className = 'flex items-center justify-between p-4 bg-gray-50 rounded-lg';
        historyItem.innerHTML = `
            <div>
                <h3 class="font-semibold">${book.title}</h3>
                <p class="text-sm text-gray-500">Completed on ${new Date(book.date).toLocaleDateString()}</p>
            </div>
            <div class="w-16 h-2 bg-gray-200 rounded-full">
                <div class="w-full h-full bg-indigo-500 rounded-full"></div>
            </div>
        `;
        readingHistory.appendChild(historyItem);
    });

    // Add mock currently reading
    const currentlyReading = document.getElementById('currently-reading');
    const mockCurrent = [
        { title: 'Pride and Prejudice', progress: 65 },
        { title: 'The Hobbit', progress: 30 }
    ];

    mockCurrent.forEach(book => {
        const currentItem = document.createElement('div');
        currentItem.className = 'p-4 bg-gray-50 rounded-lg';
        currentItem.innerHTML = `
            <h3 class="font-semibold">${book.title}</h3>
            <div class="mt-2 w-full h-2 bg-gray-200 rounded-full">
                <div class="h-full bg-indigo-500 rounded-full" style="width: ${book.progress}%"></div>
            </div>
            <p class="text-sm text-gray-500 mt-1">${book.progress}% complete</p>
        `;
        currentlyReading.appendChild(currentItem);
    });

    // Add mock want to read
    const wantToRead = document.getElementById('want-to-read');
    const mockWantToRead = [
        'The Catcher in the Rye',
        'Brave New World',
        'The Lord of the Rings'
    ];

    mockWantToRead.forEach(book => {
        const wantItem = document.createElement('div');
        wantItem.className = 'p-4 bg-gray-50 rounded-lg';
        wantItem.innerHTML = `
            <h3 class="font-semibold">${book}</h3>
            <button class="mt-2 text-sm text-indigo-500 hover:text-indigo-600">Start Reading</button>
        `;
        wantToRead.appendChild(wantItem);
    });
}
</script>

<div class="container mx-auto px-4 py-8">
    <!-- Profile Header -->
    <div class="bg-white rounded-lg shadow-lg p-8 mb-8">
        <div class="flex items-center space-x-6">
            <div class="relative">
                <img src="{{site.baseurl}}/images/default-avatar.png" alt="Profile Picture" class="w-32 h-32 rounded-full object-cover border-4 border-indigo-500">
                <button class="absolute bottom-0 right-0 bg-indigo-500 text-white p-2 rounded-full hover:bg-indigo-600 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                    </svg>
                </button>
            </div>
            <div>
                <h1 class="text-3xl font-bold text-gray-900" id="profile-name">Loading...</h1>
                <p class="text-gray-600" id="profile-username">@username</p>
                <p class="text-gray-500 mt-2" id="member-since">Member since: Loading...</p>
            </div>
        </div>
    </div>

    <!-- Reading Stats -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div class="bg-white rounded-lg shadow-lg p-6">
            <h3 class="text-lg font-semibold text-gray-900 mb-2">Books Read</h3>
            <p class="text-3xl font-bold text-indigo-500" id="books-read">0</p>
        </div>
        <div class="bg-white rounded-lg shadow-lg p-6">
            <h3 class="text-lg font-semibold text-gray-900 mb-2">Reading Streak</h3>
            <p class="text-3xl font-bold text-indigo-500" id="reading-streak">0 days</p>
        </div>
        <div class="bg-white rounded-lg shadow-lg p-6">
            <h3 class="text-lg font-semibold text-gray-900 mb-2">Total Pages</h3>
            <p class="text-3xl font-bold text-indigo-500" id="total-pages">0</p>
        </div>
    </div>

    <!-- Reading History -->
    <div class="bg-white rounded-lg shadow-lg p-8 mb-8">
        <h2 class="text-2xl font-bold text-gray-900 mb-6">Reading History</h2>
        <div class="space-y-4" id="reading-history">
            <!-- Reading history items will be added here -->
        </div>
    </div>

    <!-- Reading Lists -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <div class="bg-white rounded-lg shadow-lg p-8">
            <h2 class="text-2xl font-bold text-gray-900 mb-6">Currently Reading</h2>
            <div class="space-y-4" id="currently-reading">
                <!-- Currently reading items will be added here -->
            </div>
        </div>
        <div class="bg-white rounded-lg shadow-lg p-8">
            <h2 class="text-2xl font-bold text-gray-900 mb-6">Want to Read</h2>
            <div class="space-y-4" id="want-to-read">
                <!-- Want to read items will be added here -->
            </div>
        </div>
    </div>

    <!-- Settings -->
    <div class="bg-white rounded-lg shadow-lg p-8">
        <h2 class="text-2xl font-bold text-gray-900 mb-6">Account Settings</h2>
        <div class="space-y-6">
            <div>
                <label class="block text-sm font-medium text-gray-700">Display Name</label>
                <input type="text" id="display-name" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700">Email</label>
                <input type="email" id="email" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500">
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700">Reading Preferences</label>
                <div class="mt-2 space-y-2">
                    <label class="inline-flex items-center">
                        <input type="checkbox" class="rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-500 focus:ring-indigo-500">
                        <span class="ml-2">Enable text-to-speech by default</span>
                    </label>
                    <br>
                    <label class="inline-flex items-center">
                        <input type="checkbox" class="rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-500 focus:ring-indigo-500">
                        <span class="ml-2">Use dyslexia-friendly font</span>
                    </label>
                </div>
            </div>
            <div class="flex justify-end space-x-4">
                <button class="px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                    Cancel
                </button>
                <button class="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                    Save Changes
                </button>
            </div>
        </div>
    </div>
</div> 