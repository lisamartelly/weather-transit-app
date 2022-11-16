
function Modal() {

    function Hide() {
        document.getElementById("modal-overlay").classList.add("hidden")
    }

    return(
    <div id="modal-overlay" className="modal-overlay">
        <div className="modal-wrapper">
            
            <div>
                <p>This page is formatted for a 400x800 monitor. Please excuse the weirdness. If you want a similar setup of your own, email martelly.lisa@gmail.com and she can help you out.</p>
            </div>
            <div>
                <p id="close-modal" className="close-button" onClick={Hide}>Close</p>    
            </div>
        </div>
    </div>
    )
}

export default Modal;
