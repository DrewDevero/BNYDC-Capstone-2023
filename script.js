document.addEventListener("DOMContentLoaded", function() {
    const openPopupBtn = document.getElementById("openPopup");
    const closePopupBtn = document.getElementById("closePopup");
    const champagnePopup = document.getElementById("champagnePopup");
    const text = document.getElementById('curved-text')

    openPopupBtn.addEventListener("click", function() {
        champagnePopup.style.right = "0"; // Move the popup into view from the right
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

    const curveThis = new CircleType(text)
        .radius(325);

    window.addEventListener('resize', () => {
        curveThis.radius(curveThis.element.offsetWidth / 2);
    });

});