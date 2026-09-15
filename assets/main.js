(function () {
      "use strict";

      /* ===============================
   SCHEDULE
================================ */

      const schedules = {
        sat: {
          title: "شنبه",
          type: "بدون کلاس زبان",
          blocks: [
            [
              "16:00",
              "17:20",
              "زیست‌شناسی",
              "مطالعه عمیق + تست آموزشی",
              "bio",
              80,
            ],
            ["17:20", "17:35", "استراحت", "استراحت کوتاه", "review", 15],
            ["17:35", "18:45", "شیمی", "یادگیری + تست آموزشی", "chem", 70],
            ["18:45", "19:20", "شام و استراحت", "استراحت", "review", 35],
            ["19:20", "20:30", "ریاضی", "آموزش + حل تمرین", "math", 70],
            ["20:30", "20:40", "استراحت", "استراحت کوتاه", "review", 10],
            ["20:40", "21:40", "فیزیک", "آموزش + تست", "physics", 60],
            [
              "21:40",
              "22:00",
              "آزمون کوتاه",
              "تست ترکیبی چهار درس",
              "test",
              20,
            ],
          ],
        },

        sun: {
          title: "یکشنبه",
          type: "کلاس زبان",
          blocks: [
            ["16:00", "17:00", "زیست‌شناسی", "مطالعه + تست", "bio", 60],
            ["17:00", "18:30", "کلاس زبان", "کلاس زبان", "review", 90],
            ["18:30", "19:00", "شام و استراحت", "استراحت", "review", 30],
            ["19:00", "20:00", "شیمی", "یادگیری + تست", "chem", 60],
            ["20:00", "20:10", "استراحت", "استراحت کوتاه", "review", 10],
            ["20:10", "21:10", "ریاضی", "حل تمرین + تست", "math", 60],
            ["21:10", "21:20", "استراحت", "استراحت کوتاه", "review", 10],
            ["21:20", "22:10", "فیزیک", "آموزش + تست", "physics", 50],
          ],
        },

        mon: {
          title: "دوشنبه",
          type: "بدون کلاس زبان",
          blocks: [
            ["16:00", "17:20", "زیست‌شناسی", "مطالعه عمیق + تست", "bio", 80],
            ["17:20", "17:35", "استراحت", "استراحت کوتاه", "review", 15],
            ["17:35", "18:45", "شیمی", "آموزش + تست", "chem", 70],
            ["18:45", "19:20", "شام و استراحت", "استراحت", "review", 35],
            ["19:20", "20:30", "ریاضی", "آموزش + حل تمرین", "math", 70],
            ["20:30", "20:40", "استراحت", "استراحت کوتاه", "review", 10],
            ["20:40", "21:40", "فیزیک", "آموزش + تست", "physics", 60],
            ["21:40", "22:00", "آزمون کوتاه", "تست ترکیبی", "test", 20],
          ],
        },

        tue: {
          title: "سه‌شنبه",
          type: "کلاس زبان",
          blocks: [
            ["16:00", "17:00", "زیست‌شناسی", "مطالعه + تست", "bio", 60],
            ["17:00", "18:30", "کلاس زبان", "کلاس زبان", "review", 90],
            ["18:30", "19:00", "شام و استراحت", "استراحت", "review", 30],
            ["19:00", "20:00", "شیمی", "آموزش + تست", "chem", 60],
            ["20:00", "20:10", "استراحت", "استراحت کوتاه", "review", 10],
            ["20:10", "21:10", "ریاضی", "حل تمرین + تست", "math", 60],
            ["21:10", "21:20", "استراحت", "استراحت کوتاه", "review", 10],
            ["21:20", "22:10", "فیزیک", "آموزش + تست", "physics", 50],
          ],
        },

        wed: {
          title: "چهارشنبه",
          type: "بدون کلاس زبان",
          blocks: [
            ["16:00", "17:20", "زیست‌شناسی", "مطالعه عمیق + تست", "bio", 80],
            ["17:20", "17:35", "استراحت", "استراحت کوتاه", "review", 15],
            ["17:35", "18:45", "شیمی", "آموزش + تست", "chem", 70],
            ["18:45", "19:20", "شام و استراحت", "استراحت", "review", 35],
            ["19:20", "20:30", "ریاضی", "آموزش + حل تمرین", "math", 70],
            ["20:30", "20:40", "استراحت", "استراحت کوتاه", "review", 10],
            ["20:40", "21:40", "فیزیک", "آموزش + تست", "physics", 60],
            ["21:40", "22:00", "آزمون کوتاه", "تست ترکیبی", "test", 20],
          ],
        },

        thu: {
          title: "پنجشنبه",
          type: "روز مرور + آزمون",
          blocks: [
            [
              "16:00",
              "17:10",
              "زیست‌شناسی",
              "مرور مباحث هفته + تست",
              "bio",
              70,
            ],
            ["17:10", "17:20", "استراحت", "استراحت", "review", 10],
            ["17:20", "18:20", "شیمی", "مرور + تست", "chem", 60],
            ["18:20", "18:50", "شام و استراحت", "استراحت", "review", 30],
            ["18:50", "19:50", "ریاضی", "مرور + تست", "math", 60],
            ["19:50", "20:00", "استراحت", "استراحت", "review", 10],
            ["20:00", "21:00", "فیزیک", "مرور + تست", "physics", 60],
            [
              "21:00",
              "22:00",
              "تحلیل آزمون",
              "بررسی غلط‌ها و مباحث ضعیف",
              "test",
              60,
            ],
          ],
        },

        fri: {
          title: "جمعه",
          type: "آزمون هفتگی + تحلیل",
          blocks: [
            [
              "09:00",
              "10:30",
              "آزمون زیست",
              "آزمون زمان‌دار زیست‌شناسی",
              "test",
              90,
            ],
            ["10:45", "11:45", "آزمون شیمی", "آزمون زمان‌دار شیمی", "test", 60],
            [
              "12:00",
              "13:00",
              "آزمون ریاضی",
              "آزمون زمان‌دار ریاضی",
              "test",
              60,
            ],
            [
              "16:00",
              "17:00",
              "آزمون فیزیک",
              "آزمون زمان‌دار فیزیک",
              "test",
              60,
            ],
            [
              "17:15",
              "18:30",
              "تحلیل آزمون",
              "تحلیل کامل پاسخ‌ها",
              "review",
              75,
            ],
            [
              "19:00",
              "20:00",
              "دفترچه خطا",
              "ثبت و مرور اشتباهات",
              "review",
              60,
            ],
            [
              "20:15",
              "21:00",
              "جبران ضعف",
              "مرور ضعیف‌ترین مبحث هفته",
              "review",
              45,
            ],
          ],
        },
      };

      const customScheduleKey = "mahdi_custom_schedules";
      let selectedPlanDay = "sat";
      let editingPlanIndex = null;

      try {
        const savedSchedules = JSON.parse(
          localStorage.getItem(customScheduleKey) || "{}",
        );
        Object.keys(schedules).forEach((day) => {
          if (Array.isArray(savedSchedules[day])) {
            schedules[day].blocks = savedSchedules[day];
          }
        });
      } catch (error) {}

      /* ===============================
   PLAN
================================ */

      const planContainer = document.getElementById("planContainer");
      const title = document.getElementById("selectedDayTitle");
      const type = document.getElementById("selectedDayType");

      function formatTime(sec) {
        sec = Math.max(0, Math.floor(sec));

        const h = Math.floor(sec / 3600);
        const m = Math.floor((sec % 3600) / 60);
        const s = sec % 60;

        if (h > 0)
          return (
            String(h).padStart(2, "0") +
            ":" +
            String(m).padStart(2, "0") +
            ":" +
            String(s).padStart(2, "0")
          );

        return String(m).padStart(2, "0") + ":" + String(s).padStart(2, "0");
      }

      function renderPlan(day) {
        const data = schedules[day];

        selectedPlanDay = day;
        editingPlanIndex = null;
        cancelPlanEdit();

        title.textContent = data.title;
        type.textContent = data.type;

        planContainer.innerHTML = "";

        data.blocks.forEach((block, index) => {
          const id = "timer_" + day + "_" + index;

          planContainer.insertAdjacentHTML(
            "beforeend",

            `
<div class="ms-block">

<div>

<div class="ms-time">
${block[0]} تا ${block[1]}
</div>

<div class="ms-block-title">
${escapePlanHtml(block[2])}
</div>

<div class="ms-block-desc">
${escapePlanHtml(block[3])}
</div>

<span class="ms-subject ${block[4]}">
${block[5]} دقیقه
</span>

<div class="ms-block-actions">
<button class="ms-block-edit" type="button" onclick="editPlanBlock('${day}', ${index})">ویرایش</button>
<button class="ms-block-delete" type="button" onclick="deletePlanBlock('${day}', ${index})">حذف</button>
</div>

</div>

<div class="ms-timer">

<div
class="ms-timer-display"
id="${id}"
data-minutes="${block[5]}"
data-seconds="${block[5] * 60}">
${formatTime(block[5] * 60)}
</div>

<div class="ms-timer-buttons">

<button
class="ms-start"
onclick="startTimer('${id}')">
▶ شروع
</button>

<button
class="ms-pause"
onclick="pauseTimer('${id}')">
⏸ توقف
</button>

<button
class="ms-reset"
onclick="resetTimer('${id}')">
↻ ریست
</button>

</div>
</div>

</div>
`,
          );
        });
      }

      function escapePlanHtml(value) {
        return String(value ?? "").replace(
          /[&<>'"]/g,
          (character) =>
            ({
              "&": "&amp;",
              "<": "&lt;",
              ">": "&gt;",
              "'": "&#39;",
              '"': "&quot;",
            })[character],
        );
      }

      function persistCustomSchedules() {
        const blocks = {};
        Object.keys(schedules).forEach((day) => {
          blocks[day] = schedules[day].blocks;
        });
        localStorage.setItem(customScheduleKey, JSON.stringify(blocks));
      }

      function clearPlanEditor() {
        document.getElementById("planTopic").value = "";
        document.getElementById("planDescription").value = "";
        document.getElementById("planStart").value = "16:00";
        document.getElementById("planEnd").value = "16:30";
        document.getElementById("planMinutes").value = "30";
        document.getElementById("planSubject").value = "bio";
      }

      window.cancelPlanEdit = function () {
        editingPlanIndex = null;
        clearPlanEditor();
        document.getElementById("planSaveButton").textContent =
          "افزودن به برنامه";
        document.getElementById("planCancelButton").hidden = true;
      };

      window.savePlanBlock = function () {
        const topic = document.getElementById("planTopic").value.trim();
        const description = document
          .getElementById("planDescription")
          .value.trim();
        const start = document.getElementById("planStart").value || "16:00";
        const end = document.getElementById("planEnd").value || "16:30";
        const minutes = parseInt(
          document.getElementById("planMinutes").value,
          10,
        );
        const subject = document.getElementById("planSubject").value;

        if (!topic) {
          alert("مبحث یا عنوان را وارد کن.");
          return;
        }
        if (!Number.isFinite(minutes) || minutes < 1 || minutes > 1440) {
          alert("مدت مطالعه باید بین ۱ تا ۱۴۴۰ دقیقه باشد.");
          return;
        }

        const block = [
          start,
          end,
          topic,
          description || "مطالعه و تمرین",
          subject,
          minutes,
        ];
        const blocks = schedules[selectedPlanDay].blocks;

        if (editingPlanIndex === null) {
          blocks.push(block);
        } else {
          blocks[editingPlanIndex] = block;
        }

        persistCustomSchedules();
        renderPlan(selectedPlanDay);
      };

      window.editPlanBlock = function (day, index) {
        const block = schedules[day].blocks[index];
        selectedPlanDay = day;
        editingPlanIndex = index;
        document.getElementById("planSubject").value = block[4];
        document.getElementById("planTopic").value = block[2];
        document.getElementById("planStart").value = block[0];
        document.getElementById("planEnd").value = block[1];
        document.getElementById("planMinutes").value = block[5];
        document.getElementById("planDescription").value = block[3];
        document.getElementById("planSaveButton").textContent = "ذخیره تغییرات";
        document.getElementById("planCancelButton").hidden = false;
        document
          .getElementById("planEditor")
          .scrollIntoView({ behavior: "smooth", block: "center" });
      };

      window.deletePlanBlock = function (day, index) {
        if (!confirm("این بخش از برنامه حذف شود؟")) return;
        schedules[day].blocks.splice(index, 1);
        persistCustomSchedules();
        renderPlan(day);
      };

      window.exportWeeklyPlan = function () {
        const plan = {};
        Object.keys(schedules).forEach((day) => {
          plan[day] = {
            title: schedules[day].title,
            type: schedules[day].type,
            blocks: schedules[day].blocks,
          };
        });

        const fileData = {
          app: "mahdi-study-weekly-plan",
          version: 1,
          exportedAt: new Date().toISOString(),
          plan,
        };
        const blob = new Blob([JSON.stringify(fileData, null, 2)], {
          type: "application/json",
        });
        const url = URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = url;
        link.download = "mahdi-weekly-plan.json";
        document.body.appendChild(link);
        link.click();
        link.remove();
        URL.revokeObjectURL(url);
      };

      function importWeeklyPlan(file) {
        const reader = new FileReader();
        reader.onload = function () {
          try {
            const fileData = JSON.parse(reader.result);
            if (
              !fileData ||
              !fileData.plan ||
              typeof fileData.plan !== "object"
            ) {
              throw new Error("invalid weekly plan");
            }

            Object.keys(schedules).forEach((day) => {
              const importedDay = fileData.plan[day];
              if (importedDay && Array.isArray(importedDay.blocks)) {
                schedules[day].blocks = importedDay.blocks.filter(
                  (block) => Array.isArray(block) && block.length >= 6,
                );
              }
            });

            persistCustomSchedules();
            renderPlan(selectedPlanDay);
            alert("برنامه هفتگی با موفقیت وارد شد.");
          } catch (error) {
            alert("فایل برنامه هفتگی معتبر نیست.");
          }
        };
        reader.readAsText(file);
      }

      const weeklyPlanFileInput = document.getElementById(
        "weeklyPlanFileInput",
      );
      if (weeklyPlanFileInput) {
        weeklyPlanFileInput.addEventListener("change", () => {
          const file = weeklyPlanFileInput.files[0];
          if (file) importWeeklyPlan(file);
          weeklyPlanFileInput.value = "";
        });
      }

      /* ===============================
   TIMER + ALARM
================================ */

      const timers = {};
      let alarmEnabled = localStorage.getItem("mahdi_alarm") !== "false";

      let audioContext = null;

      function beep() {
        if (!alarmEnabled) return;

        try {
          audioContext =
            audioContext ||
            new (window.AudioContext || window.webkitAudioContext)();

          const now = audioContext.currentTime;

          [0, 0.35, 0.7].forEach((delay) => {
            const osc = audioContext.createOscillator();
            const gain = audioContext.createGain();

            osc.type = "sine";
            osc.frequency.value = 880;

            gain.gain.setValueAtTime(0.0001, now + delay);
            gain.gain.exponentialRampToValueAtTime(0.35, now + delay + 0.03);
            gain.gain.exponentialRampToValueAtTime(0.0001, now + delay + 0.28);

            osc.connect(gain);
            gain.connect(audioContext.destination);

            osc.start(now + delay);
            osc.stop(now + delay + 0.3);
          });
        } catch (e) {}
      }

      window.enableAlarm = function () {
        alarmEnabled = true;
        localStorage.setItem("mahdi_alarm", "true");

        try {
          audioContext =
            audioContext ||
            new (window.AudioContext || window.webkitAudioContext)();

          audioContext.resume();

          const osc = audioContext.createOscillator();
          const gain = audioContext.createGain();

          osc.frequency.value = 660;
          gain.gain.value = 0.12;

          osc.connect(gain);
          gain.connect(audioContext.destination);

          osc.start();
          osc.stop(audioContext.currentTime + 0.18);
        } catch (e) {}

        alert("🔔 آلارم فعال شد.");
      };

      window.startTimer = function (id) {
        if (timers[id]) return;

        const el = document.getElementById(id);

        if (!el) return;

        if (audioContext) {
          try {
            audioContext.resume();
          } catch (e) {}
        }

        let sec = parseInt(el.dataset.seconds);

        if (sec <= 0) return;

        timers[id] = setInterval(() => {
          sec--;

          el.dataset.seconds = sec;
          el.textContent = formatTime(sec);

          if (sec <= 0) {
            clearInterval(timers[id]);
            delete timers[id];

            beep();

            el.style.color = "#e3a900";

            alert("⏰ زمان این بلوک تمام شد!");
          }
        }, 1000);
      };

      window.pauseTimer = function (id) {
        if (timers[id]) {
          clearInterval(timers[id]);
          delete timers[id];
        }
      };

      window.resetTimer = function (id) {
        pauseTimer(id);

        const el = document.getElementById(id);

        if (!el) return;

        const sec = parseInt(el.dataset.minutes) * 60;

        el.dataset.seconds = sec;
        el.textContent = formatTime(sec);
        el.style.color = "";
      };

      /* ===============================
   DAYS
================================ */

      document.querySelectorAll(".ms-day-btn").forEach((btn) => {
        btn.addEventListener("click", () => {
          document
            .querySelectorAll(".ms-day-btn")
            .forEach((x) => x.classList.remove("active"));

          btn.classList.add("active");

          renderPlan(btn.dataset.day);
        });
      });

      /* ===============================
   DIRECT SCORES
================================ */

      const scoreKeys = {
        bio: "mahdi_score_bio",
        chem: "mahdi_score_chem",
        math: "mahdi_score_math",
        physics: "mahdi_score_physics",
      };

      const historyKey = "mahdi_exam_history";

      function getHistory() {
        try {
          const saved = JSON.parse(localStorage.getItem(historyKey) || "[]");
          return Array.isArray(saved) ? saved : [];
        } catch (error) {
          return [];
        }
      }

      function calculateWeighted(values) {
        const weights = { bio: 12, chem: 9, math: 7, physics: 7 };
        let sum = 0;
        let weight = 0;

        examSubjects.forEach((subject) => {
          const value = values[subject];
          if (typeof value === "number" && !isNaN(value)) {
            sum += value * weights[subject];
            weight += weights[subject];
          }
        });

        return weight ? Math.round((sum / weight) * 10) / 10 : null;
      }

      function getScore(subject) {
        const value = localStorage.getItem(scoreKeys[subject]);

        if (value === null) return null;

        const n = parseFloat(value);

        return isNaN(n) ? null : n;
      }

      window.saveScore = function (subject) {
        const map = {
          bio: "inputBio",
          chem: "inputChem",
          math: "inputMath",
          physics: "inputPhysics",
        };

        const input = document.getElementById(map[subject]);

        const value = parseFloat(input.value);

        if (isNaN(value) || value < 0 || value > 100) {
          alert("درصد باید بین ۰ تا ۱۰۰ باشد.");
          return;
        }

        localStorage.setItem(scoreKeys[subject], value);

        input.value = "";

        updateScores();
      };

      /* ===============================
   NEGATIVE MARKING
================================ */

      const examSubjects = ["bio", "chem", "math", "physics"];

      window.calculateExam = function (subject) {
        const correct =
          parseInt(document.getElementById(subject + "Correct").value) || 0;

        const wrong =
          parseInt(document.getElementById(subject + "Wrong").value) || 0;

        const total =
          parseInt(document.getElementById(subject + "Total").value) || 0;

        if (total <= 0) {
          alert("تعداد کل سؤالات را وارد کن.");
          return;
        }

        if (correct < 0 || wrong < 0 || correct + wrong > total) {
          alert("تعداد صحیح و غلط صحیح نیست.");
          return;
        }

        const percent = ((correct * 3 - wrong) / (total * 3)) * 100;

        const rounded = Math.round(percent * 100) / 100;

        localStorage.setItem("mahdi_exam_" + subject, rounded);
        localStorage.setItem(scoreKeys[subject], rounded);

        document.getElementById(subject + "ExamResult").textContent =
          "درصد آزمون: " + rounded + "٪";

        updateScores();
      };

      function getExamScore(subject) {
        const x = localStorage.getItem("mahdi_exam_" + subject);

        return x === null ? null : parseFloat(x);
      }

      function updateExamResults() {
        examSubjects.forEach((subject) => {
          const value = getExamScore(subject);

          const el = document.getElementById(
            "final" + subject.charAt(0).toUpperCase() + subject.slice(1),
          );

          el.textContent = value === null ? "—" : value + "٪";

          const resultEl = document.getElementById(subject + "ExamResult");

          if (value !== null) {
            resultEl.textContent = "درصد آزمون: " + value + "٪";
          }
        });
      }

      /* ===============================
   SCORES UI
================================ */

      function updateScores() {
        const map = {
          bio: "scoreBio",
          chem: "scoreChem",
          math: "scoreMath",
          physics: "scorePhysics",
        };

        const dash = {
          bio: "dashBio",
          chem: "dashChem",
        };

        examSubjects.forEach((subject) => {
          const value = getScore(subject);

          document.getElementById(map[subject]).textContent =
            value === null ? "—" : value + "٪";

          if (dash[subject]) {
            document.getElementById(dash[subject]).textContent =
              value === null ? "—" : value + "٪";
          }
        });

        renderHistory();
        renderProgressChart();
        updateWeightedResult();
        updateExamResults();
      }

      /* ===============================
   HISTORY + LINE CHART
================================ */

      function displayValue(value) {
        return value === null || value === undefined ? "—" : value + "٪";
      }

      function formatHistoryDate(value) {
        if (!value) return "—";
        return new Date(value + "T00:00:00").toLocaleDateString("fa-IR");
      }

      window.saveExamHistory = function () {
        const nameInput = document.getElementById("historyExamName");
        const dateInput = document.getElementById("historyExamDate");
        const values = {};

        examSubjects.forEach((subject) => {
          values[subject] = getScore(subject);
        });

        if (!examSubjects.some((subject) => values[subject] !== null)) {
          alert("ابتدا حداقل درصد یک درس را ثبت کن.");
          return;
        }

        const history = getHistory();
        history.push({
          id: Date.now(),
          name: nameInput.value.trim() || "آزمون بدون نام",
          date: dateInput.value || new Date().toISOString().slice(0, 10),
          ...values,
          overall: calculateWeighted(values),
        });

        localStorage.setItem(historyKey, JSON.stringify(history));
        nameInput.value = "";
        renderHistory();
        renderProgressChart();
      };

      window.deleteExamHistory = function (id) {
        const history = getHistory().filter((item) => item.id !== id);
        localStorage.setItem(historyKey, JSON.stringify(history));
        renderHistory();
        renderProgressChart();
      };

      window.exportStudyDatabase = function () {
        const data = {};

        for (let index = 0; index < localStorage.length; index++) {
          const key = localStorage.key(index);
          if (key && key.indexOf("mahdi_") === 0) {
            data[key] = localStorage.getItem(key);
          }
        }

        const database = {
          app: "mahdi-study-app",
          version: 1,
          exportedAt: new Date().toISOString(),
          data,
        };
        const blob = new Blob([JSON.stringify(database, null, 2)], {
          type: "application/json",
        });
        const url = URL.createObjectURL(blob);
        const link = document.createElement("a");
        const date = new Date().toISOString().slice(0, 10);

        link.href = url;
        link.download = "mahdi-study-database-" + date + ".json";
        document.body.appendChild(link);
        link.click();
        link.remove();
        URL.revokeObjectURL(url);
      };

      function importStudyDatabase(file) {
        const reader = new FileReader();

        reader.onload = function () {
          try {
            const database = JSON.parse(reader.result);
            const data = database && database.data;

            if (!data || typeof data !== "object" || Array.isArray(data)) {
              throw new Error("invalid database");
            }

            Object.keys(data).forEach((key) => {
              if (
                key.indexOf("mahdi_") === 0 &&
                typeof data[key] === "string"
              ) {
                localStorage.setItem(key, data[key]);
              }
            });

            const importedSchedules = JSON.parse(
              localStorage.getItem(customScheduleKey) || "{}",
            );
            Object.keys(schedules).forEach((day) => {
              if (Array.isArray(importedSchedules[day])) {
                schedules[day].blocks = importedSchedules[day];
              }
            });

            applyDark();
            renderPlan(selectedPlanDay);
            updateScores();
            updateExamResults();
            alert("اطلاعات با موفقیت وارد شد.");
          } catch (error) {
            alert("فایل اطلاعات معتبر نیست.");
          }
        };

        reader.readAsText(file);
      }

      const databaseFileInput = document.getElementById("databaseFileInput");
      if (databaseFileInput) {
        databaseFileInput.addEventListener("change", () => {
          const file = databaseFileInput.files[0];
          if (file) importStudyDatabase(file);
          databaseFileInput.value = "";
        });
      }

      function renderHistory() {
        const body = document.getElementById("historyTableBody");
        const empty = document.getElementById("historyEmpty");
        if (!body || !empty) return;

        const history = getHistory();
        body.innerHTML = "";
        empty.style.display = history.length ? "none" : "block";

        history
          .slice()
          .reverse()
          .forEach((item) => {
            const row = document.createElement("tr");
            row.innerHTML = `
            <td>${item.name}</td>
            <td>${formatHistoryDate(item.date)}</td>
            <td>${displayValue(item.bio)}</td>
            <td>${displayValue(item.chem)}</td>
            <td>${displayValue(item.math)}</td>
            <td>${displayValue(item.physics)}</td>
            <td>${displayValue(item.overall)}</td>
            <td><button class="ms-delete-history" type="button" onclick="deleteExamHistory(${item.id})">حذف</button></td>
          `;
            body.appendChild(row);
          });
      }

      function renderProgressChart() {
        const history = getHistory().slice(-10);
        const charts = {
          bio: { id: "bioProgressChart", color: "#2f7d72" },
          chem: { id: "chemProgressChart", color: "#d69b3c" },
          math: { id: "mathProgressChart", color: "#5279b8" },
          physics: { id: "physicsProgressChart", color: "#9a67b1" },
          overall: { id: "overallProgressChart", color: "#c45d70" },
        };

        Object.entries(charts).forEach(([series, chart]) => {
          const svg = document.getElementById(chart.id);
          if (!svg) return;

          const width = 720;
          const height = 250;
          const left = 42;
          const right = 16;
          const top = 18;
          const bottom = 35;
          const chartWidth = width - left - right;
          const chartHeight = height - top - bottom;
          const x = (index) =>
            history.length < 2
              ? left + chartWidth / 2
              : left + (index / (history.length - 1)) * chartWidth;
          const y = (value) => top + ((100 - value) / 100) * chartHeight;
          const valueFor = (item) =>
            series === "overall" ? item.overall : item[series];
          let markup = "";

          [0, 25, 50, 75, 100].forEach((value) => {
            const yPosition = y(value);
            markup += `<line class="ms-line-grid" x1="${left}" y1="${yPosition}" x2="${width - right}" y2="${yPosition}" />`;
            markup += `<text class="ms-line-axis" x="${left - 8}" y="${yPosition + 4}" text-anchor="end">${value}٪</text>`;
          });

          if (!history.length) {
            markup +=
              '<text class="ms-line-empty" x="360" y="130">نتیجه‌ای ثبت نشده است</text>';
          } else {
            history.forEach((item, index) => {
              markup += `<text class="ms-line-label" x="${x(index)}" y="${height - 10}" text-anchor="middle">${index + 1}</text>`;
            });

            const points = history
              .map((item, index) => {
                const value = valueFor(item);
                return value === null || value === undefined || isNaN(value)
                  ? null
                  : `${x(index)},${y(value)}`;
              })
              .filter(Boolean);

            if (points.length > 1) {
              markup += `<polyline class="ms-line-path" stroke="${chart.color}" points="${points.join(" ")}" />`;
            }

            history.forEach((item, index) => {
              const value = valueFor(item);
              if (value !== null && value !== undefined && !isNaN(value)) {
                markup += `<circle class="ms-line-point" fill="${chart.color}" cx="${x(index)}" cy="${y(value)}" r="4" />`;
              }
            });
          }

          svg.innerHTML = markup;
        });
      }

      /* ===============================
   WEIGHTED RESULT
================================ */

      function updateWeightedResult() {
        const weights = {
          bio: 12,
          chem: 9,
          math: 7,
          physics: 7,
        };

        let sum = 0;
        let weight = 0;

        examSubjects.forEach((subject) => {
          const value = getScore(subject);

          if (value !== null) {
            sum += value * weights[subject];
            weight += weights[subject];
          }
        });

        const result = document.getElementById("weightedResult");
        const dashboard = document.getElementById("dashAverage");
        const progress = document.getElementById("resultProgress");
        const text = document.getElementById("resultText");

        if (weight === 0) {
          result.textContent = "—";
          dashboard.textContent = "—";
          progress.style.width = "0%";
          text.textContent = "هنوز درصد کافی ثبت نشده است.";

          return;
        }

        const avg = sum / weight;

        const rounded = Math.round(avg * 10) / 10;

        result.textContent = rounded;
        dashboard.textContent = rounded + "٪";
        progress.style.width = Math.max(0, Math.min(100, avg)) + "%";

        if (avg >= 80) {
          text.textContent = "🔥 عالی! وضعیت درصدی‌ات خیلی قوی است.";
        } else if (avg >= 65) {
          text.textContent = "💪 خیلی خوب! با تحلیل دقیق می‌توانی بالاتر بروی.";
        } else if (avg >= 50) {
          text.textContent = "🟢 وضعیت متوسط رو به خوب است.";
        } else if (avg >= 35) {
          text.textContent =
            "🟡 جای پیشرفت زیادی وجود دارد؛ روی مباحث ضعیف تمرکز کن.";
        } else {
          text.textContent =
            "🎯 فعلاً روی یادگیری مفهومی و تثبیت پایه تمرکز کن.";
        }
      }

      /* ===============================
   SLIDER + SCROLL REVEAL
================================ */

      const slider = document.getElementById("studySlider");
      const slides = slider ? slider.querySelectorAll(".ms-slide") : [];
      const dots = slider ? slider.querySelectorAll(".ms-slider-dot") : [];
      let activeSlide = 0;
      let sliderTimer;

      function showSlide(index) {
        if (!slides.length) return;

        activeSlide = (index + slides.length) % slides.length;
        slides.forEach((slide, slideIndex) => {
          slide.classList.toggle("active", slideIndex === activeSlide);
        });
        dots.forEach((dot, dotIndex) => {
          dot.classList.toggle("active", dotIndex === activeSlide);
        });
      }

      function resetSliderTimer() {
        clearInterval(sliderTimer);
        sliderTimer = setInterval(() => showSlide(activeSlide + 1), 5500);
      }

      if (slider) {
        slider.querySelector(".prev").addEventListener("click", () => {
          showSlide(activeSlide - 1);
          resetSliderTimer();
        });
        slider.querySelector(".next").addEventListener("click", () => {
          showSlide(activeSlide + 1);
          resetSliderTimer();
        });
        dots.forEach((dot, index) => {
          dot.addEventListener("click", () => {
            showSlide(index);
            resetSliderTimer();
          });
        });
        resetSliderTimer();
      }

      const studyNavbar = document.getElementById("studyNavbar");
      let navbarScrollFrame = null;
      const backToTopButton = document.getElementById("backToTopButton");

      window.goToSection = function (sectionId) {
        const section = document.getElementById(sectionId);
        if (!section) return;
        section.scrollIntoView({ behavior: "smooth", block: "start" });
      };

      function updateNavbarState() {
        if (!studyNavbar) return;
        studyNavbar.classList.toggle("is-collapsed", window.scrollY > 90);
        if (backToTopButton) {
          backToTopButton.classList.toggle("is-visible", window.scrollY > 320);
        }
        navbarScrollFrame = null;
      }

      window.addEventListener(
        "scroll",
        () => {
          if (navbarScrollFrame !== null) return;
          navbarScrollFrame = window.requestAnimationFrame(updateNavbarState);
        },
        { passive: true },
      );
      updateNavbarState();

      if (backToTopButton) {
        backToTopButton.addEventListener("click", () => {
          window.scrollTo({ top: 0, behavior: "smooth" });
        });
      }

      const revealItems = document.querySelectorAll(
        ".ms-dashboard, .ms-section, .ms-footer",
      );
      revealItems.forEach((item) => item.classList.add("ms-reveal"));

      if ("IntersectionObserver" in window) {
        const revealObserver = new IntersectionObserver(
          (entries, observer) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                entry.target.classList.add("is-visible");
                observer.unobserve(entry.target);
              }
            });
          },
          { threshold: 0.12 },
        );
        revealItems.forEach((item) => revealObserver.observe(item));
      } else {
        revealItems.forEach((item) => item.classList.add("is-visible"));
      }

      /* ===============================
   DARK MODE
================================ */

      function applyDark() {
        const app = document.getElementById("mahdi-study-app");

        const dark = localStorage.getItem("mahdi_dark") === "true";

        app.classList.toggle("dark", dark);
      }

      window.toggleDarkMode = function () {
        const app = document.getElementById("mahdi-study-app");

        const active = app.classList.toggle("dark");

        localStorage.setItem("mahdi_dark", active);
      };

      /* ===============================
   INITIALIZE
================================ */

      applyDark();
      renderPlan("sat");
      const historyDate = document.getElementById("historyExamDate");
      if (historyDate) {
        historyDate.value = new Date().toISOString().slice(0, 10);
      }
      updateScores();
      renderHistory();
      renderProgressChart();
    })();
  