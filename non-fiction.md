---
layout: base
title: Non-Fiction Books
search_exclude: true
menu: nav/home.html
---

<section class="py-12 bg-gray-100 min-h-screen">
    <div class="container mx-auto px-4">
        <h1 class="text-5xl font-bold text-center mb-12 text-indigo-700">Non-Fiction Books</h1>
        
        <!-- Reading Assistive Technologies Toolbar -->
        <div class="bg-gray-800 text-white p-4 rounded-lg mb-8 shadow-lg">
            <h2 class="text-2xl font-bold mb-4">Reading Assistive Tools</h2>
            <div class="flex flex-wrap gap-4">
                <button id="text-to-speech" class="bg-indigo-600 hover:bg-indigo-700 px-4 py-2 rounded-lg flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                    </svg>
                    Text-to-Speech
                </button>
                <div class="flex items-center">
                    <label for="font-size" class="mr-2">Font Size:</label>
                    <select id="font-size" class="bg-gray-700 rounded px-2 py-1">
                        <option value="normal">Normal</option>
                        <option value="large">Large</option>
                        <option value="x-large">Extra Large</option>
                    </select>
                </div>
                <div class="flex items-center">
                    <label for="font-family" class="mr-2">Font:</label>
                    <select id="font-family" class="bg-gray-700 rounded px-2 py-1">
                        <option value="default">Default</option>
                        <option value="dyslexic">OpenDyslexic</option>
                        <option value="sans-serif">Sans-serif</option>
                    </select>
                </div>
                <button id="high-contrast" class="bg-indigo-600 hover:bg-indigo-700 px-4 py-2 rounded-lg flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                    </svg>
                    High Contrast
                </button>
                <button id="vocabulary" class="bg-indigo-600 hover:bg-indigo-700 px-4 py-2 rounded-lg flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                    Vocabulary Helper
                </button>
            </div>
        </div>
        
        <!-- Book List -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <!-- Book 1 -->
            <div class="bg-white rounded-lg shadow-lg overflow-hidden book-card">
                <img src="images/nonfiction-book1.jpg" alt="Thinking, Fast and Slow" class="w-full h-64 object-cover">
                <div class="p-6">
                    <h3 class="text-2xl font-bold mb-2">Thinking, Fast and Slow</h3>
                    <p class="text-gray-500 mb-2">by Daniel Kahneman</p>
                    <p class="text-gray-700 mb-4">An exploration of the two systems that drive the way we think—one fast, intuitive, and emotional; the other slower, more deliberative, and more logical.</p>
                    <div class="flex justify-between">
                        <button class="read-sample bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg">Read Sample</button>
                        <button class="add-to-list bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded-lg">+ Reading List</button>
                    </div>
                </div>
            </div>
            
            <!-- Book 2 -->
            <div class="bg-white rounded-lg shadow-lg overflow-hidden book-card">
                <img src="images/nonfiction-book2.jpg" alt="Sapiens: A Brief History of Humankind" class="w-full h-64 object-cover">
                <div class="p-6">
                    <h3 class="text-2xl font-bold mb-2">Sapiens: A Brief History of Humankind</h3>
                    <p class="text-gray-500 mb-2">by Yuval Noah Harari</p>
                    <p class="text-gray-700 mb-4">A groundbreaking narrative of humanity's creation and evolution that explores how biology and history have defined us.</p>
                    <div class="flex justify-between">
                        <button class="read-sample bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg">Read Sample</button>
                        <button class="add-to-list bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded-lg">+ Reading List</button>
                    </div>
                </div>
            </div>
            
            <!-- Book 3 -->
            <div class="bg-white rounded-lg shadow-lg overflow-hidden book-card">
                <img src="images/nonfiction-book3.jpg" alt="Atomic Habits" class="w-full h-64 object-cover">
                <div class="p-6">
                    <h3 class="text-2xl font-bold mb-2">Atomic Habits</h3>
                    <p class="text-gray-500 mb-2">by James Clear</p>
                    <p class="text-gray-700 mb-4">Practical strategies that teach how to form good habits, break bad ones, and master the tiny behaviors that lead to remarkable results.</p>
                    <div class="flex justify-between">
                        <button class="read-sample bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg">Read Sample</button>
                        <button class="add-to-list bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded-lg">+ Reading List</button>
                    </div>
                </div>
            </div>
            
            <!-- Book 4 -->
            <div class="bg-white rounded-lg shadow-lg overflow-hidden book-card">
                <img src="images/nonfiction-book4.jpg" alt="The Power of Habit" class="w-full h-64 object-cover">
                <div class="p-6">
                    <h3 class="text-2xl font-bold mb-2">The Power of Habit</h3>
                    <p class="text-gray-500 mb-2">by Charles Duhigg</p>
                    <p class="text-gray-700 mb-4">An examination of the science behind habit creation and reformation, explaining why habits exist and how they can be changed.</p>
                    <div class="flex justify-between">
                        <button class="read-sample bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg">Read Sample</button>
                        <button class="add-to-list bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded-lg">+ Reading List</button>
                    </div>
                </div>
            </div>
            
            <!-- Book 5 -->
            <div class="bg-white rounded-lg shadow-lg overflow-hidden book-card">
                <img src="images/nonfiction-book5.jpg" alt="Quiet: The Power of Introverts" class="w-full h-64 object-cover">
                <div class="p-6">
                    <h3 class="text-2xl font-bold mb-2">Quiet: The Power of Introverts</h3>
                    <p class="text-gray-500 mb-2">by Susan Cain</p>
                    <p class="text-gray-700 mb-4">An exploration of how Western society undervalues introverts and how much we lose in doing so, showing the dramatic ways introverts think differently.</p>
                    <div class="flex justify-between">
                        <button class="read-sample bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg">Read Sample</button>
                        <button class="add-to-list bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded-lg">+ Reading List</button>
                    </div>
                </div>
            </div>
            
            <!-- Book 6 -->
            <div class="bg-white rounded-lg shadow-lg overflow-hidden book-card">
                <img src="images/nonfiction-book6.jpg" alt="A Brief History of Time" class="w-full h-64 object-cover">
                <div class="p-6">
                    <h3 class="text-2xl font-bold mb-2">A Brief History of Time</h3>
                    <p class="text-gray-500 mb-2">by Stephen Hawking</p>
                    <p class="text-gray-700 mb-4">A landmark volume in science writing that explores fundamental questions about the universe and our existence, from the Big Bang to black holes.</p>
                    <div class="flex justify-between">
                        <button class="read-sample bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg">Read Sample</button>
                        <button class="add-to-list bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded-lg">+ Reading List</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- Reading Sample Modal -->
