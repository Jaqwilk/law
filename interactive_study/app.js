/* ========================================
   LAW EXAM MASTER - APPLICATION LOGIC
   Evidence-Based Learning Implementation
   ======================================== */

// ========================================
// STATE MANAGEMENT
// ========================================

const state = {
    // User Progress
    streak: parseInt(localStorage.getItem('streak') || '0'),
    totalPoints: parseInt(localStorage.getItem('totalPoints') || '0'),
    cardsLearned: parseInt(localStorage.getItem('cardsLearned') || '0'),
    todayCards: parseInt(localStorage.getItem('todayCards') || '0'),
    todayCorrect: parseInt(localStorage.getItem('todayCorrect') || '0'),
    totalTimeStudied: parseInt(localStorage.getItem('totalTimeStudied') || '0'),
    lastStudyDate: localStorage.getItem('lastStudyDate') || '',

    // Spaced Repetition Data
    cardProgress: JSON.parse(localStorage.getItem('cardProgress') || '{}'),

    // Topic Progress
    topicProgress: JSON.parse(localStorage.getItem('topicProgress') || '{}'),

    // Quiz State
    currentQuiz: null,
    quizQuestions: [],
    currentQuestionIndex: 0,
    quizScore: 0,
    quizStartTime: null,
    quizTimer: null,

    // Flashcard State
    currentCards: [],
    currentCardIndex: 0,
    currentTopic: 'all',

    // Pomodoro
    pomodoroTime: 25 * 60,
    pomodoroRunning: false,
    pomodoroSession: 1,
    pomodoroInterval: null,

    // Achievements
    achievements: JSON.parse(localStorage.getItem('achievements') || '{}'),

    // Session tracking
    sessionStartTime: Date.now(),

    // Learning section state
    currentLearnTopic: null,
    currentLearnSection: 0
};

// ========================================
// INITIALIZATION
// ========================================

document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    initNavigation();
    initFlashcards();
    initDashboard();
    initQuiz();
    initTopics();
    initCases();
    initMindMaps();
    initProgress();
    initPomodoro();
    checkDailyStreak();
    updateAllUI();
});

// Theme Management
function initTheme() {
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);

    document.getElementById('themeToggle').addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
    });
}

// Navigation
function initNavigation() {
    const navItems = document.querySelectorAll('.nav-item');

    navItems.forEach(item => {
        item.addEventListener('click', () => {
            const section = item.dataset.section;

            // Update active nav
            navItems.forEach(nav => nav.classList.remove('active'));
            item.classList.add('active');

            // Show section
            document.querySelectorAll('.content-section').forEach(s => s.classList.remove('active'));
            document.getElementById(section).classList.add('active');
        });
    });
}

// ========================================
// DASHBOARD
// ========================================

function initDashboard() {
    updateDashboardStats();
    updateMasteryList();
    updateAchievementsGrid();
    updateStudyTip();
}

function updateDashboardStats() {
    document.getElementById('streakCount').textContent = state.streak;
    document.getElementById('totalPoints').textContent = state.totalPoints;
    document.getElementById('cardsLearned').textContent = state.cardsLearned;
    document.getElementById('todayCards').textContent = state.todayCards;

    const accuracy = state.todayCards > 0 ? Math.round((state.todayCorrect / state.todayCards) * 100) : 0;
    document.getElementById('todayAccuracy').textContent = accuracy + '%';

    const sessionMinutes = Math.round((Date.now() - state.sessionStartTime) / 60000);
    document.getElementById('todayTime').textContent = sessionMinutes + 'm';

    // Update daily goal
    const goalPercent = Math.min((state.todayCards / 20) * 100, 100);
    document.getElementById('goalFill').style.width = goalPercent + '%';
    document.getElementById('goalCurrent').textContent = state.todayCards;

    // Due cards
    const dueCards = getDueCards().length;
    document.getElementById('dueCards').textContent = dueCards;
}

function updateMasteryList() {
    const masteryList = document.getElementById('masteryList');
    const topics = Object.keys(TOPICS);

    masteryList.innerHTML = topics.slice(0, 5).map(topic => {
        const progress = state.topicProgress[topic] || 0;
        return `
            <div class="mastery-item">
                <span class="mastery-name">${TOPICS[topic].name}</span>
                <div class="mastery-bar">
                    <div class="mastery-fill" style="width: ${progress}%"></div>
                </div>
                <span class="mastery-percent">${progress}%</span>
            </div>
        `;
    }).join('');
}

