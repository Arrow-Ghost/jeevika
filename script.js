// Health chatbot responses database
const healthResponses = {
    greetings: [
        {
            keywords: ['hello', 'hi', 'hey', 'namaste', 'good morning', 'good afternoon', 'good evening'],
            responses: [
                "Hello! I'm HealthBot AI. How can I help you with your health concerns today?",
                "Hi there! I'm here to provide health information and guidance. What would you like to know?",
                "Namaste! I can help you with health queries, vaccination schedules, and disease prevention tips."
            ]
        }
    ],
    symptoms: [
        {
            keywords: ['fever', 'temperature', 'hot', 'chills'],
            responses: [
                "For fever:\n• Rest and drink plenty of fluids\n• Take paracetamol as per dosage\n• If fever >101°F for 3+ days, consult a doctor\n• Watch for symptoms like difficulty breathing, severe headache",
                "Fever can indicate infection. Monitor your temperature and stay hydrated. Seek medical attention if fever persists or worsens."
            ]
        },
        {
            keywords: ['cough', 'cold', 'runny nose', 'sneezing'],
            responses: [
                "For cough and cold:\n• Drink warm water with honey\n• Steam inhalation 2-3 times daily\n• Get adequate rest\n• Avoid cold foods and drinks\n• If persistent >7 days, see a doctor",
                "Common cold symptoms usually resolve in 7-10 days. Stay hydrated and rest well. Consult a doctor if you have breathing difficulties."
            ]
        },
        {
            keywords: ['headache', 'head pain', 'migraine'],
            responses: [
                "For headaches:\n• Rest in a quiet, dark room\n• Apply cold/warm compress\n• Stay hydrated\n• Avoid loud sounds and bright lights\n• If severe or frequent, consult a doctor",
                "Headaches can have various causes. Ensure proper hydration and rest. Persistent or severe headaches need medical evaluation."
            ]
        },
        {
            keywords: ['stomach', 'stomachache', 'abdominal', 'tummy', 'belly'],
            responses: [
                "For stomach pain:\n• Avoid spicy and oily foods\n• Drink plenty of water\n• Try ginger tea or mint\n• Eat light, easily digestible foods\n• If severe pain persists, see a doctor immediately",
                "Stomach discomfort can be due to various reasons. Maintain a light diet and stay hydrated. Severe abdominal pain requires immediate medical attention."
            ]
        }
    ],
    vaccination: [
        {
            keywords: ['vaccine', 'vaccination', 'immunization', 'shot', 'injection'],
            responses: [
                "Important vaccinations by age:\n• 0-2 years: BCG, DPT, Polio, MMR\n• 12+ years: HPV, Meningitis\n• Adults: COVID-19, Flu (annual)\n• 60+ years: Pneumonia, Shingles\n\nConsult your nearest health center for schedules.",
                "Vaccination is crucial for disease prevention. Check with your local health center for age-appropriate vaccines and catch-up schedules."
            ]
        }
    ],
    prevention: [
        {
            keywords: ['prevent', 'protection', 'avoid', 'safety', 'hygiene'],
            responses: [
                "Disease prevention tips:\n• Wash hands frequently with soap\n• Drink clean, boiled water\n• Eat fresh, well-cooked food\n• Maintain personal hygiene\n• Regular exercise and adequate sleep\n• Avoid crowded places when sick",
                "Prevention is better than cure! Follow basic hygiene practices, maintain a healthy lifestyle, and get regular health check-ups."
            ]
        }
    ],
    emergency: [
        {
            keywords: ['emergency', 'urgent', 'serious', 'help', 'ambulance', '108'],
            responses: [
                "🚨 For medical emergencies:\n• Call 108 (National Ambulance)\n• Call 102 (Free Ambulance)\n• Go to nearest hospital immediately\n• Keep patient calm and stable\n• Don't give food/water if unconscious",
                "In case of emergency, immediately call 108 or 102. For chest pain, breathing difficulties, or severe injuries, seek immediate medical help."
            ]
        }
    ],
    nutrition: [
        {
            keywords: ['diet', 'nutrition', 'food', 'eating', 'healthy food'],
            responses: [
                "Healthy diet tips:\n• Include fruits and vegetables daily\n• Drink 8-10 glasses of water\n• Limit processed foods and sugar\n• Include whole grains and proteins\n• Eat smaller, frequent meals",
                "A balanced diet includes all food groups. Focus on fresh, local, and seasonal foods for optimal nutrition and health."
            ]
        }
    ],
    default: [
        "I can help you with health information, symptoms, vaccination schedules, and prevention tips. Please describe your health concern.",
        "I'm here to provide health guidance. You can ask me about symptoms, diseases, vaccination, nutrition, or general health tips.",
        "Please tell me more about your health query. I can assist with symptoms, prevention methods, vaccination information, and basic health advice."
    ]
};

