
// How to get a CSS rule with JS, media query rule are type 4:
// 1- document.styleSheets return an array of appliesd stylesheets
// 2- document.styleSheets[n].cssRules return an array of rules on that stylesheet
// 3- you can look for type 4 to found media query

const $ = document;
$.querySelector(`h1`).innerText = ` The rule on CSS file is: "` + $.styleSheets[0].cssRules[1].conditionText + `" and the type is: "` + $.styleSheets[0].cssRules[1].type + `"`

// -------------------------------------------------------------------------------

// How to apply a media query rule from JS
// window.matchMedia("your rule")  is where you define the rule
// window.matchMedia("your rule").matches return if the rule matches

window.addEventListener('resize', () => {
    console.log("click")
    if (window.matchMedia("(max-width: 60rem)").matches) {
        $.querySelector('body').style.backgroundColor = "green";
        $.querySelector(`h2`).innerText = "Background color rule applied by JS"
    } else {
        $.querySelector('body').style.backgroundColor = null; 
        $.querySelector(`h2`).innerText = ""

    }
})

