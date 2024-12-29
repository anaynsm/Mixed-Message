// Arrays of data
const zodiacSigns = ["Aries", "Taurus", "Gemini", "Cancer", "Leo", "Virgo", "Libra", "Scorpio", "Sagittarius", "Capricorn", "Aquarius", "Pisces"];
const themes = ["love", "career", "health", "luck", "friendships", "adventure"];
const advice = [
    "Take bold steps to achieve your goals.",
    "Spend time reflecting on your emotions.",
    "Trust your instincts to make the right decision.",
    "A chance encounter could lead to exciting opportunities.",
    "Focus on balance and clarity for a successful day.",
    "Keep an open mind and embrace new experiences."
];

// Function to get a random element from an array
function getRandomElement(array) {
    return array[Math.floor(Math.random() * array.length)];
}