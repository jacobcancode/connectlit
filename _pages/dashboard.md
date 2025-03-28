---
layout: base
title: Dashboard
permalink: /connectlit/dashboard
search_exclude: true
menu: nav/home.html
---

<div class="container mx-auto px-4 py-8">
    <!-- Welcome Section -->
    <div class="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg shadow-lg p-8 mb-8 text-white">
        <div class="flex items-center justify-between">
            <div>
                <h1 class="text-3xl font-bold mb-2" id="welcome-message">Welcome back!</h1>
                <p class="text-lg opacity-90" id="user-stats">Let's continue your reading journey</p>
            </div>
            <div class="text-right">
                <p class="text-sm opacity-90">Reading Streak</p>
                <p class="text-2xl font-bold" id="streak-count">0 days</p>
            </div>
        </div>
    </div>

    <!-- Main Content Grid -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <!-- Current Book Card -->
        <div class="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
            <div class="flex items-center justify-between mb-4">
                <h2 class="text-xl font-bold">Current Book</h2>
                <span class="text-sm text-gray-500" id="reading-time">0 min</span>
            </div>
            <div class="space-y-4">
                <div class="flex items-center space-x-4">
                    <div class="w-16 h-24 bg-gray-200 rounded-lg flex-shrink-0" id="book-cover">
                        <!-- Book cover will be added here -->
                    </div>
                    <div class="flex-grow">
                        <h3 class="font-semibold" id="current-book-title">Not Started</h3>
                        <p class="text-sm text-gray-600" id="current-book-author">Select a book to begin</p>
                    </div>
                </div>
                <div class="w-full bg-gray-200 rounded-full h-2">
                    <div class="bg-indigo-500 h-2 rounded-full transition-all duration-300" id="progress-bar" style="width: 0%"></div>
                </div>
                <div class="flex justify-between text-sm text-gray-600">
                    <span id="pages-read">0 pages</span>
                    <span id="total-pages">0 pages</span>
                </div>
                <a href="{{site.baseurl}}/reading" class="block w-full text-center py-2 px-4 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600 transition-colors">
                    Continue Reading
                </a>
            </div>
        </div>

        <!-- Reading Goals Card -->
        <div class="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
            <h2 class="text-xl font-bold mb-4">Reading Goals</h2>
            <div class="space-y-4">
                <div class="flex justify-between items-center">
                    <span class="text-gray-600">Weekly Goal</span>
                    <span class="font-semibold" id="weekly-goal">0/5 hours</span>
                </div>
                <div class="flex justify-between items-center">
                    <span class="text-gray-600">Monthly Books</span>
                    <span class="font-semibold" id="monthly-books">0/3 books</span>
                </div>
                <div class="pt-4">
                    <button onclick="updateGoals()" class="w-full py-2 px-4 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors">
                        Update Goals
                    </button>
                </div>
            </div>
        </div>

        <!-- Reading Insights Card -->
        <div class="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
            <h2 class="text-xl font-bold mb-4">Reading Insights</h2>
            <div class="space-y-4">
                <div class="flex justify-between items-center">
                    <span class="text-gray-600">Books Completed</span>
                    <span class="font-semibold" id="books-completed">0</span>
                </div>
                <div class="flex justify-between items-center">
                    <span class="text-gray-600">Total Reading Time</span>
                    <span class="font-semibold" id="total-reading-time">0 hours</span>
                </div>
                <div class="flex justify-between items-center">
                    <span class="text-gray-600">Favorite Genre</span>
                    <span class="font-semibold" id="favorite-genre">Not enough data</span>
                </div>
            </div>
        </div>
    </div>

    <!-- Recent Activity Section -->
    <div class="mt-8">
        <div class="flex justify-between items-center mb-4">
            <h2 class="text-2xl font-bold">Recent Activity</h2>
            <a href="{{site.baseurl}}/reading-history" class="text-indigo-500 hover:text-indigo-600">View All</a>
        </div>
        <div class="bg-white rounded-lg shadow-md p-6">
            <div id="recent-activity" class="space-y-4">
                <p class="text-gray-500">No recent activity</p>
            </div>
        </div>
    </div>

    <!-- Quick Actions -->
    <div class="mt-8">
        <h2 class="text-2xl font-bold mb-4">Quick Actions</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <a href="{{site.baseurl}}/reading" class="bg-indigo-500 text-white rounded-lg p-4 text-center hover:bg-indigo-600 transition-colors">
                Continue Reading
            </a>
            <a href="{{site.baseurl}}/discussions" class="bg-green-500 text-white rounded-lg p-4 text-center hover:bg-green-600 transition-colors">
                Join Discussion
            </a>
            <a href="{{site.baseurl}}/recommended" class="bg-purple-500 text-white rounded-lg p-4 text-center hover:bg-purple-600 transition-colors">
                Find New Books
            </a>
            <a href="{{site.baseurl}}/profile" class="bg-blue-500 text-white rounded-lg p-4 text-center hover:bg-blue-600 transition-colors">
                Update Profile
            </a>
        </div>
    </div>
