// --- CONFIGURACIÓN DE LA API DE GEMINI ---
const API_KEY = ""; // La clave se proporcionará en el entorno si aplica
const TEXT_API_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-05-20:generateContent?key=${API_KEY}`;
const TTS_API_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-tts:generateContent?key=${API_KEY}`;
const TTS_VOICE = "Puck";
const SPLASH_DURATION_MS = 3000;

// --- Datos de Rutina (igual que en tu archivo original) ---
const ROUTINE_DATA = {
    "Lunes": {
        title: "Día de Fuerza y Estabilidad",
        exercises: [
            { name: "Calentamiento Articular", type: "WORK", duration: 60, icon: '🔥' },
            { name: "Circuito A (Ronda 1)", type: "WORK", duration: 0 },
            { name: "Sentadillas con peso corporal", type: "WORK", duration: 45, refId: 'ex1' },
            { name: "Descanso Breve", type: "REST", duration: 15 },
            { name: "Flexiones (rodillas o completas)", type: "WORK", duration: 45, refId: 'ex2' },
            { name: "Descanso Breve", type: "REST", duration: 15 },
            { name: "Puente de Glúteos (15 reps)", type: "WORK", duration: 45, refId: 'ex3' },
            { name: "Descanso Largo", type: "REST", duration: 60 },
            { name: "Circuito B (Ronda 1)", type: "WORK", duration: 0 },
            { name: "Plancha (Core)", type: "WORK", duration: 45, refId: 'ex4' },
            { name: "Descanso Breve", type: "REST", duration: 15 },
            { name: "Superman (Espalda)", type: "WORK", duration: 45, refId: 'ex5' },
            { name: "Descanso Breve", type: "REST", duration: 15 },
            { name: "Estocadas (10 por pierna)", type: "WORK", duration: 45, refId: 'ex6' },
            { name: "Enfriamiento y Estiramiento", type: "REST", duration: 180 },
            { name: "Rutina Terminada", type: "DONE", duration: 0 }
        ]
    },
    "Martes": {
        title: "Día de Cardio y Agilidad (HIIT)",
        exercises: [
            { name: "Calentamiento Cardiovascular", type: "WORK", duration: 60, refId: 'ex7' },
            { name: "Burpees modificados", type: "WORK", duration: 60, refId: 'ex8' },
            { name: "Descanso", type: "REST", duration: 30 },
            { name: "Mountain Climbers", type: "WORK", duration: 60, refId: 'ex9' },
            { name: "Descanso", type: "REST", duration: 30 },
            { name: "Saltos de Tijera (Jumping Jacks)", type: "WORK", duration: 60, refId: 'ex10' },
            { name: "Descanso Largo", type: "REST", duration: 60 },
            { name: "High Knees (Rodillas al pecho)", type: "WORK", duration: 60, refId: 'ex11' },
            { name: "Enfriamiento y Estiramiento", type: "REST", duration: 180 },
            { name: "Rutina Terminada", type: "DONE", duration: 0 }
        ]
    },
    "Miercoles": {
        title: "Día de Descanso Activo y Movilidad",
        exercises: [
            { name: "Estiramiento Dinámico", type: "WORK", duration: 300, refId: 'ex12' },
            { name: "Caminata o Yoga Suave", type: "WORK", duration: 1200, refId: 'ex13' },
            { name: "Rutina Terminada", type: "DONE", duration: 0 }
        ]
    },
    "Jueves": {
        title: "Día de Empuje y Tracción",
        exercises: [
            { name: "Calentamiento de Hombros y Espalda", type: "WORK", duration: 60, refId: 'ex14' },
            { name: "Remo con toalla (o bandas)", type: "WORK", duration: 45, refId: 'ex15' },
            { name: "Descanso", type: "REST", duration: 15 },
            { name: "Elevación de Pantorrillas (20 reps)", type: "WORK", duration: 45, refId: 'ex16' },
            { name: "Descanso", type: "REST", duration: 15 },
            { name: "Fondos en silla (Tríceps)", type: "WORK", duration: 45, refId: 'ex17' },
            { name: "Descanso Largo", type: "REST", duration: 60 },
            { name: "V-Ups (Abdominales)", type: "WORK", duration: 45, refId: 'ex18' },
            { name: "Descanso", type: "REST", duration: 15 },
            { name: "Toques de Hombro en Plancha", type: "WORK", duration: 45, refId: 'ex19' },
            { name: "Enfriamiento y Estiramiento", type: "REST", duration: 180 },
            { name: "Rutina Terminada", type: "DONE", duration: 0 }
        ]
    },
    "Viernes": {
        title: "Día de Resistencia y Full Body",
        exercises: [
            { name: "Calentamiento de Movilidad", type: "WORK", duration: 60, refId: 'ex20' },
            { name: "Circuito Tabata (40s work / 20s rest)", type: "WORK", duration: 0 },
            { name: "Ronda 1: Sentadillas", type: "WORK", duration: 40, refId: 'ex21' },
            { name: "Descanso", type: "REST", duration: 20 },
            { name: "Ronda 2: Flexiones", type: "WORK", duration: 40, refId: 'ex22' },
            { name: "Descanso", type: "REST", duration: 20 },
            { name: "Ronda 3: Estocadas", type: "WORK", duration: 40, refId: 'ex23' },
            { name: "Descanso Largo", type: "REST", duration: 60 },
            { name: "Ronda 4: Plancha", type: "WORK", duration: 40, refId: 'ex24' },
            { name: "Descanso", type: "REST", duration: 20 },
            { name: "Ronda 5: Burpees", type: "WORK", duration: 40, refId: 'ex25' },
            { name: "Enfriamiento y Estiramiento", type: "REST", duration: 180 },
            { name: "Rutina Terminada", type: "DONE", duration: 0 }
        ]
    },
    "Sabado": {
        title: "Reto de 15 Minutos de Cardio Intenso",
        exercises: [
            { name: "Calentamiento Rápido", type: "WORK", duration: 60, refId: 'ex26' },
            { name: "Circuito libre (15 minutos continuos)", type: "WORK", duration: 900, refId: 'ex27' },
            { name: "Enfriamiento y Estiramiento Profundo", type: "REST", duration: 300, refId: 'ex28' },
            { name: "Rutina Terminada", type: "DONE", duration: 0 }
        ]
    },
    "Domingo": {
        title: "Descanso Completo (Recuperación)",
        exercises: [
            { name: "Descanso Activo (Opcional: Caminata)", type: "REST", duration: 0 },
            { name: "Preparación para la Semana (Mental)", type: "REST", duration: 0, refId: 'ex29' },
            { name: "Rutina Terminada", type: "DONE", duration: 0 }
        ]
    }
};