function updateAchievementsGrid() {
    const grid = document.getElementById('achievementsGrid');
    const achievements = [
        { id: 'first_card', icon: '🎴', name: 'First Card' },
        { id: 'ten_cards', icon: '🔟', name: '10 Cards' },
        { id: 'streak_3', icon: '🔥', name: '3 Day Streak' },
        { id: 'perfect_quiz', icon: '💯', name: 'Perfect Quiz' },
        { id: 'night_owl', icon: '🦉', name: 'Night Owl' },
        { id: 'early_bird', icon: '🐦', name: 'Early Bird' },
        { id: 'master', icon: '👑', name: 'Topic Master' },
        { id: 'all_topics', icon: '🏆', name: 'All Topics' }
    ];

    grid.innerHTML = achievements.map(a => `
        <div class="achievement ${state.achievements[a.id] ? 'unlocked' : ''}" title="${a.name}">
            ${a.icon}
        </div>
    `).join('');
}

function updateStudyTip() {
    const tips = [
        { text: "Active recall (testing yourself) is 50% more effective than re-reading.", source: "Karpicke & Roediger, 2008" },
        { text: "Spaced repetition can improve retention by up to 200% compared to massed practice.", source: "Cepeda et al., 2006" },
        { text: "Taking breaks every 25 minutes (Pomodoro) increases focus and retention.", source: "Cirillo, 2006" },
        { text: "Interleaving (mixing topics) improves long-term learning more than blocking.", source: "Rohrer & Taylor, 2007" },
        { text: "Sleep is crucial for memory consolidation. Review before bed for better retention.", source: "Walker, 2017" },
        { text: "Explaining concepts to others (or yourself) deepens understanding.", source: "Chi et al., 1994" },
        { text: "Testing yourself immediately after learning creates stronger memory traces.", source: "Roediger & Karpicke, 2006" },
        { text: "Making mistakes is part of learning - errors followed by feedback improve retention.", source: "Kornell et al., 2009" }
    ];

    const tip = tips[Math.floor(Math.random() * tips.length)];
    const tipDiv = document.getElementById('studyTip');
    tipDiv.querySelector('.tip-text').textContent = `"${tip.text}"`;
    tipDiv.querySelector('.tip-source').textContent = `— ${tip.source}`;
}

// ========================================
// FLASHCARDS WITH SPACED REPETITION
// ========================================

function initFlashcards() {
    // Filter buttons
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            state.currentTopic = btn.dataset.topic;
            loadCards();
        });
    });

    // Card flip
    document.getElementById('flashcard').addEventListener('click', flipCard);

    // Keyboard shortcuts
    document.addEventListener('keydown', (e) => {
        if (document.getElementById('flashcards').classList.contains('active')) {
            if (e.code === 'Space') {
                e.preventDefault();
                flipCard();
            } else if (e.key >= '1' && e.key <= '4') {
                rateCard(parseInt(e.key) - 1);
            }
        }
    });

    loadCards();
    updateLeitnerBoxes();
}

function loadCards() {
    let cards = [...FLASHCARDS];

    if (state.currentTopic !== 'all') {
        cards = cards.filter(c => c.topic === state.currentTopic);
    }

    // Sort by due date (spaced repetition)
    cards.sort((a, b) => {
        const progressA = state.cardProgress[a.id] || { box: 1, nextReview: 0 };
        const progressB = state.cardProgress[b.id] || { box: 1, nextReview: 0 };
        return progressA.nextReview - progressB.nextReview;
    });

    state.currentCards = cards;
    state.currentCardIndex = 0;
    showCurrentCard();
}

function getDueCards() {
    const now = Date.now();
    return FLASHCARDS.filter(card => {
        const progress = state.cardProgress[card.id];
        if (!progress) return true;
        return progress.nextReview <= now;
    });
}

function showCurrentCard() {
    if (state.currentCards.length === 0) {
        document.getElementById('cardQuestion').textContent = 'No cards available for this topic.';
        document.getElementById('cardTopic').textContent = '';
        return;
    }

    const card = state.currentCards[state.currentCardIndex];
    document.getElementById('cardTopic').textContent = TOPICS[card.topic]?.name || card.topic;
    document.getElementById('cardQuestion').innerHTML = card.question;
    document.getElementById('cardAnswer').innerHTML = card.answer;

    // Reset flip
    document.getElementById('flashcard').classList.remove('flipped');

    // Update progress
    document.getElementById('cardProgress').textContent =
        `${state.currentCardIndex + 1}/${state.currentCards.length}`;
    document.getElementById('cardProgressFill').style.width =
        `${((state.currentCardIndex + 1) / state.currentCards.length) * 100}%`;
}

