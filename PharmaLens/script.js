document.addEventListener('DOMContentLoaded', () => {
    // Mock database of medicines. This now mirrors the structure you'd get from OpenFDA.
    const medicineDatabase = {
        'paracetamol': {
            name: 'Paracetamol (Acetaminophen, Dolo, Crocin)',
            usage: 'Used to treat many conditions such as headache, muscle aches, arthritis, backache, toothaches, colds, and fevers. It relieves pain in mild arthritis but has no effect on the underlying inflammation and swelling of the joint.',
            side_effects: 'Generally well-tolerated when used as directed. Rare side effects include nausea, stomach pain, and allergic reactions like rash or itching.',
            dosage: 'Adults and children over 12 years: 500mg to 1000mg every 4-6 hours (max 4000mg/24h). Children (2-11 years): Dosage is based on weight, typically 10-15mg/kg per dose. Always check product label for children\'s dosage.',
            warnings: 'Do not exceed the recommended dose. Severe liver damage may occur if you take more than 4000mg in 24 hours, take it with other drugs containing acetaminophen, or consume 3 or more alcoholic drinks every day while using this product.',
            imageUrl: 'https://i.imgur.com/J5tWr3k.jpg' // Placeholder image
        },
        ibuprofen: {
            name: 'Ibuprofen',
            usage: 'Used to relieve pain from various conditions such as headache, dental pain, menstrual cramps, muscle aches, or arthritis. It is also used to reduce fever and to relieve minor aches and pain due to the common cold or flu.',
            side_effects: 'Upset stomach, nausea, vomiting, headache, diarrhea, constipation, dizziness, or drowsiness may occur.',
            dosage: 'Adults: 200mg to 400mg every 4-6 hours (max 1200mg/24h unless prescribed). Children over 6 months: Dosage is weight-based, typically 5-10mg/kg per dose every 6-8 hours. Not recommended for infants under 6 months.',
            warnings: 'May increase your risk of fatal heart attack or stroke. Do not use right before or after heart bypass surgery. Ibuprofen may also cause stomach or intestinal bleeding, which can be fatal.',
            imageUrl: 'https://i.imgur.com/f22b5sD.jpg' // Placeholder image
        },
        aspirin: {
            name: 'Aspirin',
            usage: 'Used to reduce fever and relieve mild to moderate pain from conditions such as muscle aches, toothaches, common cold, and headaches. It may also be used to prevent blood clots, thereby reducing the risk of a heart attack or stroke.',
            side_effects: 'Upset stomach and heartburn are common side effects. Easy bruising/bleeding may also occur.',
            dosage: 'For pain relief, 325mg to 650mg every 4-6 hours. For cardiovascular protection, typically 81mg daily. Consult a physician.',
            warnings: 'Do not give to children or teenagers with fever, flu symptoms, or chickenpox, as this can cause Reye\'s syndrome, a rare but serious condition. Can cause stomach bleeding.',
            imageUrl: 'https://i.imgur.com/o2Yd2c2.jpg' // Placeholder image
        },
        lisinopril: {
            name: 'Lisinopril',
            usage: 'Used to treat high blood pressure (hypertension). Lowering high blood pressure helps prevent strokes, heart attacks, and kidney problems. It is also used to treat heart failure and to improve survival after a heart attack.',
            side_effects: 'Dizziness, lightheadedness, tiredness, or headache may occur as your body adjusts to the medication. A dry cough is also common.',
            dosage: 'Typically started at 10mg once daily for hypertension. Dosage may be adjusted by a doctor based on response.',
            warnings: 'Do not use if you are pregnant. If you become pregnant, stop taking this medicine and tell your doctor right away. It may harm or cause the death of the unborn baby.',
            imageUrl: 'https://i.imgur.com/eP5sH0g.jpg' // Placeholder image
        },
        metformin: {
            name: 'Metformin',
            usage: 'Used with a proper diet and exercise program and possibly with other medications to control high blood sugar. It is used in patients with type 2 diabetes.',
            side_effects: 'Nausea, vomiting, stomach upset, diarrhea, and a metallic taste in the mouth may occur. These effects usually go away over time.',
            dosage: 'Initial dose is often 500mg twice a  day or 850mg once a day with meals. Dosage is adjusted by a healthcare provider.',
            warnings: 'In rare cases, metformin can cause a serious condition called lactic acidosis. Get emergency medical help if you have even mild symptoms such as muscle pain or weakness, numb or cold feeling in your arms and legs, or trouble breathing.',
            imageUrl: 'https://i.imgur.com/hY8o2gA.jpg' // Placeholder image
        },
        // Added a common antibiotic
        amoxicillin: {
            name: 'Amoxicillin',
            usage: 'A penicillin antibiotic that fights bacteria. Amoxicillin is used to treat many different types of infection caused by bacteria, such as tonsillitis, bronchitis, pneumonia, and infections of the ear, nose, throat, skin, or urinary tract.',
            side_effects: 'Nausea, vomiting, and diarrhea are common. A mild rash may also occur. Seek medical attention for severe reactions.',
            dosage: 'Dosage varies widely based on the infection being treated. A common dose is 250mg to 500mg every 8 hours, or 500mg to 875mg every 12 hours.',
            warnings: 'Do not use if you are allergic to penicillin or any other similar antibiotic. Complete the full course of treatment even if symptoms improve to prevent the return of the infection.',
            imageUrl: 'https://i.imgur.com/O1zWp2o.jpg' // Placeholder image
        },
        atorvastatin: {
            name: 'Atorvastatin (Lipitor)',
            usage: 'Used along with a proper diet to help lower "bad" cholesterol and fats (such as LDL, triglycerides) and raise "good" cholesterol (HDL) in the blood. It belongs to a group of drugs known as "statins."',
            side_effects: 'Mild muscle pain, diarrhea, and nausea. Contact a doctor if you experience unexplained muscle pain, tenderness, or weakness, especially if you also have a fever.',
            dosage: 'Dosage is based on your medical condition and response to treatment. The usual starting dose is 10-20 mg once a day. The maximum dose is 80 mg once a day.',
            warnings: 'Can cause liver problems. Your doctor should do blood tests to check your liver before you start taking it and during your treatment. Avoid drinking large quantities of alcohol.',
            imageUrl: 'https://i.imgur.com/sK3b3eF.jpg'
        },
        loratadine: {
            name: 'Loratadine (Claritin)',
            usage: 'An antihistamine that treats symptoms such as itching, runny nose, watery eyes, and sneezing from "hay fever" and other allergies. It is also used to relieve itching from hives.',
            side_effects: 'Generally well-tolerated. Headache, drowsiness, or fatigue may occur in some individuals.',
            dosage: 'For adults and children 6 years and older, the usual dose is 10mg once daily. Do not take more than directed.',
            warnings: 'Consult a doctor before use if you have liver or kidney disease. Do not use to treat hives that are an unusual color, look bruised or blistered, or do not itch.',
            imageUrl: 'https://i.imgur.com/9xQ8c7g.jpg'
        },
        sertraline: {
            name: 'Sertraline (Zoloft)',
            usage: 'An antidepressant in a group of drugs called selective serotonin reuptake inhibitors (SSRIs). It is used to treat depression, obsessive-compulsive disorder (OCD), panic disorder, anxiety disorders, and post-traumatic stress disorder (PTSD).',
            side_effects: 'Nausea, dizziness, drowsiness, dry mouth, loss of appetite, and trouble sleeping. These often lessen over time.',
            dosage: 'Typically started at 25mg or 50mg per day for depression or anxiety. The dose may be gradually increased by a doctor.',
            warnings: 'May increase suicidal thoughts or actions in some children, teenagers, or young adults. Do not stop taking sertraline without talking to your doctor first.',
            imageUrl: 'https://i.imgur.com/UaP8tLh.jpg'
        },
        amlodipine: {
            name: 'Amlodipine (Norvasc)',
            usage: 'Used to treat high blood pressure (hypertension) and chest pain (angina). It belongs to a class of drugs known as calcium channel blockers.',
            side_effects: 'Headache, swelling of the ankles or feet (edema), tiredness, and dizziness are common side effects.',
            dosage: 'For hypertension, the usual starting dose is 5mg once daily, with a maximum dose of 10mg once daily.',
            warnings: 'Your chest pain may become worse when you first start taking amlodipine or when your dose is increased. Tell your doctor if your condition does not improve or if it worsens.',
            imageUrl: 'https://i.imgur.com/R3b0aJj.jpg'
        },
        omeprazole: {
            name: 'Omeprazole (Prilosec)',
            usage: 'Used to treat certain stomach and esophagus problems (such as acid reflux, ulcers). It works by decreasing the amount of acid your stomach makes.',
            side_effects: 'Headache or abdominal pain may occur. Long-term use may increase the risk of bone fractures.',
            dosage: 'A typical dose is 20mg taken once daily before a meal. Treatment duration is usually 4 to 8 weeks.',
            warnings: 'May increase the risk of getting a severe type of diarrhea (Clostridium difficile-associated diarrhea). Taking it for more than a year may increase the risk for bone fractures, low magnesium levels, and vitamin B-12 deficiency.',
            imageUrl: 'https://i.imgur.com/example.jpg'
        },
        gabapentin: {
            name: 'Gabapentin (Neurontin)',
            usage: 'Used to treat epilepsy and is also used to relieve nerve pain (postherpetic neuralgia).',
            side_effects: 'Dizziness, drowsiness, loss of coordination, and fatigue are very common.',
            dosage: 'Dosage is highly variable and must be individualized. It is often started at 300mg on the first day and increased gradually.',
            warnings: 'Can cause serious, life-threatening breathing problems, especially if you already have a breathing disorder or are using other medications that can cause drowsiness or slow your breathing. Do not stop taking suddenly.',
            imageUrl: 'https://i.imgur.com/example.jpg'
        },
        hydrochlorothiazide: {
            name: 'Hydrochlorothiazide (HCTZ)',
            usage: 'A "water pill" (diuretic) used to treat high blood pressure and fluid retention (edema).',
            side_effects: 'Upset stomach, dizziness, or headache may occur as your body adjusts. May affect blood sugar levels.',
            dosage: 'For hypertension, the usual dose is 12.5mg to 25mg once daily.',
            warnings: 'May cause a decrease in your body\'s potassium levels. Your doctor may recommend you eat potassium-rich foods (like bananas or orange juice) or take a potassium supplement. Avoid excessive sun exposure and use sunscreen.',
            imageUrl: 'https://i.imgur.com/example.jpg'
        },
        cetirizine: {
            name: 'Cetirizine (Zyrtec)',
            usage: 'An antihistamine used to relieve allergy symptoms such as watery eyes, runny nose, itching eyes/nose, sneezing, hives, and itching.',
            side_effects: 'Drowsiness, tiredness, and dry mouth may occur. It is generally considered less sedating than older antihistamines.',
            dosage: 'Adults and children 6 years and older: 5mg or 10mg once daily. Children 2-5 years: 2.5mg once daily, may be increased to 5mg.',
            warnings: 'Alcohol, sedatives, and tranquilizers may increase drowsiness. Be careful when driving a motor vehicle or operating machinery.',
            imageUrl: 'https://i.imgur.com/example.jpg'
        },
        diphenhydramine: {
            name: 'Diphenhydramine (Benadryl)',
            usage: 'An antihistamine used to relieve symptoms of allergy, hay fever, and the common cold. These symptoms include rash, itching, watery eyes, runny nose, and sneezing. It is also used to treat motion sickness and to induce sleep.',
            side_effects: 'Marked drowsiness, dizziness, dry mouth/nose/throat, and constipation are common side effects.',
            dosage: 'Adults and children over 12 years: 25mg to 50mg every 4-6 hours. Children 6-11 years: 12.5mg to 25mg every 4-6 hours. Not for use in children under 6 for sleep.',
            warnings: 'Avoid alcoholic drinks. This drug can significantly impair your thinking and reactions. Be careful if you drive or do anything that requires you to be alert.',
            imageUrl: 'https://i.imgur.com/example.jpg'
        },
        famotidine: {
            name: 'Famotidine (Pepcid)',
            usage: 'Used to treat and prevent ulcers in the stomach and intestines. It also treats conditions in which the stomach produces too much acid, such as Zollinger-Ellison syndrome. It also treats gastroesophageal reflux disease (GERD).',
            side_effects: 'Headache, dizziness, constipation, or diarrhea may occur.',
            dosage: 'For GERD/heartburn: 10mg to 20mg twice daily. For ulcer treatment, dosage is higher and prescribed by a doctor.',
            warnings: 'May mask symptoms of a more serious condition. If your heartburn continues or worsens, or if you have trouble swallowing, consult a doctor.',
            imageUrl: 'https://i.imgur.com/example.jpg'
        },
        simvastatin: {
            name: 'Simvastatin (Zocor)',
            usage: 'A statin medication used to lower cholesterol and triglycerides (types of fat) in the blood and to slow the progression of heart disease.',
            side_effects: 'Stomach pain, constipation, headache, and nausea. Report any unexplained muscle pain or weakness.',
            dosage: 'Usually taken once a day in the evening. Doses range from 5mg to 40mg daily.',
            warnings: 'Can cause liver and muscle problems. Avoid grapefruit and grapefruit juice as it can lead to dangerous interactions. Not for use during pregnancy.',
            imageUrl: 'https://i.imgur.com/example.jpg'
        },
        levothyroxine: {
            name: 'Levothyroxine (Synthroid)',
            usage: 'A thyroid hormone used to treat hypothyroidism, a condition where the thyroid gland does not produce enough thyroid hormone.',
            side_effects: 'Usually no side effects when taken at the correct dose. Overdose can cause symptoms of hyperthyroidism like weight loss, tremors, and rapid heart rate.',
            dosage: 'Dosage is highly individualized and based on blood tests. Taken once a day, usually in the morning on an empty stomach.',
            warnings: 'Take at least 4 hours apart from calcium, iron supplements, and antacids. Inform your doctor of any heart conditions.',
            imageUrl: 'https://i.imgur.com/example.jpg'
        },
        metoprolol: {
            name: 'Metoprolol (Lopressor, Toprol-XL)',
            usage: 'A beta-blocker used to treat high blood pressure, chest pain (angina), and to improve survival after a heart attack.',
            side_effects: 'Dizziness, tiredness, depression, and slow heart rate are common.',
            dosage: 'Varies by condition. For hypertension, often started at 25mg to 100mg daily.',
            warnings: 'Do not stop taking suddenly as this can worsen your condition. May mask signs of low blood sugar in diabetics.',
            imageUrl: 'https://i.imgur.com/example.jpg'
        },
        azithromycin: {
            name: 'Azithromycin (Zithromax)',
            usage: 'An antibiotic used to treat a wide variety of bacterial infections, including respiratory, skin, and ear infections.',
            side_effects: 'Diarrhea, nausea, vomiting, and abdominal pain.',
            dosage: 'Often prescribed as a 5-day course, with a higher dose on the first day (e.g., 500mg) followed by lower doses (250mg).',
            warnings: 'Can cause an irregular heart rhythm. Take with or without food, but taking with food may decrease stomach upset.',
            imageUrl: 'https://i.imgur.com/example.jpg'
        },
        albuterol: {
            name: 'Albuterol (ProAir, Ventolin)',
            usage: 'A bronchodilator used to treat or prevent bronchospasm in people with reversible obstructive airway disease. Also used to prevent exercise-induced asthma.',
            side_effects: 'Nervousness, shakiness (tremor), headache, and fast or pounding heartbeat.',
            dosage: 'For rescue inhalers, 2 puffs every 4-6 hours as needed for symptoms.',
            warnings: 'This is a rescue medication. If you need to use it more often than prescribed, your asthma may be worsening and you should see a doctor.',
            imageUrl: 'https://i.imgur.com/example.jpg'
        },
        furosemide: {
            name: 'Furosemide (Lasix)',
            usage: 'A loop diuretic ("water pill") used to treat fluid retention (edema) in people with congestive heart failure, liver disease, or a kidney disorder. Also used to treat high blood pressure.',
            side_effects: 'Dizziness, lightheadedness, headache, and blurred vision may occur as your body adjusts. Can cause dehydration and electrolyte imbalance.',
            dosage: '20mg to 80mg per day, depending on the condition and response.',
            warnings: 'Can cause a loss of potassium. Your doctor may recommend a potassium supplement or a diet rich in potassium. Can increase sensitivity to the sun.',
            imageUrl: 'https://i.imgur.com/example.jpg'
        },
        prednisone: {
            name: 'Prednisone (Deltasone)',
            usage: 'A corticosteroid used to treat inflammatory conditions such as allergies, skin conditions, ulcerative colitis, arthritis, and breathing disorders.',
            side_effects: 'Short-term: increased appetite, weight gain, mood changes, trouble sleeping. Long-term: many serious effects including osteoporosis and high blood sugar.',
            dosage: 'Dosage is highly variable depending on the condition being treated. Must be tapered off slowly if used for more than a few weeks.',
            warnings: 'Can lower your body\'s ability to fight infection. Avoid being near people who are sick. Take with food to reduce stomach upset.',
            imageUrl: 'https://i.imgur.com/example.jpg'
        },
        tramadol: {
            name: 'Tramadol (Ultram)',
            usage: 'A narcotic-like pain reliever used to treat moderate to severe pain.',
            side_effects: 'Nausea, constipation, lightheadedness, dizziness, drowsiness, and headache.',
            dosage: 'For immediate-release, 50mg to 100mg every 4-6 hours as needed for pain. Max 400mg/day.',
            warnings: 'Has a risk of addiction, abuse, and misuse. Can cause severe, life-threatening respiratory depression. Do not drink alcohol while taking tramadol.',
            imageUrl: 'https://i.imgur.com/example.jpg'
        },
        montelukast: {
            name: 'Montelukast (Singulair)',
            usage: 'Used to prevent wheezing, difficulty breathing, chest tightness, and coughing caused by asthma. Also used to prevent bronchospasm during exercise and to treat symptoms of seasonal and year-round allergies.',
            side_effects: 'Headache, stomach pain, and cold-like symptoms.',
            dosage: 'Typically 10mg taken once daily in the evening.',
            warnings: 'Can cause serious mental health side effects, including suicidal thoughts or actions. Be alert for mood changes.',
            imageUrl: 'https://i.imgur.com/example.jpg'
        },
        escitalopram: {
            name: 'Escitalopram (Lexapro)',
            usage: 'An SSRI antidepressant used to treat major depressive disorder and generalized anxiety disorder.',
            side_effects: 'Nausea, dry mouth, trouble sleeping, constipation, tiredness, or dizziness.',
            dosage: 'Usually started at 10mg once daily, can be increased to 20mg once daily.',
            warnings: 'May increase risk of suicidal thinking and behavior in children, adolescents, and young adults. Do not stop taking abruptly.',
            imageUrl: 'https://i.imgur.com/example.jpg'
        },
        fluoxetine: {
            name: 'Fluoxetine (Prozac)',
            usage: 'An SSRI antidepressant used to treat major depressive disorder, bulimia nervosa, obsessive-compulsive disorder (OCD), and panic disorder.',
            side_effects: 'Nausea, drowsiness, dizziness, anxiety, trouble sleeping, loss of appetite.',
            dosage: '20mg once daily in the morning is a common starting dose.',
            warnings: 'Increased risk of suicidal thoughts in young adults. Can take 4-5 weeks to feel the full benefit. Do not stop abruptly.',
            imageUrl: 'https://i.imgur.com/example.jpg'
        },
        duloxetine: {
            name: 'Duloxetine (Cymbalta)',
            usage: 'An SNRI antidepressant used to treat major depressive disorder, generalized anxiety disorder, and to manage certain types of chronic pain (like fibromyalgia and diabetic neuropathy).',
            side_effects: 'Nausea, dry mouth, constipation, loss of appetite, tiredness, drowsiness.',
            dosage: 'Typically started at 30mg or 60mg once daily.',
            warnings: 'Increased risk of suicidal thoughts. Do not drink alcohol, as it can increase the risk of liver damage. Do not stop taking suddenly.',
            imageUrl: 'https://i.imgur.com/example.jpg'
        },
        alprazolam: {
            name: 'Alprazolam (Xanax)',
            usage: 'A benzodiazepine used to treat anxiety disorders and panic disorder.',
            side_effects: 'Drowsiness, dizziness, increased saliva production, or change in sex drive/ability may occur.',
            dosage: '0.25mg to 0.5mg taken 3 times daily is a common starting range for anxiety.',
            warnings: 'High potential for addiction, abuse, and misuse. Combining with alcohol or other CNS depressants can be fatal. Use for the shortest possible duration.',
            imageUrl: 'https://i.imgur.com/example.jpg'
        },
        clonazepam: {
            name: 'Clonazepam (Klonopin)',
            usage: 'A benzodiazepine used to treat seizure disorders and panic disorder.',
            side_effects: 'Drowsiness, dizziness, problems with coordination, and fatigue.',
            dosage: 'Highly variable. For panic disorder, often started at 0.25mg twice daily.',
            warnings: 'High potential for addiction and dependence. Do not stop taking suddenly as it can cause withdrawal seizures. Avoid alcohol.',
            imageUrl: 'https://i.imgur.com/example.jpg'
        },
        lorazepam: {
            name: 'Lorazepam (Ativan)',
            usage: 'A benzodiazepine used to treat anxiety disorders.',
            side_effects: 'Drowsiness, dizziness, weakness, and unsteadiness.',
            dosage: 'For anxiety, a total daily dose of 2mg to 6mg is common, given in divided doses.',
            warnings: 'Risk of severe sedation, respiratory depression, coma, and death when combined with opioids. High potential for addiction.',
            imageUrl: 'https://i.imgur.com/example.jpg'
        },
        zolpidem: {
            name: 'Zolpidem (Ambien)',
            usage: 'A sedative-hypnotic used for the short-term treatment of insomnia.',
            side_effects: 'Daytime drowsiness, dizziness, weakness, lightheadedness.',
            dosage: '5mg for women and 5mg or 10mg for men, taken once per night right before bed.',
            warnings: 'Can cause complex sleep behaviors like "sleep-driving". Do not take with alcohol. Only take when you can get a full night\'s sleep (7-8 hours).',
            imageUrl: 'https://i.imgur.com/example.jpg'
        },
        trazodone: {
            name: 'Trazodone (Desyrel)',
            usage: 'An antidepressant that is also commonly used off-label to treat insomnia due to its sedating effects.',
            side_effects: 'Drowsiness, dizziness, dry mouth, and blurred vision.',
            dosage: 'For sleep, typically 25mg to 100mg at bedtime. For depression, doses are much higher.',
            warnings: 'Can cause a rare, painful, prolonged erection (priapism). May increase suicidal thoughts in young adults.',
            imageUrl: 'https://i.imgur.com/example.jpg'
        },
        warfarin: {
            name: 'Warfarin (Coumadin)',
            usage: 'An anticoagulant ("blood thinner") used to treat and prevent blood clots.',
            side_effects: 'Bleeding is the most common side effect. Nausea and stomach pain can occur.',
            dosage: 'Dosage is highly individualized based on regular blood tests (INR).',
            warnings: 'Many drugs and foods (especially those high in Vitamin K, like leafy greens) can affect warfarin. Maintain a consistent diet. Seek immediate help for signs of bleeding.',
            imageUrl: 'https://i.imgur.com/example.jpg'
        },
        clopidogrel: {
            name: 'Clopidogrel (Plavix)',
            usage: 'An antiplatelet medicine used to prevent blood clots after a recent heart attack or stroke, and in people with certain heart or blood vessel disorders.',
            side_effects: 'Increased risk of bleeding and bruising.',
            dosage: 'Typically 75mg once daily.',
            warnings: 'Do not stop taking without talking to your doctor, as this can increase your risk of heart attack or stroke. Some people do not respond well to this drug due to genetic factors.',
            imageUrl: 'https://i.imgur.com/example.jpg'
        },
        apixaban: {
            name: 'Apixaban (Eliquis)',
            usage: 'An anticoagulant ("blood thinner") used to reduce the risk of stroke and blood clots in people with atrial fibrillation, and to treat/prevent DVT and PE.',
            side_effects: 'Bleeding is the main side effect.',
            dosage: 'For atrial fibrillation, 5mg twice daily. For DVT/PE treatment, dosage varies.',
            warnings: 'Stopping suddenly can increase the risk of a stroke. There is an antidote available for major bleeding events.',
            imageUrl: 'https://i.imgur.com/example.jpg'
        },
        rivaroxaban: {
            name: 'Rivaroxaban (Xarelto)',
            usage: 'An anticoagulant ("blood thinner") used to treat and prevent blood clots, and to reduce the risk of stroke in people with atrial fibrillation.',
            side_effects: 'Increased risk of bleeding.',
            dosage: 'Varies by condition. For atrial fibrillation, 20mg once daily with the evening meal.',
            warnings: 'Stopping suddenly increases risk of blood clots. Spinal/epidural hematomas can occur in patients undergoing spinal procedures.',
            imageUrl: 'https://i.imgur.com/example.jpg'
        },
        losartan: {
            name: 'Losartan (Cozaar)',
            usage: 'An angiotensin II receptor blocker (ARB) used to treat high blood pressure and to help protect the kidneys from damage due to diabetes.',
            side_effects: 'Dizziness, lightheadedness.',
            dosage: 'Usually started at 50mg once daily.',
            warnings: 'Do not use if you are pregnant. Can cause injury or death to the unborn baby.',
            imageUrl: 'https://i.imgur.com/example.jpg'
        },
        rosuvastatin: {
            name: 'Rosuvastatin (Crestor)',
            usage: 'A statin medication used to lower "bad" cholesterol (LDL) and triglycerides, and raise "good" cholesterol (HDL).',
            side_effects: 'Headache, muscle aches, abdominal pain, and nausea.',
            dosage: 'Doses range from 5mg to 40mg once daily.',
            warnings: 'Can cause muscle and liver problems. Report unexplained muscle pain, especially with fever. Not for use during pregnancy.',
            imageUrl: 'https://i.imgur.com/example.jpg'
        },
        pravastatin: {
            name: 'Pravastatin (Pravachol)',
            usage: 'A statin medication used to lower cholesterol and to reduce the risk of heart attack and stroke.',
            side_effects: 'Generally well-tolerated. Muscle pain, nausea, and headache can occur.',
            dosage: 'Typically 40mg once daily.',
            warnings: 'Can cause muscle and liver problems. Not for use during pregnancy.',
            imageUrl: 'https://i.imgur.com/example.jpg'
        },
        sitagliptin: {
            name: 'Sitagliptin (Januvia)',
            usage: 'An oral diabetes medicine that helps control blood sugar levels by regulating the levels of insulin your body produces after a meal.',
            side_effects: 'Upper respiratory infection, stuffy or runny nose, and headache.',
            dosage: '100mg once daily.',
            warnings: 'Can cause severe joint pain. Has been associated with pancreatitis.',
            imageUrl: 'https://i.imgur.com/example.jpg'
        },
        semaglutide: {
            name: 'Semaglutide (Ozempic, Wegovy, Rybelsus)',
            usage: 'Used to improve blood sugar control in adults with type 2 diabetes. Also used for weight loss (Wegovy).',
            side_effects: 'Nausea, vomiting, diarrhea, stomach pain, and constipation are very common, especially when starting.',
            dosage: 'Administered as a once-weekly injection, with the dose gradually increased.',
            warnings: 'Has a boxed warning for risk of thyroid C-cell tumors. Do not use if you or a family member has had medullary thyroid carcinoma.',
            imageUrl: 'https://i.imgur.com/example.jpg'
        },
        'insulin glargine': {
            name: 'Insulin Glargine (Lantus, Basaglar)',
            usage: 'A long-acting insulin used to treat type 1 and type 2 diabetes.',
            side_effects: 'Low blood sugar (hypoglycemia) is the most common side effect. Others include injection site reactions and weight gain.',
            dosage: 'Dosage is highly individualized. Administered as a subcutaneous injection once daily.',
            warnings: 'Do not share pens or needles. Hypoglycemia can be life-threatening. Always have a source of fast-acting sugar available.',
            imageUrl: 'https://i.imgur.com/example.jpg'
        },
        tamsulosin: {
            name: 'Tamsulosin (Flomax)',
            usage: 'An alpha-blocker used by men to treat the symptoms of an enlarged prostate (benign prostatic hyperplasia - BPH).',
            side_effects: 'Dizziness, lightheadedness, drowsiness, and runny nose.',
            dosage: '0.4mg once daily, taken approximately 30 minutes after the same meal each day.',
            warnings: 'Can cause a sudden drop in blood pressure, especially when first starting. May cause a rare issue during cataract surgery (Intraoperative Floppy Iris Syndrome).',
            imageUrl: 'https://i.imgur.com/example.jpg'
        },
        finasteride: {
            name: 'Finasteride (Proscar, Propecia)',
            usage: 'Used to treat an enlarged prostate (BPH) under the brand name Proscar. Also used to treat male pattern baldness (Propecia) at a lower dose.',
            side_effects: 'Decreased libido, erectile dysfunction, and ejaculation disorder.',
            dosage: 'For BPH: 5mg once daily. For hair loss: 1mg once daily.',
            warnings: 'Women who are or may become pregnant should not handle crushed or broken tablets, as the drug can be absorbed and cause birth defects.',
            imageUrl: 'https://i.imgur.com/example.jpg'
        },
        sildenafil: {
            name: 'Sildenafil (Viagra, Revatio)',
            usage: 'Used to treat erectile dysfunction (Viagra). Also used to treat pulmonary arterial hypertension (Revatio).',
            side_effects: 'Headache, flushing, upset stomach, abnormal vision (blue tinge), and nasal congestion.',
            dosage: 'For ED, 50mg taken as needed approximately 1 hour before sexual activity.',
            warnings: 'Do not take with nitrates (like nitroglycerin) as this can cause a dangerous drop in blood pressure. Seek help for an erection lasting more than 4 hours.',
            imageUrl: 'https://i.imgur.com/example.jpg'
        },
        tadalafil: {
            name: 'Tadalafil (Cialis)',
            usage: 'Used to treat erectile dysfunction (ED) and symptoms of benign prostatic hyperplasia (BPH).',
            side_effects: 'Headache, indigestion, back pain, muscle aches, flushing, and stuffy or runny nose.',
            dosage: 'For ED as needed: 10mg before sexual activity. For daily use: 2.5mg or 5mg once daily.',
            warnings: 'Do not take with nitrates. Seek help for an erection lasting more than 4 hours (priapism).',
            imageUrl: 'https://i.imgur.com/example.jpg'
        },
        esomeprazole: {
            name: 'Esomeprazole (Nexium)',
            usage: 'A proton pump inhibitor (PPI) that decreases the amount of acid produced in the stomach. Used to treat GERD and other conditions involving excessive stomach acid.',
            side_effects: 'Headache, diarrhea, and stomach pain.',
            dosage: '20mg or 40mg once daily.',
            warnings: 'Long-term use may increase the risk of bone fractures, low magnesium, and C. difficile infection.',
            imageUrl: 'https://i.imgur.com/example.jpg'
        },
        pantoprazole: {
            name: 'Pantoprazole (Protonix)',
            usage: 'A proton pump inhibitor (PPI) used to treat GERD and to promote healing of erosive esophagitis.',
            side_effects: 'Headache and diarrhea are the most common side effects.',
            dosage: 'Typically 40mg once daily.',
            warnings: 'Long-term use is associated with an increased risk of bone fractures, C. difficile infection, and low magnesium levels.',
            imageUrl: 'https://i.imgur.com/example.jpg'
        },
        'cephalexin': {
            name: 'Cephalexin (Keflex)',
            usage: 'A cephalosporin antibiotic used to treat bacterial infections of the skin, respiratory tract, and urinary tract.',
            side_effects: 'Diarrhea, nausea, vomiting, and stomach upset.',
            dosage: '250mg to 500mg every 6 hours for adults.',
            warnings: 'Do not use if you have a severe allergy to penicillin. Complete the full course of treatment.',
            imageUrl: 'https://i.imgur.com/example.jpg'
        },
        'doxycycline': {
            name: 'Doxycycline (Vibramycin)',
            usage: 'A tetracycline antibiotic that fights bacteria in the body. Used to treat many different bacterial infections, such as acne, urinary tract infections, respiratory infections, and to prevent malaria.',
            side_effects: 'Nausea, vomiting, upset stomach, and increased sensitivity to sunlight.',
            dosage: 'Typically 100mg once or twice daily.',
            warnings: 'Take with a full glass of water and remain upright for at least 30 minutes to prevent irritation of the esophagus. Do not take with dairy, iron, or calcium supplements. Not for use in children under 8 or pregnant women.',
            imageUrl: 'https://i.imgur.com/example.jpg'
        },
        'cyclobenzaprine': {
            name: 'Cyclobenzaprine (Flexeril)',
            usage: 'A muscle relaxant used to relieve skeletal muscle spasms and pain associated with acute musculoskeletal conditions.',
            side_effects: 'Drowsiness, dry mouth, and dizziness are very common.',
            dosage: '5mg to 10mg up to three times a day.',
            warnings: 'Should only be used for short periods (up to two or three weeks). Avoid alcohol and other CNS depressants.',
            imageUrl: 'https://i.imgur.com/example.jpg'
        },
        'methylphenidate': {
            name: 'Methylphenidate (Ritalin, Concerta)',
            usage: 'A central nervous system stimulant used to treat attention deficit hyperactivity disorder (ADHD) and narcolepsy.',
            side_effects: 'Trouble sleeping, decreased appetite, headache, and stomach pain.',
            dosage: 'Dosage is highly individualized and comes in immediate-release and extended-release forms.',
            warnings: 'Has a high potential for abuse and dependence. Can cause an increase in blood pressure and heart rate. May worsen psychiatric conditions.',
            imageUrl: 'https://i.imgur.com/example.jpg'
        },
        'lisdexamfetamine': {
            name: 'Lisdexamfetamine (Vyvanse)',
            usage: 'A central nervous system stimulant used to treat ADHD and binge eating disorder.',
            side_effects: 'Decreased appetite, trouble sleeping, dry mouth, and irritability.',
            dosage: 'Typically started at 30mg once daily in the morning.',
            warnings: 'High potential for abuse. Can cause sudden death and serious cardiovascular adverse events.',
            imageUrl: 'https://i.imgur.com/example.jpg'
        },
        'bupropion': {
            name: 'Bupropion (Wellbutrin, Zyban)',
            usage: 'An antidepressant used to treat major depressive disorder and seasonal affective disorder. Also used to help people stop smoking (Zyban).',
            side_effects: 'Dry mouth, nausea, trouble sleeping, and headache.',
            dosage: 'Typically 150mg to 300mg daily.',
            warnings: 'Lowers the seizure threshold; do not use in patients with a seizure disorder or eating disorders like bulimia or anorexia. Can increase suicidal thoughts.',
            imageUrl: 'https://i.imgur.com/example.jpg'
        },
        'mirtazapine': {
            name: 'Mirtazapine (Remeron)',
            usage: 'An antidepressant used to treat depression. Often used off-label for insomnia due to its sedating effects.',
            side_effects: 'Drowsiness, increased appetite, weight gain, and dizziness.',
            dosage: '15mg to 45mg once daily at bedtime.',
            warnings: 'May increase suicidal thoughts in young adults. Avoid alcohol.',
            imageUrl: 'https://i.imgur.com/example.jpg'
        },
        'allopurinol': {
            name: 'Allopurinol (Zyloprim)',
            usage: 'Used to treat gout and certain types of kidney stones by reducing the production of uric acid in the body.',
            side_effects: 'Skin rash is the most common side effect. Drowsiness and nausea can occur.',
            dosage: 'Started at 100mg daily and titrated up based on uric acid levels.',
            warnings: 'A severe, potentially fatal skin reaction can occur. Stop taking and see a doctor immediately if you develop a rash.',
            imageUrl: 'https://i.imgur.com/example.jpg'
        },
        'ondansetron': {
            name: 'Ondansetron (Zofran)',
            usage: 'Used to prevent nausea and vomiting caused by cancer chemotherapy, radiation therapy, and surgery.',
            side_effects: 'Headache, constipation, and fatigue.',
            dosage: 'Typically 4mg or 8mg.',
            warnings: 'Can cause a serious heart problem called QT prolongation.',
            imageUrl: 'https://i.imgur.com/example.jpg'
        },
        'sumatriptan': {
            name: 'Sumatriptan (Imitrex)',
            usage: 'Used to treat acute migraine headaches.',
            side_effects: 'Feelings of tingling/numbness/prickling/heat, tiredness, weakness, drowsiness, or dizziness may occur. A feeling of tightness/pain/pressure in the chest/throat/neck/jaw is common but should be reported to a doctor.',
            dosage: '50mg or 100mg tablet at the start of a migraine. Can be repeated after 2 hours if needed.',
            warnings: 'Should not be used to prevent migraines. Do not use if you have a history of heart disease, stroke, or uncontrolled high blood pressure.',
            imageUrl: 'https://i.imgur.com/example.jpg'
        },
        'pregabalin': {
            name: 'Pregabalin (Lyrica)',
            usage: 'Used to treat nerve pain (neuropathy), fibromyalgia, and partial onset seizures.',
            side_effects: 'Dizziness, drowsiness, and swelling of the hands and feet (edema).',
            dosage: 'Dosage is highly variable and must be increased gradually.',
            warnings: 'Can cause suicidal thoughts or actions. Do not stop taking suddenly. Can cause serious, life-threatening breathing problems when taken with opioid medications.',
            imageUrl: 'https://i.imgur.com/example.jpg'
        },
        'topiramate': {
            name: 'Topiramate (Topamax)',
            usage: 'Used to treat certain types of seizures and to prevent migraine headaches.',
            side_effects: 'Tiredness, drowsiness, dizziness, nervousness, and tingling of the hands/feet.',
            dosage: 'Dosage is started low and increased slowly to reduce side effects.',
            warnings: 'Can cause vision problems that can be permanent if not treated quickly. Can decrease sweating and increase body temperature.',
            imageUrl: 'https://i.imgur.com/example.jpg'
        },
        'meloxicam': {
            name: 'Meloxicam (Mobic)',
            usage: 'A nonsteroidal anti-inflammatory drug (NSAID) used to treat pain or inflammation caused by osteoarthritis and rheumatoid arthritis.',
            side_effects: 'Upset stomach, nausea, dizziness, and diarrhea.',
            dosage: '7.5mg or 15mg once daily.',
            warnings: 'Increased risk of serious cardiovascular events (heart attack, stroke) and gastrointestinal bleeding.',
            imageUrl: 'https://i.imgur.com/example.jpg'
        },
        'celecoxib': {
            name: 'Celecoxib (Celebrex)',
            usage: 'A COX-2 inhibitor NSAID used to treat pain and inflammation from arthritis.',
            side_effects: 'Stomach pain, constipation, diarrhea, gas, and heartburn.',
            dosage: '200mg once daily or 100mg twice daily.',
            warnings: 'Increased risk of heart attack and stroke. Do not use if you have a sulfa allergy.',
            imageUrl: 'https://i.imgur.com/example.jpg'
        },
        'oxycodone': {
            name: 'Oxycodone (OxyContin, Roxicodone)',
            usage: 'An opioid pain medication used to treat moderate to severe pain.',
            side_effects: 'Constipation, nausea, drowsiness, dizziness, and vomiting.',
            dosage: 'Dosage is highly individualized.',
            warnings: 'High risk of addiction, abuse, and misuse, which can lead to overdose and death. Life-threatening respiratory depression may occur. Do not consume alcohol.',
            imageUrl: 'https://i.imgur.com/example.jpg'
        },
        citalopram: {
            name: 'Citalopram (Celexa)',
            usage: 'An SSRI antidepressant used to treat major depressive disorder.',
            side_effects: 'Nausea, dry mouth, sleepiness, and sweating.',
            dosage: 'Typically started at 20mg once daily. Maximum dose is 40mg daily.',
            warnings: 'Can cause a heart problem known as QT prolongation. May increase suicidal thoughts in young adults. Do not stop abruptly.',
            imageUrl: 'https://i.imgur.com/example.jpg'
        },
        venlafaxine: {
            name: 'Venlafaxine (Effexor XR)',
            usage: 'An SNRI antidepressant used to treat major depressive disorder, generalized anxiety disorder, panic disorder, and social anxiety disorder.',
            side_effects: 'Nausea, headache, insomnia, drowsiness, and dry mouth.',
            dosage: 'Extended-release (XR) is typically started at 37.5mg to 75mg once daily.',
            warnings: 'Can increase blood pressure. Do not stop taking suddenly as it can cause severe withdrawal symptoms. Increased risk of suicidal thoughts.',
            imageUrl: 'https://i.imgur.com/example.jpg'
        },
        diazepam: {
            name: 'Diazepam (Valium)',
            usage: 'A benzodiazepine used to treat anxiety, muscle spasms, and seizures. Also used to manage alcohol withdrawal symptoms.',
            side_effects: 'Drowsiness, fatigue, muscle weakness, and problems with coordination (ataxia).',
            dosage: 'For anxiety, 2mg to 10mg, 2 to 4 times daily, depending on severity.',
            warnings: 'High potential for addiction and dependence. Combining with alcohol or opioids can be fatal. Not for long-term use.',
            imageUrl: 'https://i.imgur.com/example.jpg'
        },
        quetiapine: {
            name: 'Quetiapine (Seroquel)',
            usage: 'An atypical antipsychotic used to treat schizophrenia, bipolar disorder, and as an add-on treatment for major depressive disorder.',
            side_effects: 'Drowsiness, dizziness, weight gain, increased appetite, and dry mouth.',
            dosage: 'Dosage is highly variable and depends on the condition being treated.',
            warnings: 'May increase risk of death in elderly patients with dementia-related psychosis. Can cause high blood sugar, high cholesterol, and weight gain.',
            imageUrl: 'https://i.imgur.com/example.jpg'
        },
        aripiprazole: {
            name: 'Aripiprazole (Abilify)',
            usage: 'An atypical antipsychotic used to treat schizophrenia, bipolar disorder, depression, and Tourette syndrome.',
            side_effects: 'Headache, agitation, insomnia, nausea, and lightheadedness.',
            dosage: 'Typically started at 10mg to 15mg once daily for schizophrenia.',
            warnings: 'Increased risk of death in elderly patients with dementia-related psychosis. Can cause compulsive or uncontrollable urges to gamble, binge eat, shop, or have sex.',
            imageUrl: 'https://i.imgur.com/example.jpg'
        },
        'carvedilol': {
            name: 'Carvedilol (Coreg)',
            usage: 'A beta-blocker used to treat high blood pressure and heart failure.',
            side_effects: 'Dizziness, fatigue, low blood pressure, and weight gain.',
            dosage: 'For hypertension, often started at 6.25mg twice daily.',
            warnings: 'Do not stop taking suddenly. Take with food to reduce the risk of dizziness. May mask signs of low blood sugar.',
            imageUrl: 'https://i.imgur.com/example.jpg'
        },
        'atenolol': {
            name: 'Atenolol (Tenormin)',
            usage: 'A beta-blocker used to treat high blood pressure (hypertension) and chest pain (angina).',
            side_effects: 'Tiredness, dizziness, cold hands and feet, and slow heartbeat.',
            dosage: 'Typically 25mg to 50mg once daily.',
            warnings: 'Do not stop taking abruptly. May worsen heart failure in some patients.',
            imageUrl: 'https://i.imgur.com/example.jpg'
        },
        'propranolol': {
            name: 'Propranolol (Inderal)',
            usage: 'A beta-blocker used to treat high blood pressure, angina, tremors, and to prevent migraine headaches. Also used for performance anxiety.',
            side_effects: 'Fatigue, dizziness, slow heart rate, and nausea.',
            dosage: 'Dosage varies widely depending on the condition being treated.',
            warnings: 'Do not stop taking suddenly. Can cause bronchospasm in patients with asthma.',
            imageUrl: 'https://i.imgur.com/example.jpg'
        },
        'valsartan': {
            name: 'Valsartan (Diovan)',
            usage: 'An ARB used to treat high blood pressure and heart failure.',
            side_effects: 'Dizziness and headache.',
            dosage: 'For hypertension, typically 80mg or 160mg once daily.',
            warnings: 'Do not use if pregnant, as it can cause harm or death to the fetus.',
            imageUrl: 'https://i.imgur.com/example.jpg'
        },
        'diltiazem': {
            name: 'Diltiazem (Cardizem)',
            usage: 'A calcium channel blocker used to treat high blood pressure, angina, and certain heart rhythm disorders.',
            side_effects: 'Swelling (edema), headache, dizziness, and slow heartbeat.',
            dosage: 'Dosage varies based on immediate-release or extended-release formulations.',
            warnings: 'Should not be used in patients with certain heart conditions like sick sinus syndrome or AV block.',
            imageUrl: 'https://i.imgur.com/example.jpg'
        },
        'spironolactone': {
            name: 'Spironolactone (Aldactone)',
            usage: 'A potassium-sparing diuretic used to treat high blood pressure, heart failure, and fluid retention. Also used off-label for acne and hair loss in women.',
            side_effects: 'Can cause high potassium levels (hyperkalemia). In men, it can cause breast tenderness or enlargement (gynecomastia).',
            dosage: '25mg to 100mg per day.',
            warnings: 'Can cause high potassium levels, which can be life-threatening. Avoid potassium supplements and salt substitutes containing potassium.',
            imageUrl: 'https://i.imgur.com/example.jpg'
        },
        'glipizide': {
            name: 'Glipizide (Glucotrol)',
            usage: 'An oral diabetes medicine (sulfonylurea) that helps control blood sugar levels by stimulating the pancreas to produce insulin.',
            side_effects: 'Low blood sugar (hypoglycemia) is the most common side effect. Nausea and weight gain can also occur.',
            dosage: 'Typically 5mg daily, taken 30 minutes before the first meal of the day.',
            warnings: 'Risk of hypoglycemia, especially in the elderly. Avoid alcohol as it can cause a disulfiram-like reaction (flushing, nausea).',
            imageUrl: 'https://i.imgur.com/example.jpg'
        },
        'glyburide': {
            name: 'Glyburide (Diabeta, Glynase)',
            usage: 'A sulfonylurea used to treat type 2 diabetes by helping the pancreas release insulin.',
            side_effects: 'Hypoglycemia (low blood sugar), heartburn, nausea, and weight gain.',
            dosage: '2.5mg to 5mg once daily with breakfast.',
            warnings: 'Higher risk of hypoglycemia compared to other sulfonylureas, especially in the elderly.',
            imageUrl: 'https://i.imgur.com/example.jpg'
        },
        'pioglitazone': {
            name: 'Pioglitazone (Actos)',
            usage: 'An oral diabetes medicine (thiazolidinedione) that helps control blood sugar by making cells more sensitive to insulin.',
            side_effects: 'Cold-like symptoms, headache, muscle pain, and weight gain.',
            dosage: '15mg or 30mg once daily.',
            warnings: 'Can cause or worsen congestive heart failure. Associated with an increased risk of bladder cancer and bone fractures.',
            imageUrl: 'https://i.imgur.com/example.jpg'
        },
        'liraglutide': {
            name: 'Liraglutide (Victoza, Saxenda)',
            usage: 'A GLP-1 receptor agonist used to treat type 2 diabetes (Victoza) and for weight management (Saxenda).',
            side_effects: 'Nausea, diarrhea, constipation, and decreased appetite.',
            dosage: 'Administered as a once-daily injection, with the dose gradually increased.',
            warnings: 'Risk of thyroid C-cell tumors. Has been associated with pancreatitis.',
            imageUrl: 'https://i.imgur.com/example.jpg'
        },
        'empagliflozin': {
            name: 'Empagliflozin (Jardiance)',
            usage: 'An SGLT2 inhibitor used to lower blood sugar in type 2 diabetes and reduce the risk of cardiovascular death in patients with heart disease.',
            side_effects: 'Urinary tract infections and yeast infections are common.',
            dosage: '10mg or 25mg once daily in the morning.',
            warnings: 'Can cause dehydration and a serious condition called diabetic ketoacidosis, even with normal blood sugar levels.',
            imageUrl: 'https://i.imgur.com/example.jpg'
        },
        'canagliflozin': {
            name: 'Canagliflozin (Invokana)',
            usage: 'An SGLT2 inhibitor used to treat type 2 diabetes.',
            side_effects: 'Yeast infections, urinary tract infections, and increased urination.',
            dosage: '100mg once daily before the first meal of the day.',
            warnings: 'Increased risk of leg and foot amputations (this warning is more prominent for canagliflozin than other SGLT2s). Risk of bone fractures.',
            imageUrl: 'https://i.imgur.com/example.jpg'
        },
        'fluticasone': {
            name: 'Fluticasone (Flonase, Flovent)',
            usage: 'A corticosteroid used as a nasal spray (Flonase) for allergies or as an inhaler (Flovent) for asthma.',
            side_effects: 'Nasal spray: headache, nosebleeds. Inhaler: hoarseness, thrush (oral fungal infection).',
            dosage: 'Flonase: 1-2 sprays per nostril once daily. Flovent: Varies by strength.',
            warnings: 'Rinse mouth after using the inhaler to prevent thrush. Long-term use can have systemic effects.',
            imageUrl: 'https://i.imgur.com/example.jpg'
        },
        'budesonide': {
            name: 'Budesonide (Pulmicort, Rhinocort)',
            usage: 'A corticosteroid used as an inhaler (Pulmicort) for asthma or as a nasal spray (Rhinocort) for allergies.',
            side_effects: 'Nasal spray: nasal irritation. Inhaler: cough, thrush.',
            dosage: 'Varies by formulation and condition.',
            warnings: 'Rinse mouth after using inhaler. Not a rescue medication for asthma attacks.',
            imageUrl: 'https://i.imgur.com/example.jpg'
        },
        'ipratropium': {
            name: 'Ipratropium (Atrovent)',
            usage: 'An anticholinergic bronchodilator used to treat COPD and sometimes asthma, often in combination with albuterol.',
            side_effects: 'Dry mouth, cough, and headache.',
            dosage: 'Typically 2 puffs from an inhaler four times a day.',
            warnings: 'Not for rapid relief of bronchospasm. Use with caution in patients with glaucoma or prostate enlargement.',
            imageUrl: 'https://i.imgur.com/example.jpg'
        },
        'tiotropium': {
            name: 'Tiotropium (Spiriva)',
            usage: 'A long-acting anticholinergic bronchodilator used for the maintenance treatment of COPD.',
            side_effects: 'Dry mouth is very common.',
            dosage: 'One inhalation from the HandiHaler or Respimat device once daily.',
            warnings: 'Not a rescue medication. Use with caution in patients with narrow-angle glaucoma or urinary retention.',
            imageUrl: 'https://i.imgur.com/example.jpg'
        },
        'codeine': {
            name: 'Codeine',
            usage: 'An opioid used to treat mild to moderate pain and also as a cough suppressant.',
            side_effects: 'Drowsiness, lightheadedness, constipation, and nausea.',
            dosage: 'For pain, 15mg to 60mg every 4-6 hours.',
            warnings: 'Risk of addiction and dependence. Some people are "ultra-rapid metabolizers" of codeine, which can lead to dangerously high levels of morphine and respiratory depression.',
            imageUrl: 'https://i.imgur.com/example.jpg'
        },
        'hydrocodone': {
            name: 'Hydrocodone (in Vicodin, Norco)',
            usage: 'An opioid used to treat severe pain, almost always found in combination with acetaminophen.',
            side_effects: 'Drowsiness, constipation, nausea, and dizziness.',
            dosage: 'Combination products typically contain 5mg, 7.5mg, or 10mg of hydrocodone.',
            warnings: 'High risk of addiction, abuse, and misuse. Risk of liver damage from the acetaminophen component if taken in high doses.',
            imageUrl: 'https://i.imgur.com/example.jpg'
        },
        'morphine': {
            name: 'Morphine (MS Contin, Kadian)',
            usage: 'A potent opioid analgesic used to treat severe pain.',
            side_effects: 'Drowsiness, constipation, nausea, and itching.',
            dosage: 'Dosage is highly variable and depends on patient tolerance and pain severity.',
            warnings: 'High potential for addiction. Can cause life-threatening respiratory depression. Do not crush or chew extended-release tablets.',
            imageUrl: 'https://i.imgur.com/example.jpg'
        },
        'fentanyl': {
            name: 'Fentanyl (Duragesic, Actiq)',
            usage: 'A very potent synthetic opioid used for severe pain, typically in opioid-tolerant patients. Used in anesthesia.',
            side_effects: 'Extreme drowsiness, confusion, constipation, nausea.',
            dosage: 'Available as patches, lozenges, and injections. Dosing is extremely precise and for professional use or strict patient instruction.',
            warnings: 'Extremely high risk of overdose and death, even with small amounts. For use in opioid-tolerant patients only. Illicit fentanyl is a major cause of overdose deaths.',
            imageUrl: 'https://i.imgur.com/example.jpg'
        },
        'methadone': {
            name: 'Methadone (Dolophine)',
            usage: 'An opioid used for severe pain and in medication-assisted treatment for opioid use disorder.',
            side_effects: 'Drowsiness, constipation, and sweating.',
            dosage: 'Dosing for pain and addiction treatment are very different and highly regulated.',
            warnings: 'Can cause a serious heart rhythm problem (QT prolongation). Has a long and variable half-life, increasing overdose risk.',
            imageUrl: 'https://i.imgur.com/example.jpg'
        },
        'naloxone': {
            name: 'Naloxone (Narcan, Evzio)',
            usage: 'An opioid antagonist used for the complete or partial reversal of opioid overdose, including respiratory depression.',
            side_effects: 'Can induce immediate opioid withdrawal symptoms (pain, anxiety, nausea) in people with physical dependence.',
            dosage: 'Available as a nasal spray or auto-injector for emergency use by laypeople.',
            warnings: 'This is an emergency rescue drug. Always call 911 after administering, as the effects of the opioid may outlast the naloxone.',
            imageUrl: 'https://i.imgur.com/example.jpg'
        },
        'buprenorphine': {
            name: 'Buprenorphine (Suboxone, Subutex)',
            usage: 'A partial opioid agonist used to treat opioid dependence. Also used for chronic pain.',
            side_effects: 'Headache, constipation, and nausea.',
            dosage: 'Typically administered as a sublingual film or tablet.',
            warnings: 'Risk of addiction, but lower than full agonists. Can cause respiratory depression, especially if combined with benzodiazepines or alcohol.',
            imageUrl: 'https://i.imgur.com/example.jpg'
        },
        'ketorolac': {
            name: 'Ketorolac (Toradol)',
            usage: 'A potent NSAID used for the short-term treatment (up to 5 days) of moderate to severe pain.',
            side_effects: 'Upset stomach, headache, and drowsiness.',
            dosage: 'Available as injection, nasal spray, and oral tablets.',
            warnings: 'High risk of serious gastrointestinal bleeding and kidney damage. Not for long-term use.',
            imageUrl: 'https://i.imgur.com/example.jpg'
        },
        'diclofenac': {
            name: 'Diclofenac (Voltaren)',
            usage: 'An NSAID used to treat pain and inflammation from arthritis. Also available as a topical gel for localized pain.',
            side_effects: 'Upset stomach, heartburn, and headache.',
            dosage: 'Oral: 50mg 2-3 times daily. Topical: apply to affected area.',
            warnings: 'Increased risk of heart attack and stroke. Risk of stomach bleeding.',
            imageUrl: 'https://i.imgur.com/example.jpg'
        },
        'indomethacin': {
            name: 'Indomethacin (Indocin)',
            usage: 'A potent NSAID used to treat moderate to severe arthritis and gout.',
            side_effects: 'Headache is very common. Dizziness, vomiting, and diarrhea can also occur.',
            dosage: '25mg to 50mg, 2-3 times daily.',
            warnings: 'High risk of gastrointestinal and cardiovascular side effects. Often considered a last-resort NSAID due to its side effect profile.',
            imageUrl: 'https://i.imgur.com/example.jpg'
        },
        'colchicine': {
            name: 'Colchicine (Colcrys)',
            usage: 'Used to prevent and treat gout attacks.',
            side_effects: 'Diarrhea, nausea, and stomach cramps are very common.',
            dosage: 'For a gout flare, typically 1.2mg at the first sign, followed by 0.6mg one hour later.',
            warnings: 'Has a narrow therapeutic index, meaning the difference between a therapeutic dose and a toxic dose is small. Many drug interactions.',
            imageUrl: 'https://i.imgur.com/example.jpg'
        },
        'hydroxychloroquine': {
            name: 'Hydroxychloroquine (Plaquenil)',
            usage: 'Used to treat malaria, lupus, and rheumatoid arthritis.',
            side_effects: 'Nausea, stomach cramps, and headache.',
            dosage: '200mg or 400mg daily.',
            warnings: 'Can cause irreversible eye damage (retinopathy). Regular eye exams are required during long-term treatment.',
            imageUrl: 'https://i.imgur.com/example.jpg'
        },
        'methotrexate': {
            name: 'Methotrexate (Trexall)',
            usage: 'Used at low doses to treat rheumatoid arthritis and psoriasis. Used at high doses as a chemotherapy agent.',
            side_effects: 'Nausea, fatigue, and mouth sores.',
            dosage: 'For arthritis, taken ONCE WEEKLY (e.g., 7.5mg to 25mg once a week).',
            warnings: 'NEVER take daily for arthritis, as this can be fatal. Many serious side effects, including liver, lung, and bone marrow damage. Not for use during pregnancy.',
            imageUrl: 'https://i.imgur.com/example.jpg'
        },
        'adalimumab': {
            name: 'Adalimumab (Humira)',
            usage: 'A biologic TNF inhibitor used to treat autoimmune conditions like rheumatoid arthritis, Crohn\'s disease, and psoriasis.',
            side_effects: 'Injection site reactions, upper respiratory infections, and headache.',
            dosage: 'Administered as a subcutaneous injection, typically every other week.',
            warnings: 'Increases the risk of serious infections, including tuberculosis. Can increase the risk of certain types of cancer.',
            imageUrl: 'https://i.imgur.com/example.jpg'
        },
        'etanercept': {
            name: 'Etanercept (Enbrel)',
            usage: 'A biologic TNF inhibitor used to treat autoimmune conditions like rheumatoid arthritis and psoriasis.',
            side_effects: 'Injection site reactions and infections.',
            dosage: 'Administered as a subcutaneous injection once or twice weekly.',
            warnings: 'Increased risk of serious infections and certain cancers.',
            imageUrl: 'https://i.imgur.com/example.jpg'
        },
        'valacyclovir': {
            name: 'Valacyclovir (Valtrex)',
            usage: 'An antiviral drug used to treat infections caused by herpes viruses, including cold sores, genital herpes, and shingles.',
            side_effects: 'Headache, nausea, and stomach pain.',
            dosage: 'Dosage varies by condition (e.g., 1 gram twice daily for 7-10 days for initial genital herpes episode).',
            warnings: 'Stay well-hydrated to protect your kidneys.',
            imageUrl: 'https://i.imgur.com/example.jpg'
        },
        'oseltamivir': {
            name: 'Oseltamivir (Tamiflu)',
            usage: 'An antiviral drug used to treat and prevent influenza (the flu).',
            side_effects: 'Nausea and vomiting are common.',
            dosage: 'For treatment, 75mg twice daily for 5 days.',
            warnings: 'Must be started within 48 hours of the first flu symptoms to be effective. Does not replace the flu vaccine.',
            imageUrl: 'https://i.imgur.com/example.jpg'
        },
        'nitrofurantoin': {
            name: 'Nitrofurantoin (Macrobid, Macrodantin)',
            usage: 'An antibiotic used to treat and prevent urinary tract infections (UTIs).',
            side_effects: 'Nausea, headache, and gas. Can turn urine a dark yellow or brown color.',
            dosage: 'For UTI treatment, 100mg twice daily for 5-7 days.',
            warnings: 'Not for use in patients with poor kidney function. Can cause serious lung problems with long-term use.',
            imageUrl: 'https://i.imgur.com/example.jpg'
        },
        'ciprofloxacin': {
            name: 'Ciprofloxacin (Cipro)',
            usage: 'A fluoroquinolone antibiotic used to treat a variety of bacterial infections, including UTIs and respiratory infections.',
            side_effects: 'Nausea, diarrhea, and dizziness.',
            dosage: '250mg to 750mg twice daily, depending on the infection.',
            warnings: 'Boxed warning for serious side effects including tendon rupture, nerve damage, and CNS effects. Use should be limited to situations where there are no other options.',
            imageUrl: 'https://i.imgur.com/example.jpg'
        },
        'levofloxacin': {
            name: 'Levofloxacin (Levaquin)',
            usage: 'A fluoroquinolone antibiotic used to treat bacterial infections like pneumonia, sinusitis, and UTIs.',
            side_effects: 'Nausea, headache, diarrhea, and insomnia.',
            dosage: '250mg, 500mg, or 750mg once daily.',
            warnings: 'Boxed warning for disabling and potentially permanent side effects involving tendons, muscles, joints, nerves, and the central nervous system.',
            imageUrl: 'https://i.imgur.com/example.jpg'
        },
        'clindamycin': {
            name: 'Clindamycin (Cleocin)',
            usage: 'An antibiotic used to treat serious bacterial infections. Also used topically for acne.',
            side_effects: 'Nausea, vomiting, and metallic taste.',
            dosage: '150mg to 450mg every 6 hours.',
            warnings: 'Boxed warning for a high risk of causing severe, potentially fatal diarrhea caused by C. difficile.',
            imageUrl: 'https://i.imgur.com/example.jpg'
        },
        'metronidazole': {
            name: 'Metronidazole (Flagyl)',
            usage: 'An antibiotic and antiprotozoal used to treat a variety of infections, including C. difficile, bacterial vaginosis, and parasitic infections.',
            side_effects: 'Nausea, headache, and a sharp, metallic taste.',
            dosage: 'Typically 500mg three times a day.',
            warnings: 'Do not drink alcohol during treatment and for at least 3 days after, as it can cause a severe reaction (nausea, vomiting, flushing).',
            imageUrl: 'https://i.imgur.com/example.jpg'
        },
        'fluconazole': {
            name: 'Fluconazole (Diflucan)',
            usage: 'An antifungal medication used to treat yeast infections, including vaginal yeast infections and thrush.',
            side_effects: 'Headache, nausea, and stomach pain.',
            dosage: 'For vaginal yeast infection, a single dose of 150mg is common.',
            warnings: 'Many drug interactions. Not recommended during pregnancy.',
            imageUrl: 'https://i.imgur.com/example.jpg'
        },
        'terbinafine': {
            name: 'Terbinafine (Lamisil)',
            usage: 'An antifungal medication used to treat fungal infections of the fingernails and toenails.',
            side_effects: 'Headache, diarrhea, and rash.',
            dosage: '250mg once daily for 6 weeks (fingernails) or 12 weeks (toenails).',
            warnings: 'Can cause liver problems. Blood tests to check liver function are needed before and during treatment.',
            imageUrl: 'https://i.imgur.com/example.jpg'
        },
        'estradiol': {
            name: 'Estradiol (Estrace)',
            usage: 'A form of estrogen, a female hormone, used to treat symptoms of menopause (like hot flashes) and to prevent osteoporosis.',
            side_effects: 'Headache, breast tenderness, and nausea.',
            dosage: 'Available in many forms (pills, patches, creams). Dosage is individualized.',
            warnings: 'Hormone therapy has risks, including an increased risk of blood clots, stroke, and certain cancers. Use the lowest effective dose for the shortest duration.',
            imageUrl: 'https://i.imgur.com/example.jpg'
        },
        'progesterone': {
            name: 'Progesterone (Prometrium)',
            usage: 'A female hormone important for the regulation of ovulation and menstruation. Used in combination with estrogen in postmenopausal women to protect the uterus.',
            side_effects: 'Drowsiness and dizziness are very common. Take at bedtime.',
            dosage: 'Typically 200mg once daily at bedtime.',
            warnings: 'Contains peanut oil; do not use if you have a peanut allergy.',
            imageUrl: 'https://i.imgur.com/example.jpg'
        },
        'testosterone': {
            name: 'Testosterone (AndroGel, Depo-Testosterone)',
            usage: 'A male sex hormone used to treat low testosterone levels in men (hypogonadism).',
            side_effects: 'Acne, mood changes, and application site reactions for gels.',
            dosage: 'Available as injections, gels, and patches. Dosing is individualized.',
            warnings: 'Can increase the risk of prostate cancer and cardiovascular events. Gels can be transferred to others through skin contact.'
        },
        'ranitidine': {
            name: 'Ranitidine (Zantac)',
            usage: 'A histamine-2 blocker that reduces stomach acid. Used to treat and prevent ulcers in the stomach and intestines, and to treat GERD. Note: Largely withdrawn from the market due to contamination concerns.',
            side_effects: 'Headache, constipation, or diarrhea may occur. Generally well-tolerated.',
            dosage: 'Typically 150mg twice daily or 300mg at bedtime.',
            warnings: 'In 2020, the FDA requested the removal of all ranitidine products from the market due to unacceptable levels of a contaminant (NDMA). Famotidine (Pepcid) is a common alternative.',
            imageUrl: 'https://i.imgur.com/example.jpg'
        },
        'naproxen': {
            name: 'Naproxen (Aleve)',
            usage: 'A nonsteroidal anti-inflammatory drug (NSAID) used to treat pain, menstrual cramps, and inflammation from conditions like arthritis.',
            side_effects: 'Upset stomach, heartburn, headache, and dizziness.',
            dosage: 'Typically 220mg to 550mg every 12 hours.',
            warnings: 'Increased risk of serious cardiovascular events (heart attack, stroke) and gastrointestinal bleeding. Do not use for long periods without consulting a doctor.',
            imageUrl: 'https://i.imgur.com/example.jpg'
        },
        'risperidone': {
            name: 'Risperidone (Risperdal)',
            usage: 'An atypical antipsychotic used to treat schizophrenia, bipolar disorder, and irritability associated with autism.',
            side_effects: 'Drowsiness, dizziness, weight gain, and tremors. Can increase prolactin levels, leading to side effects like breast enlargement.',
            dosage: 'Dosage is highly individualized, often starting at 1-2mg per day.',
            warnings: 'Increased risk of death in elderly patients with dementia-related psychosis. May cause metabolic changes like high blood sugar and cholesterol.',
            imageUrl: 'https://i.imgur.com/example.jpg'
        },
        'olanzapine': {
            name: 'Olanzapine (Zyprexa)',
            usage: 'An atypical antipsychotic used to treat schizophrenia and bipolar disorder.',
            side_effects: 'Significant weight gain, drowsiness, dizziness, and increased appetite are very common.',
            dosage: 'Typically started at 5-10mg once daily.',
            warnings: 'Associated with a high risk of metabolic side effects, including weight gain, high blood sugar, and high cholesterol. Increased risk of death in elderly patients with dementia-related psychosis.',
            imageUrl: 'https://i.imgur.com/example.jpg'
        },
        'donepezil': {
            name: 'Donepezil (Aricept)',
            usage: 'A cholinesterase inhibitor used to treat confusion (dementia) related to Alzheimer\'s disease.',
            side_effects: 'Nausea, vomiting, diarrhea, and difficulty sleeping.',
            dosage: 'Started at 5mg once daily at bedtime, may be increased to 10mg.',
            warnings: 'Does not cure Alzheimer\'s, but may improve memory, awareness, and the ability to function. Can cause slow heart rate.',
            imageUrl: 'https://i.imgur.com/example.jpg'
        },
        'memantine': {
            name: 'Memantine (Namenda)',
            usage: 'An NMDA receptor antagonist used to treat moderate to severe dementia of the Alzheimer\'s type.',
            side_effects: 'Dizziness, headache, confusion, and constipation.',
            dosage: 'Dosage is titrated up slowly, often starting at 5mg daily.',
            warnings: 'Often used in combination with a cholinesterase inhibitor like donepezil. Use with caution in patients with severe kidney problems.',
            imageUrl: 'https://i.imgur.com/example.jpg'
        },
        'oxybutynin': {
            name: 'Oxybutynin (Ditropan)',
            usage: 'Used to treat overactive bladder by relaxing the bladder muscles.',
            side_effects: 'Dry mouth, dry eyes, constipation, and drowsiness are very common (anticholinergic effects).',
            dosage: 'Immediate-release is typically 5mg 2-3 times daily. Extended-release formulations are also available.',
            warnings: 'Can worsen drowsiness and dizziness. Use with caution in the elderly, who are more sensitive to its side effects.',
            imageUrl: 'https://i.imgur.com/example.jpg'
        }
    };

    // --- Element Selectors ---
    const nameInput = document.getElementById('medicineNameInput');
    const photoInput = document.getElementById('medicinePhotoInput');
    const scanWithCameraBtn = document.getElementById('scanWithCameraBtn');
    const problemInput = document.getElementById('problemInput');
    const searchByProblemBtn = document.getElementById('searchByProblemBtn');
    const loadingSpinner = document.getElementById('loading-spinner');
    const autocompleteList = document.getElementById('autocomplete-list');
    const problemAutocompleteList = document.getElementById('problem-autocomplete-list');

    // New result and error area selectors
    const themeToggle = document.getElementById('theme-checkbox');
    const nameResultsArea = document.getElementById('name-results-area');
    const problemResultsArea = document.getElementById('problem-results-area');
    const nameErrorArea = document.getElementById('name-error-area');
    const problemErrorArea = document.getElementById('problem-error-area');

    // Camera Modal Elements
    const dropZone = document.getElementById('drop-zone');
    const scrollToTopBtn = document.getElementById('scrollToTopBtn');
    const cameraModal = document.getElementById('camera-modal');
    const videoElement = document.getElementById('camera-feed');
    const captureBtn = document.getElementById('capture-btn');
    const closeModalBtn = document.getElementById('close-modal-btn');
    let stream = null;

    // --- Pre-process data for problem suggestions ---
    let problemKeywords = [];
    function generateProblemKeywords() {
        const stopWords = new Set(['a', 'an', 'the', 'to', 'in', 'for', 'of', 'and', 'or', 'is', 'used', 'it', 'with', 'such', 'as', 'due']);
        const allWords = new Set();
        Object.values(medicineDatabase).forEach(med => {
            const words = med.usage.toLowerCase().replace(/[^a-z\s-]/g, '').split(/\s+/);
            words.forEach(word => {
                if (word.length > 3 && !stopWords.has(word)) {
                    allWords.add(word);
                }
            });
        });
        problemKeywords = Array.from(allWords).sort();
    }

    // --- Initial Setup ---
    generateProblemKeywords();
    // Dark Mode Initializer
    const currentTheme = localStorage.getItem('theme');
    if (currentTheme) {
        document.body.classList.add(currentTheme);
        if (currentTheme === 'dark-mode') {
            themeToggle.checked = true;
        }
    }

    themeToggle.addEventListener('change', () => {
        document.body.classList.toggle('dark-mode');
        localStorage.setItem('theme', themeToggle.checked ? 'dark-mode' : 'light-mode');
    });

    
    // --- Event Listeners ---
    nameInput.addEventListener('keyup', (event) => {
        if (event.key === 'Enter') {
            handleNameSearch();
        }
    });
    
    nameInput.addEventListener('input', handleAutocomplete);
    photoInput.addEventListener('change', handlePhotoSearch); // Trigger on file selection
    scanWithCameraBtn.addEventListener('click', openCamera);
    closeModalBtn.addEventListener('click', closeCamera);
    captureBtn.addEventListener('click', captureImage);
    searchByProblemBtn.addEventListener('click', handleProblemSearch);
    document.querySelectorAll('.quick-chip').forEach((chip) => {
        chip.addEventListener('click', () => {
            problemInput.value = chip.dataset.query || '';
            handleProblemSearch();
        });
    });
    problemInput.addEventListener('keyup', (event) => {
        if (event.key === 'Enter') {
            handleProblemSearch();
        }
    });
    problemInput.addEventListener('input', handleProblemAutocomplete);

    // Drag and Drop Event Listeners
    dropZone.addEventListener('dragover', (e) => {
        e.preventDefault();
        e.stopPropagation();
        dropZone.classList.add('drag-over');
    });

    dropZone.addEventListener('dragleave', (e) => {
        e.preventDefault();
        e.stopPropagation();
        dropZone.classList.remove('drag-over');
    });

    dropZone.addEventListener('drop', (e) => {
        e.preventDefault();
        e.stopPropagation();
        dropZone.classList.remove('drag-over');
        const files = e.dataTransfer.files;
        if (files.length > 0) {
            photoInput.files = files; // Assign dropped file to the hidden input
            handlePhotoSearch(); // Process the file
        }
    });

    // Scroll to Top Event Listeners
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            scrollToTopBtn.classList.remove('hidden');
        } else {
            scrollToTopBtn.classList.add('hidden');
        }
    });
    scrollToTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // Close autocomplete if user clicks elsewhere
    document.addEventListener('click', (e) => {
        if (e.target !== nameInput && e.target !== problemInput) {
            autocompleteList.classList.add('hidden');
            problemAutocompleteList.classList.add('hidden');
        }
    });


    // --- Handlers ---

    /**
     * Handles the autocomplete suggestions as the user types.
     */
    function handleAutocomplete() {
        const query = nameInput.value.trim().toLowerCase();
        autocompleteList.innerHTML = ''; // Clear previous suggestions

        if (!query) {
            autocompleteList.classList.add('hidden');
            return;
        }

        const suggestions = Object.keys(medicineDatabase).filter(name =>
            name.toLowerCase().startsWith(query)
        );

        if (suggestions.length > 0) {
            suggestions.forEach(suggestion => {
                const item = document.createElement('div');
                // Highlight the matching part of the suggestion
                item.innerHTML = `<strong>${suggestion.substring(0, query.length)}</strong>${suggestion.substring(query.length)}`;
                item.addEventListener('click', () => {
                    nameInput.value = suggestion; // Fill input with suggestion
                    autocompleteList.classList.add('hidden'); // Hide list
                    handleNameSearch(); // Perform search
                });
                autocompleteList.appendChild(item);
            });
            autocompleteList.classList.remove('hidden');
        } else {
            autocompleteList.classList.add('hidden');
        }
    }

    /**
     * Handles autocomplete for the problem/symptom search bar.
     */
    function handleProblemAutocomplete() {
        const query = problemInput.value.trim().toLowerCase();
        problemAutocompleteList.innerHTML = '';

        if (!query) {
            problemAutocompleteList.classList.add('hidden');
            return;
        }

        const suggestions = problemKeywords.filter(keyword => keyword.startsWith(query));

        if (suggestions.length > 0) {
            suggestions.slice(0, 10).forEach(suggestion => { // Show max 10 suggestions
                const item = document.createElement('div');
                item.innerHTML = `<strong>${suggestion.substring(0, query.length)}</strong>${suggestion.substring(query.length)}`;
                item.addEventListener('click', () => {
                    problemInput.value = suggestion;
                    problemAutocompleteList.classList.add('hidden');
                    handleProblemSearch();
                });
                problemAutocompleteList.appendChild(item);
            });
            problemAutocompleteList.classList.remove('hidden');
        } else {
            problemAutocompleteList.classList.add('hidden');
        }
    }

    /**
     * Performs a search based on the text input value.
     */
    function handleNameSearch() {
        const query = nameInput.value.trim().toLowerCase();
        autocompleteList.classList.add('hidden'); // Hide autocomplete on search
        if (!query) return;

        const result = medicineDatabase[query];
        if (result) {
            // Wrap the result in the new data structure for displayResults
            displayResults([{ status: 'found', data: result }], nameResultsArea, nameErrorArea);
        } else {
            // Check for partial matches as a fallback
            const partialMatches = Object.values(medicineDatabase).filter(med => med.name.toLowerCase().includes(query));
            if (partialMatches.length > 0) {
                // Map partial matches to the new data structure
                const displayData = partialMatches.map(med => ({ status: 'found', data: med }));
                displayResults(displayData, nameResultsArea, nameErrorArea);
            } else {
                displayError(nameErrorArea, [problemResultsArea, problemErrorArea]);
            }
        }
    }

    /**
     * Performs a search based on a user's described problem or symptom.
     */
    function handleProblemSearch() {
        const query = problemInput.value.trim().toLowerCase();
        problemAutocompleteList.classList.add('hidden');
        if (!query) return;

        // Find all medicines where the 'usage' description includes the query
        const matchingMedicines = Object.values(medicineDatabase).filter(med =>
            med.usage.toLowerCase().includes(query)
        );

        if (matchingMedicines.length > 0) {
            // Map the results to the data structure expected by displayResults
            const displayData = matchingMedicines.map(med => ({ status: 'found', data: med }));
            displayResults(displayData, problemResultsArea, problemErrorArea);
        } else {
            // If no medicines match the problem, show the error message
            displayError(problemErrorArea, [nameResultsArea, nameErrorArea]);
        }
    }

    async function handlePhotoSearch() {
        const file = photoInput.files[0];
        if (!file) {
            alert('Please select a photo to upload.');
            return;
        }
        await processImage(file);
    }

    /**
     * Calls the Hugging Face Inference API to perform OCR with a specialized model.
     * WARNING: Exposing your API token on the client-side is a security risk.
     * In a production environment, this call should be made from a secure backend server.
     * @param {File|Blob} imageFile The image to be processed.
     * @returns {Promise<string[]>} A promise that resolves to an array of medicine names.
     */
    async function callHuggingFaceApi(imageFile) {
        // IMPORTANT: Replace "YOUR_HUGGING_FACE_TOKEN" with your actual token.
        // This token is for the PharmaLens project.
        const HF_TOKEN = "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";
        const API_URL = "https://api-inference.huggingface.co/models/chinmays18/medical-prescription-ocr";

        console.log(`Calling Hugging Face API for ${imageFile.name || 'capture.jpg'}...`);

        const response = await fetch(API_URL, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${HF_TOKEN}`,
                'Content-Type': 'application/octet-stream' // Sending image as binary data
            },
            body: imageFile,
        });

        if (!response.ok) {
            const errorBody = await response.json();
            console.error("Hugging Face API Error:", errorBody);
            // The model might be loading, which can take time.
            if (errorBody.error && errorBody.error.includes("is currently loading")) {
                alert("The OCR model is starting up. Please wait a minute and try again.");
            }
            throw new Error(`API request failed with status ${response.status}`);
        }

        const result = await response.json();
        console.log("Hugging Face API Response:", result);

        // The model can return the data in a nested structure. We need to handle this.
        if (result && result[0] && result[0].generated_text) {
            try {
                // The model returns a JSON string that needs to be parsed.
                const parsedResult = JSON.parse(result[0].generated_text);
                
                // Extract medicine names from the structured data
                if (parsedResult.medications && Array.isArray(parsedResult.medications)) {
                    return parsedResult.medications.map(med => med.name.toLowerCase());
                }
            } catch (e) {
                console.error("Failed to parse the generated_text from Hugging Face:", e);
                return []; // Return empty on parsing error
            }
        }

        return []; // Return empty array if no medications are found
    }

    /**
     * Takes an image file/blob, shows a spinner, calls the OCR simulation,
     * and displays the results.
     * @param {File|Blob} imageFile The image to process.
     */
    async function processImage(imageFile) {
        // Show spinner and hide other sections
        loadingSpinner.classList.remove('hidden');
        nameResultsArea.classList.add('hidden');
        nameErrorArea.classList.add('hidden');

        try {
            const ocrResults = await callHuggingFaceApi(imageFile);

            if (ocrResults && ocrResults.length > 0) {
                // Process all OCR results, separating found from not-found
                const displayData = ocrResults.map(name => {
                    const medicineData = findMedicine(name);
                    if (medicineData) {
                        return { status: 'found', data: medicineData };
                    } else {
                        return { status: 'not_found', data: { name: name } };
                    }
                });
                displayResults(displayData, nameResultsArea, nameErrorArea);
            } else {
                // This case happens if the OCR finds nothing on the image
                alert("Could not recognize any medicine names from the photo. Please try a clearer image.");
            }

        } catch (error) {
            console.error("Error processing image:", error);
            alert("An error occurred while processing the image. Please try again.");
        } finally {
            // Hide spinner regardless of outcome
            loadingSpinner.classList.add('hidden');
        }
    }

    /**
     * Finds a medicine in the database by trying to match its key or name.
     * This makes the search more robust.
     * @param {string} name The name of the medicine from the OCR result.
     * @returns {object | undefined} The medicine data or undefined if not found.
     */
    function findMedicine(name) {
        if (!name) return undefined;
        const query = name.toLowerCase().trim();
        // First, try a direct key match (e.g., 'paracetamol')
        // Then, search within the 'name' property for a partial match (e.g., 'Paracetamol (Acetaminophen)')
        return medicineDatabase[query] || Object.values(medicineDatabase).find(med => med.name.toLowerCase().includes(query));
    }

    // --- UI Functions ---
    function showLoading() {
        loadingSpinner.classList.remove('hidden');
        nameResultsArea.classList.add('hidden');
        nameErrorArea.classList.add('hidden');
    }

    function createMedicineCard(medicineData) {
        const card = document.createElement('div');
        card.className = 'medicine-card found';

        card.innerHTML = `
            <div class="medicine-info" >
                <h3 class="card-header">${medicineData.name} <span class="toggle-icon">+</span></h3>
                <div class="card-content collapsed">
                    <p><strong>Uses:</strong></p>
                    <p>${medicineData.usage}</p>
                    <p><strong>Common Side Effects:</strong></p>
                    <p>${medicineData.side_effects}</p>
                    <p><strong>Typical Dosage:</strong></p>
                    <p>${medicineData.dosage}</p>
                    <p><strong>Warnings:</strong></p>
                    <p class="warning-text">${medicineData.warnings}</p>
                </div>
            </div>
        `;

        card.querySelector('.card-header').addEventListener('click', (e) => {
            const content = e.currentTarget.nextElementSibling;
            content.classList.toggle('collapsed');
            e.currentTarget.querySelector('.toggle-icon').textContent = content.classList.contains('collapsed') ? '+' : '−';
        });

        return card;
    }

    function createNotFoundCard(medicineName) {
        const card = document.createElement('div');
        card.className = 'medicine-card not-found';

        // Capitalize first letter for display
        const displayName = medicineName.charAt(0).toUpperCase() + medicineName.slice(1);

        card.innerHTML = `
            <div class="medicine-info" >
                <h3 class="card-header">${displayName} <span class="toggle-icon">+</span></h3>
                <div class="card-content collapsed">
                    <p>This medicine was detected on the prescription, but it was not found in our database.</p>
                    <p>Please verify the spelling or consult a healthcare professional for more information.</p>
                </div>
            </div>
        `;

        card.querySelector('.card-header').addEventListener('click', (e) => {
            const content = e.currentTarget.nextElementSibling;
            content.classList.toggle('collapsed');
            e.currentTarget.querySelector('.toggle-icon').textContent = content.classList.contains('collapsed') ? '+' : '−';
        });
        return card;
    }

    function displayResults(dataArray, targetResultsArea, targetErrorArea) {
        // Hide all other result/error areas first
        [nameResultsArea, problemResultsArea, nameErrorArea, problemErrorArea].forEach(el => el.classList.add('hidden'));

        targetErrorArea.classList.add('hidden');
        targetResultsArea.classList.remove('hidden');

        // Clear previous results
        targetResultsArea.innerHTML = ''; // Clear previous content

        // Add a Print button
        const printBtn = document.createElement('button');
        printBtn.textContent = 'Print Results';
        printBtn.className = 'print-button';
        printBtn.onclick = () => {
            window.print();
        };
        targetResultsArea.appendChild(printBtn);

        dataArray.forEach(item => {
            if (item.status === 'found') {
                targetResultsArea.appendChild(createMedicineCard(item.data));
            } else if (item.status === 'not_found') {
                targetResultsArea.appendChild(createNotFoundCard(item.data.name));
            }
        });
    }

    function displayError(targetErrorArea, otherAreasToHide = []) {
        loadingSpinner.classList.add('hidden');
        
        // Hide all result areas and other error areas
        [nameResultsArea, problemResultsArea, nameErrorArea, problemErrorArea].forEach(el => el.classList.add('hidden'));

        // Show the specific error message
        targetErrorArea.classList.remove('hidden');
    }

    // --- Camera Functions ---
    async function openCamera() {
        if (stream) { // If stream already exists, do nothing.
            return;
        }
        try {
            stream = await navigator.mediaDevices.getUserMedia({ 
                video: { facingMode: 'environment' } // Prefer the rear camera
            });
            videoElement.srcObject = stream;
            cameraModal.classList.remove('hidden');
        } catch (err) {
            console.error("Error accessing camera: ", err);
            alert("Could not access the camera. Please ensure you have a camera and have granted permission.");
        }
    }

    function closeCamera() {
        if (stream) {
            stream.getTracks().forEach(track => track.stop());
            stream = null;
            videoElement.srcObject = null;
        }
        cameraModal.classList.add('hidden');
    }

    function captureImage() {
        if (!stream) return;

        const canvas = document.createElement('canvas');
        canvas.width = videoElement.videoWidth;
        canvas.height = videoElement.videoHeight;
        const context = canvas.getContext('2d');
        context.drawImage(videoElement, 0, 0, canvas.width, canvas.height);

        closeCamera();

        // Convert canvas to a Blob (which is like a file) and process it.
        canvas.toBlob(blob => {
            if (blob) {
                // Give the blob a filename for the simulation
                blob.name = "camera-capture.jpg";
                processImage(blob);
            }
        }, 'image/jpeg', 0.95);
    }
});