// Multilingual greetings
const multilingualGreetings = {
    hindi: "नमस्ते! मैं HealthBot AI हूँ। आज मैं आपकी स्वास्थ्य संबंधी कैसे मदद कर सकता हूँ?",
    english: "Hello! I'm HealthBot AI. How can I help you with your health concerns today?",
    bengali: "নমস্কার! আমি HealthBot AI। আজ আমি কিভাবে আপনার স্বাস্থ্য সংক্রান্ত সাহায্য করতে পারি?",
    tamil: "வணக்கம்! நான் HealthBot AI. இன்று உங்கள் ஆரோக்கிய கவலைகளுக்கு நான் எப்படி உதவ முடியும்?",
    telugu: "నమస్కారం! నేను HealthBot AI. ఈ రోజు మీ ఆరోగ్య సమస్యలకు నేను ఎలా సహాయం చేయగలను?",
    kannada: "ನಮಸ್ಕಾರ! ನಾನು HealthBot AI. ಇಂದು ನಿಮ್ಮ ಆರೋಗ್ಯ ಸಮಸ್ಯೆಗಳಿಗೆ ನಾನು ಹೇಗೆ ಸಹಾಯ ಮಾಡಬಹುದು?"
};

// Disease outbreak alerts
const outbreakAlerts = [
    "🔔 Health Alert: Dengue cases increasing in your area. Use mosquito repellents and avoid water stagnation.",
    "🔔 Monsoon Alert: Increased risk of waterborne diseases. Drink boiled water and maintain hygiene.",
    "🔔 Flu Alert: Seasonal flu outbreak reported. Get vaccinated and avoid crowded places if feeling unwell.",
    "🔔 COVID-19 Update: Follow mask protocols in crowded areas and maintain social distancing."
];

class HealthChatbot {
    constructor() {
        this.currentTab = 'whatsapp';
        this.messageCount = 0;
        this.init();
    }

    init() {
        this.setupTabSwitching();
        this.setupChatFunctionality();
        this.setupScrollAnimations();
        this.sendInitialMessages();
        this.setupOutbreakAlerts();
    }

    setupTabSwitching() {
        const tabButtons = document.querySelectorAll('.tab-btn');
        const tabContents = document.querySelectorAll('.tab-content');

        tabButtons.forEach(btn => {
            btn.addEventListener('click', () => {
                const targetTab = btn.dataset.tab;
                
                // Remove active class from all buttons and contents
                tabButtons.forEach(b => b.classList.remove('active'));
                tabContents.forEach(c => c.classList.remove('active'));
                
                // Add active class to clicked button and corresponding content
                btn.classList.add('active');
                document.getElementById(`${targetTab}-tab`).classList.add('active');
                
                this.currentTab = targetTab;
                
                // Trigger scroll animations for about tab
                if (targetTab === 'about') {
                    setTimeout(() => this.animateAboutSections(), 100);
                }
            });
        });
    }