function flipCard() {
    document.getElementById('flashcard').classList.toggle('flipped');
}

function rateCard(rating) {
    // Rating: 0 = Again, 1 = Hard, 2 = Good, 3 = Easy
    const card = state.currentCards[state.currentCardIndex];
    const progress = state.cardProgress[card.id] || { box: 1, nextReview: 0, reviews: 0 };

    // Leitner system intervals (in milliseconds)
    const intervals = {
        0: 60000,           // 1 minute (Again)
        1: 600000,          // 10 minutes (Hard)
        2: 86400000,        // 1 day (Good)
        3: 345600000        // 4 days (Easy)
    };

    // Update box based on rating
    if (rating === 0) {
        progress.box = 1; // Back to box 1
    } else if (rating >= 2) {
        progress.box = Math.min(progress.box + 1, 5); // Move up
    }

    // Calculate next review time
    const multiplier = Math.pow(2, progress.box - 1);
    progress.nextReview = Date.now() + intervals[rating] * multiplier;
    progress.reviews++;

    state.cardProgress[card.id] = progress;
    saveState();

    // Update stats
    state.todayCards++;
    if (rating >= 2) {
        state.todayCorrect++;
        state.totalPoints += rating * 10;
    }

    // Check if card is mastered (box 5)
    if (progress.box >= 5) {
        state.cardsLearned++;
        showToast('🎉 Card mastered!', 'success');
    }

    // Check achievements
    checkAchievements();

    // Next card
    state.currentCardIndex++;
    if (state.currentCardIndex >= state.currentCards.length) {
        state.currentCardIndex = 0;
        showToast('🔄 Review cycle complete! Starting over.', 'success');
    }

    showCurrentCard();
    updateLeitnerBoxes();
    updateDashboardStats();
    saveState();
}

function updateLeitnerBoxes() {
    const boxes = [0, 0, 0, 0, 0];

    FLASHCARDS.forEach(card => {
        const progress = state.cardProgress[card.id] || { box: 1 };
        boxes[progress.box - 1]++;
    });

    for (let i = 1; i <= 5; i++) {
        document.getElementById(`box${i}Count`).textContent = boxes[i - 1];
    }
}

// ========================================
// QUIZ MODE
// ========================================

function initQuiz() {
    // Number selector
    document.querySelectorAll('.num-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.num-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
        });
    });

    // Type selector
    document.querySelectorAll('.type-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.type-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
        });
    });
}

function startQuizSession() {
    const numQuestions = parseInt(document.querySelector('.num-btn.active').dataset.num);
    const quizType = document.querySelector('.type-btn.active').dataset.type;

    // Get selected topics
    const selectedTopics = [];
    document.querySelectorAll('.checkbox-item input:checked').forEach(cb => {
        if (cb.value !== 'all') selectedTopics.push(cb.value);
    });

    // Filter questions
    let questions = [...QUIZ_QUESTIONS];
    if (selectedTopics.length > 0 && !selectedTopics.includes('all')) {
        questions = questions.filter(q => selectedTopics.includes(q.topic));
    }

    // Shuffle and limit
    questions = shuffleArray(questions).slice(0, numQuestions);

    state.quizQuestions = questions;
    state.currentQuestionIndex = 0;
    state.quizScore = 0;
    state.quizStartTime = Date.now();

    // Start timer
    startQuizTimer();

    // Show quiz
    document.getElementById('quizSetup').style.display = 'none';
    document.getElementById('quizActive').style.display = 'block';
    document.getElementById('quizResults').style.display = 'none';

    document.getElementById('totalQ').textContent = questions.length;

    showCurrentQuestion();
}

