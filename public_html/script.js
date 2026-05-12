// ===== SECTION NAVIGATION =====
function showSection(sectionId, number) {
  document.querySelectorAll('section').forEach(s => {
    s.classList.remove('active-section');
    s.style.display = '';
  });

  document.querySelectorAll(`#${sectionId}`).forEach(s => {
    s.classList.add('active-section');
  });

  const navLinks = document.getElementById('navu').getElementsByTagName('a');
  for (const a of navLinks) a.classList.remove('active');
  const activeLink = document.getElementById(number);
  if (activeLink) activeLink.classList.add('active');
}

// ===== DARK / LIGHT MODE =====
function toggleDarkMode() {
  document.body.classList.toggle('light-mode');
  const icon = document.getElementById('toggleIcon');
  if (document.body.classList.contains('light-mode')) {
    icon.className = 'bx bx-moon toggle-icon';
    localStorage.setItem('theme', 'light');
  } else {
    icon.className = 'bx bx-sun toggle-icon';
    localStorage.setItem('theme', 'dark');
  }
}

// Restore saved theme
(function () {
  const saved = localStorage.getItem('theme');
  if (saved === 'light') {
    document.body.classList.add('light-mode');
    document.addEventListener('DOMContentLoaded', () => {
      const icon = document.getElementById('toggleIcon');
      if (icon) icon.className = 'bx bx-moon toggle-icon';
    });
  }
})();

// ===== TYPING ANIMATION =====
const typingWords = ['Software Engineer', 'Undergraduate Researcher', 'Full-Stack Developer'];
let wordIdx = 0, charIdx = 0, isDeleting = false;

function typeEffect() {
  const el = document.getElementById('typingText');
  if (!el) return;
  const word = typingWords[wordIdx];
  el.textContent = isDeleting ? word.substring(0, charIdx--) : word.substring(0, charIdx++);

  if (!isDeleting && charIdx > word.length) {
    isDeleting = true;
    setTimeout(typeEffect, 1800);
    return;
  }
  if (isDeleting && charIdx < 0) {
    isDeleting = false;
    wordIdx = (wordIdx + 1) % typingWords.length;
    charIdx = 0;
    setTimeout(typeEffect, 400);
    return;
  }
  setTimeout(typeEffect, isDeleting ? 60 : 100);
}

// ===== BLOG: LIKES =====
function likePost(postId) {
  const liked = localStorage.getItem(`post-${postId}-liked`) === 'true';
  let count = parseInt(localStorage.getItem(`post-${postId}-likes`) || '0');

  if (liked) {
    count = Math.max(0, count - 1);
    localStorage.setItem(`post-${postId}-liked`, 'false');
  } else {
    count++;
    localStorage.setItem(`post-${postId}-liked`, 'true');
  }
  localStorage.setItem(`post-${postId}-likes`, count);

  const btn = document.getElementById(`like-btn-${postId}`);
  const countEl = document.getElementById(`like-count-${postId}`);
  if (countEl) countEl.textContent = count;
  if (btn) btn.classList.toggle('liked', !liked);
}

// ===== BLOG: COMMENTS =====
function addComment(postId) {
  const input = document.getElementById(`comment-input-${postId}`);
  const comment = input ? input.value.trim() : '';
  if (!comment) return;

  const comments = JSON.parse(localStorage.getItem(`post-${postId}-comments`) || '[]');
  comments.push(comment);
  localStorage.setItem(`post-${postId}-comments`, JSON.stringify(comments));
  displayComments(postId);
  input.value = '';
}

function displayComments(postId) {
  const list = document.getElementById(`comments-list-${postId}`);
  if (!list) return;
  const comments = JSON.parse(localStorage.getItem(`post-${postId}-comments`) || '[]');
  list.innerHTML = comments.map(c => `<li>${c}</li>`).join('');
}

// ===== INIT =====
document.addEventListener('DOMContentLoaded', () => {
  // Restore blog data
  document.querySelectorAll('.blog-card').forEach(card => {
    const postId = card.id.split('-')[1];
    const count = localStorage.getItem(`post-${postId}-likes`) || 0;
    const liked = localStorage.getItem(`post-${postId}-liked`) === 'true';
    const countEl = document.getElementById(`like-count-${postId}`);
    const btn = document.getElementById(`like-btn-${postId}`);
    if (countEl) countEl.textContent = count;
    if (btn && liked) btn.classList.add('liked');
    displayComments(postId);
  });

  // Start typing animation
  setTimeout(typeEffect, 500);

  // Header scroll shadow
  const header = document.getElementById('mainHeader');
  window.addEventListener('scroll', () => {
    header.style.boxShadow = window.scrollY > 10 ? '0 4px 30px rgba(0,0,0,0.3)' : 'none';
  });
});