// --- Variables de estado ---
let currentDay = "Lunes";
let WORKOUT_ROUTINE = ROUTINE_DATA[currentDay].exercises;
let currentStepIndex = 0;
let timeLeft = 0;
let timerInterval;
let isPaused = false;
let audioContext;

// --- Elementos DOM ---
const htmlElement = document.documentElement;
const splashScreen = document.getElementById('splash-screen');
const themeToggleBtn = document.getElementById('theme-toggle');
const sunIcon = document.getElementById('sun-icon');
const moonIcon = document.getElementById('moon-icon');
const startBtn = document.getElementById('start-btn');
const stopBtn = document.getElementById('stop-btn');
const activityDisplay = document.getElementById('current-activity');
const countdownDisplay = document.getElementById('countdown-display');
const timerPanel = document.getElementById('timer-panel');
const statusBar = document.getElementById('status-bar');
const routineItemsList = document.getElementById('routine-items');
const dayTabs = document.getElementById('day-tabs');
const currentDayTitle = document.getElementById('current-day-title');
const variationModal = document.getElementById('variation-modal');
const closeModalBtn = document.getElementById('close-modal-btn');
const modalTitle = document.getElementById('modal-title');
const modalContentText = document.getElementById('modal-content-text');
const loadingIndicator = document.getElementById('loading-indicator');

// --- Utilidades: fetch con reintentos ---
async function fetchWithRetry(fetcher, maxRetries = 3) {
    for (let i = 0; i < maxRetries; i++) {
        try {
            const response = await fetcher();
            if (response.ok) return response;
            if (response.status === 429) {
                const delay = Math.pow(2, i) * 1000 + Math.random() * 1000;
                await new Promise(r => setTimeout(r, delay));
                continue;
            }
            throw new Error(`API returned status ${response.status}`);
        } catch (err) {
            if (i === maxRetries - 1) throw err;
            const delay = Math.pow(2, i) * 1000 + Math.random() * 1000;
            await new Promise(r => setTimeout(r, delay));
        }
    }
}

