const chk = document.getElementById("chk");
const html = document.querySelector("html");

chk.addEventListener("click", function () {
  //check color theme saat ini, lalu ubah
  if (html.dataset.colorMode === "dark") {
    html.dataset.colorMode = "light";
  } else {
    html.dataset.colorMode = "dark";
  }
});

const navLinks = document.querySelectorAll(".nav-item");
const menuToggle = document.getElementById("navbarNav");
const bsCollapse = new bootstrap.Collapse(menuToggle);
navLinks.forEach((l) => {
  l.addEventListener("click", () => {
    bsCollapse.toggle();
  });
});

//logic placeholder
let input;
const placeholder = "Insert your name";
let charIndex = 0;

function typePlaceholder() {
  if (input && charIndex < placeholder.length) {
    input.placeholder = placeholder.slice(0, charIndex + 1);
    charIndex++;
    setTimeout(typePlaceholder, 100);
  }
}

window.onload = function () {
  input = document.getElementById("userName");
  if (input) {
    input.placeholder = "";
    setTimeout(typePlaceholder, 1000);
  } else {
    console.error("Element with ID 'userName' not found");
  }
};
document.addEventListener("DOMContentLoaded", () => {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme) {
    document.documentElement.setAttribute("data-color-mode", savedTheme);
    if (savedTheme === "light") {
      document.getElementById("chk").checked = true;
    }
  }

  // Set bahasa default dan tampilkan pertanyaan
  language = "en";
  questions = questionsEnglish;
  displayQuestions();
});

const themeToggle = document.getElementById("chk");

themeToggle.addEventListener("change", () => {
  if (themeToggle.checked) {
    document.documentElement.setAttribute("data-color-mode", "light");
    localStorage.setItem("theme", "light");
  } else {
    document.documentElement.setAttribute("data-color-mode", "dark");
    localStorage.setItem("theme", "dark");
  }
});

let questions = [];
let language = "en"; // Default to English
const userName = localStorage.getItem("userName");

const questionContainer = document.getElementById("questions");
const userNameInput = document.getElementById("userName");
const submitNameBtn = document.getElementById("submitName");

const questionsIndo = [
  "Saya akan merasa tidak nyaman jika tidak mengakses langsung informasi dari telepon pintar saya.",
  "Saya akan merasa terganggu jika saya tidak dapat melihat informasi dari telepon pintar saat saya sedang ingin melakukannya.",
  "Tidak dapat melihat berita (misalnya kejadian saat ini, cuaca, dsb) dari telepon pintar saya akan membuat saya resah.",
  "Saya akan merasa terganggu jika saya tidak dapat menggunakan telepon pintar saya dan/atau telepon pintar saya itu tidak ada saat saya membutuhkannya.",
  "Saya akan sangat takut bila telepon pintar saya kehabisan baterai.",
  "Saya akan panik jika pulsa atau paket data limit bulanan saya habis.",
  "Jika tidak ada sinyal data atau tidak dapat terhubung dengan Wi-Fi, maka saya akan terus memeriksa apakah sinyal atau jaringan Wi-Fi sudah ada.",
  "Jika saya tidak dapat menggunakan telepon pintar saya, maka saya akan merasa seperti terdampar di tempat asing.",
  "Jika saya tidak dapat cek telepon pintar sementara waktu, maka saya akan merasa sangat ingin mengeceknya.",
  "Jika saya tidak membawa telepon pintar saya, maka saya akan merasa cemas karena tidak dapat langsung berkomunikasi dengan keluarga dan/atau teman-teman saya.",
  "Jika saya tidak membawa telepon pintar saya, maka saya akan merasa khawatir karena keluarga saya dan/atau teman-teman tidak dapat menghubungi saya.",
  "Jika saya tidak membawa telepon pintar saya, maka saya akan merasa resah karena saya tidak dapat menerima pesan dan telepon.",
  "Jika saya tidak membawa telepon pintar saya, maka saya akan merasa cemas karena tidak dapat berhubungan dengan keluarga dan/atau teman-teman saya.",
  "Jika saya tidak membawa telepon pintar saya, maka saya akan merasa resah karena saya tidak akan tahu apakah ada seseorang yang telah mencoba menelpon saya.",
  "Jika saya tidak membawa telepon pintar saya, maka saya merasa cemas hubungan saya dengan keluarga dan/atau teman-teman saya akan rusak.",
  "Jika saya tidak membawa telepon pintar saya, maka saya akan merasa resah karena terputus dari identitas online saya.",
  "Jika saya tidak membawa telepon pintar saya, maka saya merasa tidak nyaman karena tidak dapat update status sosial dan jaringan online.",
  "Jika saya tidak membawa telepon pintar saya, maka saya merasa janggal karena tidak dapat cek notifikasi update dari koneksi dan jaringan online.",
  "Jika saya tidak membawa telepon pintar saya, maka saya akan merasa aneh karena tidak tahu apa yang harus dilakukan.",
];

