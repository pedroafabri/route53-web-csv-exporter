function export53({className, filename} = {className: 'awsui_row_wih1l_15664_301', filename: 'export_53.csv'}) {
    const rows = document.getElementsByClassName(className);
    let csv = 'Record name,Type,Routing policy,Differentiator,Alias,Value/Route traffic to,TTL (seconds),Health check ID,Evaluate target health,Record ID';

    for (let row of rows) {
        csv += '\n' + buildCSVLine(row.children)
    }

    download(filename, csv);
}

function buildCSVLine(data) {
  const [
    _, 
    recordName, 
    type, 
    routingPolicy, 
    differentiator, 
    alias, 
    value, 
    ttl, 
    healtCheckId, 
    evaluateHealth, 
    recordId
  ] = data;

  return ''
      + recordName?.innerHTML?.replaceAll(/<.*?>/gi, '').trim() + ','
      + type?.innerHTML?.replaceAll(/<.*?>/gi, '').trim() + ','
      + routingPolicy?.innerHTML?.replaceAll(/<.*?>/gi, '').trim() + ','
      + differentiator?.innerHTML?.replaceAll(/<.*?>/gi, '').trim() + ','
      + alias?.innerHTML?.replaceAll(/<.*?>/gi, '').trim() + ','
      + value?.innerHTML?.replaceAll(/<.*?>/gi, '').trim() + ','
      + ttl?.innerHTML?.replaceAll(/<.*?>/gi, '').trim() + ','
      + healtCheckId?.innerHTML?.replaceAll(/<.*?>/gi, '').trim() + ','
      + evaluateHealth?.innerHTML?.replaceAll(/<.*?>/gi, '').trim() + ','
      + recordId?.innerHTML?.replaceAll(/<.*?>/gi, '').trim();
}

/**
 * Thanks https://stackoverflow.com/questions/3665115
 */
function download(filename, text) {
  const element = document.createElement('a');
  element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
  element.setAttribute('download', filename);

  element.style.display = 'none';
  document.body.appendChild(element);

  element.click();

  document.body.removeChild(element);
}