    setupChatFunctionality() {
        // WhatsApp chat
        const whatsappInput = document.getElementById('whatsapp-input');
        const whatsappSend = document.getElementById('whatsapp-send');
        const whatsappMessages = document.getElementById('whatsapp-messages');

        whatsappSend.addEventListener('click', () => {
            const message = whatsappInput.value.trim();
            if (message) {
                this.addUserMessage(message, 'whatsapp');
                whatsappInput.value = '';
                setTimeout(() => this.generateBotResponse(message, 'whatsapp'), 1000);
            }
        });

        whatsappInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                whatsappSend.click();
            }
        });

        // SMS chat
        const smsInput = document.getElementById('sms-input');
        const smsSend = document.getElementById('sms-send');

        smsSend.addEventListener('click', () => {
            const message = smsInput.value.trim();
            if (message) {
                this.addUserMessage(message, 'sms');
                smsInput.value = '';
                setTimeout(() => this.generateBotResponse(message, 'sms'), 1000);
            }
        });

        smsInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                smsSend.click();
            }
        });
    }

    setupScrollAnimations() {
        const observerOptions = {
            threshold: 0.3,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate');
                }
            });
        }, observerOptions);

        document.querySelectorAll('.about-section').forEach(section => {
            observer.observe(section);
        });
    }

    setupOutbreakAlerts() {
        // Send periodic outbreak alerts
        setTimeout(() => {
            const randomAlert = outbreakAlerts[Math.floor(Math.random() * outbreakAlerts.length)];
            this.addBotMessage(randomAlert, 'whatsapp');
            this.addBotMessage(randomAlert, 'sms');
        }, 15000); // Send after 15 seconds

        // Send another alert every 30 seconds
        setInterval(() => {
            const randomAlert = outbreakAlerts[Math.floor(Math.random() * outbreakAlerts.length)];
            if (Math.random() > 0.7) { // 30% chance
                this.addBotMessage(randomAlert, this.currentTab);
            }
        }, 30000);
    }

    sendInitialMessages() {
        // Send multilingual greeting after a short delay
        setTimeout(() => {
            const languages = Object.keys(multilingualGreetings);
            languages.forEach((lang, index) => {
                setTimeout(() => {
                    this.addBotMessage(multilingualGreetings[lang], 'whatsapp');
                }, index * 2000);
            });
        }, 2000);

        // Send demo health queries
        setTimeout(() => {
            this.addBotMessage("Try asking me: 'What should I do for fever?' or 'Tell me about vaccination schedule'", 'whatsapp');
        }, 8000);

        setTimeout(() => {
            this.addBotMessage("💡 Quick tips: Type 'HELP' for assistance menu, 'EMERGENCY' for emergency contacts, 'VACCINE' for immunization info", 'sms');
        }, 3000);
    }

    addUserMessage(message, platform) {
        const messagesContainer = document.getElementById(`${platform}-messages`);
        const messageElement = this.createMessageElement(message, 'user', platform);
        messagesContainer.appendChild(messageElement);
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }

    addBotMessage(message, platform) {
        const messagesContainer = document.getElementById(`${platform}-messages`);
        
        // Show typing indicator first
        const typingIndicator = this.createTypingIndicator();
        messagesContainer.appendChild(typingIndicator);
        messagesContainer.scrollTop = messagesContainer.scrollHeight;

        setTimeout(() => {
            messagesContainer.removeChild(typingIndicator);
            const messageElement = this.createMessageElement(message, 'bot', platform);
            messagesContainer.appendChild(messageElement);
            messagesContainer.scrollTop = messagesContainer.scrollHeight;
        }, 1500);
    }

    createTypingIndicator() {
        const indicator = document.createElement('div');
        indicator.className = 'message bot-message typing-message';
        indicator.innerHTML = `
            <div class="message-content">
                <div class="typing-indicator">
                    <div class="typing-dot"></div>
                    <div class="typing-dot"></div>
                    <div class="typing-dot"></div>
                </div>
            </div>
        `;
        return indicator;
    }

    createMessageElement(message, sender, platform) {
        const messageDiv = document.createElement('div');
        messageDiv.className = `message ${sender}-message`;
        
        const currentTime = new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
        
        messageDiv.innerHTML = `
            <div class="message-content">
                <p>${message}</p>
                <span class="message-time">${currentTime}</span>
            </div>
        `;
        
        return messageDiv;
    }

    generateBotResponse(userMessage, platform) {
        const message = userMessage.toLowerCase();
        let response = '';
        
        // Check for specific health queries
        for (const category in healthResponses) {
            if (category === 'default') continue;
            
            for (const item of healthResponses[category]) {
                if (item.keywords.some(keyword => message.includes(keyword))) {
                    const responses = item.responses;
                    response = responses[Math.floor(Math.random() * responses.length)];
                    break;
                }
            }
            if (response) break;
        }
        
        // Special commands
        if (message.includes('help') || message === 'help') {
            response = `🏥 HealthBot AI Commands:
            
💊 SYMPTOMS - Ask about fever, cough, headache, stomach pain
💉 VACCINE - Get vaccination information
🛡️ PREVENT - Learn disease prevention tips
🍎 NUTRITION - Get healthy diet advice
🚨 EMERGENCY - Emergency contact numbers
📍 NEARBY - Find nearby health centers

Example: "I have fever" or "Tell me about vaccines"`;
        }
        
        else if (message.includes('emergency') || message === 'emergency') {
            response = `🚨 Emergency Contacts:
            
📞 National Ambulance: 108
📞 Free Ambulance: 102
📞 Police: 100
📞 Fire: 101
📞 Women Helpline: 1091
📞 Child Helpline: 1098
📞 COVID-19 Helpline: 1075

For immediate medical help, call 108`;
        }
        
        else if (message.includes('nearby') || message.includes('hospital') || message.includes('clinic')) {
            response = `🏥 To find nearby health centers:
            
1. Government Health Centers:
   - Primary Health Centers (PHC)
   - Community Health Centers (CHC)
   - District Hospitals

2. Use government portal: nhp.gov.in
3. Call 104 for health helpline
4. Aarogya Setu app has nearby facility locator

Would you like information about any specific health facility?`;
        }
        
        else if (!response) {
            // Default response
            const defaultResponses = healthResponses.default;
            response = defaultResponses[Math.floor(Math.random() * defaultResponses.length)];
        }
        
        // Add helpful suggestions for common health queries
        if (message.includes('covid') || message.includes('corona')) {
            response = `🦠 COVID-19 Information:

• Get vaccinated (2 doses + booster)
• Wear masks in crowded places  
• Maintain hand hygiene
• If symptoms occur: isolate, test, consult doctor
• For severe breathing difficulty: call 108

Prevention is key! Stay safe and healthy.`;
        }
        
        this.addBotMessage(response, platform);
    }

    animateAboutSections() {
        const sections = document.querySelectorAll('.about-section');
        sections.forEach((section, index) => {
            setTimeout(() => {
                section.classList.add('animate');
            }, index * 200);
        });
    }
}

