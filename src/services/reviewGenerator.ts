import { BrandId } from '../types/brand';
import { ReviewLanguage } from '../types/review';
import { GenerateReviewInput } from './geminiService';

export const reviewGenerator = {
  generate(input: GenerateReviewInput): string {
    const { brandId, rating, answers, language, variationSeed = 0 } = input;

    switch (brandId) {
      case 'seg-academy':
        return generateSegAcademyReview(answers, rating, language, variationSeed);
      case 'career-dhara':
        return generateCareerDharaReview(answers, rating, language, variationSeed);
      case 'techogies':
        return generateTechogiesReview(answers, rating, language, variationSeed);
      case 'shorai':
        return generateShoraiReview(answers, rating, language, variationSeed);
      case 'i2s':
        return generateI2SReview(answers, rating, language, variationSeed);
      default:
        return 'Thank you for the wonderful learning and service experience.';
    }
  }
};

// ==========================================
// 1. SEG ACADEMY REVIEW GENERATOR
// ==========================================
function generateSegAcademyReview(
  answers: Record<string, any>,
  rating: number,
  language: ReviewLanguage,
  seed: number
): string {
  const topics: string[] = Array.isArray(answers.learnedTopics)
    ? answers.learnedTopics
    : answers.learnedTopics ? [answers.learnedTopics] : ['Technical Analysis'];
  const topicListStr = topics.slice(0, 3).join(' and ');
  const program = answers.program || 'Financial Market Training';
  const trainerRating = answers.trainerRating || rating || 5;
  const practicalLearning = answers.practicalLearning || 'Good practical market sessions';
  const likedMostList = Array.isArray(answers.likedMost) ? answers.likedMost : [answers.likedMost || 'Teaching methodology'];
  const likedStr = likedMostList.slice(0, 2).join(' as well as ');
  const additional = (answers.additionalExperience || '').trim();

  const isHighRating = rating >= 4;

  if (language === 'hi') {
    const variations = [
      `SEG Academy में मेरा सीखने का अनुभव बहुत ही बेहतरीन रहा। मैंने ${program} के तहत ${topicListStr} की बारीकियों को समझा। ट्रेनर का मार्गदर्शन और ${practicalLearning} ने चार्ट्स को लाइव मार्केट में समझना आसान बना दिया। विशेष रूप से ${likedStr} काफी मददगार साबित हुआ।${additional ? ` ${additional}` : ''} वित्तीय बाजार को समझने के लिए यह एक बहुत ही विश्वसनीय संस्थान है।`,
      `SEG Academy के साथ ट्रेडिंग और मार्केट एनालिसिस की मेरी समझ काफी बेहतर हुई है। यहाँ ${topicListStr} के कॉन्सेप्ट्स को बहुत ही प्रैक्टिकल तरीके से समझाया गया। फैकल्टी का पढ़ाने का तरीका और डाउट-क्लियरिंग सेशन्स बहुत प्रभावी रहे।${additional ? ` ${additional}` : ''} स्टॉक मार्केट सीखने के इच्छुक लोगों के लिए यह एक सराहनीय मंच है।`
    ];
    return variations[seed % variations.length];
  }

  if (language === 'hinglish') {
    const variations = [
      `SEG Academy ke saath mera learning journey kaafi accha raha. ${program} ke through ${topicListStr} ke concepts ko depth me seekhne ka mauka mila. Trainer ka teaching style bohot practical tha aur live market me charts ko decode karna easy laga. Best part ${likedStr} tha. Highly recommended for genuine market education!${additional ? ` ${additional}` : ''}`,
      `Maine SEG Academy me ${topicListStr} ki training attend ki. Practical chart analysis aur disciplined risk management ko bohot simple language me explain kiya gaya. Faculty hamesha doubts solve karne ke liye available rehte hain. Overall great atmosphere for serious learners.${additional ? ` ${additional}` : ''}`
    ];
    return variations[seed % variations.length];
  }

  // English
  const variations = [
    `I had a really rewarding learning experience at SEG Academy. Attending the ${program} gave me in-depth clarity on ${topicListStr}. The practical approach, along with ${practicalLearning.toLowerCase()}, made reading live market charts much simpler. What stood out most was their ${likedStr.toLowerCase()} and supportive mentorship.${additional ? ` ${additional}` : ''} Highly recommended for disciplined stock market education.`,
    `My experience at SEG Academy has been thoroughly insightful. The sessions on ${topicListStr} were conducted with clarity and structured logic. The faculty emphasized practical chart study and risk discipline rather than speculation. The ${likedStr.toLowerCase()} helped build solid market confidence.${additional ? ` ${additional}` : ''} A top-tier institute for financial education.`
  ];

  return variations[seed % variations.length];
}

