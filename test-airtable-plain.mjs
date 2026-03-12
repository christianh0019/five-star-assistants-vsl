fetch("https://hooks.airtable.com/workflows/v1/genericWebhook/appvyWh9e0V6IA0uZ/wflhKRnmDDQCRWAb3/wtrwQNXYR7KJadLI9", {
    method: "POST",
    headers: {
        "Content-Type": "text/plain",
    },
    body: JSON.stringify({ name: "Plain Text Test", email: "plain@test.com", whyConsidered: "Because I am plain text" })
}).then(res => res.text()).then(text => console.log("Response:", text)).catch(err => console.error(err));
