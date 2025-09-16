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

// Comprehensive language translations
const translations = {
    hindi: {
        "chatbot-name": "HealthBot AI",
        "chatbot-tagline": "AI-संचालित सार्वजनिक स्वास्थ्य सहायक",
        "chatbot-description": "व्हाट्सऐप और एसएमएस के माध्यम से ग्रामीण और अर्ध-शहरी समुदायों को स्वास्थ्य जानकारी, रोग जागरूकता और टीकाकरण कार्यक्रम तक तत्काल पहुंच प्रदान करना।",
        "tab-whatsapp": "व्हाट्सऐप डेमो",
        "tab-whatsapp-tooltip": "हमारे व्हाट्सऐप स्वास्थ्य सहायक का अनुभव करें",
        "tab-sms": "एसएमएस डेमो",
        "tab-sms-tooltip": "हमारे एसएमएस-आधारित स्वास्थ्य मार्गदर्शन का प्रयास करें",
        "tab-about": "प्रोजेक्ट के बारे में",
        "tab-about-tooltip": "जीविका प्रोजेक्ट के बारे में अधिक जानें",
        "contact-name": "जीविका",
        "online-status": "ऑनलाइन",
        "contact-number": "+91-XXXX-HEALTH",
        "input-placeholder": "संदेश टाइप करें...",
        "about-hero-title": "AI-संचालित सार्वजनिक स्वास्थ्य क्रांति",
        "about-hero-subtitle": "ग्रामीण और अर्ध-शहरी भारत में स्वास्थ्य सेवा की पहुंच को बदलना",
        "problem-title": "समस्या कथन",
        "problem-description": "ग्रामीण क्षेत्रों में सीमित स्वास्थ्य जागरूकता और पहुंच के कारण रोकथाम योग्य बीमारियां और देर से चिकित्सा हस्तक्षेप।",
        "solution-title": "हमारा समाधान",
        "solution-description": "एक बहुभाषी AI चैटबॉट जो व्हाट्सऐप और एसएमएस जैसे परिचित प्लेटफॉर्म के माध्यम से तत्काल स्वास्थ्य मार्गदर्शन, रोग जागरूकता, टीकाकरण कार्यक्रम और वास्तविक समय के प्रकोप अलर्ट प्रदान करता है।",
        "multilingual-title": "बहुभाषी समर्थन"
    },
    english: {
        "chatbot-name": "HealthBot AI",
        "chatbot-tagline": "AI-Driven Public Health Assistant",
        "chatbot-description": "Empowering rural and semi-urban communities with instant access to healthcare information, disease awareness, and vaccination schedules through WhatsApp and SMS.",
        "tab-whatsapp": "WhatsApp Demo",
        "tab-whatsapp-tooltip": "Experience our WhatsApp health assistant",
        "tab-sms": "SMS Demo",
        "tab-sms-tooltip": "Try our SMS-based health guidance",
        "tab-about": "About Project",
        "tab-about-tooltip": "Learn more about Jeevika project",
        "contact-name": "Jeevika",
        "online-status": "Online",
        "contact-number": "+91-XXXX-HEALTH",
        "input-placeholder": "Type a message...",
        "about-hero-title": "AI-Driven Public Health Revolution",
        "about-hero-subtitle": "Transforming healthcare accessibility in rural and semi-urban India",
        "problem-title": "Problem Statement",
        "problem-description": "Limited healthcare awareness and accessibility in rural areas leading to preventable diseases and delayed medical interventions.",
        "solution-title": "Our Solution",
        "solution-description": "A multilingual AI chatbot providing instant healthcare guidance, disease awareness, vaccination schedules, and real-time outbreak alerts through familiar platforms like WhatsApp and SMS.",
        "multilingual-title": "Multilingual Support"
    },
    bengali: {
        "chatbot-name": "HealthBot AI",
        "chatbot-tagline": "AI-চালিত পাবলিক হেলথ অ্যাসিস্ট্যান্ট",
        "chatbot-description": "WhatsApp এবং SMS এর মাধ্যমে গ্রামীণ এবং আধা-শহুরে সম্প্রদায়কে স্বাস্থ্যসেবা তথ্য, রোগ সচেতনতা এবং টিকাদান সময়সূচীর সাথে তাত্ক্ষণিক অ্যাক্সেস প্রদান করা।",
        "tab-whatsapp": "WhatsApp ডেমো",
        "tab-whatsapp-tooltip": "আমাদের WhatsApp স্বাস্থ্য সহায়কের অভিজ্ঞতা নিন",
        "tab-sms": "SMS ডেমো",
        "tab-sms-tooltip": "আমাদের SMS-ভিত্তিক স্বাস্থ্য নির্দেশনার চেষ্টা করুন",
        "tab-about": "প্রকল্প সম্পর্কে",
        "tab-about-tooltip": "জীবিকা প্রকল্প সম্পর্কে আরও জানুন",
        "contact-name": "জীবিকা",
        "online-status": "অনলাইন",
        "contact-number": "+91-XXXX-HEALTH",
        "input-placeholder": "একটি বার্তা টাইপ করুন...",
        "about-hero-title": "AI-চালিত পাবলিক হেলথ বিপ্লব",
        "about-hero-subtitle": "গ্রামীণ এবং আধা-শহুরে ভারতে স্বাস্থ্যসেবার অ্যাক্সেসিবিলিটি রূপান্তর করা",
        "problem-title": "সমস্যা বিবৃতি",
        "problem-description": "গ্রামীণ অঞ্চলে সীমিত স্বাস্থ্যসেবা সচেতনতা এবং অ্যাক্সেসিবিলিটি যা প্রতিরোধযোগ্য রোগ এবং বিলম্বিত চিকিৎসা হস্তক্ষেপের দিকে নিয়ে যায়।",
        "solution-title": "আমাদের সমাধান",
        "solution-description": "একটি বহুভাষিক AI চ্যাটবট যা WhatsApp এবং SMS এর মতো পরিচিত প্ল্যাটফর্মের মাধ্যমে তাত্ক্ষণিক স্বাস্থ্যসেবা নির্দেশনা, রোগ সচেতনতা, টিকাদান সময়সূচী এবং রিয়েল-টাইম প্রাদুর্ভাব সতর্কতা প্রদান করে।",
        "multilingual-title": "বহুভাষিক সমর্থন"
    },
    tamil: {
        "chatbot-name": "HealthBot AI",
        "chatbot-tagline": "AI-இயக்கப்பட்ட பொது சுகாதார உதவியாளர்",
        "chatbot-description": "WhatsApp மற்றும் SMS மூலம் கிராமப்புற மற்றும் அரை-நகர்ப்புற சமூகங்களுக்கு சுகாதார தகவல், நோய் விழிப்புணர்வு மற்றும் தடுப்பூசி அட்டவணைக்கு உடனடி அணுகலை வழங்குதல்।",
        "tab-whatsapp": "WhatsApp டெமோ",
        "tab-whatsapp-tooltip": "எங்கள் WhatsApp சுகாதார உதவியாளரின் அனுபவத்தைப் பெறுங்கள்",
        "tab-sms": "SMS டெமோ",
        "tab-sms-tooltip": "எங்கள் SMS-அடிப்படையிலான சுகாதார வழிகாட்டுதலின் முயற்சி செய்யுங்கள்",
        "tab-about": "திட்டம் பற்றி",
        "tab-about-tooltip": "ஜீவிகா திட்டம் பற்றி மேலும் அறிக",
        "contact-name": "ஜீவிகா",
        "online-status": "ஆன்லைன்",
        "contact-number": "+91-XXXX-HEALTH",
        "input-placeholder": "ஒரு செய்தியை தட்டச்சு செய்யுங்கள்...",
        "about-hero-title": "AI-இயக்கப்பட்ட பொது சுகாதார புரட்சி",
        "about-hero-subtitle": "கிராமப்புற மற்றும் அரை-நகர்ப்புற இந்தியாவில் சுகாதார அணுகலை மாற்றுதல்",
        "problem-title": "பிரச்சினை அறிக்கை",
        "problem-description": "கிராமப்புற பகுதிகளில் வரம்புக்குட்பட்ட சுகாதார விழிப்புணர்வு மற்றும் அணுகல், இது தடுக்கக்கூடிய நோய்கள் மற்றும் தாமதமான மருத்துவ தலையீடுகளுக்கு வழிவகுக்கிறது.",
        "solution-title": "எங்கள் தீர்வு",
        "solution-description": "WhatsApp மற்றும் SMS போன்ற பழக்கமான தளங்கள் மூலம் உடனடி சுகாதார வழிகாட்டுதல், நோய் விழிப்புணர்வு, தடுப்பூசி அட்டவணைகள் மற்றும் நேரடி நேர வெடிப்பு அலர்ட்களை வழங்கும் பலமொழி AI சாட்பாட்.",
        "multilingual-title": "பலமொழி ஆதரவு"
    },
    telugu: {
        "chatbot-name": "HealthBot AI",
        "chatbot-tagline": "AI-నడిచే పబ్లిక్ హెల్త్ అసిస్టెంట్",
        "chatbot-description": "WhatsApp మరియు SMS ద్వారా గ్రామీణ మరియు అర్ధ-నగర సమాజాలకు ఆరోగ్య సమాచారం, వ్యాధి అవగాహన మరియు టీకాకరణ షెడ్యూల్‌లకు తక్షణ ప్రాప్యతను అందించడం.",
        "tab-whatsapp": "WhatsApp డెమో",
        "tab-whatsapp-tooltip": "మా WhatsApp ఆరోగ్య సహాయకుడి అనుభవాన్ని పొందండి",
        "tab-sms": "SMS డెమో",
        "tab-sms-tooltip": "మా SMS-ఆధారిత ఆరోగ్య మార్గదర్శకత్వాన్ని ప్రయత్నించండి",
        "tab-about": "ప్రాజెక్ట్ గురించి",
        "tab-about-tooltip": "జీవికా ప్రాజెక్ట్ గురించి మరింత తెలుసుకోండి",
        "contact-name": "జీవికా",
        "online-status": "ఆన్‌లైన్",
        "contact-number": "+91-XXXX-HEALTH",
        "input-placeholder": "సందేశాన్ని టైప్ చేయండి...",
        "about-hero-title": "AI-నడిచే పబ్లిక్ హెల్త్ విప్లవం",
        "about-hero-subtitle": "గ్రామీణ మరియు అర్ధ-నగర భారతదేశంలో ఆరోగ్య సేవల ప్రాప్యతను మార్చడం",
        "problem-title": "సమస్య ప్రకటన",
        "problem-description": "గ్రామీణ ప్రాంతాలలో పరిమిత ఆరోగ్య అవగాహన మరియు ప్రాప్యత, ఇది నివారించదగిన వ్యాధులు మరియు ఆలస్య వైద్య జోక్యాలకు దారి తీస్తుంది.",
        "solution-title": "మా పరిష్కారం",
        "solution-description": "WhatsApp మరియు SMS వంటి పరిచిత ప్లాట్‌ఫారమ్‌ల ద్వారా తక్షణ ఆరోగ్య మార్గదర్శకత్వం, వ్యాధి అవగాహన, టీకాకరణ షెడ్యూల్‌లు మరియు రియల్-టైమ్ అవుట్‌బ్రేక్ అలర్ట్‌లను అందించే బహుభాషా AI చాట్‌బాట్.",
        "multilingual-title": "బహుభాషా మద్దతు"
    },
    kannada: {
        "chatbot-name": "HealthBot AI",
        "chatbot-tagline": "AI-ಚಾಲಿತ ಸಾರ್ವಜನಿಕ ಆರೋಗ್ಯ ಸಹಾಯಕ",
        "chatbot-description": "WhatsApp ಮತ್ತು SMS ಮೂಲಕ ಗ್ರಾಮೀಣ ಮತ್ತು ಅರೆ-ನಗರ ಸಮುದಾಯಗಳಿಗೆ ಆರೋಗ್ಯ ಮಾಹಿತಿ, ರೋಗದ ಅರಿವು ಮತ್ತು ಲಸಿಕೆಕರಣ ವೇಳಾಪಟ್ಟಿಗೆ ತಕ್ಷಣದ ಪ್ರವೇಶವನ್ನು ಒದಗಿಸುವುದು.",
        "tab-whatsapp": "WhatsApp ಡೆಮೊ",
        "tab-whatsapp-tooltip": "ನಮ್ಮ WhatsApp ಆರೋಗ್ಯ ಸಹಾಯಕನ ಅನುಭವವನ್ನು ಪಡೆಯಿರಿ",
        "tab-sms": "SMS ಡೆಮೊ",
        "tab-sms-tooltip": "ನಮ್ಮ SMS-ಆಧಾರಿತ ಆರೋಗ್ಯ ಮಾರ್ಗದರ್ಶನವನ್ನು ಪ್ರಯತ್ನಿಸಿ",
        "tab-about": "ಯೋಜನೆಯ ಬಗ್ಗೆ",
        "tab-about-tooltip": "ಜೀವಿಕಾ ಯೋಜನೆಯ ಬಗ್ಗೆ ಹೆಚ್ಚು ತಿಳಿಯಿರಿ",
        "contact-name": "ಜೀವಿಕಾ",
        "online-status": "ಆನ್‌ಲೈನ್",
        "contact-number": "+91-XXXX-HEALTH",
        "input-placeholder": "ಸಂದೇಶವನ್ನು ಟೈಪ್ ಮಾಡಿ...",
        "about-hero-title": "AI-ಚಾಲಿತ ಸಾರ್ವಜನಿಕ ಆರೋಗ್ಯ ಕ್ರಾಂತಿ",
        "about-hero-subtitle": "ಗ್ರಾಮೀಣ ಮತ್ತು ಅರೆ-ನಗರ ಭಾರತದಲ್ಲಿ ಆರೋಗ್ಯ ಸೇವೆಗಳ ಪ್ರವೇಶ್ಯತೆಯನ್ನು ರೂಪಾಂತರಿಸುವುದು",
        "problem-title": "ಸಮಸ್ಯೆ ಹೇಳಿಕೆ",
        "problem-description": "ಗ್ರಾಮೀಣ ಪ್ರದೇಶಗಳಲ್ಲಿ ಸೀಮಿತ ಆರೋಗ್ಯ ಅರಿವು ಮತ್ತು ಪ್ರವೇಶ್ಯತೆ, ಇದು ತಡೆಗಟ್ಟಬಹುದಾದ ರೋಗಗಳು ಮತ್ತು ವಿಳಂಬಿತ ವೈದ್ಯಕೀಯ ಹಸ್ತಕ್ಷೇಪಗಳಿಗೆ ಕಾರಣವಾಗುತ್ತದೆ.",
        "solution-title": "ನಮ್ಮ ಪರಿಹಾರ",
        "solution-description": "WhatsApp ಮತ್ತು SMS ನಂತಹ ಪರಿಚಿತ ವೇದಿಕೆಗಳ ಮೂಲಕ ತಕ್ಷಣದ ಆರೋಗ್ಯ ಮಾರ್ಗದರ್ಶನ, ರೋಗದ ಅರಿವು, ಲಸಿಕೆಕರಣ ವೇಳಾಪಟ್ಟಿಗಳು ಮತ್ತು ರಿಯಲ್-ಟೈಮ್ ಸ್ಫೋಟ ಎಚ್ಚರಿಕೆಗಳನ್ನು ಒದಗಿಸುವ ಬಹುಭಾಷಾ AI ಚಾಟ್‌ಬಾಟ್.",
        "multilingual-title": "ಬಹುಭಾಷಾ ಬೆಂಬಲ"
    }
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
        this.currentLanguage = 'english';
        this.init();
    }

    init() {
        this.setupTopNavbar();
        this.setupTabNavigation();
        this.setupChatFunctionality();
        this.setupScrollAnimations();
        this.setupCardHoverEffects();
        this.setupLanguageSwitching();
        this.sendInitialMessages();
        this.setupOutbreakAlerts();
    }

    setupTopNavbar() {
        const navbarTabs = document.querySelectorAll('.navbar-tab');
        
        navbarTabs.forEach(tab => {
            tab.addEventListener('click', () => {
                const target = tab.getAttribute('data-target');
                this.scrollToCard(target);
                this.setActiveNavbarTab(tab);
            });
        });
        
        // Add scroll listener to update active navbar tab
        window.addEventListener('scroll', () => {
            this.updateActiveNavbarTab();
        });
    }

    updateActiveNavbarTab() {
        const cards = [
            { id: 'about-card', tab: 'about-card' },
            { id: 'whatsapp-card', tab: 'whatsapp-card' },
            { id: 'sms-card', tab: 'sms-card' }
        ];
        
        const scrollPosition = window.scrollY + 100; // Offset for better detection
        
        for (let card of cards) {
            const element = document.getElementById(card.id);
            if (element) {
                const rect = element.getBoundingClientRect();
                const elementTop = rect.top + window.scrollY;
                const elementBottom = elementTop + rect.height;
                
                if (scrollPosition >= elementTop && scrollPosition < elementBottom) {
                    const navbarTab = document.querySelector(`[data-target="${card.tab}"]`);
                    if (navbarTab && !navbarTab.classList.contains('active')) {
                        this.setActiveNavbarTab(navbarTab);
                    }
                    break;
                }
            }
        }
    }

    setActiveNavbarTab(activeTab) {
        const navbarTabs = document.querySelectorAll('.navbar-tab');
        navbarTabs.forEach(tab => tab.classList.remove('active'));
        activeTab.classList.add('active');
    }

    setupTabNavigation() {
        const tabButtons = document.querySelectorAll('.tab-btn');
        
        tabButtons.forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                const targetTab = btn.dataset.tab;
                this.scrollToCard(targetTab);
                
                // Add visual feedback
                this.addTabClickFeedback(btn);
                
                // Update top navbar active state
                const navbarTab = document.querySelector(`[data-target="${targetTab}-card"]`);
                if (navbarTab) {
                    this.setActiveNavbarTab(navbarTab);
                }
            });
        });
    }

    scrollToCard(tabName) {
        const cardMap = {
            'whatsapp': '.whatsapp-card',
            'sms': '.sms-card',
            'about': '.about-card',
            'whatsapp-card': '.whatsapp-card',
            'sms-card': '.sms-card',
            'about-card': '.about-card'
        };
        
        const targetCard = document.querySelector(cardMap[tabName]);
        if (targetCard) {
            // Calculate offset to account for top navbar and sticky header
            const topNavbarHeight = 70;
            const tabNavHeight = document.querySelector('.tab-navigation')?.offsetHeight || 0;
            const totalHeaderHeight = topNavbarHeight + tabNavHeight;
            const cardPosition = targetCard.offsetTop - totalHeaderHeight - 20;
            
            // Smooth scroll to the card
            window.scrollTo({
                top: cardPosition,
                behavior: 'smooth'
            });
            
            // Add highlight effect to the target card
            this.highlightCard(targetCard);
        }
    }

    addTabClickFeedback(button) {
        // Add click animation to button
        button.style.transform = 'scale(0.95)';
        button.style.transition = 'transform 0.1s ease';
        
        setTimeout(() => {
            button.style.transform = 'scale(1)';
        }, 100);
    }

    highlightCard(card) {
        // Add highlight effect
        card.style.border = '3px solid #4ECDC4';
        card.style.boxShadow = '0 0 30px rgba(78, 205, 196, 0.5)';
        card.style.transform = 'scale(1.02)';
        card.style.transition = 'all 0.3s ease';
        
        // Remove highlight after 2 seconds
        setTimeout(() => {
            card.style.border = '2px solid transparent';
            card.style.boxShadow = '0 10px 40px rgba(0, 0, 0, 0.1)';
            card.style.transform = 'scale(1)';
        }, 2000);
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

    setupCardHoverEffects() {
        const aboutSections = document.querySelectorAll('.about-section');
        
        aboutSections.forEach(section => {
            let isHovered = false;
            let hoverOutTimeout = null;

            section.addEventListener('mouseenter', () => {
                isHovered = true;
                section.classList.remove('hover-out');
                if (hoverOutTimeout) {
                    clearTimeout(hoverOutTimeout);
                    hoverOutTimeout = null;
                }
            });

            section.addEventListener('mouseleave', () => {
                isHovered = false;
                section.classList.add('hover-out');
                
                // Remove the hover-out class after animation completes
                hoverOutTimeout = setTimeout(() => {
                    section.classList.remove('hover-out');
                }, 600);
            });
        });

        // Enhanced stat card effects
        this.setupStatCardEffects();
    }

    setupStatCardEffects() {
        const statItems = document.querySelectorAll('.stat-item');
        
        statItems.forEach((item, index) => {
            // Add entrance animation delay
            item.style.animationDelay = `${index * 0.2}s`;
            
            // Add click effect
            item.addEventListener('click', () => {
                this.triggerStatCardClick(item);
            });

            // Add mouse enter effect
            item.addEventListener('mouseenter', () => {
                this.triggerStatCardHover(item, true);
            });

            // Add mouse leave effect
            item.addEventListener('mouseleave', () => {
                this.triggerStatCardHover(item, false);
            });
        });

        // Setup flow node interactions
        this.setupFlowNodeEffects();
        
        // Setup technical architecture card effects
        this.setupTechArchitectureEffects();
    }

    setupFlowNodeEffects() {
        const flowNodes = document.querySelectorAll('.flow-node');
        
        flowNodes.forEach(node => {
            node.addEventListener('click', (e) => {
                e.stopPropagation();
                this.triggerFlowNodeClick(node);
            });

            // Add hover effects
            node.addEventListener('mouseenter', () => {
                this.triggerFlowNodeHover(node, true);
            });

            node.addEventListener('mouseleave', () => {
                this.triggerFlowNodeHover(node, false);
            });
        });
    }

    triggerFlowNodeClick(node) {
        // Add click animation
        node.style.transform = 'scale(0.95)';
        setTimeout(() => {
            node.style.transform = '';
        }, 150);

        // Create detailed chart popup
        this.createFlowNodeChart(node);
    }

    triggerFlowNodeHover(node, isEntering) {
        if (isEntering) {
            node.style.transform = 'scale(1.05) translateY(-2px)';
            node.style.boxShadow = '0 8px 25px rgba(0, 0, 0, 0.3)';
        } else {
            node.style.transform = 'scale(1) translateY(0)';
            node.style.boxShadow = '';
        }
    }

    createFlowNodeChart(node) {
        const nodeText = node.textContent.trim();
        const chartData = this.getChartDataForNode(nodeText);
        
        // Create chart popup
        const chartPopup = document.createElement('div');
        chartPopup.className = 'flow-chart-popup';
        chartPopup.innerHTML = `
            <div class="chart-overlay" onclick="this.parentElement.remove()"></div>
            <div class="chart-container">
                <div class="chart-header">
                    <h3>${chartData.title}</h3>
                    <button class="chart-close" onclick="this.closest('.flow-chart-popup').remove()">×</button>
                </div>
                <div class="chart-content">
                    <div class="chart-visualization">
                        ${chartData.chartHTML}
                    </div>
                    <div class="chart-details">
                        <div class="chart-stats">
                            ${chartData.stats.map(stat => `
                                <div class="stat-item">
                                    <span class="stat-label">${stat.label}</span>
                                    <span class="stat-value">${stat.value}</span>
                                </div>
                            `).join('')}
                        </div>
                        <div class="chart-description">
                            ${chartData.description}
                        </div>
                    </div>
                </div>
            </div>
        `;

        // Add styles
        chartPopup.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: 10000;
            display: flex;
            align-items: center;
            justify-content: center;
            animation: chartFadeIn 0.3s ease;
        `;

        document.body.appendChild(chartPopup);

        // Add chart animations
        setTimeout(() => {
            const chartContainer = chartPopup.querySelector('.chart-container');
            chartContainer.style.animation = 'chartSlideIn 0.4s cubic-bezier(0.25, 0.8, 0.25, 1)';
        }, 50);
    }

    getChartDataForNode(nodeText) {
        const chartDataMap = {
            'User Query': {
                title: 'User Query Analysis',
                description: 'Real-time analysis of user health queries and their patterns',
                stats: [
                    { label: 'Daily Queries', value: '2,847' },
                    { label: 'Avg Response Time', value: '1.2s' },
                    { label: 'Success Rate', value: '94.2%' },
                    { label: 'Languages', value: '6' }
                ],
                chartHTML: this.createQueryChart()
            },
            'AI Processing': {
                title: 'AI Processing Performance',
                description: 'Advanced NLP processing capabilities and response generation',
                stats: [
                    { label: 'Processing Speed', value: '850ms' },
                    { label: 'Accuracy', value: '96.8%' },
                    { label: 'Model Version', value: 'v2.1' },
                    { label: 'Uptime', value: '99.9%' }
                ],
                chartHTML: this.createProcessingChart()
            },
            '80% Accurate': {
                title: 'Accuracy Metrics',
                description: 'Comprehensive accuracy tracking across all health domains',
                stats: [
                    { label: 'Overall Accuracy', value: '80.3%' },
                    { label: 'Symptom Analysis', value: '85.2%' },
                    { label: 'Medication Info', value: '78.9%' },
                    { label: 'Emergency Detection', value: '92.1%' }
                ],
                chartHTML: this.createAccuracyChart()
            },
            'Health Response': {
                title: 'Response Quality',
                description: 'Quality metrics for health responses and user satisfaction',
                stats: [
                    { label: 'User Satisfaction', value: '4.7/5' },
                    { label: 'Response Quality', value: '91.3%' },
                    { label: 'Follow-up Rate', value: '67.8%' },
                    { label: 'Resolution Rate', value: '89.4%' }
                ],
                chartHTML: this.createResponseChart()
            },
            'Health Education': {
                title: 'Health Education Impact',
                description: 'Educational content delivery and community engagement metrics',
                stats: [
                    { label: 'Content Delivered', value: '15,420' },
                    { label: 'Engagement Rate', value: '73.5%' },
                    { label: 'Knowledge Retention', value: '68.9%' },
                    { label: 'Community Reach', value: '45,230' }
                ],
                chartHTML: this.createEducationChart()
            },
            'Community Outreach': {
                title: 'Community Outreach',
                description: 'Rural community engagement and awareness programs',
                stats: [
                    { label: 'Villages Covered', value: '1,247' },
                    { label: 'Awareness Sessions', value: '3,891' },
                    { label: 'Participants', value: '89,456' },
                    { label: 'Success Rate', value: '82.3%' }
                ],
                chartHTML: this.createOutreachChart()
            },
            '20% Increase': {
                title: 'Awareness Growth',
                description: 'Measurable increase in health awareness across communities',
                stats: [
                    { label: 'Baseline Awareness', value: '45%' },
                    { label: 'Current Awareness', value: '65%' },
                    { label: 'Growth Rate', value: '20%' },
                    { label: 'Target Achievement', value: '110%' }
                ],
                chartHTML: this.createAwarenessChart()
            },
            'Better Health': {
                title: 'Health Outcomes',
                description: 'Improved health outcomes and preventive care adoption',
                stats: [
                    { label: 'Preventive Care', value: '+35%' },
                    { label: 'Early Detection', value: '+28%' },
                    { label: 'Vaccination Rate', value: '+42%' },
                    { label: 'Health Literacy', value: '+31%' }
                ],
                chartHTML: this.createHealthChart()
            },
            'Rural Areas': {
                title: 'Rural Coverage',
                description: 'Comprehensive coverage of rural and semi-urban areas',
                stats: [
                    { label: 'States Covered', value: '28' },
                    { label: 'Districts', value: '456' },
                    { label: 'Villages', value: '12,847' },
                    { label: 'Population', value: '5.2M' }
                ],
                chartHTML: this.createRuralChart()
            },
            'WhatsApp/SMS': {
                title: 'Platform Integration',
                description: 'Multi-platform integration and user engagement',
                stats: [
                    { label: 'WhatsApp Users', value: '3.2M' },
                    { label: 'SMS Users', value: '1.8M' },
                    { label: 'Daily Active', value: '847K' },
                    { label: 'Messages/Day', value: '2.1M' }
                ],
                chartHTML: this.createPlatformChart()
            },
            '5M+ Users': {
                title: 'User Base Growth',
                description: 'Exponential growth in user base and engagement',
                stats: [
                    { label: 'Total Users', value: '5.2M' },
                    { label: 'Monthly Growth', value: '+12.5%' },
                    { label: 'Retention Rate', value: '78.3%' },
                    { label: 'Referral Rate', value: '34.7%' }
                ],
                chartHTML: this.createUserChart()
            },
            'Health Access': {
                title: 'Healthcare Access',
                description: 'Improved access to healthcare services and information',
                stats: [
                    { label: 'Access Improvement', value: '+67%' },
                    { label: 'Service Utilization', value: '+45%' },
                    { label: 'Cost Reduction', value: '-32%' },
                    { label: 'Time Saved', value: '2.3hrs' }
                ],
                chartHTML: this.createAccessChart()
            }
        };

        return chartDataMap[nodeText] || {
            title: 'Data Visualization',
            description: 'Interactive data representation for this metric',
            stats: [
                { label: 'Metric 1', value: '85%' },
                { label: 'Metric 2', value: '92%' },
                { label: 'Metric 3', value: '78%' },
                { label: 'Metric 4', value: '89%' }
            ],
            chartHTML: this.createDefaultChart()
        };
    }

    // Chart creation methods
    createQueryChart() {
        return `
            <div class="chart-bar">
                <div class="bar-container">
                    <div class="bar" style="height: 85%; background: linear-gradient(135deg, #4CAF50, #45a049);">
                        <span class="bar-value">2,847</span>
                    </div>
                    <div class="bar-label">Daily Queries</div>
                </div>
                <div class="bar-container">
                    <div class="bar" style="height: 92%; background: linear-gradient(135deg, #2196F3, #1976D2);">
                        <span class="bar-value">1.2s</span>
                    </div>
                    <div class="bar-label">Response Time</div>
                </div>
                <div class="bar-container">
                    <div class="bar" style="height: 78%; background: linear-gradient(135deg, #FF9800, #F57C00);">
                        <span class="bar-value">94.2%</span>
                    </div>
                    <div class="bar-label">Success Rate</div>
                </div>
                <div class="bar-container">
                    <div class="bar" style="height: 95%; background: linear-gradient(135deg, #9C27B0, #7B1FA2);">
                        <span class="bar-value">6</span>
                    </div>
                    <div class="bar-label">Languages</div>
                </div>
            </div>
        `;
    }

    createProcessingChart() {
        return `
            <div class="chart-donut">
                <div class="donut-center">
                    <div class="donut-value">96.8%</div>
                    <div class="donut-label">Accuracy</div>
                </div>
                <svg class="donut-svg" viewBox="0 0 120 120">
                    <circle cx="60" cy="60" r="50" fill="none" stroke="#e0e0e0" stroke-width="8"/>
                    <circle cx="60" cy="60" r="50" fill="none" stroke="#4CAF50" stroke-width="8" 
                            stroke-dasharray="314" stroke-dashoffset="62" transform="rotate(-90 60 60)"/>
                </svg>
            </div>
        `;
    }

    createAccuracyChart() {
        return `
            <div class="chart-radar">
                <div class="radar-grid">
                    <div class="radar-axis" style="--angle: 0deg;"></div>
                    <div class="radar-axis" style="--angle: 90deg;"></div>
                    <div class="radar-axis" style="--angle: 180deg;"></div>
                    <div class="radar-axis" style="--angle: 270deg;"></div>
                    <div class="radar-polygon">
                        <div class="radar-point" style="--angle: 0deg; --value: 80.3%;"></div>
                        <div class="radar-point" style="--angle: 90deg; --value: 85.2%;"></div>
                        <div class="radar-point" style="--angle: 180deg; --value: 78.9%;"></div>
                        <div class="radar-point" style="--angle: 270deg; --value: 92.1%;"></div>
                    </div>
                </div>
            </div>
        `;
    }

    createResponseChart() {
        return `
            <div class="chart-line">
                <div class="line-chart">
                    <div class="line-point" style="left: 10%; bottom: 70%;" data-value="4.7">4.7</div>
                    <div class="line-point" style="left: 30%; bottom: 85%;" data-value="91.3">91.3</div>
                    <div class="line-point" style="left: 50%; bottom: 60%;" data-value="67.8">67.8</div>
                    <div class="line-point" style="left: 70%; bottom: 80%;" data-value="89.4">89.4</div>
                    <div class="line-path"></div>
                </div>
            </div>
        `;
    }

    createEducationChart() {
        return `
            <div class="chart-pie">
                <div class="pie-slice" style="--percentage: 35; --color: #4CAF50;">
                    <span class="slice-label">Content</span>
                </div>
                <div class="pie-slice" style="--percentage: 25; --color: #2196F3;">
                    <span class="slice-label">Engagement</span>
                </div>
                <div class="pie-slice" style="--percentage: 20; --color: #FF9800;">
                    <span class="slice-label">Retention</span>
                </div>
                <div class="pie-slice" style="--percentage: 20; --color: #9C27B0;">
                    <span class="slice-label">Reach</span>
                </div>
            </div>
        `;
    }

    createOutreachChart() {
        return `
            <div class="chart-progress">
                <div class="progress-item">
                    <div class="progress-bar" style="width: 85%; background: linear-gradient(90deg, #4CAF50, #45a049);">
                        <span class="progress-text">1,247 Villages</span>
                    </div>
                </div>
                <div class="progress-item">
                    <div class="progress-bar" style="width: 92%; background: linear-gradient(90deg, #2196F3, #1976D2);">
                        <span class="progress-text">3,891 Sessions</span>
                    </div>
                </div>
                <div class="progress-item">
                    <div class="progress-bar" style="width: 78%; background: linear-gradient(90deg, #FF9800, #F57C00);">
                        <span class="progress-text">89,456 Participants</span>
                    </div>
                </div>
                <div class="progress-item">
                    <div class="progress-bar" style="width: 88%; background: linear-gradient(90deg, #9C27B0, #7B1FA2);">
                        <span class="progress-text">82.3% Success</span>
                    </div>
                </div>
            </div>
        `;
    }

    createAwarenessChart() {
        return `
            <div class="chart-gauge">
                <div class="gauge-container">
                    <div class="gauge-needle" style="--rotation: 72deg;"></div>
                    <div class="gauge-labels">
                        <span class="gauge-min">0%</span>
                        <span class="gauge-max">100%</span>
                        <span class="gauge-current">65%</span>
                    </div>
                </div>
            </div>
        `;
    }

    createHealthChart() {
        return `
            <div class="chart-bubble">
                <div class="bubble" style="--size: 80px; --x: 20%; --y: 30%; background: #4CAF50;">
                    <span>+35%</span>
                </div>
                <div class="bubble" style="--size: 65px; --x: 50%; --y: 60%; background: #2196F3;">
                    <span>+28%</span>
                </div>
                <div class="bubble" style="--size: 90px; --x: 80%; --y: 40%; background: #FF9800;">
                    <span>+42%</span>
                </div>
                <div class="bubble" style="--size: 70px; --x: 30%; --y: 70%; background: #9C27B0;">
                    <span>+31%</span>
                </div>
            </div>
        `;
    }

    createRuralChart() {
        return `
            <div class="chart-map">
                <div class="map-container">
                    <div class="map-point" style="--x: 30%; --y: 40%;" data-value="28">28</div>
                    <div class="map-point" style="--x: 60%; --y: 60%;" data-value="456">456</div>
                    <div class="map-point" style="--x: 70%; --y: 30%;" data-value="12,847">12,847</div>
                    <div class="map-point" style="--x: 40%; --y: 70%;" data-value="5.2M">5.2M</div>
                    <div class="map-connections"></div>
                </div>
            </div>
        `;
    }

    createPlatformChart() {
        return `
            <div class="chart-stack">
                <div class="stack-item" style="height: 70%; background: linear-gradient(135deg, #25D366, #128C7E);">
                    <span>WhatsApp: 3.2M</span>
                </div>
                <div class="stack-item" style="height: 30%; background: linear-gradient(135deg, #667eea, #764ba2);">
                    <span>SMS: 1.8M</span>
                </div>
            </div>
        `;
    }

    createUserChart() {
        return `
            <div class="chart-growth">
                <div class="growth-line">
                    <div class="growth-point" style="--month: 1; --value: 1.2M;">1.2M</div>
                    <div class="growth-point" style="--month: 2; --value: 1.8M;">1.8M</div>
                    <div class="growth-point" style="--month: 3; --value: 2.5M;">2.5M</div>
                    <div class="growth-point" style="--month: 4; --value: 3.2M;">3.2M</div>
                    <div class="growth-point" style="--month: 5; --value: 4.1M;">4.1M</div>
                    <div class="growth-point" style="--month: 6; --value: 5.2M;">5.2M</div>
                </div>
            </div>
        `;
    }

    createAccessChart() {
        return `
            <div class="chart-comparison">
                <div class="comparison-before">
                    <div class="comparison-label">Before</div>
                    <div class="comparison-bar" style="height: 40%; background: #ff6b6b;"></div>
                </div>
                <div class="comparison-after">
                    <div class="comparison-label">After</div>
                    <div class="comparison-bar" style="height: 85%; background: #4CAF50;"></div>
                </div>
                <div class="comparison-improvement">+67% Improvement</div>
            </div>
        `;
    }

    createDefaultChart() {
        return `
            <div class="chart-default">
                <div class="default-chart">
                    <div class="chart-icon">📊</div>
                    <div class="chart-text">Interactive Data Visualization</div>
                </div>
            </div>
        `;
    }

    setupTechArchitectureEffects() {
        const techCards = document.querySelectorAll('.tech-item, .tech-card, .architecture-item, .tech-feature');
        
        techCards.forEach((card, index) => {
            // Add entrance animation delay
            card.style.animationDelay = `${index * 0.1}s`;
            
            // Add hover effects
            card.addEventListener('mouseenter', () => {
                this.triggerTechCardHover(card, true);
            });

            card.addEventListener('mouseleave', () => {
                this.triggerTechCardHover(card, false);
            });

            // Add click effects
            card.addEventListener('click', () => {
                this.triggerTechCardClick(card);
            });
        });
    }

    triggerTechCardHover(card, isEntering) {
        if (isEntering) {
            // Add pop-up effect
            card.style.transform = 'translateY(-20px) scale(1.05) rotateY(5deg)';
            card.style.boxShadow = '0 25px 50px rgba(0, 0, 0, 0.3), 0 0 30px rgba(78, 205, 196, 0.4)';
            card.style.zIndex = '1000';
            card.style.transition = 'all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1)';
            
            // Add glow effect
            card.style.border = '2px solid #4ECDC4';
            card.style.background = 'linear-gradient(135deg, rgba(78, 205, 196, 0.1), rgba(68, 160, 141, 0.1))';
            
            // Add floating particles
            this.createFloatingParticles(card);
            
            // Add ripple effect
            this.createRippleEffect(card);
            
            // Add pulsing animation
            card.classList.add('tech-card-pulse');
            
        } else {
            // Reset to normal state
            card.style.transform = 'translateY(0) scale(1) rotateY(0deg)';
            card.style.boxShadow = '';
            card.style.zIndex = '';
            card.style.border = '';
            card.style.background = '';
            card.classList.remove('tech-card-pulse');
        }
    }

    triggerTechCardClick(card) {
        // Add click animation
        card.style.transform = 'translateY(-15px) scale(0.98) rotateY(2deg)';
        card.style.transition = 'all 0.1s ease';
        
        // Add explosion effect
        this.createExplosionEffect(card);
        
        // Add shake animation
        card.classList.add('tech-card-shake');
        
        setTimeout(() => {
            card.style.transform = 'translateY(-20px) scale(1.05) rotateY(5deg)';
            card.style.transition = 'all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1)';
            card.classList.remove('tech-card-shake');
        }, 200);
    }

    createFloatingParticles(card) {
        const particleCount = 8;
        const rect = card.getBoundingClientRect();
        
        for (let i = 0; i < particleCount; i++) {
            const particle = document.createElement('div');
            particle.className = 'tech-particle';
            particle.style.cssText = `
                position: fixed;
                width: 6px;
                height: 6px;
                background: #4ECDC4;
                border-radius: 50%;
                pointer-events: none;
                z-index: 9999;
                left: ${rect.left + rect.width / 2}px;
                top: ${rect.top + rect.height / 2}px;
                animation: techParticleFloat ${1 + Math.random() * 2}s ease-out forwards;
            `;
            
            document.body.appendChild(particle);
            
            setTimeout(() => {
                particle.remove();
            }, 3000);
        }
    }

    createRippleEffect(card) {
        const ripple = document.createElement('div');
        ripple.className = 'tech-ripple';
        ripple.style.cssText = `
            position: absolute;
            top: 50%;
            left: 50%;
            width: 0;
            height: 0;
            background: radial-gradient(circle, rgba(78, 205, 196, 0.3) 0%, transparent 70%);
            border-radius: 50%;
            transform: translate(-50%, -50%);
            pointer-events: none;
            animation: techRippleExpand 1s ease-out;
        `;
        
        card.appendChild(ripple);
        
        setTimeout(() => {
            ripple.remove();
        }, 1000);
    }

    createExplosionEffect(card) {
        const explosionCount = 12;
        const rect = card.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        
        for (let i = 0; i < explosionCount; i++) {
            const explosion = document.createElement('div');
            explosion.className = 'tech-explosion';
            explosion.style.cssText = `
                position: fixed;
                width: 8px;
                height: 8px;
                background: linear-gradient(45deg, #4ECDC4, #44A08D);
                border-radius: 50%;
                pointer-events: none;
                z-index: 9999;
                left: ${centerX}px;
                top: ${centerY}px;
                animation: techExplosion ${0.8 + Math.random() * 0.4}s ease-out forwards;
            `;
            
            // Random direction for explosion
            const angle = (i / explosionCount) * 2 * Math.PI;
            const distance = 100 + Math.random() * 50;
            const endX = centerX + Math.cos(angle) * distance;
            const endY = centerY + Math.sin(angle) * distance;
            
            explosion.style.setProperty('--end-x', `${endX}px`);
            explosion.style.setProperty('--end-y', `${endY}px`);
            
            document.body.appendChild(explosion);
            
            setTimeout(() => {
                explosion.remove();
            }, 1200);
        }
    }

    triggerStatCardClick(item) {
        // Add click animation
        item.style.transform = 'scale(0.95)';
        setTimeout(() => {
            item.style.transform = '';
        }, 150);

        // Add particle effect
        this.createParticleEffect(item);
    }

    triggerStatCardHover(item, isEntering) {
        if (isEntering) {
            // Add floating effect
            item.style.transition = 'all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1)';
            item.style.transform = 'translateY(-15px) scale(1.05)';
            
            // Add glow effect
            item.style.boxShadow = '0 25px 60px rgba(0, 0, 0, 0.3)';
        } else {
            item.style.transform = 'translateY(0) scale(1)';
            item.style.boxShadow = '';
        }
    }

    createParticleEffect(item) {
        const rect = item.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        for (let i = 0; i < 8; i++) {
            const particle = document.createElement('div');
            particle.className = 'stat-particle';
            particle.style.cssText = `
                position: fixed;
                left: ${centerX}px;
                top: ${centerY}px;
                width: 6px;
                height: 6px;
                background: linear-gradient(45deg, #4ECDC4, #44A08D);
                border-radius: 50%;
                pointer-events: none;
                z-index: 1000;
                animation: particleExplode 1s ease-out forwards;
            `;

            // Random direction
            const angle = (i / 8) * Math.PI * 2;
            const distance = 50 + Math.random() * 30;
            const endX = centerX + Math.cos(angle) * distance;
            const endY = centerY + Math.sin(angle) * distance;

            particle.style.setProperty('--end-x', `${endX}px`);
            particle.style.setProperty('--end-y', `${endY}px`);

            document.body.appendChild(particle);

            setTimeout(() => {
                if (particle.parentNode) {
                    particle.parentNode.removeChild(particle);
                }
            }, 1000);
        }
    }

    setupLanguageSwitching() {
        // Create language selector
        this.createLanguageSelector();
        
        // Set up language button click handlers for dropdown
        const languageButtons = document.querySelectorAll('.language-btn');
        languageButtons.forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                const selectedLanguage = btn.dataset.language;
                this.switchLanguage(selectedLanguage);
            });
        });

        // Set up language button click handlers for About tab
        const aboutLanguageButtons = document.querySelectorAll('.about-language-btn');
        aboutLanguageButtons.forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                const selectedLanguage = btn.dataset.language;
                this.switchLanguage(selectedLanguage);
                
                // Add visual feedback
                this.addLanguageSelectionFeedback(btn);
            });
        });
    }

    createLanguageSelector() {
        // Find the hero content area to add language selector
        const heroContent = document.querySelector('.hero-content');
        if (!heroContent) return;

        // Create language selector container
        const languageSelector = document.createElement('div');
        languageSelector.className = 'language-selector';
        languageSelector.innerHTML = `
            <div class="language-dropdown">
                <button class="language-toggle" id="language-toggle">
                    <i class="fas fa-globe"></i>
                    <span id="current-language">English</span>
                    <i class="fas fa-chevron-down"></i>
                </button>
                <div class="language-options" id="language-options">
                    <button class="language-btn" data-language="hindi">हिंदी</button>
                    <button class="language-btn" data-language="english">English</button>
                    <button class="language-btn" data-language="bengali">বাংলা</button>
                    <button class="language-btn" data-language="tamil">தமிழ்</button>
                    <button class="language-btn" data-language="telugu">తెలుగు</button>
                    <button class="language-btn" data-language="kannada">ಕನ್ನಡ</button>
                </div>
            </div>
        `;

        // Insert language selector after SIH branding
        const sihBranding = document.querySelector('.sih-branding');
        if (sihBranding) {
            sihBranding.insertAdjacentElement('afterend', languageSelector);
        }

        // Set up dropdown toggle
        const languageToggle = document.getElementById('language-toggle');
        const languageOptions = document.getElementById('language-options');
        
        if (languageToggle && languageOptions) {
            languageToggle.addEventListener('click', (e) => {
                e.stopPropagation();
                languageOptions.classList.toggle('show');
            });

            // Close dropdown when clicking outside
            document.addEventListener('click', (e) => {
                if (!languageSelector.contains(e.target)) {
                    languageOptions.classList.remove('show');
                }
            });
        }
    }

    switchLanguage(language) {
        if (!translations[language]) return;
        
        this.currentLanguage = language;
        
        // Update all elements with data-translate attributes
        const elementsToTranslate = document.querySelectorAll('[data-translate]');
        elementsToTranslate.forEach(element => {
            const key = element.getAttribute('data-translate');
            if (translations[language][key]) {
                element.textContent = translations[language][key];
            }
        });

        // Update placeholder attributes
        const elementsWithPlaceholder = document.querySelectorAll('[data-translate-placeholder]');
        elementsWithPlaceholder.forEach(element => {
            const key = element.getAttribute('data-translate-placeholder');
            if (translations[language][key]) {
                element.placeholder = translations[language][key];
            }
        });

        // Update current language display
        const currentLanguageSpan = document.getElementById('current-language');
        if (currentLanguageSpan) {
            const languageNames = {
                'hindi': 'हिंदी',
                'english': 'English',
                'bengali': 'বাংলা',
                'tamil': 'தமிழ்',
                'telugu': 'తెలుగు',
                'kannada': 'ಕನ್ನಡ'
            };
            currentLanguageSpan.textContent = languageNames[language] || language;
        }

        // Update active language button in dropdown
        const languageButtons = document.querySelectorAll('.language-btn');
        languageButtons.forEach(btn => {
            btn.classList.remove('active');
            if (btn.dataset.language === language) {
                btn.classList.add('active');
            }
        });

        // Update active language button in About tab
        const aboutLanguageButtons = document.querySelectorAll('.about-language-btn');
        aboutLanguageButtons.forEach(btn => {
            btn.classList.remove('active');
            if (btn.dataset.language === language) {
                btn.classList.add('active');
            }
        });

        // Close dropdown
        const languageOptions = document.getElementById('language-options');
        if (languageOptions) {
            languageOptions.classList.remove('show');
        }

        // Update document language attribute
        document.documentElement.lang = language;

        // Send language-specific greeting
        this.sendLanguageSpecificGreeting(language);
    }

    sendLanguageSpecificGreeting(language) {
        if (multilingualGreetings[language]) {
            // Clear existing messages and send new greeting
            const whatsappMessages = document.getElementById('whatsapp-messages');
            const smsMessages = document.getElementById('sms-messages');
            
            if (whatsappMessages) {
                whatsappMessages.innerHTML = '';
                this.addBotMessage(multilingualGreetings[language], 'whatsapp');
            }
            
            if (smsMessages) {
                smsMessages.innerHTML = '';
                this.addBotMessage(multilingualGreetings[language], 'sms');
            }
        }
    }

    addLanguageSelectionFeedback(button) {
        // Add a temporary visual feedback
        button.style.transform = 'scale(0.95)';
        button.style.boxShadow = '0 0 20px rgba(78, 205, 196, 0.6)';
        
        setTimeout(() => {
            button.style.transform = 'scale(1)';
            button.style.boxShadow = '';
        }, 200);

        // Show a brief success message
        const feedback = document.createElement('div');
        feedback.className = 'language-feedback';
        feedback.textContent = 'Language changed successfully!';
        feedback.style.cssText = `
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background: linear-gradient(135deg, #4ECDC4, #44A08D);
            color: white;
            padding: 1rem 2rem;
            border-radius: 25px;
            font-weight: 600;
            z-index: 10000;
            animation: fadeInOut 2s ease-in-out;
            box-shadow: 0 8px 32px rgba(78, 205, 196, 0.3);
        `;
        
        document.body.appendChild(feedback);
        
        setTimeout(() => {
            if (feedback.parentNode) {
                feedback.parentNode.removeChild(feedback);
            }
        }, 2000);
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
                this.addBotMessage(randomAlert, 'whatsapp');
                this.addBotMessage(randomAlert, 'sms');
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

        // Trigger about sections animation
        setTimeout(() => {
            this.animateAboutSections();
        }, 1000);
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
    // const floatingTips = [
    //     "💡 Drink 8-10 glasses of water daily",
    //     "💡 Wash hands frequently with soap for 20 seconds",
    //     "💡 Include fruits and vegetables in every meal",
    //     "💡 Get 7-8 hours of sleep daily",
    //     "💡 Exercise for at least 30 minutes daily",
    //     "💡 Get regular health check-ups"
    // ];
    
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