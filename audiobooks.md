---
layout: base
title: Audiobooks
search_exclude: true
menu: nav/home.html
---

<section class="py-12 bg-gray-100 min-h-screen">
    <div class="container mx-auto px-4">
        <h1 class="text-5xl font-bold text-center mb-12 text-indigo-700">Audiobooks</h1>
        
        <!-- Assistive Technologies Toolbar -->
        <div class="bg-gray-800 text-white p-4 rounded-lg mb-8 shadow-lg">
            <h2 class="text-2xl font-bold mb-4">Listening Assistive Tools</h2>
            <div class="flex flex-wrap gap-4">
                <div class="flex items-center">
                    <label for="playback-speed" class="mr-2">Playback Speed:</label>
                    <select id="playback-speed" class="bg-gray-700 rounded px-2 py-1">
                        <option value="0.75">0.75x</option>
                        <option value="1" selected>1x</option>
                        <option value="1.25">1.25x</option>
                        <option value="1.5">1.5x</option>
                        <option value="2">2x</option>
                    </select>
                </div>
                <button id="transcript-toggle" class="bg-indigo-600 hover:bg-indigo-700 px-4 py-2 rounded-lg flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    Show Transcript
                </button>
                <button id="highlight-narration" class="bg-indigo-600 hover:bg-indigo-700 px-4 py-2 rounded-lg flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                    </svg>
                    Highlight During Narration
                </button>
                <button id="adjust-volume" class="bg-indigo-600 hover:bg-indigo-700 px-4 py-2 rounded-lg flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                    </svg>
                    <span id="volume-level">Volume: 100%</span>
                </button>
            </div>
        </div>
        
        <!-- Audiobooks List -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <!-- Audiobook 1 -->
            <div class="bg-white rounded-lg shadow-lg overflow-hidden audiobook-card">
                <img src="images/audiobook1.jpg" alt="Project Hail Mary" class="w-full h-64 object-cover">
                <div class="p-6">
                    <h3 class="text-2xl font-bold mb-2">Project Hail Mary</h3>
                    <p class="text-gray-500 mb-2">by Andy Weir, narrated by Ray Porter</p>
                    <p class="text-gray-700 mb-4">A lone astronaut must save the earth from disaster in this incredible adventure of ingenuity, discovery, and survival.</p>
                    <div class="flex items-center justify-between">
                        <div class="flex items-center">
                            <span class="text-gray-600 mr-2">13h 24m</span>
                            <div class="h-2 w-24 bg-gray-200 rounded-full overflow-hidden">
                                <div class="h-full bg-indigo-600 rounded-full" style="width: 35%"></div>
                            </div>
                        </div>
                        <button class="listen-button bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg">Listen</button>
                    </div>
                </div>
            </div>
            
            <!-- Audiobook 2 -->
            <div class="bg-white rounded-lg shadow-lg overflow-hidden audiobook-card">
                <img src="images/audiobook2.jpg" alt="Becoming" class="w-full h-64 object-cover">
                <div class="p-6">
                    <h3 class="text-2xl font-bold mb-2">Becoming</h3>
                    <p class="text-gray-500 mb-2">by Michelle Obama, narrated by Michelle Obama</p>
                    <p class="text-gray-700 mb-4">An intimate and inspiring memoir from the former First Lady of the United States.</p>
                    <div class="flex items-center justify-between">
                        <div class="flex items-center">
                            <span class="text-gray-600 mr-2">19h 3m</span>
                            <div class="h-2 w-24 bg-gray-200 rounded-full overflow-hidden">
                                <div class="h-full bg-indigo-600 rounded-full" style="width: 20%"></div>
                            </div>
                        </div>
                        <button class="listen-button bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg">Listen</button>
                    </div>
                </div>
            </div>
            
            <!-- Audiobook 3 -->
            <div class="bg-white rounded-lg shadow-lg overflow-hidden audiobook-card">
                <img src="images/audiobook3.jpg" alt="The Thursday Murder Club" class="w-full h-64 object-cover">
                <div class="p-6">
                    <h3 class="text-2xl font-bold mb-2">The Thursday Murder Club</h3>
                    <p class="text-gray-500 mb-2">by Richard Osman, narrated by Lesley Manville</p>
                    <p class="text-gray-700 mb-4">Four septuagenarians with a few tricks up their sleeves meet weekly to solve unsolved crimes, until a real murder case unfolds.</p>
                    <div class="flex items-center justify-between">
                        <div class="flex items-center">
                            <span class="text-gray-600 mr-2">12h 25m</span>
                            <div class="h-2 w-24 bg-gray-200 rounded-full overflow-hidden">
                                <div class="h-full bg-indigo-600 rounded-full" style="width: 0%"></div>
                            </div>
                        </div>
                        <button class="listen-button bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg">Listen</button>
                    </div>
                </div>
            </div>
            
            <!-- Audiobook 4 -->
            <div class="bg-white rounded-lg shadow-lg overflow-hidden audiobook-card">
                <img src="images/audiobook4.jpg" alt="Dune" class="w-full h-64 object-cover">
                <div class="p-6">
                    <h3 class="text-2xl font-bold mb-2">Dune</h3>
                    <p class="text-gray-500 mb-2">by Frank Herbert, narrated by Scott Brick</p>
                    <p class="text-gray-700 mb-4">Set on the desert planet Arrakis, this epic saga tells the story of the noble Atreides family and their battle for control of the most valuable resource in the universe.</p>
                    <div class="flex items-center justify-between">
                        <div class="flex items-center">
                            <span class="text-gray-600 mr-2">21h 2m</span>
                            <div class="h-2 w-24 bg-gray-200 rounded-full overflow-hidden">
                                <div class="h-full bg-indigo-600 rounded-full" style="width: 75%"></div>
                            </div>
                        </div>
                        <button class="listen-button bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg">Listen</button>
                    </div>
                </div>
            </div>
            
            <!-- Audiobook 5 -->
            <div class="bg-white rounded-lg shadow-lg overflow-hidden audiobook-card">
                <img src="images/audiobook5.jpg" alt="Educated" class="w-full h-64 object-cover">
                <div class="p-6">
                    <h3 class="text-2xl font-bold mb-2">Educated</h3>
                    <p class="text-gray-500 mb-2">by Tara Westover, narrated by Julia Whelan</p>
                    <p class="text-gray-700 mb-4">A memoir about a young girl who, kept out of school, leaves her survivalist family and goes on to earn a PhD from Cambridge University.</p>
                    <div class="flex items-center justify-between">
                        <div class="flex items-center">
                            <span class="text-gray-600 mr-2">12h 10m</span>
                            <div class="h-2 w-24 bg-gray-200 rounded-full overflow-hidden">
                                <div class="h-full bg-indigo-600 rounded-full" style="width: 100%"></div>
                            </div>
                        </div>
                        <button class="listen-button bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg">Listen</button>
                    </div>
                </div>
            </div>
            
            <!-- Audiobook 6 -->
            <div class="bg-white rounded-lg shadow-lg overflow-hidden audiobook-card">
                <img src="images/audiobook6.jpg" alt="The Sandman" class="w-full h-64 object-cover">
                <div class="p-6">
                    <h3 class="text-2xl font-bold mb-2">The Sandman</h3>
                    <p class="text-gray-500 mb-2">by Neil Gaiman, narrated by Full Cast</p>
                    <p class="text-gray-700 mb-4">An immersive audio adaptation of the legendary comic book series featuring a full cast of narrators, including James McAvoy as Morpheus.</p>
                    <div class="flex items-center justify-between">
                        <div class="flex items-center">
                            <span class="text-gray-600 mr-2">10h 54m</span>
                            <div class="h-2 w-24 bg-gray-200 rounded-full overflow-hidden">
                                <div class="h-full bg-indigo-600 rounded-full" style="width: 50%"></div>
                            </div>
                        </div>
                        <button class="listen-button bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg">Listen</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- Audiobook Player Modal -->