const questionsEnglish = [
  "I would feel uncomfortable if I could not directly access information from my smartphone.",
  "I would feel disturbed if I could not check information from my smartphone when I wanted to.",
  "Not being able to see news (e.g., current events, weather, etc.) from my smartphone would make me anxious.",
  "I would feel disturbed if I could not use my smartphone and/or my smartphone was not available when I needed it.",
  "I would be very afraid if my smartphone's battery ran out.",
  "I would panic if my monthly credit or data package ran out.",
  "If there is no data signal or I cannot connect to Wi-Fi, I will keep checking whether the signal or Wi-Fi network is available.",
  "If I cannot use my smartphone, I would feel like I was stranded in a foreign place.",
  "If I cannot check my smartphone for a while, I will feel a strong urge to check it.",
  "If I do not bring my smartphone, I will feel anxious because I cannot communicate directly with my family and/or friends.",
  "If I do not bring my smartphone, I will feel worried because my family and/or friends cannot contact me.",
  "If I do not bring my smartphone, I will feel anxious because I cannot receive messages and calls.",
  "If I do not bring my smartphone, I will feel anxious because I cannot connect with my family and/or friends.",
  "If I do not bring my smartphone, I will feel anxious because I will not know if someone has tried to call me.",
  "If I do not bring my smartphone, I feel anxious that my relationships with my family and/or friends will be damaged.",
  "If I do not bring my smartphone, I will feel uneasy because I am disconnected from my online identity.",
  "If I do not bring my smartphone, I feel uncomfortable because I cannot update my social status and online network.",
  "If I do not bring my smartphone, I will feel strange because I cannot check notifications from my connections and online network.",
  "If I do not bring my smartphone, I will feel odd because I do not know what to do.",
];

document.addEventListener("DOMContentLoaded", function () {
  const instructionTextElement = document.getElementById("instructionText");
  if (instructionTextElement) {
    instructionTextElement.textContent =
      "Please indicate to what extent you agree or disagree with the following statements related to your smartphone.";
  }
  const scaleTextElement = document.getElementById("scaleText");
  const scaleItems = [
    { value: 1, text: "Strongly disagree" },
    { value: 2, text: "Disagree" },
    { value: 3, text: "Slightly disagree" },
    { value: 4, text: "Neutral" },
    { value: 5, text: "Slightly agree" },
    { value: 6, text: "Agree" },
    { value: 7, text: "Strongly agree" },
  ];

  scaleItems.forEach((item) => {
    const scaleItem = document.createElement("div");
    scaleItem.className = "scale-item";
    scaleItem.innerHTML = `
        <div class="scale-value">${item.value}</div>
        <div class="scale-text">${item.text}</div>
    `;
    scaleTextElement.appendChild(scaleItem);
  });
});

// Langkah 1: Masukkan Nama
// Event listener untuk tombol submit nama
if (submitNameBtn) {
  submitNameBtn.addEventListener("click", () => {
    const userName = userNameInput.value.trim();
    if (userName) {
      // Simpan nama pengguna
      localStorage.setItem("userName", userName);
      // Beralih ke halaman questionnaire.html
      window.location.href = "questionnaire.html";
    } else {
      alert("Silahkan masukkan nama Anda.");
    }
  });
}
// Opsional: Menangani submit form dengan tombol Enter
if (userNameInput) {
  userNameInput.addEventListener("keyup", (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      submitNameBtn.click();
    }
  });
}
// Langkah 2 : Tampilkan Kuesioner
function displayQuestions() {
  const questionsContainer = document.getElementById("questions");
  if (!questionsContainer) {
    console.error("Element with ID 'questions' not found");
    return;
  }

  questionsContainer.innerHTML = ""; // Clear existing questions

  questions.forEach((question, index) => {
    const questionElement = document.createElement("div");
    questionElement.className = "question";
    questionElement.innerHTML = `
            <p>${index + 1}. ${question}</p>
            <div class="options">
                <div class="radio-group">
                    ${[1, 2, 3, 4, 5, 6, 7]
                      .map(
                        (value) => `
                        <label class="radio-option">
                            <input type="radio" name="q${index}" value="${value}" id="q${index}o${value}">
                            <span>${value}</span>
                        </label>
                    `
                      )
                      .join("")}
                </div>
            </div>
        `;
    questionsContainer.appendChild(questionElement);
  });

  setupEventListeners();
  loadAnswers();
}

