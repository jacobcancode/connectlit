---
layout: page
title: Reading
permalink: /reading
---

<!-- Add auth check script -->
<script src="{{site.baseurl}}/assets/js/auth.js"></script>

# Reading

<div class="container">
  <div class="row">
    <!-- Book List -->
    <div class="col-md-4">
      <div class="card">
        <div class="card-header">
          <h5 class="card-title mb-0">Available Books</h5>
        </div>
        <div class="card-body">
          <div id="bookList" class="list-group">
            <!-- Books will be loaded here -->
          </div>
        </div>
      </div>
    </div>

    <!-- Book Content -->
    <div class="col-md-8">
      <div class="card">
        <div class="card-header">
          <h5 class="card-title mb-0" id="bookTitle">Select a Book</h5>
        </div>
        <div class="card-body">
          <div id="bookContent" class="book-content">
            <!-- Book content will be loaded here -->
          </div>
          <div class="progress mt-3">
            <div class="progress-bar" id="readingProgress" role="progressbar" style="width: 0%"></div>
          </div>
          <div class="mt-2">
            <small class="text-muted">Page <span id="currentPage">0</span> of <span id="totalPages">0</span></small>
          </div>
        </div>
      </div>

      <!-- Comprehension Questions -->
      <div class="card mt-3" id="questionsCard" style="display: none;">
        <div class="card-header">
          <h5 class="card-title mb-0">Comprehension Questions</h5>
        </div>
        <div class="card-body">
          <div id="questionsList">
            <!-- Questions will be loaded here -->
          </div>
        </div>
      </div>

      <!-- Vocabulary -->
      <div class="card mt-3" id="vocabularyCard" style="display: none;">
        <div class="card-header">
          <h5 class="card-title mb-0">Vocabulary</h5>
        </div>
        <div class="card-body">
          <div id="vocabularyList">
            <!-- Vocabulary words will be loaded here -->
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- Question Modal -->
<div class="modal fade" id="questionModal" tabindex="-1">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Question</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
      </div>
      <div class="modal-body">
        <p id="questionText"></p>
        <div id="questionOptions">
          <!-- Options will be loaded here -->
        </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary" id="submitAnswer">Submit Answer</button>
      </div>
    </div>
  </div>
</div>

<!-- Vocabulary Modal -->
<div class="modal fade" id="vocabularyModal" tabindex="-1">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Vocabulary Word</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
      </div>
      <div class="modal-body">
        <h4 id="vocabularyWord"></h4>
        <p id="vocabularyDefinition"></p>
        <p id="vocabularyExample"></p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-success" id="markLearned">Mark as Learned</button>
      </div>
    </div>
  </div>
</div>

<script>
let currentBook = null;
let currentQuestion = null;
let currentWord = null;

// Load books when page loads
document.addEventListener('DOMContentLoaded', () => {
  // Only load books if user is authenticated
  if (checkAuth()) {
    loadBooks();
  }
});

// Load all available books
async function loadBooks() {
  try {
    const response = await fetch('/api/books');
    const books = await response.json();
    
    const bookList = document.getElementById('bookList');
    bookList.innerHTML = '';
    
    books.forEach(book => {
      const bookItem = document.createElement('a');
      bookItem.className = 'list-group-item list-group-item-action';
      bookItem.innerHTML = `
        <div class="d-flex w-100 justify-content-between">
          <h6 class="mb-1">${book.title}</h6>
          <small>${book.readingLevel}</small>
        </div>
        <p class="mb-1">${book.author}</p>
      `;
      bookItem.onclick = () => loadBook(book);
      bookList.appendChild(bookItem);
    });
  } catch (error) {
    console.error('Error loading books:', error);
  }
}

// Load a specific book
async function loadBook(book) {
  currentBook = book;
  
  // Update UI
  document.getElementById('bookTitle').textContent = book.title;
  document.getElementById('bookContent').innerHTML = book.content;
  
  // Load reading progress
  await loadReadingProgress(book.id);
  
  // Load comprehension questions
  await loadQuestions(book.id);
  
  // Load vocabulary
  await loadVocabulary(book.id);
  
  // Show questions and vocabulary cards
  document.getElementById('questionsCard').style.display = 'block';
  document.getElementById('vocabularyCard').style.display = 'block';
}

