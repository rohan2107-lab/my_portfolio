// Smooth scrolling for internal links
const navLinks = document.querySelectorAll('nav a');
navLinks.forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const targetId = this.getAttribute("href").slice(1);
    document.getElementById(targetId).scrollIntoView({ behavior: "smooth" });
  });
});

// for my chatbot.....
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

// for my project.....
function openModal(project) {
  const modal = document.getElementById('modalOverlay');
  const body = document.getElementById('modalBody');

  if (project === 'crime') {
    body.innerHTML = `
      <h3>Crime Detection System</h3>
      <p>An AI-powered tool built using YOLOv8, Flask, and OpenCV. It detects crime-related objects (weapons, blood stains, body postures) from images to assist forensic investigations.</p>
      <ul>
        <li><strong>Tech:</strong> Python, Flask, YOLOv8, OpenCV, HTML/CSS</li>
        <li><a href="https://github.com/yourusername/crime-detector" target="_blank">GitHub Repo</a></li>
        <li><a href="#" target="_blank">Live Demo</a></li>
      </ul>
    `;
  } else if (project === 'riya') {
    body.innerHTML = `
      <h3>R.I.Y.A Voice Assistant</h3>
      <p>A futuristic voice assistant built with Python and JavaScript. It supports file organization, system tasks, and voice queries, all within a dashboard-style UI.</p>
      <ul>
        <li><strong>Tech:</strong> Python, Flask, SpeechRecognition, JS, HTML/CSS</li>
        <li><a href="https://github.com/yourusername/riya-assistant" target="_blank">GitHub Repo</a></li>
        <li><a href="#" target="_blank">Live Demo</a></li>
      </ul>
    `;
  } else if (project === 'road-anomaly') {
    body.innerHTML = `
      <h3>Road Anomaly Detection</h3>
      <p>Detects potholes, cracks, and surface damage using YOLOv8 and Autoencoders. Designed to support smart city infrastructure and road maintenance systems.</p>
      <ul>
        <li><strong>Tech:</strong> Python, YOLOv8, OpenCV, Autoencoders, Kaggle Dataset</li>
        <li><a href="https://github.com/yourusername/road-anomaly" target="_blank">GitHub Repo</a></li>
        <li><a href="#" target="_blank">Live Demo</a></li>
      </ul>
    `;
  } else if (project === 'weapon-detection') {
    body.innerHTML = `
      <h3>Weapon Detection System</h3>
      <p>Real-time weapon detection system built using Detectron2 and Faster R-CNN. Capable of recognizing firearms and explosives in images and videos.</p>
      <ul>
        <li><strong>Tech:</strong> Python, Detectron2, OpenCV, PyTorch</li>
        <li><a href="https://github.com/yourusername/weapon-detector" target="_blank">GitHub Repo</a></li>
        <li><a href="#" target="_blank">Live Demo</a></li>
      </ul>
    `;
  } else if (project === 'voting-system') {
    body.innerHTML = `
      <h3>Face Recognition Voting System</h3>
      <p>Smart voting system that verifies voters using face recognition. Prevents duplicate votes using Aadhar-based verification and real-time logging.</p>
      <ul>
        <li><strong>Tech:</strong> Python, Flask, OpenCV, Haar Cascade, KNN</li>
        <li><a href="https://github.com/yourusername/face-voting-system" target="_blank">GitHub Repo</a></li>
        <li><a href="#" target="_blank">Live Demo</a></li>
      </ul>
    `;
  } else if (project === 'steganography') {
    body.innerHTML = `
      <h3>Image Steganography Tool</h3>
      <p>Tool for securely hiding and detecting messages in images using LSB technique. Includes a CNN-based classifier to detect stego images.</p>
      <ul>
        <li><strong>Tech:</strong> Python, CNN, LSB Steganography, NumPy, PIL</li>
        <li><a href="https://github.com/yourusername/image-steganography" target="_blank">GitHub Repo</a></li>
        <li><a href="#" target="_blank">Live Demo</a></li>
      </ul>
    `;
  } else if (project === 'finguard') {
    body.innerHTML = `
      <h3>FinGuard – Financial Literacy App</h3>
      <p>Mobile app promoting financial literacy and fraud awareness. Features include gamified learning, fraud simulations, AI chatbot support, and multilingual UI.</p>
      <ul>
        <li><strong>Tech:</strong> Flutter, Firebase, Dialogflow, Python (Backend)</li>
        <li><a href="https://github.com/yourusername/finguard" target="_blank">GitHub Repo</a></li>
        <li><a href="#" target="_blank">Live Demo</a></li>
      </ul>
    `;
  } else if (project === 'hospital-advisor') {
    body.innerHTML = `
      <h3>Hospital Resource Allocation Advisor</h3>
      <p>A predictive system that recommends hospital resources based on patient condition, severity, and test results. It uses clustering and time-series forecasting to optimize assignments.</p>
      <ul>
        <li><strong>Tech:</strong> Python, Pandas, Scikit-learn, KMeans, XGBoost</li>
        <li><a href="https://github.com/yourusername/hospital-advisor" target="_blank">GitHub Repo</a></li>
        <li><a href="#" target="_blank">Live Demo</a></li>
      </ul>
    `;
  } else if (project === 'landslide') {
    body.innerHTML = `
      <h3>Landslide Prediction Model</h3>
      <p>A hybrid ML-DL model using Transformers and Logistic Regression to predict landslides based on geological, meteorological, and hydrological features.</p>
      <ul>
        <li><strong>Tech:</strong> Python, Transformers, Logistic Regression, Matplotlib</li>
        <li><a href="https://github.com/yourusername/landslide-prediction" target="_blank">GitHub Repo</a></li>
        <li><a href="#" target="_blank">Live Demo</a></li>
      </ul>
    `;
  } else if (project === 'fake-news') {
    body.innerHTML = `
      <h3>Fake News Detection System</h3>
      <p>Classifies news articles as real or fake using TF-IDF features and machine learning models like Logistic Regression and SVM. Includes confusion matrix and classification report.</p>
      <ul>
        <li><strong>Tech:</strong> Python, Scikit-learn, TF-IDF, NLP, SVM</li>
        <li><a href="https://github.com/yourusername/fake-news-detector" target="_blank">GitHub Repo</a></li>
        <li><a href="#" target="_blank">Live Demo</a></li>
      </ul>
    `;
  }

  modal.style.display = 'flex';
}

function closeModal() {
  document.getElementById('modalOverlay').style.display = 'none';
}