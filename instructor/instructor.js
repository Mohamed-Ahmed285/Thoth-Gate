
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



// // Dynamic add question/choices for create exam page
// if (document.getElementById('add-question-btn')) {
//     let questionCount = 0;
//     const questionsList = document.getElementById('questions-list');
//         document.getElementById('add-question-btn').onclick = function() {
//             questionCount++;
//             const qDiv = document.createElement('div');
//             qDiv.className = 'exam-question-box';
//             qDiv.innerHTML = `
//             <div class="question-header">
//                 <button type="button" class="remove-question-btn" title="Remove this question">&times;</button>
//             </div>
//             <div class="form-group">
//                 <input type="text" name="questions[${questionCount}][text]" required placeholder="Enter question text">
//             </div>
//             <div class="choices-list"></div>
//             <button type="button" class="add-choice-btn"><i class='fas fa-plus'></i> Add Choice</button>
//             `;
                
        
            
//             questionsList.appendChild(qDiv);
//             // Add first choice by default
//             addChoice(qDiv.querySelector('.choices-list'), questionCount);
//             // Add choice button handler
//             qDiv.querySelector('.add-choice-btn').onclick = function() {
//                 addChoice(qDiv.querySelector('.choices-list'), questionCount);
//             };
//     };
//     function addChoice(choicesList, qNum) {
//         const cDiv = document.createElement('div');
//         cDiv.className = 'form-group-choice';
//         cDiv.innerHTML = `
//             <input type="radio" name="correct-${qNum}" class="correct-choice-radio" title="Mark as correct">
//             <input type="text" name="choice-${qNum}[]" required placeholder="Enter choice" class="choice-input">
//             <button type="button" class="remove-choice-btn" title="Remove choice">&times;</button>

//         `;

//         choicesList.appendChild(cDiv);
//     }
// }


// if (document.getElementById('add-question-btn')) {
//     let questionCount = 0;
//     const questionsList = document.getElementById('questions-list');
//     const addQuestionBtn = document.getElementById('add-question-btn');

//     addQuestionBtn.addEventListener('click', function() {
//         questionCount++;
//         const qDiv = document.createElement('div');
//         qDiv.className = 'exam-question-box';
//         qDiv.innerHTML = `
//             <div class="question-header">
//                 <button type="button" class="remove-question-btn" title="Remove this question">&times;</button>
//             </div>
//             <div class="form-group">
//                 <input type="text" name="questions[${questionCount}][text]" required placeholder="Enter question text">
//             </div>
//             <div class="choices-list"></div>
//             <button type="button" class="add-choice-btn"><i class='fas fa-plus'></i> Add Choice</button>
//         `;
//         questionsList.appendChild(qDiv);

//         const choicesListDiv = qDiv.querySelector('.choices-list');
//         addChoice(choicesListDiv, questionCount);
//         addChoice(choicesListDiv, questionCount);

//         qDiv.querySelector('.add-choice-btn').addEventListener('click', function() {
//             addChoice(choicesListDiv, questionCount);
//         });

//         qDiv.querySelector('.remove-question-btn').addEventListener('click', function() {
//             qDiv.remove();
//         });
//     });

//     function addChoice(choicesList, qNum) {
//         const choiceCount = choicesList.querySelectorAll('.form-group-choice').length;

//         const cDiv = document.createElement('div');
//         cDiv.className = 'form-group-choice';
//         cDiv.innerHTML = `
//             <input type="radio" name="questions[${qNum}][correct_choice]" value="${choiceCount}" class="correct-choice-radio" title="Mark as correct" required>
//             <input type="text" name="questions[${qNum}][choices][]" required placeholder="Enter choice text" class="choice-input">
//             <button type="button" class="remove-choice-btn" title="Remove choice">&times;</button>
//         `;
//         choicesList.appendChild(cDiv);

//         // Add remove choice functionality
//         cDiv.querySelector('.remove-choice-btn').addEventListener('click', function() {
//             cDiv.remove();
//         });
//     }
// }

// if (document.getElementById('add-question-btn')) {
//     let questionCount = 0;
//     const questionsList = document.getElementById('questions-list');
//     const addQuestionBtn = document.getElementById('add-question-btn');