// Load reading progress
async function loadReadingProgress(bookId) {
  try {
    const response = await fetch(`/api/books/${bookId}/progress`, {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    });
    const progress = await response.json();
    
    // Update progress bar
    const progressBar = document.getElementById('readingProgress');
    const percentage = (progress.currentPage / progress.totalPages) * 100;
    progressBar.style.width = `${percentage}%`;
    
    // Update page numbers
    document.getElementById('currentPage').textContent = progress.currentPage;
    document.getElementById('totalPages').textContent = progress.totalPages;
  } catch (error) {
    console.error('Error loading reading progress:', error);
  }
}

// Load comprehension questions
async function loadQuestions(bookId) {
  try {
    const response = await fetch(`/api/books/${bookId}/questions`);
    const questions = await response.json();
    
    const questionsList = document.getElementById('questionsList');
    questionsList.innerHTML = '';
    
    questions.forEach(question => {
      const questionItem = document.createElement('div');
      questionItem.className = 'mb-3';
      questionItem.innerHTML = `
        <button class="btn btn-outline-primary" onclick="showQuestion(${JSON.stringify(question)})">
          Question ${question.id}
        </button>
      `;
      questionsList.appendChild(questionItem);
    });
  } catch (error) {
    console.error('Error loading questions:', error);
  }
}

// Show question modal
function showQuestion(question) {
  currentQuestion = question;
  
  document.getElementById('questionText').textContent = question.question;
  
  const optionsContainer = document.getElementById('questionOptions');
  optionsContainer.innerHTML = '';
  
  question.options.forEach(option => {
    const optionButton = document.createElement('button');
    optionButton.className = 'btn btn-outline-primary w-100 mb-2';
    optionButton.textContent = option;
    optionButton.onclick = () => selectAnswer(option);
    optionsContainer.appendChild(optionButton);
  });
  
  new bootstrap.Modal(document.getElementById('questionModal')).show();
}

// Handle answer selection
function selectAnswer(answer) {
  const options = document.querySelectorAll('#questionOptions button');
  options.forEach(option => {
    option.classList.remove('active');
    if (option.textContent === answer) {
      option.classList.add('active');
    }
  });
}

// Submit answer
document.getElementById('submitAnswer').onclick = async () => {
  const selectedAnswer = document.querySelector('#questionOptions button.active');
  if (!selectedAnswer) return;
  
  try {
    const response = await fetch(`/api/books/${currentBook.id}/questions`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        questionId: currentQuestion.id,
        answer: selectedAnswer.textContent
      })
    });
    
    const result = await response.json();
    
    // Show result
    alert(result.isCorrect ? 'Correct!' : 'Incorrect. Try again!');
    if (result.isCorrect) {
      bootstrap.Modal.getInstance(document.getElementById('questionModal')).hide();
    }
  } catch (error) {
    console.error('Error submitting answer:', error);
  }
};

// Load vocabulary
async function loadVocabulary(bookId) {
  try {
    const response = await fetch(`/api/books/${bookId}/vocabulary`);
    const words = await response.json();
    
    const vocabularyList = document.getElementById('vocabularyList');
    vocabularyList.innerHTML = '';
    
    words.forEach(word => {
      const wordItem = document.createElement('div');
      wordItem.className = 'mb-2';
      wordItem.innerHTML = `
        <button class="btn btn-outline-secondary" onclick="showVocabulary(${JSON.stringify(word)})">
          ${word.word}
        </button>
      `;
      vocabularyList.appendChild(wordItem);
    });
  } catch (error) {
    console.error('Error loading vocabulary:', error);
  }
}

// Show vocabulary modal
function showVocabulary(word) {
  currentWord = word;
  
  document.getElementById('vocabularyWord').textContent = word.word;
  document.getElementById('vocabularyDefinition').textContent = word.definition;
  document.getElementById('vocabularyExample').textContent = word.exampleSentence;
  
  new bootstrap.Modal(document.getElementById('vocabularyModal')).show();
}

// Mark word as learned
document.getElementById('markLearned').onclick = async () => {
  try {
    const response = await fetch(`/api/vocabulary/${currentWord.id}/learn`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    });
    
    const result = await response.json();
    alert('Word marked as learned!');
    bootstrap.Modal.getInstance(document.getElementById('vocabularyModal')).hide();
  } catch (error) {
    console.error('Error marking word as learned:', error);
  }
};
</script>

<style>
.book-content {
  max-height: 500px;
  overflow-y: auto;
  padding: 20px;
  background-color: #f8f9fa;
  border-radius: 5px;
}

.progress {
  height: 20px;
}

.list-group-item {
  cursor: pointer;
}

.list-group-item:hover {
  background-color: #f8f9fa;
}

#questionOptions button.active {
  background-color: #0d6efd;
  color: white;
}
</style> 