<div id="reading-modal" class="fixed inset-0 bg-black bg-opacity-75 hidden flex items-center justify-center z-50">
    <div class="bg-white rounded-lg w-full max-w-4xl max-h-screen overflow-auto">
        <div class="sticky top-0 bg-white p-4 border-b flex justify-between items-center">
            <h2 class="text-2xl font-bold" id="modal-title">Book Title</h2>
            <button id="close-modal" class="text-2xl">&times;</button>
        </div>
        <div class="p-6" id="book-content">
            <p class="sample-text mb-4">
                The premise of this book is that we can learn to make better decisions if we understand how our minds work. In thinking about thinking, I find it helpful to draw a distinction between two types of mental processes: System 1 and System 2.
            </p>
            <p class="sample-text mb-4">
                <strong>System 1</strong> operates automatically and quickly, with little or no effort and no sense of voluntary control. Examples of System 1 activities include detecting that one object is more distant than another, orienting to a sudden sound, completing the phrase "bread and…", or reading words on large billboards.
            </p>
            <p class="sample-text mb-4">
                <strong>System 2</strong> allocates attention to the effortful mental activities that demand it, including complex computations. The operations of System 2 are often associated with the subjective experience of agency, choice, and concentration. Examples of System 2 activities include focusing on the voice of a particular person in a crowded and noisy room, searching memory to identify a surprising sound, or checking the validity of a complex logical argument.
            </p>
            <p class="sample-text mb-4">
                In the story I will tell, Systems 1 and 2 are both active whenever we are awake. System 1 runs automatically and System 2 is normally in a comfortable low-effort mode, in which only a fraction of its capacity is engaged. System 1 continuously generates suggestions for System 2: impressions, intuitions, intentions, and feelings. If endorsed by System 2, impressions and intuitions turn into beliefs, and impulses turn into voluntary actions.
            </p>
            <p class="sample-text mb-4">
                When all goes smoothly, which is most of the time, System 2 adopts the suggestions of System 1 with little or no modification. You generally believe your impressions and act on your desires, and that is fine—usually.
            </p>
            <p class="sample-text mb-4">
                When System 1 runs into difficulty, it calls on System 2 to support more detailed and specific processing that may solve the problem of the moment. System 2 is mobilized when a question arises for which System 1 does not offer an answer, as probably happened to you when you encountered the multiplication problem 17 × 24. You can also feel a surge of conscious attention whenever you are surprised.
            </p>
        </div>
    </div>
