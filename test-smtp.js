/* eslint-disable @typescript-eslint/no-require-imports */
const fs = require('fs');
const nodemailer = require('nodemailer');
const path = require('path');

async function testSMTP() {
    console.log("🔍 Reading .env.local...");

    try {
        const envPath = path.join(__dirname, '.env.local');
        if (!fs.existsSync(envPath)) {
            console.error("❌ .env.local file not found!");
            return;
        }

        const envContent = fs.readFileSync(envPath, 'utf8');
        const config = {};

        envContent.split('\n').forEach(line => {
            line = line.trim();
            if (line && !line.startsWith('#')) {
                const parts = line.split('=');
                const key = parts[0].trim();
                // Join back the rest in case password has = in it
                const value = parts.slice(1).join('=').trim();
                config[key] = value;
            }
        });

        const host = config.SMTP_HOST || 'smtp.gmail.com';
        const port = Number(config.SMTP_PORT) || 465;
        const user = config.SMTP_USER;
        const pass = config.SMTP_PASS;

        console.log(`\nTesting Configuration:`);
        console.log(`Host: ${host}`);
        console.log(`Port: ${port}`);
        console.log(`User: ${user}`);
        console.log(`Pass: ${pass ? '******' + pass.slice(-3) : 'UNDEFINED'} (Length: ${pass ? pass.length : 0})`);

        if (!user || !pass) {
            console.error("❌ USER or PASS is missing in .env.local");
            return;
        }

        const transporter = nodemailer.createTransport({
            host,
            port,
            secure: port === 465,
            auth: { user, pass },
        });

        console.log("\nAttempting connection to Gmail...");
        await transporter.verify();
        console.log("✅ SUCCESS! Your SMTP credentials are working perfectly.");

    } catch (error) {
        console.error("\n❌ CONNECTION FAILED:");
        console.error(error);

        if (error.code === 'EAUTH') {
            console.log("\n💡 TIP: Use a 'Google App Password', not your login password.");
            console.log("    Go to: https://myaccount.google.com/apppasswords");
        }
    }
}

testSMTP();
