function load_script (url) {
  return new Promise(resolve => {
    let GMR_script = document.createElement("script");

    GMR_script.src = url; //'//games.mail.ru/js/kit_client.js?r=' + Math.random();
    GMR_script.async = true;
    GMR_script.onload = () => {
      resolve();
    };

    document.head.appendChild(GMR_script);
  });
}
