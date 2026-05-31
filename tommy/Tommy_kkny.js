function generatePolaroid(){
    const relationType = document.getElementById('relationType').value || 'Kapcsolat';
    const image = document.getElementById('image').value || 'https://via.placeholder.com/500x250?text=Nincs+Kep';
    const strength = document.getElementById('strength').value;
    const description = document.getElementById('description').value || 'Ide jön a leírás...';

    const html = `
<div style="width:520px; max-width:100%; background:linear-gradient(180deg,#fcfaf4 0%,#f3eedf 100%); padding:15px; box-sizing:border-box; box-shadow:0 6px 18px rgba(0,0,0,.18); transform:rotate(-2deg); margin:auto; font-family:'Crimson Text',serif;">
    <div style="height:250px; overflow:hidden; position:relative; background:#ddd;">
        <div style="position:absolute; top:-10px; left:62%; width:75px; height:20px; background:rgba(230,220,190,.85); transform:translateX(-50%) rotate(7deg); box-shadow:0 2px 4px rgba(0,0,0,.12); z-index:5;"></div>
        <img src="${image}" style="width:100%; height:100%; object-fit:cover; display:block;">
    </div>
    <div style="padding-top:18px; color:#333;">
        <h2 style="margin:0 0 12px; text-align:center; font-size:24px; color:#33291d;">${relationType}</h2>
        <div style="text-align:center; font-size:22px; color:#9a7b3e; margin-bottom:15px;">${strength}</div>
        <p style="line-height:1.8; font-size:15px; text-align:justify; margin:0;">${description}</p>
    </div>
</div>`;

    document.getElementById('output').value = html.trim();
}

function copyCode() {
    const outputText = document.getElementById('output');
    if(!outputText.value) {
        alert('Előbb generálj egy kártyát!');
        return;
    }
    outputText.select();
    outputText.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(outputText.value);
    alert('A HTML kód a vágólapra másolva!');
}
