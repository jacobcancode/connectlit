---
layout: base
title: Fiction Books
search_exclude: true
menu: nav/home.html
---

<section class="py-12 bg-gray-100 min-h-screen">
    <div class="container mx-auto px-4">
        <h1 class="text-5xl font-bold text-center mb-12 text-indigo-700">Fiction Books</h1>
        
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
                <button id="summarize" class="bg-indigo-600 hover:bg-indigo-700 px-4 py-2 rounded-lg flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    Summarize
                </button>
            </div>
        </div>
        
        <!-- Book List -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <!-- Book 1 -->
            <div class="bg-white rounded-lg shadow-lg overflow-hidden book-card">
                <img src="images/fiction-book1.jpg" alt="The Night Travelers" class="w-full h-64 object-cover">
                <div class="p-6">
                    <h3 class="text-2xl font-bold mb-2">The Night Travelers</h3>
                    <p class="text-gray-500 mb-2">by Rebecca Solnit</p>
                    <p class="text-gray-700 mb-4">A captivating tale of mystery and adventure that follows a group of travelers on a journey through a magical world that only appears at night.</p>
                    <div class="flex justify-between">
                        <button class="read-sample bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg">Read Sample</button>
                        <button class="add-to-list bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded-lg">+ Reading List</button>
                    </div>
                </div>
            </div>
            
            <!-- Book 2 -->
            <div class="bg-white rounded-lg shadow-lg overflow-hidden book-card">
                <img src="images/fiction-book2.jpg" alt="The Echo of Old Books" class="w-full h-64 object-cover">
                <div class="p-6">
                    <h3 class="text-2xl font-bold mb-2">The Echo of Old Books</h3>
                    <p class="text-gray-500 mb-2">by Barbara Davis</p>
                    <p class="text-gray-700 mb-4">A rare book dealer discovers that some volumes hold more stories than those printed on their pages, including secrets about her own past.</p>
                    <div class="flex justify-between">
                        <button class="read-sample bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg">Read Sample</button>
                        <button class="add-to-list bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded-lg">+ Reading List</button>
                    </div>
                </div>
            </div>
            
            <!-- Book 3 -->
            <div class="bg-white rounded-lg shadow-lg overflow-hidden book-card">
                <img src="images/fiction-book3.jpg" alt="The Invisible Library" class="w-full h-64 object-cover">
                <div class="p-6">
                    <h3 class="text-2xl font-bold mb-2">The Invisible Library</h3>
                    <p class="text-gray-500 mb-2">by Genevieve Cogman</p>
                    <p class="text-gray-700 mb-4">Professional spy Irene works for a mysterious library that collects important fiction from different realities, stepping into a tangled web of danger.</p>
                    <div class="flex justify-between">
                        <button class="read-sample bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg">Read Sample</button>
                        <button class="add-to-list bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded-lg">+ Reading List</button>
                    </div>
                </div>
            </div>
            
            <!-- Book 4 -->
            <div class="bg-white rounded-lg shadow-lg overflow-hidden book-card">
                <img src="images/fiction-book4.jpg" alt="The Starless Sea" class="w-full h-64 object-cover">
                <div class="p-6">
                    <h3 class="text-2xl font-bold mb-2">The Starless Sea</h3>
                    <p class="text-gray-500 mb-2">by Erin Morgenstern</p>
                    <p class="text-gray-700 mb-4">Graduate student Zachary discovers a mysterious book in the library that contains stories about himself, leading him to an ancient underground library.</p>
                    <div class="flex justify-between">
                        <button class="read-sample bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg">Read Sample</button>
                        <button class="add-to-list bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded-lg">+ Reading List</button>
                    </div>
                </div>
            </div>
            
            <!-- Book 5 -->
            <div class="bg-white rounded-lg shadow-lg overflow-hidden book-card">
                <img src="images/fiction-book5.jpg" alt="The Book of Lost Names" class="w-full h-64 object-cover">
                <div class="p-6">
                    <h3 class="text-2xl font-bold mb-2">The Book of Lost Names</h3>
                    <p class="text-gray-500 mb-2">by Kristin Harmel</p>
                    <p class="text-gray-700 mb-4">A young woman helps Jewish children escape Nazi-occupied France by forging identity documents, secretly preserving their real names in a coded book.</p>
                    <div class="flex justify-between">
                        <button class="read-sample bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg">Read Sample</button>
                        <button class="add-to-list bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded-lg">+ Reading List</button>
                    </div>
                </div>
            </div>
            
            <!-- Book 6 -->
            <div class="bg-white rounded-lg shadow-lg overflow-hidden book-card">
                <img src="images/fiction-book6.jpg" alt="The Library of the Unwritten" class="w-full h-64 object-cover">
                <div class="p-6">
                    <h3 class="text-2xl font-bold mb-2">The Library of the Unwritten</h3>
                    <p class="text-gray-500 mb-2">by A.J. Hackwith</p>
                    <p class="text-gray-700 mb-4">The librarian of Hell's library must track down a missing character from an unfinished book who has escaped into the human world.</p>
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
                The library was not what Zachary expected. It was smaller than he'd imagined, tucked away in a forgotten corner of the university. The shelves stood in neat rows, their wooden frames gleaming with polish. The smell of old paper and binding glue hung in the air.
            </p>
            <p class="sample-text mb-4">
                He moved quietly, his footsteps muffled by the carpet. The librarian, an elderly woman with silver hair, nodded to him from behind her desk. Zachary nodded back and continued deeper into the stacks.
            </p>
            <p class="sample-text mb-4">
                What he sought was specific—a book he had only heard about in whispers. A rare edition, they said, with a bee on its cover. He wasn't sure why he was so drawn to it, but something about the description had caught his attention and wouldn't let go.
            </p>
            <p class="sample-text mb-4">
                The rare books section was cordoned off with a velvet rope. Zachary hesitated, then ducked under it when he was sure no one was watching. The shelves here were older, the books more worn. His fingers trailed along the spines, feeling the texture of leather and cloth.
            </p>
            <p class="sample-text mb-4">
                And then he saw it—tucked between two larger volumes, a slim book with a faded golden bee embossed on its spine. His heart raced as he carefully pulled it from the shelf.
            </p>
            <p class="sample-text mb-4">
                The moment his fingers touched the cover, he felt a strange sensation, as if the book was humming with its own energy. Zachary quickly looked around, but he was alone among the shelves. With careful movements, he opened the book to a random page.
            </p>
            <p class="sample-text mb-4">
                What he read made his blood run cold. There, in precise black lettering, was a story about a boy finding a painted door in an alley. A door he chose not to open. A choice Zachary had made himself, years ago. A moment no one else could possibly know about.
            </p>
            <p class="sample-text mb-4">
                His hands trembled as he turned to the next page, wondering what other secrets this mysterious book might contain.
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
        
        // Summarize text functionality
        const summarizeButton = document.getElementById('summarize');
        let originalText = '';
        let summarized = false;
        
        summarizeButton.addEventListener('click', function() {
            const bookContent = document.getElementById('book-content');
            
            if (!summarized) {
                // Store original text
                originalText = bookContent.innerHTML;
                
                // Replace with summary (in a real implementation, this would call an API)
                bookContent.innerHTML = `
                    <div class="bg-indigo-100 p-4 rounded-lg mb-4">
                        <h3 class="font-bold text-lg mb-2">Summary</h3>
                        <p>Zachary finds a mysterious book in a library that contains a story about his past that no one else should know. When he touches the book, he feels a strange energy from it. The book describes a moment from his childhood when he chose not to open a painted door in an alley.</p>
                    </div>
                    <div class="bg-yellow-100 p-4 rounded-lg mb-4">
                        <h3 class="font-bold text-lg mb-2">Key Concepts</h3>
                        <ul class="list-disc pl-5">
                            <li>Mysterious book with a bee on the cover</li>
                            <li>Library with rare books section</li>
                            <li>Book containing personal secrets</li>
                            <li>A painted door not opened</li>
                        </ul>
                    </div>
                `;
                
                summarizeButton.innerHTML = `
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                    </svg>
                    Show Full Text
                `;
                summarized = true;
            } else {
                // Restore original text
                bookContent.innerHTML = originalText;
                
                summarizeButton.innerHTML = `
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    Summarize
                `;
                summarized = false;
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