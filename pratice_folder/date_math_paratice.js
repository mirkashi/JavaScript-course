//Level 1 (Basic)
//Current date and time console par print karo.
//👉 Output: 1 September 2025, 11:30 PM

 const now = new Date();
 const options = {
    day: "numeric",
    month: "long",
    year : "numeric",
    hour: "numeric",
    minute: "2-digit",
    hour12: true
 };
 const formattedDate = now.toLocaleString("en-US",options);
 console.log(formattedDate);