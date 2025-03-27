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
                <img src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1705614870i/196833291.jpg" alt="The Women" class="w-full h-64 object-cover">
                <div class="p-6">
                    <h3 class="text-2xl font-bold mb-2">The Women</h3>
                    <p class="text-gray-500 mb-2">by Kristin Hannah, narrated by Julia Whelan</p>
                    <p class="text-gray-700 mb-4">A powerful story of one woman's journey as an Army nurse in Vietnam, exploring deep friendships, bold patriotism, and the challenges faced by women who served their country during a turbulent era.</p>
                    <div class="flex items-center justify-between">
                        <div class="flex items-center">
                            <span class="text-gray-600 mr-2">15h 12m</span>
                            <div class="h-2 w-24 bg-gray-200 rounded-full overflow-hidden">
                                <div class="h-full bg-indigo-600 rounded-full" style="width: 0%"></div>
                            </div>
                        </div>
                        <button class="listen-button bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg" data-audio="https://www.audible.com/pd/The-Women-Audiobook/B0C9J5YQZP">Listen</button>
                    </div>
                </div>
            </div>
            
            <!-- Audiobook 2 -->
            <div class="bg-white rounded-lg shadow-lg overflow-hidden audiobook-card">
                <img src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1702324260i/199267675.jpg" alt="The God of the Woods" class="w-full h-64 object-cover">
                <div class="p-6">
                    <h3 class="text-2xl font-bold mb-2">The God of the Woods</h3>
                    <p class="text-gray-500 mb-2">by Liz Moore, narrated by January LaVoy</p>
                    <p class="text-gray-700 mb-4">A gripping mystery set in 1975 about a teenager who vanishes from her Adirondack summer camp, unraveling family secrets and connecting to another disappearance fourteen years prior.</p>
                    <div class="flex items-center justify-between">
                        <div class="flex items-center">
                            <span class="text-gray-600 mr-2">13h 45m</span>
                            <div class="h-2 w-24 bg-gray-200 rounded-full overflow-hidden">
                                <div class="h-full bg-indigo-600 rounded-full" style="width: 0%"></div>
                            </div>
                        </div>
                        <button class="listen-button bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg" data-audio="https://www.audible.com/pd/The-God-of-the-Woods-Audiobook/B0C9J5YQZP">Listen</button>
                    </div>
                </div>
            </div>
            
            <!-- Audiobook 3 -->
            <div class="bg-white rounded-lg shadow-lg overflow-hidden audiobook-card">
                <img src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1703554916i/75335801.jpg" alt="House of Flame and Shadow" class="w-full h-64 object-cover">
                <div class="p-6">
                    <h3 class="text-2xl font-bold mb-2">House of Flame and Shadow</h3>
                    <p class="text-gray-500 mb-2">by Sarah J. Maas, narrated by Elizabeth Evans</p>
                    <p class="text-gray-700 mb-4">The stunning third book in the Crescent City series follows Bryce Quinlan as she fights to return to Midgard while Hunt Athalar struggles to escape the Asteri's control.</p>
                    <div class="flex items-center justify-between">
                        <div class="flex items-center">
                            <span class="text-gray-600 mr-2">25h 30m</span>
                            <div class="h-2 w-24 bg-gray-200 rounded-full overflow-hidden">
                                <div class="h-full bg-indigo-600 rounded-full" style="width: 0%"></div>
                            </div>
                        </div>
                        <button class="listen-button bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg" data-audio="https://www.audible.com/pd/House-of-Flame-and-Shadow-Audiobook/B0C9J5YQZP">Listen</button>
                    </div>
                </div>
            </div>
            
            <!-- Audiobook 4 -->
            <div class="bg-white rounded-lg shadow-lg overflow-hidden audiobook-card">
                <img src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1683919831i/61431922.jpg" alt="Fourth Wing" class="w-full h-64 object-cover">
                <div class="p-6">
                    <h3 class="text-2xl font-bold mb-2">Fourth Wing</h3>
                    <p class="text-gray-500 mb-2">by Rebecca Yarros, narrated by Rebecca Soler</p>
                    <p class="text-gray-700 mb-4">Enter a world where dragon riders compete in a brutal war college, following twenty-year-old Violet Sorrengail as she fights for survival among the elite.</p>
                    <div class="flex items-center justify-between">
                        <div class="flex items-center">
                            <span class="text-gray-600 mr-2">20h 45m</span>
                            <div class="h-2 w-24 bg-gray-200 rounded-full overflow-hidden">
                                <div class="h-full bg-indigo-600 rounded-full" style="width: 0%"></div>
                            </div>
                        </div>
                        <button class="listen-button bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg" data-audio="https://www.audible.com/pd/Fourth-Wing-Audiobook/B0C9J5YQZP">Listen</button>
                    </div>
                </div>
            </div>
            
            <!-- Audiobook 5 -->
            <div class="bg-white rounded-lg shadow-lg overflow-hidden audiobook-card">
                <img src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1693925132i/195275772.jpg" alt="Iron Flame" class="w-full h-64 object-cover">
                <div class="p-6">
                    <h3 class="text-2xl font-bold mb-2">Iron Flame</h3>
                    <p class="text-gray-500 mb-2">by Rebecca Yarros, narrated by Rebecca Soler</p>
                    <p class="text-gray-700 mb-4">The sequel to Fourth Wing continues Violet's journey at Basgiath War College, where she must navigate new challenges, deeper secrets, and dangerous alliances.</p>
                    <div class="flex items-center justify-between">
                        <div class="flex items-center">
                            <span class="text-gray-600 mr-2">22h 15m</span>
                            <div class="h-2 w-24 bg-gray-200 rounded-full overflow-hidden">
                                <div class="h-full bg-indigo-600 rounded-full" style="width: 0%"></div>
                            </div>
                        </div>
                        <button class="listen-button bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg" data-audio="https://www.audible.com/pd/Iron-Flame-Audiobook/B0C9J5YQZP">Listen</button>
                    </div>
                </div>
            </div>
            
            <!-- Audiobook 6 -->
            <div class="bg-white rounded-lg shadow-lg overflow-hidden audiobook-card">
                <img src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1705614870i/196833291.jpg" alt="When the Moon Hatched" class="w-full h-64 object-cover">
                <div class="p-6">
                    <h3 class="text-2xl font-bold mb-2">When the Moon Hatched</h3>
                    <p class="text-gray-500 mb-2">by Sarah A. Parker, narrated by Elizabeth Evans</p>
                    <p class="text-gray-700 mb-4">A fast-paced fantasy romance following Raeve, a rebel assassin, and Kaan Vaegor, a crown-wearing hunter, as they uncover ancient truths in a world where dragons became moons.</p>
                    <div class="flex items-center justify-between">
                        <div class="flex items-center">
                            <span class="text-gray-600 mr-2">18h 30m</span>
                            <div class="h-2 w-24 bg-gray-200 rounded-full overflow-hidden">
                                <div class="h-full bg-indigo-600 rounded-full" style="width: 0%"></div>
                            </div>
                        </div>
                        <button class="listen-button bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg" data-audio="https://www.audible.com/pd/When-the-Moon-Hatched-Audiobook/B0C9J5YQZP">Listen</button>
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
                <img id="player-cover" src="" alt="Book Cover" class="h-64 w-auto rounded-lg shadow-lg">
            </div>
            
            <div class="audio-controls flex flex-col items-center">
                <!-- Progress Bar -->
                <div class="w-full flex items-center mb-4">
                    <span id="current-time" class="text-sm mr-2">0:00</span>
                    <div class="relative flex-1 h-2 bg-gray-300 rounded-full overflow-hidden">
                        <div id="progress-bar" class="absolute h-full bg-indigo-600 rounded-full" style="width: 0%"></div>
                    </div>
                    <span id="duration" class="text-sm ml-2">0:00</span>
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
        // Audio Player Setup
        const audioPlayer = new Audio();
        let isPlaying = false;
        let currentBook = null;
        let currentTranscript = null;
        let isHighlighting = false;
        
        // Player Modal Functionality
        const listenButtons = document.querySelectorAll('.listen-button');
        const playerModal = document.getElementById('player-modal');
        const closePlayer = document.getElementById('close-player');
        const playerTitle = document.getElementById('player-title');
        const playerCover = document.getElementById('player-cover');
        
        // Sample transcript data (in a real app, this would come from the backend)
        const transcripts = {
            'The Women': [
                "Women can be heroes. When twenty-year-old nursing student Frances 'Frankie' McGrath hears these words, it is a revelation.",
                "Raised in the sun-drenched, idyllic world of Southern California and sheltered by her conservative parents, she has always prided herself on doing the right thing.",
                "But in 1965, the world is changing, and she suddenly dares to imagine a different future for herself."
            ],
            'The God of the Woods': [
                "Early morning, August 1975: a camp counselor discovers an empty bunk.",
                "Its occupant, Barbara Van Laar, has gone missing.",
                "Barbara isn't just any thirteen-year-old: she's the daughter of the family that owns the summer camp and employs most of the region's residents."
            ],
            // Add more transcripts for other books...
        };
        
        listenButtons.forEach(button => {
            button.addEventListener('click', function() {
                const audioCard = this.closest('.audiobook-card');
                const title = audioCard.querySelector('h3').textContent;
                const coverSrc = audioCard.querySelector('img').src;
                const audioSrc = this.dataset.audio;
                
                playerTitle.textContent = title;
                playerCover.src = coverSrc;
                audioPlayer.src = audioSrc;
                currentBook = audioCard;
                currentTranscript = transcripts[title] || [];
                
                // Update transcript content
                updateTranscriptContent(currentTranscript);
                
                playerModal.classList.remove('hidden');
                document.body.style.overflow = 'hidden';
                
                // Reset progress
                document.getElementById('progress-bar').style.width = '0%';
                document.getElementById('current-time').textContent = '0:00';
                isPlaying = false;
                updatePlayPauseButton();
            });
        });
        
        function updateTranscriptContent(transcript) {
            const transcriptContent = document.getElementById('transcript-content');
            transcriptContent.innerHTML = transcript.map((text, index) => `
                <p id="transcript-paragraph-${index + 1}" class="mb-3">${text}</p>
            `).join('');
        }
        
        // Playback controls
        const playPauseButton = document.getElementById('play-pause');
        const playIcon = document.getElementById('play-icon');
        const pauseIcon = document.getElementById('pause-icon');
        const rewindButton = document.getElementById('rewind');
        const fastForwardButton = document.getElementById('fast-forward');
        const progressBar = document.getElementById('progress-bar');
        const currentTimeEl = document.getElementById('current-time');
        const durationEl = document.getElementById('duration');
        
        function updatePlayPauseButton() {
            if (isPlaying) {
                playIcon.classList.add('hidden');
                pauseIcon.classList.remove('hidden');
            } else {
                playIcon.classList.remove('hidden');
                pauseIcon.classList.add('hidden');
            }
        }
        
        function formatTime(seconds) {
            const hours = Math.floor(seconds / 3600);
            const minutes = Math.floor((seconds % 3600) / 60);
            const remainingSeconds = Math.floor(seconds % 60);
            return `${hours}:${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
        }
        
        audioPlayer.addEventListener('loadedmetadata', function() {
            durationEl.textContent = formatTime(audioPlayer.duration);
        });
        
        audioPlayer.addEventListener('timeupdate', function() {
            const progress = (audioPlayer.currentTime / audioPlayer.duration) * 100;
            progressBar.style.width = `${progress}%`;
            currentTimeEl.textContent = formatTime(audioPlayer.currentTime);
            
            // Update transcript highlighting if enabled
            if (isHighlighting && currentTranscript) {
                updateTranscriptHighlight(progress);
            }
        });
        
        function updateTranscriptHighlight(progress) {
            const paragraphs = document.querySelectorAll('#transcript-content p');
            const paragraphCount = paragraphs.length;
            const currentParagraph = Math.floor((progress / 100) * paragraphCount);
            
            paragraphs.forEach((p, index) => {
                if (index === currentParagraph) {
                    p.classList.add('bg-yellow-100');
                    p.scrollIntoView({ behavior: 'smooth', block: 'center' });
                } else {
                    p.classList.remove('bg-yellow-100');
                }
            });
        }
        
        playPauseButton.addEventListener('click', function() {
            if (isPlaying) {
                audioPlayer.pause();
            } else {
                audioPlayer.play();
            }
            isPlaying = !isPlaying;
            updatePlayPauseButton();
        });
        
        rewindButton.addEventListener('click', function() {
            audioPlayer.currentTime = Math.max(0, audioPlayer.currentTime - 30);
        });
        
        fastForwardButton.addEventListener('click', function() {
            audioPlayer.currentTime = Math.min(audioPlayer.duration, audioPlayer.currentTime + 30);
        });
        
        closePlayer.addEventListener('click', function() {
            playerModal.classList.add('hidden');
            document.body.style.overflow = 'auto';
            audioPlayer.pause();
            isPlaying = false;
            updatePlayPauseButton();
            // Reset highlighting
            isHighlighting = false;
            document.getElementById('highlight-narration').classList.remove('active', 'bg-green-500', 'hover:bg-green-600');
            document.getElementById('highlight-narration').classList.add('bg-indigo-600', 'hover:bg-indigo-700');
        });
        
        // Volume Adjustment
        const volumeButton = document.getElementById('adjust-volume');
        const volumeLevel = document.getElementById('volume-level');
        let currentVolume = 100;
        
        volumeButton.addEventListener('click', function() {
            currentVolume = (currentVolume + 25) % 125;
            if (currentVolume === 0) currentVolume = 100;
            
            volumeLevel.textContent = `Volume: ${currentVolume}%`;
            audioPlayer.volume = currentVolume / 100;
        });
        
        // Playback Speed
        const playbackSpeedSelect = document.getElementById('playback-speed');
        
        playbackSpeedSelect.addEventListener('change', function() {
            audioPlayer.playbackRate = parseFloat(this.value);
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
            isHighlighting = !isHighlighting;
            this.classList.toggle('active');
            if (this.classList.contains('active')) {
                this.classList.remove('bg-indigo-600', 'hover:bg-indigo-700');
                this.classList.add('bg-green-500', 'hover:bg-green-600');
                // Start highlighting from current position
                if (currentTranscript) {
                    updateTranscriptHighlight((audioPlayer.currentTime / audioPlayer.duration) * 100);
                }
            } else {
                this.classList.remove('bg-green-500', 'hover:bg-green-600');
                this.classList.add('bg-indigo-600', 'hover:bg-indigo-700');
                // Remove highlights
                const paragraphs = document.querySelectorAll('#transcript-content p');
                paragraphs.forEach(p => p.classList.remove('bg-yellow-100'));
            }
        });

        // Font Size Controls
        const increaseFontButton = document.getElementById('increase-font');
        const decreaseFontButton = document.getElementById('decrease-font');
        const resetFontButton = document.getElementById('reset-font');
        let currentFontSize = 16; // Default font size
        const minFontSize = 12;
        const maxFontSize = 24;
        const fontSizeStep = 2;

        function updateFontSize() {
            document.documentElement.style.fontSize = `${currentFontSize}px`;
            // Update transcript paragraphs
            const paragraphs = document.querySelectorAll('#transcript-content p');
            paragraphs.forEach(p => {
                p.style.fontSize = `${currentFontSize}px`;
            });
            // Store preference
            localStorage.setItem('fontSize', currentFontSize);
        }

        increaseFontButton.addEventListener('click', function() {
            if (currentFontSize < maxFontSize) {
                currentFontSize += fontSizeStep;
                updateFontSize();
            }
        });

        decreaseFontButton.addEventListener('click', function() {
            if (currentFontSize > minFontSize) {
                currentFontSize -= fontSizeStep;
                updateFontSize();
            }
        });

        resetFontButton.addEventListener('click', function() {
            currentFontSize = 16;
            updateFontSize();
        });

        // High Contrast Mode
        const highContrastButton = document.getElementById('high-contrast');
        let isHighContrast = false;

        function toggleHighContrast() {
            isHighContrast = !isHighContrast;
            document.body.classList.toggle('high-contrast');
            
            // Update button appearance
            highContrastButton.classList.toggle('active');
            if (isHighContrast) {
                highContrastButton.classList.remove('bg-indigo-600', 'hover:bg-indigo-700');
                highContrastButton.classList.add('bg-green-500', 'hover:bg-green-600');
            } else {
                highContrastButton.classList.remove('bg-green-500', 'hover:bg-green-600');
                highContrastButton.classList.add('bg-indigo-600', 'hover:bg-indigo-700');
            }

            // Store preference
            localStorage.setItem('highContrast', isHighContrast);
        }

        highContrastButton.addEventListener('click', toggleHighContrast);

        // Load saved preferences
        function loadPreferences() {
            // Load font size
            const savedFontSize = localStorage.getItem('fontSize');
            if (savedFontSize) {
                currentFontSize = parseInt(savedFontSize);
                updateFontSize();
            }

            // Load high contrast mode
            const savedHighContrast = localStorage.getItem('highContrast');
            if (savedHighContrast === 'true') {
                isHighContrast = true;
                document.body.classList.add('high-contrast');
                highContrastButton.classList.add('active');
                highContrastButton.classList.remove('bg-indigo-600', 'hover:bg-indigo-700');
                highContrastButton.classList.add('bg-green-500', 'hover:bg-green-600');
            }
        }

        // Add high contrast styles
        const style = document.createElement('style');
        style.textContent = `
            .high-contrast {
                --bg-primary: #000000;
                --text-primary: #ffffff;
                --bg-secondary: #1a1a1a;
                --text-secondary: #ffffff;
                --accent-color: #ffff00;
            }

            .high-contrast .bg-white {
                background-color: var(--bg-secondary) !important;
            }

            .high-contrast .text-gray-700,
            .high-contrast .text-gray-500,
            .high-contrast .text-gray-600 {
                color: var(--text-secondary) !important;
            }

            .high-contrast .bg-indigo-600 {
                background-color: var(--accent-color) !important;
            }

            .high-contrast .hover\:bg-indigo-700:hover {
                background-color: #e6e600 !important;
            }

            .high-contrast .bg-yellow-100 {
                background-color: #ffff00 !important;
                color: #000000 !important;
            }

            .high-contrast .bg-gray-100 {
                background-color: #1a1a1a !important;
            }

            .high-contrast .bg-gray-200 {
                background-color: #333333 !important;
            }

            .high-contrast .hover\:bg-gray-300:hover {
                background-color: #4d4d4d !important;
            }

            .high-contrast .bg-gray-300 {
                background-color: #4d4d4d !important;
            }

            .high-contrast .text-white {
                color: #000000 !important;
            }

            .high-contrast .hover\:text-indigo-700:hover {
                color: #000000 !important;
            }
        `;
        document.head.appendChild(style);

        // Load preferences when page loads
        loadPreferences();
    });
</script> 