function startQuizTimer() {
    state.quizTimer = setInterval(() => {
        const elapsed = Math.floor((Date.now() - state.quizStartTime) / 1000);
        const minutes = Math.floor(elapsed / 60);
        const seconds = elapsed % 60;
        document.getElementById('quizTimer').textContent =
            `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    }, 1000);
}

function showCurrentQuestion() {
    const question = state.quizQuestions[state.currentQuestionIndex];

    document.getElementById('currentQ').textContent = state.currentQuestionIndex + 1;
    document.getElementById('quizTopic').textContent = TOPICS[question.topic]?.name || question.topic;
    document.getElementById('quizQuestion').innerHTML = question.question;
    document.getElementById('quizScore').textContent = state.quizScore;

    // Hide feedback and next button
    document.getElementById('quizFeedback').style.display = 'none';
    document.getElementById('nextQuestionBtn').style.display = 'none';

    // Generate options
    const optionsContainer = document.getElementById('quizOptions');
    optionsContainer.innerHTML = question.options.map((opt, i) => `
        <div class="quiz-option" data-index="${i}" onclick="selectOption(${i})">
            <span class="option-letter">${String.fromCharCode(65 + i)}</span>
            <span class="option-text">${opt}</span>
        </div>
    `).join('');
}

function selectOption(index) {
    const question = state.quizQuestions[state.currentQuestionIndex];
    const options = document.querySelectorAll('.quiz-option');

    // Disable all options
    options.forEach(opt => {
        opt.onclick = null;
        opt.classList.remove('selected');
    });

    // Mark selected
    options[index].classList.add('selected');

    // Check answer
    const isCorrect = index === question.correct;

    // Show correct/incorrect
    if (isCorrect) {
        options[index].classList.add('correct');
        state.quizScore++;
    } else {
        options[index].classList.add('incorrect');
        options[question.correct].classList.add('correct');
    }

    // Show feedback
    const feedback = document.getElementById('quizFeedback');
    feedback.style.display = 'flex';
    feedback.className = `quiz-feedback ${isCorrect ? 'correct' : 'incorrect'}`;
    feedback.querySelector('.feedback-icon').textContent = isCorrect ? '✓' : '✗';
    feedback.querySelector('.feedback-text').textContent = isCorrect ? 'Correct!' : 'Incorrect';
    feedback.querySelector('.feedback-explanation').innerHTML = question.explanation;

    // Update score display
    document.getElementById('quizScore').textContent = state.quizScore;

    // Show next button
    document.getElementById('nextQuestionBtn').style.display = 'inline-block';

    // Update topic progress
    if (!state.topicProgress[question.topic]) {
        state.topicProgress[question.topic] = 0;
    }
    if (isCorrect) {
        state.topicProgress[question.topic] = Math.min(
            state.topicProgress[question.topic] + 5,
            100
        );
    }
    saveState();
}

function nextQuestion() {
    state.currentQuestionIndex++;

    if (state.currentQuestionIndex >= state.quizQuestions.length) {
        endQuiz();
    } else {
        showCurrentQuestion();
    }
}

function endQuiz() {
    clearInterval(state.quizTimer);

    const elapsed = Math.floor((Date.now() - state.quizStartTime) / 1000);
    const minutes = Math.floor(elapsed / 60);
    const seconds = elapsed % 60;

    const percentage = Math.round((state.quizScore / state.quizQuestions.length) * 100);

    // Update results UI
    document.getElementById('quizActive').style.display = 'none';
    document.getElementById('quizResults').style.display = 'block';

    document.getElementById('finalScore').textContent = percentage;
    document.getElementById('correctCount').textContent = state.quizScore;
    document.getElementById('incorrectCount').textContent = state.quizQuestions.length - state.quizScore;
    document.getElementById('quizTimeSpent').textContent = `${minutes}:${seconds.toString().padStart(2, '0')}`;

    // Result message
    let message = '';
    if (percentage >= 90) message = '🏆 Excellent! You\'re ready for the exam!';
    else if (percentage >= 70) message = '👍 Good job! Keep practicing!';
    else if (percentage >= 50) message = '📚 Getting there! Review the topics you missed.';
    else message = '💪 Keep studying! Focus on your weak areas.';

    document.getElementById('resultsMessage').textContent = message;

    // Points
    state.totalPoints += state.quizScore * 20;
    state.todayCards += state.quizQuestions.length;
    state.todayCorrect += state.quizScore;

    // Check achievements
    if (percentage === 100) {
        unlockAchievement('perfect_quiz');
    }

    checkAchievements();
    updateDashboardStats();
    saveState();
}

function newQuiz() {
    document.getElementById('quizSetup').style.display = 'block';
    document.getElementById('quizActive').style.display = 'none';
    document.getElementById('quizResults').style.display = 'none';
}

function retakeQuiz() {
    state.currentQuestionIndex = 0;
    state.quizScore = 0;
    state.quizStartTime = Date.now();

    startQuizTimer();

    document.getElementById('quizResults').style.display = 'none';
    document.getElementById('quizActive').style.display = 'block';

    // Shuffle questions again
    state.quizQuestions = shuffleArray(state.quizQuestions);

    showCurrentQuestion();
}

function reviewMistakes() {
    // TODO: Show only incorrectly answered questions
    showToast('Review feature coming soon!', 'info');
}

// ========================================
// LEARN TOPICS
// ========================================

function initTopics() {
    const grid = document.getElementById('topicsGrid');

    grid.innerHTML = Object.keys(TOPICS).map(key => {
        const topic = TOPICS[key];
        const progress = state.topicProgress[key] || 0;

        return `
            <div class="topic-card" onclick="openTopic('${key}')">
                <div class="topic-icon">${topic.icon}</div>
                <div class="topic-name">${topic.name}</div>
                <div class="topic-desc">${topic.description}</div>
                <div class="topic-progress">
                    <div class="topic-progress-bar">
                        <div class="topic-progress-fill" style="width: ${progress}%"></div>
                    </div>
                    <span class="topic-percent">${progress}%</span>
                </div>
            </div>
        `;
    }).join('');
}

function openTopic(topicKey) {
    const topic = TOPICS[topicKey];
    const content = LEARN_CONTENT[topicKey];

    if (!content) {
        showToast('Content coming soon!', 'info');
        return;
    }

    state.currentLearnTopic = topicKey;
    state.currentLearnSection = 0;

    document.getElementById('modalTitle').textContent = topic.name;

    // Build content sections
    const modalBody = document.getElementById('modalBody');
    modalBody.innerHTML = content.sections.map((section, i) => `
        <div class="learn-section ${i === 0 ? 'active' : ''}" data-index="${i}">
            <h3>${section.title}</h3>
            ${section.content}
        </div>
    `).join('');

    updateLearnProgress();

    document.getElementById('topicModal').classList.add('active');
}

function closeTopicModal() {
    document.getElementById('topicModal').classList.remove('active');
}

function prevLearnSection() {
    if (state.currentLearnSection > 0) {
        state.currentLearnSection--;
        updateLearnSection();
    }
}

function nextLearnSection() {
    const content = LEARN_CONTENT[state.currentLearnTopic];

    if (state.currentLearnSection < content.sections.length - 1) {
        state.currentLearnSection++;
        updateLearnSection();
    } else {
        // Completed topic
        state.topicProgress[state.currentLearnTopic] = 100;
        saveState();
        showToast('🎉 Topic completed!', 'success');
        closeTopicModal();
        initTopics();
    }
}

function updateLearnSection() {
    document.querySelectorAll('.learn-section').forEach((section, i) => {
        section.classList.toggle('active', i === state.currentLearnSection);
    });
    updateLearnProgress();
}

function updateLearnProgress() {
    const content = LEARN_CONTENT[state.currentLearnTopic];
    const progress = ((state.currentLearnSection + 1) / content.sections.length) * 100;

    document.getElementById('modalProgressFill').style.width = progress + '%';
    document.getElementById('modalProgressText').textContent =
        `${Math.round(progress)}% Complete (${state.currentLearnSection + 1}/${content.sections.length})`;
}

// ========================================
// MIND MAPS
// ========================================

function initMindMaps() {
    document.querySelectorAll('.mindmap-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.mindmap-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            renderMindMap(btn.dataset.map);
        });
    });

    renderMindMap('legal-systems');
}

function renderMindMap(mapId) {
    const container = document.getElementById('mindmapContainer');
    const mapData = MIND_MAPS[mapId];

    if (!mapData) {
        container.innerHTML = '<p>Mind map coming soon!</p>';
        return;
    }

    // Create interactive mind map with HTML/CSS
    container.innerHTML = `
        <div class="mindmap-wrapper">
            <div class="mindmap-center">${mapData.center}</div>
            <div class="mindmap-branches">
                ${mapData.branches.map((branch, i) => `
                    <div class="mindmap-branch branch-${i + 1}">
                        <div class="branch-main" style="background: ${branch.color}">
                            ${branch.name}
                        </div>
                        <div class="branch-children">
                            ${branch.children.map(child => `
                                <div class="branch-child">${child}</div>
                            `).join('')}
                        </div>
                    </div>
                `).join('')}
            </div>
        </div>
    `;

    // Add styles for mind map
    const style = document.createElement('style');
    style.textContent = `
        .mindmap-wrapper {
            display: flex;
            flex-direction: column;
            align-items: center;
            padding: 40px;
            min-width: 800px;
        }
        .mindmap-center {
            background: var(--accent-gradient);
            color: white;
            padding: 20px 40px;
            border-radius: 50px;
            font-size: 1.25rem;
            font-weight: 700;
            margin-bottom: 40px;
            box-shadow: var(--shadow-lg);
        }
        .mindmap-branches {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            gap: 24px;
            width: 100%;
        }
        .mindmap-branch {
            display: flex;
            flex-direction: column;
            align-items: center;
            min-width: 200px;
        }
        .branch-main {
            color: white;
            padding: 12px 24px;
            border-radius: 25px;
            font-weight: 600;
            margin-bottom: 16px;
            text-align: center;
            box-shadow: var(--shadow-md);
        }
        .branch-children {
            display: flex;
            flex-direction: column;
            gap: 8px;
            align-items: center;
        }
        .branch-child {
            background: var(--bg-tertiary);
            padding: 8px 16px;
            border-radius: 15px;
            font-size: 0.875rem;
            text-align: center;
            transition: var(--transition-fast);
        }
        .branch-child:hover {
            background: var(--accent-primary);
            color: white;
            transform: scale(1.05);
        }
    `;
    container.appendChild(style);
}

// ========================================
// CASE STUDIES
// ========================================

function initCases() {
    const grid = document.getElementById('casesGrid');

    grid.innerHTML = CASES.map(caseItem => `
        <div class="case-card" onclick="openCase('${caseItem.id}')">
            <div class="case-card-icon">${caseItem.icon}</div>
            <div class="case-card-title">${caseItem.title}</div>
            <span class="case-card-category">${caseItem.category}</span>
            <div class="case-card-desc">${caseItem.summary}</div>
        </div>
    `).join('');
}

function openCase(caseId) {
    const caseData = CASES.find(c => c.id === caseId);

    if (!caseData) return;

    document.getElementById('caseTitle').textContent = caseData.title;
    document.getElementById('caseCategory').textContent = caseData.category;

    const caseBody = document.getElementById('caseBody');
    caseBody.innerHTML = `
        <div class="case-section">
            <h4>📖 The Story</h4>
            <p>${caseData.story}</p>
        </div>
        <div class="case-section">
            <h4>⚖️ The Legal Issue</h4>
            <p>${caseData.issue}</p>
        </div>
        <div class="case-section">
            <h4>📋 The Verdict</h4>
            <p>${caseData.verdict}</p>
        </div>
        <div class="case-section">
            <h4>💡 Key Principle</h4>
            <div class="key-point">${caseData.principle}</div>
        </div>
    `;

    // Add questions
    const questionsDiv = document.getElementById('caseQuestions');
    questionsDiv.innerHTML = caseData.questions.map((q, i) => `
        <div class="case-question">
            <p><strong>Q${i + 1}:</strong> ${q.question}</p>
            <button onclick="this.nextElementSibling.style.display='block'; this.style.display='none';"
                    class="action-btn" style="margin-top: 8px;">
                Show Answer
            </button>
            <p style="display:none; margin-top: 8px; color: var(--success);">
                <strong>A:</strong> ${q.answer}
            </p>
        </div>
    `).join('');

    document.getElementById('caseModal').classList.add('active');
}

function closeCaseModal() {
    document.getElementById('caseModal').classList.remove('active');
}

// ========================================
// PROGRESS TRACKING
// ========================================

function initProgress() {
    updateProgressUI();
}

function updateProgressUI() {
    // Overall mastery
    const totalTopics = Object.keys(TOPICS).length;
    const totalProgress = Object.values(state.topicProgress).reduce((a, b) => a + b, 0);
    const overallMastery = Math.round(totalProgress / totalTopics);

    document.getElementById('overallMastery').textContent = overallMastery + '%';

    // Update mastery circle
    const circle = document.getElementById('masteryCircle');
    if (circle) {
        const circumference = 283; // 2 * π * 45
        const offset = circumference - (overallMastery / 100) * circumference;
        circle.style.strokeDashoffset = offset;
    }

    // Streak
    document.getElementById('streakDisplay').textContent = state.streak;

    // Time studied
    const hours = (state.totalTimeStudied / 60).toFixed(1);
    document.getElementById('totalTimeStudied').textContent = hours;

    // Topic bars
    const topicBars = document.getElementById('topicBars');
    topicBars.innerHTML = Object.keys(TOPICS).map(key => {
        const progress = state.topicProgress[key] || 0;
        return `
            <div class="topic-bar-item">
                <span class="topic-bar-name">${TOPICS[key].name}</span>
                <div class="topic-bar-container">
                    <div class="topic-bar-fill" style="width: ${progress}%"></div>
                </div>
                <span class="topic-bar-percent">${progress}%</span>
            </div>
        `;
    }).join('');

    // All achievements
    updateAllAchievements();
}

function updateAllAchievements() {
    const container = document.getElementById('allAchievements');
    const allAchievements = [
        { id: 'first_card', icon: '🎴', name: 'First Steps', desc: 'Review your first card' },
        { id: 'ten_cards', icon: '🔟', name: 'Getting Started', desc: 'Review 10 cards' },
        { id: 'fifty_cards', icon: '5️⃣0️⃣', name: 'Dedicated', desc: 'Review 50 cards' },
        { id: 'hundred_cards', icon: '💯', name: 'Centurion', desc: 'Review 100 cards' },
        { id: 'streak_3', icon: '🔥', name: 'On Fire', desc: '3 day streak' },
        { id: 'streak_7', icon: '🔥🔥', name: 'Week Warrior', desc: '7 day streak' },
        { id: 'streak_30', icon: '🏆', name: 'Month Master', desc: '30 day streak' },
        { id: 'perfect_quiz', icon: '💯', name: 'Perfectionist', desc: 'Perfect quiz score' },
        { id: 'night_owl', icon: '🦉', name: 'Night Owl', desc: 'Study after midnight' },
        { id: 'early_bird', icon: '🐦', name: 'Early Bird', desc: 'Study before 7 AM' },
        { id: 'master_topic', icon: '👑', name: 'Topic Master', desc: 'Master any topic' },
        { id: 'all_topics', icon: '🏆', name: 'Law Scholar', desc: 'Master all topics' }
    ];

    container.innerHTML = allAchievements.map(a => `
        <div class="achievement-item ${state.achievements[a.id] ? 'unlocked' : ''}">
            <span class="achievement-icon">${a.icon}</span>
            <span class="achievement-name">${a.name}</span>
            <span class="achievement-desc">${a.desc}</span>
        </div>
    `).join('');
}

// ========================================
// POMODORO TIMER
// ========================================

function initPomodoro() {
    updatePomodoroDisplay();
}

function togglePomodoro() {
    document.getElementById('pomodoroWidget').classList.toggle('minimized');
}

function startPomodoro() {
    if (state.pomodoroRunning) return;

    state.pomodoroRunning = true;
    state.pomodoroInterval = setInterval(() => {
        state.pomodoroTime--;
        updatePomodoroDisplay();

        if (state.pomodoroTime <= 0) {
            completePomodoroSession();
        }
    }, 1000);
}

function pausePomodoro() {
    state.pomodoroRunning = false;
    clearInterval(state.pomodoroInterval);
}

function resetPomodoro() {
    pausePomodoro();
    state.pomodoroTime = 25 * 60;
    updatePomodoroDisplay();
}

function updatePomodoroDisplay() {
    const minutes = Math.floor(state.pomodoroTime / 60);
    const seconds = state.pomodoroTime % 60;
    document.getElementById('pomodoroTimer').textContent =
        `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    document.getElementById('pomodoroSession').textContent = state.pomodoroSession;
}

function completePomodoroSession() {
    pausePomodoro();

    state.totalTimeStudied += 25;
    state.totalPoints += 50;

    if (state.pomodoroSession < 4) {
        state.pomodoroSession++;
        state.pomodoroTime = 5 * 60; // 5 minute break
        showToast('🍅 Time for a 5-minute break!', 'success');
    } else {
        state.pomodoroSession = 1;
        state.pomodoroTime = 15 * 60; // 15 minute break
        showToast('🎉 Great work! Take a 15-minute break.', 'success');
    }

    saveState();
    updatePomodoroDisplay();
}

// ========================================
// ACHIEVEMENTS & GAMIFICATION
// ========================================

function checkAchievements() {
    const hour = new Date().getHours();

    // First card
    if (state.todayCards >= 1 && !state.achievements.first_card) {
        unlockAchievement('first_card');
    }

    // Card milestones
    if (state.todayCards >= 10 && !state.achievements.ten_cards) {
        unlockAchievement('ten_cards');
    }
    if (state.todayCards >= 50 && !state.achievements.fifty_cards) {
        unlockAchievement('fifty_cards');
    }
    if (state.todayCards >= 100 && !state.achievements.hundred_cards) {
        unlockAchievement('hundred_cards');
    }

    // Streak milestones
    if (state.streak >= 3 && !state.achievements.streak_3) {
        unlockAchievement('streak_3');
    }
    if (state.streak >= 7 && !state.achievements.streak_7) {
        unlockAchievement('streak_7');
    }
    if (state.streak >= 30 && !state.achievements.streak_30) {
        unlockAchievement('streak_30');
    }

    // Time-based
    if (hour >= 0 && hour < 5 && !state.achievements.night_owl) {
        unlockAchievement('night_owl');
    }
    if (hour >= 5 && hour < 7 && !state.achievements.early_bird) {
        unlockAchievement('early_bird');
    }

    // Topic mastery
    const masteredTopics = Object.values(state.topicProgress).filter(p => p >= 100).length;
    if (masteredTopics >= 1 && !state.achievements.master_topic) {
        unlockAchievement('master_topic');
    }
    if (masteredTopics >= Object.keys(TOPICS).length && !state.achievements.all_topics) {
        unlockAchievement('all_topics');
    }
}

function unlockAchievement(id) {
    state.achievements[id] = true;
    state.totalPoints += 100;

    const achievements = {
        first_card: { name: 'First Steps', icon: '🎴' },
        ten_cards: { name: 'Getting Started', icon: '🔟' },
        fifty_cards: { name: 'Dedicated', icon: '5️⃣0️⃣' },
        hundred_cards: { name: 'Centurion', icon: '💯' },
        streak_3: { name: 'On Fire', icon: '🔥' },
        streak_7: { name: 'Week Warrior', icon: '🔥🔥' },
        streak_30: { name: 'Month Master', icon: '🏆' },
        perfect_quiz: { name: 'Perfectionist', icon: '💯' },
        night_owl: { name: 'Night Owl', icon: '🦉' },
        early_bird: { name: 'Early Bird', icon: '🐦' },
        master_topic: { name: 'Topic Master', icon: '👑' },
        all_topics: { name: 'Law Scholar', icon: '🏆' }
    };

    const a = achievements[id];
    showToast(`${a.icon} Achievement Unlocked: ${a.name}!`, 'success');
    saveState();
}

// ========================================
// DAILY STREAK
// ========================================

function checkDailyStreak() {
    const today = new Date().toDateString();
    const lastStudy = state.lastStudyDate;

    if (lastStudy === today) {
        // Already studied today
        return;
    }

    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);

    if (lastStudy === yesterday.toDateString()) {
        // Continued streak
        state.streak++;
    } else if (lastStudy !== today) {
        // Streak broken
        state.streak = 1;
    }

    state.lastStudyDate = today;
    state.todayCards = 0;
    state.todayCorrect = 0;

    saveState();
}

// ========================================
// UTILITY FUNCTIONS
// ========================================

function saveState() {
    localStorage.setItem('streak', state.streak.toString());
    localStorage.setItem('totalPoints', state.totalPoints.toString());
    localStorage.setItem('cardsLearned', state.cardsLearned.toString());
    localStorage.setItem('todayCards', state.todayCards.toString());
    localStorage.setItem('todayCorrect', state.todayCorrect.toString());
    localStorage.setItem('totalTimeStudied', state.totalTimeStudied.toString());
    localStorage.setItem('lastStudyDate', state.lastStudyDate);
    localStorage.setItem('cardProgress', JSON.stringify(state.cardProgress));
    localStorage.setItem('topicProgress', JSON.stringify(state.topicProgress));
    localStorage.setItem('achievements', JSON.stringify(state.achievements));
}

function updateAllUI() {
    updateDashboardStats();
    updateLeitnerBoxes();
    updateProgressUI();
}

function showToast(message, type = 'info') {
    const container = document.getElementById('toastContainer');
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.innerHTML = `
        <span class="toast-icon">${type === 'success' ? '✓' : type === 'error' ? '✗' : 'ℹ'}</span>
        <span class="toast-message">${message}</span>
    `;

    container.appendChild(toast);

    setTimeout(() => {
        toast.style.opacity = '0';
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}

function shuffleArray(array) {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
}

// ========================================
// QUICK ACTION FUNCTIONS
// ========================================

function startQuickReview() {
    document.querySelector('[data-section="flashcards"]').click();
}

function startQuiz() {
    document.querySelector('[data-section="quiz"]').click();
}

function showWeakAreas() {
    // Find topics with lowest progress
    const weakTopics = Object.entries(state.topicProgress)
        .filter(([_, progress]) => progress < 50)
        .sort((a, b) => a[1] - b[1]);

    if (weakTopics.length === 0) {
        showToast('Great job! No weak areas detected.', 'success');
    } else {
        const topicName = TOPICS[weakTopics[0][0]]?.name || weakTopics[0][0];
        showToast(`Focus on: ${topicName} (${weakTopics[0][1]}%)`, 'info');
        document.querySelector('[data-section="learn"]').click();
    }
}

function showRandomCase() {
    const randomCase = CASES[Math.floor(Math.random() * CASES.length)];
    openCase(randomCase.id);
}

// Initialize on page load
window.addEventListener('beforeunload', () => {
    // Save session time
    const sessionMinutes = Math.round((Date.now() - state.sessionStartTime) / 60000);
    state.totalTimeStudied += sessionMinutes;
    saveState();
});
