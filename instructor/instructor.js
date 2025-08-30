
// if (window.location.pathname.endsWith('instructor-chat.html')) {
//     const urlParams = new URLSearchParams(window.location.search);
//     const grade = urlParams.get('grade');
//     document.getElementById('grade-number').textContent = grade || '';

//     // Chat message handler with card layout
//     const chatForm = document.getElementById('chat-form');
//     const chatBox = document.getElementById('chat-box');
//     chatForm.addEventListener('submit', function(e) {
//         e.preventDefault();
//         const input = document.getElementById('chat-input');
//         if (input.value.trim()) {
//             const card = document.createElement('div');
//             card.className = 'chat-card';
//             const author = document.createElement('div');
//             author.className = 'chat-author';
//             author.textContent = 'Instructor';
//             const message = document.createElement('div');
//             message.className = 'chat-message';
//             message.textContent = input.value;
//             card.appendChild(author);
//             card.appendChild(message);
//             chatBox.appendChild(card);
//             input.value = '';
//             chatBox.scrollTop = chatBox.scrollHeight;
//         }
//     });
// }



// Dynamic add question/choices for create exam page
if (document.getElementById('add-question-btn')) {
    let questionCount = 0;
    const questionsList = document.getElementById('questions-list');
        document.getElementById('add-question-btn').onclick = function() {
            questionCount++;
            const qDiv = document.createElement('div');
            qDiv.className = 'exam-question-box';
            qDiv.innerHTML = `
                <div class="form-group">
                    <label>Question ${questionCount}</label>
                    <input type="text" name="question-${questionCount}" required placeholder="Enter question text">
                </div>
                <div class="choices-list"></div>
                <button type="button" class="add-choice-btn" style="margin-bottom:1rem;"><i class='fas fa-plus'></i>Add Choice</button>
            `;
            questionsList.appendChild(qDiv);
            // Add first choice by default
            addChoice(qDiv.querySelector('.choices-list'), questionCount);
            // Add choice button handler
            qDiv.querySelector('.add-choice-btn').onclick = function() {
                addChoice(qDiv.querySelector('.choices-list'), questionCount);
            };
    };
    function addChoice(choicesList, qNum) {
        const cDiv = document.createElement('div');
        cDiv.className = 'form-group-choice';
        cDiv.innerHTML = `
            <input type="radio" name="correct-${qNum}" class="correct-choice-radio" title="Mark as correct">
            <input type="text" name="choice-${qNum}[]" required placeholder="Enter choice" class="choice-input">
        `;
        choicesList.appendChild(cDiv);
    }
}
