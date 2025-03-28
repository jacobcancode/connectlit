---
layout: base
search_exclude: true
menu: nav/home.html
---

<!-- Loading Screen -->
<div id="loading-screen" class="fixed inset-0 bg-gray-200 flex items-center justify-center z-50">
    <div class="text-center">
        <div class="loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-32 w-32 mb-4"></div>
        <h2 class="text-4xl font-semibold text-gray-900">Loading...</h2>
    </div>
</div>

<style>
    .loader {
        border-top-color: #3498db;
        animation: spin 1s infinite linear;
    }

    @keyframes spin {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }
</style>

<script>
    document.addEventListener("DOMContentLoaded", function() {
        const loadingScreen = document.getElementById('loading-screen');
        window.addEventListener('load', function() {
            loadingScreen.style.display = 'none';
        });
        window.addEventListener('beforeunload', function() {
            loadingScreen.style.display = 'flex';
        });
    });
</script>

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>BookConnect</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <style>
        /* Fade-in animation */
        .fade-in {
            opacity: 0;
            transform: translateY(40px);
            transition: opacity 1s ease-out, transform 1s ease-out;
        }
        .fade-in.visible {
            opacity: 1;
            transform: translateY(0);
        }
        /* Gradient Animation */
        @keyframes gradient {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
        }
        .animate-gradient {
            background-size: 200% 200%;
            animation: gradient 10s ease infinite;
        }
    </style>