// --- Generación de variaciones (llamada a Gemini Text) ---
async function generateVariations(exerciseName) {
    loadingIndicator.classList.remove('hidden');
    modalTitle.textContent = `Variaciones para ${exerciseName}`;
    modalContentText.textContent = '';

    const systemPrompt = `Eres un entrenador de fitness profesional. Proporciona variaciones del ejercicio solicitado para hacerlo más fácil o más difícil. La respuesta debe estar formateada en Markdown con viñetas. NO uses títulos ni encabezados, solo las viñetas.`;
    const userQuery = `Dame 3 variaciones para el ejercicio "${exerciseName}": una para principiantes (más fácil), una avanzada (más difícil) y una enfocada en un grupo muscular diferente si es posible.`;

    const payload = { contents: [{ parts: [{ text: userQuery }] }], systemInstruction: { parts: [{ text: systemPrompt }] } };

    try {
        const fetcher = () => fetch(TEXT_API_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
        });

        const response = await fetchWithRetry(fetcher);
        const result = await response.json();
        const generatedText = result.candidates?.[0]?.content?.parts?.[0]?.text || "No se pudo generar contenido. Inténtalo de nuevo.";

        const formattedText = generatedText
            .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
            .replace(/\n\n/g, '<br><br>')
            .replace(/\n/g, '<br>');

        modalContentText.innerHTML = formattedText;
    } catch (error) {
        console.error("Error al llamar a la API de Gemini:", error);
        modalContentText.textContent = "Ocurrió un error al cargar las variaciones. Revisa la consola.";
    } finally {
        loadingIndicator.classList.add('hidden');
        variationModal.classList.remove('hidden');
    }
}

// --- TTS: convertir PCM a WAV (si aplica) ---
function pcmToWav(base64Data, sampleRate) {
    const pcmData = Uint8Array.from(atob(base64Data), c => c.charCodeAt(0));
    const numChannels = 1, bitDepth = 16;
    const byteRate = sampleRate * numChannels * (bitDepth / 8);
    const blockAlign = numChannels * (bitDepth / 8);
    const dataSize = pcmData.length;
    const buffer = new ArrayBuffer(44 + dataSize);
    const view = new DataView(buffer);
    let offset = 0;
    function writeString(s) { for (let i = 0; i < s.length; i++) view.setUint8(offset + i, s.charCodeAt(i)); offset += s.length; }

    writeString('RIFF');
    view.setUint32(offset, 36 + dataSize, true); offset += 4;
    writeString('WAVE');
    writeString('fmt ');
    view.setUint32(offset, 16, true); offset += 4;
    view.setUint16(offset, 1, true); offset += 2;
    view.setUint16(offset, numChannels, true); offset += 2;
    view.setUint32(offset, sampleRate, true); offset += 4;
    view.setUint32(offset, byteRate, true); offset += 4;
    view.setUint16(offset, blockAlign, true); offset += 2;
    view.setUint16(offset, bitDepth, true); offset += 2;
    writeString('data');
    view.setUint32(offset, dataSize, true); offset += 4;
    for (let i = 0; i < dataSize; i++) view.setUint8(offset + i, pcmData[i]);
    return new Blob([view], { type: 'audio/wav' });
}

async function playTTS(message) {
    let ttsMessage = message.replace("Circuito A (Ronda 1)", "Circuito A, Ronda uno")
                            .replace("Circuito B (Ronda 1)", "Circuito B, Ronda uno")
                            .replace("HIIT", "High Intensity Interval Training")
                            .replace("V-Ups", "Vee Ups");

    const payload = {
        contents: [{ parts: [{ text: ttsMessage }] }],
        generationConfig: {
            responseModalities: ["AUDIO"],
            speechConfig: {
                voiceConfig: { prebuiltVoiceConfig: { voiceName: TTS_VOICE } }
            }
        },
        model: "gemini-2.5-flash-preview-tts"
    };

    try {
        const fetcher = () => fetch(TTS_API_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
        });

        const response = await fetchWithRetry(fetcher);
        const result = await response.json();
        const part = result?.candidates?.[0]?.content?.parts?.[0];
        const audioData = part?.inlineData?.data;
        const mimeType = part?.inlineData?.mimeType;

        if (audioData && mimeType && mimeType.startsWith("audio/L16")) {
            const sampleRateMatch = mimeType.match(/rate=(\d+)/);
            if (!sampleRateMatch) throw new Error("Sample rate missing.");
            const sampleRate = parseInt(sampleRateMatch[1], 10);
            const wavBlob = pcmToWav(audioData, sampleRate);
            const audioUrl = URL.createObjectURL(wavBlob);
            const audio = new Audio(audioUrl);
            audio.play();
        } else {
            console.warn("TTS no devolvió audio:", result);
        }
    } catch (error) {
        console.error("Error al reproducir TTS:", error);
    }
}