// Language detection and response system
class LanguageDetector {
    constructor() {
        this.patterns = {
            hindi: /[\u0900-\u097F]/,
            bengali: /[\u0980-\u09FF]/,
            tamil: /[\u0B80-\u0BFF]/,
            telugu: /[\u0C00-\u0C7F]/,
            kannada: /[\u0C80-\u0CFF]/,
            gujarati: /[\u0A80-\u0AFF]/,
            punjabi: /[\u0A00-\u0A7F]/
        };
    }
    
    detect(text) {
        for (const [lang, pattern] of Object.entries(this.patterns)) {
            if (pattern.test(text)) {
                return lang;
            }
        }
        return 'english';
    }
}

// Health data integration simulation
class HealthDataAPI {
    constructor() {
        this.vaccineData = {
            "0-1": ["BCG", "Hepatitis B", "DPT", "Polio", "Rotavirus"],
            "1-2": ["MMR", "Varicella", "Hepatitis A"],
            "12+": ["HPV", "Meningitis", "Tdap"],
            "Adult": ["COVID-19", "Influenza (Annual)", "Pneumonia (60+)"],
            "Travel": ["Yellow Fever", "Japanese Encephalitis", "Typhoid"]
        };
        
        this.diseaseOutbreaks = [
            { disease: "Dengue", area: "Mumbai", level: "moderate" },
            { disease: "Chikungunya", area: "Delhi", level: "low" },
            { disease: "H1N1", area: "Pune", level: "high" },
            { disease: "COVID-19", area: "Bangalore", level: "moderate" }
        ];
    }
    
