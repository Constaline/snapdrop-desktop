(function () {
  fetch('/getAddr')
    .then(res => res.json())
    .then(data => {
      console.info(data)
      let content = `@ ${data.url}`
      document.querySelector('#webAddr').innerHTML = content;
      document.querySelector('#showWebAddr').innerHTML = content;

      // add QRCode for mobile device
      new QRCode(document.querySelector('#qrcode'), {
        text: data.url,
        width: 128,
        height: 128,
        colorDark : "#000000",
        colorLight : "#ffffff",
        correctLevel : QRCode.CorrectLevel.H
      });
    })
})()