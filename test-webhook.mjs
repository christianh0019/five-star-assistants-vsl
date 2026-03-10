fetch("https://hooks.airtable.com/workflows/v1/genericWebhook/appvyWh9e0V6IA0uZ/wfloeqnJ6kyNa0Ehy/wtrDkmXlkOsUthPOE", {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
    },
    body: JSON.stringify({ test: "data" })
}).then(res => {
    console.log("Status:", res.status);
    return res.text();
}).then(text => console.log("Text:", text))
.catch(err => console.error(err));
