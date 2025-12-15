// Wait for the page to load
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("urlform");
  const originalurlInput = document.getElementById("originalurl");
  const customurlInput = document.getElementById("customurl");
  const passwordInput = document.getElementById("password");
  const resetbtn = document.getElementById("resetbtn");
  const qrcontainer = document.getElementById("qrcode");
  const downloadbtn = document.getElementById("downloadbtn");
  const copybtn = document.getElementById("copybtn");
  const resulturlInput = document.getElementById("resulturl");

  let qrCodeInstance; // store the generated QR code

  // Form submission
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const originalurl = originalurlInput.value.trim();
    const customurl = customurlInput.value.trim();
    const password = passwordInput.value.trim();

    if (!originalurl || !customurl || !password) {
      alert("Please fill all fields!");
      return;
    }

    // Create customized URL (example)
    const customizedurl = `https://short.ly/${customurl}`;

    // Display the result
    resulturlInput.value = customizedurl;

    // Generate QR code
    qrcontainer.innerHTML = "";
    qrCodeInstance = new QRCode(qrcontainer, {
      text: customizedurl,
      width: 128,
      height: 128,
    });
  });

  // Copy button
  copybtn.addEventListener("click", () => {
    const customizedurl = resulturlInput.value;
    if (!customizedurl) {
      alert("No URL to copy!");
      return;
    }
    navigator.clipboard.writeText(customizedurl).then(() => {
      alert("URL copied to clipboard!");
    });
  });

  // Download QR code
  downloadbtn.addEventListener("click", function () {
    const img = qrcontainer.querySelector("img");
    if (img) {
      const link = document.createElement("a");
      link.href = img.src;
      link.download = "QRcode.png";
      link.click();
    } else {
      alert("No QR code to download!");
    }
  });

  // Reset all fields
  resetbtn.addEventListener("click", function () {
    form.reset();
    qrcontainer.innerHTML = "";
    resulturlInput.value = "";
  });
});
