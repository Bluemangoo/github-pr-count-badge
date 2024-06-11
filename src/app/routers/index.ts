import router from "../router";

router.on("/", async function (data, response) {
    response.redirectUrl = "https://github.com/Bluemangoo/github-pr-count-badge";
    response.redirect = true;
});