// ==========================================
// 2. CAREER DHARA REVIEW GENERATOR
// ==========================================
function generateCareerDharaReview(
  answers: Record<string, any>,
  rating: number,
  language: ReviewLanguage,
  seed: number
): string {
  const service = answers.service || 'Admission Guidance';
  const recipient = answers.recipient || 'Myself';
  const recipientText = recipient.toLowerCase() === 'myself' ? 'for myself' : `for ${recipient.toLowerCase()}`;
  const helpfulness = answers.sessionHelpfulness || 'Very helpful';
  const requirementUnderstanding = answers.requirementUnderstanding || 'Completely understood my requirements';
  const collegeGuidance = answers.collegeSelectionGuidance || 'Good';
  const communication = answers.communicationSupport || 'Professional communication';
  const additional = (answers.additionalFeedback || '').trim();

  if (language === 'hi') {
    const variations = [
      `Career Dhara के साथ करियर काउंसलिंग का अनुभव बहुत ही संतोषजनक रहा। हमने ${service} के संदर्भ में परामर्श लिया था। टीम ने हमारी प्राथमिकताओं को ध्यानपूर्वक समझा और कॉलेज चयन के लिए सही मार्गदर्शन प्रदान किया। इनकी संचार व्यवस्था बहुत ही उत्तरदायी और पारदर्शी रही।${additional ? ` ${additional}` : ''} सही करियर दिशा के लिए इनकी सलाह काफी मूल्यवान है।`,
      `करियर और कॉलेज चयन को लेकर हमारे मन में कई दुविधाएं थीं, जिसे Career Dhara की टीम ने बहुत स्पष्टता से सुलझाया। ${service} के दौरान उनका व्यक्तिगत दृष्टिकोण और धैर्यपूर्वक मार्गदर्शन बेहद उपयोगी साबित हुआ।${additional ? ` ${additional}` : ''} सभी विद्यार्थियों एवं अभिभावकों के लिए एक विश्वसनीय परामर्श केंद्र।`
    ];
    return variations[seed % variations.length];
  }

  if (language === 'hinglish') {
    const variations = [
      `Career Dhara se humne ${service} ke liye counselling session liya tha. Counsellors ne hamari requirements aur preferences ko acche se samjha aur colleges ke realistic options suggest kiye. Unka guidance bohot helpful raha aur communication bhi clear aur responsive tha.${additional ? ` ${additional}` : ''} Genuine career guidance platform!`,
      `Had a very positive experience with Career Dhara regarding ${service}. College selection aur admission process ko inhone kaafi simple aur stress-free bana diya. Unka honest feedback aur proper guidance deserves appreciation.${additional ? ` ${additional}` : ''}`
    ];
    return variations[seed % variations.length];
  }

  // English
  const variations = [
    `Had a very positive and reassuring experience with Career Dhara. We consulted them regarding ${service} ${recipientText}. The counselling team ${requirementUnderstanding.toLowerCase()} and provided realistic, unbiased options for college selection. Their communication was ${communication.toLowerCase()} throughout the process.${additional ? ` ${additional}` : ''} Highly recommended for students navigating higher education choices.`,
    `Career Dhara provided structured and transparent guidance for ${service}. Navigating through multiple universities and cutoffs seemed daunting, but their personalized session made the decision pathway straightforward and clear. Their support team was courteous and attentive to every query.${additional ? ` ${additional}` : ''}`
  ];

  return variations[seed % variations.length];
}

