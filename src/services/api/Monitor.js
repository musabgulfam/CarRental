const apiMonitor = response => {
  response.data.msg === "success !"
    ? console.log(
        '%c API_RESPONSE! %c' + response.config.url,
        'background: #222; color: #bada55; font-size:16px',
        'background:red;color:white;',
      )
    : console.log(
        '%c API_RESPONSE! %c' + response.config.url,
        'background: #222; color: #ff7788; font-size:16px',
        'background:red;color:white;',
      );
  console.log(response.data.msg);
};

export default apiMonitor;