// --- Sonido interno (beep) ---
function playBeep() {
    try {
        if (!audioContext) audioContext = new (window.AudioContext || window.webkitAudioContext)();
        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();
        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);
        oscillator.type = 'sawtooth';
        oscillator.frequency.setValueAtTime(880, audioContext.currentTime);
        gainNode.gain.setValueAtTime(0.6, audioContext.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.001, audioContext.currentTime + 0.4);
        oscillator.start();
        oscillator.stop(audioContext.currentTime + 0.4);
    } catch (e) {
        console.error("Error al reproducir sonido:", e);
    }
}

// --- Utilidades de tiempo ---
function formatTime(totalSeconds) {
    if (totalSeconds < 0) totalSeconds = 0;
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    return `${String(minutes).padStart(2,'0')}:${String(seconds).padStart(2,'0')}`;
}
function getTotalDuration(routine) {
    return routine.reduce((sum, step) => sum + step.duration, 0);
}

// --- UI / Renderizado ---
function resetTimerDisplay(day) {
    clearInterval(timerInterval);
    isPaused = false;
    currentStepIndex = 0;
    timeLeft = 0;
    const totalTime = getTotalDuration(ROUTINE_DATA[day].exercises);
    countdownDisplay.textContent = formatTime(totalTime);
    activityDisplay.textContent = ROUTINE_DATA[day].title;
    statusBar.textContent = `Día de la semana: ${day} (${ROUTINE_DATA[day].title})`;
    timerPanel.className = 'card-bg rounded-xl p-6 sm:p-8 shadow-xl text-center transition-all duration-500';
    countdownDisplay.classList.remove('text-white'); countdownDisplay.classList.add('text-emerald-500');
    startBtn.textContent = 'Iniciar Rutina'; startBtn.style.display = 'block'; stopBtn.style.display = 'none';
}

function renderRoutineList(day) {
    const routine = ROUTINE_DATA[day].exercises;
    routineItemsList.innerHTML = '';
    routine.forEach((item, index) => {
        if (item.duration > 0 || item.type !== 'DONE') {
            const li = document.createElement('li');
            li.className = 'flex items-center justify-between py-3 sm:py-4 transition-all duration-300 hover:bg-gray-50 dark:hover:bg-gray-600 group';
            if (item.type === 'REST' && item.duration > 0) {
                li.className += ' bg-yellow-50/50 dark:bg-yellow-900/30 text-gray-700 dark:text-gray-200 font-medium rounded-md';
            } else if (item.duration === 0 && item.type === 'WORK') {
                li.className = 'text-sm font-semibold text-blue-600 dark:text-blue-400 pt-4 pb-2';
                li.innerHTML = `<span>${item.name}</span>`;
                routineItemsList.appendChild(li);
                return;
            }

            let checkboxHTML = '';
            let labelClasses = 'flex-1 ml-4 text-default dark:text-gray-100';
            let durationText = item.duration > 0 ? `(${item.duration} seg)` : '';
            let actionButtonHTML = '';

            if (item.refId) {
                checkboxHTML = `<input type="checkbox" id="${item.refId}" data-index="${index}" class="checkbox-item" />`;
                if (item.type === 'WORK' && item.duration > 0) {
                    actionButtonHTML = `<button class="generate-variation-btn text-sm p-1.5 ml-4 bg-blue-100 dark:bg-blue-800 text-blue-700 dark:text-blue-200 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" data-exercise="${item.name}">✨ Variación</button>`;
                }
            } else {
                checkboxHTML = `<div class="w-5 h-5 ml-0.5 text-xs flex items-center justify-center rounded-full bg-gray-200 dark:bg-gray-500 text-gray-500 dark:text-gray-200">${item.type === 'REST' ? 'R' : ''}</div>`;
                labelClasses += ' italic text-gray-500 dark:text-gray-400';
                durationText = item.duration > 0 ? `(${formatTime(item.duration)})` : '';
            }

            li.innerHTML = `<div class="flex items-center flex-1">${checkboxHTML}<label for="${item.refId}" class="${labelClasses}">${item.name} <span class="text-xs text-gray-400 dark:text-gray-400">${durationText}</span></label></div>${actionButtonHTML}`;
            routineItemsList.appendChild(li);
        }
    });

    document.querySelectorAll('.checkbox-item').forEach(checkbox => {
        checkbox.addEventListener('click', (e) => { e.stopPropagation(); });
    });

    document.querySelectorAll('.generate-variation-btn').forEach(button => {
        button.addEventListener('click', (e) => {
            e.stopPropagation();
            const exerciseName = e.currentTarget.dataset.exercise;
            if (exerciseName) generateVariations(exerciseName);
        });
    });
}

