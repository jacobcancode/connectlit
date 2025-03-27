---
layout: base
title: BookConnect - Books & Reading Assistance
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

    <!-- Welcome Section -->
    <section id="welcome" class="h-screen flex items-center justify-center text-center bg-gray-900 text-white">
        <h1 class="text-8xl font-extrabold fade-in">
            Welcome to <span class="text-indigo-500">BookConnect</span>
        </h1>
    </section>

    <!-- About Us Section -->
    <section id="about" class="h-screen flex flex-col items-center justify-center text-center">
        <h2 class="text-7xl font-extrabold text-indigo-500 fade-in mb-6">About Us</h2>
        <p class="text-3xl text-gray-700 max-w-5xl fade-in">
            BookConnect is a social platform for book lovers with reading assistive technologies to enhance your reading experience
        </p>
    </section>

    <!-- Our Mission Section -->
    <section id="mission" class="h-screen flex flex-col items-center justify-center text-center bg-gray-200">
        <img src="images/book-logo.png"
            alt="BookConnect Logo"
            class="h-96 w-auto fade-in">
        <h3 class="text-6xl font-bold mt-8 text-gray-900 fade-in">Our Mission</h3>
        <p class="text-3xl text-gray-700 mt-4 max-w-5xl fade-in">
            At BookConnect, we strive to create a community where book lovers can discover, share, and discuss their favorite reads. Our platform offers assistive technologies to help readers of all abilities enjoy books and enhance comprehension.
        </p>
    </section>

    <!-- Featured Books Section -->
    <section id="featured-books" class="py-20 bg-gray-100">
        <h2 class="text-7xl font-bold text-center text-indigo-600 mb-10 fade-in">Featured Books</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <a href="{{site.baseurl}}/fiction" class="bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform duration-500 hover:scale-105">
                <img src="images/fiction-books.jpg" alt="Fiction Books" class="w-full h-64 object-cover">
                <div class="p-6">
                    <h3 class="text-3xl font-bold mb-2">Fiction Books</h3>
                    <p class="text-xl text-gray-700">Explore worlds of imagination through our curated fiction collection.</p>
                </div>
            </a>
            <a href="{{site.baseurl}}/non-fiction" class="bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform duration-500 hover:scale-105">
                <img src="images/non-fiction-books.jpg" alt="Non-Fiction Books" class="w-full h-64 object-cover">
                <div class="p-6">
                    <h3 class="text-3xl font-bold mb-2">Non-Fiction Books</h3>
                    <p class="text-xl text-gray-700">Discover knowledge and insights from our collection of non-fiction books.</p>
                </div>
            </a>
            <a href="{{site.baseurl}}/audiobooks" class="bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform duration-500 hover:scale-105">
                <img src="images/audiobooks.jpg" alt="Audiobooks" class="w-full h-64 object-cover">
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
            <div class="bg-gray-700 rounded-lg p-8 shadow-lg transform transition-transform duration-500 hover:scale-105">
                <h3 class="text-3xl font-bold mb-4 text-indigo-300">Text-to-Speech</h3>
                <p class="text-xl">Our advanced text-to-speech technology converts written text to natural-sounding speech, helping readers with visual impairments or learning disabilities.</p>
            </div>
            <div class="bg-gray-700 rounded-lg p-8 shadow-lg transform transition-transform duration-500 hover:scale-105">
                <h3 class="text-3xl font-bold mb-4 text-indigo-300">Dyslexia-Friendly Font</h3>
                <p class="text-xl">Our platform offers OpenDyslexic and other specialized fonts designed to increase readability for readers with dyslexia.</p>
            </div>
            <div class="bg-gray-700 rounded-lg p-8 shadow-lg transform transition-transform duration-500 hover:scale-105">
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
        <h2 class="text-7xl font-bold mb-6 fade-in">Join the BookConnect Community</h2>
        <p class="text-3xl max-w-4xl text-center mb-8 fade-in">
            Connect with book enthusiasts from around the world, share your reading experiences, and explore our reading assistive technologies!
        </p>
        <a href="{{site.baseurl}}/signup" class="bg-white text-indigo-600 text-3xl px-8 py-4 rounded-lg shadow-lg font-bold transition-transform transform hover:scale-110 fade-in">
            Get Started Now
        </a>
    </section>

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
</body>
</html>