</head>
<body class="bg-gray-100 text-gray-900 relative">

    <!-- Background Animation -->
    <div class="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div class="bg-gradient-to-r from-indigo-900 via-purple-800 to-blue-900 w-full h-full opacity-50 animate-gradient"></div>
    </div>

    <!-- Dashboard Section (Visible when logged in) -->
    <div id="dashboard-section" class="hidden">
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
    </div>

    <!-- Landing Page Content (Visible when not logged in) -->
    <div id="landing-section">
        <!-- Welcome Section -->
        <section id="welcome" class="h-screen flex items-center justify-center text-center bg-gray-900 text-white">
            <div class="container mx-auto px-4">
                <h1 class="text-8xl font-extrabold fade-in">
                    Welcome to <span class="text-indigo-500">BookConnect</span>
                </h1>
                <img src="{{site.baseurl}}/images/hero-image.jpg" alt="BookConnect Hero" class="mt-8 mx-auto rounded-lg shadow-xl max-w-2xl fade-in">
            </div>
        </section>

        <!-- About Us Section -->
        <section id="about" class="h-screen flex flex-col items-center justify-center text-center">
            <h2 class="text-7xl font-extrabold text-indigo-500 fade-in mb-6">About Us</h2>
            <p class="text-3xl text-gray-700 max-w-5xl fade-in">
                BookConnect is a social platform for book lovers with reading assistive technologies to enhance your reading experience
            </p>
            <img src="{{site.baseurl}}/images/reading-tools.jpg" alt="Reading Tools" class="mt-8 rounded-lg shadow-xl max-w-2xl fade-in">
        </section>

        <!-- Our Mission Section -->
        <section id="mission" class="h-screen flex flex-col items-center justify-center text-center bg-gray-200">
            <div class="text-9xl font-black text-indigo-600 tracking-tight mb-8 fade-in" style="font-family: 'Playfair Display', serif;">
                BookConnect
            </div>
            <h3 class="text-6xl font-bold mt-8 text-gray-900 fade-in">Our Mission</h3>
            <p class="text-3xl text-gray-700 mt-4 max-w-5xl fade-in">
                At BookConnect, we strive to create a community where book lovers can discover, share, and discuss their favorite reads. Our platform offers assistive technologies to help readers of all abilities enjoy books and enhance comprehension.
            </p>
        </section>

        <!-- Featured Books Section -->
        <section id="featured-books" class="py-20 bg-gray-100">
            <h2 class="text-7xl font-bold text-center text-indigo-600 mb-10 fade-in">Featured Books</h2>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                <a href="{{site.baseurl}}/fiction" class="bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform duration-500 hover:scale-105 fade-in">
                    <img src="{{site.baseurl}}/images/fiction.jpg" alt="Fiction Books" class="w-full h-64 object-cover">
                    <div class="p-6">
                        <h3 class="text-3xl font-bold mb-2">Fiction Books</h3>
                        <p class="text-xl text-gray-700">Explore worlds of imagination through our curated fiction collection.</p>
                    </div>
                </a>
                <a href="{{site.baseurl}}/non-fiction" class="bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform duration-500 hover:scale-105 fade-in">
                    <img src="{{site.baseurl}}/images/non-fiction.jpg" alt="Non-Fiction Books" class="w-full h-64 object-cover">
                    <div class="p-6">
                        <h3 class="text-3xl font-bold mb-2">Non-Fiction Books</h3>
                        <p class="text-xl text-gray-700">Discover knowledge and insights from our collection of non-fiction books.</p>
                    </div>
                </a>
                <a href="{{site.baseurl}}/audiobooks" class="bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform duration-500 hover:scale-105 fade-in">
                    <img src="{{site.baseurl}}/images/audiobooks.jpg" alt="Audiobooks" class="w-full h-64 object-cover">
                    <div class="p-6">
                        <h3 class="text-3xl font-bold mb-2">Audiobooks</h3>
                        <p class="text-xl text-gray-700">Listen to professionally narrated books for an immersive experience.</p>
                    </div>
                </a>
            </div>
        </section>

        <!-- Assistive Technologies Section -->
        <section id="assistive-tech" class="py-20 bg-gray-800 text-white">
            <h2 class="text-7xl font-bold text-center mb-10 fade-in">Reading Assistive Technologies</h2>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto px-4">
                <div class="bg-gray-700 rounded-lg p-8 shadow-lg transform transition-transform duration-500 hover:scale-105 fade-in">
                    <img src="{{site.baseurl}}/images/text-to-speech.jpg" alt="Text-to-Speech" class="w-full h-48 object-cover rounded-lg mb-4">
                    <h3 class="text-3xl font-bold mb-4 text-indigo-300">Text-to-Speech</h3>
                    <p class="text-xl">Our advanced text-to-speech technology converts written text to natural-sounding speech, helping readers with visual impairments or learning disabilities.</p>
                </div>
                <div class="bg-gray-700 rounded-lg p-8 shadow-lg transform transition-transform duration-500 hover:scale-105 fade-in">
                    <img src="{{site.baseurl}}/images/dyslexia-font.jpg" alt="Dyslexia-Friendly Font" class="w-full h-48 object-cover rounded-lg mb-4">
                    <h3 class="text-3xl font-bold mb-4 text-indigo-300">Dyslexia-Friendly Font</h3>
                    <p class="text-xl">Our platform offers OpenDyslexic and other specialized fonts designed to increase readability for readers with dyslexia.</p>
                </div>
                <div class="bg-gray-700 rounded-lg p-8 shadow-lg transform transition-transform duration-500 hover:scale-105 fade-in">
                    <img src="{{site.baseurl}}/images/reading-tools.jpg" alt="Reading Tools" class="w-full h-48 object-cover rounded-lg mb-4">
                    <h3 class="text-3xl font-bold mb-4 text-indigo-300">Reading Comprehension Tools</h3>
                    <p class="text-xl">Integrated dictionary, vocabulary builders, and AI-powered summaries help improve reading comprehension for all readers.</p>
                </div>
            </div>
        </section>

        <!-- Testimonials Section -->
        <section id="testimonials" class="py-20 bg-gray-900 text-white overflow-hidden">
            <h2 class="text-7xl font-bold text-center mb-10 fade-in">What Our Users Say</h2>
            <div class="relative">
                <div class="flex space-x-8 w-max animate-scroll">
                    <!-- Original Testimonials -->
                    <div class="bg-gray-800 rounded-lg p-8 shadow-lg min-w-[300px] min-h-[350px] flex flex-col justify-between">
                        <p class="text-3xl italic leading-relaxed">
                            "BookConnect is the<br>
                            best platform for book lovers!<br>
                            The text-to-speech feature<br>
                            has transformed my reading experience."
                        </p>
                        <h3 class="mt-6 font-bold text-xl">- Alex R.</h3>
                    </div>
                    <div class="bg-gray-800 rounded-lg p-8 shadow-lg min-w-[300px] min-h-[350px] flex flex-col justify-between">
                        <p class="text-3xl italic leading-relaxed">
                            "A fantastic community where<br>
                            I can share my book reviews<br>
                            and get great recommendations."
                        </p>
                        <h3 class="mt-6 font-bold text-xl">- Jamie T.</h3>
                    </div>
                    <div class="bg-gray-800 rounded-lg p-8 shadow-lg min-w-[300px] min-h-[350px] flex flex-col justify-between">
                        <p class="text-3xl italic leading-relaxed">
                            "The dyslexia-friendly font option<br>
                            has made reading enjoyable again.<br>
                            Highly recommended!"
                        </p>
                        <h3 class="mt-6 font-bold text-xl">- Chris M.</h3>
                    </div>
                    <div class="bg-gray-800 rounded-lg p-8 shadow-lg min-w-[300px] min-h-[350px] flex flex-col justify-between">
                        <p class="text-3xl italic leading-relaxed">
                            "I've found my reading community<br>
                            thanks to the discussion forums<br>
                            on this platform.<br>
                            Amazing work!"
                        </p>
                        <h3 class="mt-6 font-bold text-xl">- Taylor L.</h3>
                    </div>
                    <div class="bg-gray-800 rounded-lg p-8 shadow-lg min-w-[300px] min-h-[350px] flex flex-col justify-between">
                        <p class="text-3xl italic leading-relaxed">
                            "The AI-powered summaries helped me<br>
                            better understand complex books."
                        </p>
                        <h3 class="mt-6 font-bold text-xl">- Morgan S.</h3>
                    </div>
                    <div class="bg-gray-800 rounded-lg p-8 shadow-lg min-w-[300px] min-h-[350px] flex flex-col justify-between">
                        <p class="text-3xl italic leading-relaxed">
                            "Every book lover needs to join<br>
                            BookConnect.<br>
                            It's a game-changer."
                        </p>
                        <h3 class="mt-6 font-bold text-xl">- Riley D.</h3>
                    </div>
                    <!-- Duplicate Testimonials for Infinite Scroll -->
                    <div class="bg-gray-800 rounded-lg p-8 shadow-lg min-w-[300px] min-h-[350px] flex flex-col justify-between">
                        <p class="text-3xl italic leading-relaxed">
                            "BookConnect is the<br>
                            best platform for avid readers!<br>
                            I've discovered so many new authors<br>
                            through community recommendations."
                        </p>
                        <h3 class="mt-6 font-bold text-xl">- Alex R.</h3>
                    </div>
                    <div class="bg-gray-800 rounded-lg p-8 shadow-lg min-w-[300px] min-h-[350px] flex flex-col justify-between">
                        <p class="text-3xl italic leading-relaxed">
                            "A fantastic community where<br>
                            I can share my literary photography<br>
                            and get great feedback."
                        </p>
                        <h3 class="mt-6 font-bold text-xl">- Jamie T.</h3>
                    </div>
                    <div class="bg-gray-800 rounded-lg p-8 shadow-lg min-w-[300px] min-h-[350px] flex flex-col justify-between">
                        <p class="text-3xl italic leading-relaxed">
                            "The forums have been super helpful<br>
                            for discussing plot mysteries.<br>
                            Highly recommended!"
                        </p>
                        <h3 class="mt-6 font-bold text-xl">- Chris M.</h3>
                    </div>
                    <div class="bg-gray-800 rounded-lg p-8 shadow-lg min-w-[300px] min-h-[350px] flex flex-col justify-between">
                        <p class="text-3xl italic leading-relaxed">
                            "I've found my reading motivation<br>
                            thanks to the reading challenges<br>
                            on this platform.<br>
                            Amazing work!"
                        </p>
                        <h3 class="mt-6 font-bold text-xl">- Taylor L.</h3>
                    </div>
                    <div class="bg-gray-800 rounded-lg p-8 shadow-lg min-w-[300px] min-h-[350px] flex flex-col justify-between">
                        <p class="text-3xl italic leading-relaxed">
                            "This website is excellent<br>
                            highly recommend to all book lovers."
                        </p>
                        <h3 class="mt-6 font-bold text-xl">- Morgan S.</h3>
                    </div>
                    <div class="bg-gray-800 rounded-lg p-8 shadow-lg min-w-[300px] min-h-[350px] flex flex-col justify-between">
                        <p class="text-3xl italic leading-relaxed">
                            "Every book enthusiast needs to join<br>
                            BookConnect.<br>
                            It's revolutionized my reading habits."
                        </p>
                        <h3 class="mt-6 font-bold text-xl">- Riley D.</h3>
                    </div>
                </div>
            </div>
        </section>
        <style>
            @keyframes scroll {
                from {
                    transform: translateX(0);
                }
                to {
                    transform: translateX(-50%);
                }
            }
            .animate-scroll {
                animation: scroll 45s linear infinite;
            }
        </style>

        <!-- Call-to-Action Section -->
        <section id="cta" class="h-screen flex flex-col items-center justify-center bg-gradient-to-r from-indigo-600 to-purple-500 text-white">
            <img src="{{site.baseurl}}/images/community.jpg" alt="BookConnect Community" class="max-w-2xl rounded-lg shadow-xl mb-8 fade-in">
            <h2 class="text-7xl font-bold mb-6 fade-in">Join the BookConnect Community</h2>
            <p class="text-3xl max-w-4xl text-center mb-8 fade-in">
                Connect with book enthusiasts from around the world, share your reading experiences, and explore our reading assistive technologies!
            </p>
            <a href="{{site.baseurl}}/signup" class="bg-white text-indigo-600 text-3xl px-8 py-4 rounded-lg shadow-lg font-bold transition-transform transform hover:scale-110 fade-in">
                Get Started Now
            </a>
        </section>
    </div>

    <!-- Footer -->
    <footer class="bg-gray-800 text-white py-8">
        <div class="container mx-auto text-center">
            <p class="text-lg">&copy; 2024 BookConnect. All rights reserved.</p>
            <div class="mt-4">
                <a href="#" class="text-gray-400 hover:text-white mx-2">Facebook</a>
                <a href="#" class="text-gray-400 hover:text-white mx-2">Twitter</a>
                <a href="#" class="text-gray-400 hover:text-white mx-2">Instagram</a>
            </div>
        </div>
    </footer>

    <!-- JavaScript -->
    <script>
        // JavaScript to handle fade-in effect on scroll
        const fadeInElements = document.querySelectorAll('.fade-in');

        const handleScroll = () => {
            fadeInElements.forEach(el => {
                const rect = el.getBoundingClientRect();
                if (rect.top < window.innerHeight * 0.9 && rect.bottom > 0) {
                    el.classList.add('visible');
                } else {
                    el.classList.remove('visible');
                }
            });
        };

        window.addEventListener('scroll', handleScroll);
        window.addEventListener('load', handleScroll); // Trigger on page load
    </script>

    <script type="module">
        import { getCurrentUser } from '{{site.baseurl}}/assets/js/api/mockAuth.js';

        document.addEventListener('DOMContentLoaded', () => {
            const user = getCurrentUser();
            const dashboardSection = document.getElementById('dashboard-section');
            const landingSection = document.getElementById('landing-section');

            if (user) {
                // Show dashboard, hide landing page
                dashboardSection.classList.remove('hidden');
                landingSection.classList.add('hidden');

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
            } else {
                // Show landing page, hide dashboard
                dashboardSection.classList.add('hidden');
                landingSection.classList.remove('hidden');
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
</body>
</html>
