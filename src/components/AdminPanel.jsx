import React, { useState } from 'react';

const AdminPanel = () => {
    const [file, setFile] = useState(null);

    const handleUpload = async () => {
        const formData = new FormData();
        formData.append('file', file);

        const response = await fetch('https://www.choki-kobudo-ryu.cz/api/upload.php', {
            method: 'POST',
            body: formData,
        });

        const data = await response.json();
        if (data.success) {
            alert('Soubor byl úspěšně nahrán!');
        } else {
            alert('Náhrání selhalo: ' + data.message);
        }
    };

    return (
        <div>
            <h1>Admin panel</h1>
            <input type='file' onChange={(e) => setFile(e.target.files[0])} />
            <button onClick={handleUpload}>Nahrát soubor</button>
        </div>
    );
};

export default AdminPanel;