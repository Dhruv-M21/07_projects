console.log('Project 5');

const insert = document.querySelector('#insert');
window.addEventListener('keydown', function (e) {
  insert.innerHTML = `
  <div class="table">
  <table>
    <tr>
      <th>Key</th>
      <th>keyCode</th>
      <th>Code</th>
    </tr>
    <tr>
    <td>${e.key === ' ' ? 'Space' : e.key}</td>
    <td>${e.keyCode}</td> 
    <td>${e.code}</td>
    </tr>
  </table>
  </div>`;
});