function setupEventListeners() {
  document.querySelectorAll('input[type="radio"]').forEach((radio) => {
    radio.addEventListener("change", function () {
      saveAnswer(this.name, this.value);
    });
  });

  window.addEventListener("scroll", loadAnswers);

  const form = document.getElementById("nmpqForm");
  if (form) {
    form.addEventListener("submit", handleFormSubmit);
  } else {
    console.error("Form with ID 'nmpqForm' not found");
  }
}

function saveAnswer(name, value) {
  localStorage.setItem(name, value);
}

function loadAnswers() {
  document.querySelectorAll('input[type="radio"]').forEach((radio) => {
    const savedValue = localStorage.getItem(radio.name);
    if (savedValue === radio.value) {
      radio.checked = true;
    }
  });
}

function handleFormSubmit(e) {
  e.preventDefault();
  console.log("Form submitted");

  const unanswered = questions.findIndex((_, index) => {
    const checked = document.querySelector(`input[name="q${index}"]:checked`);
    console.log(
      `Question ${index + 1}: ${checked ? "Answered" : "Unanswered"}`
    );
    return !checked;
  });
  console.log("Unanswered question index:", unanswered);

  if (unanswered !== -1) {
    alert(`Mohon jawab pertanyaan nomor ${unanswered + 1}`);
    return;
  }

  let totalScore = 0;
  const totalQuestions = questions.length;
  for (let i = 0; i < totalQuestions; i++) {
    const answer = document.querySelector(`input[name="q${i}"]:checked`);
    if (answer) {
      totalScore += parseInt(answer.value);
    } else {
      alert(`Mohon jawab pertanyaan nomor ${unanswered + 1}`);
      console.log(`Mohon jawab pertanyaan nomor ${i + 1}`);
      return;
    }
  }

  console.log(userName + " dengan skor: " + totalScore);

  // Simpan data ke localStorage
  localStorage.setItem("nmpqScore", totalScore);
  localStorage.setItem("userName", userName);

  // Panggil displayResult
  //alert("Semua pertanyaan telah dijawab. Form siap dikirim!");
  displayResult(totalScore);
}
function displayResult(totalScore) {
  let description, advice;

  if (totalScore <= 20) {
    description = "Tidak ada nomophobia";
    advice =
      "Anda memiliki hubungan yang sehat dengan ponsel Anda dan tidak ada masalah ketika terpisah darinya.";
  } else if (totalScore <= 60) {
    description = "Nomophobia Ringan";
    advice =
      "Anda sedikit gelisah ketika Anda lupa telepon di rumah selama sehari atau terjebak di suatu tempat yang tidak ada WiFinya, tetapi kecemasannya tidak terlalu berlebihan. \nPerhatikan penggunaan smartphone Anda dan coba untuk menguranginya jika perlu.";
  } else if (totalScore <= 100) {
    description = "Nomophobia Sedang";
    advice =
      "Anda mungkin bergantung cukup banyak pada smartphone Anda. Anda sering memeriksa update ponsel Anda, saat berjalan di jalan atau berbicara dengan teman, dan Anda sering merasa khawatir ketika ponsel Anda tidak terhubung. \nCobalah sesekali melepaskan diri.";
  } else {
    description = "Nomophobia Berat";
    advice =
      "Mata dan pikiran Anda hampir tidak bisa jauh lebih dari 60 detik tanpa memeriksa ponsel Anda. Memeriksa ponsel menjadi kegiatan awal pada pagi hari dan yang terakhir di malam hari, dan mendominasi aktivitas Anda sepanjang hari. \nAnda mungkin perlu mengevaluasi bagaimana smartphone memengaruhi hidup Anda.";
  }

  // Simpan data tambahan ke localStorage
  localStorage.setItem("description", description);
  localStorage.setItem("advice", advice);

  // Log untuk debugging
  console.log("Data saved to localStorage:", {
    nmpqScore: totalScore,
    userName: userName,
    description: description,
    advice: advice,
  });

  // Pindah ke halaman result.html
  window.location.href = "result.html";
}
// Inisialisasi
function initialize() {
  if (language === "id") {
    questions = questionsIndo;
  } else {
    questions = questionsEnglish;
  }
  displayQuestions();
}

// Panggil fungsi setelah DOM dimuat
document.addEventListener("DOMContentLoaded", initialize);
