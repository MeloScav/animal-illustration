"use strict";

function ready(fn) {
    if (document.readyState != "loading") {
        fn();
    } else {
        document.addEventListener("DOMContentLoaded", fn);
    }
}

ready(() => {
    const illustrations = document.querySelectorAll(".illustration");
    const illustrationsAnimationDuration =
        parseFloat(
            getComputedStyle(document.body).getPropertyValue(
                "--illustration-duration"
            )
        ) * 1000;
    let currentIllustration = 0;

    if (illustrations.length > 0) {
        const addAnimateClass = () => {
            illustrations.forEach((illustration, index) => {
                illustration.classList.remove("animate");
            });
            illustrations[currentIllustration].classList.add("animate");
            currentIllustration++;

            if (currentIllustration === illustrations.length) {
                currentIllustration = 0;
            }
        };

        addAnimateClass();
        setInterval(addAnimateClass, illustrationsAnimationDuration);
    }
});