    getVaccineSchedule(age) {
        return this.vaccineData[age] || ["Consult your doctor for personalized schedule"];
    }
    
    getOutbreakAlerts(location) {
        return this.diseaseOutbreaks.filter(outbreak => 
            outbreak.area.toLowerCase().includes(location.toLowerCase())
        );
    }
}

// Performance monitoring
class PerformanceMonitor {
    constructor() {
        this.queries = 0;
        this.accurateResponses = 0;
        this.userSatisfaction = [];
    }
    
    logQuery(query, responseType) {
        this.queries++;
        if (responseType !== 'default') {
            this.accurateResponses++;
        }
    }
    
    getAccuracy() {
        return this.queries > 0 ? (this.accurateResponses / this.queries * 100).toFixed(1) : 0;
    }
    
    addSatisfactionRating(rating) {
        this.userSatisfaction.push(rating);
    }
}

// Initialize the application
document.addEventListener('DOMContentLoaded', () => {
    const healthBot = new HealthChatbot();
    const languageDetector = new LanguageDetector();
    const healthAPI = new HealthDataAPI();
    const performanceMonitor = new PerformanceMonitor();
    
    // Add some interactive elements
    document.body.addEventListener('click', (e) => {
        // Add ripple effect to buttons
        if (e.target.classList.contains('send-btn') || e.target.classList.contains('tab-btn')) {
            const ripple = document.createElement('span');
            ripple.classList.add('ripple');
            e.target.appendChild(ripple);
            setTimeout(() => ripple.remove(), 600);
        }
    });
    
    // Add floating action button for quick health tips
    const floatingTips = [
        "💡 Drink 8-10 glasses of water daily",
        "💡 Wash hands frequently with soap for 20 seconds",
        "💡 Include fruits and vegetables in every meal",
        "💡 Get 7-8 hours of sleep daily",
        "💡 Exercise for at least 30 minutes daily",
        "💡 Get regular health check-ups"
    ];
    
    // Show random health tip every 2 minutes
    setInterval(() => {
        const randomTip = floatingTips[Math.floor(Math.random() * floatingTips.length)];
        showNotification(randomTip);
    }, 120000);
    
    function showNotification(message) {
        const notification = document.createElement('div');
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: linear-gradient(135deg, #4ECDC4, #44A08D);
            color: white;
            padding: 1rem;
            border-radius: 8px;
            box-shadow: 0 4px 12px rgba(0,0,0,0.2);
            z-index: 1000;
            max-width: 300px;
            animation: slideInRight 0.3s ease;
        `;
        notification.innerHTML = message;
        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.style.animation = 'slideOutRight 0.3s ease';
            setTimeout(() => notification.remove(), 300);
        }, 5000);
    }
    
    // Add CSS for notification animations
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideInRight {
            from { transform: translateX(100%); opacity: 0; }
            to { transform: translateX(0); opacity: 1; }
        }
        
        @keyframes slideOutRight {
            from { transform: translateX(0); opacity: 1; }
            to { transform: translateX(100%); opacity: 0; }
        }
        
        .ripple {
            position: absolute;
            border-radius: 50%;
            background: rgba(255,255,255,0.6);
            transform: scale(0);
            animation: ripple-animation 0.6s linear;
            pointer-events: none;
        }
        
        @keyframes ripple-animation {
            to {
                transform: scale(4);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);
    
    console.log('HealthBot AI initialized successfully!');
    console.log('Ready to serve rural and semi-urban communities with healthcare information.');
});

// Utility functions for demo enhancement
function formatHealthResponse(response) {
    return response.replace(/\n/g, '<br>').replace(/•/g, '•');
}

function getCurrentTime() {
    return new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
}

function getRandomElement(array) {
    return array[Math.floor(Math.random() * array.length)];
}

// Export for potential future integrations
window.HealthBot = HealthChatbot;
window.LanguageDetector = LanguageDetector;
window.HealthDataAPI = HealthDataAPI;