</div>

<script>
    document.addEventListener('DOMContentLoaded', function() {
        // Text-to-Speech functionality
        const ttsButton = document.getElementById('text-to-speech');
        let speaking = false;
        let utterance;
        
        ttsButton.addEventListener('click', function() {
            if (!speaking) {
                const text = document.querySelector('.sample-text')?.textContent || "No text available for reading.";
                
                utterance = new SpeechSynthesisUtterance(text);
                utterance.rate = 0.9; // Slightly slower for better comprehension
                
                window.speechSynthesis.speak(utterance);
                ttsButton.innerHTML = `
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Stop Reading
                `;
                speaking = true;
            } else {
                window.speechSynthesis.cancel();
                ttsButton.innerHTML = `
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                    </svg>
                    Text-to-Speech
                `;
                speaking = false;
            }
        });
        
        // Font size adjustment
        const fontSizeSelect = document.getElementById('font-size');
        fontSizeSelect.addEventListener('change', function() {
            const bookContent = document.getElementById('book-content');
            switch(this.value) {
                case 'normal':
                    bookContent.style.fontSize = '1rem';
                    break;
                case 'large':
                    bookContent.style.fontSize = '1.25rem';
                    break;
                case 'x-large':
                    bookContent.style.fontSize = '1.5rem';
                    break;
            }
        });
        
        // Font family adjustment
        const fontFamilySelect = document.getElementById('font-family');
        const head = document.head || document.getElementsByTagName('head')[0];
        
        fontFamilySelect.addEventListener('change', function() {
            const bookContent = document.getElementById('book-content');
            switch(this.value) {
                case 'default':
                    bookContent.style.fontFamily = 'inherit';
                    break;
                case 'dyslexic':
                    // Add OpenDyslexic font if not already added
                    const dyslexicFont = document.getElementById('dyslexic-font');
                    if (!dyslexicFont) {
                        const link = document.createElement('link');
                        link.id = 'dyslexic-font';
                        link.rel = 'stylesheet';
                        link.href = 'https://fonts.cdnfonts.com/css/opendyslexic';
                        head.appendChild(link);
                    }
                    bookContent.style.fontFamily = 'OpenDyslexic, sans-serif';
                    break;
                case 'sans-serif':
                    bookContent.style.fontFamily = 'Arial, Helvetica, sans-serif';
                    break;
            }
        });
        
        // High contrast mode
        const highContrastButton = document.getElementById('high-contrast');
        let highContrastMode = false;
        
        highContrastButton.addEventListener('click', function() {
            const bookContent = document.getElementById('book-content');
            highContrastMode = !highContrastMode;
            
            if (highContrastMode) {
                bookContent.style.backgroundColor = '#000';
                bookContent.style.color = '#fff';
                highContrastButton.classList.remove('bg-indigo-600', 'hover:bg-indigo-700');
                highContrastButton.classList.add('bg-yellow-500', 'hover:bg-yellow-600');
            } else {
                bookContent.style.backgroundColor = '#fff';
                bookContent.style.color = '#000';
                highContrastButton.classList.remove('bg-yellow-500', 'hover:bg-yellow-600');
                highContrastButton.classList.add('bg-indigo-600', 'hover:bg-indigo-700');
            }
        });
        
        // Vocabulary helper functionality
        const vocabularyButton = document.getElementById('vocabulary');
        let vocabActive = false;
        
        vocabularyButton.addEventListener('click', function() {
            const bookContent = document.getElementById('book-content');
            vocabActive = !vocabActive;
            
            if (vocabActive) {
                // Add special styling to key terms
                const terms = {
                    'System 1': 'The fast, intuitive, and emotional part of the brain that operates automatically with little conscious effort.',
                    'System 2': 'The slow, deliberate, and logical part of the brain that requires conscious attention and effort.',
                    'intuitions': 'Immediate insights or understandings without conscious reasoning.',
                    'impressions': 'Initial thoughts or feelings about something before detailed analysis.',
                    'voluntary actions': 'Actions that are deliberately chosen rather than automatic responses.'
                };
                
                // Store original content for reverting
                const originalHTML = bookContent.innerHTML;
                bookContent.setAttribute('data-original-html', originalHTML);
                
                // Replace terms with highlighted and interactive spans
                let newHTML = originalHTML;
                for (const [term, definition] of Object.entries(terms)) {
                    const regex = new RegExp(`\\b${term}\\b`, 'g');
                    newHTML = newHTML.replace(regex, `<span class="vocab-term bg-yellow-100 px-1 rounded cursor-help" title="${definition}">${term}</span>`);
                }
                bookContent.innerHTML = newHTML;
                
                // Add hover tooltips
                const vocabTerms = document.querySelectorAll('.vocab-term');
                vocabTerms.forEach(term => {
                    term.addEventListener('click', function(e) {
                        const definition = this.getAttribute('title');
                        
                        // Create or update tooltip
                        let tooltip = document.getElementById('vocab-tooltip');
                        if (!tooltip) {
                            tooltip = document.createElement('div');
                            tooltip.id = 'vocab-tooltip';
                            tooltip.className = 'fixed bg-indigo-900 text-white p-3 rounded-lg shadow-lg z-50 max-w-xs';
                            document.body.appendChild(tooltip);
                        }
                        
                        // Position tooltip near the term
                        tooltip.textContent = definition;
                        tooltip.style.top = `${e.pageY + 10}px`;
                        tooltip.style.left = `${e.pageX + 10}px`;
                        tooltip.style.display = 'block';
                        
                        // Hide tooltip when clicking elsewhere
                        const hideTooltip = function() {
                            tooltip.style.display = 'none';
                            document.removeEventListener('click', hideTooltip);
                        };
                        
                        setTimeout(() => {
                            document.addEventListener('click', hideTooltip);
                        }, 100);
                        
                        e.stopPropagation();
                    });
                });
                
                vocabularyButton.classList.remove('bg-indigo-600', 'hover:bg-indigo-700');
                vocabularyButton.classList.add('bg-green-500', 'hover:bg-green-600');
                vocabularyButton.innerHTML = `
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    Disable Vocabulary Helper
                `;
            } else {
                // Restore original content
                const originalHTML = bookContent.getAttribute('data-original-html');
                bookContent.innerHTML = originalHTML;
                
                // Remove any lingering tooltips
                const tooltip = document.getElementById('vocab-tooltip');
                if (tooltip) {
                    tooltip.remove();
                }
                
                vocabularyButton.classList.remove('bg-green-500', 'hover:bg-green-600');
                vocabularyButton.classList.add('bg-indigo-600', 'hover:bg-indigo-700');
                vocabularyButton.innerHTML = `
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                    Vocabulary Helper
                `;
            }
        });
        
        // Modal functionality
        const readSampleButtons = document.querySelectorAll('.read-sample');
        const modal = document.getElementById('reading-modal');
        const closeModal = document.getElementById('close-modal');
        const modalTitle = document.getElementById('modal-title');
        
        readSampleButtons.forEach(button => {
            button.addEventListener('click', function() {
                const bookCard = this.closest('.book-card');
                const title = bookCard.querySelector('h3').textContent;
                modalTitle.textContent = title;
                modal.classList.remove('hidden');
                document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
            });
        });
        
        closeModal.addEventListener('click', function() {
            modal.classList.add('hidden');
            document.body.style.overflow = 'auto'; // Re-enable scrolling
            
            // Stop text-to-speech if active
            if (speaking) {
                window.speechSynthesis.cancel();
                ttsButton.innerHTML = `
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                    </svg>
                    Text-to-Speech
                `;
                speaking = false;
            }
        });
    });
</script> 