// ==========================================
// 3. TECHOGIES REVIEW GENERATOR
// ==========================================
function generateTechogiesReview(
  answers: Record<string, any>,
  rating: number,
  language: ReviewLanguage,
  seed: number
): string {
  const course = answers.course || 'Full Stack Development';
  const mode = answers.learningMode || 'Classroom Training';
  const trainerKnowledge = answers.trainerTechnicalKnowledge || 'Excellent';
  const practicalClasses = answers.practicalClasses || 'Hands-on practical sessions';
  const likedList = Array.isArray(answers.likedMost) ? answers.likedMost : [answers.likedMost || 'Teaching methodology'];
  const likedStr = likedList.slice(0, 2).join(' and ');
  const courseMaterial = answers.courseMaterial || 'Well structured';
  const additional = (answers.additionalFeedback || '').trim();

  if (language === 'hi') {
    const variations = [
      `Techogies में ${course} की ट्रेनिंग का अनुभव बहुत ही प्रभावी रहा। ${mode} के दौरान थ्योरी के साथ-साथ प्रैक्टिकल कोडिंग और प्रोजेक्ट्स पर विशेष ध्यान दिया गया। ट्रेनर्स का तकनीकी ज्ञान उत्कृष्ट है और वे डाउट्स को तुरंत हल करते हैं।${additional ? ` ${additional}` : ''} आईटी करियर के लिए यह एक बेहतरीन प्रशिक्षण केंद्र है।`,
      `Techogies का पाठ्यक्रम उद्योग की आवश्यकताओं के अनुरूप तैयार किया गया है। मैंने यहाँ ${course} की कक्षाएं लीं, जहाँ ${likedStr} ने सीखने की प्रक्रिया को सरल बना दिया। हैंड्स-ऑन असाइनमेंट्स और मेंटर्स का सहयोग सराहनीय है।${additional ? ` ${additional}` : ''}`
    ];
    return variations[seed % variations.length];
  }

  if (language === 'hinglish') {
    const variations = [
      `Techogies me ${course} join karne ka decision kaafi accha raha. Classes bohot hands-on thi aur trainers concepts ko real-world examples ke saath explain karte hain. ${practicalClasses} aur live project building se practical confidence mila. Course structure aur doubt-clearing support dono top-notch hain.${additional ? ` ${additional}` : ''}`,
      `Completed my training in ${course} at Techogies (${mode}). Inka teaching curriculum industry-aligned hai aur trainers technical guidance me kaafi dedicated hain. Specially ${likedStr} ne mere technical skills ko upgrade karne me kaafi help kiya.${additional ? ` ${additional}` : ''}`
    ];
    return variations[seed % variations.length];
  }

  // English
  const variations = [
    `My experience at Techogies has been very enriching. Enrolling in the ${course} program via ${mode} helped me gain practical, industry-relevant skills. The trainers possess deep technical knowledge and emphasize ${practicalClasses.toLowerCase()}. What I appreciated most was their ${likedStr.toLowerCase()} and structured course material.${additional ? ` ${additional}` : ''} Great tech academy for aspiring developers and IT professionals.`,
    `Techogies offers a rigorous and practical approach to tech education. The ${course} classes balanced core architecture with live coding assignments. Mentors were patient with debugging and conceptual queries, ensuring no student lagged behind.${additional ? ` ${additional}` : ''} Highly recommend Techogies for hands-on skill building.`
  ];

  return variations[seed % variations.length];
}