//     addQuestionBtn.addEventListener('click', function() {
//         questionCount++;
//         const qDiv = document.createElement('div');
//         qDiv.className = 'exam-question-box';
//         qDiv.innerHTML = `
//             <div class="question-header">
//                 <button type="button" class="remove-question-btn" title="Remove this question">&times;</button>
//             </div>
//             <div class="form-group">
//                 <input type="text" name="questions[${questionCount}][text]" required placeholder="Enter question text">
//                 <input type="file" name="questions[${questionCount}][image]" accept="image/*" class="question-image-input" title="Upload question image">
//             </div>
//             <div class="choices-list"></div>
//             <button type="button" class="add-choice-btn"><i class='fas fa-plus'></i> Add Choice</button>
//         `;
//         questionsList.appendChild(qDiv);

//         const choicesListDiv = qDiv.querySelector('.choices-list');
//         addChoice(choicesListDiv, questionCount);
//         addChoice(choicesListDiv, questionCount);

//         qDiv.querySelector('.add-choice-btn').addEventListener('click', function() {
//             addChoice(choicesListDiv, questionCount);
//         });

//         qDiv.querySelector('.remove-question-btn').addEventListener('click', function() {
//             qDiv.remove();
//         });
//     });

//     function addChoice(choicesList, qNum) {
//         const choiceCount = choicesList.querySelectorAll('.form-group-choice').length;

//         const cDiv = document.createElement('div');
//         cDiv.className = 'form-group-choice';
//         cDiv.innerHTML = `
//             <input type="radio" name="questions[${qNum}][correct_choice]" value="${choiceCount}" class="correct-choice-radio" title="Mark as correct" required>
//             <input type="text" name="questions[${qNum}][choices][]" required placeholder="Enter choice text" class="choice-input">
//             <input type="file" name="questions[${qNum}][choices_image][]" accept="image/*" class="choice-image-input" title="Upload choice image">
//             <button type="button" class="remove-choice-btn" title="Remove choice">&times;</button>
//         `;
//         choicesList.appendChild(cDiv);

//         // Add remove choice functionality
//         cDiv.querySelector('.remove-choice-btn').addEventListener('click', function() {
//             cDiv.remove();
//         });
//     }
// }

if (document.getElementById('add-question-btn')) {
    let questionCount = 0;
    const questionsList = document.getElementById('questions-list');
    const addQuestionBtn = document.getElementById('add-question-btn');

    addQuestionBtn.addEventListener('click', function() {
        questionCount++;
        const qDiv = document.createElement('div');
        qDiv.className = 'exam-question-box';
        qDiv.innerHTML = `
            <div class="question-header">
                <button type="button" class="remove-question-btn" title="Remove this question">&times;</button>
            </div>
            <div class="form-group" style="flex-direction:row;">
                <input type="text" name="questions[${questionCount}][text]" required placeholder="Enter question text">
                <label class="upload-label">
                    <span class="upload-icon" aria-hidden="true">📷</span>
                    <input type="file" name="questions[${questionCount}][image]" accept="image/*" class="question-image-input" style="display:none;">
                </label>
            </div>
            <div class="choices-list"></div>
            <button type="button" class="add-choice-btn"><i class='fas fa-plus'></i> Add Choice</button>
        `;
        questionsList.appendChild(qDiv);

        const choicesListDiv = qDiv.querySelector('.choices-list');
        addChoice(choicesListDiv, questionCount);
        addChoice(choicesListDiv, questionCount);

        qDiv.querySelector('.add-choice-btn').addEventListener('click', function() {
            addChoice(choicesListDiv, questionCount);
        });

        qDiv.querySelector('.remove-question-btn').addEventListener('click', function() {
            qDiv.remove();
        });
    });

    function addChoice(choicesList, qNum) {
        const choiceCount = choicesList.querySelectorAll('.form-group-choice').length;

        const cDiv = document.createElement('div');
        cDiv.className = 'form-group-choice';
        cDiv.innerHTML = `
            <input type="radio" name="questions[${qNum}][correct_choice]" value="${choiceCount}" class="correct-choice-radio" title="Mark as correct" required>
            <input type="text" name="questions[${qNum}][choices][]" required placeholder="Enter choice text" class="choice-input">
            <label class="upload-label">
                <span class="upload-icon" aria-hidden="true">🖼️</span>
                <input type="file" name="questions[${qNum}][choices_image][]" accept="image/*" class="choice-image-input" style="display:none;">
            </label>
            <button type="button" class="remove-choice-btn" title="Remove choice">&times;</button>
        `;
        choicesList.appendChild(cDiv);

        cDiv.querySelector('.remove-choice-btn').addEventListener('click', function() {
            cDiv.remove();
        });
    }
}