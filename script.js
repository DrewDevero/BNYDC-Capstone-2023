document.addEventListener("DOMContentLoaded", function() {
    const closePopupBtn = document.getElementById("closePopup");
    const champagnePopup = document.getElementById("champagnePopup");
    const text = document.getElementById('curved-text');
    const textTwo = document.getElementById('curved-text-two');

    const curveThis = new CircleType(text)
        .radius(325);

    window.addEventListener('resize', () => {
        curveThis.radius(curveThis.element.offsetWidth / 2);
    });

    const curveThisTwo = new CircleType(textTwo)
        .radius(325);

    window.addEventListener('resize', () => {
        curveThisTwo.radius(curveThisTwo.element.offsetWidth / 2);
    });

    closePopupBtn.addEventListener("click", function() {
        champagnePopup.style.right = "-100%"; // Move the popup off the screen to the right
    });

    document.addEventListener('mousemove', function(e) {
        const mouseY = e.clientY;
        const windowHeight = window.innerHeight;
      
        // Calculate the position to trigger the hover effect
        const triggerPosition = 0.335 * windowHeight;
      
        if (mouseY >= triggerPosition) {
            champagnePopup.style.right = "0";
        } else {
            champagnePopup.style.right = "-100%";
        }
      });

});