<div id="player-modal" class="fixed inset-0 bg-black bg-opacity-75 hidden flex items-center justify-center z-50">
    <div class="bg-white rounded-lg w-full max-w-4xl max-h-screen overflow-auto">
        <div class="sticky top-0 bg-indigo-800 text-white p-4 border-b flex justify-between items-center">
            <h2 class="text-2xl font-bold" id="player-title">Book Title</h2>
            <button id="close-player" class="text-2xl">&times;</button>
        </div>
        
        <!-- Audio Player -->
        <div class="p-6 bg-gray-100">
            <div class="flex items-center justify-center mb-6">
                <img id="player-cover" src="images/audiobook1.jpg" alt="Book Cover" class="h-64 w-auto rounded-lg shadow-lg">
            </div>
            
            <div class="audio-controls flex flex-col items-center">
                <!-- Progress Bar -->
                <div class="w-full flex items-center mb-4">
                    <span id="current-time" class="text-sm mr-2">0:00</span>
                    <div class="relative flex-1 h-2 bg-gray-300 rounded-full overflow-hidden">
                        <div id="progress-bar" class="absolute h-full bg-indigo-600 rounded-full" style="width: 30%"></div>
                    </div>
                    <span id="duration" class="text-sm ml-2">13:24:00</span>
                </div>
                
                <!-- Player Controls -->
                <div class="flex items-center space-x-6">
                    <button id="rewind" class="text-gray-800 hover:text-indigo-700">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12.066 11.2a1 1 0 000 1.6l5.334 4A1 1 0 0019 16V8a1 1 0 00-1.6-.8l-5.333 4zM4.066 11.2a1 1 0 000 1.6l5.334 4A1 1 0 0011 16V8a1 1 0 00-1.6-.8l-5.334 4z" />
                        </svg>
                    </button>
                    <button id="play-pause" class="bg-indigo-600 hover:bg-indigo-700 text-white rounded-full p-4">
                        <svg id="play-icon" xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <svg id="pause-icon" class="h-10 w-10 hidden" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </button>
                    <button id="fast-forward" class="text-gray-800 hover:text-indigo-700">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.933 12.8a1 1 0 000-1.6L6.6 7.2A1 1 0 005 8v8a1 1 0 001.6.8l5.333-4zM19.933 12.8a1 1 0 000-1.6l-5.333-4A1 1 0 0013 8v8a1 1 0 001.6.8l5.333-4z" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
        
        <!-- Transcript Section -->
        <div id="transcript-section" class="p-6 border-t hidden">
            <h3 class="text-xl font-bold mb-4">Transcript</h3>
            <div id="transcript-content" class="max-h-64 overflow-y-auto">
                <p id="transcript-paragraph-1" class="mb-3">I wake up. Alone. Hungry. My head hurts like hell. Seriously, how much did I drink last night? I'm lying in a bed and... Hold on... This isn't my bed. This isn't my room. Where am I?</p>
                <p id="transcript-paragraph-2" class="mb-3">The ceiling is bare metal. The walls are bare metal. I'm surrounded by metal. It's a bit chilly. The air smells...sterile. Hospital? Am I in a hospital?</p>
                <p id="transcript-paragraph-3" class="mb-3">I try to sit up and pain shoots through my body. My muscles scream in protest. It takes most of my energy, but I finally manage to prop myself up on my elbows. I look around the room - it's tiny. Just a bunch of metal walls with a metal bed. There's a metal toilet in the corner with no toilet seat. I'm in a cell.</p>
                <p id="transcript-paragraph-4" class="mb-3">No. Not a cell. There are cupboards and equipment. Medical equipment, I think, but more technical than normal medical gear. There are screens with graphs and diagrams on them. This isn't a cell or a hospital room. It's a ship. I'm on a ship.</p>
                <p id="transcript-paragraph-5" class="mb-3">What the hell ship am I on? My memory is a jumble. I can't put anything together. I can't even remember my name.</p>
                <p id="transcript-paragraph-6" class="mb-3">No, wait. That's not right. My name is Ryland. Ryland Grace. Dr. Ryland Grace. I'm a...a scientist? Yes. A scientist. I work for...I don't know. I don't remember who I work for or what I work on. My memory is like Swiss cheese. Big holes everywhere.</p>
                <p id="transcript-paragraph-7" class="mb-3">I close my eyes and rub my temples. Each heartbeat is a sledgehammer on my skull. Think. Think. How did I get here? Why am I here?</p>
                <p id="transcript-paragraph-8" class="mb-3">I can't remember. I just know I'm Ryland Grace. I'm a scientist. And... I focus through the pain. There's something important. Something critical. I...I'm on a mission. I don't remember what it is, but I'm on a mission.</p>
            </div>
        </div>
    </div>
