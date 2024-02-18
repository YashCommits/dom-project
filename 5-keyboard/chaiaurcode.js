window.addEventListener('keydown', function(e) {
    insert.innerHTML=`
    <div class="color">
    <table>
    <tr>
        <th>Key</th>
        <th>keyCode</th>
        <th>code</th>
    </tr>
    <tr>
        <td>${e.key}</td>
        <td>${e.keyCode}</td>
        <td>${e.code}</td>
    </tr>
    </table>
    </div>
    `;}); 