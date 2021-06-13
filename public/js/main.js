let fallbackCopyTextToClipboard = function(text) {
    let textArea = document.createElement("textarea");
    textArea.value = text;

    // Avoid scrolling to bottom
    textArea.style.top = "0";
    textArea.style.left = "0";
    textArea.style.position = "fixed";

    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();

    try {
        let successful = document.execCommand('copy');
        let msg = successful ? 'successful' : 'unsuccessful';
        console.log('Fallback: Copying text command was ' + msg);
    } catch (err) {
        console.error('Fallback: Oops, unable to copy', err);
    }

    document.body.removeChild(textArea);
}
let copyTextToClipboard = function(text) {
    if (!navigator.clipboard) {
        fallbackCopyTextToClipboard(text);
        return;
    }
    navigator.clipboard.writeText(text).then(function() {
        console.log('Async: Copying to clipboard was successful!');
    }, function(err) {
        console.error('Async: Could not copy text: ', err);
    });
}
document.getElementById("javaIPButton").addEventListener("click", () => {
    copyTextToClipboard("jes.earth");
    let oldText = document.getElementById("javaIPButton").innerText;
    document.getElementById("javaIPButton").innerText = "Copied!";
    setTimeout(() => {
        document.getElementById("javaIPButton").innerText = oldText;
    }, 500);
});
document.getElementById("bedrockIPButton").addEventListener("click", () => {
    copyTextToClipboard("162.55.0.248:25566");
    let oldText = document.getElementById("bedrockIPButton").innerText;
    document.getElementById("bedrockIPButton").innerText = "Copied!";
    setTimeout(() => {
        document.getElementById("bedrockIPButton").innerText = oldText;
    }, 500);
});