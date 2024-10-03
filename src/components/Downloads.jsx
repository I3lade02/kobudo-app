import React from 'react';
import '../Downloads.css';

const Downloads = () => {
    return (
        <section id='downloads'>
            <h2 className='text-center'>Soubory ke stažení</h2>
            <p className='text-center'>Zde najdete soubory potřebné pro připojení se k nám</p>
            <ul className='list text-center'>
                <li><a href="../files/Potvrzeni o prevzeti odpovednosti (cestne prohlasni).docx" download="Potvrzeni o prevzeti odpovednosti">Potvrzení o převzetí odpovědnosti(čestné prohlášení)</a></li>
                <br />
                <li><a href="../files/Potvrzeni o seznameni s PBCH.docx" download="Potvrzeni o seznameni s PBCH">Potvrzení o seznámení s PBCH</a></li>
                <br />
                <li><a href="../files/Pravidla bezpecnosti a chovani.docx" download="Pravidla bezpecnosti a chovani">Pravidla bezpečnosti a chování</a></li>
                <br />
                <li><a href="../files/Pravidla plateb.docx" download="Pravidla plateb">Pravidla plateb</a></li>
                <br />
                <li><a href="../files/Souhlas se zpracovanim osobnich udaju.docx" download="Pravidla se zpracovanim osobnich udaju">Pravidla se zpracováním osobních údajů</a></li>
            </ul>
        </section>
    );
};

export default Downloads;