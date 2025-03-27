---
layout: base
title: Book Discussions
search_exclude: true
menu: nav/home.html
permalink: /discussions
---

<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Book Discussions</title>
    <style>
        * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
        }

        body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f4;
        }

        .accessibility-toolbar {
            background-color: #2c3e50;
            color: white;
            padding: 15px;
            margin-bottom: 20px;
            border-radius: 8px;
            box-shadow: 0 2px 10px rgba(0,0,0,0.1);
        }

        .toolbar-controls {
            display: flex;
            flex-wrap: wrap;
            gap: 10px;
        }

        .toolbar-controls button, .toolbar-controls select {
            background-color: #3498db;
            color: white;
            border: none;
            padding: 8px 15px;
            border-radius: 5px;
            cursor: pointer;
            font-size: 14px;
            transition: background-color 0.2s;
        }

        .toolbar-controls button:hover {
            background-color: #2980b9;
        }

        .toolbar-controls select {
            background-color: #2c3e50;
        }

        .chat-container {
            max-width: 800px;
            margin: 40px auto;
            background-color: #fff;
            border-radius: 8px;
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
            display: flex;
            flex-direction: column;
            height: 80vh;
            overflow: hidden;
        }

        .discussion-header {
            background-color: #4a6da7;
            color: white;
            padding: 15px 20px;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        .book-selector {
            display: flex;
            align-items: center;
        }

        .book-selector label {
            margin-right: 10px;
            font-weight: bold;
        }

        .book-selector select {
            padding: 8px;
            border-radius: 5px;
            border: none;
            font-size: 14px;
        }

        .chat-box {
            flex: 1;
            padding: 20px;
            overflow-y: auto;
        }

        .message-box {
            position: relative;
            margin-bottom: 15px;
            max-width: 70%;
            padding: 10px 15px;
            border-radius: 8px;
            word-wrap: break-word;
        }

        .sent-message {
            background-color: #e3f2fd;
            margin-left: auto;
        }

        .received-message {
            background-color: #f5f5f5;
            margin-right: auto;
        }

        .button-container {
            position: absolute;
            top: 5px;
            right: 10px;
            display: flex;
            gap: 5px;
        }

        .edit-button,
        .delete-button,
        .read-aloud-button {
            background: none;
            border: none;
            color: #007bff;
            cursor: pointer;
            font-size: 0.85em;
            padding: 2px 5px;
            border-radius: 3px;
            transition: background-color 0.2s, color 0.2s;
        }

        .edit-button:hover,
        .delete-button:hover,
        .read-aloud-button:hover {
            background-color: #e2e6ea;
            color: #0056b3;
        }

        #chatForm {
            display: flex;
            padding: 15px;
            border-top: 1px solid #ddd;
        }

        #messageInput {
            flex: 1;
            border: 1px solid #ccc;
            border-radius: 5px;
            padding: 10px;
            margin-right: 10px;
            font-size: 1em;
        }

        .send-button {
            border: none;
            border-radius: 5px;
            background-color: #4a6da7;
            color: white;
            padding: 10px 20px;
            cursor: pointer;
            font-size: 1em;
            transition: background-color 0.3s;
        }

        .send-button:hover {
            background-color: #3a5a99;
        }

        .book-badge {
            display: inline-block;
            font-size: 0.75em;
            background-color: #6c757d;
            color: white;
            padding: 2px 5px;
            border-radius: 3px;
            margin-left: 5px;
        }

        /* For high contrast mode */
        .high-contrast {
            background-color: #000 !important;
            color: #fff !important;
        }

        .high-contrast .chat-container {
            background-color: #000;
            border: 1px solid #fff;
        }

        .high-contrast .message-box {
            background-color: #333 !important;
            color: #fff !important;
            border: 1px solid #fff;
        }

        .high-contrast .button-container button {
            color: #ffff00;
        }

        .high-contrast #messageInput {
            background-color: #000;
            color: #fff;
            border: 1px solid #fff;
        }
    </style>
