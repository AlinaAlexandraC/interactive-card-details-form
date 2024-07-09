import "./CompleteState.css";

const CompleteState = () => {
    return (
        <div className="complete-state-container d-flex flex-column justify-content-center align-items-center">
            <div className="complete-image">
                <svg width="80" height="80" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="40" cy="40" r="40" fill="url(#a)" /><path d="M28 39.92 36.08 48l16-16" stroke="#fff" stroke-width="3" /><defs><linearGradient id="a" x1="-23.014" y1="11.507" x2="0" y2="91.507" gradientUnits="userSpaceOnUse"><stop stop-color="#6348FE" /><stop offset="1" stop-color="#610595" /></linearGradient></defs></svg>
            </div>
            <div className="messages">
                <div className="thank-you pt-4 pb-2">THANK YOU!</div>
                <div className="confirmation-message pb-4">We've added your card details</div>
            </div>
            <div className="confirm-button p-2 mt-3">
                Continue
            </div>
        </div>
    );
};

export default CompleteState;