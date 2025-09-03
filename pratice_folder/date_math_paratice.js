//Level 1 (Basic)
//Current date and time console par print karo.
//👉 Output: 1 September 2025, 11:30 PM

 const now = new Date();
 const options = {
   month: "long",
    day: "numeric",
    year : "numeric",
    hour: "numeric",
    minute: "2-digit",
    hour12: true
 };
 const formattedDate = now.toLocaleString("en-US",options);
 console.log(formattedDate);
 ///note  /// 
 
// Jab aap month, day, ya year ke liye "numeric" use karte ho to iska matlab hota hai simple number //form show karna:

// 1. "numeric" ka use

//Example:

//month: "numeric" → 9 (September)
//day: "numeric" → 3
//year: "numeric" → 2025
//Agar aap "long" use karte ho month ke liye to full naam milta hai → September.

//2. "2-digit" ka use (minute)
//minute: "2-digit" ka matlab hai ke minutes hamesha 2 digit mein dikhayein.

//Example:

//minute: "numeric" → 5
//minute: "2-digit" → 05

//Yeh formatting ke liye helpful hota hai taake proper clock style ban jaye (hh:mm).
//3. hour12: true

//Ye option batata hai ke aapko 12-hour clock format (AM/PM ke sath) chahiye.
//Agar false karoge to 24-hour format milega.

//Example:

//hour12: true → 3:45 PM
//hour12: false → 15:45
//4. "en-US" ka use

//toLocaleString("en-US", options) ka matlab hai ke aap US English locale ke hisaab se formatting //chahte ho.

//Har locale ka apna tareeqa hota hai date aur time dikhane ka:
//
//"en-US" → September 3, 2025, 5:45 PM
//"en-GB" (UK) → 3 September 2025 at 17:45
//"ur-PK" (Urdu, Pakistan) → ۳ ستمبر، ۲۰۲۵، ۵:۴۵ PM
//Isliye "en-US" specify karne ka matlab hai ke date/time English (United States style) mein aaye.

//👉 Short summary:
//"numeric" → simple number format.
//"2-digit" → hamesha 2 digit (01, 02 …).
//hour12: true → AM/PM wala 12-hour format.
//"en-US" → formatting English (US style) mein ho.****** */