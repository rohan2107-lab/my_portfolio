// Smooth scrolling for internal links
const navLinks = document.querySelectorAll('nav a');
navLinks.forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const targetId = this.getAttribute("href").slice(1);
    document.getElementById(targetId).scrollIntoView({ behavior: "smooth" });
  });
});

function toggleAssistantChat() {
  const chat = document.getElementById('assistantChat');
  chat.style.display = chat.style.display === 'flex' ? 'none' : 'flex';
}

function sendAssistantChat() {
  const input = document.getElementById('assistantInput');
  const log = document.getElementById('assistantLog');
  const userMsg = input.value.trim();
  if (!userMsg) return;

  log.innerHTML += `<div class="user-msg">${userMsg}</div>`;

  let botReply = "Hmm... I’m not sure how to respond to that. 😅";
  if (/project|work/i.test(userMsg)) botReply = "You can find my projects in the Projects section!";
  else if (/contact|email|linkedin/i.test(userMsg)) botReply = "My contact info is in the Contact section!";
  else if (/skills|stack/i.test(userMsg)) botReply = "I'm skilled in Python, Flask, ML, CV, JS, HTML/CSS.";
  else if (/hello|hi/i.test(userMsg)) botReply = "Hey! 👋 What would you like to know?";
  else if (/rohan|who/i.test(userMsg)) botReply = "I'm Rohan, a passionate ML/AI developer! 🤖";

  setTimeout(() => {
    log.innerHTML += `<div class="bot-msg">${botReply}</div>`;
    log.scrollTop = log.scrollHeight;
  }, 500);

  input.value = '';
}


function openModal(project) {
  const modal = document.getElementById('modalOverlay');
  const body = document.getElementById('modalBody');

  if (project === 'crime') {
    body.innerHTML = `
      <h3>Crime Detection System</h3>
      <p>An AI-powered tool built using YOLOv8, Flask, and OpenCV. It analyzes crime scene images to detect suspicious activity and generate insights.</p>
      <ul>
        <li><strong>Tech:</strong> Python, Flask, YOLOv8, OpenCV</li>
        <li><a href="https://github.com/yourusername/crime-detector" target="_blank">GitHub Repo</a></li>
        <li><a href="#" target="_blank">Live Demo</a></li>
      </ul>
    `;
  } else if (project === 'riya') {
    body.innerHTML = `
      <h3>R.I.Y.A Voice Assistant</h3>
      <p>A futuristic voice assistant built with JavaScript, Python, and TensorFlow. It includes voice recognition, web search, and a sci-fi UI.</p>
      <ul>
        <li><strong>Tech:</strong> Flask, JavaScript, HTML/CSS, TensorFlow</li>
        <li><a href="https://github.com/yourusername/riya-assistant" target="_blank">GitHub Repo</a></li>
        <li><a href="#" target="_blank">Live Demo</a></li>
      </ul>
    `;
  }

  modal.style.display = 'flex';
}

function closeModal() {
  document.getElementById('modalOverlay').style.display = 'none';
}