</head>
<body>
    <div class="container mx-auto px-4 py-8">
        <h1 class="text-4xl font-bold text-center mb-8 text-indigo-700">Book Discussion Forum</h1>
        
        <!-- Accessibility Toolbar -->
        <div class="accessibility-toolbar">
            <h2 class="text-xl font-bold mb-3">Accessibility Options</h2>
            <div class="toolbar-controls">
                <button id="font-size-increase">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 inline-block mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                    Increase Font
                </button>
                <button id="font-size-decrease">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 inline-block mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 12H6" />
                    </svg>
                    Decrease Font
                </button>
                <button id="toggle-high-contrast">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 inline-block mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                    </svg>
                    Toggle High Contrast
                </button>
                <select id="font-family-selector">
                    <option value="default">Default Font</option>
                    <option value="dyslexic">OpenDyslexic Font</option>
                    <option value="sans-serif">Sans-Serif</option>
                    <option value="serif">Serif</option>
                </select>
            </div>
        </div>

        <div class="chat-container">
            <div class="discussion-header">
                <h2>Book Discussions</h2>
                <div class="book-selector">
                    <label for="book-select">Current Book:</label>
                    <select id="book-select">
                        <option value="all">All Books</option>
                        <option value="dune">Dune</option>
                        <option value="project-hail-mary">Project Hail Mary</option>
                        <option value="invisible-library">The Invisible Library</option>
                        <option value="educated">Educated</option>
                        <option value="atomic-habits">Atomic Habits</option>
                    </select>
                </div>
            </div>
            <div class="chat-box" id="chatBox">
                <!-- Example messages with book tags -->
                <div class="message-box received-message">
                    <div class="button-container">
                        <button class="read-aloud-button">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                            </svg>
                        </button>
                    </div>
                    <strong>BookLover42</strong> <span class="book-badge">Dune</span><br>
                    I just finished reading Dune and I'm completely blown away by Frank Herbert's world-building. The ecological aspects of Arrakis are so detailed!
                </div>

                <div class="message-box sent-message">
                    <div class="button-container">
                        <button class="edit-button">Edit</button>
                        <button class="delete-button">Delete</button>
                        <button class="read-aloud-button">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                            </svg>
                        </button>
                    </div>
                    <strong>You</strong> <span class="book-badge">Dune</span><br>
                    I agree! The way Herbert connects the spice, the sandworms, and the entire ecosystem is incredible. Have you read any of the sequels?
                </div>

                <div class="message-box received-message">
                    <div class="button-container">
                        <button class="read-aloud-button">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                            </svg>
                        </button>
                    </div>
                    <strong>ScienceFictionFan</strong> <span class="book-badge">Project Hail Mary</span><br>
                    Has anyone read Project Hail Mary by Andy Weir? The scientific problem-solving is similar to The Martian but with much higher stakes!
                </div>

                <div class="message-box received-message">
                    <div class="button-container">
                        <button class="read-aloud-button">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                            </svg>
                        </button>
                    </div>
                    <strong>BookwormEmily</strong> <span class="book-badge">Dune</span><br>
                    @BookLover42 I'm currently on God Emperor of Dune (book 4) and it gets even more philosophical. The first book is still my favorite though!
                </div>

                <div class="message-box received-message">
                    <div class="button-container">
                        <button class="read-aloud-button">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                            </svg>
                        </button>
                    </div>
                    <strong>ReadingRainbow</strong> <span class="book-badge">Project Hail Mary</span><br>
                    @ScienceFictionFan Yes! Project Hail Mary was amazing! I loved the character Rocky and how they had to overcome the language barrier. The audiobook narration is excellent too.
                </div>
            </div>
            <form id="chatForm">
                <input type="text" id="messageInput" placeholder="Type your message..." required>
                <button type="submit" class="send-button">Send</button>
            </form>
        </div>
    </div>

    <script>
        document.addEventListener('DOMContentLoaded', function() {
            // Accessibility Features
            const body = document.body;
            const messages = document.querySelectorAll('.message-box');
            const chatBox = document.getElementById('chatBox');
            const fontSizeIncrease = document.getElementById('font-size-increase');
            const fontSizeDecrease = document.getElementById('font-size-decrease');
            const toggleHighContrast = document.getElementById('toggle-high-contrast');
            const fontFamilySelector = document.getElementById('font-family-selector');
            const bookSelect = document.getElementById('book-select');
            const readAloudButtons = document.querySelectorAll('.read-aloud-button');
            
            // Current font size as a percentage
            let currentFontSize = 100;
            
            // Increase font size
            fontSizeIncrease.addEventListener('click', function() {
                if (currentFontSize < 200) {
                    currentFontSize += 10;
                    chatBox.style.fontSize = currentFontSize + '%';
                }
            });
            
            // Decrease font size
            fontSizeDecrease.addEventListener('click', function() {
                if (currentFontSize > 70) {
                    currentFontSize -= 10;
                    chatBox.style.fontSize = currentFontSize + '%';
                }
            });
            
            // Toggle high contrast mode
            toggleHighContrast.addEventListener('click', function() {
                body.classList.toggle('high-contrast');
            });
            
            // Font family selection
            fontFamilySelector.addEventListener('change', function() {
                const fontFamily = this.value;
                
                if (fontFamily === 'dyslexic') {
                    // Add OpenDyslexic font if not already added
                    if (!document.getElementById('dyslexic-font')) {
                        const fontLink = document.createElement('link');
                        fontLink.id = 'dyslexic-font';
                        fontLink.rel = 'stylesheet';
                        fontLink.href = 'https://fonts.cdnfonts.com/css/opendyslexic';
                        document.head.appendChild(fontLink);
                    }
                    chatBox.style.fontFamily = 'OpenDyslexic, sans-serif';
                } else if (fontFamily === 'sans-serif') {
                    chatBox.style.fontFamily = 'Arial, Helvetica, sans-serif';
                } else if (fontFamily === 'serif') {
                    chatBox.style.fontFamily = 'Georgia, Times New Roman, serif';
                } else {
                    chatBox.style.fontFamily = 'inherit';
                }
            });
            
            // Filter messages by book
            bookSelect.addEventListener('change', function() {
                const selectedBook = this.value;
                
                messages.forEach(message => {
                    const bookBadge = message.querySelector('.book-badge');
                    if (bookBadge) {
                        if (selectedBook === 'all' || bookBadge.textContent.toLowerCase() === selectedBook) {
                            message.style.display = 'block';
                        } else {
                            message.style.display = 'none';
                        }
                    }
                });
                
                // Scroll to bottom after filtering
                chatBox.scrollTop = chatBox.scrollHeight;
            });
            
            // Text-to-speech functionality
            readAloudButtons.forEach(button => {
                button.addEventListener('click', function() {
                    const messageBox = this.closest('.message-box');
                    const text = messageBox.textContent.replace(/Edit|Delete/g, '').trim();
                    
                    // Use the Web Speech API to read the text
                    const utterance = new SpeechSynthesisUtterance(text);
                    window.speechSynthesis.cancel(); // Stop any ongoing speech
                    window.speechSynthesis.speak(utterance);
                });
            });
            
            // Form handling
            const chatForm = document.getElementById('chatForm');
            const messageInput = document.getElementById('messageInput');
            
            chatForm.addEventListener('submit', function(e) {
                e.preventDefault();
                
                const messageText = messageInput.value.trim();
                if (messageText) {
                    // Create a new message element
                    const newMessage = document.createElement('div');
                    newMessage.className = 'message-box sent-message';
                    
                    // Get the selected book
                    const selectedBook = bookSelect.options[bookSelect.selectedIndex].text;
                    const bookBadgeHtml = selectedBook !== 'All Books' ? `<span class="book-badge">${selectedBook}</span>` : '';
                    
                    newMessage.innerHTML = `
                        <div class="button-container">
                            <button class="edit-button">Edit</button>
                            <button class="delete-button">Delete</button>
                            <button class="read-aloud-button">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                                </svg>
                            </button>
                        </div>
                        <strong>You</strong> ${bookBadgeHtml}<br>
                        ${messageText}
                    `;
                    
                    // Add the new message to the chat box
                    chatBox.appendChild(newMessage);
                    
                    // Scroll to the bottom
                    chatBox.scrollTop = chatBox.scrollHeight;
                    
                    // Clear the input
                    messageInput.value = '';
                    
                    // Add event listener to the new read aloud button
                    const newReadAloudButton = newMessage.querySelector('.read-aloud-button');
                    newReadAloudButton.addEventListener('click', function() {
                        const text = newMessage.textContent.replace(/Edit|Delete/g, '').trim();
                        const utterance = new SpeechSynthesisUtterance(text);
                        window.speechSynthesis.cancel();
                        window.speechSynthesis.speak(utterance);
                    });
                    
                    // Add event listeners for edit and delete buttons
                    const editButton = newMessage.querySelector('.edit-button');
                    const deleteButton = newMessage.querySelector('.delete-button');
                    
                    editButton.addEventListener('click', function() {
                        const messageContent = newMessage.innerHTML;
                        const messageText = newMessage.textContent.replace(/Edit|Delete|You/g, '').replace(/^\s+|\s+$/g, '');
                        messageInput.value = messageText;
                        newMessage.remove();
                    });
                    
                    deleteButton.addEventListener('click', function() {
                        newMessage.remove();
                    });
                }
            });
            
            // Add event listeners to existing edit and delete buttons
            document.querySelectorAll('.edit-button').forEach(button => {
                button.addEventListener('click', function() {
                    const messageBox = this.closest('.message-box');
                    const messageText = messageBox.textContent.replace(/Edit|Delete|You/g, '').replace(/^\s+|\s+$/g, '');
                    messageInput.value = messageText;
                    messageBox.remove();
                });
            });
            
            document.querySelectorAll('.delete-button').forEach(button => {
                button.addEventListener('click', function() {
                    const messageBox = this.closest('.message-box');
                    messageBox.remove();
                });
            });
        });
    </script>
</body>
</html> 