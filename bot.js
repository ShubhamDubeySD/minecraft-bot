const { ping } = require('bedrock-protocol');

const host = 'royalsmp123.mcsh.gg';
const port = 19132;

console.log("Bedrock server ko jagane ka mission shuru ho gaya hai! 🚀");

async function pingServer() {
    try {
        const response = await ping({ host, port });
        console.log("Server ekdam zinda hai bhai! Details:", response.edition, response.motd);
    } catch (error) {
        console.log("Server so raha hai ya wake up ho raha hai...", error.message);
    }
}

async function runLoop() {
    const startTime = Date.now();
    const duration = 5 * 60 * 1000; // 5 minute continuous ping

    while (Date.now() - startTime < duration) {
        await pingServer();
        await new Promise(resolve => setTimeout(resolve, 20000)); // Har 20 second me ping
    }
    console.log("Session pura ho gaya, script exit ho rahi hai.");
}

runLoop();