</div>

<script type="module">
    import { getCurrentUser } from '{{site.baseurl}}/assets/js/api/mockAuth.js';

    document.addEventListener('DOMContentLoaded', () => {
        const user = getCurrentUser();
        if (!user) {
            window.location.href = '{{site.baseurl}}/login';
            return;
        }

        // Load user's reading data from localStorage
        const userData = JSON.parse(localStorage.getItem(`user_${user.username}`)) || {
            currentBook: {
                title: 'Not Started',
                author: 'Select a book to begin',
                cover: '',
                pagesRead: 0,
                totalPages: 0,
                readingTime: 0
            },
            goals: {
                weeklyHours: 5,
                monthlyBooks: 3,
                currentWeeklyHours: 0,
                currentMonthlyBooks: 0
            },
            stats: {
                booksCompleted: 0,
                totalReadingTime: 0,
                readingStreak: 0,
                favoriteGenre: 'Not enough data'
            },
            recentActivity: []
        };

        // Update welcome message
        const hour = new Date().getHours();
        const greeting = hour < 12 ? 'Good morning' : hour < 18 ? 'Good afternoon' : 'Good evening';
        document.getElementById('welcome-message').textContent = `${greeting}, ${user.username}!`;
        document.getElementById('user-stats').textContent = `You've read ${userData.stats.booksCompleted} books this month`;

        // Update current book
        document.getElementById('current-book-title').textContent = userData.currentBook.title;
        document.getElementById('current-book-author').textContent = userData.currentBook.author;
        document.getElementById('pages-read').textContent = `${userData.currentBook.pagesRead} pages`;
        document.getElementById('total-pages').textContent = `${userData.currentBook.totalPages} pages`;
        document.getElementById('reading-time').textContent = `${userData.currentBook.readingTime} min`;
        document.getElementById('progress-bar').style.width = userData.currentBook.totalPages ? 
            `${(userData.currentBook.pagesRead / userData.currentBook.totalPages) * 100}%` : '0%';

        // Update goals
        document.getElementById('weekly-goal').textContent = 
            `${userData.goals.currentWeeklyHours}/${userData.goals.weeklyHours} hours`;
        document.getElementById('monthly-books').textContent = 
            `${userData.goals.currentMonthlyBooks}/${userData.goals.monthlyBooks} books`;

        // Update insights
        document.getElementById('books-completed').textContent = userData.stats.booksCompleted;
        document.getElementById('total-reading-time').textContent = `${userData.stats.totalReadingTime} hours`;
        document.getElementById('favorite-genre').textContent = userData.stats.favoriteGenre;
        document.getElementById('streak-count').textContent = `${userData.stats.readingStreak} days`;

        // Update recent activity
        const recentActivityDiv = document.getElementById('recent-activity');
        if (userData.recentActivity.length > 0) {
            recentActivityDiv.innerHTML = userData.recentActivity
                .map(activity => `
                    <div class="flex items-center space-x-4">
                        <div class="w-2 h-2 bg-indigo-500 rounded-full"></div>
                        <p class="text-gray-700">${activity}</p>
                    </div>
                `)
                .join('');
        }
    });

    // Function to update reading goals
    window.updateGoals = function() {
        const weeklyHours = prompt('Enter your weekly reading goal (hours):', '5');
        const monthlyBooks = prompt('Enter your monthly book goal:', '3');
        
        if (weeklyHours && monthlyBooks) {
            const user = getCurrentUser();
            const userData = JSON.parse(localStorage.getItem(`user_${user.username}`)) || {};
            
            userData.goals = {
                weeklyHours: parseInt(weeklyHours),
                monthlyBooks: parseInt(monthlyBooks),
                currentWeeklyHours: userData.goals?.currentWeeklyHours || 0,
                currentMonthlyBooks: userData.goals?.currentMonthlyBooks || 0
            };
            
            localStorage.setItem(`user_${user.username}`, JSON.stringify(userData));
            location.reload();
        }
    };
</script> 