// ==========================================
// 4. SHORAI REVIEW GENERATOR (ROLE-BASED)
// ==========================================
function generateShoraiReview(
  answers: Record<string, any>,
  rating: number,
  language: ReviewLanguage,
  seed: number
): string {
  const service = answers.service || 'Robotics Education';
  const role = answers.userRole || 'Student';
  const practicalLearning = answers.practicalLearning || 'Excellent hands-on learning';
  const trainerQuality = answers.trainerQuality || 'Excellent';
  const infrastructure = answers.infrastructure || 'Very Good';
  const impressedList = Array.isArray(answers.impressedMost) ? answers.impressedMost : [answers.impressedMost || 'Practical experiments'];
  const impressedStr = impressedList.slice(0, 2).join(' and ');
  const additional = (answers.additionalFeedback || '').trim();

  // Role-specific nuances
  const isInstitutional = ['School Principal', 'Teacher', 'School Administrator', 'Institutional Representative'].includes(role);
  const isParent = role === 'Parent';

  if (language === 'hi') {
    if (isInstitutional) {
      return `विद्यालय प्रबंधन के रूप में SHORAI के साथ हमारा अनुभव अत्यंत सराहनीय रहा है। ${service} और लैब इंफ्रास्ट्रक्चर के लिए उनका दृष्टिकोण पूरी तरह से भविष्योन्मुखी और व्यावहारिक है। प्रशिक्षकों की गुणवत्ता और STEM उपकरण विद्यार्थियों में वैज्ञानिक जिज्ञासा जगाने में पूरी तरह सक्षम हैं।${additional ? ` ${additional}` : ''} स्कूलों में आधुनिक नवाचार लैब स्थापित करने के लिए SHORAI एक आदर्श साझेदार है।`;
    }
    return `SHORAI के साथ ${service} का अनुभव अत्यंत प्रेरणादायक रहा। हैंड्स-ऑन एक्टिविटीज, रोबोटिक्स किट्स और ड्रोन तकनीकों को समझने का यह एक अनोखा अवसर था। ट्रेनर्स का सपोर्ट और समझाने का तरीका बहुत ही सरल और रोचक था।${additional ? ` ${additional}` : ''} भविष्य के नवाचारों को सीखने के लिए यह बेहतरीन मंच है।`;
  }

  if (language === 'hinglish') {
    if (isInstitutional) {
      return `SHORAI ke saath hamara institutional collaboration bohot successful raha. Unka ${service} module aur innovation lab setup hamare school students ke liye kaafi impactful hai. Trainers highly skilled hain aur STEM curriculum ko engaging banate hain.${additional ? ` ${additional}` : ''} Recommended for any institution looking to modernize their technical lab curriculum.`;
    }
    return `SHORAI ke robotics aur AI session me attend karna ek exciting experience tha. Hands-on learning kits aur live demonstrations se concepts seekhna bohot fun aur practical laga. Instructors har ek experiment me support karte hain.${additional ? ` ${additional}` : ''}`;
  }

  // English
  if (isInstitutional) {
    const variations = [
      `As a ${role.toLowerCase()}, our institutional collaboration with SHORAI for ${service} has been exceptional. Their team demonstrated a structured methodology for STEM lab integration, curriculum delivery, and student engagement. The trainers maintain high technical proficiency and safety standards.${additional ? ` ${additional}` : ''} A dependable innovation partner for progressive educational institutions.`,
      `Partnering with SHORAI has greatly enhanced our STEM and robotics capabilities. Their team provided robust infrastructure and curriculum support for ${service}. What stood out was their ${impressedStr.toLowerCase()} and proactive coordination.${additional ? ` ${additional}` : ''} Commendable work in school innovation.`
    ];
    return variations[seed % variations.length];
  }

  if (isParent) {
    return `As a parent, I am genuinely impressed by SHORAI's hands-on approach to ${service}. The program sparked genuine curiosity in robotics and electronics for my child, moving beyond dry theoretical concepts to real prototyping.${additional ? ` ${additional}` : ''} The trainers were encouraging and patient throughout.`;
  }

  // Student / General
  const variations = [
    `Participating in SHORAI's ${service} program was an incredible hands-on learning experience. Working with robotics kits and seeing live drone technology up close made STEM concepts thrilling to explore. The instructors were supportive and guided us through practical experiments step-by-step.${additional ? ` ${additional}` : ''} Inspiring platform for future innovators!`,
    `SHORAI makes learning robotics and AI genuinely interactive and accessible. The practical demonstrations and hands-on lab environment kept us thoroughly engaged. Special credit to the trainers for their clear explanations and encouragement.${additional ? ` ${additional}` : ''}`
  ];

  return variations[seed % variations.length];
}