function renderDayTabs() {
    const days = Object.keys(ROUTINE_DATA);
    dayTabs.innerHTML = '';
    days.forEach(day => {
        const button = document.createElement('button');
        button.textContent = day;
        button.dataset.day = day;
        let classes = 'py-2 px-4 rounded-lg font-medium transition-colors duration-200 text-sm sm:text-base';
        if (day === currentDay) classes += ' bg-emerald-500 text-white shadow-md';
        else classes += ' text-gray-600 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-600';
        button.className = classes;
        button.addEventListener('click', () => switchDay(day));
        dayTabs.appendChild(button);
    });
}

function switchDay(newDay) {
    if (newDay === currentDay) return;
    currentDay = newDay; WORKOUT_ROUTINE = ROUTINE_DATA[currentDay].exercises;
    resetTimerDisplay(currentDay);
    renderDayTabs(); renderRoutineList(currentDay);
    currentDayTitle.textContent = currentDay;
}

// --- Temporizador ---
function startTimer() {
    if (!audioContext) audioContext = new (window.AudioContext || window.webkitAudioContext)();
    if (isPaused) isPaused = false;
    else clearInterval(timerInterval);

    if (currentStepIndex === 0) {
        const motivationMessage = `¡Excelente! Estás comenzando el día ${currentDay} de entrenamiento. ¡Concéntrate y da lo mejor de ti!`;
        playTTS(motivationMessage);
    }

    while (currentStepIndex < WORKOUT_ROUTINE.length && WORKOUT_ROUTINE[currentStepIndex].duration === 0) {
        if (WORKOUT_ROUTINE[currentStepIndex].type === 'DONE') { currentStepIndex = WORKOUT_ROUTINE.length - 1; break; }
        currentStepIndex++;
    }

    if (currentStepIndex >= WORKOUT_ROUTINE.length) { nextStep(); return; }

    const currentActivity = WORKOUT_ROUTINE[currentStepIndex];
    if (timeLeft === 0) {
        timeLeft = currentActivity.duration;
        let announcement = currentActivity.name;
        if (currentActivity.type === 'WORK') announcement = `Prepárate para ${currentActivity.name}`;
        else if (currentActivity.type === 'REST') announcement = `Descanso. Siguiente, ${WORKOUT_ROUTINE[currentStepIndex+1]?.name || 'el final'}`;
        playTTS(announcement);
    }

    activityDisplay.textContent = currentActivity.name;
    countdownDisplay.textContent = formatTime(timeLeft);

    timerPanel.className = 'rounded-xl p-6 sm:p-8 shadow-xl text-center transition-all duration-500';
    countdownDisplay.classList.remove('text-white', 'text-emerald-500');
    if (currentActivity.type === 'WORK') timerPanel.classList.add('panel-work');
    else if (currentActivity.type === 'REST') timerPanel.classList.add('panel-rest');
    else if (currentActivity.type === 'DONE') timerPanel.classList.add('panel-done');
    else timerPanel.classList.add('card-bg');

    timerInterval = setInterval(() => {
        if (isPaused) return;
        timeLeft--;
        countdownDisplay.textContent = formatTime(timeLeft);
        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            playBeep();
            if (currentActivity.refId) {
                const checkbox = document.getElementById(currentActivity.refId);
                if (checkbox) checkbox.checked = true;
            }
            currentStepIndex++; timeLeft = 0; nextStep();
        }
    }, 1000);
}

function nextStep() {
    if (currentStepIndex >= WORKOUT_ROUTINE.length) {
        clearInterval(timerInterval);
        const finalStep = WORKOUT_ROUTINE[WORKOUT_ROUTINE.length - 1];
        activityDisplay.textContent = finalStep.name;
        countdownDisplay.textContent = "00:00";
        timerPanel.className = 'rounded-xl p-6 sm:p-8 shadow-xl text-center transition-all duration-500 panel-done';
        startBtn.style.display = 'block'; startBtn.textContent = 'Volver a Empezar'; stopBtn.style.display = 'none';
        playTTS("¡Felicidades!