</div>

<script>
    document.addEventListener('DOMContentLoaded', function() {
        // Player Modal Functionality
        const listenButtons = document.querySelectorAll('.listen-button');
        const playerModal = document.getElementById('player-modal');
        const closePlayer = document.getElementById('close-player');
        const playerTitle = document.getElementById('player-title');
        const playerCover = document.getElementById('player-cover');
        
        listenButtons.forEach(button => {
            button.addEventListener('click', function() {
                const audioCard = this.closest('.audiobook-card');
                const title = audioCard.querySelector('h3').textContent;
                const coverSrc = audioCard.querySelector('img').src;
                
                playerTitle.textContent = title;
                playerCover.src = coverSrc;
                playerModal.classList.remove('hidden');
                document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
            });
        });
        
        closePlayer.addEventListener('click', function() {
            playerModal.classList.add('hidden');
            document.body.style.overflow = 'auto'; // Re-enable scrolling
            // Pause audio playback
            isPlaying = false;
            updatePlayPauseButton();
        });
        
        // Playback controls
        const playPauseButton = document.getElementById('play-pause');
        const playIcon = document.getElementById('play-icon');
        const pauseIcon = document.getElementById('pause-icon');
        const rewindButton = document.getElementById('rewind');
        const fastForwardButton = document.getElementById('fast-forward');
        const progressBar = document.getElementById('progress-bar');
        const currentTimeEl = document.getElementById('current-time');
        const playbackSpeedSelect = document.getElementById('playback-speed');
        
        let isPlaying = false;
        let progressInterval;
        let currentProgress = 30; // Starting at 30% for demo
        
        function updatePlayPauseButton() {
            if (isPlaying) {
                playIcon.classList.add('hidden');
                pauseIcon.classList.remove('hidden');
                startProgressSimulation();
            } else {
                playIcon.classList.remove('hidden');
                pauseIcon.classList.add('hidden');
                stopProgressSimulation();
            }
        }
        
        function startProgressSimulation() {
            // Simulate progress
            progressInterval = setInterval(() => {
                currentProgress += 0.1;
                if (currentProgress > 100) currentProgress = 0;
                progressBar.style.width = `${currentProgress}%`;
                
                // Update time display
                const totalSeconds = 13 * 60 * 60 + 24 * 60; // 13h 24m in seconds
                const currentSeconds = Math.floor(totalSeconds * (currentProgress / 100));
                const hours = Math.floor(currentSeconds / 3600);
                const minutes = Math.floor((currentSeconds % 3600) / 60);
                const seconds = currentSeconds % 60;
                
                currentTimeEl.textContent = `${hours}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
                
                // Highlight transcript paragraph based on progress
                highlightCurrentParagraph(currentProgress);
            }, 100);
        }
        
        function stopProgressSimulation() {
            clearInterval(progressInterval);
        }
        
        function highlightCurrentParagraph(progress) {
            if (!document.getElementById('highlight-narration').classList.contains('active')) return;
            
            const paragraphs = document.querySelectorAll('#transcript-content p');
            const paragraphCount = paragraphs.length;
            const paragraphIndex = Math.floor((progress / 100) * paragraphCount);
            
            paragraphs.forEach(p => p.classList.remove('bg-yellow-100'));
            
            if (paragraphIndex < paragraphCount) {
                paragraphs[paragraphIndex].classList.add('bg-yellow-100');
                // Scroll to the highlighted paragraph
                paragraphs[paragraphIndex].scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
        }
        
        playPauseButton.addEventListener('click', function() {
            isPlaying = !isPlaying;
            updatePlayPauseButton();
        });
        
        rewindButton.addEventListener('click', function() {
            // Rewind by 30 seconds
            currentProgress = Math.max(0, currentProgress - 0.5);
            progressBar.style.width = `${currentProgress}%`;
        });
        
        fastForwardButton.addEventListener('click', function() {
            // Fast forward by 30 seconds
            currentProgress = Math.min(100, currentProgress + 0.5);
            progressBar.style.width = `${currentProgress}%`;
        });
        
        playbackSpeedSelect.addEventListener('change', function() {
            // In a real app, this would change the audio playback rate
            // For this demo, we'll just update the progress simulation speed
            stopProgressSimulation();
            if (isPlaying) startProgressSimulation();
        });
        
        // Transcript Toggle
        const transcriptToggle = document.getElementById('transcript-toggle');
        const transcriptSection = document.getElementById('transcript-section');
        
        transcriptToggle.addEventListener('click', function() {
            transcriptSection.classList.toggle('hidden');
            if (transcriptSection.classList.contains('hidden')) {
                transcriptToggle.innerHTML = `
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    Show Transcript
                `;
            } else {
                transcriptToggle.innerHTML = `
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    Hide Transcript
                `;
            }
        });
        
        // Highlight During Narration Toggle
        const highlightNarrationButton = document.getElementById('highlight-narration');
        
        highlightNarrationButton.addEventListener('click', function() {
            this.classList.toggle('active');
            if (this.classList.contains('active')) {
                this.classList.remove('bg-indigo-600', 'hover:bg-indigo-700');
                this.classList.add('bg-green-500', 'hover:bg-green-600');
            } else {
                this.classList.remove('bg-green-500', 'hover:bg-green-600');
                this.classList.add('bg-indigo-600', 'hover:bg-indigo-700');
                // Remove highlights
                const paragraphs = document.querySelectorAll('#transcript-content p');
                paragraphs.forEach(p => p.classList.remove('bg-yellow-100'));
            }
        });
        
        // Volume Adjustment
        const volumeButton = document.getElementById('adjust-volume');
        const volumeLevel = document.getElementById('volume-level');
        let currentVolume = 100;
        
        volumeButton.addEventListener('click', function() {
            // Cycle through volume levels: 100% -> 75% -> 50% -> 25% -> 0% -> 100%
            currentVolume = (currentVolume + 25) % 125;
            if (currentVolume === 0) currentVolume = 100;
            
            volumeLevel.textContent = `Volume: ${currentVolume}%`;
            
            // In a real app, this would adjust the audio volume
        });
    });
</script> 