// ==========================================
// 5. I2S – IMAGINATION TO SOFTWARE REVIEW
// ==========================================
function generateI2SReview(
  answers: Record<string, any>,
  rating: number,
  language: ReviewLanguage,
  seed: number
): string {
  const customerType = answers.customerType || 'Business Owner';
  const selectedServices: string[] = Array.isArray(answers.servicesUsed)
    ? answers.servicesUsed
    : answers.servicesUsed ? [answers.servicesUsed] : ['Website Development'];

  // Construct specific service mentions
  const primaryServicesStr = selectedServices.slice(0, 3).join(' and ');
  const communication = answers.teamCommunication || 'Professional approach';
  const understanding = answers.requirementsUnderstanding || 'Understood everything clearly';
  const additional = (answers.additionalFeedback || '').trim();

  // Dynamic details based on answers
  const serviceDetails: string[] = [];

  if (selectedServices.includes('Website Development')) {
    const webDesign = answers.web_design || 'Excellent';
    const webSpeed = answers.web_speed || 'Fast';
    serviceDetails.push(`the website UI design and mobile responsiveness met our high expectations`);
  }

  if (selectedServices.includes('Software / SaaS Development')) {
    serviceDetails.push(`the custom software architecture was cleanly engineered to fit our operational workflow`);
  }

  if (selectedServices.includes('AI Chatbot') || selectedServices.includes('WhatsApp Automation')) {
    serviceDetails.push(`the automated conversation flows streamlined our customer response process`);
  }

  if (selectedServices.includes('SEO / AI SEO')) {
    serviceDetails.push(`the technical SEO strategy and transparency in reporting were thoroughly organized`);
  }

  if (selectedServices.includes('Social Media Management')) {
    serviceDetails.push(`the creative branding and consistent posting schedule gave our brand a polished identity`);
  }

  if (selectedServices.includes('AI Calling Agent')) {
    serviceDetails.push(`the AI voice interaction workflow was natural and well integrated into our operations`);
  }

  if (selectedServices.includes('Mobile App Development')) {
    serviceDetails.push(`the mobile application interface was smooth and intuitive for our users`);
  }

  if (selectedServices.includes('AI Personal Branding')) {
    serviceDetails.push(`the personal brand positioning strategy gave our digital presence distinct authority`);
  }

  const detailSentence = serviceDetails.length > 0
    ? `Specifically, ${serviceDetails.slice(0, 2).join(', and ')}.`
    : '';

  if (language === 'hi') {
    const variations = [
      `I2S के साथ कार्य करने का अनुभव अत्यंत संतोषप्रद रहा। एक ${customerType} के रूप में, हमने उनके साथ ${primaryServicesStr} प्रोजेक्ट पर काम किया। टीम ने हमारी आवश्यकताओं को गहनता से समझा और समय पर गुणवत्तापूर्ण समाधान प्रस्तुत किया। इनकी व्यावसायिक बातचीत और तकनीकी विशेषज्ञता सराहनीय है।${additional ? ` ${additional}` : ''} डिजिटल समाधान और सॉफ्टवेयर विकास के लिए I2S एक भरोसेमंद एजेंसी है।`,
      `हमारी डिजिटल आवश्यकताओं के लिए I2S की टीम ने बेहतरीन सहयोग दिया। ${primaryServicesStr} में उनका तकनीकी दृष्टिकोण स्पष्ट और व्यवस्थित था। समय पर डिलीवरी और त्वरित सहायता के लिए पूरी टीम को धन्यवाद।${additional ? ` ${additional}` : ''}`
    ];
    return variations[seed % variations.length];
  }

  if (language === 'hinglish') {
    const variations = [
      `Worked with I2S for our ${primaryServicesStr} requirements as a ${customerType}. The entire team was professional, responsive, and clearly understood our project scope from day one. Unka technical execution aur support bohot solid raha. Delivery on-time thi aur koi unnecessary delay nahi hua.${additional ? ` ${additional}` : ''} Definitely recommend them for modern software and digital solutions!`,
      `I2S delivered our ${primaryServicesStr} project with great attention to detail. Unka communication clear tha aur requirements me jo bhi refinements chahiye the, team ne promptness ke saath incorporate kiye. Genuine and reliable tech partner.${additional ? ` ${additional}` : ''}`
    ];
    return variations[seed % variations.length];
  }

  // English
  const variations = [
    `Working with I2S for our ${primaryServicesStr} has been a seamless and professional experience. As a ${customerType.toLowerCase()}, finding a development partner that truly grasps technical complexity while keeping communication agile is rare. Their team ${understanding.toLowerCase()} and ensured timely delivery with high standards of execution. ${detailSentence}${additional ? ` ${additional}` : ''} Highly recommended for businesses seeking scalable digital solutions.`,
    `We engaged I2S for ${primaryServicesStr}, and they delivered exactly to our project specifications. Their team demonstrated strong problem-solving acumen, maintained prompt communication, and provided reliable post-launch support. ${detailSentence}${additional ? ` ${additional}` : ''} A reliable, forward-thinking tech and automation agency.`
  ];

  return variations[seed % variations.length];
}
