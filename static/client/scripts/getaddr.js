fetch('/getAddr')
  .then(res => res.json())
  .then(data => {
    console.info(data)
    let content = `@ ${data.url}`
    document.querySelector('#webAddr').innerHTML = content;
    document.querySelector('#showWebAddr').innerHTML = content;
  })